import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { productPageSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/nirengi-privacy-policy';

export const metadata: Metadata = {
  title: 'Nirengi Privacy Policy',
  description:
    'How Nirengi protects your data through local macOS processing, optional network requests and account-free operation.',
  alternates: englishAlternateMetadata('/nirengi-gizlilik-politikasi', '/en/nirengi-privacy-policy'),
  openGraph: {
    title: 'Nirengi Privacy Policy',
    description:
      'Nirengi does not upload the log files you select or the results it produces. Read the details.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirengi privacy policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nirengi Privacy Policy',
    description: 'Nirengi does not upload the log files you select or the results it produces.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumb = breadcrumbSchema(
  'en',
  { name: 'Nirengi', url: 'https://www.keremgezergun.com/en/nirengi-log-analyzer' },
  { name: 'Privacy Policy', url: PAGE_URL },
);

const pageSchema = productPageSchema({
  product: 'nirengi',
  language: 'en',
  name: 'Nirengi Privacy Policy',
  description: 'How Nirengi protects your data through local macOS processing, optional network requests and account-free operation.',
  url: PAGE_URL,
});

export default function EnglishNirengiPrivacyPage() {
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
      <article className="container nirengi-narrow">
        <p className="nirengi-eyebrow">Nirengi</p>
        <h1>Privacy Policy</h1>
        <p className="nirengi-updated">Effective and last updated: <time dateTime="2026-07-24">24 July 2026</time></p>
        <p className="nirengi-summary">
          <strong>In short:</strong> Nirengi does not upload the log files you select or the
          analysis results it produces. Optional network features and support communication are
          described below.
        </p>
        <div className="nirengi-policy">
          <section>
            <h2>1. Scope</h2>
            <p>
              This policy covers the Nirengi macOS application and its product, support and privacy
              pages, provided by Sungur Kerem Gezergün.
            </p>
          </section>
          <section>
            <h2>2. Data collection</h2>
            <p>
              Nirengi requires no account and contains no advertising, analytics, tracking pixels,
              telemetry or crash-reporting SDK. Your log files and analysis results are not sent to
              the developer through the application.
            </p>
          </section>
          <section>
            <h2>3. Files and on-device processing</h2>
            <p>
              The files you select are accessed through the macOS App Sandbox and processed
              locally. Results and exports stay on your device or in a location you explicitly
              choose.
            </p>
          </section>
          <section>
            <h2>4. Optional network requests</h2>
            <p>
              Network access is used only for a feature you initiate: downloading a sitemap address
              you supply or the site&apos;s robots.txt file, verifying supported search bots via
              DNS, and opening product or support links. These requests do not pass through any
              developer-operated analytics server.
            </p>
          </section>
          <section>
            <h2>5. Website data</h2>
            <p>
              The Nirengi pages use the hosting and measurement infrastructure of the main website.
              Standard server access logs may be created by the hosting provider for security and
              continuity.
            </p>
          </section>
          <section>
            <h2>6. Support communication</h2>
            <p>
              Information you voluntarily share for support is used only to answer your request and
              resolve the issue. Do not send production logs before removing confidential
              information.
            </p>
          </section>
          <section>
            <h2>7. Children</h2>
            <p>
              Nirengi is a professional technical tool and is not directed at children. The
              application does not knowingly collect personal information from children.
            </p>
          </section>
          <section>
            <h2>8. Changes</h2>
            <p>
              If data practices change, this policy and the App Store privacy declaration will be
              updated before or alongside the relevant release.
            </p>
          </section>
          <section>
            <h2>9. Contact</h2>
            <address>
              Data controller and developer: Sungur Kerem Gezergün
              <br />
              Email: <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a>
              <br />
              Phone: <a href="tel:+905526902782">+90 552 690 27 82</a>
            </address>
          </section>
        </div>
        <Link className="nirengi-back" href="/en/nirengi-log-analyzer">
          ← Back to the Nirengi product page
        </Link>
      </article>
    </main>
  );
}
