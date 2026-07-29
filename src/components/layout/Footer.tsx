import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { contact } from '@/lib/contact';

// Computed once at build time. `new Date().getFullYear()` here used to run on
// the client, and the HTML is cached for a year (s-maxage=31536000) while the
// VPS is UTC and the audience is UTC+3 — so around New Year the server and
// client would disagree and React would throw hydration error #418.
const YEAR = new Date().getFullYear();

// Deliberately a server component. The only thing that ever needed the client
// was usePathname(), and the `language` prop already carries the same answer —
// the layout that renders this knows its own locale.
export default function Footer({ language = 'tr' }: { language?: 'tr' | 'en' }) {
  const isEnglish = language === 'en';
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo variant="footer" href={isEnglish ? '/en' : '/'} />
            <p>{isEnglish ? 'Senior E-commerce SEO Consultant' : 'Senior E-Ticaret SEO Danışmanı'}</p>
            <p className="footer-description">
              {isEnglish ? 'Digital marketing professional specializing in e-commerce SEO, technical SEO and organic growth strategy.' : 'E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri alanında uzmanlaşmış dijital pazarlama profesyoneli.'}
            </p>
          </div>

          <nav className="footer-column" aria-label={isEnglish ? 'Pages' : 'Sayfalar'}>
            <h2>{isEnglish ? 'Pages' : 'Sayfalar'}</h2>
            <Link prefetch={false} href={isEnglish ? '/en' : '/'}>{isEnglish ? 'Home' : 'Ana Sayfa'}</Link>
            <Link prefetch={false} href={isEnglish ? '/en/industry-projects' : '/sektorel-projeler'}>{isEnglish ? 'Industry Projects' : 'Sektörel Projeler'}</Link>
            <Link prefetch={false} href={isEnglish ? '/en/seo-blog' : '/blog'}>{isEnglish ? 'SEO Blog' : 'Blog'}</Link>
            <Link prefetch={false} href={isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi'}>{isEnglish ? 'SEO Roadmap' : 'SEO Rehberi'}</Link>
            <Link prefetch={false} href={isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi'}>Nirengi</Link>
            <Link prefetch={false} href={isEnglish ? '/en/nirengi-accessibility' : '/nirengi-erisilebirlik'}>{isEnglish ? 'Nirengi Accessibility' : 'Nirengi Erişilebilirlik'}</Link>
            <Link prefetch={false} href={isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo'}>Knotvo</Link>
            <Link prefetch={false} href={isEnglish ? '/en/crawlseer' : '/crawlseer'}>Crawlseer</Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {isEnglish ? 'Contact' : 'İletişim'}
              <span className="sr-only"> {isEnglish ? '— message me on WhatsApp (opens in a new tab)' : '— WhatsApp’tan mesaj gönder (yeni sekmede açılır)'}</span>
            </a>
          </nav>

          <div className="footer-column">
            <h2>{isEnglish ? 'Contact' : 'İletişim'}</h2>
            {/* <address> is only for the contact details themselves. Wrapping the
                heading and the social nav in it was invalid HTML and gave
                assistive technology a group boundary that meant nothing. */}
            <address className="footer-address">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <p className="footer-location">{isEnglish ? 'Istanbul, Türkiye' : 'İstanbul, Türkiye'}</p>
            </address>
            <nav
              className="footer-social-icons"
              aria-label={isEnglish ? 'Social media' : 'Sosyal medya'}
            >
              <a
                href="https://www.linkedin.com/in/sungur-kerem-gezergun/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={isEnglish ? 'Visit LinkedIn profile (opens in a new tab)' : 'LinkedIn profilini ziyaret et (yeni sekmede açılır)'}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@keremgezergun"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={isEnglish ? 'Visit YouTube channel (opens in a new tab)' : 'YouTube kanalını ziyaret et (yeni sekmede açılır)'}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/keremgzr02/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={isEnglish ? 'Visit Instagram profile (opens in a new tab)' : 'Instagram profilini ziyaret et (yeni sekmede açılır)'}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {YEAR} Kerem Gezergün. {isEnglish ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
        </div>
      </div>
    </footer>
  );
}
