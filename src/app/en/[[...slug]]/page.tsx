import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { absoluteUrl, englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import SeoLearningRoadmap from '@/app/seo-ogrenme-haritasi/page';

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
      { title: 'See site health at a glance', paragraphs: ['The overview combines the performance score, the three most expensive bottlenecks and the estimated gain from completing the highest-priority work.'], bullets: ['A plain explanation next to the score', 'Findings ordered from critical to low priority', 'Estimated byte and time savings for every finding'] },
      { title: 'Actions, not unexplained metrics', paragraphs: ['Knotvo explains what a finding means, why it matters and how to fix it instead of leaving interpretation to the user.'], bullets: ['Impact, cause and recommended fix together', 'Priorities that can be handed directly to development', 'Technical evidence for every recommendation'] },
      { title: 'Live measurement, step by step', paragraphs: ['Enter a public URL and Knotvo validates the address, connects to PageSpeed Insights, checks CrUX field data, processes Lighthouse and interprets Core Web Vitals.'], bullets: ['Mobile and desktop measurement', 'Visible progress for every stage', 'Clear handling for quota, API and reachability errors'] },
      { title: 'See where every request loses time', paragraphs: ['The waterfall exposes DNS, connection, TLS, waiting and download time for each request, together with blocking chains and failed resources.'], bullets: ['Timing breakdown per request', 'Domain and resource-type filters', 'Transfer size, compression and cache evidence'] },
      { title: 'A filterable request inventory', paragraphs: ['Inspect all requests in a sortable table and isolate scripts, images, fonts, third parties, failures or the heaviest resources.'], bullets: ['Search and multi-dimensional filters', 'Status, protocol, MIME type and initiator', 'Exportable evidence for technical teams'] },
      { title: 'A report ready for stakeholders', paragraphs: ['Turn analysis into a clear report that explains priorities, expected gains and implementation evidence without requiring the reader to understand raw HAR data.'], bullets: ['Executive summary and prioritized findings', 'Detailed evidence for developers', 'Portable output for clients and internal teams'] },
      { title: 'The complete workflow in one Mac app', items: [
        { title: 'Lab and field data together', text: 'Compare Lighthouse lab results with real-user Core Web Vitals and understand which signal affects search.' },
        { title: 'Share-safe HAR copies', text: 'Remove cookies, Authorization headers, tokens and body secrets without altering the original file.' },
        { title: 'Compare two HAR files', text: 'Measure before and after a release to find new weight, timing regressions or failed requests.' },
        { title: 'Brand workspace', text: 'Manage multiple brands and sites, keep scan history and monitor changes over time.' },
        { title: 'Multi-URL comparison', text: 'Measure several public URLs and compare the results in one view.' },
        { title: 'Private by default', text: 'HAR analysis stays on your Mac; only an optional public live URL is sent to Google.' },
      ] },
      { title: 'Why teams choose Knotvo', bullets: ['No account, recurring subscription, queue or analysis quota', 'HAR support for localhost, staging and VPN-only pages', 'On-device analysis for privacy-sensitive teams', 'Recommendations describe the work instead of only reporting a score', 'Native performance on Apple Silicon and Intel Macs', 'Safe sharing tools for production HAR files'] },
      { title: 'How Knotvo compares', items: [
        { title: 'Cloud speed tests', text: 'Useful for public lab tests, but typically require accounts, quotas and cannot inspect private pages or local HAR workflows.' },
        { title: 'Network capture tools', text: 'Powerful for capturing requests, but they do not translate performance evidence into prioritized SEO and development actions.' },
        { title: 'Free HAR viewers', text: 'They open waterfalls but usually lack recommendations, comparison, field data context and secure sanitization workflows.' },
      ] },
      { title: 'Frequently asked questions', items: [
        { title: 'What does Knotvo do?', text: 'It analyzes HAR files and optional live measurements, then turns requests, Core Web Vitals and third-party load into a prioritized action list.' },
        { title: 'Does my HAR go to the cloud?', text: 'No. HAR analysis is entirely local. Only a public URL is sent to Google when you explicitly run live measurement.' },
        { title: 'Can I test localhost or staging?', text: 'Yes. Capture a HAR in the browser and open it in Knotvo. Live measurement itself requires a public URL.' },
        { title: 'Can I share a HAR safely?', text: 'Use Share-Safe Copy to remove cookies, authorization data and tokens while preserving your original file.' },
        { title: 'Which devices are supported?', text: 'Knotvo targets macOS 14 and later on Apple Silicon and Intel Macs.' },
      ] },
    ],
    cta: { title: 'Knotvo for macOS', text: 'Follow the product and get notified when it becomes available.', href: 'mailto:iletisim@keremgezergun.com?subject=Notify%20me%20about%20Knotvo', label: 'Notify me' },
  },
  'knotvo-support': {
    trPath: '/knotvo-destek', enPath: '/en/knotvo-support', title: 'Knotvo Support: HAR & Site Speed Help',
    description: 'Get help with Knotvo HAR analysis, live PageSpeed measurements, reports, privacy, licensing and troubleshooting on macOS.',
    eyebrow: 'Knotvo support', heading: 'Help with site-speed analysis on macOS.',
    lead: 'Contact the developer for questions about HAR files, live measurements, reports, privacy or unexpected results.',
    sections: [
      { title: 'What is a HAR file?', paragraphs: ['A HAR (HTTP Archive) file is a log of a web page’s network requests. In Chrome, Edge or Safari DevTools, open Network, reload the page, then choose Save all as HAR. Open that file in Knotvo to analyze it.'] },
      { title: 'Does my data leave my Mac?', paragraphs: ['HAR analysis is 100% local and nothing is uploaded. The optional live URL measurement sends only the URL you enter to Google PageSpeed Insights.'] },
      { title: 'Live measurement quota and API keys', paragraphs: ['Live measurement uses Google’s PageSpeed Insights API. You can create a free API key in Google Cloud Console and add it under Settings → PageSpeed Insights API Key.'] },
      { title: 'Localhost, staging and protected pages', paragraphs: ['Live measurement requires a public URL that Google can reach. For private, staging, localhost or VPN-only pages, capture a HAR in your browser and open it in Knotvo.'] },
      { title: 'Sharing a HAR safely', paragraphs: ['Use Sanitize → Share-Safe Copy. Knotvo removes cookies, Authorization headers, tokens and body secrets locally while leaving the original file unchanged.'] },
      { title: 'Resetting Knotvo', paragraphs: ['Settings → Reset all data permanently removes brands, sites, scans, the PageSpeed API key and preferences from your Mac.'] },
      { title: 'Contact details', paragraphs: ['Sungur Kerem Gezergün · iletisim@keremgezergun.com · +90 552 690 27 82 · Mimar Sinan Mahallesi, Katibim Aziz Bey Caddesi No: 41, Üsküdar / Istanbul, Türkiye.'] },
    ],
    cta: { title: 'Contact Knotvo support', text: 'Support requests are handled directly by the developer.', href: 'mailto:iletisim@keremgezergun.com?subject=Knotvo%20Support', label: 'Email support' },
  },
  'knotvo-privacy-policy': {
    trPath: '/knotvo-gizlilik', enPath: '/en/knotvo-privacy-policy', title: 'Knotvo Privacy Policy',
    description: 'Learn how Knotvo handles HAR files, live URL measurements, API keys, local processing and support communications.',
    eyebrow: 'Knotvo legal', heading: 'Privacy Policy', lead: 'Effective and last updated: July 25, 2026.',
    sections: [
      { title: 'What we collect', paragraphs: ['Nothing. Knotvo has no account system, login, analytics or telemetry. We do not operate a server that receives, stores or processes your HAR data.'] },
      { title: 'Data stored on your device', bullets: ['HAR files and analysis results are parsed entirely on your Mac.', 'Brands, sites and scan history remain in local Application Support storage.', 'Your optional PageSpeed Insights API key stays on your Mac and authenticates only your own Google requests.', 'Settings → Reset all data removes all locally stored Knotvo data.'] },
      { title: 'Live measurement (optional)', paragraphs: ['When you use live URL measurement, Knotvo sends the public URL and your API key, if configured, directly to Google PageSpeed Insights so Google can measure the page. Google’s Privacy Policy applies. HAR-file analysis does not use the network.'] },
      { title: 'What we do not do', bullets: ['No advertising or advertising identifiers.', 'No third-party tracking.', 'No third-party crash or usage reporting.', 'No cookies.', 'No selling or sharing of personal data.'] },
      { title: 'Children', paragraphs: ['Knotvo is a professional developer tool and is not directed at children.'] },
      { title: 'Contact', paragraphs: ['Sungur Kerem Gezergün · iletisim@keremgezergun.com · +90 552 690 27 82 · Mimar Sinan Mahallesi, Katibim Aziz Bey Caddesi No: 41, Üsküdar / Istanbul, Türkiye.'] },
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
      { title: 'From files to decisions', bullets: ['Select one log file or a rotated group with the macOS file picker.', 'Add an optional site URL, sitemap, category list and DNS verification.', 'Follow progress and warnings while the parallel local engine runs.', 'Review dashboards and filters, then export CSV or a self-contained HTML report.'] },
      { title: 'Frequently asked questions', items: [
        { title: 'Does Nirengi upload server logs?', text: 'No. Selected files are processed locally inside the macOS App Sandbox; Nirengi has no account, advertising or telemetry.' },
        { title: 'When does Nirengi use network access?', text: 'Only when you initiate sitemap or robots.txt retrieval, DNS bot verification, or open a product/support link.' },
        { title: 'Can I share the results?', text: 'Yes. Export tables as CSV or the complete report as one portable HTML file without a cloud account.' },
        { title: 'Is Nirengi free?', text: 'Version 1.0 is free and has no subscription or in-app purchase.' },
      ] },
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

function EnglishHome() {
  const services = [
    ['SEO Strategy & Consulting', 'Data-led SEO strategies aligned with commercial goals, market demand and sustainable organic growth.'],
    ['Technical SEO Audits', 'Crawlability, indexation, canonicals, structured data, Core Web Vitals and JavaScript rendering.'],
    ['E-commerce SEO', 'Category and product optimization, site architecture, internal links, faceted navigation and conversion-led search.'],
    ['Content Strategy & SEO', 'Keyword research, content gaps, topical authority and useful content mapped to real search intent.'],
    ['SEO Training & Workshops', 'Practical training for in-house teams, university students and industry events.'],
    ['SEO Automation & Reporting', 'Python and AI-supported workflows, custom dashboards and decision-ready search reporting.'],
  ];
  const faqs = [
    ['What does an SEO consultant do?', 'An SEO consultant analyzes search demand, competitors, content and technical infrastructure, then turns the findings into a prioritized growth strategy.'],
    ['What is different about e-commerce SEO?', 'E-commerce SEO connects category architecture, product discovery, filters, internal linking and technical scale with conversion and revenue goals.'],
    ['Do you currently offer freelance SEO consulting?', 'I am not actively offering standard freelance packages. I focus on selected strategic projects, product development and knowledge sharing.'],
    ['Is SEO still necessary in the AI search era?', 'Yes. Clear information architecture, trustworthy content, technical accessibility and brand authority are also foundational signals for AI-powered discovery.'],
  ];

  return (
    <main id="main-content" role="main" lang="en">
      <section className="hero" aria-label="Introduction">
        <div className="container"><div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge"><span className="badge-icon" aria-hidden="true">&#127942;</span><span>Best Low Budget Campaign (SEO) Finalist</span></div>
            <h1>Hello, I&apos;m <span className="highlight">Kerem Gezergün</span></h1>
            <p className="hero-title">Senior E-commerce SEO Consultant</p>
            <p className="hero-description">I grow e-commerce websites with strategies that turn organic visibility into revenue. I have helped <strong>more than 30 e-commerce brands</strong> scale organic performance through technical SEO, content systems and data-led prioritization.</p>
            <ul className="hero-stats" aria-label="Key figures"><li className="stat"><span className="stat-number">30+</span><span className="stat-label">Brands</span></li><li className="stat"><span className="stat-number">5+</span><span className="stat-label">Years of experience</span></li></ul>
            <div className="hero-cta"><a href="https://businessup.com.tr/iletisim/" target="_blank" rel="nofollow noopener noreferrer" className="btn btn-primary btn-large">Work with me<span className="sr-only"> (opens in a new tab)</span></a><Link href="/en/#projects" className="btn btn-outline btn-large">Explore projects</Link></div>
          </div>
          <figure className="hero-image"><div className="image-wrapper"><Image src="/images/kerem-gezergun.jpg" alt="Kerem Gezergün, Senior E-commerce SEO Consultant" fill sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 400px" priority /><div className="image-decoration" aria-hidden="true" /></div></figure>
        </div></div>
      </section>

      <section className="tools-section" aria-labelledby="en-tools-title"><div className="container"><p className="tools-title" id="en-tools-title">Tools I use</p><ul className="tools-grid" aria-label="SEO tools">
        <li className="tool-item"><Image src="/images/tools/ahrefs.png" alt="Ahrefs" width={100} height={40} /></li>
        <li className="tool-item"><Image src="https://www.gstatic.com/images/branding/product/2x/search_console_64dp.png" alt="Google Search Console" width={100} height={40} /></li>
        <li className="tool-item"><Image src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" alt="Google Analytics" width={100} height={40} unoptimized /></li>
        <li className="tool-item"><Image src="/images/tools/semrush.png" alt="Semrush" width={100} height={40} /></li>
        <li className="tool-item"><Image src="/images/tools/screaming-frog.png" alt="Screaming Frog" width={100} height={40} /></li>
        <li className="tool-item"><Image src="/images/tools/gtmetrix.png" alt="GTmetrix" width={100} height={40} /></li>
      </ul></div></section>

      <section id="services" className="services-section" aria-labelledby="en-services-heading"><div className="container"><div className="section-header"><span className="section-tag">Services</span><h2 id="en-services-heading">What I do</h2></div><ul className="services-grid" aria-label="Services">{services.map(([title, text]) => <li className="service-card" key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul></div></section>

      <section id="about" className="about-section" aria-labelledby="en-about-heading"><div className="container"><div className="section-header"><span className="section-tag">About</span><h2 id="en-about-heading">I approach SEO as a complete growth system</h2></div><div className="about-content"><aside className="about-text"><p>I treat SEO as more than rankings. It is a connected system of <strong>search intent, information architecture, technical accessibility and brand visibility</strong>.</p><p>I work as a Senior E-commerce SEO Consultant at <strong>BusinessUp!</strong> and share industry knowledge through the <strong>Sepetteki SEO</strong> podcast.</p></aside></div></div></section>

      <section className="results-section" aria-labelledby="en-results-heading"><div className="container"><div className="section-header"><span className="section-tag">Results</span><h2 id="en-results-heading">Experience in numbers</h2></div><ul className="results-grid"><li className="result-card"><span className="result-number">30+</span><span className="result-label">Brands</span><p>SEO strategy and consulting across multiple industries.</p></li><li className="result-card"><span className="result-number">5+</span><span className="result-label">Years in SEO</span><p>Hands-on experience in e-commerce, finance, health and education.</p></li><li className="result-card"><span className="result-number">65+</span><span className="result-label">Training hours</span><p>Free e-commerce and SEO education delivered to new professionals.</p></li></ul></div></section>

      <section id="projects" className="projects-section" aria-labelledby="en-projects-heading"><div className="container"><div className="section-header"><span className="section-tag">Industry Projects</span><h2 id="en-projects-heading">Speaking and knowledge-sharing projects</h2></div><ul className="projects-grid"><li className="project-card featured"><span className="project-badge">Speaker</span><h3>Üsküdar University</h3><p>A session on SEO, digital marketing and career development.</p></li><li className="project-card"><span className="project-badge-secondary">Speaker</span><h3>Turkish Psychological Association</h3><p>Digital visibility and ethical search strategy for professionals.</p></li><li className="project-card"><span className="project-badge-secondary">Podcast</span><h3>Sepetteki SEO</h3><p>Conversations about e-commerce SEO, technical search and artificial intelligence.</p></li></ul><div className="section-cta"><Link className="btn btn-outline" href="/en/industry-projects">View all industry projects</Link></div></div></section>

      <section className="ongoing-section" aria-labelledby="en-products-heading"><div className="container"><div className="section-header"><span className="section-tag">SEO Tools</span><h2 id="en-products-heading">Products I am building</h2></div><ul className="ongoing-grid"><li className="ongoing-card"><span className="ongoing-status">macOS</span><h3>Nirengi</h3><p>Private, on-device SEO server log analysis with 41 decision-ready reports.</p><Link href="/en/nirengi-log-analyzer">Explore Nirengi</Link></li><li className="ongoing-card"><span className="ongoing-status">macOS</span><h3>Knotvo</h3><p>HAR and live site-speed analysis translated into a prioritized action plan.</p><Link href="/en/knotvo-site-speed-analyzer">Explore Knotvo</Link></li><li className="ongoing-card"><span className="ongoing-status">Free resource</span><h3>SEO Learning Roadmap</h3><p>A structured path from search fundamentals to advanced technical SEO and AI search.</p><Link href="/en/seo-learning-roadmap">Open the roadmap</Link></li></ul></div></section>

      <section className="faq-section" aria-labelledby="en-faq-heading"><div className="container"><div className="section-header"><span className="section-tag">FAQ</span><h2 id="en-faq-heading">Frequently asked questions</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div></div></section>
    </main>
  );
}

function EnglishInnerPage({ page }: { page: EnglishPage }) {
  const slug = page.enPath.split('/').pop();
  const isNirengi = slug?.startsWith('nirengi');
  const isKnotvo = slug?.startsWith('knotvo');
  const isLegal = slug?.includes('privacy') || slug?.includes('support');

  if (slug === 'seo-blog') {
    const posts = page.sections[0].items ?? [];
    return <main id="main-content" role="main" lang="en"><section className="page-header"><div className="container"><span className="section-tag">SEO Blog</span><h1>SEO Guides</h1><p>{page.lead}</p></div></section><section className="page-content"><div className="container"><ul className="blog-page-grid" aria-label="SEO guides">{posts.map((post, index) => <li key={post.title}><article className="blog-card-large"><div className="blog-image placeholder"><span className="coming-soon-badge">Coming soon</span></div><div className="blog-content"><span className="blog-category">{index === 2 ? 'AI Search & GEO' : post.title}</span><h2>{post.title}</h2><p>{post.text}</p><ul className="blog-meta"><li className="meta-item">In-depth guide</li><li className="meta-item">Publishing soon</li></ul></div></article></li>)}</ul></div></section></main>;
  }

  if (slug === 'industry-projects') {
    const projects = [
      ['Summit Organizer', 'Ahi Evran University Digital Marketing Summits', 'I organized two digital marketing summits with Ahi Evran University. Leading professionals joined as speakers and the events reached more than 800 participants.', '800+ participants · Kırşehir'],
      ['Education Program', 'Free E-commerce Training', 'A comprehensive 65+ hour program covering e-commerce fundamentals, product selection, pricing, marketplaces and SEO for young professionals.', '65+ training hours'],
      ['Speaker', 'Üsküdar University', 'I shared practical e-commerce SEO strategy, technical SEO foundations and career guidance with university students.', 'Istanbul · Education'],
      ['Speaker', 'Turkish Psychological Association', 'A professional session about digital visibility, ethical search strategy and strengthening online discoverability.', 'Professional association event'],
      ['Podcast', 'Sepetteki SEO', 'A podcast co-hosted with Simay Özpilavcı about e-commerce SEO, artificial intelligence, technical debates and developments in search.', 'E-commerce SEO · AI'],
    ];
    return <main id="main-content" role="main" lang="en"><section className="page-header"><div className="container"><span className="section-tag">Industry Projects</span><h1>Speaking &amp; Project Work</h1><p>{page.lead}</p></div></section><section className="page-content"><div className="container"><ul className="projects-list" aria-label="Industry projects">{projects.map(([badge, title, text, meta], index) => <li key={title}><article className={`project-detail-card${index === 0 || index === 4 ? ' featured' : ''}`}><span className="project-detail-badge">{badge}</span><div className="project-detail-content"><h2>{title}</h2><p>{text}</p><ul className="project-meta"><li className="meta-item">{meta}</li></ul></div></article></li>)}</ul></div></section>{page.cta && <section className="cta-section"><div className="container"><h2>{page.cta.title}</h2><p>{page.cta.text}</p><a className="btn btn-primary btn-large" href={page.cta.href}>{page.cta.label}</a></div></section>}</main>;
  }

  if (slug === 'seo-learning-roadmap') {
    return <SeoLearningRoadmap language="en" />;
  }

  if (isNirengi && !isLegal && slug !== 'nirengi-accessibility') {
    const features = page.sections[0].items ?? [];
    return <main id="main-content" className="nirengi" role="main" lang="en"><section className="nirengi-hero"><div className="container nirengi-hero-grid"><div><p className="nirengi-eyebrow">Native macOS SEO analysis</p><h1>Your logs. Your Mac. <span>Your insights.</span></h1><p className="nirengi-lead">{page.lead}</p><div className="nirengi-actions"><a className="btn btn-primary btn-large" href="#features">Explore features</a><Link className="btn btn-outline btn-large" href="/en/nirengi-accessibility">Accessibility</Link></div></div><div className="nirengi-window" role="img" aria-label="Four example Nirengi metrics"><div className="nirengi-windowbar"><i /><i /><i /></div><div className="nirengi-metrics"><div><strong>2.4M</strong><span>Requests analyzed</span></div><div><strong>41</strong><span>Reports</span></div><div><strong>100%</strong><span>On device</span></div><div><strong>0</strong><span>Logs uploaded</span></div></div></div></div></section><section id="features" className="nirengi-section"><div className="container"><p className="nirengi-eyebrow">SEO server log analysis</p><h2>See what crawlers actually do.</h2><p className="nirengi-intro">Nirengi turns sensitive infrastructure data into evidence without sending it to the cloud.</p><div className="nirengi-grid">{features.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>{page.sections.slice(1).map((section, index) => <section className={`nirengi-section${index % 2 === 0 ? ' nirengi-alt' : ''}`} key={section.title}><div className="container"><p className="nirengi-eyebrow">Nirengi capabilities</p><h2>{section.title}</h2>{section.paragraphs?.map((text) => <p className="nirengi-intro" key={text}>{text}</p>)}{section.bullets && <ul className="nirengi-steps">{section.bullets.map((text) => <li key={text}><p>{text}</p></li>)}</ul>}</div></section>)}<section className="nirengi-section nirengi-alt"><div className="container nirengi-narrow"><div className="nirengi-actions"><Link className="btn btn-primary" href="/en/nirengi-support">Support</Link><Link className="btn btn-outline" href="/en/nirengi-privacy-policy">Privacy policy</Link><Link className="btn btn-outline" href="/en/nirengi-accessibility">Accessibility</Link></div></div></section></main>;
  }

  if (isKnotvo && !isLegal) {
    return <main id="main-content" className="knotvo" role="main" lang="en"><section className="knotvo-hero"><div className="container"><span className="k-badge">Designed for Mac</span><h1>Understand what slows a page down—and <span className="k-hl">what to fix first</span></h1><p className="k-lead">{page.lead}</p><div className="k-cta-row"><a className="btn btn-primary btn-large" href="mailto:iletisim@keremgezergun.com?subject=Notify%20me%20about%20Knotvo">Notify me</a><a className="btn btn-outline btn-large" href="#features">Explore features</a></div><p className="k-macnote">🍎 Coming to the Mac App Store · macOS 14+ · Apple Silicon and Intel</p></div></section>{page.sections.map((section, index) => <section id={index === 0 ? 'features' : undefined} className={`knotvo-section${index % 2 ? ' alt' : ''}`} key={section.title}><div className="container"><div className="k-eyebrow">Site-speed workflow</div><h2>{section.title}</h2>{section.intro && <p className="k-lead">{section.intro}</p>}{section.paragraphs?.map((text) => <p className="k-lead" key={text}>{text}</p>)}{section.items && <div className="k-grid">{section.items.map((item) => <div className="k-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>}{section.bullets && <div className="k-benefits">{section.bullets.map((text) => <div className="k-benefit" key={text}><span className="chk">✓</span><span>{text}</span></div>)}</div>}</div></section>)}</main>;
  }

  if (slug === 'nirengi-accessibility') {
    return <main id="main-content" className="nirengi-accessibility" role="main" lang="en"><header className="nirengi-a11y-hero"><div className="container nirengi-narrow"><p className="nirengi-eyebrow">Accessibility on macOS</p><h1>{page.heading}</h1><p className="nirengi-lead">{page.lead}</p><aside className="nirengi-a11y-notice"><h2>Current declaration status</h2><p>Implemented support and known limitations are documented transparently while the manual assistive-technology test matrix continues.</p></aside></div></header>{page.sections.map((section, index) => <section className={`nirengi-section${index % 2 ? ' nirengi-alt' : ''}`} key={section.title}><div className="container"><p className="nirengi-eyebrow">Accessibility</p><h2>{section.title}</h2>{section.paragraphs?.map((text) => <p className="nirengi-intro" key={text}>{text}</p>)}{section.items && <div className="nirengi-grid nirengi-a11y-grid">{section.items.map((item) => <article key={item.title}><span className="nirengi-a11y-status">Implemented</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>}{section.bullets && <ul className="nirengi-steps">{section.bullets.map((text) => <li key={text}><p>{text}</p></li>)}</ul>}</div></section>)}</main>;
  }

  if (isLegal) {
    const legalClass = isNirengi ? 'nirengi-legal' : 'knotvo-legal';
    return <main id="main-content" className={legalClass} role="main" lang="en"><article className={`container${isNirengi ? ' nirengi-narrow' : ''}`}><p className={isNirengi ? 'nirengi-eyebrow' : 'muted'}>{isNirengi ? 'Nirengi' : 'Knotvo'}</p><h1>{page.heading}</h1><p className={isNirengi ? 'nirengi-lead' : 'muted'}>{page.lead}</p>{page.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.intro && <p>{section.intro}</p>}{section.paragraphs?.map((text) => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map((text) => <li key={text}>{text}</li>)}</ul>}</section>)}{page.cta && <p><a className="btn btn-primary" href={page.cta.href}>{page.cta.label}</a></p>}<Link className={isNirengi ? 'nirengi-back' : undefined} href={isNirengi ? '/en/nirengi-log-analyzer' : '/en/knotvo-site-speed-analyzer'}>← Back to the product page</Link></article></main>;
  }

  return null;
}

export default async function EnglishPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const page = pages[slug.join('/')];
  if (!page) notFound();
  if (slug.length === 0) return <EnglishHome />;
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: absoluteUrl(page.enPath), inLanguage: 'en', isPartOf: { '@id': 'https://www.keremgezergun.com/#website' } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(schema) }} /><EnglishInnerPage page={page} /></>;
}

export const dynamicParams = false;
