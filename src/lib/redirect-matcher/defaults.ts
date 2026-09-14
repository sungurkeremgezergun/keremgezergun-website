import type { Confidence, MatcherSettings, ScoreWeights } from './types';

/** Tunable numbers, in one place, with the reasoning next to them. */

export const DEFAULT_WEIGHTS: ScoreWeights = {
  /** Weighted word overlap: what the two URLs actually mean. */
  tokens: 0.5,
  /** Character-level similarity: spelling, endings, reordered words. */
  characters: 0.25,
  /** Path structure: shared directory prefix, distance in the category tree. */
  structure: 0.15,
  /** Depth and length: pages at the same level are closer to each other. */
  shape: 0.1,
};

export const DEFAULT_SETTINGS: MatcherSettings = {
  threshold: 50,
  includeQuery: false,
  stripLanguagePrefix: false,
  absoluteOutput: false,
  outputHost: '',
  weights: DEFAULT_WEIGHTS,
};

/** Candidates kept per source row, matching the 1-5 keyboard shortcuts. */
export const CANDIDATE_LIMIT = 5;

/**
 * Coverage ceilings.
 *
 * A ceiling does not remove a candidate; it stops one from being auto-approved
 * and from outranking a candidate of equal specificity.
 */
export const BROADER_CEILING = 65;
export const NARROWER_CEILING = 60;

/** An id shared by both URLs is evidence of the same entity, so it beats a ceiling. */
export const ID_FLOOR = 95;
/** An identical last segment is weaker evidence, so a ceiling beats it. */
export const SLUG_FLOOR = 90;
/** Score given to a parent-directory fallback suggestion. */
export const PARENT_SCORE = 45;

/** Two candidates this close are compared by the tie-breakers instead. */
export const TIE_WINDOW = 3;

/** Above this many sources pointing at one target, warn about a soft 404. */
export const FANOUT_LIMIT = 20;

export const HIGH_BAND = 90;
export const REVIEW_BAND = 70;
export const WEAK_BAND = 50;

export function confidenceOf(score: number): Confidence {
  if (score >= HIGH_BAND) return 'high';
  if (score >= REVIEW_BAND) return 'review';
  if (score >= WEAK_BAND) return 'weak';
  return 'none';
}
