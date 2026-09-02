import type { Metadata } from 'next';
import CrawlseerLanding from '@/components/crawlseer/Landing';
import { faqs } from '@/components/crawlseer/content';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { stores } from '@/lib/contact';

const STORE_URL = stores.crawlseer;
const PAGE_URL = 'https://www.keremgezergun.com/en/crawlseer';

export const metadata: Metadata = {
  title: 'Crawlseer — On-Page SEO and AI Crawler Audit',
  description:
    'Audit the open page in one click: SEO score, schema validation, hreflang, Core Web Vitals and a robots.txt access matrix for 16 AI crawlers. A free Chrome extension.',
  keywords: ['SEO extension', 'Chrome SEO plugin', 'AI crawler audit', 'schema validation', 'hreflang checker', 'Core Web Vitals', 'Crawlseer'],
  alternates: englishAlternateMetadata('/crawlseer', '/en/crawlseer'),
  openGraph: {
    title: 'Crawlseer — On-Page SEO and AI Crawler Audit',
    description: 'Eleven analysis panes, Core Web Vitals, a 16-crawler AI matrix. Free Chrome extension, collects no data.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [{ url: 'https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png', width: 1400, height: 560, alt: 'The Crawlseer Chrome extension' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crawlseer — On-Page SEO and AI Crawler Audit',
    description: 'Eleven analysis panes, Core Web Vitals, a 16-crawler AI matrix. Free Chrome extension.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png'],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#software`,
  name: 'Crawlseer',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'SEO Software',
  operatingSystem: 'Chrome 116 or later',
  softwareVersion: '1.0.0',
  inLanguage: 'en',
  description: 'A free Chrome extension that audits on-page SEO, schema, hreflang and AI crawler access.',
  url: PAGE_URL,
  image: 'https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png',
  downloadUrl: STORE_URL,
  installUrl: STORE_URL,
  sameAs: STORE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    url: STORE_URL,
    availability: 'https://schema.org/InStock',
  },
  author: { '@type': 'Person', '@id': 'https://www.keremgezergun.com/#person', name: 'Sungur Kerem Gezergün' },
  publisher: { '@id': 'https://www.keremgezergun.com/#person' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.keremgezergun.com/en' },
    { '@type': 'ListItem', position: 2, name: 'Crawlseer', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q.en,
    acceptedAnswer: { '@type': 'Answer', text: a.en },
  })),
};

export default function EnglishCrawlseerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }} />
      <CrawlseerLanding language="en" />
    </>
  );
}
