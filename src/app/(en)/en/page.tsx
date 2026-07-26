import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { contact } from '@/lib/contact';

import knotvoShot from '../../../../public/knotvo/overview.png';

type FaqEntry = { q: string; a: React.ReactNode; plain: string };

const faqs: FaqEntry[] = [
  {
    q: 'What is an SEO specialist?',
    a: (
      <p>
        An SEO specialist manages the search engine optimization of a website so that it ranks
        higher in engines such as Google. The work spans technical SEO, content optimization and
        backlink strategy.
      </p>
    ),
    plain:
      'An SEO specialist manages the search engine optimization of a website so that it ranks higher in engines such as Google. The work spans technical SEO, content optimization and backlink strategy.',
  },
  {
    q: 'What is an SEO consultant?',
    a: (
      <p>
        An SEO consultant analyses and directs the SEO strategy of a brand or website. Unlike a
        specialist, a consultant sits closer to strategy, planning and direction.
      </p>
    ),
    plain:
      'An SEO consultant analyses and directs the SEO strategy of a brand or website. Unlike a specialist, a consultant sits closer to strategy, planning and direction.',
  },
  {
    q: 'What is the difference between an SEO specialist and an SEO consultant?',
    a: (
      <p>
        A specialist takes an active role in implementation, while a consultant mostly draws the
        roadmap. On smaller projects the same person usually covers both roles.
      </p>
    ),
    plain:
      'A specialist takes an active role in implementation, while a consultant mostly draws the roadmap. On smaller projects the same person usually covers both roles.',
  },
  {
    q: 'What does an SEO consultant actually do?',
    a: (
      <>
        <p>An SEO consultant:</p>
        <ul>
          <li>Audits the site</li>
          <li>Analyses competitors</li>
          <li>Builds the keyword strategy</li>
          <li>Identifies technical SEO problems</li>
          <li>Develops content and backlink strategy</li>
        </ul>
      </>
    ),
    plain:
      'An SEO consultant audits the site, analyses competitors, builds the keyword strategy, identifies technical SEO problems and develops content and backlink strategy.',
  },
  {
    q: 'Who counts as a professional SEO specialist?',
    a: (
      <p>
        A professional SEO specialist has more than theory — they have delivered results on real
        projects. The role demands data analysis, an understanding of user behaviour and fast
        adaptation to algorithm changes.
      </p>
    ),
    plain:
      'A professional SEO specialist has more than theory — they have delivered results on real projects. The role demands data analysis, an understanding of user behaviour and fast adaptation to algorithm changes.',
  },
  {
    q: 'How do you choose the best SEO specialist?',
    a: (
      <>
        <p>
          There is no single &ldquo;best SEO specialist&rdquo;. It depends on what you need. When
          choosing, look at:
        </p>
        <ul>
          <li>Reference projects</li>
          <li>Industry experience</li>
          <li>Transparent ways of working</li>
          <li>Current SEO knowledge</li>
        </ul>
      </>
    ),
    plain:
      'There is no single "best SEO specialist" — it depends on what you need. When choosing, look at reference projects, industry experience, transparent ways of working and current SEO knowledge.',
  },
  {
    q: 'Who is the best SEO specialist in Türkiye?',
    a: (
      <>
        <p>
          In Türkiye the idea of a single &ldquo;best SEO specialist&rdquo; does not hold up. SEO
          is a multi-dimensional field that shifts with technical knowledge, content strategy and
          industry experience.
        </p>
        <p>
          Many SEO specialists appear across different lists and rankings, and I show up on some of
          them from time to time. What actually matters in SEO, though, is developing the right
          strategy for a specific project and producing sustainable results.
        </p>
        <p>
          So rather than chasing the &ldquo;best SEO specialist&rdquo;, it is far more useful to
          work with the SEO specialist who best fits your needs.
        </p>
      </>
    ),
    plain:
      'In Türkiye the idea of a single "best SEO specialist" does not hold up. SEO is a multi-dimensional field that shifts with technical knowledge, content strategy and industry experience. Many SEO specialists appear across different lists and rankings, and I show up on some of them from time to time. What actually matters in SEO is developing the right strategy for a specific project and producing sustainable results. So rather than chasing the "best SEO specialist", it is far more useful to work with the SEO specialist who best fits your needs.',
  },
  {
    q: 'What does an e-commerce SEO specialist do?',
    a: (
      <>
        <p>
          An e-commerce SEO specialist works specifically on product pages, category structures and
          conversion-led optimization.
        </p>
        <ul>
          <li>Product descriptions</li>
          <li>Faceted navigation</li>
          <li>Technical infrastructure</li>
          <li>Site speed and UX</li>
        </ul>
        <p>are the areas that matter most.</p>
      </>
    ),
    plain:
      'An e-commerce SEO specialist works specifically on product pages, category structures and conversion-led optimization. Product descriptions, faceted navigation, technical infrastructure, site speed and UX are the areas that matter most.',
  },
  {
    q: 'Do you need an e-commerce SEO consultant?',
    a: (
      <p>
        Competition in e-commerce is high, so an SEO consultant gives you a real advantage. The
        right category structure and content strategy can move sales directly.
      </p>
    ),
    plain:
      'Competition in e-commerce is high, so an SEO consultant gives you a real advantage. The right category structure and content strategy can move sales directly.',
  },
  {
    q: 'Do you work as a freelance SEO specialist?',
    a: (
      <p>
        No. I am not currently taking on freelance SEO specialist or consultant work. I do continue
        to work on and share knowledge about SEO, content and digital strategy.
      </p>
    ),
    plain:
      'No. I am not currently taking on freelance SEO specialist or consultant work. I do continue to work on and share knowledge about SEO, content and digital strategy.',
  },
  {
    q: "Why don't you work as a freelance SEO consultant?",
    a: (
      <p>
        My focus right now is on other projects, content production and long-term strategic work.
        For that reason I do not offer individual consulting.
      </p>
    ),
    plain:
      'My focus right now is on other projects, content production and long-term strategic work. For that reason I do not offer individual consulting.',
  },
  {
    q: 'Will you offer professional SEO consulting in the future?',
    a: (
      <p>
        That depends entirely on projects and scheduling. Working on a small number of selected
        projects later on is possible.
      </p>
    ),
    plain:
      'That depends entirely on projects and scheduling. Working on a small number of selected projects later on is possible.',
  },
  {
    q: 'What is your approach to SEO?',
    a: (
      <>
        <p>My approach is:</p>
        <ul>
          <li>User-focused, not only Google-focused</li>
          <li>Grounded in data and analysis</li>
          <li>Built for long-term growth</li>
        </ul>
        <p>I see SEO as content and brand strategy as much as a technical discipline.</p>
      </>
    ),
    plain:
      'My approach is user-focused rather than only Google-focused, grounded in data and analysis, and built for long-term growth. I see SEO as content and brand strategy as much as a technical discipline.',
  },
  {
    q: 'What is your specialism within SEO?',
    a: (
      <p>
        I work primarily on e-commerce SEO. I also consult in sectors such as B2B and education, but
        e-commerce search remains my focus.
      </p>
    ),
    plain:
      'I work primarily on e-commerce SEO. I also consult in sectors such as B2B and education, but e-commerce search remains my focus.',
  },
  {
    q: 'Is an SEO specialist still necessary in the AI era?',
    a: (
      <p>
        Yes — arguably more than before. As AI-assisted search grows, well-structured content and
        authority signals become more critical, not less.
      </p>
    ),
    plain:
      'Yes — arguably more than before. As AI-assisted search grows, well-structured content and authority signals become more critical, not less.',
  },
  {
    q: 'Is SEO enough to appear in AI Overviews?',
    a: (
      <>
        <p>No. Classic SEO alone is no longer sufficient.</p>
        <ul>
          <li>Content authority</li>
          <li>Brand trust</li>
          <li>Clear, structured information</li>
        </ul>
        <p>have become more important for LLM-based systems.</p>
      </>
    ),
    plain:
      'No. Classic SEO alone is no longer sufficient. Content authority, brand trust and clear, structured information have become more important for LLM-based systems.',
  },
  {
    q: 'Will ChatGPT and similar systems kill SEO?',
    a: (
      <p>
        No — SEO changes shape. Even as search engines evolve, people still need to find
        information. The SEO role simply becomes more strategic and more content-led.
      </p>
    ),
    plain:
      'No — SEO changes shape. Even as search engines evolve, people still need to find information. The SEO role simply becomes more strategic and more content-led.',
  },
  {
    q: 'Which matters more: an SEO specialist or a content strategist?',
    a: (
      <p>
        The two roles now overlap heavily. A strong SEO specialist has to be a strong content
        strategist as well.
      </p>
    ),
    plain:
      'The two roles now overlap heavily. A strong SEO specialist has to be a strong content strategist as well.',
  },
  {
    q: 'Where should someone start when learning SEO?',
    a: (
      <>
        <p>Start with:</p>
        <ul>
          <li>Keyword research</li>
          <li>Technical SEO fundamentals</li>
          <li>Content optimization</li>
          <li>How Google&apos;s algorithms think</li>
        </ul>
      </>
    ),
    plain:
      "Start with keyword research, technical SEO fundamentals, content optimization and how Google's algorithms think.",
  },
];

const PAGE_URL = 'https://www.keremgezergun.com/en';

export const metadata: Metadata = {
  title: 'E-commerce SEO Consultant & Technical SEO Expert',
  description:
    'Senior e-commerce SEO consultant Kerem Gezergün helps online retailers grow organic revenue through technical SEO, content strategy and data-led search optimization.',
  keywords: [
    'SEO consultant',
    'E-commerce SEO',
    'Technical SEO',
    'Organic growth',
    'Istanbul SEO',
  ],
  alternates: englishAlternateMetadata('/', '/en'),
  openGraph: {
    title: 'Kerem Gezergün | Senior E-commerce SEO Consultant',
    description:
      'I grow e-commerce websites with strategies that turn organic visibility into revenue.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün - E-commerce SEO Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerem Gezergün | Senior E-commerce SEO Consultant',
    description:
      'I grow e-commerce websites with strategies that turn organic visibility into revenue.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

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

const services = [
  {
    title: 'SEO Strategy & Consulting',
    text: 'I build data-led SEO strategies that fit your commercial goals, combining competitor analysis, market research and ruthless prioritization into a sustainable growth plan.',
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </>
    ),
  },
  {
    title: 'Technical SEO Audits',
    text: 'Comprehensive technical analysis across site speed, crawlability, indexability, canonicalization, schema markup and Core Web Vitals.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </>
    ),
  },
  {
    title: 'E-commerce SEO',
    text: 'Product and category page optimization, site architecture, internal linking, faceted navigation control and conversion-led search work.',
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </>
    ),
  },
  {
    title: 'Content Strategy & SEO',
    text: 'Keyword research, content gap analysis, topical authority mapping and content planning built around real search intent.',
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </>
    ),
  },
  {
    title: 'SEO Training & Workshops',
    text: 'Tailored SEO training for in-house teams and individuals, university seminars and workshops at industry events.',
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: 'SEO Automation & Reporting',
    text: 'Python and AI-based automation, custom SEO reporting dashboards and data analysis tooling built for decision making.',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
];

const tools = [
  { name: 'Ahrefs', src: '/images/tools/ahrefs.png', alt: 'Ahrefs SEO tool logo' },
  {
    name: 'Google Search Console',
    src: 'https://www.gstatic.com/images/branding/product/2x/search_console_64dp.png',
    alt: 'Google Search Console logo',
  },
  {
    name: 'Google Analytics',
    src: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
    alt: 'Google Analytics logo',
    unoptimized: true,
  },
  { name: 'Semrush', src: '/images/tools/semrush.png', alt: 'Semrush SEO tool logo' },
  {
    name: 'Screaming Frog',
    src: '/images/tools/screaming-frog.png',
    alt: 'Screaming Frog SEO Spider logo',
  },
  { name: 'GTmetrix', src: '/images/tools/gtmetrix.png', alt: 'GTmetrix performance tool logo' },
];

export default function EnglishHomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon" aria-hidden="true">
                  &#127942;
                </span>
                <span>Best Low Budget Campaign (SEO) Finalist</span>
              </div>
              <h1>
                Hello, I&apos;m <span className="highlight">Kerem Gezergün</span>
              </h1>
              <p className="hero-title">Senior E-commerce SEO Consultant</p>
              <p className="hero-description">
                I grow e-commerce websites with strategies that turn organic visibility into
                revenue. I have helped <strong>more than 30 e-commerce brands</strong> scale
                organic performance through technical SEO, content systems and data-led
                prioritization.
              </p>
              <ul className="hero-stats" aria-label="Key figures">
                <li className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Brands</span>
                </li>
                <li className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years of experience</span>
                </li>
              </ul>
              <div className="hero-cta">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  Work with me
                  <span className="sr-only"> — message me on WhatsApp (opens in a new tab)</span>
                </a>
                <Link href="/en/#projects" className="btn btn-outline btn-large">
                  Explore projects
                </Link>
              </div>
            </div>
            <figure className="hero-image">
              <div className="image-wrapper">
                <Image
                  src="/images/kerem-gezergun.jpg"
                  alt="Kerem Gezergün, Senior E-commerce SEO Consultant"
                  fill
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 400px"
                  priority
                  fetchPriority="high"
                />
                <div className="image-decoration" aria-hidden="true" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="tools-section" aria-labelledby="tools-title">
        <div className="container">
          <p className="tools-title" id="tools-title">
            Tools I use
          </p>
          <ul className="tools-grid" aria-label="SEO tools">
            {tools.map((tool) => (
              <li className="tool-item" title={tool.name} key={tool.name}>
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  width={100}
                  height={40}
                  unoptimized={tool.unoptimized}
                />
              </li>
            ))}
            <li className="tool-item" title="ReportSup">
              <a
                href="https://reportsup.com.tr/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Visit the ReportSup website (opens in a new tab)"
              >
                <Image
                  src="/images/tools/reportsup.webp"
                  alt="ReportSup SEO reporting tool logo"
                  width={100}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Services</span>
            <h2 id="services-heading">What I do</h2>
          </div>
          <ul className="services-grid" aria-label="Services">
            {services.map((service) => (
              <li className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {service.icon}
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About</span>
            <h2 id="about-heading">I approach SEO as a complete growth system</h2>
          </div>
          <div className="about-content">
            <aside className="about-text">
              <p>
                I treat SEO as more than a technical ranking exercise. It is a connected system of{' '}
                <strong>search intent, information architecture and brand visibility</strong>.
              </p>
              <p>
                I currently work as a Senior E-commerce SEO Consultant at{' '}
                <strong>BusinessUp!</strong>. I also founded and host{' '}
                <strong>&ldquo;Sepetteki SEO&rdquo;</strong>, a podcast series created to share what
                I learn in the industry.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="results-section" aria-labelledby="results-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Results</span>
            <h2 id="results-heading">Experience in numbers</h2>
          </div>
          <ul className="results-grid" aria-label="Performance metrics">
            <li className="result-card">
              <span className="result-number">30+</span>
              <span className="result-label">Brands worked with</span>
              <p>
                SEO consulting and strategy support delivered to more than 30 brands across
                different industries.
              </p>
            </li>
            <li className="result-card">
              <span className="result-number">5+</span>
              <span className="result-label">Years in SEO</span>
              <p>
                Hands-on SEO experience across e-commerce, finance, healthcare and education.
              </p>
            </li>
            <li className="result-card">
              <span className="result-number">65+</span>
              <span className="result-label">Training hours</span>
              <p>More than 65 hours of teaching delivered in free e-commerce training programmes.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section className="awards-section" aria-labelledby="awards-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Recognition</span>
            <h2 id="awards-heading">Awards &amp; Recognition</h2>
          </div>
          <ul className="awards-grid" aria-label="Awards and achievements">
            <li className="award-card featured">
              <div className="award-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3>Best Low Budget Campaign (SEO)</h3>
              <p>
                My team and I reached the final in the{' '}
                <strong>&ldquo;Best Low Budget Campaign (SEO)&rdquo;</strong> category.
              </p>
              <span className="award-year">Finalist</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industry Projects</span>
            <h2 id="projects-heading">Speaking &amp; project work</h2>
          </div>
          <ul className="projects-grid" aria-label="Projects">
            <li className="project-card featured">
              <span className="project-badge">Speaker</span>
              <h3>Üsküdar University</h3>
              <p>
                I spoke at Üsküdar University on SEO and digital marketing, and on turning search
                data into career and business decisions.
              </p>
              <ul className="project-tags" aria-label="Tags">
                <li>Education</li>
                <li>SEO</li>
                <li>Speaker</li>
              </ul>
            </li>
            <li className="project-card">
              <span className="project-badge-secondary">Speaker</span>
              <h3>Turkish Psychological Association</h3>
              <p>
                I joined a Turkish Psychological Association event as a speaker on digital
                visibility and ethical search strategy.
              </p>
              <ul className="project-tags" aria-label="Tags">
                <li>Association</li>
                <li>Speaker</li>
              </ul>
            </li>
            <li className="project-card">
              <span className="project-badge-secondary">Podcast</span>
              <h3>Sepetteki SEO</h3>
              <p>
                A podcast series covering e-commerce SEO and artificial intelligence, co-hosted with
                Simay Özpilavcı.
              </p>
              <ul className="project-tags" aria-label="Tags">
                <li>Podcast</li>
                <li>E-commerce SEO</li>
                <li>AI</li>
              </ul>
            </li>
          </ul>
          <div className="section-cta">
            <Link className="btn btn-outline" href="/en/industry-projects">
              View all industry projects
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing projects */}
      <section className="ongoing-section" aria-labelledby="ongoing-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">In Progress</span>
            <h2 id="ongoing-heading">Projects I am working on</h2>
          </div>
          <ul className="ongoing-grid" aria-label="Ongoing projects">
            <li className="ongoing-card">
              <div className="ongoing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <span className="ongoing-status">In development</span>
              <h3>SEO mobile app</h3>
              <p>A mobile application built for SEO professionals.</p>
            </li>
            <li className="ongoing-card">
              <div className="ongoing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="ongoing-status">Being written</span>
              <h3>SEO book</h3>
              <p>A comprehensive SEO guide, currently in progress.</p>
            </li>
            <li className="ongoing-card">
              <div className="ongoing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <span className="ongoing-status">Active</span>
              <h3>Sepetteki SEO</h3>
              <p>A podcast channel focused on e-commerce SEO and AI.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Knotvo product */}
      <section className="knotvo" aria-labelledby="knotvo-home-heading">
        <div className="knotvo-section alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">New product · Mac</span>
              <h2 id="knotvo-home-heading">Knotvo — Site Speed Analyzer</h2>
            </div>
            <div className="k-feature" style={{ marginTop: 8 }}>
              <div className="k-txt">
                <p>
                  <strong>Knotvo</strong> is a Mac application I built. It brings your browser&apos;s
                  network capture (HAR) and live measurement into one screen, then turns the reason
                  a page is slow into a plain to-do list. Not opaque scores — what to actually fix.
                </p>
                <ul className="k-flist">
                  <li>HAR analysis is entirely local — nothing goes to the cloud</li>
                  <li>Lab (Lighthouse) and field (CrUX) data side by side</li>
                  <li>No account, no queue, no subscription</li>
                  <li>A PDF report you can send to a client</li>
                </ul>
                <Link
                  href="/en/knotvo-site-speed-analyzer"
                  className="btn btn-primary btn-large"
                  style={{ marginTop: 20 }}
                >
                  Explore Knotvo
                </Link>
              </div>
              <div className="k-shot">
                <Image
                  src={knotvoShot}
                  alt="The Knotvo overview screen: performance score and prioritized bottlenecks"
                  placeholder="blur"
                  sizes="(max-width: 820px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="podcast-section" aria-labelledby="podcast-heading">
        <div className="container">
          <div className="podcast-content">
            <div className="podcast-info">
              <span className="section-tag">Podcast</span>
              <h2 id="podcast-heading">Sepetteki SEO</h2>
              <p className="podcast-description">
                In <strong>Sepetteki SEO</strong>, co-hosted with Simay Özpilavcı, we cover how
                e-commerce sites perform in search, the relationship between AI and SEO, industry
                developments and practical search strategy. The show is in Turkish.
              </p>
              <ul className="podcast-topics" aria-label="Podcast topics">
                <li>E-commerce SEO strategy</li>
                <li>AI &amp; SEO</li>
                <li>Technical SEO debates</li>
                <li>Industry news</li>
              </ul>
              <nav className="podcast-links" aria-label="Podcast platforms">
                <a
                  href="https://www.youtube.com/@keremgezergun"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-primary"
                  aria-label="Listen on YouTube (opens in a new tab)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href="https://open.spotify.com/search/sepetteki%20seo"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-outline"
                  aria-label="Listen on Spotify (opens in a new tab)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Spotify
                </a>
              </nav>
            </div>
            <div className="podcast-visual" aria-hidden="true">
              <div className="podcast-artwork">
                <div className="podcast-artwork-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="80" height="80">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                  <span className="podcast-artwork-title">Sepetteki SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 id="faq-heading">Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-question">
                  <span>{q}</span>
                  <svg
                    className="faq-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="faq-answer">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading">Let&apos;s work together</h2>
          <p>
            Get in touch to strengthen your SEO strategy or grow your digital visibility.
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Message me on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
