import type { Language } from '@/lib/i18n';
import { BASE_URL, graph, inLanguage, ref, type SchemaNode } from '@/lib/schema/base';
import { breadcrumbNode, faqNode, webPageNode } from '@/lib/schema/page';
import { chrome } from './content';
import { faqs } from './seoContent';

/**
 * Structured data for the redirect matcher.
 *
 * Route-local rather than an entry in lib/schema/product.ts: all three products
 * there are store applications with a storeUrl and an Offer, and this is a page
 * that runs in the browser. `WebApplication` with a free Offer is the honest
 * description.
 */

export const PATHS = {
  tr: '/301-yonlendirme-araci',
  en: '/en/redirect-mapping-tool',
} as const;

export const pageUrl = (language: Language) => `${BASE_URL}${PATHS[language]}`;

const APP_ID = `${BASE_URL}${PATHS.tr}#app`;

function appNode(language: Language): SchemaNode {
  return {
    '@type': 'WebApplication',
    '@id': APP_ID,
    name: chrome.heading[language],
    url: pageUrl(language),
    description: chrome.lead[language],
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'SEO',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and Web Worker support',
    inLanguage: inLanguage(language),
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
    },
    featureList:
      language === 'en'
        ? [
            'Matches old and new URL lists in the browser',
            'Explains every similarity score component by component',
            'Warns about redirect chains, loops and many-to-one fanout',
            'Exports Apache, nginx, WordPress Redirection and CSV output',
            'Processes files entirely on device; nothing is uploaded',
          ]
        : [
            'Eski ve yeni URL listelerini tarayıcıda eşleştirir',
            'Benzerlik skorunu bileşen bileşen açıklar',
            'Yönlendirme zinciri, döngü ve çoklu hedef uyarısı verir',
            'Apache, nginx, WordPress Redirection ve CSV çıktısı üretir',
            'Dosyaları tamamen cihazda işler; hiçbir şey yüklenmez',
          ],
  };
}

export function matcherGraph(language: Language): SchemaNode {
  const url = pageUrl(language);

  return graph(
    webPageNode({
      url,
      language,
      name: chrome.heading[language],
      description: chrome.lead[language],
      dateModified: '2026-09-05',
      extra: { mainEntity: ref(APP_ID) },
    }),
    appNode(language),
    breadcrumbNode(language, { name: chrome.heading[language], url }),
    faqNode(
      url,
      language,
      faqs.map((entry) => ({ q: entry.q[language], a: entry.a[language] })),
    ),
  );
}
