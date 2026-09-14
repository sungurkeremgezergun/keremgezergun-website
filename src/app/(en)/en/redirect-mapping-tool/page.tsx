import type { Metadata } from 'next';
import RedirectMatcherPage from '@/components/redirect-matcher/Page';
import { matcherGraph, pageUrl } from '@/components/redirect-matcher/schema';
import { englishAlternateMetadata } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';

const PAGE_URL = pageUrl('en');

/** Leads with the same phrase as the H1 and stays inside the SERP cut-off. */
const TITLE = 'Redirect Mapping Tool — Build Your 301 Map';

/** Word for word the promise the hero makes, so the click is not a bait. */
const DESCRIPTION =
  'Upload your old and new URL lists. The tool finds the closest new URL for every old one, shows a similarity score and the reasoning behind it, and writes your Apache or nginx redirect file. Everything runs in your browser.';

const SOCIAL_SUMMARY =
  'Map the 404s from a site migration onto their new addresses. The scoring is explained in full and your file is never uploaded.';

const OG_IMAGE = {
  url: 'https://www.keremgezergun.com/301-yonlendirme-araci/og-en.png',
  width: 1200,
  height: 630,
  alt: 'Redirect Mapping Tool — results table with score, reason and warning columns',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: englishAlternateMetadata('/301-yonlendirme-araci', '/en/redirect-mapping-tool'),
  openGraph: {
    title: TITLE,
    description: SOCIAL_SUMMARY,
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SOCIAL_SUMMARY,
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: [OG_IMAGE.url],
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
