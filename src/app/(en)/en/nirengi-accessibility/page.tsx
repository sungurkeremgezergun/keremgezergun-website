import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';

const PAGE_URL = 'https://www.keremgezergun.com/en/nirengi-accessibility';

export const metadata: Metadata = {
  title: 'Nirengi Accessibility Support',
  description:
    'Nirengi accessibility on macOS: VoiceOver-ready labels, keyboard workflows, colour-independent cues, contrast handling and known limitations.',
  alternates: englishAlternateMetadata('/nirengi-erisilebirlik', '/en/nirengi-accessibility'),
  openGraph: {
    title: 'Nirengi Accessibility Support',
    description:
      'The macOS accessibility features, keyboard workflows and known limitations of Nirengi.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Nirengi accessibility support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nirengi Accessibility Support',
    description: 'The macOS accessibility features and support details for Nirengi.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nirengi Accessibility Support',
  url: PAGE_URL,
  inLanguage: 'en',
  description:
    'Accessibility support details for the Nirengi macOS SEO log analyzer, including keyboard commands and known limitations.',
  isPartOf: { '@id': 'https://www.keremgezergun.com/#website' },
  about: {
    '@type': 'SoftwareApplication',
    name: 'Nirengi',
    operatingSystem: 'macOS 14.4 or later',
    applicationCategory: 'DeveloperApplication',
    author: {
      '@type': 'Person',
      '@id': 'https://www.keremgezergun.com/#person',
      name: 'Sungur Kerem Gezergün',
    },
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
      name: 'Nirengi',
      item: 'https://www.keremgezergun.com/en/nirengi-log-analyzer',
    },
    { '@type': 'ListItem', position: 3, name: 'Accessibility', item: PAGE_URL },
  ],
};

const features = [
  {
    title: 'Descriptive control labels',
    text: 'Important controls — export, new analysis, report details, filters and file removal — expose meaningful names. Repeated removal actions also announce the filename they apply to.',
  },
  {
    title: 'Accessible progress information',
    text: 'The analysis stage, processed lines and bytes, total bytes and percentage are all exposed. Starting, completing or failing an analysis is announced to assistive technology.',
  },
  {
    title: 'Text alternatives for charts',
    text: 'Charts provide spoken summaries covering range, total requests, peak time and values. Main chart cards also carry visible links to the underlying reports.',
  },
  {
    title: 'Information that does not rely on colour',
    text: 'HTTP status codes stay as text. Bot verification results combine wording, an SF Symbol and colour. With Differentiate Without Color enabled, density cells show a numeric label.',
  },
  {
    title: 'Contrast-aware presentation',
    text: 'Nirengi follows the system appearance and native semantic colours. When macOS Increase Contrast is on, the density map becomes more visible.',
  },
  {
    title: 'Keyboard-oriented workflow',
    text: 'Standard macOS controls support keyboard focus and activation. Drag and drop is never required — files can also be added through the standard picker.',
  },
];

const workflows = [
  [
    'Selecting server logs',
    'Standard macOS file picker or drag and drop',
    'Filename, size, selected-file count and a contextual removal action',
  ],
  [
    'Configuring the analysis',
    'Labelled fields, toggles, buttons and disclosure controls',
    'Site, sitemap, category file, DNS verification, robots.txt and limits',
  ],
  [
    'Running or cancelling an analysis',
    'Start and Cancel buttons plus a keyboard command',
    'Stage, elapsed time, lines, bytes, percentage, warnings and confirmation',
  ],
  [
    'Exploring the results',
    'Sidebar, report search, dashboard buttons and shortcuts',
    'Report names, counts, severity symbols, summaries, charts and tables',
  ],
  [
    'Inspecting a report',
    'Search, sorting, filters, a selectable table and a detail panel',
    'Column names, cell values, selected rows, filters and row details',
  ],
  [
    'Exporting findings',
    'Toolbar menu or keyboard command',
    'CSV/HTML selection, progress, cancellation, success and error states',
  ],
];

const shortcuts = [
  ['Command N', 'Start a new analysis', 'When analysis is idle'],
  ['Command Return', 'Run the configured analysis', 'When a supported log is selected'],
  ['Command 1', 'Open Overview', 'When results are ready'],
  ['Command 2–9', 'Open pinned reports', 'When the report is available'],
  ['Command F', 'Search the current report', 'While viewing a report'],
  ['Command E', 'Export report data', 'While results are displayed'],
  ['Command ,', 'Open Settings', 'At any time'],
];

export default function EnglishNirengiAccessibilityPage() {
  return (
    <main id="main-content" tabIndex={-1} className="nirengi-accessibility">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      <header className="nirengi-a11y-hero">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">Accessibility on macOS</p>
          <h1>SEO log analysis designed for more ways of working.</h1>
          <p className="nirengi-lead">
            Nirengi uses standard SwiftUI controls, descriptive labels, keyboard commands,
            text-and-symbol status cues and accessible summaries for its data visualizations.
          </p>
          <aside className="nirengi-a11y-notice" aria-labelledby="declaration-title">
            <h2 id="declaration-title">Current declaration status</h2>
            <p>
              The improvements described here ship in Nirengi 1.0. App Store declarations for
              VoiceOver and Voice Control will be published once the common-task manual test matrix
              is complete. This page does not claim certification by Apple.
            </p>
          </aside>
        </div>
      </header>

      <section className="nirengi-section" aria-labelledby="a11y-features-title">
        <div className="container">
          <p className="nirengi-eyebrow">Implemented support</p>
          <h2 id="a11y-features-title">Accessibility features built into Nirengi</h2>
          <p className="nirengi-intro">
            Support focuses on real workflows: selecting files, starting an analysis, understanding
            progress, navigating reports, inspecting data and exporting results.
          </p>
          <div className="nirengi-grid nirengi-a11y-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <span className="nirengi-a11y-status">Implemented</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="workflows-title">
        <div className="container">
          <p className="nirengi-eyebrow">Core workflows</p>
          <h2 id="workflows-title">Scope of the accessibility evaluation</h2>
          <div
            className="nirengi-table-wrap"
            tabIndex={0}
            role="region"
            aria-label="Nirengi tasks and accessible paths"
          >
            <table>
              <caption>Core Nirengi tasks and accessible paths</caption>
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Accessible path</th>
                  <th scope="col">Information provided</th>
                </tr>
              </thead>
              <tbody>
                {workflows.map(([task, path, info]) => (
                  <tr key={task}>
                    <th scope="row">{task}</th>
                    <td>{path}</td>
                    <td>{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="keyboard-title">
        <div className="container">
          <p className="nirengi-eyebrow">Keyboard reference</p>
          <h2 id="keyboard-title">Built-in keyboard commands</h2>
          <p className="nirengi-intro">
            These commands complement the standard Tab, Shift-Tab, arrow key, Space, Return and
            Escape behaviour of macOS controls.
          </p>
          <div
            className="nirengi-table-wrap"
            tabIndex={0}
            role="region"
            aria-label="Nirengi keyboard shortcuts"
          >
            <table>
              <caption>Nirengi keyboard shortcuts</caption>
              <thead>
                <tr>
                  <th scope="col">Command</th>
                  <th scope="col">Action</th>
                  <th scope="col">Availability</th>
                </tr>
              </thead>
              <tbody>
                {shortcuts.map(([command, action, availability]) => (
                  <tr key={command}>
                    <th scope="row">
                      <kbd>{command}</kbd>
                    </th>
                    <td>{action}</td>
                    <td>{availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="nirengi-section nirengi-alt" aria-labelledby="limitations-title">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">Transparent status</p>
          <h2 id="limitations-title">Known limitations and ongoing evaluation</h2>
          <div className="nirengi-a11y-limitations">
            <p>
              VoiceOver and Voice Control support has to be evaluated by completing every core task
              without visual or pointer assistance. Nirengi provides labels, values, announcements,
              report links and native controls, but this end-to-end manual testing will be finished
              before any App Store declarations are made.
            </p>
            <p>
              Dense tables and charts may take longer to navigate with assistive technology. Hover
              detail on the hourly chart is supplementary; a spoken summary and the related data
              report are also available. Testing for Zoom, Hover Text, window resizing and long
              localized content continues.
            </p>
            <p>
              Nirengi contains no video or audio media, so captions and audio description do not
              apply to its core workflows. Accessibility support will be reassessed whenever the
              interface or report catalogue changes.
            </p>
          </div>
        </div>
      </section>

      <section className="nirengi-section" aria-labelledby="feedback-title">
        <div className="container nirengi-narrow">
          <p className="nirengi-eyebrow">Feedback</p>
          <h2 id="feedback-title">Tell us what blocks your workflow.</h2>
          <p className="nirengi-intro">
            Share your macOS and Nirengi versions, the assistive technology you use, the screen or
            report involved, and the steps that caused difficulty. Do not send real production logs
            without redacting them first.
          </p>
          <div className="nirengi-actions">
            <a
              className="btn btn-primary"
              href="mailto:iletisim@keremgezergun.com?subject=Nirengi%20Accessibility"
            >
              Send accessibility feedback
            </a>
            <a className="btn btn-outline" href="tel:+905526902782">
              +90 552 690 27 82
            </a>
          </div>
          <Link className="nirengi-back" href="/en/nirengi-log-analyzer">
            ← Back to the Nirengi product page
          </Link>
        </div>
      </section>
    </main>
  );
}
