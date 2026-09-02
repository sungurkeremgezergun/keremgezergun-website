import type { Language } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { homeGraph } from '@/lib/schema/home';

/**
 * The home page's whole graph in one script.
 *
 * The FAQ answers are JSX, so only the page can own them — it passes the
 * `plain` strings down. Everything else is derived from shared data and never
 * touches the two 900-line page files.
 */
export default function HomeSchema({
  language,
  faq,
}: {
  language: Language;
  faq: ReadonlyArray<{ q: string; plain: string }>;
}) {
  const faqs = faq.map(({ q, plain }) => ({ q, a: plain }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdSafe(homeGraph(language, faqs)) }}
    />
  );
}
