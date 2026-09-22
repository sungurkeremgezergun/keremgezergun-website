import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import { industryProjects } from '@/lib/projects';

const copy = {
  tag: { tr: 'Sektörel Projeler', en: 'Industry Projects' },
  heading: { tr: 'Konuşmacı & Proje Çalışmalarım', en: 'Speaking & project work' },
  list: { tr: 'Proje listesi', en: 'Projects' },
  tags: { tr: 'Etiketler', en: 'Tags' },
  all: { tr: 'Tüm sektörel projeler', en: 'View all industry projects' },
  allHref: { tr: '/sektorel-projeler', en: '/en/industry-projects' },
};

const CARD_COUNT = 4;

/**
 * The home page's project cards, from the same data as /sektorel-projeler.
 * Featured entries come first, then the list order, four in all — the two
 * home pages used to hand-copy these and drifted from the data file.
 */
export default function HomeProjects({ language }: { language: Language }) {
  const cards = [...industryProjects.filter((p) => p.featured), ...industryProjects.filter((p) => !p.featured)].slice(
    0,
    CARD_COUNT,
  );

  return (
    <section id={language === 'en' ? 'projects' : 'projeler'} className="projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{copy.tag[language]}</span>
          <h2 id="projects-heading">{copy.heading[language]}</h2>
        </div>
        <ul className="projects-grid" aria-label={copy.list[language]}>
          {cards.map((project) => (
            <li key={project.slug} className={project.featured ? 'project-card featured' : 'project-card'}>
              <span className={project.featured ? 'project-badge' : 'project-badge-secondary'}>
                {project.badge[language]}
              </span>
              <h3>{project.title[language]}</h3>
              <p>{project.body[0][language]}</p>
              <ul className="project-tags" aria-label={copy.tags[language]}>
                {project.tags.slice(0, 3).map((tag) => (
                  <li key={tag.tr}>{tag[language]}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="section-cta">
          <Link className="btn btn-outline" href={copy.allHref[language]}>
            {copy.all[language]}
          </Link>
        </div>
      </div>
    </section>
  );
}
