import type { Metadata } from 'next';
import RedirectMatcherPage from '@/components/redirect-matcher/Page';
import { matcherGraph, pageUrl } from '@/components/redirect-matcher/schema';
import { alternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';

const PAGE_URL = pageUrl('tr');
const TITLE = '301 Yönlendirme Aracı — URL Eşleştirme ve Yönlendirme Haritası';
const DESCRIPTION =
  'Eski ve yeni URL listenizi yükleyin; araç her 404 veren URL için en uygun yeni adresi bulur, benzerlik skorunu gerekçesiyle gösterir, Apache ve nginx yönlendirme dosyanızı üretir. Tüm işlem tarayıcınızda.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '301 yönlendirme aracı',
    'url eşleştirme aracı',
    'site taşıma yönlendirme',
    'redirect mapping',
    'yönlendirme haritası',
    '404 yönlendirme',
    'htaccess yönlendirme oluşturucu',
  ],
  alternates: alternateMetadata('/301-yonlendirme-araci', '/en/redirect-mapping-tool'),
  openGraph: {
    title: TITLE,
    description:
      'Site taşımasında 404 veren URL’leri yeni adreslerle eşleştirin. Skorlama mantığı açık, dosyanız sunucuya yüklenmiyor.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Site taşımasında 404 veren URL’leri yeni adreslerle eşleştirin. Tüm işlem tarayıcınızda.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
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
