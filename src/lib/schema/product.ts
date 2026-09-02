import type { Language } from '@/lib/i18n';
import { stores } from '@/lib/contact';
import { BASE_URL, PERSON_ID, WEBSITE_ID, inLanguage, ref, type SchemaNode, withContext } from './base';

export type ProductKey = 'nirengi' | 'knotvo' | 'crawlseer';

type LocalizedText = Record<Language, string>;
type LocalizedList = Record<Language, string[]>;

type Product = {
  name: string;
  path: LocalizedText;
  applicationSubCategory: string;
  operatingSystem: string;
  processorRequirements?: string;
  softwareVersion?: string;
  image?: string;
  /** The public store listing, when the product has shipped. */
  storeUrl?: LocalizedText;
  /** https://schema.org/InStock once released, PreOrder while it is not. */
  availability: string;
  description: LocalizedText;
  featureList: LocalizedList;
};

/**
 * One node per product, rendered on the product page and repeated as the
 * `about` of every page that documents it (support, privacy, accessibility).
 * The `@id` is what ties those pages back to a single entity, so it must stay
 * derived from the product page URL rather than the page doing the rendering.
 *
 * Every product is free. `isAccessibleForFree` states that on its own, because
 * a zero-priced Offer alone is routinely read as "unknown".
 */
const products: Record<ProductKey, Product> = {
  nirengi: {
    name: 'Nirengi',
    path: { tr: '/nirengi', en: '/en/nirengi-log-analyzer' },
    applicationSubCategory: 'SEO Software',
    operatingSystem: 'macOS 14.4 or later',
    softwareVersion: '1.0',
    storeUrl: stores.nirengi,
    availability: 'https://schema.org/InStock',
    description: {
      tr: 'Googlebot, AI tarayıcıları, tarama bütçesi, teknik hatalar ve indeks kapsamı için 41 rapor sunan cihaz içi SEO sunucu log analiz aracı.',
      en: 'An on-device SEO server log analyzer offering 41 reports across Googlebot, AI crawlers, crawl budget, technical errors and index coverage.',
    },
    featureList: {
      tr: [
        'Googlebot ve AI tarayıcı karşılaştırması',
        'Doğrulanmış bot kimliği (ters ve ileri DNS)',
        'Tarama bütçesi ve tarama israfı raporları',
        '404, 5xx, 3xx, soft-404 ve robots.txt ihlalleri',
        'Sitemap kapsamı, öksüz sayfalar ve tazelik skoru',
        'Apache, Nginx, IIS, CloudFront, Cloudflare ve ALB formatları',
        'CSV ve tek dosyalı HTML dışa aktarım',
      ],
      en: [
        'Googlebot compared with AI crawlers',
        'Verified bot identity (reverse and forward DNS)',
        'Crawl budget and crawl waste reports',
        '404, 5xx, 3xx, soft-404 and robots.txt violations',
        'Sitemap coverage, orphan pages and freshness score',
        'Apache, Nginx, IIS, CloudFront, Cloudflare and ALB formats',
        'CSV and single-file HTML export',
      ],
    },
  },
  knotvo: {
    name: 'Knotvo',
    path: { tr: '/knotvo', en: '/en/knotvo-site-speed-analyzer' },
    applicationSubCategory: 'Web Performance Analyzer',
    operatingSystem: 'macOS 14.0 or later',
    processorRequirements: 'Apple Silicon or Intel',
    image: `${BASE_URL}/knotvo/overview.png`,
    availability: 'https://schema.org/PreOrder',
    description: {
      tr: 'Knotvo, HAR dosyalarını ve canlı ölçümleri tek ekranda sade bir yapılacaklar listesine çeviren, Mac için tasarlanmış yerel bir site hızı analiz aracıdır.',
      en: 'Knotvo is a local Mac application that turns HAR files and live measurements into a single, plain to-do list for site speed.',
    },
    featureList: {
      tr: [
        'HAR dosyası analizi (tamamen yerel)',
        'Canlı ölçüm — PageSpeed Insights ve Lighthouse',
        'Core Web Vitals lab + saha verisi',
        'Waterfall zaman çizelgesi',
        'İki HAR karşılaştırma',
        'Sır temizleyip güvenli HAR paylaşımı',
        'PDF rapor çıktısı',
      ],
      en: [
        'HAR file analysis (entirely local)',
        'Live measurement — PageSpeed Insights and Lighthouse',
        'Core Web Vitals lab + field data',
        'Waterfall timeline',
        'Compare two HAR files',
        'Sanitize secrets for safe HAR sharing',
        'PDF report output',
      ],
    },
  },
  crawlseer: {
    name: 'Crawlseer',
    path: { tr: '/crawlseer', en: '/en/crawlseer' },
    applicationSubCategory: 'SEO Software',
    operatingSystem: 'Chrome 116 or later',
    softwareVersion: '1.0.0',
    image: `${BASE_URL}/crawlseer/promo-marquee-1400x560.png`,
    storeUrl: { tr: stores.crawlseer, en: stores.crawlseer },
    availability: 'https://schema.org/InStock',
    description: {
      tr: 'Sayfa içi SEO, schema, hreflang ve yapay zekâ tarayıcı denetimi yapan ücretsiz Chrome uzantısı.',
      en: 'A free Chrome extension that audits on-page SEO, schema, hreflang and AI crawler access.',
    },
    featureList: {
      tr: [
        '11 analiz sekmesi',
        'Tarayıcının kendi ölçümünden Core Web Vitals',
        '16 yapay zekâ tarayıcısı için robots.txt erişim matrisi',
        'Ham HTML ile render edilen DOM karşılaştırması',
        '21 tip için schema alan doğrulaması',
        'BCP 47 ile hreflang doğrulaması',
      ],
      en: [
        'Eleven analysis panes',
        'Core Web Vitals read from the browser’s own timeline',
        'A robots.txt access matrix for 16 AI crawlers',
        'Raw HTML compared with the rendered DOM',
        'Schema field validation for 21 types',
        'hreflang validated against BCP 47',
      ],
    },
  },
};

/** Canonical URL of a product page in one language. */
export const productUrl = (product: ProductKey, language: Language) =>
  `${BASE_URL}${products[product].path[language]}`;

/** The `@id` every page referring to this product must reuse. */
export const productId = (product: ProductKey, language: Language) =>
  `${productUrl(product, language)}#software`;

/**
 * The SoftwareApplication node without `@context`, for nesting under another
 * node (a page's `about`). Use `appSchema` for a standalone <script> block.
 */
export function appNode(product: ProductKey, language: Language): SchemaNode {
  const p = products[product];
  const store = p.storeUrl?.[language];
  return {
    '@type': 'SoftwareApplication',
    '@id': productId(product, language),
    name: p.name,
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: p.applicationSubCategory,
    operatingSystem: p.operatingSystem,
    ...(p.processorRequirements ? { processorRequirements: p.processorRequirements } : {}),
    ...(p.softwareVersion ? { softwareVersion: p.softwareVersion } : {}),
    ...(p.image ? { image: p.image } : {}),
    description: p.description[language],
    url: productUrl(product, language),
    inLanguage: inLanguage(language),
    ...(store ? { downloadUrl: store, installUrl: store, sameAs: store } : {}),
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: p.availability,
      ...(store ? { url: store } : {}),
    },
    featureList: p.featureList[language],
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
  };
}

/** Standalone SoftwareApplication schema for a product page. */
export const appSchema = (product: ProductKey, language: Language) =>
  withContext(appNode(product, language));

/**
 * A page that documents a product — support, privacy policy, accessibility.
 * Carrying the full app node as `about` (rather than a bare `@id`) is
 * deliberate: an `@id` only resolves inside the graph of the page it appears
 * on, so a reference on its own would dangle.
 */
export function productPageNode(options: {
  product: ProductKey;
  language: Language;
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}): SchemaNode {
  return {
    '@type': 'WebPage',
    '@id': `${options.url}#webpage`,
    name: options.name,
    description: options.description,
    url: options.url,
    inLanguage: inLanguage(options.language),
    isPartOf: ref(WEBSITE_ID),
    about: appNode(options.product, options.language),
    author: ref(PERSON_ID),
    publisher: ref(PERSON_ID),
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
  };
}

export const productPageSchema = (options: Parameters<typeof productPageNode>[0]) =>
  withContext(productPageNode(options));
