import { CANDIDATE_LIMIT, PARENT_SCORE, REVIEW_BAND, TIE_WINDOW, confidenceOf } from './defaults';
import { buildCorpus, rareMatches, scorePair, totalWeight, type Corpus } from './score';
import { annotateWarnings } from './warnings';
import type {
  Candidate,
  MatchProgress,
  MatchReport,
  MatchRow,
  MatcherSettings,
  NormalizedUrl,
  ParsedInput,
} from './types';

/**
 * The matching pipeline, as a plain generator.
 *
 * It knows nothing about workers or the DOM: it yields progress and returns a
 * report. The Web Worker is a thin adapter around it, and the main-thread
 * fallback drives the same generator with a yield to the event loop between
 * chunks. Keeping the transport out of here is what makes the whole thing
 * testable under `node --test`.
 *
 * No candidate narrowing. At the 2000x2000 limit every old URL is compared
 * against every new URL -- measured at ~3s for the full 4M pairs, which a
 * chunked loop reports progress through and can cancel.
 */

/** Sources handled between progress reports. */
const CHUNK = 25;

function insertCandidate(list: Candidate[], candidate: Candidate): void {
  let position = list.length;
  while (position > 0 && list[position - 1].score < candidate.score) position -= 1;
  if (position >= CANDIDATE_LIMIT) return;
  list.splice(position, 0, candidate);
  if (list.length > CANDIDATE_LIMIT) list.pop();
}

/**
 * Order the candidates that sit within the tie window of the best score.
 *
 * More rare words wins, then the closest path depth, then the closest length.
 * Candidates that survive all three are genuinely indistinguishable, which is
 * what marks the row ambiguous.
 */
function breakTies(
  candidates: Candidate[],
  source: NormalizedUrl,
  targets: NormalizedUrl[],
  corpus: Corpus,
): boolean {
  if (candidates.length < 2) return false;

  const best = candidates[0].score;
  const tied = candidates.filter((candidate) => best - candidate.score <= TIE_WINDOW);
  if (tied.length < 2) return false;

  const rank = (candidate: Candidate) => {
    const target = targets[candidate.target];
    return {
      rare: rareMatches(corpus, candidate.matched),
      depth: Math.abs(target.segments.length - source.segments.length),
      length: Math.abs(target.path.length - source.path.length),
    };
  };

  tied.sort((a, b) => {
    const left = rank(a);
    const right = rank(b);
    return (
      right.rare - left.rare ||
      left.depth - right.depth ||
      left.length - right.length ||
      b.score - a.score
    );
  });

  const rest = candidates.filter((candidate) => best - candidate.score > TIE_WINDOW);
  candidates.length = 0;
  candidates.push(...tied, ...rest);

  const first = rank(tied[0]);
  const second = rank(tied[1]);
  return (
    first.rare === second.rare && first.depth === second.depth && first.length === second.length
  );
}

/**
 * Walk up the source path looking for a directory that exists in the new list.
 *
 * '/a/b/c' tries '/a/b', then '/a'. This is an exact lookup in a map, not a
 * second scoring pass, and the result is offered at low confidence -- never
 * auto-selected. Bulk-redirecting to the home page is deliberately not offered:
 * a wrong redirect is worse than no redirect.
 */
function parentSuggestion(
  source: NormalizedUrl,
  targets: NormalizedUrl[],
  targetIndexByPath: Map<string, number>,
): Candidate | undefined {
  for (let depth = source.segments.length - 1; depth >= 1; depth -= 1) {
    const path = '/' + source.segments.slice(0, depth).join('/');
    const index = targetIndexByPath.get(path);
    if (index !== undefined) {
      const target = targets[index];
      return {
        target: index,
        score: PARENT_SCORE,
        reasons: ['parent-suggestion'],
        matched: [...source.tokenSet].filter((token) => target.tokenSet.has(token)),
      };
    }
  }
  return undefined;
}

export function* runMatch(
  input: ParsedInput,
  settings: MatcherSettings,
): Generator<MatchProgress, MatchReport> {
  const sources = input.old;
  const targets = input.new;

  yield { phase: 'normalizing', done: 0, total: targets.length };
  const corpus = buildCorpus(targets);
  const targetWeights = targets.map((target) => totalWeight(corpus, target));
  const targetIndexByPath = new Map(targets.map((target, index) => [target.path, index]));
  yield { phase: 'normalizing', done: targets.length, total: targets.length };

  const rows: MatchRow[] = [];

  for (let i = 0; i < sources.length; i += 1) {
    const source = sources[i];
    const sourceWeight = totalWeight(corpus, source);
    const candidates: Candidate[] = [];

    for (let j = 0; j < targets.length; j += 1) {
      const { score, reasons, matched } = scorePair(
        source,
        sourceWeight,
        targets[j],
        targetWeights[j],
        corpus,
        settings.weights,
      );
      insertCandidate(candidates, { target: j, score, reasons, matched });
    }

    const ambiguous = breakTies(candidates, source, targets, corpus);

    let chosen = candidates.length > 0 && candidates[0].score >= settings.threshold ? 0 : -1;

    if (chosen === -1) {
      const parent = parentSuggestion(source, targets, targetIndexByPath);
      if (parent) {
        const existing = candidates.find((candidate) => candidate.target === parent.target);
        if (existing) {
          // Already scored on its own merits; label it so the row explains why
          // it is being offered rather than pushing a duplicate in front of it.
          if (!existing.reasons.includes('parent-suggestion')) {
            existing.reasons.push('parent-suggestion');
          }
        } else {
          candidates.unshift(parent);
          if (candidates.length > CANDIDATE_LIMIT) candidates.pop();
        }
      }
      // Still not selected: the parent score sits below the threshold on
      // purpose, so the suggestion is offered rather than applied.
      chosen = candidates.length > 0 && candidates[0].score >= settings.threshold ? 0 : -1;
    }

    const score = chosen >= 0 ? candidates[chosen].score : 0;

    rows.push({
      source: i,
      candidates,
      chosen,
      confidence: confidenceOf(chosen >= 0 ? score : (candidates[0]?.score ?? 0)),
      warnings: ambiguous ? ['ambiguous'] : [],
      selected: chosen >= 0 && score >= REVIEW_BAND,
    });

    if ((i + 1) % CHUNK === 0 || i + 1 === sources.length) {
      yield { phase: 'matching', done: i + 1, total: sources.length };
    }
  }

  yield { phase: 'warnings', done: 0, total: rows.length };
  annotateWarnings(rows, sources, targets);
  yield { phase: 'warnings', done: rows.length, total: rows.length };

  return { rows, old: sources, new: targets };
}
