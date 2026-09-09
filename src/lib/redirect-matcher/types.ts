/**
 * Redirect matcher core types.
 *
 * Everything in this directory is pure: no React, no DOM, no `@/` alias. The
 * same modules run in the Web Worker, on the main thread as a fallback, and
 * under `node --test` (see tsconfig.test.json). Relative imports only —
 * `paths` is emptied in the test config so an accidental `@/` import fails at
 * compile time rather than with MODULE_NOT_FOUND at runtime.
 */

/** Which side of the job a list belongs to. */
export type Side = 'old' | 'new';

/** Why a raw input line never made it into the matching set. */
export type DropReason =
  | 'empty'
  | 'not-a-url'
  | 'duplicate'
  | 'unreadable'
  | 'same-as-source';

export type DropRecord = { value: string; reason: DropReason; side: Side };

/**
 * One input URL, carrying both the comparison form and the untouched original.
 *
 * Keeping these together is the single most important invariant in the tool:
 * scoring reads `path`/`tokens`, every export writes `original`. Collapsing
 * the two produces broken redirects, which is the worst failure this tool has.
 */
export type NormalizedUrl = {
  /** Exactly what the user typed, byte for byte. */
  original: string;
  /** Root-relative, folded, lowercased comparison path. Always starts with '/'. */
  path: string;
  /** Host taken off the input, if it carried one. Lowercased, no `www.`. */
  host?: string;
  /** Raw query string without the leading '?', kept for the collision warning. */
  query?: string;
  /** Path segments of `path`, no empty members. */
  segments: string[];
  /** All comparison tokens, noise included. */
  tokens: string[];
  /** `tokens` as a set. Precomputed: the matcher intersects it 4M times. */
  tokenSet: Set<string>;
  /** Tokens with noise words removed — used only for the coverage test. */
  core: string[];
  /** `core` as a set, for the subset test. */
  coreSet: Set<string>;
  /**
   * Core tokens of the last segment only.
   *
   * Used for the coverage test between two URLs of equal depth, where the
   * directories are structure and the last segment carries the identity.
   */
  slugCoreSet: Set<string>;
  /** Padded character trigrams of `path`, for the character-level component. */
  trigrams: Set<string>;
  /** Numeric / SKU-shaped tokens that can carry an identity match. */
  ids: string[];
};

/** A label explaining or qualifying a score. */
export type Reason =
  | 'exact'
  | 'id-match'
  | 'same-slug'
  | 'broader-page'
  | 'narrower-page'
  | 'parent-suggestion'
  | 'similar';

export type Candidate = {
  /** Index into the new-URL array. */
  target: number;
  score: number;
  /** Score before any ceiling or floor, used only to break ties. */
  base: number;
  reasons: Reason[];
  /** Tokens shared with the source, for the highlight in the results table. */
  matched: string[];
};

export type WarningKind =
  | 'chain'
  | 'loop'
  | 'many-to-one'
  | 'broader-page'
  | 'narrower-page'
  | 'ambiguous'
  | 'query-only'
  | 'unreadable';

export type Confidence = 'high' | 'review' | 'weak' | 'none';

export type MatchRow = {
  /** Index into the old-URL array. */
  source: number;
  /** Best candidates, highest score first. At most `CANDIDATE_LIMIT`. */
  candidates: Candidate[];
  /** Index into `candidates`, or -1 when the row has no target. */
  chosen: number;
  confidence: Confidence;
  warnings: WarningKind[];
  /** Set when the user overrides the target with a hand-typed URL. */
  manualTarget?: string;
  /**
   * Whether the row is included in the export. Seeded from the confidence
   * band -- high and review are on, weak and none are off -- and then owned by
   * the user.
   */
  selected: boolean;
};

export type MatcherSettings = {
  /** Below this score nothing is auto-selected. */
  threshold: number;
  /** Keep query strings as part of the comparison path. */
  includeQuery: boolean;
  /** Drop a leading two-letter locale segment (`/tr/`, `/en-us/`). */
  stripLanguagePrefix: boolean;
  /** Absolute URLs in the export instead of root-relative paths. */
  absoluteOutput: boolean;
  /** Host used when `absoluteOutput` is on. */
  outputHost: string;
  weights: ScoreWeights;
};

export type ScoreWeights = {
  tokens: number;
  characters: number;
  structure: number;
  shape: number;
};

export type ParseNotice =
  | { kind: 'assumed-columns' }
  | { kind: 'delimiter'; delimiter: string }
  | { kind: 'single-column' }
  | { kind: 'row-limit'; side: Side; count: number; limit: number }
  | { kind: 'domain-change'; from: string; to: string }
  | { kind: 'collapsed'; side: Side; count: number }
  | { kind: 'dropped'; reason: DropReason; side: Side; count: number };

export type ParsedInput = {
  old: NormalizedUrl[];
  new: NormalizedUrl[];
  /** Rows whose source already exists unchanged in the new list. */
  unchanged: string[];
  drops: DropRecord[];
  notices: ParseNotice[];
};

export type MatchProgress = {
  phase: 'normalizing' | 'matching' | 'warnings';
  done: number;
  total: number;
};

export type MatchReport = {
  rows: MatchRow[];
  old: NormalizedUrl[];
  new: NormalizedUrl[];
};

/**
 * A URL reduced to what the interface needs.
 *
 * The full `NormalizedUrl` carries three `Set`s per entry; posting 4000 of them
 * back from the worker would cost more than the matching did. The interface only
 * needs the original string and the comparison path.
 */
export type UrlView = { original: string; path: string; host?: string };

/** Everything one run produces, in a shape `postMessage` can clone cheaply. */
export type MatchOutcome = {
  rows: MatchRow[];
  old: UrlView[];
  new: UrlView[];
  unchanged: string[];
  drops: DropRecord[];
  notices: ParseNotice[];
};
