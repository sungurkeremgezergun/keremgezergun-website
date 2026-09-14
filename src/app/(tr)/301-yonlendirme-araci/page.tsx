import type { Metadata } from 'next';
import RedirectMatcherPage from '@/components/redirect-matcher/Page';
import { matcherGraph, pageUrl } from '@/components/redirect-matcher/schema';
import { alternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';

const PAGE_URL = pageUrl('tr');

/**
 * Starts with the same phrase as the H1 — the title used to lead with "301
 * Yönlendirme Aracı" while the H1 said "301 Yönlendirme Eşleştirme Aracı",
 * leaving the primary target ambiguous — and it is short enough not to be cut
 * in the SERP once the root layout appends " | Kerem Gezergün".
 */
const TITLE = '301 Yönlendirme Eşleştirme Aracı — URL Haritası';

/** Word for word the promise the hero makes, so the click is not a bait. */
const DESCRIPTION =
  'Eski ve yeni URL listenizi yükleyin; araç her eski URL için en uygun yeni URL’yi bulur, benzerlik skoru ve gerekçesini gösterir, Apache veya nginx yönlendirme dosyanızı üretir. Tüm işlem tarayıcınızda çalışır.';

const SOCIAL_SUMMARY =
  'Site taşımasında 404 veren URL’leri yeni adresleriyle eşleştirin. Skorlama mantığı açık, dosyanız sunucuya yüklenmiyor.';

/**
 * The card was declaring summary_large_image with no image behind it, so every
 * LinkedIn, X and Slack share rendered an empty banner.
 */
const OG_IMAGE = {
  url: 'https://www.keremgezergun.com/301-yonlendirme-araci/og.png',
  width: 1200,
  height: 630,
  alt: '301 Yönlendirme Eşleştirme Aracı — skor, gerekçe ve uyarı sütunlarıyla sonuç tablosu',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternateMetadata('/301-yonlendirme-araci', '/en/redirect-mapping-tool'),
  openGraph: {
    title: TITLE,
    description: SOCIAL_SUMMARY,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [OG_IMAGE],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SOCIAL_SUMMARY,
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: [OG_IMAGE.url],
  },
};

export default function RedirectMatcherTurkishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(matcherGraph('tr')) }}
      />
      <RedirectMatcherPage language="tr" />
    </>
  );
}
