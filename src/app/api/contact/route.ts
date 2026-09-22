import { NextResponse } from 'next/server';
import { contact } from '@/lib/contact';

/**
 * Contact form → one email to the owner through Resend's REST API.
 *
 * The site runs under `next start`, so a route handler is fine; every page
 * stays statically prerendered. No SDK: the API is one POST. Secrets come
 * from the environment and a missing key fails the request loudly instead of
 * silently dropping mail.
 *
 * Without JavaScript the form posts here directly and is redirected back to
 * the page with a #sent or #error-<code> fragment; the page shows the matching
 * message with a :target rule, so it stays statically prerendered.
 *
 * Spam defences, all server-side: a honeypot field that humans never see, a
 * minimum time between page load and submit, and a per-IP bucket. The bucket
 * is in memory, which is enough for one pm2 instance.
 */
export const runtime = 'nodejs';

const TOPICS = ['training', 'speaking', 'podcast', 'product', 'other'] as const;
type Topic = (typeof TOPICS)[number];

const MIN_SECONDS_ON_PAGE = 3;
const MAX_PER_HOUR = 5;
const MAX_MESSAGE = 4000;

const recent = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const window = (recent.get(ip) ?? []).filter((t) => now - t < 60 * 60 * 1000);
  if (window.length >= MAX_PER_HOUR) return true;
  window.push(now);
  recent.set(ip, window);
  return false;
}

function field(body: FormData | Record<string, unknown>, name: string): string {
  const value = body instanceof FormData ? body.get(name) : body[name];
  if (typeof value === 'number') return String(value);
  return typeof value === 'string' ? value.trim() : '';
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export async function POST(request: Request) {
  const type = request.headers.get('content-type') ?? '';
  const wantsJson = type.includes('application/json');
  const body = wantsJson
    ? ((await request.json().catch(() => ({}))) as Record<string, unknown>)
    : await request.formData();

  const language = field(body, 'language') === 'en' ? 'en' : 'tr';
  const fail = (status: number, code: string) =>
    wantsJson
      ? NextResponse.json({ ok: false, error: code }, { status })
      : NextResponse.redirect(new URL(`${language === 'en' ? '/en/contact' : '/iletisim'}#error-${code}`, request.url), 303);

  // Honeypot: a bot that fills every field lands here.
  if (field(body, 'website')) return fail(400, 'spam');

  const startedAt = Number(field(body, 'startedAt'));
  if (!startedAt || Date.now() - startedAt < MIN_SECONDS_ON_PAGE * 1000) return fail(400, 'spam');

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) return fail(429, 'rate');

  const name = field(body, 'name').slice(0, 120);
  const email = field(body, 'email');
  const topic = field(body, 'topic') as Topic;
  const message = field(body, 'message').slice(0, MAX_MESSAGE);
  if (!name || !isEmail(email) || !TOPICS.includes(topic) || message.length < 10) {
    return fail(400, 'invalid');
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !from) {
    console.error('contact: RESEND_API_KEY / CONTACT_FROM are not set');
    return fail(500, 'config');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [contact.email],
      reply_to: email,
      subject: `[keremgezergun.com] ${topic} — ${name}`,
      text: `Ad: ${name}\nE-posta: ${email}\nKonu: ${topic}\nDil: ${language}\nIP: ${ip}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error('contact: Resend responded', response.status, await response.text());
    return fail(502, 'send');
  }

  return wantsJson
    ? NextResponse.json({ ok: true })
    : NextResponse.redirect(new URL(`${language === 'en' ? '/en/contact' : '/iletisim'}#sent`, request.url), 303);
}
