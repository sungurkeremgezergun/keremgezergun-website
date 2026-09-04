import { requestPath } from './normalize';
import type {
  Confidence,
  MatchRow,
  MatcherSettings,
  Reason,
  UrlView,
  WarningKind,
} from './types';

/**
 * Export formats.
 *
 * Two rules govern everything here. Rows always carry the user's original
 * strings, never the folded comparison form -- a server rule written against
 * '/urun/sik-canta' never fires on a site whose real path is
 * '/Ürün/Şık-Çanta'. And every value that lands in a server config is escaped,
 * because an unescaped one does not fail politely: it breaks the user's server.
 */

const NEWLINE = '\r\n';

/** Server rules match the path; the query string is handled by a warning. */
const stripQuery = (path: string): string => path.split('?')[0];

export type ExportRow = {
  /** The old URL exactly as the user supplied it. */
  from: string;
  /** The new URL exactly as the user supplied it, or their hand-typed override. */
  to: string;
  /** Request path of `from`, for server rules. */
  fromPath: string;
  /** `to` rendered as a path or an absolute URL, per the output setting. */
  toOutput: string;
  score: number;
  confidence: Confidence;
  reasons: Reason[];
  warnings: WarningKind[];
};

export type ExportSets = {
  /** Selected rows with a target. These are what every format writes. */
  included: ExportRow[];
  /** Rows the matcher could not place, offered as a separate file. */
  unmatched: ExportRow[];
};

function renderTarget(original: string, settings: MatcherSettings): string {
  const path = requestPath(original);
  if (!settings.absoluteOutput) return path;
  const host = settings.outputHost.replace(/^https?:\/\//i, '').replace(/\/$/, '');
  if (!host) return path;
  return `https://${host}${path}`;
}

/**
 * Only `original` is read from the two lists, so the interface can pass the
 * lightweight views it got back from the worker; a full `MatchReport` also fits.
 */
export function buildExportRows(
  report: { rows: MatchRow[]; old: UrlView[]; new: UrlView[] },
  settings: MatcherSettings,
): ExportSets {
  const included: ExportRow[] = [];
  const unmatched: ExportRow[] = [];

  for (const row of report.rows) {
    const source = report.old[row.source];
    const candidate = row.chosen >= 0 ? row.candidates[row.chosen] : undefined;
    // A defined manual target wins even when it is empty: the user cleared the
    // field deliberately, which means this row has no target.
    const target =
      row.manualTarget !== undefined
        ? row.manualTarget.trim()
        : candidate
          ? report.new[candidate.target].original
          : '';

    const entry: ExportRow = {
      from: source.original,
      to: target,
      fromPath: requestPath(source.original),
      toOutput: target ? renderTarget(target, settings) : '',
      score: candidate ? candidate.score : 0,
      confidence: row.confidence,
      reasons: candidate ? candidate.reasons : [],
      warnings: row.warnings,
    };

    if (row.selected && target) included.push(entry);
    else if (!target) unmatched.push(entry);
  }

  return { included, unmatched };
}

/* ------------------------------------------------------------------ CSV ---- */

const csvCell = (value: string): string =>
  /[",;\r\n\t]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;

const csvLine = (cells: string[]): string => cells.map(csvCell).join(',');

/**
 * A UTF-8 byte order mark.
 *
 * Without it Excel reads the file as the system code page and every Turkish
 * character arrives broken, which is indistinguishable from the tool having
 * mangled the data.
 */
export const CSV_BOM = '\uFEFF';

export type CsvLabels = {
  header: string[];
  confidence: Record<Confidence, string>;
  reason: Record<Reason, string>;
  warning: Record<WarningKind, string>;
};

export function toCsv(rows: ExportRow[], labels: CsvLabels): string {
  const body = rows.map((row) =>
    csvLine([
      row.from,
      row.to,
      String(row.score),
      labels.confidence[row.confidence],
      row.reasons.map((reason) => labels.reason[reason]).join(' / '),
      row.warnings.map((warning) => labels.warning[warning]).join(' / '),
    ]),
  );
  return CSV_BOM + [csvLine(labels.header), ...body].join(NEWLINE) + NEWLINE;
}

/** The shape the WordPress "Redirection" plugin imports. */
export function toRedirectionCsv(rows: ExportRow[]): string {
  const header = csvLine(['source', 'target', 'regex', 'code']);
  const body = rows.map((row) => csvLine([row.fromPath, row.toOutput, 'false', '301']));
  return CSV_BOM + [header, ...body].join(NEWLINE) + NEWLINE;
}

/* --------------------------------------------------------------- Apache ---- */

/** Escape every regex metacharacter. '/' is not one, and escaping it is noise. */
const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Apache accepts quoted arguments; inside them '"' and '\' need escaping. */
const apacheArg = (value: string): string => `"${value.replace(/([\\"])/g, '\\$1')}"`;

/**
 * Apache rules, as `RedirectMatch` rather than `Redirect`.
 *
 * `Redirect` matches by prefix, so a rule for '/elbise' also catches
 * '/elbise-mavi' and every path beneath it. The anchored regex below matches
 * exactly the one path, with or without a trailing slash.
 */
export function toHtaccess(rows: ExportRow[], notes: string[]): string {
  const lines = notes.map((note) => `# ${note}`);
  for (const row of rows) {
    if (row.warnings.includes('query-only')) {
      lines.push(`# ${row.fromPath} — query string ignored; this rule matches the path only`);
    }
    const pattern = `^${escapeRegex(stripQuery(row.fromPath))}/?$`;
    lines.push(`RedirectMatch 301 ${apacheArg(pattern)} ${apacheArg(row.toOutput)}`);
  }
  return lines.join('\n') + '\n';
}

/* ---------------------------------------------------------------- nginx ---- */

/** nginx string escaping inside a quoted token. */
const nginxArg = (value: string): string => `"${value.replace(/([\\"])/g, '\\$1')}"`;

/**
 * nginx rules as a `map`, which is how you express two thousand of them.
 *
 * The key is `$uri`, not `$request_uri`: `$uri` is the decoded path without the
 * query string, which is what the comparison and the Apache output both use.
 */
export function toNginx(rows: ExportRow[], notes: string[]): string {
  const lines = notes.map((note) => `# ${note}`);
  lines.push('# http context:');
  lines.push('map $uri $redirect_target {');
  lines.push('    default "";');
  for (const row of rows) {
    lines.push(`    ${nginxArg(stripQuery(row.fromPath))} ${nginxArg(row.toOutput)};`);
  }
  lines.push('}');
  lines.push('');
  lines.push('# server context:');
  lines.push('# if ($redirect_target != "") {');
  lines.push('#     return 301 $redirect_target;');
  lines.push('# }');
  return lines.join('\n') + '\n';
}

/* ----------------------------------------------------------- unmatched ---- */

export function toUnmatchedCsv(rows: ExportRow[], header: string[]): string {
  const body = rows.map((row) => csvLine([row.from, String(row.score)]));
  return CSV_BOM + [csvLine(header), ...body].join(NEWLINE) + NEWLINE;
}
