import type { Metadata } from 'next';
import Link from 'next/link';
import CookiePreferencesButton from '@/components/layout/CookiePreferencesButton';
import { contact } from '@/lib/contact';
import { englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { breadcrumbSchema } from '@/lib/schema/page';

const PAGE_URL = 'https://www.keremgezergun.com/en/cookie-policy';

const TITLE = 'Cookie Policy';
const DESCRIPTION =
  'Which cookies keremgezergun.com uses and why, where the data goes, and how to change your preference.';

const UPDATED = '2026-09-22';
const UPDATED_LABEL = '22 September 2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: englishAlternateMetadata('/cerez-politikasi', '/en/cookie-policy'),
  openGraph: {
    title: `${TITLE} | Kerem Gezergün`,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumb = breadcrumbSchema('en', { name: TITLE, url: PAGE_URL });

export default function CookiePolicyPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }}
      />

      <section className="page-header article-header" aria-labelledby="page-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/en">Home</Link>
              </li>
              <li aria-current="page">{TITLE}</li>
            </ol>
          </nav>
          <h1 id="page-title">{TITLE}</h1>
          <p className="article-meta">
            <span>
              Last updated: <time dateTime={UPDATED}>{UPDATED_LABEL}</time>
            </span>
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <article className="article">
            <p>
              This page explains which cookies and similar technologies{' '}
              <strong>keremgezergun.com</strong> uses and why, where the data goes, and how you can
              change your preference. The data controller is {contact.name}.
            </p>

            <h2>Change your preference</h2>
            <p>
              Analytics cookies are only used if you accept them. You can change or withdraw your
              choice at any time with the button below; declining also deletes any existing Google
              Analytics cookies.
            </p>
            <p>
              <CookiePreferencesButton label="Change cookie preference" />
            </p>

            <h2>Non-essential cookies: Google Analytics</h2>
            <p>
              We use Google Analytics 4 to understand which pages are visited and how often. It is
              only loaded when you choose <strong>“Accept”</strong> in the cookie bar. If you do not
              accept, no request is sent to Google and the cookies below are not created.
            </p>
            <div className="table-wrapper">
              <table>
                <caption className="visually-hidden">Google Analytics cookies</caption>
                <thead>
                  <tr>
                    <th scope="col">Cookie</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Holds a random identifier to distinguish visitors.</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>_ga_*</td>
                    <td>Keeps session state and links page views together.</td>
                    <td>2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The data collected is page views, approximate location (city level), device and
              browser type, and traffic source. Google Analytics 4 does not store IP addresses. The
              processor is Google LLC and the data is transferred to Google servers abroad; see the{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              . The legal basis is your consent (GDPR Art. 6(1)(a); Turkish KVKK Art. 5(1)).
            </p>
            <p>
              We use no cookies for advertising, remarketing or profiling; Google Analytics’
              advertising features are switched off.
            </p>

            <h2>Preferences kept in your browser (not cookies)</h2>
            <p>
              The following is kept in your browser’s local storage, never sent to a server, and
              independent of the cookie bar; it is needed for the site to work:
            </p>
            <ul className="article-fragments">
              <li>
                <strong>cookie-consent</strong> — your answer to the cookie bar, so it does not
                reappear on every visit.
              </li>
              <li>
                <strong>redirect-matcher-settings</strong> — the threshold, weight and output
                format preferences in the Redirect Mapping Tool. Your URL lists are not stored.
              </li>
            </ul>
            <p>You can delete these at any time by clearing the site data in your browser.</p>

            <h2>Third-party content</h2>
            <p>
              Some blog posts embed a Spotify podcast episode. The embedded player only loads on
              that page, and Spotify may use its own cookies under its own policy:{' '}
              <a href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noopener noreferrer">
                Spotify Cookie Policy
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>

            <h2>Your rights and contact</h2>
            <p>
              To exercise your data protection rights or ask about this policy, write to{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
