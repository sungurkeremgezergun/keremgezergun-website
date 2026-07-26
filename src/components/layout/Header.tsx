'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { routePair } from '@/lib/i18n';
import { contact } from '@/lib/contact';

export default function Header({ language = 'tr' }: { language?: 'tr' | 'en' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();
  // The pathname is the source of truth. Reverse proxies and container
  // platforms may strip request headers injected by Next's proxy layer.
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/') || (!pathname && language === 'en');
  const pair = routePair(pathname);
  const languageHref = isEnglish ? (pair?.tr ?? '/') : (pair?.en ?? '/en');
  const navMenuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const toolsButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setToolsOpen(false);
  }, []);

  // Close the menu on route change. Activating a link inside the menu leaves
  // focus in a subtree that is about to be display:none — browsers then reset
  // focus to <body> and the user has to Tab from the top of the document. Move
  // focus to <main> instead, which is the same place the skip link lands.
  const firstRender = useRef(true);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen((open) => (open ? false : open));
    setToolsOpen(false);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById('main-content')?.focus();
  }, [pathname]);

  // Escape steps back one level at a time: submenu first, then the whole menu.
  // Closing both at once breaks the user's mental model (APG disclosure pattern).
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (toolsOpen) {
        setToolsOpen(false);
        toolsButtonRef.current?.focus();
      } else if (menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, toolsOpen]);

  // Focus trap inside nav when open on mobile.
  // Guarded by the breakpoint: above 768px the menu is always visible, so
  // trapping there would lock scroll and capture focus with no way out.
  useEffect(() => {
    if (!menuOpen) return;
    if (typeof window === 'undefined') return;

    const mobile = window.matchMedia('(max-width: 768px)');
    if (!mobile.matches) return;

    const navMenu = navMenuRef.current;
    if (!navMenu) return;

    // Resizing past the breakpoint must release the trap immediately.
    const release = () => {
      if (!mobile.matches) setMenuOpen(false);
    };
    mobile.addEventListener('change', release);

    const focusableElements = navMenu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstFocusable?.focus();
    return () => {
      document.removeEventListener('keydown', handleTab);
      mobile.removeEventListener('change', release);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu open — mobile only, same reason as the trap.
  useEffect(() => {
    if (menuOpen && window.matchMedia('(max-width: 768px)').matches) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" aria-label={isEnglish ? 'Main' : 'Ana'}>
          <Logo variant="header" href={isEnglish ? '/en' : '/'} />

          <ul
            className={`nav-menu${menuOpen ? ' active' : ''}`}
            id="nav-menu"
            ref={navMenuRef}

          >
            <li>
              <Link
                href={isEnglish ? '/en/#services' : '/#hizmetler'}
                className={isActive(isEnglish ? '/en/#services' : '/#hizmetler') ? 'active' : undefined}
                onClick={closeMenu}
              >
                {isEnglish ? 'Services' : 'Hizmetler'}
              </Link>
            </li>
            <li>
              <Link
                href={isEnglish ? '/en/#about' : '/#hakkimda'}
                className={isActive(isEnglish ? '/en/#about' : '/#hakkimda') ? 'active' : undefined}
                onClick={closeMenu}
              >
                {isEnglish ? 'About' : 'Hakkımda'}
              </Link>
            </li>
            <li>
              <Link
                href={isEnglish ? '/en/industry-projects' : '/sektorel-projeler'}
                className={isActive(isEnglish ? '/en/industry-projects' : '/sektorel-projeler') ? 'active' : undefined}
                aria-current={currentPage(isEnglish ? '/en/industry-projects' : '/sektorel-projeler')}
                onClick={closeMenu}
              >
                {isEnglish ? 'Industry Projects' : 'Sektörel Projeler'}
              </Link>
            </li>
            <li>
              <Link
                href={isEnglish ? '/en/seo-blog' : '/blog'}
                className={isActive(isEnglish ? '/en/seo-blog' : '/blog') ? 'active' : undefined}
                aria-current={currentPage(isEnglish ? '/en/seo-blog' : '/blog')}
                onClick={closeMenu}
              >
                {isEnglish ? 'SEO Blog' : 'Blog'}
              </Link>
            </li>
            <li>
              <Link
                href={isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi'}
                className={isActive(isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi') ? 'active' : undefined}
                aria-current={currentPage(isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi')}
                onClick={closeMenu}
              >
                {isEnglish ? 'SEO Roadmap' : 'SEO Rehberi'}
              </Link>
            </li>
            <li className={`nav-dropdown${toolsOpen ? ' open' : ''}`}>
              <button
                type="button"
                ref={toolsButtonRef}
                className={isActive(isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi') || isActive(isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo') ? 'active' : undefined}
                aria-expanded={toolsOpen}
                aria-controls="tools-menu"
                onClick={() => setToolsOpen((open) => !open)}
              >
                {isEnglish ? 'Tools' : 'Araçlar'} <span aria-hidden="true" className="nav-chevron">⌄</span>
              </button>
              <ul id="tools-menu" className="nav-submenu" aria-label={isEnglish ? 'Tools' : 'Araçlar'}>
                <li>
                  <Link
                    href={isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi'}
                    aria-current={currentPage(isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi')}
                    onClick={closeMenu}
                  >
                    Nirengi
                  </Link>
                </li>
                <li>
                  <Link
                    href={isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo'}
                    aria-current={currentPage(isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo')}
                    onClick={closeMenu}
                  >
                    Knotvo
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={languageHref}
                className="language-switch"
                hrefLang={isEnglish ? 'tr' : 'en'}
                lang={isEnglish ? 'tr' : 'en'}
                onClick={closeMenu}
              >
                {isEnglish ? 'TR' : 'EN'}
                <span className="sr-only"> — {isEnglish ? 'Türkçe sürüme geç' : 'switch to English'}</span>
              </Link>
            </li>
            <li>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn btn-primary"
                onClick={closeMenu}
              >
                {isEnglish ? 'Contact' : 'İletişim'}
                <span className="sr-only"> {isEnglish ? '— message me on WhatsApp (opens in a new tab)' : '— WhatsApp’tan mesaj gönder (yeni sekmede açılır)'}</span>
              </a>
            </li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            ref={hamburgerRef}
            aria-label={menuOpen ? (isEnglish ? 'Close menu' : 'Menüyü kapat') : (isEnglish ? 'Open menu' : 'Menüyü aç')}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
