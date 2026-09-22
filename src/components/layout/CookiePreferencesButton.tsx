'use client';

import { OPEN_EVENT } from '@/components/layout/CookieConsent';

/** Reopens the consent bar so a stored choice can be changed or withdrawn. */
export default function CookiePreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="btn btn-outline"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {label}
    </button>
  );
}
