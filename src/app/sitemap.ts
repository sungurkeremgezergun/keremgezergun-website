import { MetadataRoute } from 'next';
import { absoluteUrl, localeRoutes } from '@/lib/i18n';

type RouteSettings = {
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Real last-substantive-change date, not the build date. Bump when you edit the page. */
  lastModified: string;
};

const settings: Record<string, RouteSettings> = {
  '/': { changeFrequency: 'monthly', priority: 1, lastModified: '2026-07-26' },
  '/blog': { changeFrequency: 'weekly', priority: 0.8, lastModified: '2026-07-26' },
  '/sektorel-projeler': { changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-07-26' },
  '/seo-ogrenme-haritasi': { changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-07-26' },
  '/nirengi': { changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-07-26' },
  '/nirengi-erisilebirlik': { changeFrequency: 'yearly', priority: 0.4, lastModified: '2026-07-26' },
  '/nirengi-iletisim': { changeFrequency: 'yearly', priority: 0.4, lastModified: '2026-07-26' },
  '/nirengi-gizlilik-politikasi': {
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: '2026-07-24',
  },
  '/knotvo': { changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-07-26' },
  '/knotvo-destek': { changeFrequency: 'yearly', priority: 0.4, lastModified: '2026-07-26' },
  '/knotvo-gizlilik': { changeFrequency: 'yearly', priority: 0.3, lastModified: '2026-07-20' },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return localeRoutes.flatMap(({ tr, en }) => {
    const { lastModified, ...routeSettings } = settings[tr];
    const languages = {
      tr: absoluteUrl(tr === '/' ? '/' : tr),
      en: absoluteUrl(en),
      'x-default': absoluteUrl(tr === '/' ? '/' : tr),
    };
    const modified = new Date(lastModified);

    return [
      { url: languages.tr, lastModified: modified, ...routeSettings, alternates: { languages } },
      { url: languages.en, lastModified: modified, ...routeSettings, alternates: { languages } },
    ];
  });
}
