'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navMenuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
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
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

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
          <Logo variant="header" />

          <ul
            className={`nav-menu${menuOpen ? ' active' : ''}`}
            id="nav-menu"
            ref={navMenuRef}

          >
            <li>
              <Link
                href="/#hizmetler"
                className={isActive('/#hizmetler') ? 'active' : undefined}
                onClick={closeMenu}
              >
                Hizmetler
              </Link>
            </li>
            <li>
              <Link
                href="/#hakkimda"
                className={isActive('/#hakkimda') ? 'active' : undefined}
                onClick={closeMenu}
              >
                Hakkımda
              </Link>
            </li>
            <li>
              <Link
                href="/sektorel-projeler"
                className={isActive('/sektorel-projeler') ? 'active' : undefined}
                aria-current={isActive('/sektorel-projeler') ? 'page' : undefined}
                onClick={closeMenu}
              >
                Sektörel Projeler
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={isActive('/blog') ? 'active' : undefined}
                aria-current={isActive('/blog') ? 'page' : undefined}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/seo-ogrenme-haritasi"
                className={isActive('/seo-ogrenme-haritasi') ? 'active' : undefined}
                aria-current={isActive('/seo-ogrenme-haritasi') ? 'page' : undefined}
                onClick={closeMenu}
              >
                SEO Rehberi
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
                İletişim
              </a>
            </li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            ref={hamburgerRef}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
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
