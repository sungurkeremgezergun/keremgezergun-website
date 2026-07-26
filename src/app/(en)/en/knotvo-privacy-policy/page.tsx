import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { contact, policyDates } from '@/lib/contact';

const PAGE_URL = 'https://www.keremgezergun.com/en/knotvo-privacy-policy';

export const metadata: Metadata = {
  title: 'Knotvo — Privacy Policy',
  description:
    'How Knotvo handles HAR files, live URL measurements, API keys, local processing and support communication.',
  alternates: englishAlternateMetadata('/knotvo-gizlilik', '/en/knotvo-privacy-policy'),
  openGraph: {
    title: 'Knotvo — Privacy Policy',
    description:
      'Knotvo has no account system, analytics or telemetry. HAR analysis never leaves your Mac.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/knotvo/overview.png',
        width: 1500,
        height: 834,
        alt: 'Knotvo privacy policy',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Knotvo — Privacy Policy',
    description: 'Knotvo has no account system, analytics or telemetry.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.keremgezergun.com/en' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Knotvo',
      item: 'https://www.keremgezergun.com/en/knotvo-site-speed-analyzer',
    },
    { '@type': 'ListItem', position: 3, name: 'Privacy Policy', item: PAGE_URL },
  ],
};

export default function EnglishKnotvoPrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="knotvo-legal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      <p style={{ marginBottom: 24 }}>
        <Link href="/en/knotvo-site-speed-analyzer">← Knotvo</Link>
      </p>

      <h1>Knotvo — Privacy Policy</h1>
      <p className="muted">Last updated: {policyDates.knotvo.iso}</p>

      <p>
        Knotvo is a local macOS application that analyses web performance from HAR files and live
        measurements. It is designed to respect your privacy by default.
      </p>

      <h2>What we collect</h2>
      <p>
        <strong>Nothing.</strong> Knotvo has no account system, login, analytics or telemetry. We do
        not collect, transmit or store any personal data on our servers — we do not operate a server
        that receives your data at all.
      </p>

      <h2>Data stored on your device</h2>
      <ul>
        <li>
          <strong>HAR files and analysis results</strong> — parsed and analysed entirely on your Mac.
          HAR files never leave your device.
        </li>
        <li>
          <strong>Brands, sites and scan history</strong> — stored locally on your Mac.
        </li>
        <li>
          <strong>Your PageSpeed Insights API key</strong> (optional) — stored locally on your Mac
          and used only to authenticate your own Google requests.
        </li>
      </ul>
      <p>
        This data stays on your device and is never sent to us. You can delete all of it at any time
        with <em>Settings → Reset all data</em>.
      </p>

      <h2>Live measurement (optional feature)</h2>
      <p>
        When you use the <strong>live URL measurement</strong> feature, Knotvo sends the URL you
        entered to Google&apos;s <strong>PageSpeed Insights API</strong> so that Google can measure
        the page. In that case the URL — and your API key, if you configured one — is passed to
        Google and is subject to{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s Privacy Policy
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        . Only publicly reachable URLs can be measured this way. HAR file analysis uses no network
        at all.
      </p>

      <h2>What we do NOT do</h2>
      <ul>
        <li>No advertising, no advertising identifiers, no third-party trackers.</li>
        <li>No third-party crash or usage reporting.</li>
        <li>No cookies.</li>
        <li>No selling or sharing of any data (we have no data to sell).</li>
      </ul>

      <h2>Children</h2>
      <p>Knotvo is a developer tool and is not directed at children.</p>

      <h2>Contact</h2>
      <p>Questions about this policy:</p>
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
