import type { Language } from '@/lib/i18n';

/**
 * Shared plumbing for every JSON-LD node on the site.
 *
 * Node builders here return nodes WITHOUT `@context`. The context is added
 * once, by `graph()` or `withContext()`, at the point a node is rendered into
 * a `<script>`. That is what lets several nodes share one script and reference
 * each other by `@id` instead of nesting copies of themselves.
 */

export const BASE_URL = 'https://www.keremgezergun.com';

export const PERSON_ID = `${BASE_URL}/#person`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

export type SchemaNode = Record<string, unknown>;

export const abs = (path: string) => `${BASE_URL}${path}`;

/** The canonical home page URL for a language. */
export const homeUrl = (language: Language) => (language === 'en' ? `${BASE_URL}/en` : `${BASE_URL}/`);

/**
 * The `@id` of the node that represents the page itself. Exactly one node per
 * document may carry it — a second would make `isPartOf`/`hasPart` references
 * ambiguous for anything that resolves the graph.
 */
export const pageId = (url: string) => `${url}#webpage`;

/** A reference to a node defined elsewhere in the same document. */
export const ref = (id: string) => ({ '@id': id });

/**
 * BCP 47 tag for a language. Centralised because the product nodes used to
 * emit 'tr-TR' for Turkish but a bare 'en' for English.
 */
export const inLanguage = (language: Language) => (language === 'en' ? 'en-US' : 'tr-TR');

/**
 * One script, many nodes. Falsy members are dropped so a caller can write
 * `graph(page, faqs.length && faqNode(...))` without a branch.
 */
export function graph(...nodes: Array<SchemaNode | false | null | undefined>): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  };
}

/** A single node rendered as its own document. */
export function withContext(node: SchemaNode): SchemaNode {
  return { '@context': 'https://schema.org', ...node };
}
