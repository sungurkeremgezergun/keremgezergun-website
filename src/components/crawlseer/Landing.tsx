import Image from 'next/image';
import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import { stores } from '@/lib/contact';
import { chrome, faqs, privacyCards, screenshots, tabFeatures, whyFeatures } from './content';

const STORE_URL = stores.crawlseer;

export default function CrawlseerLanding({ language }: { language: Language }) {
  const en = language === 'en';
  const privacyHref = en ? '/en/crawlseer/privacy' : '/crawlseer/gizlilik';

  return (
    <main id="main-content" tabIndex={-1} className="crawlseer">
      <section className="page-header" aria-labelledby="crawlseer-title">
        <div className="container">
          <span className="section-tag">{chrome.eyebrow[language]}</span>
          <h1 id="crawlseer-title">{chrome.heading[language]}</h1>
          <p>{chrome.lead[language]}</p>

          <ul className="crawlseer-trust" aria-label={en ? 'Key guarantees' : 'Temel taahhütler'}>
            {chrome.trust[language].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="nirengi-actions">
            <a
              className="btn btn-primary btn-large"
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chrome.install[language]}
              <span className="sr-only">
                {en ? ' (opens in a new tab)' : ' (yeni sekmede açılır)'}
              </span>
            </a>
            <a className="btn btn-outline btn-large" href="#features">
              {chrome.explore[language]}
            </a>
          </div>
          <p className="crawlseer-note">{chrome.availability[language]}</p>
          <p className="crawlseer-byline">{chrome.byline[language]}</p>

          <div className="k-heroshot k-shot">
            <Image
              src={screenshots[0].src}
              alt={screenshots[0].alt[language]}
              width={1280}
              height={800}
              priority
              fetchPriority="high"
              sizes="(max-width: 68.75em) 100vw, 1080px"
            />
          </div>
        </div>
      </section>

      <section id="features" className="page-content" aria-labelledby="crawlseer-why">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{chrome.whyTag[language]}</span>
            <h2 id="crawlseer-why">{chrome.whyHeading[language]}</h2>
          </div>
          <p className="nirengi-intro">{chrome.whyIntro[language]}</p>
          <ul className="services-grid" aria-label={chrome.whyHeading[language]}>
            {whyFeatures.map((f) => (
              <li className="service-card" key={f.title.tr}>
                <h3>{f.title[language]}</h3>
                <p>{f.text[language]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-content" aria-labelledby="crawlseer-tabs">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{chrome.tabsTag[language]}</span>
            <h2 id="crawlseer-tabs">{chrome.tabsHeading[language]}</h2>
          </div>
          <p className="nirengi-intro">{chrome.tabsList[language]}</p>

          {tabFeatures.map((f, index) => (
            <div className="crawlseer-feature" key={f.title.tr}>
              <div>
                <h3>{f.title[language]}</h3>
                <p>{f.text[language]}</p>
                {f.points && (
                  <ul className="crawlseer-points">
                    {f.points.map((p) => (
                      <li key={p.tr}>{p[language]}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="k-shot">
                <Image
                  src={screenshots[index + 1].src}
                  alt={screenshots[index + 1].alt[language]}
                  width={1280}
                  height={800}
                  sizes="(max-width: 51.25em) 100vw, 520px"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-content" aria-labelledby="crawlseer-privacy">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{chrome.privacyTag[language]}</span>
            <h2 id="crawlseer-privacy">{chrome.privacyHeading[language]}</h2>
          </div>
          <p className="nirengi-intro">{chrome.privacyIntro[language]}</p>
          <ul className="services-grid" aria-label={chrome.privacyHeading[language]}>
            {privacyCards.map((c) => (
              <li className="service-card" key={c.title.tr}>
                <h3>{c.title[language]}</h3>
                <p>{c.text[language]}</p>
              </li>
            ))}
          </ul>
          <p className="crawlseer-privlink">
            <Link href={privacyHref}>{chrome.privacyLink[language]} →</Link>
          </p>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="crawlseer-faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{chrome.faqTag[language]}</span>
            <h2 id="crawlseer-faq">{chrome.faqHeading[language]}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q.tr}>
                <summary className="faq-question">
                  <span>{f.q[language]}</span>
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
                  <p>{f.a[language]}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="crawlseer-cta">
        <div className="container">
          <h2 id="crawlseer-cta">{chrome.ctaHeading[language]}</h2>
          <p>{chrome.ctaText[language]}</p>
          <a
            className="btn btn-primary btn-large"
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {chrome.install[language]}
            <span className="sr-only">
              {en ? ' (opens in a new tab)' : ' (yeni sekmede açılır)'}
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
