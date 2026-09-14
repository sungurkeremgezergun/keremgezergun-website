import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fontVariables } from '@/lib/fonts';
import type { Language } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { siteGraph } from '@/lib/schema/website';

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
          layouts may render <head>; the rule targets the Pages Router. */}
      <head>
        {/* Person + WebSite as one @graph. It stays in the layout rather than
            being repeated per page: a page that forgot it would drop the site's
            identity with nothing to fail on. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdSafe(siteGraph(language)) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          {language === 'en' ? 'Skip to main content' : 'Ana içeriğe geç'}
        </a>
        <Header language={language} />
        {children}
        <Footer language={language} />

        {/*
          Google tag (gtag.js).

          This used to be two hand-written <script> tags in <head>, put back
          into Google's exact pasted order by a postbuild pass over the
          prerendered HTML. That pass rewrote a head React had already
          rendered, so hydration failed on every page of the site: React threw
          away the tree and redrew it, which also duplicated every JSON-LD
          block in the DOM. next/script injects the tag after hydration
          instead, so there is nothing for React to disagree with. Google Tag
          Assistant still finds the tag at runtime.
        */}
        <Script
          id="gtag-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
