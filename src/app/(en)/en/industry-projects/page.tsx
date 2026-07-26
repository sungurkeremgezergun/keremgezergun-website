import type { Metadata } from 'next';
import { jsonLdSafe } from '@/lib/jsonLd';
import { englishAlternateMetadata } from '@/lib/i18n';
import { contact } from '@/lib/contact';

const PAGE_URL = 'https://www.keremgezergun.com/en/industry-projects';

export const metadata: Metadata = {
  title: 'SEO Speaking, Education & Industry Projects',
  description:
    'Explore Kerem Gezergün’s SEO speaking engagements, university sessions, professional events, podcast work and search-industry projects.',
  alternates: englishAlternateMetadata('/sektorel-projeler', '/en/industry-projects'),
  openGraph: {
    title: 'Speaking & Project Work | Kerem Gezergün',
    description:
      'Talks, educational sessions and media projects focused on technical SEO, e-commerce growth and AI search.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün industry projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking & Project Work | Kerem Gezergün',
    description:
      'Talks, educational sessions and media projects focused on technical SEO and e-commerce growth.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.keremgezergun.com/en' },
    { '@type': 'ListItem', position: 2, name: 'Industry Projects', item: PAGE_URL },
  ],
};

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function EnglishIndustryProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />

      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <span className="section-tag">Industry Projects</span>
          <h1 id="page-title">Speaking &amp; Project Work</h1>
          <p>
            I share what I have learned in SEO and digital marketing at universities, professional
            associations and industry events.
          </p>
        </div>
      </section>

      <section className="page-content" aria-labelledby="projects-heading">
        <div className="container">
          <h2 id="projects-heading" className="visually-hidden">
            Projects
          </h2>
          <ul className="projects-list" aria-label="Industry projects">
            <li>
              <article className="project-detail-card featured">
                <span className="project-detail-badge">Summit Organizer</span>
                <div className="project-detail-content">
                  <h3>Ahi Evran University Digital Marketing Summits</h3>
                  <p>
                    I organized two digital marketing summits with Ahi Evran University. Leading
                    professionals from the industry joined as speakers and the events reached more
                    than 800 participants.
                  </p>
                  <p>
                    The summits ran in-depth sessions on SEO, social media marketing, content
                    strategy, e-commerce and digital advertising.
                  </p>
                  <ul className="project-meta" aria-label="Project details">
                    <li className="meta-item">
                      <PeopleIcon />
                      800+ participants
                    </li>
                    <li className="meta-item">
                      <PinIcon />
                      Kırşehir
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Tags">
                    <li>Summit</li>
                    <li>Digital Marketing</li>
                    <li>University</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="project-detail-card">
                <span className="project-detail-badge">Education Programme</span>
                <div className="project-detail-content">
                  <h3>Free E-commerce Training</h3>
                  <p>
                    A comprehensive, completely free e-commerce training programme for young
                    people. We provided step-by-step guidance and mentoring for anyone wanting to
                    start in e-commerce.
                  </p>
                  <p>
                    The programme covered e-commerce fundamentals, product selection, pricing
                    strategy, marketplace management and SEO.
                  </p>
                  <ul className="project-meta" aria-label="Project details">
                    <li className="meta-item">
                      <ClockIcon />
                      65+ training hours
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Tags">
                    <li>E-commerce</li>
                    <li>Free Training</li>
                    <li>Mentoring</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="project-detail-card">
                <span className="project-detail-badge">Speaker</span>
                <div className="project-detail-content">
                  <h3>Üsküdar University</h3>
                  <p>
                    I spoke at Üsküdar University on SEO and digital marketing, sharing e-commerce
                    SEO strategy, technical SEO foundations and career guidance with students.
                  </p>
                  <ul className="project-meta" aria-label="Project details">
                    <li className="meta-item">
                      <PinIcon />
                      Istanbul
                    </li>
                    <li className="meta-item">
                      <PeopleIcon />
                      Education sector
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Tags">
                    <li>Education</li>
                    <li>SEO</li>
                    <li>Speaker</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="project-detail-card">
                <span className="project-detail-badge">Speaker</span>
                <div className="project-detail-content">
                  <h3>Turkish Psychological Association</h3>
                  <p>
                    I joined a Turkish Psychological Association event as a speaker on digital
                    visibility and SEO, sharing strategies professionals can use to strengthen
                    their online presence.
                  </p>
                  <ul className="project-meta" aria-label="Project details">
                    <li className="meta-item">
                      <PeopleIcon />
                      Professional association event
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Tags">
                    <li>Association</li>
                    <li>Digital Visibility</li>
                    <li>Speaker</li>
                  </ul>
                </div>
              </article>
            </li>

            <li>
              <article className="project-detail-card featured">
                <span className="project-detail-badge">Podcast</span>
                <div className="project-detail-content">
                  <h3>Sepetteki SEO</h3>
                  <p>
                    A Turkish-language podcast series about e-commerce SEO and artificial
                    intelligence. With Simay Özpilavcı I cover how e-commerce sites perform in
                    search and how AI and SEO intersect.
                  </p>
                  <ul className="project-meta" aria-label="Project details">
                    <li className="meta-item">
                      <ClockIcon />
                      Active podcast
                    </li>
                  </ul>
                  <ul className="project-tags" aria-label="Tags">
                    <li>Podcast</li>
                    <li>E-commerce SEO</li>
                    <li>AI</li>
                  </ul>
                  <a
                    href="https://www.youtube.com/@keremgezergun"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: 20 }}
                  >
                    Watch on YouTube
                    <span className="sr-only"> — the Sepetteki SEO podcast (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Would you like me to speak at your event?</h2>
          <p>
            I am always glad to share what I have learned about SEO, digital marketing and
            e-commerce.
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
