import type { Language } from '@/lib/i18n';
import { contact } from '@/lib/contact';

const BASE_URL = 'https://www.keremgezergun.com';

export const PERSON_ID = `${BASE_URL}/#person`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

const sharedPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Sungur Kerem Gezergün',
  alternateName: 'Kerem Gezergün',
  url: `${BASE_URL}/`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/`,
  },
  // Employer is kept as an entity name only. The site carries no outbound link
  // to the employer, so the schema must not reintroduce one.
  worksFor: {
    '@type': 'Organization',
    name: 'Hepsiburada',
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

export function personSchema(language: Language) {
  const localized = personByLanguage[language];
  return {
    ...sharedPerson,
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
      skills: localized.skills,
    },
  };
}

export function websiteSchema(language: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${BASE_URL}/`,
    name: 'Kerem Gezergün',
    alternateName: 'Sungur Kerem Gezergün',
    description:
      language === 'en'
        ? 'The personal website of Kerem Gezergün, specializing in e-commerce SEO, technical SEO and organic growth strategy.'
        : 'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri Uzmanı Kerem Gezergün\'ün kişisel web sitesi.',
    publisher: { '@id': PERSON_ID },
    inLanguage: language === 'en' ? 'en-US' : 'tr-TR',
  };
}
