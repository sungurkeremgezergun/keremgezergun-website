import type { Metadata } from 'next';
import CrawlseerPrivacy from '@/components/crawlseer/Privacy';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';

const PAGE_URL = 'https://www.keremgezergun.com/crawlseer/gizlilik';

export const metadata: Metadata = {
  title: 'Crawlseer — Gizlilik Politikası',
  description:
    'Crawlseer hiçbir veriyi geliştiriciye göndermez. Arka uç sunucu yoktur; tüm analiz tarayıcınızda çalışır ve veriler cihazınızda kalır.',
  alternates: alternateMetadata('/crawlseer/gizlilik', '/en/crawlseer/privacy'),
  openGraph: {
    title: 'Crawlseer — Gizlilik Politikası',
    description: 'Crawlseer hiçbir veriyi geliştiriciye göndermez. Arka uç sunucu yoktur; tüm analiz tarayıcınızda çalışır ve veriler cihazınızda kalır.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [{ url: 'https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png', width: 1400, height: 560, alt: 'Crawlseer' }],
    locale: 'tr_TR',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Crawlseer — Gizlilik Politikası',
    description: 'Crawlseer hiçbir veriyi geliştiriciye göndermez. Arka uç sunucu yoktur; tüm analiz tarayıcınızda çalışır ve veriler cihazınızda kalır.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.keremgezergun.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crawlseer', item: 'https://www.keremgezergun.com/crawlseer' },
    { '@type': 'ListItem', position: 3, name: 'Gizlilik Politikası', item: PAGE_URL },
  ],
};

export default function CrawlseerPrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }} />
      <CrawlseerPrivacy language="tr" />
    </>
  );
}
