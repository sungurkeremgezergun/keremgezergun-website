import type { Language } from '@/lib/i18n';
import { PERSON_ID, WEBSITE_ID, homeUrl, inLanguage, pageId, ref, type SchemaNode, withContext } from './base';

/**
 * Page-level nodes: breadcrumbs, FAQs, generic pages and lists.
 *
 * Before this module every page carried its own hand-written BreadcrumbList
 * literal — 24 of them, which is how the English roadmap page ended up with a
 * "Home" crumb pointing at the Turkish home page. Callers now pass only the
 * trail; the language-correct root crumb is prepended here.
 */

export type Crumb = { name: string; url: string };
export type Faq = { q: string; a: string };

export function breadcrumbNode(language: Language, ...trail: Crumb[]): SchemaNode {
  const root: Crumb = { name: language === 'en' ? 'Home' : 'Ana Sayfa', url: homeUrl(language) };
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [root, ...trail].map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export const breadcrumbSchema = (language: Language, ...trail: Crumb[]) =>
  withContext(breadcrumbNode(language, ...trail));

export function faqNode(url: string, language: Language, faqs: Faq[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: inLanguage(language),
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export const faqSchema = (url: string, language: Language, faqs: Faq[]) =>
  withContext(faqNode(url, language, faqs));

/** The node that stands for the page itself. Only one per document. */
export function webPageNode(options: {
  url: string;
  language: Language;
  name: string;
  description: string;
  /** 'WebPage' by default; 'ProfilePage' and 'CollectionPage' are subtypes. */
  type?: string;
  dateModified?: string;
  extra?: SchemaNode;
}): SchemaNode {
  return {
    '@type': options.type ?? 'WebPage',
    '@id': pageId(options.url),
    name: options.name,
    description: options.description,
    url: options.url,
    inLanguage: inLanguage(options.language),
    isPartOf: ref(WEBSITE_ID),
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    ...options.extra,
  };
}

export type ListEntry = { name: string; url?: string; description?: string; item?: SchemaNode };

export function itemListNode(options: {
  id: string;
  name?: string;
  description?: string;
  items: ListEntry[];
}): SchemaNode {
  return {
    '@type': 'ItemList',
    '@id': options.id,
    ...(options.name ? { name: options.name } : {}),
    ...(options.description ? { description: options.description } : {}),
    numberOfItems: options.items.length,
    itemListElement: options.items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      ...(entry.url ? { url: entry.url } : {}),
      ...(entry.description ? { description: entry.description } : {}),
      ...(entry.item ? { item: entry.item } : {}),
    })),
  };
}
