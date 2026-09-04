import type { Language } from '@/lib/i18n';
import { chrome } from './content';
import styles from './RedirectMatcher.module.css';
import { faqs, sections, type Block } from './seoContent';
import Tool from './Tool';

/**
 * The page around the tool.
 *
 * A server component: the copy, the article and the FAQ are all in the
 * prerendered markup, so the page is complete and indexable before any
 * JavaScript loads. Only `Tool` is a client component.
 */

const articleCopy = {
  tag: { tr: 'Nasıl çalışıyor', en: 'How it works' },
  heading: {
    tr: 'Yönlendirme eşleştirmesi hakkında bilmeniz gerekenler',
    en: 'What you need to know about redirect mapping',
  },
  faqTag: { tr: 'Sık sorulanlar', en: 'FAQ' },
  faqHeading: {
    tr: 'Yönlendirme aracı hakkında sık sorulan sorular',
    en: 'Frequently asked questions about the redirect tool',
  },
} as const;

function BlockView({ block, language }: { block: Block; language: Language }) {
  if (block.kind === 'p') return <p>{block.text[language]}</p>;

  if (block.kind === 'ul') {
    return (
      <ul>
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

  if (block.kind === 'code') {
    return (
      <pre className={styles.code}>
        <code>{block.text}</code>
      </pre>
    );
  }

  return (
    <div className={styles.tableWrap}>
      <table>
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
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-header" aria-labelledby="matcher-heading">
        <div className="container">
          <span className="section-tag">{chrome.eyebrow[language]}</span>
          <h1 id="matcher-heading">{chrome.heading[language]}</h1>
          <p>{chrome.lead[language]}</p>
        </div>
      </section>

      <section className="page-content" aria-labelledby="matcher-tool-heading">
        <div className="container">
          <h2 id="matcher-tool-heading" className="sr-only">
            {chrome.heading[language]}
          </h2>
          <Tool language={language} />
        </div>
      </section>

      <section className="page-content" aria-labelledby="matcher-article-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{articleCopy.tag[language]}</span>
            <h2 id="matcher-article-heading">{articleCopy.heading[language]}</h2>
          </div>

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
        </div>
      </section>

      <section className="faq-section" aria-labelledby="matcher-faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{articleCopy.faqTag[language]}</span>
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
    </main>
  );
}
