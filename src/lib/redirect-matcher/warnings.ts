import { FANOUT_LIMIT } from './defaults';
import type { MatchRow, NormalizedUrl, WarningKind } from './types';

/**
 * Row-level warnings.
 *
 * All of these are about the shape of the redirect map as a whole rather than
 * any single score, so they run once over the finished rows.
 */

/** The target of `row`, as a comparison path, or undefined when there is none. */
function targetPath(row: MatchRow, targets: NormalizedUrl[]): string | undefined {
  if (row.chosen < 0) return undefined;
  const candidate = row.candidates[row.chosen];
  return candidate ? targets[candidate.target].path : undefined;
}

export function annotateWarnings(
  rows: MatchRow[],
  sources: NormalizedUrl[],
  targets: NormalizedUrl[],
): void {
  const sourceIndexByPath = new Map<string, number[]>();
  sources.forEach((source, index) => {
    const list = sourceIndexByPath.get(source.path);
    if (list) list.push(index);
    else sourceIndexByPath.set(source.path, [index]);
  });

  const fanout = new Map<string, number>();
  for (const row of rows) {
    const path = targetPath(row, targets);
    if (path) fanout.set(path, (fanout.get(path) ?? 0) + 1);
  }

  /** Where each source row points, by source path, for the loop check. */
  const targetBySourceIndex = new Map<number, string>();
  rows.forEach((row) => {
    const path = targetPath(row, targets);
    if (path) targetBySourceIndex.set(row.source, path);
  });

  for (const row of rows) {
    const warnings = new Set<WarningKind>(row.warnings);
    const path = targetPath(row, targets);

    if (path) {
      // The target is itself a URL the user listed as old, so following this
      // redirect lands on another redirect.
      const chainTargets = sourceIndexByPath.get(path);
      if (chainTargets) {
        warnings.add('chain');
        // A -> B and B -> A. Only a loop when the other row points back here.
        const here = sources[row.source].path;
        if (chainTargets.some((index) => targetBySourceIndex.get(index) === here)) {
          warnings.add('loop');
        }
      }

      if ((fanout.get(path) ?? 0) > FANOUT_LIMIT) warnings.add('many-to-one');
    }

    // Two old URLs that differ only by query string collapse onto one server
    // rule once queries are ignored. Both rows are kept so the conflict is
    // visible, and the export says the rule cannot tell them apart.
    const sameNormalizedPath = sourceIndexByPath.get(sources[row.source].path);
    if (sameNormalizedPath && sameNormalizedPath.length > 1) warnings.add('query-only');

    // The coverage labels are deliberately not repeated here. They already
    // appear in the reason column, and showing the same words twice in adjacent
    // columns reads as two separate problems.

    row.warnings = [...warnings];
  }
}
