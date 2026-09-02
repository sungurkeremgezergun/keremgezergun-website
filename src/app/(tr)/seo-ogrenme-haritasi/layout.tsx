import type { Metadata } from 'next';
import { alternateMetadata } from '@/lib/i18n';
import { roadmapTotals } from './roadmapContent';

// The counts are interpolated rather than typed out: the meta said 520+/128
// while the page rendered 590+/139.
const { resources, categories, subtopics } = roadmapTotals;

export const metadata: Metadata = {
  title: 'SEO Rehberi',
  description:
    `SEO Rehberi - Temellerden ileri seviyeye SEO öğrenmek için kapsamlı kaynak rehberi. ${resources}+ kaliteli kaynak, ${categories} ana kategori ve ${subtopics} alt konu ile SEO uzmanı olun.`,
  keywords: ['SEO Öğrenme', 'SEO Rehberi', 'SEO Kaynakları', 'Teknik SEO', 'On-Page SEO', 'Link Building', 'SEO Stratejisi', 'Semantic SEO', 'Programmatic SEO', 'Local SEO'],
  alternates: alternateMetadata('/seo-ogrenme-haritasi', '/en/seo-learning-roadmap'),
  openGraph: {
    title: 'SEO Rehberi | Kerem Gezergün',
    description: `Temellerden ileri seviyeye SEO öğrenmek için ${resources}+ kaynak içeren kapsamlı rehber.`,
    url: 'https://www.keremgezergun.com/seo-ogrenme-haritasi',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün SEO Rehberi',
      },
    ],
    locale: 'tr_TR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Rehberi | Kerem Gezergün',
    description: `Temellerden ileri seviyeye SEO öğrenmek için ${resources}+ kaynak içeren kapsamlı rehber.`,
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

export default function SeoOgrenmeHaritasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
