/**
 * Single source of truth for name, address and phone. Local/entity SEO needs one
 * canonical NAP; before this existed the footer, the Knotvo pages and the
 * Nirengi pages each carried a slightly different email, phone format or domain.
 */
export const contact = {
  name: 'Sungur Kerem Gezergün',
  email: 'iletisim@keremgezergun.com',
  /** E.164-style display format. Do not switch to the local `0552 …` form. */
  phone: '+90 552 690 27 82',
  phoneHref: 'tel:+905526902782',
  /** Every contact CTA on the site points here. No prefilled text by design. */
  whatsapp: 'https://wa.me/905526902782',
  address: {
    tr: 'Mimar Sinan Mahallesi, Katibim Aziz Bey Caddesi No: 41, Üsküdar / İstanbul, Türkiye',
    en: 'Mimar Sinan Mahallesi, Katibim Aziz Bey Caddesi No: 41, Üsküdar / Istanbul, Türkiye',
  },
  website: 'https://www.keremgezergun.com',
  websiteLabel: 'www.keremgezergun.com',
} as const;

/** Policy effective dates, kept identical across both language versions. */
export const policyDates = {
  nirengi: { iso: '2026-07-24', tr: '24 Temmuz 2026', en: '24 July 2026' },
  knotvo: { iso: '2026-07-20', tr: '20 Temmuz 2026', en: '20 July 2026' },
  crawlseer: { iso: '2026-07-29', tr: '29 Temmuz 2026', en: '29 July 2026' },
} as const;

/**
 * Public store listings for the shipped products. Both the product pages and
 * the home page link here, so a storefront change is a one-line edit.
 * Knotvo has no entry yet — it has not been released.
 */
export const stores = {
  nirengi: {
    tr: 'https://apps.apple.com/tr/app/nirengi-log-file-analyser/id6794631310?l=tr&mt=12',
    en: 'https://apps.apple.com/app/nirengi-log-file-analyser/id6794631310?mt=12',
  },
  crawlseer:
    'https://chromewebstore.google.com/detail/crawlseer-seo-checker-ai/mecbmoidhdnoedfblkhdlkebnpkepgnj',
} as const;
