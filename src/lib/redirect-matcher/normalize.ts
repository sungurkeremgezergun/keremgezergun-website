import { NOISE_WORDS } from './noise';
import type { NormalizedUrl } from './types';

/**
 * URL normalization for comparison.
 *
 * The comparison form is lossy on purpose; the original string is carried
 * alongside it and is the only thing any export writes. Every step here is
 * ordered, and the order is load-bearing — percent-decoding has to happen
 * before tokenization, and the Turkish fold has to happen before lowercasing.
 */

const WEB_EXTENSIONS = ['.html', '.htm', '.php', '.asp', '.aspx', '.jsp'];
const INDEX_SEGMENTS = new Set(['index', 'default']);

/**
 * Turkish letters mapped explicitly rather than through a slugify library.
 *
 * `'İ'.toLowerCase()` is 'i̇' — an 'i' plus a combining dot above — and
 * `'I'.toLowerCase('tr')` is 'ı'. Either one silently stops a URL from
 * matching anything. Folding the Turkish letters to ASCII first removes the
 * dotted/dotless distinction entirely, which is what makes the plain
 * `toLowerCase()` further down safe.
 */
const TURKISH_FOLD: Record<string, string> = {
  ı: 'i',
  İ: 'i',
  I: 'i',
  ş: 's',
  Ş: 's',
  ğ: 'g',
  Ğ: 'g',
  ç: 'c',
  Ç: 'c',
  ö: 'o',
  Ö: 'o',
  ü: 'u',
  Ü: 'u',
  â: 'a',
  Â: 'a',
  î: 'i',
  Î: 'i',
  û: 'u',
  Û: 'u',
};

/** Turkish letters to ASCII, then any remaining diacritics, then lowercase. */
export function foldTurkish(value: string): string {
  let folded = '';
  for (const char of value) folded += TURKISH_FOLD[char] ?? char;
  return folded
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Turkish plural and possessive endings, plus the English plural.
 *
 * Applied only to tokens longer than five characters, only from this list, and
 * repeatedly until nothing else applies. Repeating matters: `otobusler` has to
 * reduce to the same stem as `otobus`, which needs two passes. Longest ending
 * first so `leri` wins over `i`.
 */
const SUFFIXES = ['leri', 'lari', 'ler', 'lar', 'es', 'si', 's', 'i'];
const MIN_STEM = 3;

export function stripSuffix(token: string): string {
  let stem = token;
  for (let pass = 0; pass < 3; pass += 1) {
    if (stem.length <= 5) return stem;
    const suffix = SUFFIXES.find(
      (candidate) => stem.endsWith(candidate) && stem.length - candidate.length >= MIN_STEM,
    );
    if (!suffix) return stem;
    stem = stem.slice(0, stem.length - suffix.length);
  }
  return stem;
}

/**
 * Every run of non-alphanumeric characters ends a word.
 *
 * Listing the separators explicitly (hyphen, underscore, plus, dot, comma)
 * missed the ones that also turn up in real URLs -- parentheses, '&', '=', ':',
 * decoded spaces -- and left '/kampanya(2019)' as a single token that matched
 * neither 'kampanya' nor '2019'. The Unicode classes keep non-Latin scripts
 * intact, which a bare [^a-z0-9] would delete.
 */
export function tokenize(path: string): string[] {
  return path.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
}

/**
 * Noise words compared against their own stems.
 *
 * `core` is built from stemmed tokens, so the list has to be stemmed too —
 * otherwise `categories` reduces to `categor`, misses the literal `categories`
 * entry, and counts as a meaningful word.
 */
const NOISE_STEMS: ReadonlySet<string> = new Set([...NOISE_WORDS].map((word) => stripSuffix(word)));

/** True for a word that carries almost no identity. Down-weighted, not removed. */
export const isNoise = (token: string): boolean => NOISE_WORDS.has(token) || NOISE_STEMS.has(token);

const ID_TOKEN = /^\d{4,}$/;
const SKU_TOKEN = /^[a-z]{2,}\d{3,}$/;

/** Padded character trigrams, so the first and last letters carry weight too. */
export function trigrams(value: string): Set<string> {
  const padded = `  ${value}  `;
  const set = new Set<string>();
  for (let i = 0; i + 3 <= padded.length; i += 1) set.add(padded.slice(i, i + 3));
  return set;
}

export type NormalizeOptions = {
  includeQuery: boolean;
  stripLanguagePrefix: boolean;
};

export type NormalizeResult =
  | { ok: true; value: NormalizedUrl }
  | { ok: false; reason: 'empty' | 'not-a-url' | 'unreadable' };

const SCHEME = /^[a-z][a-z0-9+.-]*:\/\//i;
const HOSTNAME = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i;
const LOCALE_SEGMENT = /^[a-z]{2}([-_][a-z]{2})?$/;

/** Split a raw input into an optional host and a path, without decoding yet. */
function splitHost(raw: string): { host?: string; rest: string } {
  if (SCHEME.test(raw) || raw.startsWith('//')) {
    const withScheme = raw.startsWith('//') ? `https:${raw}` : raw;
    try {
      const url = new URL(withScheme);
      return { host: url.host.replace(/^www\./i, '').toLowerCase(), rest: `${url.pathname}${url.search}${url.hash}` };
    } catch {
      return { rest: raw };
    }
  }

  if (raw.startsWith('/')) return { rest: raw };

  // A bare `host/path` or `www.host`. Requiring either a following slash or a
  // `www.` prefix is what keeps `index.html` from being read as a hostname.
  const slash = raw.indexOf('/');
  const head = slash === -1 ? raw : raw.slice(0, slash);
  const looksLikeHost =
    HOSTNAME.test(head) &&
    !WEB_EXTENSIONS.some((extension) => head.toLowerCase().endsWith(extension)) &&
    (slash !== -1 || /^www\./i.test(head));

  if (looksLikeHost) {
    return {
      host: head.replace(/^www\./i, '').toLowerCase(),
      rest: slash === -1 ? '/' : raw.slice(slash),
    };
  }

  return { rest: raw };
}

export function normalizeUrl(raw: string, options: NormalizeOptions): NormalizeResult {
  const trimmed = raw.trim().replace(/^["']|["']$/g, '').trim();
  if (!trimmed) return { ok: false, reason: 'empty' };

  const { host, rest } = splitHost(trimmed);

  // A value with no slash and no host is a stray cell, not a URL — a leftover
  // header, a note, a product name. Rejecting it here is what keeps the drop
  // report honest instead of scoring garbage.
  if (!host && !rest.includes('/')) return { ok: false, reason: 'not-a-url' };

  const withoutFragment = rest.split('#')[0];
  const queryStart = withoutFragment.indexOf('?');
  const query = queryStart === -1 ? undefined : withoutFragment.slice(queryStart + 1);
  const rawPath = queryStart === -1 ? withoutFragment : withoutFragment.slice(0, queryStart);

  let path: string;
  try {
    // Before tokenization, or '/%C3%BCr%C3%BCn' splits into noise that matches
    // nothing. A malformed escape throws; that marks one row unreadable and
    // leaves the rest of the file alone.
    path = decodeURIComponent(rawPath);
  } catch {
    return { ok: false, reason: 'unreadable' };
  }

  if (!path.startsWith('/')) path = `/${path}`;
  if (options.includeQuery && query) path = `${path}?${query}`;

  if (path.length > 1) path = path.replace(/\/+$/, '') || '/';

  let segments = path.split('/').filter(Boolean);

  if (segments.length > 0) {
    const last = segments[segments.length - 1];
    const extension = WEB_EXTENSIONS.find((candidate) => last.toLowerCase().endsWith(candidate));
    if (extension) segments[segments.length - 1] = last.slice(0, last.length - extension.length);
    if (INDEX_SEGMENTS.has(segments[segments.length - 1].toLowerCase())) segments.pop();
    segments = segments.filter(Boolean);
  }

  segments = segments.map(foldTurkish);

  if (options.stripLanguagePrefix && segments.length > 0 && LOCALE_SEGMENT.test(segments[0])) {
    segments = segments.slice(1);
  }

  const comparisonPath = segments.length === 0 ? '/' : `/${segments.join('/')}`;
  const rawTokens = tokenize(comparisonPath);
  const tokens = rawTokens.map(stripSuffix);
  const core = tokens.filter((token) => !isNoise(token));
  const slug = segments.length > 0 ? segments[segments.length - 1] : '';
  const slugCore = tokenize(slug)
    .map(stripSuffix)
    .filter((token) => !isNoise(token));

  return {
    ok: true,
    value: {
      original: raw.trim(),
      path: comparisonPath,
      host,
      query,
      segments,
      tokens,
      tokenSet: new Set(tokens),
      core,
      coreSet: new Set(core),
      slugCoreSet: new Set(slugCore),
      trigrams: trigrams(comparisonPath),
      ids: rawTokens.filter((token) => ID_TOKEN.test(token) || SKU_TOKEN.test(token)),
    },
  };
}

/**
 * The path a server actually sees, taken from the original string.
 *
 * Server rules must match the URL the visitor requests, not the folded
 * lowercase comparison form -- emitting '/urun/sik-canta' for a site whose real
 * path is '/Ürün/Şık-Çanta' produces a rule that never fires. Only the scheme,
 * host and fragment come off; case, encoding and the query survive untouched.
 */
export function requestPath(original: string): string {
  const trimmed = original.trim().replace(/^["']|["']$/g, '').trim();
  const { rest } = splitHost(trimmed);
  const withoutFragment = rest.split('#')[0];
  if (!withoutFragment) return '/';
  return withoutFragment.startsWith('/') ? withoutFragment : `/${withoutFragment}`;
}
