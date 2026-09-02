import type { Language } from '@/lib/i18n';
import { BASE_URL, PERSON_ID, WEBSITE_ID, graph, inLanguage, type SchemaNode, withContext } from './base';
import { personNode } from './person';

export function websiteNode(language: Language): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${BASE_URL}/`,
    name: 'Kerem Gezergün',
    alternateName: 'Sungur Kerem Gezergün',
    description:
      language === 'en'
        ? 'The personal website of Kerem Gezergün, specializing in e-commerce SEO, technical SEO and organic growth strategy.'
        : 'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı Kerem Gezergün\'ün kişisel web sitesi.',
    publisher: { '@id': PERSON_ID },
    inLanguage: inLanguage(language),
  };
}

export const websiteSchema = (language: Language) => withContext(websiteNode(language));

/**
 * The entity graph every page carries in its `<head>`. It stays in the layout
 * rather than being repeated per page: a page that forgot it would drop the
 * site's identity silently, with nothing to fail on.
 */
export const siteGraph = (language: Language) => graph(personNode(language), websiteNode(language));
