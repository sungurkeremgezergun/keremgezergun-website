import type { Metadata } from 'next';
import CrawlseerLanding from '@/components/crawlseer/Landing';
import { faqs } from '@/components/crawlseer/content';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { appSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

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


const breadcrumb = breadcrumbSchema('en', { name: 'Crawlseer', url: PAGE_URL });

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(appSchema('crawlseer', 'en')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }} />
      <CrawlseerLanding language="en" />
    </>
  );
}
