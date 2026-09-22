import CookieConsent from '@/components/layout/CookieConsent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fontVariables } from '@/lib/fonts';
import type { Language } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { siteGraph } from '@/lib/schema/website';

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
          The Google tag lives inside CookieConsent and is only loaded once the
          visitor has accepted analytics cookies. It used to be two hand-written
          <script> tags in <head> reordered by a postbuild pass, which broke
          hydration on every page; a client component that mounts next/script
          after hydration gives React nothing to disagree with.
        */}
        <CookieConsent language={language} />
      </body>
    </html>
  );
}
