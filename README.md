# Kerem Gezergün — Kişisel Web Sitesi

Sungur Kerem Gezergün'ün kişisel SEO portfolyo ve blog sitesi.
E-ticaret SEO, Teknik SEO ve Organik Büyüme Stratejileri içerikleri sunar.

**Production:** [www.keremgezergun.com](https://www.keremgezergun.com)

## Teknoloji

- **Framework:** Next.js 16 (App Router, React 19)
- **Dil:** TypeScript (strict)
- **Stil:** Saf CSS (`src/app/globals.css`)
- **Statik içerik:** Tüm sayfalar build sırasında prerender edilir. Hiçbir
  layout veya sayfa `headers()`/`cookies()` kullanmaz — bunlardan biri
  eklenirse tüm site dinamik render'a düşer.
- **Çok dillilik:** İki root layout, iki route group. `src/app/(tr)` Türkçe,
  `src/app/(en)` İngilizce sayfaları barındırır; `<html lang>` URL'den gelir.
- **Lint:** ESLint 9 + `next/core-web-vitals`
- **Test:** Yalnızca saf kütüphaneler. `tsconfig.test.json` `src/lib/redirect-matcher`
  ile `tests/` dizinini `dist-test/`e derler, Node'un yerleşik `node:test`'i
  çalıştırır. Ek bağımlılık yok.

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
| `npm test`          | Saf kütüphanelerin `node:test` testleri |
| `npm run typecheck` | TypeScript tipi kontrolü              |

## Proje Yapısı

```
src/
├── app/
│   ├── (tr)/                   # Türkçe root layout + sayfalar
│   │   ├── layout.tsx          # <html lang="tr">, TR metadata
│   │   ├── page.tsx            # Ana sayfa
│   │   ├── not-found.tsx       # TR 404
│   │   ├── blog/, sektorel-projeler/, seo-ogrenme-haritasi/
│   │   ├── nirengi*/ , knotvo*/ , 301-yonlendirme-araci/
│   ├── (en)/                   # İngilizce root layout + sayfalar
│   │   ├── layout.tsx          # <html lang="en">, EN metadata
│   │   ├── not-found.tsx       # EN 404
│   │   └── en/[[...slug]]/page.tsx
│   ├── global-not-found.tsx    # Hiçbir route'a uymayan URL'ler (iki dilli)
│   ├── sitemap.ts              # XML sitemap (hreflang alternates ile)
│   └── globals.css             # Tüm stiller
├── components/
│   ├── layout/{Document,Header,Footer}.tsx   # gtag: next/script, afterInteractive
│   ├── redirect-matcher/     # 301 yönlendirme aracı arayüzü
│   │   ├── Page.tsx          # Sunucu bileşeni: sayfa + araç altı içerik
│   │   ├── Tool.tsx          # Tek istemci bileşeni; worker'ı tıklamada kurar
│   │   ├── matcher.worker.ts # Eşleştirmeyi ana thread dışında sürer
│   │   └── *.module.css      # Route'a özgü stil, globals.css'e girmez
│   └── ui/Logo.tsx
└── lib/
    ├── fonts.ts                # Her iki layout'un paylaştığı font tanımı
    ├── i18n.ts                 # TR↔EN route eşleşmeleri, hreflang üretimi
    ├── contact.ts              # Tek NAP kaynağı, mağaza linkleri, politika tarihleri
    ├── experience.ts           # Kariyer geçmişi, markalar, araçlar (CV verisi)
    ├── projects.ts             # Konuşmacılık ve zirveler (Event verisi)
    ├── jsonLd.ts               # XSS-safe JSON-LD serializer
    ├── redirect-matcher/       # Saf çekirdek: normalizasyon, skorlama, çıktı
    │                           # React/DOM yok, `node:test` ile test edilir
    └── schema/                 # JSON-LD düğüm üreticileri
        ├── base.ts             # @id'ler, graph(), ref(), inLanguage()
        ├── person.ts           # Person + OrganizationRole kariyer geçmişi
        ├── website.ts          # WebSite + her sayfanın <head> grafiği
        ├── product.ts          # Üç ürünün SoftwareApplication düğümleri
        ├── page.ts             # Breadcrumb, FAQ, WebPage, ItemList
        ├── home.ts             # ProfilePage, PodcastSeries, marka/ürün listeleri
        └── events.ts           # Sektörel projeler Event grafiği
```

## Güvenlik

- `next.config.mjs` üzerinden CSP, HSTS, X-Frame-Options, Referrer-Policy,
  Permissions-Policy ve diğer header'lar tüm yanıtlarda uygulanır.
- JSON-LD schema'lar `jsonLdSafe()` ile `<`, `>`, `&`, `U+2028`, `U+2029`
  karakterlerini escape ederek serileştirilir.
- `npm audit` çıktısı temiz tutulur (CI'da `npm audit --audit-level=high`).

## Deploy

`main` dalına push → GitHub Actions **CI** (typecheck + test + lint + build) →
başarılıysa **Promote to production** workflow'u `production` dalını `main`'e
ileri sarar. Sunucu tarafında bir systemd timer 3 dakikada bir
`deploy/pull.sh` çalıştırır: `origin/production` sha'sı değiştiyse
`git reset --hard`, `npm ci`, `npm run build` ve `pm2 reload
keremgezergun-website`. Build başarısız olursa çalışan süreç dokunulmaz.
GitHub'dan sunucuya SSH açılmaz; sunucu yalnızca dışarı çıkar.

Sunucuda tek seferlik kurulum (ilk `production` push'undan sonra):

```bash
cd /var/www/keremgezergun-website && git fetch origin production
cp deploy/keremgezergun-deploy.{service,timer} /etc/systemd/system/
# service dosyasındaki PATH'i `dirname "$(which node)"` çıktısıyla düzelt
systemctl daemon-reload && systemctl enable --now keremgezergun-deploy.timer
journalctl -u keremgezergun-deploy -f   # ilk deploy'u izle
```

Bkz. `.github/workflows/{ci,deploy}.yml`, `deploy/`.

Yerelde production çalıştırma: `npm run build && npm run start`.

## Lisans

MIT — bkz. [LICENSE](LICENSE).
