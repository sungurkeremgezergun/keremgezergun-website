'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useSyncExternalStore } from 'react';
import type { Language } from '@/lib/i18n';

const GA_ID = 'G-TVTZYGQ64H';
const CLARITY_ID = 'z8reab2s6y';

/**
 * localStorage key for the visitor's choice. The value is versioned so a
 * material change to what is collected can ask again: bump CONSENT_VERSION
 * and every stored answer becomes stale.
 */
const STORAGE_KEY = 'cookie-consent';
const CONSENT_VERSION = '2';

/** Fired by the policy page's "change preference" button to reopen the bar. */
export const OPEN_EVENT = 'cookie-consent:open';

type Choice = 'granted' | 'denied';

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const [version, choice] = raw.split(':');
    if (version !== CONSENT_VERSION) return null;
    return choice === 'granted' || choice === 'denied' ? choice : null;
  } catch {
    return null;
  }
}

function writeChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, `${CONSENT_VERSION}:${choice}`);
  } catch {
    // Private mode or blocked storage: the bar will simply ask again next time.
  }
}

/**
 * Withdrawal has to remove what acceptance created. gtag sets `_ga` and
 * `_ga_<id>`, Clarity sets `_clck` and `_clsk`, all on the registrable domain,
 * so both the bare host and the dot-prefixed parent are expired; a cookie that
 * was never set is a no-op. Clarity's third-party Microsoft cookies are out of
 * reach from here.
 */
function clearAnalyticsCookies() {
  const hosts = [location.hostname, `.${location.hostname.replace(/^www\./, '')}`];
  document.cookie
    .split(';')
    .map((entry) => entry.trim().split('=')[0])
    .filter((name) => name.startsWith('_ga') || name.startsWith('_cl'))
    .forEach((name) => {
      hosts.forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
      });
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
}

/**
 * Clarity's rejection call erases its data but keeps recording in no-consent
 * mode, so a tag that is already running on this page has to be unloaded too.
 */
function stopClarity() {
  const { clarity } = window as unknown as { clarity?: (...args: unknown[]) => void };
  if (!clarity) return;
  clarity('consent', false);
  location.reload();
}

/*
 * The choice is an external store rather than state set in an effect (the
 * same shape as the redirect matcher's settingsStore): the server snapshot is
 * null so nothing renders before hydration, and the client snapshot reads
 * localStorage. `reopened` lets the policy page bring the bar back over a
 * stored answer without clearing it until the visitor decides again.
 */
type Snapshot = Choice | 'unset';

const listeners = new Set<() => void>();
let reopened = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // gtag rewrites its cookies while the page unloads, so the reload that follows
  // a withdrawal can bring them back.
  if (readChoice() === 'denied') clearAnalyticsCookies();
  const reopen = () => {
    reopened = true;
    emit();
  };
  window.addEventListener(OPEN_EVENT, reopen);
  return () => {
    listeners.delete(listener);
    window.removeEventListener(OPEN_EVENT, reopen);
  };
}

function getSnapshot(): Snapshot {
  if (reopened) return 'unset';
  return readChoice() ?? 'unset';
}

function getServerSnapshot(): null {
  return null;
}

const copy = {
  label: { tr: 'Çerez tercihi', en: 'Cookie preference' },
  text: {
    tr: 'Bu site ziyaret istatistikleri için Google Analytics, kullanım analizi ve oturum kaydı için Microsoft Clarity çerezleri kullanır. Kabul ederseniz kullanım verisi ve oturum kayıtları toplanır; reddederseniz hiçbir çerez bırakılmaz.',
    en: 'This site uses Google Analytics cookies for visit statistics and Microsoft Clarity cookies for usage analysis and session recording. If you accept, usage data and session recordings are collected; if you decline, no cookies are set.',
  },
  policy: { tr: 'Çerez politikası', en: 'Cookie policy' },
  policyHref: { tr: '/cerez-politikasi', en: '/en/cookie-policy' },
  accept: { tr: 'Kabul et', en: 'Accept' },
  decline: { tr: 'Reddet', en: 'Decline' },
};

/**
 * Cookie consent bar and the only place the Google and Clarity tags are loaded.
 *
 * "Basic" consent mode: gtag.js is not fetched at all until the visitor
 * accepts, so a decline (or no answer) sets no cookie and sends nothing to
 * Google — not even the cookieless pings advanced consent mode would send.
 * Clarity follows the same rule, and is told analytics storage is granted but
 * ad storage is not. The stored answer is honoured on every later visit
 * without showing the bar.
 */
export default function CookieConsent({ language }: { language: Language }) {
  const choice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const decide = (next: Choice) => {
    writeChoice(next);
    if (next === 'denied') clearAnalyticsCookies();
    reopened = false;
    emit();
    if (next === 'denied') stopClarity();
  };

  return (
    <>
      {choice === 'granted' && (
        <>
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
          <Script id="clarity-init" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");
window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });`}
          </Script>
        </>
      )}

      {choice === 'unset' && (
        <section className="cookie-bar" aria-label={copy.label[language]}>
          <div className="cookie-bar-inner">
            <p>
              {copy.text[language]}{' '}
              <Link href={copy.policyHref[language]}>{copy.policy[language]}</Link>
            </p>
            <div className="cookie-bar-actions">
              <button type="button" className="btn btn-outline" onClick={() => decide('denied')}>
                {copy.decline[language]}
              </button>
              <button type="button" className="btn btn-primary" onClick={() => decide('granted')}>
                {copy.accept[language]}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
