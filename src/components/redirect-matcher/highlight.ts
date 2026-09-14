import { foldTurkish, stripSuffix } from '@/lib/redirect-matcher/normalize';

/**
 * Split a URL for display so the words it shares with its counterpart can be
 * highlighted.
 *
 * Users do not want the score, they want the reason. Seeing which words matched
 * in both URLs is the single detail that decides whether the tool is trusted, so
 * it is worth doing on the original string rather than the comparison form.
 *
 * Best effort by design: a percent-encoded original does not split into readable
 * words, and highlighting nothing is better than highlighting the wrong thing.
 */
export type UrlPart = { text: string; matched: boolean };

export function highlightParts(value: string, matched: Set<string>): UrlPart[] {
  if (matched.size === 0) return [{ text: value, matched: false }];

  // The capturing group keeps the separators, so the pieces rejoin into the
  // original string exactly.
  return value
    .split(/([^\p{L}\p{N}]+)/u)
    .filter((piece) => piece !== '')
    .map((piece) => ({
      text: piece,
      matched: matched.has(stripSuffix(foldTurkish(piece))),
    }));
}
