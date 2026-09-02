import type { Language } from '@/lib/i18n';
import {
  brands,
  formatDuration,
  isCurrent,
  jobDuration,
  jobs,
  monthSpan,
  rangeParts,
} from '@/lib/experience';

/**
 * The career timeline and the brand list, shared by both home pages.
 *
 * Rendered from `@/lib/experience` rather than written out per locale: the two
 * home pages already duplicate a great deal of markup, and a CV is the one
 * place where the Turkish and English versions must not be allowed to drift.
 */

const copy = {
  experienceTag: { tr: 'Deneyim', en: 'Experience' },
  experienceHeading: { tr: 'Kariyer Çizgim', en: 'The Path So Far' },
  experienceIntro: {
    tr: 'İlk günden beri yaptığım tek iş SEO. Ajans tarafında başladım, bir ekibin liderliğini üstlendim, şimdi kurum içindeyim.',
    en: 'SEO is the only job I have ever done. I started agency-side, went on to lead a team, and now I work in-house.',
  },
  timelineLabel: { tr: 'Kariyer geçmişi', en: 'Career history' },
  current: { tr: 'Güncel', en: 'Current' },
  brandsTag: { tr: 'Referanslar', en: 'Clients' },
  brandsHeading: { tr: 'Danışmanlık Verdiğim Markalar', en: 'Brands I Have Advised' },
  brandsIntro: {
    tr: 'Bugüne kadar SEO süreçlerinde yer aldığım markalardan bazıları.',
    en: 'Some of the brands I have advised on SEO so far — most of them worked with hands-on.',
  },
  brandsLabel: { tr: 'Marka listesi', en: 'Brand list' },
  sectorsLabel: { tr: 'Sektörler', en: 'Sectors' },
} as const;

export default function Experience({ language }: { language: Language }) {
  const en = language === 'en';

  return (
    <>
      <section
        id={en ? 'experience' : 'deneyim'}
        className="experience-section"
        aria-labelledby="experience-heading"
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{copy.experienceTag[language]}</span>
            <h2 id="experience-heading">{copy.experienceHeading[language]}</h2>
          </div>
          <p className="experience-intro">{copy.experienceIntro[language]}</p>

          <ol className="timeline" aria-label={copy.timelineLabel[language]}>
            {jobs.map((job) => {
              const total = jobDuration(job, language);
              const current = isCurrent(job);
              return (
                <li
                  key={job.company}
                  className={current ? 'timeline-item is-current' : 'timeline-item'}
                >
                  <div className="timeline-company">
                    <h3 translate="no">{job.company}</h3>
                    {current && <span className="timeline-badge">{copy.current[language]}</span>}
                  </div>
                  <p className="timeline-meta">
                    {[job.location[language], job.arrangement?.[language], total]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>

                  <ul className="timeline-roles">
                    {job.roles.map((role) => {
                      const range = rangeParts(role, language);
                      return (
                        <li className="timeline-role" key={role.title.en + role.start}>
                          <h4>{role.title[language]}</h4>
                          <p className="timeline-dates">
                            <span>{role.employment[language]}</span>
                            <span aria-hidden="true"> · </span>
                            <time dateTime={role.start}>{range.from}</time>
                            {' – '}
                            {role.end ? <time dateTime={role.end}>{range.to}</time> : range.to}
                            {role.end && (
                              <>
                                <span aria-hidden="true"> · </span>
                                <span>
                                  {formatDuration(monthSpan(role.start, role.end), language)}
                                </span>
                              </>
                            )}
                          </p>
                          {role.summary && (
                            <p className="timeline-summary">{role.summary[language]}</p>
                          )}
                          {role.highlights && (
                            <ul className="timeline-highlights">
                              {role.highlights.map((item) => (
                                <li key={item.en}>{item[language]}</li>
                              ))}
                            </ul>
                          )}
                          {role.sectors && (
                            <p className="timeline-sectors">
                              <strong>{copy.sectorsLabel[language]}:</strong>{' '}
                              {role.sectors[language]}
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="brands-section" aria-labelledby="brands-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{copy.brandsTag[language]}</span>
            <h2 id="brands-heading">{copy.brandsHeading[language]}</h2>
          </div>
          <p className="experience-intro">{copy.brandsIntro[language]}</p>
          <ul className="brands-grid" aria-label={copy.brandsLabel[language]}>
            {brands.map((brand) => (
              <li key={brand} translate="no">
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
