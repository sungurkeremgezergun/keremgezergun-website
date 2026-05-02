# Kerem Gezergün — Kişisel Web Sitesi

Sungur Kerem Gezergün'ün kişisel SEO portfolyo ve blog sitesi.
E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri içerikleri sunar.

**Production:** [keremgezergun.com](https://keremgezergun.com)

## Teknoloji

- **Framework:** Next.js 16 (App Router, React 19)
- **Dil:** TypeScript (strict)
- **Stil:** Saf CSS (`src/app/globals.css`)
- **Statik içerik:** Tüm sayfalar build sırasında prerender edilir
- **Lint:** ESLint 9 + `next/core-web-vitals`

## Kurulum

```bash
nvm use            # Node sürümü için (.nvmrc okunur)
npm install
npm run dev        # http://localhost:3000
```

## Komutlar

| Script              | Açıklama                              |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Geliştirme sunucusu                   |
| `npm run build`     | Production build                      |
| `npm run start`     | Production sunucusu (build sonrası)   |
| `npm run lint`      | ESLint + Next.js kuralları            |
| `npm run typecheck` | TypeScript tipi kontrolü              |

## Proje Yapısı

```
src/
├── app/
│   ├── layout.tsx              # Kök layout, metadata, JSON-LD Person schema
│   ├── page.tsx                # Ana sayfa
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # XML sitemap
│   ├── globals.css             # Tüm stiller
│   ├── blog/page.tsx
│   ├── sektorel-projeler/page.tsx
│   └── seo-ogrenme-haritasi/page.tsx
├── components/
│   ├── layout/{Header,Footer}.tsx
│   └── ui/Logo.tsx
└── lib/
    └── jsonLd.ts               # XSS-safe JSON-LD serializer
```

## Güvenlik

- `next.config.mjs` üzerinden CSP, HSTS, X-Frame-Options, Referrer-Policy,
  Permissions-Policy ve diğer header'lar tüm yanıtlarda uygulanır.
- JSON-LD schema'lar `jsonLdSafe()` ile `<`, `>`, `&`, `U+2028`, `U+2029`
  karakterlerini escape ederek serileştirilir.
- `npm audit` çıktısı temiz tutulur (CI'da `npm audit --audit-level=high`).

## Deploy

Vercel ile uyumlu (özel yapılandırmaya gerek yok). Push to main → otomatik
deploy. Self-hosted çalıştırma için `npm run build && npm run start`.

## Lisans

MIT — bkz. [LICENSE](LICENSE).
