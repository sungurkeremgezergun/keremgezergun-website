import type { Metadata } from 'next';
import CrawlseerPrivacy from '@/components/crawlseer/Privacy';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';

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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.keremgezergun.com/en' },
    { '@type': 'ListItem', position: 2, name: 'Crawlseer', item: 'https://www.keremgezergun.com/en/crawlseer' },
    { '@type': 'ListItem', position: 3, name: 'Privacy Policy', item: PAGE_URL },
  ],
};

export default function EnglishCrawlseerPrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }} />
      <CrawlseerPrivacy language="en" />
    </>
  );
}
