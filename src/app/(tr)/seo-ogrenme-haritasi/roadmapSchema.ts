import type { Language } from '@/lib/i18n';
import { PERSON_ID, graph, ref, type SchemaNode } from '@/lib/schema/base';
import { breadcrumbNode, itemListNode, webPageNode } from '@/lib/schema/page';
import { roadmapSections, roadmapTotals, sectionSlug } from './roadmapContent';

/**
 * The roadmap graph.
 *
 * It lives beside the data rather than in `src/lib/schema/` because
 * `roadmapContent.ts` sits under `src/app/`, and having `lib` import upward
 * from `app` would invert the direction every other module follows.
 *
 * The ItemList carries the 50 sections, not the 590 resources. Every resource
 * link is already in the crawlable HTML; 590 ListItems would add ~100 KB of
 * inline JSON to a page that renders over a thousand links, and lists that
 * size get truncated rather than read.
 */

const LIST_ID_SUFFIX = '#sections';

const copy = {
  heading: { tr: 'SEO Rehberi', en: 'SEO Learning Roadmap' },
  description: {
    tr: `SEO öğrenmek için derlenmiş kaynak haritası: ${roadmapTotals.categories} ana kategori, ${roadmapTotals.subtopics} alt konu ve ${roadmapTotals.resources} seçilmiş dış kaynak.`,
    en: `A curated map for learning SEO: ${roadmapTotals.categories} main categories, ${roadmapTotals.subtopics} subtopics and ${roadmapTotals.resources} vetted external resources.`,
  },
  listName: { tr: 'SEO öğrenme kategorileri', en: 'SEO learning categories' },
} as const;

export const roadmapUrl = (language: Language) =>
  language === 'en'
    ? 'https://www.keremgezergun.com/en/seo-learning-roadmap'
    : 'https://www.keremgezergun.com/seo-ogrenme-haritasi';

export function roadmapGraph(language: Language): SchemaNode {
  const url = roadmapUrl(language);
  const page = webPageNode({
    url,
    language,
    type: 'CollectionPage',
    name: copy.heading[language],
    description: copy.description[language],
    extra: {
      about: ref(PERSON_ID),
      mainEntity: { '@id': `${url}${LIST_ID_SUFFIX}` },
    },
  });
  const sections = itemListNode({
    id: `${url}${LIST_ID_SUFFIX}`,
    name: copy.listName[language],
    items: roadmapSections.map((section) => ({
      name: section.title[language],
      description: section.desc[language],
      url: `${url}#${sectionSlug(section)}`,
    })),
  });
  return graph(
    page,
    sections,
    breadcrumbNode(language, { name: copy.heading[language], url }),
  );
}
