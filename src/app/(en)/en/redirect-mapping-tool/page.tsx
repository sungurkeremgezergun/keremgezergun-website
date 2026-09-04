import type { Metadata } from 'next';
import RedirectMatcherPage from '@/components/redirect-matcher/Page';
import { matcherGraph, pageUrl } from '@/components/redirect-matcher/schema';
import { englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';

const PAGE_URL = pageUrl('en');
const TITLE = 'Redirect Mapping Tool — Match Old URLs to New Ones';
const DESCRIPTION =
  'Upload your old and new URL lists. The tool finds the closest new address for every 404, shows the similarity score with its reasoning, and writes your Apache or nginx redirect file. Everything runs in your browser.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'redirect mapping tool',
    'url matching tool',
    '301 redirect generator',
    'site migration redirects',
    'redirect map',
    '404 redirect mapping',
    'htaccess redirect generator',
  ],
  alternates: englishAlternateMetadata('/301-yonlendirme-araci', '/en/redirect-mapping-tool'),
  openGraph: {
    title: TITLE,
    description:
      'Map the 404s from a site migration onto their new addresses. The scoring is explained in full and your file is never uploaded.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Map the 404s from a site migration onto their new addresses. Everything runs in your browser.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
  },
};

export default function RedirectMatcherEnglishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(matcherGraph('en')) }}
      />
      <RedirectMatcherPage language="en" />
    </>
  );
}
