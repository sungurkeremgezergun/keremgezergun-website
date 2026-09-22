'use client';

import { useState } from 'react';
import type { Language } from '@/lib/i18n';
import { formCopy, type ErrorCode } from '@/components/contact/copy';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; code: ErrorCode };

/**
 * Progressive: without JavaScript the form POSTs to /api/contact and comes
 * back to the page with a #sent / #error-<code> fragment that ContactPage
 * renders as :target messages. With JavaScript the same endpoint answers
 * JSON and the page does not reload.
 */
export default function ContactForm({ language }: { language: Language }) {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  // Set once per mount; the server rejects submits faster than a few seconds.
  const [startedAt] = useState(() => Date.now());

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: 'sending' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (response.ok && result.ok) {
        form.reset();
        setStatus({ kind: 'sent' });
      } else {
        const code = result.error && result.error in formCopy.errors ? (result.error as ErrorCode) : 'send';
        setStatus({ kind: 'error', code });
      }
    } catch {
      setStatus({ kind: 'error', code: 'network' });
    }
  };

  if (status.kind === 'sent') {
    return (
      <p className="contact-form-status" role="status">
        {formCopy.sent[language]}
      </p>
    );
  }

  return (
    <form className="contact-form" action="/api/contact" method="post" onSubmit={onSubmit}>
      <input type="hidden" name="language" value={language} />
      <input type="hidden" name="startedAt" value={startedAt} />
      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="contact-form-trap" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="contact-name">{formCopy.name[language]}</label>
          <input id="contact-name" name="name" type="text" required maxLength={120} autoComplete="name" />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">{formCopy.email[language]}</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-topic">{formCopy.topic[language]}</label>
        <select id="contact-topic" name="topic" required defaultValue="">
          <option value="" disabled>
            {language === 'en' ? 'Choose a topic' : 'Konu seçin'}
          </option>
          {(Object.keys(formCopy.topics) as (keyof typeof formCopy.topics)[]).map((key) => (
            <option key={key} value={key}>
              {formCopy.topics[key][language]}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">{formCopy.message[language]}</label>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={4000} rows={7} />
      </div>

      {status.kind === 'error' && (
        <p className="contact-form-status contact-form-error" role="alert">
          {formCopy.errors[status.code][language]}
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-large" disabled={status.kind === 'sending'}>
        {status.kind === 'sending' ? formCopy.sending[language] : formCopy.send[language]}
      </button>
    </form>
  );
}
