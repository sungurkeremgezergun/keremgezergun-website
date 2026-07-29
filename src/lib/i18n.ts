const BASE_URL = 'https://www.keremgezergun.com';

export type Language = 'tr' | 'en';

/** A string that exists in both site languages. Pick with `text[language]`. */
export type Localized = { tr: string; en: string };

export const localeRoutes = [
  { tr: '/', en: '/en' },
  { tr: '/blog', en: '/en/seo-blog' },
  { tr: '/sektorel-projeler', en: '/en/industry-projects' },
  { tr: '/seo-ogrenme-haritasi', en: '/en/seo-learning-roadmap' },
  { tr: '/knotvo', en: '/en/knotvo-site-speed-analyzer' },
  { tr: '/knotvo-destek', en: '/en/knotvo-support' },
  { tr: '/knotvo-gizlilik', en: '/en/knotvo-privacy-policy' },
  { tr: '/nirengi', en: '/en/nirengi-log-analyzer' },
  { tr: '/nirengi-iletisim', en: '/en/nirengi-support' },
  { tr: '/nirengi-gizlilik-politikasi', en: '/en/nirengi-privacy-policy' },
  { tr: '/nirengi-erisilebirlik', en: '/en/nirengi-accessibility' },
  { tr: '/crawlseer', en: '/en/crawlseer' },
  { tr: '/crawlseer/gizlilik', en: '/en/crawlseer/privacy' },
] as const;

export type LocaleRoute = (typeof localeRoutes)[number];

const normalizePath = (path: string) => {
  if (path === '/' || path === '/en') return path;
  return path.replace(/\/$/, '');
};

export function routePair(path: string): LocaleRoute | undefined {
  const normalized = normalizePath(path);
  return localeRoutes.find((route) => route.tr === normalized || route.en === normalized);
}

export function alternateMetadata(trPath: string, enPath: string) {
  return {
    canonical: `${BASE_URL}${trPath === '/' ? '/' : trPath}`,
    languages: {
      tr: `${BASE_URL}${trPath === '/' ? '/' : trPath}`,
      en: `${BASE_URL}${enPath}`,
      'x-default': `${BASE_URL}${trPath === '/' ? '/' : trPath}`,
    },
  };
}

export function englishAlternateMetadata(trPath: string, enPath: string) {
  return {
    canonical: `${BASE_URL}${enPath}`,
    languages: {
      tr: `${BASE_URL}${trPath === '/' ? '/' : trPath}`,
      en: `${BASE_URL}${enPath}`,
      'x-default': `${BASE_URL}${trPath === '/' ? '/' : trPath}`,
    },
  };
}

export const absoluteUrl = (path: string) => `${BASE_URL}${path}`;
