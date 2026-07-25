import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fontVariables } from '@/lib/fonts';
import type { Language } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { personSchema, websiteSchema } from '@/lib/siteSchema';

const GA_ID = 'G-TVTZYGQ64H';

/**
 * The shared HTML shell for both root layouts.
 *
 * The language is passed in by the route-group root layout ((tr) or (en))
 * rather than read from a request header, so every page stays statically
 * prerenderable and `<html lang>` can never drift from the URL.
 */
export default function Document({
  language,
  children,
}: {
  language: Language;
  children: React.ReactNode;
}) {
  return (
    <html lang={language} className={fontVariables}>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root
          layouts may render <head>; the rule targets the Pages Router. The
          explicit element keeps the gtag snippet in the exact order that
          scripts/inject-gtag-comment.mjs expects. */}
      <head>
        {/*
          Google tag (gtag.js) — the matching "<!-- Google tag (gtag.js) -->"
          HTML comment is injected into the rendered HTML by
          scripts/inject-gtag-comment.mjs as a postbuild step (JSX cannot
          emit raw HTML comments). The same script also moves the inline
          init <script> back next to the loader, so the live HTML matches
          Google's pasted snippet byte for byte.
        */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_ID}');
`,
          }}
        />
        <meta httpEquiv="Content-Language" content={language} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdSafe(personSchema(language)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdSafe(websiteSchema(language)) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          {language === 'en' ? 'Skip to main content' : 'Ana içeriğe geç'}
        </a>
        <Header language={language} />
        {children}
        <Footer language={language} />
      </body>
    </html>
  );
}
