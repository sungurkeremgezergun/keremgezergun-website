import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { stores } from '@/lib/contact';

const PAGE_URL = 'https://www.keremgezergun.com/en/nirengi-log-analyzer';
const APP_STORE_URL = stores.nirengi.en;

export const metadata: Metadata = {
  title: 'Nirengi — SEO Log Analyzer for macOS',
  description:
    'Analyze server logs on your own Mac. Compare Googlebot with AI crawlers, find crawl waste, technical errors and index coverage gaps.',
  alternates: englishAlternateMetadata('/nirengi', '/en/nirengi-log-analyzer'),
  openGraph: {
    title: 'Nirengi — SEO Log Analyzer',
    description: 'A privacy-first, on-device server log analyzer for macOS.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirengi — SEO log analyzer for macOS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nirengi — SEO Log Analyzer',
    description: 'Analyze your server logs on your Mac.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#software`,
  name: 'Nirengi',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'SEO Software',
  operatingSystem: 'macOS 14.4 or later',
  softwareVersion: '1.0',
  inLanguage: 'en',
  description:
    'An on-device SEO server log analyzer offering 41 reports across Googlebot, AI crawlers, crawl budget, technical errors and index coverage.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.keremgezergun.com/#person',
    name: 'Sungur Kerem Gezergün',
  },
  publisher: { '@id': 'https://www.keremgezergun.com/#person' },
  url: PAGE_URL,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  sameAs: APP_STORE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    url: APP_STORE_URL,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.keremgezergun.com/en' },
    { '@type': 'ListItem', position: 2, name: 'Nirengi', item: PAGE_URL },
  ],
};

const faqs = [
  {
    q: 'Does Nirengi upload my server logs?',
    a: 'No. The files you select are processed locally inside the macOS App Sandbox; the app has no account, advertising or telemetry.',
  },
  {
    q: 'When does it use network access?',
    a: 'Only for sitemap or robots.txt retrieval, DNS bot verification and product or support links you initiate yourself.',
  },
  {
    q: 'Can I share the results?',
    a: 'Yes. Export tables as CSV, or the whole report as a single self-contained HTML file that needs no cloud account.',
  },
  {
    q: 'Is Nirengi free?',
    a: 'Version 1.0 is completely free, with no subscription or in-app purchase.',
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

const features = [
  {
    title: 'Googlebot and AI crawlers',
    text: 'Compare Googlebot with GPTBot, ClaudeBot, PerplexityBot and other AI agents on the same scale.',
  },
  {
    title: 'Errors and crawl waste',
    text: 'Find 404s, 5xx responses, redirects, soft-404 candidates, parameter waste and robots.txt problems.',
  },
  {
    title: 'Coverage and freshness',
    text: 'Compare your sitemap with observed traffic to discover uncrawled, orphaned or neglected URLs.',
  },
  {
    title: 'Verified bot identity',
    text: 'Separate supported search bots from spoofed traffic using reverse and forward DNS checks.',
  },
  {
    title: 'Large-file engine',
    text: 'Process millions of lines in parallel, switching to a disk-backed path automatically when needed.',
  },
  {
    title: 'Portable, account-free reports',
    text: 'Filter the results and share them as CSV or as a single-file HTML report.',
  },
];

const reportGroups = [
  ['Crawler identity', '5', 'Bot analysis, categories, daily crawling, mobile/desktop split and DNS verification'],
  ['AI crawlers', '2', 'AI bot activity split by training, search-index and user-triggered roles'],
  ['Crawl budget', '7', 'Most crawled URLs, crawl waste, HTML/asset and bandwidth reports'],
  ['Technical errors', '8', '404, 5xx, 3xx, other 4xx, soft-404, inconsistent status codes and robots.txt violations'],
  ['Coverage and freshness', '6', 'Uncrawled sitemap URLs, orphan pages, crawl frequency and freshness score'],
  ['Visitor traffic', '8', 'Time series, anomalies, referrers, organic sources, request rate and content types'],
  ['Category analysis', '5', 'Category summary, bot breakdowns, uncrawled categories and a category × bot matrix'],
];

const formats = [
  ['Apache and Nginx', 'Combined, CLF, vhost_combined and custom trailing fields'],
  ['IIS', 'W3C Extended Log File Format'],
  ['AWS CloudFront', 'Standard tab-separated access logs'],
  ['Cloudflare', 'Logpush HTTP request data (NDJSON)'],
  ['Nginx, Caddy and Traefik', 'JSON Lines / NDJSON access logs'],
  ['AWS ALB', 'Application Load Balancer access logs'],
];

export default function EnglishNirengiPage() {
  return (
    <main id="main-content" tabIndex={-1} className="nirengi">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />

      <section className="nirengi-hero" aria-labelledby="nirengi-title">
        <div className="container nirengi-hero-grid">
          <div>
            <p className="nirengi-eyebrow">Native macOS SEO analysis</p>
            <h1 id="nirengi-title">
              Your logs. Your Mac. <span>Your insights.</span>
            </h1>
            <p className="nirengi-lead">
              Turn raw server logs into usable insight about Googlebot, AI crawlers, crawl budget
              and technical SEO. Your files are processed on your own machine and never uploaded.
            </p>
            <div className="nirengi-actions">
              <a
                className="btn btn-primary btn-large"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the Mac App Store
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="btn btn-outline btn-large" href="#features">
                Explore features
              </a>
            </div>
            <p className="nirengi-note">
              🍎 Available on the Mac App Store · Free · macOS 14.4 or later
            </p>
          </div>
          <div className="nirengi-window" role="img" aria-label="Four example measurements from a Nirengi analysis">
            <div className="nirengi-windowbar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="nirengi-metrics">
              <div>
                <strong>2.4M</strong>
                <span>Requests analyzed</span>
              </div>
              <div>
                <strong>41</strong>
                <span>Available reports</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>On device</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Logs uploaded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="nirengi-section" aria-labelledby="features-title">
        <div className="container">
          <p className="nirengi-eyebrow">SEO server log analysis</p>
          <h2 id="features-title">See what crawlers actually do.</h2>
          <p className="nirengi-intro">
            Nirengi is a native macOS application built for technical SEO specialists, consultants,
            publishers, SaaS and e-commerce teams. It turns crawl behaviour, errors, coverage,
            content freshness and bandwidth into evidence without sending sensitive infrastructure
            data to the cloud.
          </p>
          <div className="nirengi-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="reports-title">
        <div className="container">
          <p className="nirengi-eyebrow">The complete capability map</p>
          <h2 id="reports-title">41 reports organized for SEO decisions.</h2>
          <div
            className="nirengi-table-wrap"
            tabIndex={0}
            role="region"
            aria-labelledby="reports-caption"
          >
            <table>
              <caption id="reports-caption">Nirengi report groups and highlighted analyses</caption>
              <thead>
                <tr>
                  <th scope="col">Report group</th>
                  <th scope="col">Reports</th>
                  <th scope="col">Highlighted analyses</th>
                </tr>
              </thead>
              <tbody>
                {reportGroups.map(([group, count, detail]) => (
                  <tr key={group}>
                    <th scope="row">{group}</th>
                    <td>{count}</td>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="workflow-title">
        <div className="container">
          <p className="nirengi-eyebrow">From files to decisions</p>
          <h2 id="workflow-title">Focused analysis in four steps.</h2>
          <ol className="nirengi-steps">
            <li>
              <h3>Select your logs</h3>
              <p>Open a single file or a rotated group from the macOS file picker.</p>
            </li>
            <li>
              <h3>Add context</h3>
              <p>Add an optional site URL, sitemap, category list and DNS verification.</p>
            </li>
            <li>
              <h3>Analyze locally</h3>
              <p>Watch progress, warnings and elapsed time while the parallel engine runs.</p>
            </li>
            <li>
              <h3>Review and export</h3>
              <p>Use the dashboards and filters, then export the result as CSV or HTML.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="formats-title">
        <div className="container">
          <p className="nirengi-eyebrow">Automatic format detection</p>
          <h2 id="formats-title">One analyzer for modern server logs.</h2>
          <div
            className="nirengi-table-wrap"
            tabIndex={0}
            role="region"
            aria-labelledby="formats-caption"
          >
            <table>
              <caption id="formats-caption">Supported log formats by source</caption>
              <thead>
                <tr>
                  <th scope="col">Source</th>
                  <th scope="col">Supported format</th>
                </tr>
              </thead>
              <tbody>
                {formats.map(([source, detail]) => (
                  <tr key={source}>
                    <th scope="row">{source}</th>
                    <td>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="performance-title">
        <div className="container">
          <p className="nirengi-eyebrow">Measured at production scale</p>
          <h2 id="performance-title">Built for logs measured in gigabytes.</h2>
          <p className="nirengi-intro">
            On an Apple M4 Mac with 16 GB of memory, a Release build processed a 15.4 GB production
            log in 40 seconds. Results vary by hardware, storage, format and the features you
            enable.
          </p>
          <dl className="nirengi-bench">
            <div>
              <dt>Input lines</dt>
              <dd>50.9M</dd>
            </div>
            <div>
              <dt>Measured time</dt>
              <dd>40 sec</dd>
            </div>
            <div>
              <dt>Per second</dt>
              <dd>1.26M</dd>
            </div>
            <div>
              <dt>Peak memory</dt>
              <dd>3.6 GiB</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="faq-title">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">Frequently asked questions</p>
          <h2 id="faq-title">What to know before you analyze.</h2>
          <div className="nirengi-faq">
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <div className="nirengi-actions">
            <a
              className="btn btn-primary"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on the Mac App Store
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link className="btn btn-outline" href="/en/nirengi-support">
              Support and contact
            </Link>
            <Link className="btn btn-outline" href="/en/nirengi-privacy-policy">
              Privacy policy
            </Link>
            <Link className="btn btn-outline" href="/en/nirengi-accessibility">
              Accessibility
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
