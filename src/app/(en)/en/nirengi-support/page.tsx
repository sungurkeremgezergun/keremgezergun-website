import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { productPageSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/nirengi-support';

export const metadata: Metadata = {
  title: 'Nirengi Support & Contact',
  description:
    'Get help with the Nirengi macOS SEO log analyzer: log formats, reports, exports, privacy and performance support.',
  alternates: englishAlternateMetadata('/nirengi-iletisim', '/en/nirengi-support'),
  openGraph: {
    title: 'Nirengi Support & Contact',
    description:
      'Support for Nirengi log formats, analysis results, exports and privacy questions.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirengi support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nirengi Support & Contact',
    description: 'Support for Nirengi log formats, reports, exports and privacy questions.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumb = breadcrumbSchema(
  'en',
  { name: 'Nirengi', url: 'https://www.keremgezergun.com/en/nirengi-log-analyzer' },
  { name: 'Support', url: PAGE_URL },
);

const pageSchema = productPageSchema({
  product: 'nirengi',
  language: 'en',
  name: 'Nirengi Support & Contact',
  description: 'Get help with the Nirengi macOS SEO log analyzer: log formats, reports, exports, privacy and performance support.',
  url: PAGE_URL,
});

const supportRows = [
  ['A log will not open', 'Your macOS and Nirengi versions, the file extension, approximate size and where the file lives'],
  ['Unsupported format', 'The server or CDN product, plus a few sample lines with real data removed'],
  ['Unexpected report', 'The report name, the filters applied, what you expected and an anonymized sample showing the difference'],
  ['Sitemap or robots.txt', 'The public URL, the HTTP status if you know it, and the warning shown'],
  ['Export problem', 'CSV or HTML, the destination, free disk space and the error message'],
  ['Performance', 'Mac model, memory, input size, elapsed time and whether bot verification was on'],
];

export default function EnglishNirengiSupportPage() {
  return (
    <main id="main-content" tabIndex={-1} className="nirengi-legal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }}
      />
      <div className="container nirengi-narrow">
        <p className="nirengi-eyebrow">Nirengi</p>
        <h1>Support and contact</h1>
        <p className="nirengi-lead">
          Need help with a log format, an analysis result, a privacy question or an export? Contact
          the developer directly.
        </p>

        <div className="nirengi-contact-grid">
          <a href="mailto:iletisim@keremgezergun.com?subject=Nirengi%20Support">
            <span>Email</span>
            <strong>iletisim@keremgezergun.com</strong>
          </a>
          <a href="tel:+905526902782">
            <span>Phone</span>
            <strong>+90 552 690 27 82</strong>
          </a>
        </div>

        <section aria-labelledby="request-title">
          <h2 id="request-title">What should you include in a support request?</h2>
          <div
            className="nirengi-table-wrap"
            tabIndex={0}
            role="region"
            aria-labelledby="support-caption"
          >
            <table>
              <caption id="support-caption">What to include in a support request, by issue</caption>
              <thead>
                <tr>
                  <th scope="col">Issue</th>
                  <th scope="col">Useful details</th>
                </tr>
              </thead>
              <tbody>
                {supportRows.map(([issue, info]) => (
                  <tr key={issue}>
                    <th scope="row">{issue}</th>
                    <td>{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="nirengi-note">
            <strong>Security note:</strong> do not email production logs before removing IP
            addresses, domains, URLs, cookies, access tokens and other confidential data. Nirengi
            support will never ask for your Apple ID password or a verification code.
          </p>
        </section>

        <Link className="nirengi-back" href="/en/nirengi-log-analyzer">
          ← Back to the Nirengi product page
        </Link>
      </div>
    </main>
  );
}
