import type { Metadata } from 'next';
import { englishAlternateMetadata } from '@/lib/i18n';
import IndustryProjects from '@/components/projects/IndustryProjects';

const PAGE_URL = 'https://www.keremgezergun.com/en/industry-projects';

export const metadata: Metadata = {
  title: 'SEO Speaking, Education & Industry Projects',
  description:
    'Explore Kerem Gezergün’s SEO speaking engagements, university sessions, professional events, podcast work and search-industry projects.',
  alternates: englishAlternateMetadata('/sektorel-projeler', '/en/industry-projects'),
  openGraph: {
    title: 'Speaking & Project Work | Kerem Gezergün',
    description:
      'Talks, educational sessions and media projects focused on technical SEO, e-commerce growth and AI search.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün industry projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking & Project Work | Kerem Gezergün',
    description:
      'Talks, educational sessions and media projects focused on technical SEO and e-commerce growth.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function EnglishIndustryProjectsPage() {
  return <IndustryProjects language="en" />;
}
