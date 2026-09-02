import type { Metadata } from 'next';
import CrawlseerPrivacy from '@/components/crawlseer/Privacy';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';
import { productPageSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

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

const breadcrumb = breadcrumbSchema(
  'tr',
  { name: 'Crawlseer', url: 'https://www.keremgezergun.com/crawlseer' },
  { name: 'Gizlilik Politikası', url: PAGE_URL },
);

const pageSchema = productPageSchema({
  product: 'crawlseer',
  language: 'tr',
  name: 'Crawlseer — Gizlilik Politikası',
  description: 'Crawlseer hiçbir veriyi geliştiriciye göndermez. Arka uç sunucu yoktur; tüm analiz tarayıcınızda çalışır ve veriler cihazınızda kalır.',
  url: PAGE_URL,
});

export default function CrawlseerPrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }} />
      <CrawlseerPrivacy language="tr" />
    </>
  );
}
