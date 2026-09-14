import { FANOUT_LIMIT } from './defaults';
import type { MatchRow, WarningKind } from './types';

/**
 * Row-level warnings.
 *
 * All of these are about the shape of the redirect map as a whole rather than
 * any single score, so they run over the finished rows rather than inside the
 * scorer.
 *
 * Recomputed rather than accumulated: the function returns new rows and keeps
 * only the warnings it does not own, so the interface can call it again after
 * the user retargets a row without stale warnings piling up. That matters,
 * because a hand-picked target is the one realistic way to create a chain --
 * at match time a target that is also an old URL has already been separated out
 * as needing no redirect.
 */

/** The part of a URL these checks compare: where it lives. */
export type SiteRef = { path: string; host?: string };

/** Warnings owned by this module. Anything else on a row is left alone. */
const OWNED: ReadonlySet<WarningKind> = new Set([
  'chain',
  'loop',
  'many-to-one',
  'query-only',
]);

/**
 * Whether two URLs refer to the same site.
 *
 * A missing host is a wildcard: a root-relative URL in one list and an absolute
 * one in the other describe the same place. Comparing paths alone instead marks
 * every single row of a domain migration as a chain and a loop, because
 * `eski.com/x` redirecting to `yeni.com/x` finds its own path in the old list.
 */
const sameSite = (a: SiteRef, b: SiteRef): boolean => !a.host || !b.host || a.host === b.host;

export function withWarnings(
  rows: MatchRow[],
  sources: SiteRef[],
  resolveTarget: (row: MatchRow) => SiteRef | undefined,
): MatchRow[] {
  const sourceIndexByPath = new Map<string, number[]>();
  sources.forEach((source, index) => {
    const list = sourceIndexByPath.get(source.path);
    if (list) list.push(index);
    else sourceIndexByPath.set(source.path, [index]);
  });

  const targets = new Map<number, SiteRef>();
  const fanout = new Map<string, number>();
  for (const row of rows) {
    const target = resolveTarget(row);
    if (!target) continue;
    targets.set(row.source, target);
    fanout.set(target.path, (fanout.get(target.path) ?? 0) + 1);
  }

  return rows.map((row) => {
    const warnings = new Set<WarningKind>(row.warnings.filter((kind) => !OWNED.has(kind)));
    const here = sources[row.source];
    const target = targets.get(row.source);

    if (target) {
      // A chain means the target is itself a URL being redirected: same site,
      // same path, and a different row. Without the identity check every
      // domain-migration row would find itself here.
      const others = (sourceIndexByPath.get(target.path) ?? []).filter(
        (index) => index !== row.source && sameSite(sources[index], target),
      );
      if (others.length > 0) {
        warnings.add('chain');
        // A -> B and B -> A. Only a loop when one of those rows points back.
        if (
          others.some((index) => {
            const back = targets.get(index);
            return back !== undefined && back.path === here.path && sameSite(back, here);
          })
        ) {
          warnings.add('loop');
        }
      }

      if ((fanout.get(target.path) ?? 0) > FANOUT_LIMIT) warnings.add('many-to-one');
    }

    // Two old URLs that differ only by query string collapse onto one server
    // rule once queries are ignored. Both rows are kept so the conflict is
    // visible, and the export says the rule cannot tell them apart.
    if ((sourceIndexByPath.get(here.path) ?? []).length > 1) warnings.add('query-only');

    return { ...row, warnings: [...warnings] };
  });
}
