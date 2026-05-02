import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Rehberi | Kerem Gezergün',
  description:
    'SEO Rehberi - Temellerden ileri seviyeye SEO öğrenmek için kapsamlı kaynak rehberi. 520+ kaliteli kaynak, 50 ana kategori ve 128 alt konu ile SEO uzmanı olun.',
  keywords: ['SEO Öğrenme', 'SEO Rehberi', 'SEO Kaynakları', 'Teknik SEO', 'On-Page SEO', 'Link Building', 'SEO Stratejisi', 'Semantic SEO', 'Programmatic SEO', 'Local SEO'],
  alternates: {
    canonical: 'https://www.keremgezergun.com/seo-ogrenme-haritasi',
  },
  openGraph: {
    title: 'SEO Rehberi | Kerem Gezergün',
    description: 'Temellerden ileri seviyeye SEO öğrenmek için 520+ kaynak içeren kapsamlı rehber.',
    url: 'https://www.keremgezergun.com/seo-ogrenme-haritasi',
    images: ['https://www.keremgezergun.com/images/kerem-gezergun.jpg'],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function SeoOgrenmeHaritasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
