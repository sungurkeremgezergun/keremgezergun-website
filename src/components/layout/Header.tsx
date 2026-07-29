'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { routePair } from '@/lib/i18n';
import { contact } from '@/lib/contact';

const MOBILE = '(max-width: 48em)';

/**
 * The menu is a native `<details>`, not React state.
 *
 * That is the whole point of this component's shape: with JavaScript disabled —
 * or, far more commonly, in the seconds before hydration on a slow mobile
 * connection — `.nav-menu` is `display: none` below the breakpoint, so a
 * state-driven hamburger left the site with no navigation at all. `<details>`
 * works in the browser's own layer, so the menu opens either way.
 *
 * The component is still `'use client'`, but only for `usePathname()`, which
 * `aria-current` and the language switcher need. It is server-rendered like any
 * other component, so both of those are correct in the initial HTML.
 *
 * The effects below are enhancement only. Everything they add degrades to
 * "still works, slightly less polished" if they never run.
 */
export default function Header({ language = 'tr' }: { language?: 'tr' | 'en' }) {
  const pathname = usePathname();
  // The pathname is the source of truth. Reverse proxies and container
  // platforms may strip request headers injected by Next's proxy layer.
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/') || (!pathname && language === 'en');
  const pair = routePair(pathname);
  const languageHref = isEnglish ? (pair?.tr ?? '/') : (pair?.en ?? '/en');

  const drawerRef = useRef<HTMLDetailsElement>(null);
  const toolsRef = useRef<HTMLDetailsElement>(null);

  // Close on route change and move focus to <main>. Activating a link inside
  // the menu leaves focus in a subtree that is about to be display:none —
  // browsers then reset focus to <body> and the user has to Tab from the top of
  // the document. <main> is where the skip link lands, so it is the same target.
  const firstRender = useRef(true);
  useEffect(() => {
    if (drawerRef.current) drawerRef.current.open = false;
    if (toolsRef.current) toolsRef.current.open = false;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById('main-content')?.focus();
  }, [pathname]);

  // Escape steps back one level at a time: submenu first, then the drawer.
  // Closing both at once breaks the "Escape goes back one step" model.
  // `<details>` does not close on Escape on its own, so this is not redundant.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      const tools = toolsRef.current;
      const drawer = drawerRef.current;
      if (tools?.open) {
        tools.open = false;
        tools.querySelector('summary')?.focus();
      } else if (drawer?.open) {
        drawer.open = false;
        drawer.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Opening the Tools disclosure with the keyboard should land you in it,
  // otherwise a screen reader user hears "expanded" and has to guess.
  useEffect(() => {
    const tools = toolsRef.current;
    if (!tools) return;
    const onToggle = () => {
      if (!tools.open) return;
      if (document.activeElement !== tools.querySelector('summary')) return;
      tools.querySelector<HTMLAnchorElement>('.nav-submenu a')?.focus();
    };
    tools.addEventListener('toggle', onToggle);
    return () => tools.removeEventListener('toggle', onToggle);
  }, []);

  // Lock body scroll while the drawer covers the page — mobile only. Above the
  // breakpoint the menu is always visible and `open` is meaningless, so locking
  // there would freeze the page for no reason.
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    const mobile = window.matchMedia(MOBILE);
    const sync = () => {
      document.body.style.overflow = drawer.open && mobile.matches ? 'hidden' : '';
    };
    drawer.addEventListener('toggle', sync);
    mobile.addEventListener('change', sync);
    return () => {
      drawer.removeEventListener('toggle', sync);
      mobile.removeEventListener('change', sync);
      document.body.style.overflow = '';
    };
  }, []);

  // Only page-level links highlight. An in-page anchor like /#hizmetler is not
  // a destination you can be "on" — treating it as one marked both Hizmetler
  // and Hakkımda active simultaneously on the home page, since they share a
  // base path. Tracking which section is in view would need a scroll observer,
  // which is not worth client JS for a highlight.
  const isActive = (href: string) => !href.includes('#') && pathname === href;

  // aria-current must be exact. Prefix matching announced "current page" on
  // /nirengi-iletisim, /nirengi-gizlilik-politikasi, /nirengi-erisilebirlik,
  // /knotvo-destek and /knotvo-gizlilik — actively misleading. SC 4.1.2.
  const currentPage = (href: string) => (pathname === href ? 'page' : undefined);

  const navLink = (href: string, label: React.ReactNode) => (
    <li>
      <Link
        href={href}
        className={isActive(href) ? 'active' : undefined}
        aria-current={currentPage(href)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" aria-label={isEnglish ? 'Main' : 'Ana'}>
          <Logo variant="header" href={isEnglish ? '/en' : '/'} />

          <details className="nav-drawer" ref={drawerRef}>
            {/* A stable name plus the native expanded state <summary> already
                exposes. Swapping the name between "open"/"close" would make a
                screen reader announce "Close menu, expanded". */}
            <summary className="hamburger" aria-label={isEnglish ? 'Menu' : 'Menü'}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </summary>

            <ul className="nav-menu" id="nav-menu">
              {navLink(
                isEnglish ? '/en/#services' : '/#hizmetler',
                isEnglish ? 'Services' : 'Hizmetler',
              )}
              {navLink(
                isEnglish ? '/en/#about' : '/#hakkimda',
                isEnglish ? 'About' : 'Hakkımda',
              )}
              {navLink(
                isEnglish ? '/en/industry-projects' : '/sektorel-projeler',
                isEnglish ? 'Industry Projects' : 'Sektörel Projeler',
              )}
              {navLink(isEnglish ? '/en/seo-blog' : '/blog', isEnglish ? 'SEO Blog' : 'Blog')}
              {navLink(
                isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi',
                isEnglish ? 'SEO Roadmap' : 'SEO Rehberi',
              )}

              <li>
                <details className="nav-dropdown" ref={toolsRef}>
                  <summary
                    className={
                      isActive(isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi') ||
                      isActive(isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo') ||
                      isActive(isEnglish ? '/en/crawlseer' : '/crawlseer')
                        ? 'active'
                        : undefined
                    }
                  >
                    {isEnglish ? 'Tools' : 'Araçlar'}{' '}
                    <span aria-hidden="true" className="nav-chevron">
                      ⌄
                    </span>
                  </summary>
                  <ul className="nav-submenu">
                    <li>
                      <Link
                        href={isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi'}
                        aria-current={currentPage(
                          isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi',
                        )}
                      >
                        Nirengi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo'}
                        aria-current={currentPage(
                          isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo',
                        )}
                      >
                        Knotvo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={isEnglish ? '/en/crawlseer' : '/crawlseer'}
                        aria-current={currentPage(isEnglish ? '/en/crawlseer' : '/crawlseer')}
                      >
                        Crawlseer
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link
                  href={languageHref}
                  className="language-switch"
                  hrefLang={isEnglish ? 'tr' : 'en'}
                  lang={isEnglish ? 'tr' : 'en'}
                >
                  {isEnglish ? 'TR' : 'EN'}
                  <span className="sr-only">
                    {' '}
                    — {isEnglish ? 'Türkçe sürüme geç' : 'switch to English'}
                  </span>
                </Link>
              </li>

              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn btn-primary"
                >
                  {isEnglish ? 'Contact' : 'İletişim'}
                  <span className="sr-only">
                    {' '}
                    {isEnglish
                      ? '— message me on WhatsApp (opens in a new tab)'
                      : '— WhatsApp’tan mesaj gönder (yeni sekmede açılır)'}
                  </span>
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
  );
}
