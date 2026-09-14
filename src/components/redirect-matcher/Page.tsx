import Image from 'next/image';
import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import resultsShotTr from '../../../public/301-yonlendirme-araci/sonuc-tablosu.png';
import resultsShotEn from '../../../public/301-yonlendirme-araci/results-table.png';
import CodeBlock from './CodeBlock';
import { chrome, page as pageCopy } from './content';
import styles from './RedirectMatcher.module.css';
import { faqs, sections, type Block } from './seoContent';
import Tool from './Tool';

/**
 * The page around the tool.
 *
 * A server component: the copy, the guide and the FAQ are all in the
 * prerendered markup, so the page is complete and indexable before any
 * JavaScript loads. Only `Tool` is a client component.
 *
 * Order is tool, then FAQ, then guide. The guide is 5,500px long and used to
 * sit between the two, so a returning user had to cross it to reach the short
 * interactive answers most of them are actually after.
 */

const articleCopy = {
  tag: { tr: 'Nasıl çalışıyor', en: 'How it works' },
  heading: {
    tr: '301 yönlendirme eşleştirmesi nasıl çalışır?',
    en: 'How does redirect mapping actually work?',
  },
  faqHeading: {
    tr: 'Yönlendirme aracı hakkında sorular',
    en: 'Questions about the redirect tool',
  },
  shotAlt: {
    tr: 'Aracın sonuç tablosu: her satırda eski URL, seçilebilir yeni URL, benzerlik skoru, gerekçe ve uyarı sütunları',
    en: 'The tool’s results table: old URL, a selectable new URL, the similarity score, the reason and the warning column',
  },
} as const;

/** Guide sections, in the order they appear, for the contents block. */
const CONTENTS: Record<string, { tr: string; en: string }> = {
  skor: { tr: 'Benzerlik skoru nasıl hesaplanıyor', en: 'How the similarity score is calculated' },
  'kontrol-listesi': { tr: 'Taşıma öncesi kontrol listesi', en: 'The pre-migration checklist' },
  sunucu: { tr: 'Apache, nginx ve WordPress kurulumu', en: 'Apache, nginx and WordPress setup' },
  hatalar: { tr: 'Sık yapılan hatalar', en: 'Common mistakes' },
  gizlilik: { tr: 'Verileriniz nereye gidiyor', en: 'Where your data goes' },
};

/** Real last-substantive-change date, matching the schema's dateModified. */
const UPDATED = { tr: '10 Eylül 2026', en: '10 September 2026' };

const RELATED = [
  { tr: { href: '/crawlseer', label: 'Crawlseer' }, en: { href: '/en/crawlseer', label: 'Crawlseer' } },
  { tr: { href: '/nirengi', label: 'Nirengi' }, en: { href: '/en/nirengi-log-analyzer', label: 'Nirengi' } },
  { tr: { href: '/knotvo', label: 'Knotvo' }, en: { href: '/en/knotvo-site-speed-analyzer', label: 'Knotvo' } },
  {
    tr: { href: '/seo-ogrenme-haritasi', label: 'SEO Rehberi' },
    en: { href: '/en/seo-learning-roadmap', label: 'SEO Roadmap' },
  },
];

function BlockView({ block, language }: { block: Block; language: Language }) {
  if (block.kind === 'p') return <p>{block.text[language]}</p>;

  if (block.kind === 'ul') {
    return (
      <ul className={styles.reasonList}>
        {block.items.map((item) => (
          <li key={item.tr}>{item[language]}</li>
        ))}
      </ul>
    );
  }

  if (block.kind === 'ol') {
    return (
      <ol>
        {block.items.map((item) => (
          <li key={item.tr}>{item[language]}</li>
        ))}
      </ol>
    );
  }

  if (block.kind === 'code') return <CodeBlock code={block.text} language={language} />;

  if (block.kind === 'sources') {
    return (
      <div className={styles.sources}>
        <h4>{block.heading[language]}</h4>
        <ul>
          {block.items.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label[language]}
                <span className="sr-only">
                  {language === 'en' ? ' (opens in a new tab)' : ' (yeni sekmede açılır)'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.tableWrap}>
      <table>
        <caption className="sr-only">{block.caption[language]}</caption>
        <thead>
          <tr>
            {block.head.map((cell) => (
              <th scope="col" key={cell.tr}>
                {cell[language]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0].tr}>
              <th scope="row">{row[0][language]}</th>
              {row.slice(1).map((cell) => (
                <td key={cell.tr}>{cell[language]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RedirectMatcherPage({ language }: { language: Language }) {
  const home = language === 'en' ? '/en' : '/';
  const shot = language === 'en' ? resultsShotEn : resultsShotTr;

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <section className={`page-header ${styles.hero}`} aria-labelledby="matcher-heading">
        <div className="container">
          {/*
            The breadcrumb is in the schema, so it has to be on the page too:
            Google expects structured data to describe what a visitor can see.
          */}
          <nav className={styles.breadcrumb} aria-label={pageCopy.breadcrumbLabel[language]}>
            <ol>
              <li>
                <Link href={home}>{pageCopy.breadcrumbHome[language]}</Link>
              </li>
              <li aria-current="page">{pageCopy.breadcrumbHere[language]}</li>
            </ol>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className="section-tag">{chrome.eyebrow[language]}</span>
              <h1 id="matcher-heading">{chrome.heading[language]}</h1>
              <p className={styles.lead}>{chrome.lead[language]}</p>
            </div>

            {/*
              The page had no picture of what the tool produces, so nothing
              showed a visitor the result until they pressed Match. This is the
              real table, and the same asset backs the og:image.
            */}
            <div className={styles.heroShot}>
              <Image
                src={shot}
                alt={articleCopy.shotAlt[language]}
                sizes="(max-width: 64em) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-content" aria-labelledby="matcher-tool-heading">
        <div className="container">
          <h2 id="matcher-tool-heading" className="sr-only">
            {pageCopy.toolHeading[language]}
          </h2>
          <Tool language={language} />
        </div>
      </section>

      <section className="faq-section" aria-labelledby="matcher-faq">
        <div className="container">
          {/* No eyebrow here: "Sık sorulanlar" over "…sık sorulan sorular" said
              the same thing twice. */}
          <div className="section-header">
            <h2 id="matcher-faq">{articleCopy.faqHeading[language]}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((entry) => (
              <details className="faq-item" key={entry.q.tr}>
                <summary className="faq-question">
                  <span>{entry.q[language]}</span>
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
                <div className="faq-answer">
                  <p>{entry.a[language]}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content" aria-labelledby="matcher-article-heading">
        <div className="container">
          <div className={`section-header ${styles.articleHeader}`}>
            <span className="section-tag">{articleCopy.tag[language]}</span>
            <h2 id="matcher-article-heading">{articleCopy.heading[language]}</h2>
            <p className={styles.byline}>
              {pageCopy.author[language]} · {pageCopy.updated[language]}:{' '}
              <time dateTime="2026-09-10">{UPDATED[language]}</time>
            </p>
          </div>

          {/*
            Twelve sections carry an id and the page is 9,000px tall, but nothing
            linked to any of them. scroll-padding-top is already set for the
            fixed header, so anchors land correctly.
          */}
          <nav className={styles.contents} aria-labelledby="matcher-contents">
            <h3 id="matcher-contents">{pageCopy.contentsHeading[language]}</h3>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#matcher-${section.id}`}>{CONTENTS[section.id][language]}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.article}>
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={`matcher-${section.id}`}>
                <h3 id={`matcher-${section.id}`}>{section.heading[language]}</h3>
                {section.blocks.map((block, index) => (
                  <BlockView key={index} block={block} language={language} />
                ))}
              </section>
            ))}
          </div>

          <aside className={styles.cta} aria-labelledby="matcher-cta">
            <h3 id="matcher-cta">{pageCopy.ctaHeading[language]}</h3>
            <p>{pageCopy.ctaText[language]}</p>
            <Link className="btn btn-primary" href={language === 'en' ? '/en/#services' : '/#hizmetler'}>
              {pageCopy.ctaButton[language]}
            </Link>
          </aside>

          <nav className={styles.related} aria-labelledby="matcher-related">
            <h3 id="matcher-related">{pageCopy.relatedHeading[language]}</h3>
            <ul>
              {RELATED.map((entry) => (
                <li key={entry.tr.href}>
                  <Link href={entry[language].href}>{entry[language].label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
