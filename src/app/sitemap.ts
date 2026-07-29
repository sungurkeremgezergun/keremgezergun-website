import { MetadataRoute } from 'next';
import { absoluteUrl, localeRoutes } from '@/lib/i18n';

// `priority` is deliberately omitted. Google ignores it, and a hand-maintained
// per-URL number is one more thing to keep honest for no gain.
type RouteSettings = {
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  /** Real last-substantive-change date, not the build date. Bump when you edit the page. */
  lastModified: string;
};

const settings: Record<string, RouteSettings> = {
  '/': { changeFrequency: 'monthly', lastModified: '2026-07-26' },
  '/blog': { changeFrequency: 'weekly', lastModified: '2026-07-26' },
  '/sektorel-projeler': { changeFrequency: 'monthly', lastModified: '2026-07-26' },
  '/seo-ogrenme-haritasi': { changeFrequency: 'weekly', lastModified: '2026-07-26' },
  '/nirengi': { changeFrequency: 'monthly', lastModified: '2026-07-26' },
  '/nirengi-erisilebirlik': { changeFrequency: 'yearly', lastModified: '2026-07-26' },
  '/nirengi-iletisim': { changeFrequency: 'yearly', lastModified: '2026-07-26' },
  '/nirengi-gizlilik-politikasi': { changeFrequency: 'yearly', lastModified: '2026-07-24' },
  '/knotvo': { changeFrequency: 'monthly', lastModified: '2026-07-26' },
  '/knotvo-destek': { changeFrequency: 'yearly', lastModified: '2026-07-26' },
  '/knotvo-gizlilik': { changeFrequency: 'yearly', lastModified: '2026-07-20' },
  '/crawlseer': { changeFrequency: 'monthly', lastModified: '2026-07-29' },
  '/crawlseer/gizlilik': { changeFrequency: 'yearly', lastModified: '2026-07-29' },
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
