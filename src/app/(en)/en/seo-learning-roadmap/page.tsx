import type { Metadata } from 'next';
import SeoLearningRoadmap from '@/app/(tr)/seo-ogrenme-haritasi/page';
import { englishAlternateMetadata } from '@/lib/i18n';

const PAGE_URL = 'https://www.keremgezergun.com/en/seo-learning-roadmap';

export const metadata: Metadata = {
  title: 'SEO Learning Roadmap: Beginner to Advanced',
  description:
    'A structured SEO learning roadmap covering search fundamentals, keyword research, on-page SEO, technical SEO, content, authority, analytics and AI search. 590+ curated resources.',
  keywords: [
    'Learn SEO',
    'SEO roadmap',
    'SEO resources',
    'Technical SEO',
    'On-page SEO',
    'Link building',
    'SEO strategy',
    'Semantic SEO',
    'Programmatic SEO',
    'Local SEO',
  ],
  alternates: englishAlternateMetadata('/seo-ogrenme-haritasi', '/en/seo-learning-roadmap'),
  openGraph: {
    title: 'SEO Learning Roadmap | Kerem Gezergün',
    description:
      'A comprehensive roadmap with 590+ resources for learning SEO from the fundamentals to advanced practice.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün SEO Learning Roadmap',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Learning Roadmap | Kerem Gezergün',
    description:
      'A comprehensive roadmap with 590+ resources for learning SEO from the fundamentals to advanced practice.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

// The roadmap body is language-driven data, so both locales render the same
// component. See src/app/(tr)/seo-ogrenme-haritasi/roadmapContent.ts.
export default function EnglishSeoLearningRoadmapPage() {
  return <SeoLearningRoadmap language="en" />;
}
