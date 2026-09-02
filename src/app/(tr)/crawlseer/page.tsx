import type { Metadata } from 'next';
import CrawlseerLanding from '@/components/crawlseer/Landing';
import { faqs } from '@/components/crawlseer/content';
import { jsonLdSafe } from '@/lib/jsonLd';
import { alternateMetadata } from '@/lib/i18n';
import { appSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/crawlseer';

export const metadata: Metadata = {
  title: 'Crawlseer — Sayfa İçi SEO ve AI Crawler Denetimi',
  description:
    'Açık olan sayfayı tek tıkla denetleyin: SEO skoru, schema doğrulama, hreflang, Core Web Vitals ve 16 yapay zekâ tarayıcısı için robots.txt erişim matrisi. Ücretsiz Chrome uzantısı.',
  keywords: ['SEO uzantısı', 'Chrome SEO eklentisi', 'AI crawler denetimi', 'schema doğrulama', 'hreflang kontrolü', 'Core Web Vitals', 'Crawlseer'],
  alternates: alternateMetadata('/crawlseer', '/en/crawlseer'),
  openGraph: {
    title: 'Crawlseer — Sayfa İçi SEO ve AI Crawler Denetimi',
    description: '11 analiz sekmesi, Core Web Vitals, 16 AI crawler matrisi. Ücretsiz Chrome uzantısı, veri toplamaz.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [{ url: 'https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png', width: 1400, height: 560, alt: 'Crawlseer Chrome uzantısı' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crawlseer — Sayfa İçi SEO ve AI Crawler Denetimi',
    description: '11 analiz sekmesi, Core Web Vitals, 16 AI crawler matrisi. Ücretsiz Chrome uzantısı.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/crawlseer/promo-marquee-1400x560.png'],
  },
};


const breadcrumb = breadcrumbSchema('tr', { name: 'Crawlseer', url: PAGE_URL });

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'tr',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q.tr,
    acceptedAnswer: { '@type': 'Answer', text: a.tr },
  })),
};

export default function CrawlseerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(appSchema('crawlseer', 'tr')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }} />
      <CrawlseerLanding language="tr" />
    </>
  );
}
