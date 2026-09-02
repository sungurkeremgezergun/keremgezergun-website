import type { Language } from '@/lib/i18n';
import { brands } from '@/lib/experience';
import { BASE_URL, PERSON_ID, graph, homeUrl, inLanguage, pageId, ref, type SchemaNode } from './base';
import { type Faq, faqNode, itemListNode, webPageNode } from './page';
import { type ProductKey, productId, productUrl } from './product';

/**
 * The home page graph.
 *
 * The page is a personal profile that also carries services, products and an
 * FAQ, so it is typed ProfilePage with the Person as `mainEntity` and the rest
 * hung off `hasPart`. Only the ProfilePage may claim the `#webpage` id.
 */

export const PODCAST_ID = `${BASE_URL}/#sepetteki-seo`;
export const CLIENTS_ID = `${BASE_URL}/#clients`;
export const PRODUCTS_ID = `${BASE_URL}/#products`;

const copy = {
  pageName: {
    tr: 'Kerem Gezergün — E-Ticaret SEO Danışmanı',
    en: 'Kerem Gezergün — E-commerce SEO Consultant',
  },
  pageDescription: {
    tr: 'Sungur Kerem Gezergün’ün kişisel sayfası: kariyer geçmişi, danışmanlık verdiği markalar, geliştirdiği SEO araçları ve Sepetteki SEO podcast’i.',
    en: 'The personal page of Sungur Kerem Gezergün: career history, the brands he has advised, the SEO tools he builds and the Sepetteki SEO podcast.',
  },
  podcastDescription: {
    tr: 'E-ticaret sitelerinin arama motoru yolculuğunu, yapay zekâ ile SEO ilişkisini ve pratik SEO stratejilerini ele alan Türkçe podcast serisi.',
    en: 'A Turkish-language podcast on how e-commerce sites fare in search, the relationship between AI and SEO, and practical SEO strategy.',
  },
  clientsName: {
    tr: 'Danışmanlık verilen markalar',
    en: 'Brands advised',
  },
  productsName: {
    tr: 'Geliştirilen SEO araçları',
    en: 'SEO tools built',
  },
} as const;

/**
 * Sepetteki SEO. `numberOfEpisodes` is deliberately absent — it would be stale
 * the day after any episode ships, and the HTML is cached for a year.
 */
export function podcastNode(language: Language): SchemaNode {
  return {
    '@type': 'PodcastSeries',
    '@id': PODCAST_ID,
    name: 'Sepetteki SEO',
    description: copy.podcastDescription[language],
    inLanguage: 'tr-TR',
    url: 'https://open.spotify.com/show/7nxzp3gULqbeyqeCW0SCbi',
    author: ref(PERSON_ID),
    actor: [ref(PERSON_ID), { '@type': 'Person', name: 'Simay Özpilavcı' }],
    genre: language === 'en' ? ['Marketing', 'Business'] : ['Pazarlama', 'İş Dünyası'],
    sameAs: [
      'https://open.spotify.com/show/7nxzp3gULqbeyqeCW0SCbi',
      'https://www.youtube.com/@keremgezergun',
    ],
  };
}

/**
 * The client list. Plain ListItems: these brands have no URL on the page and
 * no identifier anywhere, so inventing Organization nodes for them would add
 * assertions the site cannot back up.
 */
export const brandListNode = (language: Language): SchemaNode =>
  itemListNode({
    id: CLIENTS_ID,
    name: copy.clientsName[language],
    items: brands.map((name) => ({ name })),
  });

/**
 * The three products, as stubs carrying the same `@id`s the product pages use.
 * Full app nodes would repeat ~3 KB the product pages already serve; the id is
 * what ties the two documents to one entity.
 */
export function productListNode(language: Language): SchemaNode {
  const names: Record<ProductKey, string> = {
    nirengi: 'Nirengi',
    knotvo: 'Knotvo',
    crawlseer: 'Crawlseer',
  };
  const order: ProductKey[] = ['nirengi', 'crawlseer', 'knotvo'];
  return itemListNode({
    id: PRODUCTS_ID,
    name: copy.productsName[language],
    items: order.map((key) => ({
      name: names[key],
      url: productUrl(key, language),
      item: {
        '@type': 'SoftwareApplication',
        '@id': productId(key, language),
        name: names[key],
        url: productUrl(key, language),
      },
    })),
  });
}

export function homeGraph(language: Language, faqs: Faq[]): SchemaNode {
  const url = homeUrl(language);
  const page = webPageNode({
    url,
    language,
    type: 'ProfilePage',
    name: copy.pageName[language],
    description: copy.pageDescription[language],
    extra: {
      mainEntity: ref(PERSON_ID),
      hasPart: [ref(`${url}#faq`), ref(PODCAST_ID), ref(CLIENTS_ID), ref(PRODUCTS_ID)],
    },
  });
  return graph(
    page,
    faqNode(url, language, faqs),
    podcastNode(language),
    brandListNode(language),
    productListNode(language),
  );
}

export { pageId, inLanguage };
