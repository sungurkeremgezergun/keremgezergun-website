import { MetadataRoute } from 'next';
import { absoluteUrl, localeRoutes } from '@/lib/i18n';

const settings: Record<string, { changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }> = {
  '/': { changeFrequency: 'monthly', priority: 1 },
  '/blog': { changeFrequency: 'weekly', priority: 0.8 },
  '/sektorel-projeler': { changeFrequency: 'monthly', priority: 0.8 },
  '/seo-ogrenme-haritasi': { changeFrequency: 'weekly', priority: 0.9 },
  '/nirengi': { changeFrequency: 'monthly', priority: 0.8 },
  '/nirengi-erisilebirlik': { changeFrequency: 'yearly', priority: 0.4 },
  '/nirengi-iletisim': { changeFrequency: 'yearly', priority: 0.4 },
  '/nirengi-gizlilik-politikasi': { changeFrequency: 'yearly', priority: 0.3 },
  '/knotvo': { changeFrequency: 'monthly', priority: 0.8 },
  '/knotvo-destek': { changeFrequency: 'yearly', priority: 0.4 },
  '/knotvo-gizlilik': { changeFrequency: 'yearly', priority: 0.3 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-25');

  return localeRoutes.flatMap(({ tr, en }) => {
    const routeSettings = settings[tr];
    const languages = {
      tr: absoluteUrl(tr === '/' ? '/' : tr),
      en: absoluteUrl(en),
      'x-default': absoluteUrl(tr === '/' ? '/' : tr),
    };

    return [
      {
        url: languages.tr,
        lastModified,
        ...routeSettings,
        alternates: { languages },
      },
      {
        url: languages.en,
        lastModified,
        ...routeSettings,
        alternates: { languages },
      },
    ];
  });
}
