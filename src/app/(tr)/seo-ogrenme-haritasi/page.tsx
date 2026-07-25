import { jsonLdSafe } from '@/lib/jsonLd';
import type { Language } from '@/lib/i18n';
import {
  resourceTypeLabels,
  roadmapSections,
  type RoadmapResource,
  type RoadmapSection,
  type RoadmapSubsection,
} from './roadmapContent';

const chrome = {
  tag: { tr: 'SEO Rehberi', en: 'SEO Learning Roadmap' },
  heading: { tr: 'SEO Rehberi', en: 'SEO Learning Roadmap' },
  lead: {
    tr: 'Temellerden ileri seviyeye, kapsamlı kaynak rehberi ile SEO öğrenin.',
    en: 'Learn SEO from the fundamentals to advanced practice with a comprehensive resource library.',
  },
  listHeading: { tr: 'SEO Kaynakları', en: 'SEO Resources' },
  statResources: { tr: 'Kaynak', en: 'Resources' },
  statCategories: { tr: 'Ana Kategori', en: 'Main Categories' },
  statSubtopics: { tr: 'Alt Konu', en: 'Subtopics' },
  intro: {
    tr: 'Bu rehber, SEO öğrenmek isteyenler için derlenmiş kapsamlı bir kaynak haritasıdır. Strateji, teknik altyapı, içerik, analitik ve kariyer dahil her alanda kaliteli ve güncel kaynaklar bulabilirsiniz.',
    en: 'This roadmap is a curated resource library for learning SEO. It collects current, high-quality material across strategy, technical foundations, content, analytics and career development.',
  },
  newTab: { tr: 'yeni sekmede açılır', en: 'opens in a new tab' },
  ctaHeading: {
    tr: 'SEO Yolculuğunuzda Yardıma mı İhtiyacınız Var?',
    en: 'Need Help on Your SEO Journey?',
  },
  ctaText: {
    tr: 'Profesyonel SEO danışmanlığı ve strateji desteği için bizimle iletişime geçin.',
    en: 'Get in touch for professional SEO strategy and consulting support.',
  },
  ctaLabel: {
    tr: 'BusinessUp web sitesini ziyaret et (yeni sekmede açılır)',
    en: 'Visit the BusinessUp website (opens in a new tab)',
  },
  ctaButton: { tr: 'BusinessUp’ı Ziyaret Edin', en: 'Visit BusinessUp' },
} as const;

const breadcrumbSchema = (language: Language) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: language === 'en' ? 'Home' : 'Ana Sayfa',
      item: 'https://www.keremgezergun.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: chrome.heading[language],
      item:
        language === 'en'
          ? 'https://www.keremgezergun.com/en/seo-learning-roadmap'
          : 'https://www.keremgezergun.com/seo-ogrenme-haritasi',
    },
  ],
});

const totals = {
  resources: roadmapSections.reduce(
    (n, section) => n + section.subsections.reduce((m, sub) => m + sub.resources.length, 0),
    0,
  ),
  categories: roadmapSections.length,
  subtopics: roadmapSections.reduce((n, section) => n + section.subsections.length, 0),
};

function ChevronSvg() {
  return (
    <svg
      className="chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ResourceItem({ resource, language }: { resource: RoadmapResource; language: Language }) {
  const title = resource.title[language];
  return (
    <li>
      <a
        href={resource.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="resource-item"
        aria-label={`${title}, ${resource.author} (${chrome.newTab[language]})`}
      >
        <span className={`resource-type type-${resource.type}`}>
          {resourceTypeLabels[resource.type][language]}
        </span>
        <span className="resource-title">{title}</span>
        <span className="resource-author">{resource.author}</span>
      </a>
    </li>
  );
}

function Subsection({ subsection, language }: { subsection: RoadmapSubsection; language: Language }) {
  return (
    <section className="subsection">
      <h3 className="subsection-title">{subsection.title[language]}</h3>
      <ul className="resource-list">
        {subsection.resources.map((resource) => (
          <ResourceItem key={resource.href + resource.title.tr} resource={resource} language={language} />
        ))}
      </ul>
    </section>
  );
}

function AccordionSection({ section, language }: { section: RoadmapSection; language: Language }) {
  return (
    <details className="section-accordion" open={section.defaultOpen}>
      <summary className="section-accordion-header">
        <span className="title">
          {section.title[language]}
          <span className="desc">{section.desc[language]}</span>
        </span>
        <ChevronSvg />
      </summary>
      <div className="section-accordion-body">
        {section.subsections.map((subsection) => (
          <Subsection key={subsection.title.tr} subsection={subsection} language={language} />
        ))}
      </div>
    </details>
  );
}

export default function SeoOgrenmeHaritasiPage({ language = 'tr' }: { language?: Language } = {}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema(language)) }}
      />

      <main id="main-content" role="main" lang={language === 'en' ? 'en' : undefined}>
        <section className="page-header" aria-labelledby="page-title">
          <div className="container">
            <span className="section-tag">{chrome.tag[language]}</span>
            <h1 id="page-title">{chrome.heading[language]}</h1>
            <p>{chrome.lead[language]}</p>
          </div>
        </section>

        <section className="page-content" aria-labelledby="roadmap-heading">
          <div className="container">
            <h2 id="roadmap-heading" className="visually-hidden">
              {chrome.listHeading[language]}
            </h2>

            <div className="roadmap-intro">
              <ul className="roadmap-stats">
                <li className="roadmap-stat">
                  <span className="number">{totals.resources}+</span>
                  <span className="label">{chrome.statResources[language]}</span>
                </li>
                <li className="roadmap-stat">
                  <span className="number">{totals.categories}</span>
                  <span className="label">{chrome.statCategories[language]}</span>
                </li>
                <li className="roadmap-stat">
                  <span className="number">{totals.subtopics}</span>
                  <span className="label">{chrome.statSubtopics[language]}</span>
                </li>
              </ul>
              <p>{chrome.intro[language]}</p>
            </div>

            {roadmapSections.map((section) => (
              <AccordionSection key={section.title.tr} section={section} language={language} />
            ))}
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">{chrome.ctaHeading[language]}</h2>
            <p>{chrome.ctaText[language]}</p>
            <a
              href="https://businessup.com.tr/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn btn-primary btn-large"
              aria-label={chrome.ctaLabel[language]}
            >
              {chrome.ctaButton[language]}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
