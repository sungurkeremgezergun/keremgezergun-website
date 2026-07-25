import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { absoluteUrl, englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';

type Section = { title: string; intro?: string; items?: Array<{ title: string; text: string }>; paragraphs?: string[]; bullets?: string[] };
type EnglishPage = {
  trPath: string;
  enPath: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  sections: Section[];
  cta?: { title: string; text: string; href: string; label: string };
};

const pages: Record<string, EnglishPage> = {
  '': {
    trPath: '/', enPath: '/en', title: 'E-commerce SEO Consultant & Technical SEO Expert',
    description: 'Senior e-commerce SEO consultant Kerem Gezergün helps online retailers grow organic revenue through technical SEO, content strategy and data-led search optimization.',
    eyebrow: 'Senior E-commerce SEO Consultant', heading: 'Turn organic search visibility into sustainable e-commerce revenue.',
    lead: 'I help online retailers solve technical SEO problems, strengthen category and product visibility, and build organic growth systems tied to commercial outcomes.',
    sections: [
      { title: 'SEO consulting built around business impact', intro: 'Search traffic matters when it improves qualified discovery, conversion and revenue.', items: [
        { title: 'E-commerce SEO strategy', text: 'Category architecture, product discovery, faceted navigation and internal linking designed around demand and margin.' },
        { title: 'Technical SEO', text: 'Crawlability, indexation, JavaScript rendering, Core Web Vitals, structured data and large-site diagnostics.' },
        { title: 'Content and authority', text: 'Search-led content systems, topical coverage, digital PR and authority development for competitive markets.' },
      ] },
      { title: 'Experience across 30+ brands', paragraphs: ['For more than five years I have worked with e-commerce teams, publishers and digital products. My approach connects Search Console, analytics, crawlers and commercial data so priorities are based on evidence rather than generic checklists.'] },
      { title: 'Tools for technical SEO teams', items: [
        { title: 'Nirengi', text: 'A private, on-device server log analyzer for macOS with 41 reports covering search bots, AI crawlers, crawl budget and technical errors.' },
        { title: 'Knotvo', text: 'A native Mac site-speed analysis tool that turns HAR files and live measurements into a clear remediation plan.' },
      ] },
    ],
    cta: { title: 'Need a practical SEO growth plan?', text: 'Let’s identify the technical and commercial opportunities with the highest potential impact.', href: 'https://businessup.com.tr/iletisim/', label: 'Discuss your SEO project' },
  },
  'seo-blog': {
    trPath: '/blog', enPath: '/en/seo-blog', title: 'SEO Blog: Technical SEO, E-commerce & AI Search',
    description: 'Practical articles on technical SEO, e-commerce search strategy, AI search visibility, Core Web Vitals, content and link authority.',
    eyebrow: 'SEO insights', heading: 'Technical SEO and organic growth, explained for action.',
    lead: 'Research-backed guides for SEO professionals, e-commerce teams and decision makers who need clear priorities instead of surface-level advice.',
    sections: [
      { title: 'Core editorial topics', items: [
        { title: 'Technical SEO', text: 'Crawling, indexation, canonicals, JavaScript rendering, log analysis and scalable site health.' },
        { title: 'E-commerce SEO', text: 'Category strategy, product pages, faceted navigation, internal linking and organic revenue measurement.' },
        { title: 'AI search and GEO', text: 'How brands can become understandable, trustworthy and citable across AI-powered discovery experiences.' },
        { title: 'Performance and Core Web Vitals', text: 'Field and lab data, network waterfalls and prioritization methods for faster user experiences.' },
      ] },
      { title: 'Publishing approach', paragraphs: ['Every article is designed to answer a defined search intent, show the evidence behind the recommendation and provide an implementation path. English articles will be localized for international terminology and search behavior rather than translated word for word.'] },
    ],
  },
  'industry-projects': {
    trPath: '/sektorel-projeler', enPath: '/en/industry-projects', title: 'SEO Speaking, Education & Industry Projects',
    description: 'Explore Kerem Gezergün’s SEO speaking engagements, university sessions, professional events, podcast work and search-industry projects.',
    eyebrow: 'Industry projects', heading: 'Sharing practical SEO knowledge beyond client work.',
    lead: 'Talks, educational sessions and media projects focused on technical SEO, e-commerce growth, AI search and digital visibility.',
    sections: [
      { title: 'Speaking and education', items: [
        { title: 'Üsküdar University', text: 'A guest session on SEO, digital marketing careers and turning search data into business decisions.' },
        { title: 'Turkish Psychological Association', text: 'A professional event covering ethical digital visibility, search behavior and discoverability.' },
      ] },
      { title: 'Sepetteki SEO podcast', paragraphs: ['A Turkish-language podcast co-hosted with Simay Özpilavcı. The series explores e-commerce SEO, artificial intelligence, technical debates and developments shaping the search industry.'] },
      { title: 'Topics available for events', bullets: ['E-commerce SEO systems', 'Technical SEO prioritization', 'AI search and generative engine optimization', 'Search data for product and growth teams'] },
    ],
    cta: { title: 'Planning an SEO event or training?', text: 'Get in touch for speaking, workshops or tailored team sessions.', href: 'https://businessup.com.tr/iletisim/', label: 'Discuss an event' },
  },
  'seo-learning-roadmap': {
    trPath: '/seo-ogrenme-haritasi', enPath: '/en/seo-learning-roadmap', title: 'SEO Learning Roadmap: Beginner to Advanced',
    description: 'A structured SEO learning roadmap covering search fundamentals, keyword research, on-page SEO, technical SEO, content, authority, analytics and AI search.',
    eyebrow: 'Free SEO roadmap', heading: 'Learn SEO in the right order.',
    lead: 'A staged curriculum for building durable search skills—from how search engines work to technical audits, measurement and AI-era visibility.',
    sections: [
      { title: '1. Search fundamentals', intro: 'Understand crawling, rendering, indexing and ranking before using tools.', bullets: ['How search engines discover and process pages', 'Search intent and result types', 'Core terminology and ethical SEO'] },
      { title: '2. Keyword and market research', bullets: ['Demand, intent and topic discovery', 'SERP analysis and competitor gaps', 'Mapping queries to the right page type'] },
      { title: '3. On-page SEO and information architecture', bullets: ['Titles, headings and useful page copy', 'Internal links and navigation', 'Canonicalization and duplicate-content control'] },
      { title: '4. Technical SEO', bullets: ['Robots.txt, XML sitemaps and status codes', 'JavaScript SEO and rendering', 'Core Web Vitals, structured data and log analysis'] },
      { title: '5. Content systems and authority', bullets: ['Topical coverage and editorial planning', 'E-E-A-T signals and citation readiness', 'Digital PR, backlinks and brand authority'] },
      { title: '6. Measurement and experimentation', bullets: ['Google Search Console and analytics', 'SEO KPIs tied to business outcomes', 'Audits, hypotheses and controlled iteration'] },
      { title: '7. AI search and GEO', bullets: ['Entity clarity and passage-level citability', 'AI crawler accessibility', 'Monitoring brand mentions and citations across answer engines'] },
    ],
    cta: { title: 'Want help applying the roadmap?', text: 'Turn the curriculum into a practical plan for your website or team.', href: 'https://businessup.com.tr/iletisim/', label: 'Get SEO guidance' },
  },
  'knotvo-site-speed-analyzer': {
    trPath: '/knotvo', enPath: '/en/knotvo-site-speed-analyzer', title: 'Knotvo: Site Speed & HAR Analyzer for Mac',
    description: 'Knotvo turns HAR files, Lighthouse and real-user data into a clear site-speed action plan on macOS. Local HAR analysis, no account or subscription.',
    eyebrow: 'Native macOS performance analysis', heading: 'Understand what slows a page down—and what to fix first.',
    lead: 'Knotvo combines HAR inspection, Lighthouse measurements and Core Web Vitals context in a focused Mac application for SEO and web teams.',
    sections: [
      { title: 'From performance data to an action plan', items: [
        { title: 'Plain-language insights', text: 'Translate technical findings into prioritized work for developers, marketers and stakeholders.' },
        { title: 'Waterfall and request inventory', text: 'Inspect timing, transfer size, blocking chains, domains, resource types and failed requests.' },
        { title: 'Lab and field data together', text: 'Understand the difference between Lighthouse tests and real-user Core Web Vitals.' },
      ] },
      { title: 'Private by default', paragraphs: ['HAR analysis stays on your Mac. Live measurement sends only the public URL you enter to Google PageSpeed Insights, and this behavior is disclosed before use.'] },
      { title: 'Built for practical comparison', bullets: ['Compare two HAR captures before and after a release', 'Sanitize cookies, authorization headers and tokens before sharing', 'Analyze localhost, staging and VPN-only pages from browser HAR files', 'Create stakeholder-ready reports'] },
    ],
    cta: { title: 'Knotvo for macOS', text: 'Follow the product and get notified when it becomes available.', href: 'mailto:iletisim@keremgezergun.com?subject=Notify%20me%20about%20Knotvo', label: 'Notify me' },
  },
  'knotvo-support': {
    trPath: '/knotvo-destek', enPath: '/en/knotvo-support', title: 'Knotvo Support: HAR & Site Speed Help',
    description: 'Get help with Knotvo HAR analysis, live PageSpeed measurements, reports, privacy, licensing and troubleshooting on macOS.',
    eyebrow: 'Knotvo support', heading: 'Help with site-speed analysis on macOS.',
    lead: 'Contact the developer for questions about HAR files, live measurements, reports, privacy or unexpected results.',
    sections: [
      { title: 'Include these details', bullets: ['Your macOS and Knotvo versions', 'Whether you used a HAR file or live URL measurement', 'The affected report or screen', 'The exact warning and steps to reproduce the issue'] },
      { title: 'Protect sensitive data', paragraphs: ['Do not send an unredacted production HAR file. Remove cookies, authorization headers, tokens, personal data and private URLs before sharing diagnostic material.'] },
    ],
    cta: { title: 'Contact Knotvo support', text: 'Support requests are handled directly by the developer.', href: 'mailto:iletisim@keremgezergun.com?subject=Knotvo%20Support', label: 'Email support' },
  },
  'knotvo-privacy-policy': {
    trPath: '/knotvo-gizlilik', enPath: '/en/knotvo-privacy-policy', title: 'Knotvo Privacy Policy',
    description: 'Learn how Knotvo handles HAR files, live URL measurements, API keys, local processing and support communications.',
    eyebrow: 'Knotvo legal', heading: 'Privacy Policy', lead: 'Effective and last updated: July 25, 2026.',
    sections: [
      { title: 'Local HAR processing', paragraphs: ['HAR files are analyzed locally on your Mac. Knotvo does not upload the selected file or its analysis result to a developer-controlled service.'] },
      { title: 'Optional live measurement', paragraphs: ['When you start live URL measurement, the public URL and your API key, if configured, are sent directly to Google PageSpeed Insights so Google can measure the page. HAR analysis does not use this network path.'] },
      { title: 'Data collection', paragraphs: ['Knotvo does not require an account and does not include advertising, behavioral analytics or a developer-operated HAR storage service. Standard website server logs may be retained for security and reliability.'] },
      { title: 'Support communications', paragraphs: ['Information you voluntarily provide is used to answer and resolve your request. Never send passwords, verification codes or unredacted production captures.'] },
      { title: 'Contact', paragraphs: ['Data controller and developer: Sungur Kerem Gezergün. Email: iletisim@keremgezergun.com. Phone: +90 552 690 27 82.'] },
    ],
  },
  'nirengi-log-analyzer': {
    trPath: '/nirengi', enPath: '/en/nirengi-log-analyzer', title: 'Nirengi: Private SEO Log Analyzer for macOS',
    description: 'Analyze server logs locally on macOS. Compare Googlebot and AI crawlers, find crawl waste, technical errors, coverage gaps and content freshness issues.',
    eyebrow: 'Native macOS SEO intelligence', heading: 'Your logs. Your Mac. Your search insights.',
    lead: 'Turn raw access logs into actionable evidence about Googlebot, AI crawlers, crawl budget, technical errors and index coverage—without uploading sensitive files.',
    sections: [
      { title: 'See what crawlers actually do', items: [
        { title: 'Googlebot and AI crawlers', text: 'Compare search-engine crawling with GPTBot, ClaudeBot, PerplexityBot and other known AI agents.' },
        { title: 'Errors and crawl waste', text: 'Find 404, 5xx, redirects, soft-404 candidates, parameter waste, asset crawling and robots.txt violations.' },
        { title: 'Coverage and freshness', text: 'Compare sitemap URLs with observed traffic to discover uncrawled, orphaned or neglected pages.' },
        { title: 'Verified bot identity', text: 'Use reverse and forward DNS checks to distinguish supported verified crawlers from spoofed user agents.' },
        { title: 'Large-file engine', text: 'Process millions of lines in parallel and move aggregation to disk when the working set may exceed safe memory.' },
        { title: 'Portable reports', text: 'Export individual CSV files or a self-contained HTML report without a cloud account.' },
      ] },
      { title: '41 reports for SEO decisions', bullets: ['Crawler identity: 5 reports', 'AI crawlers: 2 reports', 'Crawl budget: 7 reports', 'Technical errors: 8 reports', 'Coverage and freshness: 6 reports', 'Visitor traffic: 8 reports', 'Optional category analysis: 5 reports'] },
      { title: 'Supported log sources', bullets: ['Apache and Nginx combined, CLF and vhost formats', 'IIS W3C', 'AWS CloudFront and ALB', 'Cloudflare Logpush', 'Nginx, Caddy and Traefik JSON/NDJSON'] },
      { title: 'Measured at production scale', paragraphs: ['A Release build processed a 15.4 GB, 50.9-million-line production log in 40 seconds on an Apple M4 Mac with 16 GB memory. Results vary by hardware, storage, format and enabled features.'] },
    ],
    cta: { title: 'Private by design', text: 'Read how Nirengi handles local files and optional network requests.', href: '/en/nirengi-privacy-policy', label: 'Read the privacy policy' },
  },
  'nirengi-support': {
    trPath: '/nirengi-iletisim', enPath: '/en/nirengi-support', title: 'Nirengi Support & Contact',
    description: 'Contact Nirengi support for help with server log formats, SEO reports, exports, privacy, performance and troubleshooting.',
    eyebrow: 'Nirengi support', heading: 'Support and contact',
    lead: 'Need help with a log format, analysis result, privacy question or export? Contact the developer directly.',
    sections: [
      { title: 'What to include', bullets: ['macOS and Nirengi versions', 'Server or CDN product and file extension', 'Approximate file size and storage location', 'Report name, filters and the exact warning', 'A fully anonymized sample only when necessary'] },
      { title: 'Security reminder', paragraphs: ['Do not email production logs unless IP addresses, domains, URLs, cookies, tokens and other confidential data have been removed. Nirengi support will never ask for your Apple ID password or verification code.'] },
    ],
    cta: { title: 'Contact the developer', text: 'Support requests are handled directly.', href: 'mailto:iletisim@keremgezergun.com?subject=Nirengi%20Support', label: 'Email Nirengi support' },
  },
  'nirengi-privacy-policy': {
    trPath: '/nirengi-gizlilik-politikasi', enPath: '/en/nirengi-privacy-policy', title: 'Nirengi Privacy Policy',
    description: 'How Nirengi protects server log data through local macOS processing, optional direct network requests and account-free operation.',
    eyebrow: 'Nirengi legal', heading: 'Privacy Policy', lead: 'Effective and last updated: July 25, 2026.',
    sections: [
      { title: 'Scope', paragraphs: ['This policy applies to the Nirengi macOS application and its product, support, privacy and accessibility pages operated by Sungur Kerem Gezergün.'] },
      { title: 'Data collection', paragraphs: ['Nirengi does not require an account and does not include advertising, tracking pixels, behavioral analytics, telemetry or a developer-controlled log upload service.'] },
      { title: 'Files and on-device processing', paragraphs: ['Selected files are accessed through the macOS App Sandbox and processed locally. Results and exports remain on your device or in a location you explicitly choose.'] },
      { title: 'Optional network requests', paragraphs: ['Network access is used only for a feature you initiate: fetching a sitemap or robots.txt file, verifying supported bots through DNS, or opening product and support links.'] },
      { title: 'Support and contact', paragraphs: ['Voluntarily provided support information is used to answer and resolve the request. Data controller and developer: Sungur Kerem Gezergün. Email: iletisim@keremgezergun.com.'] },
    ],
  },
  'nirengi-accessibility': {
    trPath: '/nirengi-erisilebirlik', enPath: '/en/nirengi-accessibility', title: 'Nirengi Accessibility for macOS',
    description: 'Nirengi accessibility support on macOS: VoiceOver-ready labels, keyboard navigation, color-independent cues, contrast and known limitations.',
    eyebrow: 'Accessibility on macOS', heading: 'SEO log analysis designed for more ways of working.',
    lead: 'Nirengi uses standard SwiftUI controls, descriptive labels, keyboard commands, text-and-symbol status cues and accessible summaries for data visualizations.',
    sections: [
      { title: 'Implemented accessibility support', items: [
        { title: 'Descriptive control labels', text: 'Important controls expose meaningful names, and repeated file-removal actions identify the specific filename.' },
        { title: 'Accessible progress', text: 'Analysis and export progress expose the current stage, processed data, percentage and completion or failure announcements.' },
        { title: 'Chart text alternatives', text: 'Main charts provide spoken summaries, labelled data points and visible links to underlying reports.' },
        { title: 'Information beyond color', text: 'Status codes remain text; verification and severity combine wording, symbols and color.' },
        { title: 'Contrast-aware presentation', text: 'The interface follows system appearance, semantic colors, Increase Contrast and Differentiate Without Color.' },
        { title: 'Keyboard-oriented workflow', text: 'Native controls and dedicated commands support frequent tasks without requiring pointer-only interactions.' },
      ] },
      { title: 'Keyboard commands', bullets: ['Command N: new analysis', 'Command Return: start analysis', 'Command 1: overview', 'Command 2–9: pinned reports', 'Command F: search report', 'Command E: export', 'Command comma: settings'] },
      { title: 'Known limitations', paragraphs: ['VoiceOver and Voice Control declarations remain subject to completing the full common-task manual testing matrix. Dense data tables and charts may require additional navigation time. Zoom, Hover Text, window resizing and long localized content remain part of ongoing evaluation.'] },
    ],
    cta: { title: 'Accessibility feedback', text: 'Include your macOS version, Nirengi version, assistive technology and steps that caused difficulty.', href: 'mailto:iletisim@keremgezergun.com?subject=Nirengi%20Accessibility', label: 'Email accessibility feedback' },
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug: slug ? [slug] : undefined }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = pages[slug.join('/')];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: englishAlternateMetadata(page.trPath, page.enPath),
    openGraph: { title: page.title, description: page.description, url: absoluteUrl(page.enPath), siteName: 'Kerem Gezergün', locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description },
  };
}

export default async function EnglishPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const page = pages[slug.join('/')];
  if (!page) notFound();
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: absoluteUrl(page.enPath), inLanguage: 'en', isPartOf: { '@id': 'https://www.keremgezergun.com/#website' } };
  return (
    <main id="main-content" className="english-page" lang="en" role="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(schema) }} />
      <header className="english-hero"><div className="container english-narrow"><p className="nirengi-eyebrow">{page.eyebrow}</p><h1>{page.heading}</h1><p className="english-lead">{page.lead}</p></div></header>
      {page.sections.map((section, index) => (
        <section className={`english-section${index % 2 ? ' alt' : ''}`} key={section.title} aria-labelledby={`en-section-${index}`}>
          <div className="container english-narrow"><h2 id={`en-section-${index}`}>{section.title}</h2>{section.intro && <p className="english-intro">{section.intro}</p>}
            {section.paragraphs?.map((paragraph) => <p className="english-copy" key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul className="english-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            {section.items && <div className="english-grid">{section.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>}
          </div>
        </section>
      ))}
      {page.cta && <section className="english-cta" aria-labelledby="english-cta-title"><div className="container english-narrow"><h2 id="english-cta-title">{page.cta.title}</h2><p>{page.cta.text}</p>{page.cta.href.startsWith('/') ? <Link className="btn btn-primary" href={page.cta.href}>{page.cta.label}</Link> : <a className="btn btn-primary" href={page.cta.href}>{page.cta.label}</a>}</div></section>}
      <nav className="english-language-return" aria-label="Language versions"><div className="container english-narrow"><Link href={page.trPath} hrefLang="tr">Türkçe sürümü görüntüle</Link></div></nav>
    </main>
  );
}

export const dynamicParams = false;
