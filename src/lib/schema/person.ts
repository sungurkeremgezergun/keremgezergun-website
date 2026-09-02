import type { Language } from '@/lib/i18n';
import { contact } from '@/lib/contact';
import { isCurrent, jobs, tools } from '@/lib/experience';
import { BASE_URL, PERSON_ID, type SchemaNode, withContext } from './base';

/**
 * External identifiers for employers, by name.
 *
 * Only the current employer is listed, and only here — the site itself carries
 * no outbound link to any employer, and past employers stay name-only. These
 * are entity identifiers for a consumer resolving the graph, not links a
 * reader can follow.
 */
const employerSameAs: Record<string, string[]> = {
  Hepsiburada: ['https://www.hepsiburada.com', 'https://www.wikidata.org/wiki/Q6042123'],
};

const organization = (name: string): SchemaNode => ({
  '@type': 'Organization',
  name,
  ...(employerSameAs[name] ? { sameAs: employerSameAs[name] } : {}),
});

/**
 * Employment history as dated OrganizationRole nodes, straight from the data
 * the home page timeline renders.
 *
 * `start`/`end` are 'YYYY-MM'. That is valid ISO 8601 reduced precision and is
 * emitted verbatim — padding to '-01' would assert a day the source does not
 * have.
 */
export function employmentRoles(language: Language): SchemaNode[] {
  return jobs.flatMap((job) =>
    job.roles.map((role) => ({
      '@type': 'OrganizationRole',
      roleName: role.title[language],
      startDate: role.start,
      ...(role.end ? { endDate: role.end } : {}),
      worksFor: organization(job.company),
    })),
  );
}

/**
 * The Person node — the entity the whole site resolves to.
 *
 * Employment history is derived from `@/lib/experience`, the same data the
 * home page timeline renders, so the two can never disagree. The dependency is
 * one-directional: `experience.ts` must never import from here.
 */

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Sungur Kerem Gezergün',
  alternateName: 'Kerem Gezergün',
  url: `${BASE_URL}/`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/`,
  },
  knowsLanguage: ['tr', 'en'],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Ahi Evran Üniversitesi',
    sameAs: 'https://www.ahievran.edu.tr',
  },
  award: ['Best Low Budget Campaign (SEO) - Finalist'],
  sameAs: [
    'https://www.linkedin.com/in/sungur-kerem-gezergun/',
    'https://twitter.com/keremgezergun',
    'https://www.youtube.com/@keremgezergun',
    'https://www.instagram.com/keremgzr02/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'professional',
    telephone: contact.phone,
    email: contact.email,
    url: contact.whatsapp,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.addressParts.street,
    addressLocality: contact.addressParts.locality,
    addressCountry: contact.addressParts.countryCode,
  },
};

const personByLanguage = {
  tr: {
    imageCaption: 'Kerem Gezergün - E-Ticaret SEO Danışmanı',
    jobTitle: 'SEO Specialist',
    description:
      'Hepsiburada’da SEO Specialist. 30+ e-ticaret markasının organik gelirlerini ölçeklendirdim. Best Low Budget Campaign (SEO) Finalisti.',
    knowsAbout: [
      'SEO',
      'E-ticaret SEO',
      'Teknik SEO',
      'Organik Büyüme Stratejileri',
      'Arama Motoru Optimizasyonu',
      'Dijital Pazarlama',
      'Generative Engine Optimization',
      'SaaS Geliştirme',
      'AI Destekli Ürün Keşfi',
    ],
    occupationName: 'SEO Uzmanı',
    skills: ['SEO', 'Teknik SEO', 'E-ticaret SEO', 'İçerik Stratejisi', 'Link Building'],
  },
  en: {
    imageCaption: 'Kerem Gezergün - E-commerce SEO Consultant',
    jobTitle: 'SEO Specialist',
    description:
      'SEO Specialist at Hepsiburada, with experience scaling organic revenue for more than 30 e-commerce brands. Best Low Budget Campaign (SEO) finalist.',
    knowsAbout: [
      'SEO',
      'E-commerce SEO',
      'Technical SEO',
      'Organic Growth Strategy',
      'Search Engine Optimization',
      'Digital Marketing',
      'Generative Engine Optimization',
      'SaaS Development',
      'AI-assisted Product Discovery',
    ],
    occupationName: 'SEO Consultant',
    skills: ['SEO', 'Technical SEO', 'E-commerce SEO', 'Content Strategy', 'Link Building'],
  },
} as const;

export function personNode(language: Language): SchemaNode {
  const localized = personByLanguage[language];
  const current = jobs.find(isCurrent);
  return {
    ...person,
    address: {
      ...(person.address as SchemaNode),
      addressRegion: contact.addressParts.region[language],
    },
    // The plain Organization comes first, for consumers that read `worksFor`
    // as an employer and do not unwrap a Role proxy. The dated roles follow.
    worksFor: [
      ...(current ? [organization(current.company)] : []),
      ...employmentRoles(language),
    ],
    image: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/kerem-gezergun.jpg`,
      width: 1200,
      height: 630,
      caption: localized.imageCaption,
    },
    jobTitle: localized.jobTitle,
    description: localized.description,
    knowsAbout: localized.knowsAbout,
    hasOccupation: {
      '@type': 'Occupation',
      name: localized.occupationName,
      occupationLocation: {
        '@type': 'City',
        name: 'İstanbul',
        sameAs: 'https://en.wikipedia.org/wiki/Istanbul',
      },
      // The tool strip on the home page is a skills claim; say so.
      skills: [...localized.skills, ...tools],
    },
  };
}

export const personSchema = (language: Language) => withContext(personNode(language));
