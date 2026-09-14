import { normalizeUrl } from './normalize';
import type { DropRecord, NormalizedUrl, ParseNotice, ParsedInput, Side } from './types';

/**
 * Input parsing.
 *
 * There is one fixed input shape and no column-mapping step: the user downloads
 * the template, fills two columns, and uploads it. The two columns are
 * independent lists -- nothing pairs row N of one with row N of the other -- so
 * blank cells are simply skipped rather than shifting anything.
 */

/** Per list, not per file. Above this the job refuses to start. */
export const ROW_LIMIT = 2000;

const TAB = '\t';

const OLD_HEADERS = new Set(['eski_url', 'old_url', 'eski url', 'old url']);
const NEW_HEADERS = new Set(['yeni_url', 'new_url', 'yeni url', 'new url']);

export type DelimitedTable = {
  rows: string[][];
  delimiter: string;
};

/**
 * Detect the delimiter from the candidate that appears most often outside
 * quotes. Turkish Excel writes ';' when it saves a CSV, which is the single
 * most common way a correctly filled template arrives unreadable.
 */
function detectDelimiter(text: string): string {
  const candidates = [',', ';', TAB];
  const counts = new Map(candidates.map((candidate) => [candidate, 0]));
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"') {
      if (quoted && text[i + 1] === '"') i += 1;
      else quoted = !quoted;
      continue;
    }
    if (!quoted && counts.has(char)) counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  let best = ',';
  let bestCount = -1;
  for (const candidate of candidates) {
    const count = counts.get(candidate) ?? 0;
    if (count > bestCount) {
      best = candidate;
      bestCount = count;
    }
  }
  return best;
}

/** RFC 4180 parsing: doubled quotes escape, quoted fields may span newlines. */
export function parseDelimited(text: string, forced?: string): DelimitedTable {
  const withoutBom = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  const delimiter = forced ?? detectDelimiter(withoutBom);

  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;

  const endField = () => {
    row.push(field);
    field = '';
  };
  const endRow = () => {
    endField();
    // A '#' comment line is how the template explains itself. It survives a
    // round trip through Excel, so it has to be skipped on the way back in.
    const isComment = row.length > 0 && row[0].trimStart().startsWith('#');
    if (!isComment) rows.push(row);
    row = [];
  };

  for (let i = 0; i < withoutBom.length; i += 1) {
    const char = withoutBom[i];

    if (quoted) {
      if (char === '"') {
        if (withoutBom[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"' && field === '') {
      quoted = true;
    } else if (char === delimiter) {
      endField();
    } else if (char === '\n') {
      endRow();
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field !== '' || row.length > 0) endRow();

  return { rows: rows.filter((entry) => entry.some((cell) => cell.trim() !== '')), delimiter };
}

export type ColumnRead = {
  oldValues: string[];
  newValues: string[];
  /** No recognised header row; the first two columns were assumed. */
  assumedColumns: boolean;
  /** The file only ever had one column. */
  singleColumn: boolean;
};

const headerKey = (cell: string) => cell.trim().toLowerCase().replace(/\s+/g, ' ');

/**
 * Read the two lists out of a table.
 *
 * Headers may appear in any order. When they are missing the first column is
 * taken as the old list and the second as the new one -- the user is told, in
 * writing, rather than asked.
 */
export function readColumns(rows: string[][]): ColumnRead {
  const width = rows.reduce((max, row) => Math.max(max, row.length), 0);

  let headerIndex = -1;
  let oldColumn = 0;
  let newColumn = 1;

  for (let i = 0; i < rows.length; i += 1) {
    const keys = rows[i].map(headerKey);
    const foundOld = keys.findIndex((key) => OLD_HEADERS.has(key));
    const foundNew = keys.findIndex((key) => NEW_HEADERS.has(key));
    if (foundOld !== -1 && foundNew !== -1) {
      headerIndex = i;
      oldColumn = foundOld;
      newColumn = foundNew;
      break;
    }
  }

  const body = headerIndex === -1 ? rows : rows.slice(headerIndex + 1);
  const column = (index: number) =>
    body.map((row) => (row[index] ?? '').trim()).filter((cell) => cell !== '');

  return {
    oldValues: column(oldColumn),
    newValues: width === 1 ? [] : column(newColumn),
    assumedColumns: headerIndex === -1,
    singleColumn: width === 1,
  };
}

/** Two raw lists, however they were collected, turned into matching input. */
export function prepareInputs(
  oldValues: string[],
  newValues: string[],
  options: { includeQuery: boolean; stripLanguagePrefix: boolean },
): ParsedInput {
  const drops: DropRecord[] = [];
  const notices: ParseNotice[] = [];

  const collect = (values: string[], side: Side) => {
    const seen = new Set<string>();
    const kept: NormalizedUrl[] = [];
    let collapsed = 0;

    for (const value of values) {
      const result = normalizeUrl(value, options);
      if (!result.ok) {
        drops.push({ value, reason: result.reason, side });
        continue;
      }

      // Rows that differ only by query string stay separate when queries are
      // ignored: collapsing them would hide a conflict the user has to see.
      const key = options.includeQuery
        ? result.value.path
        : result.value.path + '?' + (result.value.query ?? '');

      if (seen.has(key)) {
        drops.push({ value, reason: 'duplicate', side });
        collapsed += 1;
        continue;
      }
      seen.add(key);
      kept.push(result.value);
    }

    if (collapsed > 0) notices.push({ kind: 'collapsed', side, count: collapsed });
    return kept;
  };

  const oldUrls = collect(oldValues, 'old');
  const newUrls = collect(newValues, 'new');

  /**
   * Rows that need no redirect.
   *
   * Same path is not enough: in a domain migration every path exists on both
   * sides, and treating those as "nothing to do" would silently delete the
   * entire redirect map. A row is only dropped when the hosts agree, or when at
   * least one side carried no host at all.
   */
  const newHostsByPath = new Map<string, Set<string>>();
  for (const entry of newUrls) {
    const hosts = newHostsByPath.get(entry.path);
    if (hosts) hosts.add(entry.host ?? '');
    else newHostsByPath.set(entry.path, new Set([entry.host ?? '']));
  }

  const unchanged: string[] = [];
  const oldKept = oldUrls.filter((entry) => {
    const hosts = newHostsByPath.get(entry.path);
    if (!hosts) return true;
    const host = entry.host ?? '';
    const sameSite = host === '' || hosts.has('') || hosts.has(host);
    if (!sameSite) return true;
    unchanged.push(entry.original);
    drops.push({ value: entry.original, reason: 'same-as-source', side: 'old' });
    return false;
  });

  const hostsOf = (list: NormalizedUrl[]) =>
    new Set(list.map((entry) => entry.host).filter((host): host is string => Boolean(host)));
  const oldHosts = hostsOf(oldUrls);
  const newHosts = hostsOf(newUrls);
  const movedFrom = [...oldHosts].find((host) => newHosts.size > 0 && !newHosts.has(host));
  if (movedFrom) {
    notices.push({ kind: 'domain-change', from: movedFrom, to: [...newHosts][0] });
  }

  const dropCounts = new Map<string, number>();
  for (const drop of drops) {
    if (drop.reason === 'duplicate' || drop.reason === 'same-as-source') continue;
    const key = drop.side + ':' + drop.reason;
    dropCounts.set(key, (dropCounts.get(key) ?? 0) + 1);
  }
  for (const [key, count] of dropCounts) {
    const [side, reason] = key.split(':');
    notices.push({
      kind: 'dropped',
      side: side as Side,
      reason: reason as DropRecord['reason'],
      count,
    });
  }

  return { old: oldKept, new: newUrls, unchanged, drops, notices };
}

/**
 * The row limit, checked before any work starts.
 *
 * The limit is per list, and going over it stops the job rather than silently
 * taking the first 2000 rows -- a user who does not notice the truncation
 * migrates a site with an incomplete redirect map.
 */
export function rowLimitNotices(oldCount: number, newCount: number): ParseNotice[] {
  const notices: ParseNotice[] = [];
  if (oldCount > ROW_LIMIT) {
    notices.push({ kind: 'row-limit', side: 'old', count: oldCount, limit: ROW_LIMIT });
  }
  if (newCount > ROW_LIMIT) {
    notices.push({ kind: 'row-limit', side: 'new', count: newCount, limit: ROW_LIMIT });
  }
  return notices;
}

/** Split a pasted textarea into one URL per line. */
export const splitPasted = (text: string): string[] =>
  text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '' && !line.startsWith('#'));
