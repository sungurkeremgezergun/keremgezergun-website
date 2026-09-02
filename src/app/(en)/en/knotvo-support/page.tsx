import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { contact } from '@/lib/contact';
import { productPageSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/knotvo-support';

export const metadata: Metadata = {
  title: 'Knotvo — Support',
  description:
    'Knotvo support and FAQ: how to capture a HAR file, how live measurement works, how to reset your data and where to get help.',
  alternates: englishAlternateMetadata('/knotvo-destek', '/en/knotvo-support'),
  openGraph: {
    title: 'Knotvo — Support',
    description:
      'Knotvo support and FAQ: HAR files, live measurement, safe sharing and more.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/knotvo/overview.png',
        width: 1500,
        height: 834,
        alt: 'Knotvo support',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Knotvo — Support',
    description: 'Knotvo support and FAQ: HAR files, live measurement and safe sharing.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumb = breadcrumbSchema(
  'en',
  { name: 'Knotvo', url: 'https://www.keremgezergun.com/en/knotvo-site-speed-analyzer' },
  { name: 'Support', url: PAGE_URL },
);

const pageSchema = productPageSchema({
  product: 'knotvo',
  language: 'en',
  name: 'Knotvo — Support',
  description: 'Knotvo support and FAQ: how to capture a HAR file, how live measurement works, how to reset your data and where to get help.',
  url: PAGE_URL,
});

const faqs: Array<{ q: string; a: React.ReactNode; plain: string }> = [
  {
    q: 'What is a HAR file?',
    a: (
      <>
        A HAR (HTTP Archive) file is a log of a web page&apos;s network requests. In Chrome, Edge or
        Safari DevTools, open the <em>Network</em> tab, reload the page, then right-click →{' '}
        <em>Save all as HAR</em>. Open that file in Knotvo to analyze it.
      </>
    ),
    plain:
      'A HAR (HTTP Archive) file is a log of a web page’s network requests. In Chrome, Edge or Safari DevTools, open the Network tab, reload the page, then right-click → Save all as HAR. Open that file in Knotvo to analyze it.',
  },
  {
    q: 'Does my data leave my Mac?',
    a: (
      <>
        HAR analysis is 100% local — nothing is uploaded. The optional <em>live URL measurement</em>{' '}
        feature sends only the URL you enter to Google PageSpeed Insights. See the{' '}
        <Link href="/en/knotvo-privacy-policy">Privacy Policy</Link>.
      </>
    ),
    plain:
      'HAR analysis is 100% local — nothing is uploaded. The optional live URL measurement feature sends only the URL you enter to Google PageSpeed Insights.',
  },
  {
    q: 'Live measurement says "quota exceeded" or asks for a key.',
    a: (
      <>
        Live measurement uses Google&apos;s free PageSpeed Insights API. Create a free API key (no
        credit card, 25,000 queries per day) in the Google Cloud Console, then add it under{' '}
        <em>Settings → PageSpeed Insights API Key</em>.
      </>
    ),
    plain:
      "Live measurement uses Google's free PageSpeed Insights API. Create a free API key (no credit card, 25,000 queries per day) in the Google Cloud Console, then add it under Settings → PageSpeed Insights API Key.",
  },
  {
    q: 'Can I test a localhost, staging or password-protected page?',
    a: (
      <>
        Live measurement only works on public URLs, because Google has to be able to reach the page.
        For private or internal pages, capture a HAR in your browser and open it in Knotvo instead.
      </>
    ),
    plain:
      'Live measurement only works on public URLs, because Google has to be able to reach the page. For private or internal pages, capture a HAR in your browser and open it in Knotvo instead.',
  },
  {
    q: 'How do I safely share a HAR that contains secrets?',
    a: (
      <>
        Use <em>Sanitize → Share-Safe Copy</em>. Knotvo removes cookies, Authorization headers,
        tokens and body secrets and produces a clean copy locally — your original file is never
        changed.
      </>
    ),
    plain:
      'Use Sanitize → Share-Safe Copy. Knotvo removes cookies, Authorization headers, tokens and body secrets and produces a clean copy locally — your original file is never changed.',
  },
  {
    q: 'How do I reset everything?',
    a: (
      <>
        <em>Settings → Reset all data</em> permanently deletes all brands, sites, scans, your API
        key and your preferences.
      </>
    ),
    plain:
      'Settings → Reset all data permanently deletes all brands, sites, scans, your API key and your preferences.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en',
  mainEntity: faqs.map(({ q, plain }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: plain },
  })),
};

export default function EnglishKnotvoSupportPage() {
  return (
    <main id="main-content" tabIndex={-1} className="knotvo-legal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />

      <p style={{ marginBottom: 24 }}>
        <Link href="/en/knotvo-site-speed-analyzer">← Knotvo</Link>
      </p>

      <h1>Knotvo — Support</h1>
      <p>
        Need help with Knotvo? Email <a href={`mailto:${contact.email}`}>{contact.email}</a> and
        I&apos;ll get back to you.
      </p>

      <h2>Frequently asked questions</h2>
      {faqs.map(({ q, a }) => (
        <div key={q}>
          <p className="q">{q}</p>
          <p>{a}</p>
        </div>
      ))}

      <h2>Contact</h2>
      <address>
        {contact.name}
        <br />
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Phone: <a href={contact.phoneHref}>{contact.phone}</a>
        <br />
        Address: {contact.address.en}
        <br />
        Web: <a href={contact.website}>{contact.websiteLabel}</a>
      </address>
    </main>
  );
}
