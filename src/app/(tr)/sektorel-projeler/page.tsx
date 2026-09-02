import type { Metadata } from 'next';
import { alternateMetadata } from '@/lib/i18n';
import IndustryProjects from '@/components/projects/IndustryProjects';

export const metadata: Metadata = {
  title: 'Sektörel Projeler',
  description:
    'Kerem Gezergün - Sektörel Projeler. Üniversite konuşmaları, dernek etkinlikleri ve podcast çalışmaları.',
  keywords: ['SEO Uzmanı', 'Konuşmacı', 'Podcast', 'Dijital Pazarlama'],
  alternates: alternateMetadata('/sektorel-projeler', '/en/industry-projects'),
  openGraph: {
    title: 'Sektörel Projeler | Kerem Gezergün',
    description: 'Üniversite konuşmaları, dernek etkinlikleri ve podcast çalışmaları.',
    url: 'https://www.keremgezergun.com/sektorel-projeler',
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/images/kerem-gezergun.jpg',
        width: 1200,
        height: 630,
        alt: 'Kerem Gezergün - Sektörel Projeler',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sektörel Projeler | Kerem Gezergün',
    description: 'Üniversite konuşmaları, dernek etkinlikleri ve podcast çalışmaları.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
  },
};

export default function SektorelProjelerPage() {
  return <IndustryProjects language="tr" />;
}
