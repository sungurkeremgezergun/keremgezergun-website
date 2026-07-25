'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { routePair } from '@/lib/i18n';

export default function Header({ language = 'tr' }: { language?: 'tr' | 'en' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = language === 'en';
  const pair = routePair(pathname);
  const languageHref = isEnglish ? (pair?.tr ?? '/') : (pair?.en ?? '/en');
  const navMenuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const toolsButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setToolsOpen(false);
  }, []);

  // Close menu when the route changes (browser back/forward, programmatic nav).
  // Link clicks already close via onClick; this effect only catches external nav.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen((open) => (open ? false : open));
  }, [pathname]);

  // ESC key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
        hamburgerRef.current?.focus();
      } else if (e.key === 'Escape' && toolsOpen) {
        setToolsOpen(false);
        toolsButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, toolsOpen, closeMenu]);

  // Focus trap inside nav when open on mobile
  useEffect(() => {
    if (!menuOpen) return;

    const navMenu = navMenuRef.current;
    if (!navMenu) return;

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
    return () => document.removeEventListener('keydown', handleTab);
  }, [menuOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="header" role="banner" aria-label="Site başlığı">
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Ana menü">
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
                aria-current={isActive(isEnglish ? '/en/industry-projects' : '/sektorel-projeler') ? 'page' : undefined}
                onClick={closeMenu}
              >
                {isEnglish ? 'Industry Projects' : 'Sektörel Projeler'}
              </Link>
            </li>
            <li>
              <Link
                href={isEnglish ? '/en/seo-blog' : '/blog'}
                className={isActive(isEnglish ? '/en/seo-blog' : '/blog') ? 'active' : undefined}
                aria-current={isActive(isEnglish ? '/en/seo-blog' : '/blog') ? 'page' : undefined}
                onClick={closeMenu}
              >
                {isEnglish ? 'SEO Blog' : 'Blog'}
              </Link>
            </li>
            <li>
              <Link
                href={isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi'}
                className={isActive(isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi') ? 'active' : undefined}
                aria-current={isActive(isEnglish ? '/en/seo-learning-roadmap' : '/seo-ogrenme-haritasi') ? 'page' : undefined}
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
                    aria-current={isActive(isEnglish ? '/en/nirengi-log-analyzer' : '/nirengi') ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    Nirengi
                  </Link>
                </li>
                <li>
                  <Link
                    href={isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo'}
                    aria-current={isActive(isEnglish ? '/en/knotvo-site-speed-analyzer' : '/knotvo') ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    Knotvo
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={languageHref} className="language-switch" hrefLang={isEnglish ? 'tr' : 'en'} onClick={closeMenu}>
                {isEnglish ? 'TR' : 'EN'}
                <span className="sr-only"> — {isEnglish ? 'Türkçe sürüme geç' : 'switch to English'}</span>
              </Link>
            </li>
            <li>
              <a
                href="https://businessup.com.tr/iletisim/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn btn-primary"
                onClick={closeMenu}
              >
                {isEnglish ? 'Contact' : 'İletişim'}
                <span className="sr-only"> {isEnglish ? '(opens in a new tab)' : '(yeni sekmede açılır)'}</span>
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
