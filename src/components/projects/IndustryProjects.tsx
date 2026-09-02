import type { Language } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { contact } from '@/lib/contact';
import { industryProjects, type ProjectIcon } from '@/lib/projects';
import { projectsGraph } from '@/lib/schema/events';

/**
 * The industry-projects page, shared by both languages.
 *
 * The two route files previously carried the same five cards as duplicated
 * markup, and had already drifted apart on icons and wording. They are now
 * metadata plus one call to this component.
 */

const copy = {
  tag: { tr: 'Sektörel Projeler', en: 'Industry Projects' },
  heading: { tr: 'Konuşmacı & Proje Çalışmalarım', en: 'Speaking & Project Work' },
  lead: {
    tr: 'Üniversiteler, dernekler ve sektörel etkinliklerde SEO ve dijital pazarlama alanında deneyimlerimi paylaşıyorum.',
    en: 'I share what I have learned in SEO and digital marketing at universities, professional associations and industry events.',
  },
  listHeading: { tr: 'Projeler', en: 'Projects' },
  listLabel: { tr: 'Proje listesi', en: 'Industry projects' },
  metaLabel: { tr: 'Proje detayları', en: 'Project details' },
  tagsLabel: { tr: 'Etiketler', en: 'Tags' },
  ctaHeading: {
    tr: 'Etkinliğinizde Konuşmacı Olarak Yer Almamı İster misiniz?',
    en: 'Would you like me to speak at your event?',
  },
  ctaText: {
    tr: 'SEO, dijital pazarlama ve e-ticaret konularında deneyimlerimi paylaşmaktan mutluluk duyarım.',
    en: 'I am always glad to share what I have learned about SEO, digital marketing and e-commerce.',
  },
  ctaButton: { tr: 'WhatsApp’tan Yazın', en: 'Message me on WhatsApp' },
  newTab: { tr: ' (yeni sekmede açılır)', en: ' (opens in a new tab)' },
} as const;

const iconPaths: Record<ProjectIcon, React.ReactNode> = {
  people: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
  mic: (
    <>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </>
  ),
};

function MetaIcon({ icon }: { icon: ProjectIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="18"
      height="18"
      aria-hidden="true"
    >
      {iconPaths[icon]}
    </svg>
  );
}

export default function IndustryProjects({ language }: { language: Language }) {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(projectsGraph(language)) }}
      />

      <section className="page-header" aria-labelledby="page-title">
        <div className="container">
          <span className="section-tag">{copy.tag[language]}</span>
          <h1 id="page-title">{copy.heading[language]}</h1>
          <p>{copy.lead[language]}</p>
        </div>
      </section>

      <section className="page-content" aria-labelledby="projects-heading">
        <div className="container">
          <h2 id="projects-heading" className="visually-hidden">
            {copy.listHeading[language]}
          </h2>
          <ul className="projects-list" aria-label={copy.listLabel[language]}>
            {industryProjects.map((project) => (
              <li key={project.slug}>
                <article
                  className={
                    project.featured ? 'project-detail-card featured' : 'project-detail-card'
                  }
                >
                  <span className="project-detail-badge">{project.badge[language]}</span>
                  <div className="project-detail-content">
                    <h3>{project.title[language]}</h3>
                    {project.body.map((paragraph) => (
                      <p key={paragraph.tr}>{paragraph[language]}</p>
                    ))}
                    <ul className="project-meta" aria-label={copy.metaLabel[language]}>
                      {project.meta.map((entry) => (
                        <li className="meta-item" key={entry.label.tr}>
                          <MetaIcon icon={entry.icon} />
                          {entry.label[language]}
                        </li>
                      ))}
                    </ul>
                    <ul className="project-tags" aria-label={copy.tagsLabel[language]}>
                      {project.tags.map((tag) => (
                        <li key={tag.tr}>{tag[language]}</li>
                      ))}
                    </ul>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="btn btn-primary"
                        style={{ marginTop: 20 }}
                      >
                        {project.link.label[language]}
                        <span className="sr-only">{project.link.description[language]}</span>
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">{copy.ctaHeading[language]}</h2>
          <p>{copy.ctaText[language]}</p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            {copy.ctaButton[language]}
            <span className="sr-only">{copy.newTab[language]}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
