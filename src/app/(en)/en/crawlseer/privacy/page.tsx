import type { Metadata } from 'next';
import CrawlseerPrivacy from '@/components/crawlseer/Privacy';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { productPageSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/crawlseer/privacy';

export const metadata: Metadata = {
  title: 'Crawlseer — Privacy Policy',
  description:
    'Crawlseer sends nothing to the developer. There is no backend server; every analysis runs in your browser and all data stays on your device.',
  alternates: englishAlternateMetadata('/crawlseer/gizlilik', '/en/crawlseer/privacy'),
  openGraph: {
    title: 'Crawlseer — Privacy Policy',
    description: 'Crawlseer sends nothing to the developer. There is no backend server; every analysis runs in your browser and all data stays on your device.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [{ url: 'https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png', width: 1400, height: 560, alt: 'Crawlseer' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Crawlseer — Privacy Policy',
    description: 'Crawlseer sends nothing to the developer. There is no backend server; every analysis runs in your browser and all data stays on your device.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumb = breadcrumbSchema(
  'en',
  { name: 'Crawlseer', url: 'https://www.keremgezergun.com/en/crawlseer' },
  { name: 'Privacy Policy', url: PAGE_URL },
);

const pageSchema = productPageSchema({
  product: 'crawlseer',
  language: 'en',
  name: 'Crawlseer — Privacy Policy',
  description: 'Crawlseer sends nothing to the developer. There is no backend server; every analysis runs in your browser and all data stays on your device.',
  url: PAGE_URL,
});

export default function EnglishCrawlseerPrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }} />
      <CrawlseerPrivacy language="en" />
    </>
  );
}
