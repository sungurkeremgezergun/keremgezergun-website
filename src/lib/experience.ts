import type { Language, Localized } from '@/lib/i18n';

/**
 * The CV data behind the home page career timeline.
 *
 * Dates are stored once as `YYYY-MM` and rendered through `Intl`, so the month
 * names follow the page locale instead of being written out twice. Durations
 * are derived from those same values rather than typed in — a hand-written
 * "1 yıl 10 ay" goes stale the moment a date is corrected.
 *
 * The dependency runs one way: `@/lib/schema/person` reads this file to build
 * the Person node. Nothing here may import from `schema/` in return.
 *
 * Nothing here reads the clock. A current role shows "devam ediyor" instead of
 * a computed length, because the HTML is cached for a year and a duration that
 * counts up would be wrong for most of that time.
 */

/** A month, as `YYYY-MM`. */
export type YearMonth = string;

export type Role = {
  title: Localized;
  employment: Localized;
  start: YearMonth;
  /** Absent while the role is current. */
  end?: YearMonth;
  summary?: Localized;
  /** What the role actually involved, day to day. */
  highlights?: Localized[];
  /** The verticals worked in, as one line. */
  sectors?: Localized;
};

export type Job = {
  company: string;
  location: Localized;
  /** Remote, hybrid, on-site — omitted when it was never stated. */
  arrangement?: Localized;
  roles: Role[];
};

/** Reverse chronological, the way a CV is read. */
export const jobs: Job[] = [
  {
    company: 'Hepsiburada',
    location: { tr: 'İstanbul, Türkiye', en: 'Istanbul, Türkiye' },
    roles: [
      {
        title: { tr: 'SEO Specialist', en: 'SEO Specialist' },
        employment: { tr: 'Tam zamanlı', en: 'Full-time' },
        start: '2026-09',
        summary: {
          tr: 'Türkiye’nin en büyük pazar yerlerinden birinde, kurum içi tarafta organik arama üzerine çalışıyorum.',
          en: 'In-house at one of Türkiye’s largest marketplaces, working on organic search.',
        },
      },
    ],
  },
  {
    company: 'BusinessUp!',
    location: { tr: 'Türkiye', en: 'Türkiye' },
    arrangement: { tr: 'Uzaktan', en: 'Remote' },
    roles: [
      {
        title: { tr: 'Senior SEO Specialist', en: 'Senior SEO Specialist' },
        employment: { tr: 'Tam zamanlı', en: 'Full-time' },
        start: '2024-11',
        end: '2026-08',
        summary: {
          tr: 'Senior SEO Specialist rolünün yanında SEO departmanının ekip liderliğini de yürüttüm. Otuzdan fazla markanın stratejisini kurup teknik denetim, site mimarisi ve içerik planlamasını yönettim.',
          en: 'Alongside the Senior SEO Specialist role I also led the SEO department. I set the strategy for more than thirty brands and ran the technical audits, site architecture and content planning behind it.',
        },
      },
      {
        title: { tr: 'Mid. SEO Specialist', en: 'Mid. SEO Specialist' },
        employment: { tr: 'Tam zamanlı', en: 'Full-time' },
        start: '2024-05',
        end: '2024-11',
      },
      {
        title: { tr: 'Junior SEO Specialist', en: 'Junior SEO Specialist' },
        employment: { tr: 'Tam zamanlı', en: 'Full-time' },
        start: '2024-03',
        end: '2024-05',
      },
      {
        title: { tr: 'Intern SEO Uzmanı', en: 'SEO Intern' },
        employment: { tr: 'Stajyer', en: 'Internship' },
        start: '2023-12',
        end: '2024-03',
      },
    ],
  },
  {
    company: 'D-DAT',
    location: { tr: 'Türkiye', en: 'Türkiye' },
    roles: [
      {
        title: { tr: 'Jr. SEO Specialist', en: 'Jr. SEO Specialist' },
        employment: { tr: 'Tam zamanlı', en: 'Full-time' },
        start: '2023-04',
        end: '2023-08',
        summary: {
          tr: 'İlk SEO görevim. Markanın ihtiyacına göre strateji kurdum ve pazarlamayla birlikte hayata geçirdim; işin hem planlama hem uygulama tarafında bulundum.',
          en: 'My first SEO role. I built the strategy around what each brand actually needed and shipped it with the marketing team — planning and hands-on execution both.',
        },
        highlights: [
          {
            tr: 'Rakip ve sektör analizini takip edip marka performansına göre yeni öneriler geliştirdim.',
            en: 'Tracked competitor and sector analysis, then turned brand performance into new recommendations.',
          },
          {
            tr: 'Anahtar kelime araştırması ve sayfa içi çalışmalar: H1, title, meta description, canonical ve görsel optimizasyonu.',
            en: 'Keyword research and on-page work: H1, title, meta description, canonical and image optimization.',
          },
          {
            tr: 'Backlink fırsatlarını çıkarıp otorite kazandıracak bağlantıları kurdum.',
            en: 'Found backlink opportunities and built the links that earned authority.',
          },
          {
            tr: 'Haftalık, aylık, çeyreklik ve yıllık karşılaştırmalı performans raporları hazırladım.',
            en: 'Reported performance weekly, monthly, quarterly and year over year.',
          },
          {
            tr: 'Tekrar eden işleri yapay zekâ destekli akışlarla otomatikleştirdim.',
            en: 'Automated the repetitive parts of the job with AI-assisted workflows.',
          },
        ],
        sectors: {
          tr: 'Haber · Mücevher (Fransa, Almanya, ABD, İngiltere) · Finans affiliate · Sağlık ve fitness · E-ticaret',
          en: 'News · Jewellery (France, Germany, USA, UK) · Finance affiliate · Health and fitness · E-commerce',
        },
      },
    ],
  },
];

/**
 * Brands advised, most of them worked with directly.
 * Sorted with a Turkish collator: a default sort puts "Özem'le" after "Talya".
 */
export const brands = [
  '3DTeknomarket',
  'Aker',
  'Brosshome',
  'Fatma Atasoy',
  'Fresh Scarfs',
  'Fresh ScarfsCo',
  'Little Gusto',
  'Manuka',
  'Maraton Sportswear',
  'Miniso',
  'Moda Çelikler',
  'MyDeri',
  'Özem’le Yaşam',
  'PackagingGroup',
  'RUE',
  'Sabancı Üniversitesi (EDU)',
  'Shule Bags',
  'Talya Foods',
].sort(new Intl.Collator('tr').compare);

/**
 * The tools shown in the home page strip. CV data, so it lives beside `brands`
 * rather than being duplicated in the two home pages — and it feeds
 * `Person.hasOccupation.skills`.
 */
export const tools = [
  'Ahrefs',
  'Google Search Console',
  'Google Analytics',
  'Semrush',
  'Screaming Frog',
  'GTmetrix',
  'Google PageSpeed Insights',
];

const locales: Record<Language, string> = { tr: 'tr-TR', en: 'en-US' };

const asDate = (month: YearMonth) => new Date(`${month}-01T00:00:00Z`);

/** "Kas 2024" / "Nov 2024". */
export function formatMonth(month: YearMonth, language: Language) {
  return new Intl.DateTimeFormat(locales[language], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(asDate(month));
}

/**
 * Inclusive month count, matching how a CV reads a range: March to May is
 * three months, not two.
 */
export function monthSpan(start: YearMonth, end: YearMonth) {
  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
}

/** "1 yıl 10 ay" / "1 yr 10 mos". */
export function formatDuration(months: number, language: Language) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (language === 'en') {
    if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (rest) parts.push(`${rest} mo${rest > 1 ? 's' : ''}`);
  } else {
    if (years) parts.push(`${years} yıl`);
    if (rest) parts.push(`${rest} ay`);
  }
  return parts.join(' ');
}

/**
 * The two ends of a range, kept apart so each can carry its own `<time>`.
 * A single `<time dateTime="2024-11">Kas 2024 – Ağu 2026</time>` would claim
 * the whole range is one machine-readable instant, which it is not.
 */
export function rangeParts(role: Role, language: Language) {
  return {
    from: formatMonth(role.start, language),
    to: role.end
      ? formatMonth(role.end, language)
      : language === 'en'
        ? 'Present'
        : 'devam ediyor',
  };
}

/** Total time at a company, across every role. Undefined while still there. */
export function jobDuration(job: Job, language: Language) {
  const first = job.roles[job.roles.length - 1];
  const last = job.roles[0];
  if (!last.end) return undefined;
  return formatDuration(monthSpan(first.start, last.end), language);
}

export const isCurrent = (job: Job) => !job.roles[0].end;
