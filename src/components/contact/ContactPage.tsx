import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { formCopy, type ErrorCode } from '@/components/contact/copy';
import { contact } from '@/lib/contact';
import type { Language } from '@/lib/i18n';
import { jsonLdSafe } from '@/lib/jsonLd';
import { BASE_URL, graph } from '@/lib/schema/base';
import { breadcrumbNode, webPageNode } from '@/lib/schema/page';

export const contactCopy = {
  path: { tr: '/iletisim', en: '/en/contact' },
  title: { tr: 'İletişim', en: 'Contact' },
  description: {
    tr: 'Eğitim, konuşmacılık, podcast konukluğu, ürün geri bildirimi veya iş birliği için Kerem Gezergün ile iletişime geçin.',
    en: 'Get in touch with Kerem Gezergün about training, speaking, a podcast guest spot, product feedback or a collaboration.',
  },
  lead: {
    tr: 'Şu an freelance danışmanlık almıyorum; eğitim, konuşmacılık, podcast konukluğu, ürünlerle ilgili geri bildirim ve iş birliği teklifleri için aşağıdaki formu kullanabilirsiniz. SEO sorularınızı da elimden geldiğince yanıtlarım.',
    en: 'I am not taking freelance consulting at the moment; use the form below for training, speaking, podcast guest spots, product feedback and collaboration proposals. I also answer SEO questions where I can.',
  },
  otherHeading: { tr: 'Diğer kanallar', en: 'Other channels' },
  whatsapp: { tr: 'WhatsApp’tan yazın', en: 'Message me on WhatsApp' },
  newTab: { tr: ' (yeni sekmede açılır)', en: ' (opens in a new tab)' },
  home: { tr: 'Ana Sayfa', en: 'Home' },
} as const;

/** Shared by /iletisim and /en/contact; the pages differ only in language and search params. */
export default function ContactPage({ language }: { language: Language }) {
  const url = `${BASE_URL}${contactCopy.path[language]}`;
  const pageGraph = graph(
    webPageNode({
      url,
      language,
      type: 'ContactPage',
      name: contactCopy.title[language],
      description: contactCopy.description[language],
    }),
    breadcrumbNode(language, { name: contactCopy.title[language], url }),
  );

  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(pageGraph) }} />

      <section className="page-header article-header" aria-labelledby="page-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href={language === 'en' ? '/en' : '/'}>{contactCopy.home[language]}</Link>
              </li>
              <li aria-current="page">{contactCopy.title[language]}</li>
            </ol>
          </nav>
          <h1 id="page-title">{contactCopy.title[language]}</h1>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="contact-layout">
            <div>
              <p className="contact-lead">{contactCopy.lead[language]}</p>
              {/* No-JS round trip: /api/contact redirects back with a fragment and
                  the matching paragraph is revealed by :target. */}
              <p id="sent" className="contact-form-status contact-form-target" role="status">
                {formCopy.sent[language]}
              </p>
              {(Object.keys(formCopy.errors) as ErrorCode[]).map((code) => (
                <p key={code} id={`error-${code}`} className="contact-form-status contact-form-error contact-form-target" role="alert">
                  {formCopy.errors[code][language]}
                </p>
              ))}
              <ContactForm language={language} />
            </div>
            <aside className="contact-aside" aria-labelledby="contact-other">
              <h2 id="contact-other">{contactCopy.otherHeading[language]}</h2>
              <ul className="contact-channels">
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <a href={contact.whatsapp} target="_blank" rel="nofollow noopener noreferrer">
                    {contactCopy.whatsapp[language]}
                    <span className="sr-only">{contactCopy.newTab[language]}</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sungur-kerem-gezergun/" target="_blank" rel="nofollow noopener noreferrer">
                    LinkedIn
                    <span className="sr-only">{contactCopy.newTab[language]}</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
