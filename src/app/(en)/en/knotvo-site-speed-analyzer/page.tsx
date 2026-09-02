import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { appSchema } from '@/lib/schema/product';
import { breadcrumbSchema } from '@/lib/schema/page';

import overviewShot from '../../../../../public/knotvo/overview.png';
import insightShot from '../../../../../public/knotvo/insight.png';
import waterfallShot from '../../../../../public/knotvo/waterfall.png';
import requestsShot from '../../../../../public/knotvo/requests.png';
import reportsShot from '../../../../../public/knotvo/reports.png';

const PAGE_URL = 'https://www.keremgezergun.com/en/knotvo-site-speed-analyzer';
const NOTIFY_MAILTO = 'mailto:iletisim@keremgezergun.com?subject=Notify%20me%20about%20Knotvo';

export const metadata: Metadata = {
  title: 'Knotvo — Site Speed Analyzer for Mac',
  description:
    'Knotvo turns HAR files and live measurements into a plain to-do list on macOS. Fully local, no account, no subscription.',
  keywords: [
    'site speed analyzer',
    'HAR analysis',
    'Core Web Vitals',
    'Mac performance tool',
    'PageSpeed Insights',
    'web performance',
    'Knotvo',
  ],
  alternates: englishAlternateMetadata('/knotvo', '/en/knotvo-site-speed-analyzer'),
  openGraph: {
    title: 'Knotvo — Site Speed Analyzer for Mac',
    description:
      'A Mac site speed analyzer that turns HAR files and live measurements into a plain to-do list. Fully local, no account, no subscription.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/knotvo/overview.png',
        width: 1500,
        height: 834,
        alt: 'The Knotvo overview screen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knotvo — Site Speed Analyzer for Mac',
    description:
      'A Mac site speed analyzer that turns HAR files and live measurements into a plain to-do list.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/knotvo/overview.png'],
  },
};


const breadcrumb = breadcrumbSchema('en', { name: 'Knotvo', url: PAGE_URL });

const faqs = [
  {
    q: 'What exactly does Knotvo do?',
    a: 'It is a site speed analyzer. It inspects HAR files and live measurements, analyses network requests, Core Web Vitals and third-party load, and turns all of it into a prioritized to-do list.',
  },
  {
    q: 'Does my data go to the cloud?',
    a: 'HAR analysis happens entirely on your machine and nothing is uploaded. Only when you use live measurement is the address you enter sent to Google PageSpeed Insights, and the app states this clearly.',
  },
  {
    q: 'Can I test localhost or staging?',
    a: 'Yes. Capture a HAR in your browser and open it in Knotvo. Unlike cloud tools it can analyse internal and private pages. Live measurement, however, only works on public addresses.',
  },
  {
    q: 'Can I safely share a HAR that contains secrets?',
    a: 'Use the Sanitize feature. It strips cookies, authorization headers and tokens and produces a share-safe copy. Your original file is left untouched.',
  },
  {
    q: 'Which devices does it run on?',
    a: 'Knotvo is currently a Mac application requiring macOS 14 or later. It supports both Apple Silicon and Intel processors.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const comparisonRows: Array<[string, string, string, string, string]> = [
  ['Turns a HAR into a to-do list', 'yes', 'no', 'no', 'no'],
  ['Compare two HAR files', 'yes', 'no', 'no', 'no'],
  ['Test localhost and staging', 'yes', 'no', 'partial', 'partial'],
  ['Sanitize secrets for safe sharing', 'yes', 'no', 'no', 'basic'],
  ['No account or login required', 'yes', 'no', 'yes', 'yes'],
  ['No quotas or queues', 'yes', 'no', 'yes', 'yes'],
  ['Data stays on your device', 'yes', 'no', 'yes', 'varies'],
  ['Lab and real-user data together', 'yes', 'separate', 'no', 'no'],
];

const cellClass = (value: string) =>
  value === 'yes' ? 'yes' : value === 'no' ? 'no' : 'partial';

export default function EnglishKnotvoPage() {
  return (
    <main id="main-content" tabIndex={-1} className="knotvo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(appSchema('knotvo', 'en')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />

      {/* HERO */}
      <section className="knotvo-hero" aria-labelledby="knotvo-title">
        <div className="container">
          <span className="k-badge">Designed for Mac</span>
          <h1 id="knotvo-title">
            The site speed analyzer that shows you exactly{' '}
            <span className="k-hl">why your site is slow</span>
          </h1>
          <p className="k-lead">
            Knotvo brings your browser&apos;s network capture (HAR) and live measurement into one
            screen, then tells you what to do about it — with a plain to-do list rather than opaque
            scores. No account to create, no queue to wait in, and your data never leaves your
            machine.
          </p>
          <div className="k-cta-row">
            <a className="btn btn-primary btn-large" href={NOTIFY_MAILTO}>
              Notify me
            </a>
            <a className="btn btn-outline btn-large" href="#features">
              See what it can do
            </a>
          </div>
          <p className="k-macnote">
            🍎 Coming soon to the Mac App Store · macOS 14+ · Apple Silicon and Intel
          </p>

          <div className="k-heroshot k-shot">
            <Image
              src={overviewShot}
              alt="The Knotvo overview screen: performance score, biggest bottlenecks and estimated gain"
              placeholder="blur"
              priority
              fetchPriority="high"
              sizes="(max-width: 1100px) 100vw, 1080px"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="knotvo-section" style={{ paddingTop: 8 }} aria-label="Highlights">
        <div className="container">
          <div className="k-stats">
            <div className="k-stat">
              <strong>Local</strong>
              <span>HAR analysis runs on your machine; nothing is uploaded</span>
            </div>
            <div className="k-stat">
              <strong>22+</strong>
              <span>Automated performance rules, each with an estimated gain</span>
            </div>
            <div className="k-stat">
              <strong>Unlimited</strong>
              <span>No account, no queue, no monthly payment</span>
            </div>
            <div className="k-stat">
              <strong>Lab + Field</strong>
              <span>Lighthouse measurement and real-user data side by side</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1 */}
      <section id="features" className="knotvo-section" aria-labelledby="k-f1">
        <div className="container">
          <div className="k-feature">
            <div className="k-txt">
              <div className="k-eyebrow">Analysis screen</div>
              <h2 id="k-f1">Your site&apos;s health at a glance</h2>
              <p>
                The performance score, the three bottlenecks costing you the most time, and the
                estimated gain from completing the top three fixes — all on one screen, colour-coded
                by priority.
              </p>
              <ul className="k-flist">
                <li>A &ldquo;why this score&rdquo; explanation next to the number</li>
                <li>Findings ordered from critical to low</li>
                <li>Estimated byte and time savings for every finding</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image
                src={overviewShot}
                alt="The Knotvo overview screen"
                placeholder="blur"
                sizes="(max-width: 820px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2 */}
      <section className="knotvo-section alt" aria-labelledby="k-f2">
        <div className="container">
          <div className="k-feature rev">
            <div className="k-txt">
              <div className="k-eyebrow">Plain language</div>
              <h2 id="k-f2">Not raw metrics — what you need to do</h2>
              <p>
                Most tools hand you a pile of numbers and leave the interpretation to you. Knotvo
                writes plain sentences instead: &ldquo;the page receives its first byte late; the
                real problem is server response&rdquo;. You can show it to your manager or client
                as-is.
              </p>
              <ul className="k-flist">
                <li>Readable even by someone non-technical</li>
                <li>Catches misdiagnoses too, such as a late-loading hero image</li>
                <li>Filter by category: images, JavaScript, network, cache</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image
                src={insightShot}
                alt="The Knotvo insight screen with plain-language explanations"
                placeholder="blur"
                sizes="(max-width: 820px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3 — live measurement */}
      <section className="knotvo-section" aria-labelledby="k-f3">
        <div className="container">
          <div className="k-feature">
            <div className="k-txt">
              <div className="k-eyebrow">While the analysis runs</div>
              <h2 id="k-f3">Measurement, step by step</h2>
              <p>
                Enter a live address and Knotvo runs the measurement through Google PageSpeed
                Insights and Lighthouse, collects real-user data (CrUX) and turns all of it into a
                single report in roughly half a minute. You see each step as it happens.
              </p>
              <ul className="k-flist">
                <li>Choose a mobile or desktop profile</li>
                <li>Cancel at any point</li>
                <li>Land straight on the results screen when it finishes</li>
              </ul>
            </div>
            <div className="k-loadmock" aria-hidden="true">
              <div className="lm-icon">
                <svg width="56" height="56" viewBox="0 0 44 44" style={{ borderRadius: 13 }}>
                  <defs>
                    <linearGradient id="knotvoLgEn" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#E6C96A" />
                      <stop offset="1" stopColor="#C9A84C" />
                    </linearGradient>
                  </defs>
                  <rect width="44" height="44" rx="10" fill="url(#knotvoLgEn)" />
                  <g fill="none" stroke="#0B0E14" strokeLinecap="round">
                    <path d="M22 22 A15 15 0 1 1 33 9" strokeWidth="2.3" />
                    <path d="M22 22 A10 10 0 1 1 29 12.5" strokeWidth="2.3" opacity=".8" />
                    <path d="M22 22 A5.5 5.5 0 1 1 26 17" strokeWidth="2.3" opacity=".62" />
                  </g>
                  <line x1="22" y1="22" x2="34.5" y2="14" stroke="#0B0E14" strokeWidth="2.1" strokeLinecap="round" />
                  <circle cx="22" cy="22" r="2.4" fill="#0B0E14" />
                </svg>
              </div>
              <div className="lm-title">Analyzing</div>
              <div className="lm-pill-wrap">
                <span className="lm-pill">
                  <span>https://www.site.com</span>
                  <span>Mobile</span>
                  <span>~30 sec</span>
                </span>
              </div>
              <div className="lm-bar">
                <span />
              </div>
              <div className="lm-step">
                <span className="c">✓</span> Validating the address
              </div>
              <div className="lm-step">
                <span className="c">✓</span> Connecting to PageSpeed Insights
              </div>
              <div className="lm-step">
                <span className="c">✓</span> Checking real-user data (CrUX)
              </div>
              <div className="lm-step">
                <span className="c">✓</span> Processing the Lighthouse measurement
              </div>
              <div className="lm-step">
                <span className="c">✓</span> Interpreting Core Web Vitals
              </div>
              <div className="lm-step" style={{ opacity: 0.5 }}>
                <span className="c" style={{ background: '#1b2430', color: '#5d6880' }}>
                  •
                </span>{' '}
                Building the report view
              </div>
              <div className="lm-tip">
                💡 The lab measurement tests first load under constrained mobile conditions, while
                CrUX shows the last 28 days of real users.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4 — waterfall + requests */}
      <section className="knotvo-section alt" aria-labelledby="k-f4">
        <div className="container">
          <div className="k-feature rev">
            <div className="k-txt">
              <div className="k-eyebrow">Network detail</div>
              <h2 id="k-f4">Where every request loses time</h2>
              <p>
                The waterfall breaks each request into seven phases and highlights visually how long
                it waited, how long it took and how heavy it was. Slow, heavy requests stand out
                immediately.
              </p>
              <ul className="k-flist">
                <li>A sortable request table</li>
                <li>Waiting, connecting and downloading shown separately</li>
                <li>Third-party and tracker load made obvious</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image
                src={waterfallShot}
                alt="The Knotvo waterfall timeline screen"
                placeholder="blur"
                sizes="(max-width: 820px) 100vw, 520px"
              />
            </div>
          </div>
          <div className="k-feature" style={{ marginTop: 64 }}>
            <div className="k-txt">
              <div className="k-eyebrow">Request inventory</div>
              <h2>Every request in one filterable table</h2>
              <p>
                Sort by size, duration, type and status; filter by URL or domain. Click a row to
                open that request&apos;s full detail in the side panel.
              </p>
              <ul className="k-flist">
                <li>Heaviest requests by size and by duration</li>
                <li>Headers, priority, initiator and timing</li>
                <li>Export as CSV</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image
                src={requestsShot}
                alt="The Knotvo requests table screen"
                placeholder="blur"
                sizes="(max-width: 820px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5 — report */}
      <section className="knotvo-section" aria-labelledby="k-f5">
        <div className="container">
          <div className="k-feature rev">
            <div className="k-txt">
              <div className="k-eyebrow">Shareable output</div>
              <h2 id="k-f5">A report you can send to a client</h2>
              <p>
                Executive summary and technical detail in a single document. Save it as a PDF in one
                click and send it to your team or your client — ready for an agency presentation.
              </p>
              <ul className="k-flist">
                <li>Business impact and Core Web Vitals status together</li>
                <li>Prioritized actions and quick wins</li>
                <li>Dark theme or a print-friendly light theme</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image
                src={reportsShot}
                alt="The Knotvo report screen with executive summary and technical detail"
                placeholder="blur"
                sizes="(max-width: 820px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MORE FEATURES */}
      <section className="knotvo-section alt" aria-labelledby="k-more">
        <div className="container">
          <div className="k-eyebrow">And more</div>
          <h2 id="k-more">The whole workflow in one application</h2>
          <p className="k-lead">
            Every step from measurement to sharing lives here. No other site speed analyzer packages
            all of this together.
          </p>
          <div className="k-grid">
            <div className="k-card">
              <div className="k-ico" aria-hidden="true">
                📊
              </div>
              <h3>Lab and field, side by side</h3>
              <p>
                It ends the &ldquo;score is 100 but Core Web Vitals fails&rdquo; confusion. Real-user
                data sits next to the Lighthouse measurement, with a note on which one affects
                search.
              </p>
            </div>
            <div className="k-card">
              <div className="k-ico" aria-hidden="true">
                🛡️
              </div>
              <h3>Safe sharing</h3>
              <p>
                HAR files carry live session data. One click strips cookies, authorization headers
                and tokens and produces a share-safe copy. Your original file is untouched.
              </p>
            </div>
            <div className="k-card">
              <div className="k-ico" aria-hidden="true">
                🔀
              </div>
              <h3>Compare two HAR files</h3>
              <p>
                Load a capture from before and after a release and see the difference. Did weight go
                up? Did a new error appear? You will know in seconds.
              </p>
            </div>
            <div className="k-card">
              <div className="k-ico" aria-hidden="true">
                🏷️
              </div>
              <h3>Brand workspace</h3>
              <p>
                Manage multiple brands, keep the history of each site and schedule a weekly
                automatic scan. Get notified when a score drops.
              </p>
            </div>
            <div className="k-card">
              <div className="k-ico" aria-hidden="true">
                🌐
              </div>
              <h3>Multi-URL comparison</h3>
              <p>
                Measure several addresses at once and compare them in one table. Put your page next
                to its peers.
              </p>
            </div>
            <div className="k-card">
              <div className="k-ico" aria-hidden="true">
                🔒
              </div>
              <h3>Private by default</h3>
              <p>
                HAR analysis is entirely local and nothing goes to the cloud. Only the address you
                enter for live measurement is passed to Google, and that is stated clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="knotvo-section" aria-labelledby="k-why">
        <div className="container">
          <div className="k-eyebrow">Why Knotvo</div>
          <h2 id="k-why">What makes your day-to-day easier</h2>
          <div className="k-benefits">
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>No quotas, accounts or subscriptions.</strong> Run as many analyses as you want — it is
                a one-time application.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>localhost, staging and pages behind a VPN.</strong> Capture a HAR in the browser and
                open it in Knotvo — something cloud tools cannot do.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Your data never leaves your machine.</strong> A comfortable option for teams with
                privacy or compliance requirements.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>It describes the work, not the score.</strong> Every finding tells you what to do.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>A native Mac application.</strong> Fast and fluid — not a browser tab.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Lab and real-user data together.</strong> See what actually affects rankings without
                the confusion.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>It will not leak secrets when you share.</strong> Sanitize the HAR first, then send it.
              </span>
            </div>
            <div className="k-benefit">
              <span className="chk" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Easy to learn.</strong> Drag, drop, and the application handles the rest.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="knotvo-section alt" aria-labelledby="k-cmp">
        <div className="container">
          <div className="k-eyebrow">Comparison</div>
          <h2 id="k-cmp">How Knotvo compares with other tool types</h2>
          <p className="k-lead">
            There are three groups of tools on the market and none of them sits exactly where Knotvo
            does. The table below compares by category rather than naming brands.
          </p>
          <div className="k-tablewrap" tabIndex={0} role="region" aria-labelledby="cmp-caption">
            <table>
              <caption id="cmp-caption">Capability comparison between Knotvo and other tool types</caption>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="us">Knotvo</th>
                  <th>Cloud speed test tools</th>
                  <th>Network capture tools</th>
                  <th>Free HAR viewers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, ...cells]) => (
                  <tr key={feature}>
                    <td className="feat">{feature}</td>
                    {cells.map((cell, index) => (
                      <td key={index} className={index === 0 ? 'us' : undefined}>
                        <span className={cellClass(cell)}>{cell}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="k-macnote" style={{ marginTop: 14 }}>
            In short: cloud tools measure performance, but only on public addresses and only with an
            account and a quota. Network capture tools show you the requests but do not interpret
            performance. Free viewers open a HAR but produce no recommendations. Knotvo brings the
            useful parts of all three into one application that runs on your own machine.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="knotvo-section" aria-labelledby="k-faq">
        <div className="container k-narrow">
          <div className="k-eyebrow" style={{ textAlign: 'center' }}>
            Frequently asked questions
          </div>
          <h2 id="k-faq" style={{ textAlign: 'center', marginBottom: 30 }}>
            What people ask
          </h2>
          <div className="k-faq">
            {faqs.map(({ q, a }, index) => (
              <details key={q} open={index === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="k-cta">
        <div className="container">
          <h2 id="k-cta">Be the first to know when Knotvo ships</h2>
          <p>
            Coming soon to the Mac App Store. If you want to hear about it at launch, one email is
            all it takes.
          </p>
          <a href={NOTIFY_MAILTO} className="btn btn-primary btn-large">
            Notify me
          </a>
          <p style={{ marginTop: 20 }}>
            <Link href="/en/knotvo-support" style={{ textDecoration: 'underline' }}>
              Support
            </Link>
            {' · '}
            <Link href="/en/knotvo-privacy-policy" style={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
