import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLdSafe } from '@/lib/jsonLd';

import overviewShot from '../../../public/knotvo/overview.png';
import insightShot from '../../../public/knotvo/insight.png';
import waterfallShot from '../../../public/knotvo/waterfall.png';
import requestsShot from '../../../public/knotvo/requests.png';
import reportsShot from '../../../public/knotvo/reports.png';

const PAGE_URL = 'https://www.keremgezergun.com/knotvo';
const NOTIFY_MAILTO =
  'mailto:iletisim@keremgezergun.com?subject=Knotvo%20%C3%A7%C4%B1k%C4%B1nca%20haber%20ver';

export const metadata: Metadata = {
  title: 'Knotvo — Mac için Site Hızı Analiz Aracı',
  description:
    'Knotvo, HAR dosyalarını ve canlı ölçümleri tek ekranda sade bir yapılacaklar listesine çeviren, Mac için tasarlanmış bir site hızı analiz aracıdır. Tamamen yerel, hesapsız, aboneliksiz.',
  keywords: [
    'site hızı analiz aracı',
    'HAR analizi',
    'Core Web Vitals',
    'Mac performans aracı',
    'PageSpeed Insights',
    'web performansı',
    'Knotvo',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Knotvo — Mac için Site Hızı Analiz Aracı',
    description:
      'HAR dosyalarını ve canlı ölçümleri tek ekranda sade bir yapılacaklar listesine çeviren, Mac için site hızı analiz aracı. Tamamen yerel, hesapsız, aboneliksiz.',
    url: PAGE_URL,
    siteName: 'Kerem Gezergün',
    images: [
      {
        url: 'https://www.keremgezergun.com/knotvo/overview.png',
        width: 1500,
        height: 834,
        alt: 'Knotvo genel bakış ekranı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knotvo — Mac için Site Hızı Analiz Aracı',
    description:
      'HAR dosyalarını ve canlı ölçümleri sade bir yapılacaklar listesine çeviren, Mac için site hızı analiz aracı.',
    creator: '@keremgezergun',
    site: '@keremgezergun',
    images: ['https://www.keremgezergun.com/knotvo/overview.png'],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#software`,
  name: 'Knotvo',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'Web Performance Analyzer',
  operatingSystem: 'macOS 14.0 or later',
  processorRequirements: 'Apple Silicon veya Intel',
  description:
    'Knotvo, HAR dosyalarını ve canlı ölçümleri tek ekranda sade bir yapılacaklar listesine çeviren, Mac için tasarlanmış yerel bir site hızı analiz aracıdır.',
  url: PAGE_URL,
  inLanguage: 'tr-TR',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
  },
  featureList: [
    'HAR dosyası analizi (tamamen yerel)',
    'Canlı ölçüm — PageSpeed Insights ve Lighthouse',
    'Core Web Vitals lab + saha verisi',
    'Waterfall zaman çizelgesi',
    'İki HAR karşılaştırma',
    'Sır temizleyip güvenli HAR paylaşımı',
    'PDF rapor çıktısı',
  ],
  author: {
    '@type': 'Person',
    '@id': 'https://www.keremgezergun.com/#person',
    name: 'Sungur Kerem Gezergün',
  },
  publisher: { '@id': 'https://www.keremgezergun.com/#person' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.keremgezergun.com/' },
    { '@type': 'ListItem', position: 2, name: 'Knotvo', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Knotvo tam olarak ne işe yarıyor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bir site hızı analiz aracıdır. HAR dosyalarını ve canlı ölçümleri inceler; ağ isteklerini, Core Web Vitals değerlerini ve üçüncü taraf yükünü analiz edip hepsini önceliklendirilmiş bir yapılacaklar listesine çevirir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verilerim buluta gidiyor mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HAR analizi tamamen bilgisayarında yapılır, hiçbir şey yüklenmez. Yalnızca canlı ölçüm özelliğini kullandığında, girdiğin adres Google PageSpeed Insights’a gönderilir. Bu durum uygulamada açıkça belirtilir.',
      },
    },
    {
      '@type': 'Question',
      name: 'localhost ya da staging test edebilir miyim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. Tarayıcında HAR kaydı al, Knotvo’da aç. Bulut araçlarının aksine iç ve özel sayfaları da analiz edebilir. Canlı ölçüm ise yalnız herkese açık adreslerde çalışır.',
      },
    },
    {
      '@type': 'Question',
      name: 'İçinde şifre olan bir HAR’ı güvenle paylaşabilir miyim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sanitize özelliğini kullan. Çerezleri, yetki başlıklarını ve token’ları temizleyip paylaşıma uygun bir kopya üretir. Senin orijinal dosyan olduğu gibi kalır.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hangi cihazlarda çalışıyor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Şu an Mac için var, macOS 14 ve üzeri. Apple Silicon ve Intel işlemcileri destekler.',
      },
    },
  ],
};

export default function KnotvoPage() {
  return (
    <main id="main-content" className="knotvo" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdSafe(faqSchema) }}
      />

      {/* HERO */}
      <section className="knotvo-hero" aria-labelledby="knotvo-title">
        <div className="container">
          <span className="k-badge">Mac için tasarlandı</span>
          <h1 id="knotvo-title">
            Sitenin neden yavaş olduğunu net biçimde gösteren{' '}
            <span className="k-hl">site hızı analiz aracı</span>
          </h1>
          <p className="k-lead">
            Knotvo, tarayıcının ağ kaydını (HAR) ve canlı ölçümü tek ekranda toplar, sonra sana
            ne yapman gerektiğini söyler. Karmaşık skorlarla değil, sade bir yapılacaklar
            listesiyle. Hesap açman gerekmez, kuyruğa girmezsin, verilerin bilgisayarından çıkmaz.
          </p>
          <div className="k-cta-row">
            <a className="btn btn-primary btn-large" href={NOTIFY_MAILTO}>
              Beni Haberdar Et
            </a>
            <a className="btn btn-outline btn-large" href="#ozellikler">
              Neler yapabildiğine bak
            </a>
          </div>
          <p className="k-macnote">
            🍎 Mac App Store&apos;da çok yakında · macOS 14 ve üzeri · Apple Silicon ve Intel destekli
          </p>

          <div className="k-heroshot k-shot">
            <Image
              src={overviewShot}
              alt="Knotvo genel bakış ekranı: performans skoru, en büyük darboğazlar ve tahmini kazanım"
              placeholder="blur"
              priority
              sizes="(max-width: 1100px) 100vw, 1080px"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="knotvo-section" style={{ paddingTop: 8 }} aria-label="Öne çıkanlar">
        <div className="container">
          <div className="k-stats">
            <div className="k-stat">
              <b>Yerelde</b>
              <span>HAR analizi bilgisayarında yapılır, hiçbir şey yüklenmez</span>
            </div>
            <div className="k-stat">
              <b>22+</b>
              <span>Otomatik performans kuralı, tahmini kazançlarıyla</span>
            </div>
            <div className="k-stat">
              <b>Sınırsız</b>
              <span>Hesap yok, kuyruk yok, aylık ödeme yok</span>
            </div>
            <div className="k-stat">
              <b>Lab + Saha</b>
              <span>Lighthouse ölçümü ve gerçek kullanıcı verisi bir arada</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1 */}
      <section id="ozellikler" className="knotvo-section" aria-labelledby="k-f1">
        <div className="container">
          <div className="k-feature">
            <div className="k-txt">
              <div className="k-eyebrow">Analiz ekranı</div>
              <h2 id="k-f1">Bir bakışta, sitenin durumu</h2>
              <p>
                Performans skoru, en çok zaman kaybettiren üç darboğaz ve ilk üç işi yapınca elde
                edeceğin tahmini kazanç. Hepsi tek ekranda, renklerle önceliklendirilmiş.
              </p>
              <ul className="k-flist">
                <li>Skorun yanında &quot;neden bu skor&quot; açıklaması</li>
                <li>Kritikten düşüğe sıralanmış bulgular</li>
                <li>Her bulgunun tahmini bayt ve süre kazancı</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image src={overviewShot} alt="Knotvo genel bakış ekranı" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2 */}
      <section className="knotvo-section alt" aria-labelledby="k-f2">
        <div className="container">
          <div className="k-feature rev">
            <div className="k-txt">
              <div className="k-eyebrow">Düz dille anlatım</div>
              <h2 id="k-f2">Ham metrik değil, ne yapman gerektiği</h2>
              <p>
                Çoğu araç sana bir sürü sayı verir ve yorumlamayı sana bırakır. Knotvo bunun
                yerine sade cümleler kurar: &quot;Sayfa ilk baytı geç alıyor, asıl sorun sunucu
                yanıtı&quot; gibi. Patronuna ya da müşterine olduğu gibi gösterebilirsin.
              </p>
              <ul className="k-flist">
                <li>Teknik olmayan biri için bile okunur</li>
                <li>Yanlış teşhisleri de yakalar, örneğin hero görselinin geç yüklenmesi</li>
                <li>Kategorilere göre filtrele: görsel, JavaScript, ağ, önbellek</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image src={insightShot} alt="Knotvo insight ekranı, düz dille açıklamalar" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3 — loading mock */}
      <section className="knotvo-section" aria-labelledby="k-f3">
        <div className="container">
          <div className="k-feature">
            <div className="k-txt">
              <div className="k-eyebrow">Analiz yapılırken</div>
              <h2 id="k-f3">Ölçüm, adım adım</h2>
              <p>
                Canlı bir adres girdiğinde Knotvo, Google PageSpeed Insights ve Lighthouse ile
                ölçümü çalıştırır, gerçek kullanıcı verisini (CrUX) toplar ve hepsini yaklaşık yarım
                dakikada tek rapora dönüştürür. Ne olduğunu adım adım görürsün.
              </p>
              <ul className="k-flist">
                <li>Mobil ya da masaüstü profili seç</li>
                <li>İstediğin an iptal et</li>
                <li>Bitince doğrudan sonuç ekranına düşersin</li>
              </ul>
            </div>
            <div className="k-loadmock" aria-hidden="true">
              <div className="lm-icon">
                <svg width="56" height="56" viewBox="0 0 44 44" style={{ borderRadius: 13 }}>
                  <defs>
                    <linearGradient id="knotvoLg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#E6C96A" />
                      <stop offset="1" stopColor="#C9A84C" />
                    </linearGradient>
                  </defs>
                  <rect width="44" height="44" rx="10" fill="url(#knotvoLg)" />
                  <g fill="none" stroke="#0B0E14" strokeLinecap="round">
                    <path d="M22 22 A15 15 0 1 1 33 9" strokeWidth="2.3" />
                    <path d="M22 22 A10 10 0 1 1 29 12.5" strokeWidth="2.3" opacity=".8" />
                    <path d="M22 22 A5.5 5.5 0 1 1 26 17" strokeWidth="2.3" opacity=".62" />
                  </g>
                  <line x1="22" y1="22" x2="34.5" y2="14" stroke="#0B0E14" strokeWidth="2.1" strokeLinecap="round" />
                  <circle cx="22" cy="22" r="2.4" fill="#0B0E14" />
                </svg>
              </div>
              <div className="lm-title">Analiz ediliyor</div>
              <div className="lm-pill-wrap">
                <span className="lm-pill"><span>https://www.site.com</span><span>Mobil</span><span>~30 sn</span></span>
              </div>
              <div className="lm-bar"><i></i></div>
              <div className="lm-step"><span className="c">✓</span> Adres doğrulanıyor</div>
              <div className="lm-step"><span className="c">✓</span> PageSpeed Insights bağlantısı kuruluyor</div>
              <div className="lm-step"><span className="c">✓</span> Gerçek kullanıcı verisi (CrUX) kontrol ediliyor</div>
              <div className="lm-step"><span className="c">✓</span> Lighthouse ölçümü işleniyor</div>
              <div className="lm-step"><span className="c">✓</span> Core Web Vitals yorumlanıyor</div>
              <div className="lm-step" style={{ opacity: 0.5 }}>
                <span className="c" style={{ background: '#1b2430', color: '#5d6880' }}>•</span> Rapor görünümü oluşturuluyor
              </div>
              <div className="lm-tip">
                💡 Lab ölçümü kısıtlı mobil koşulda ilk yüklemeyi test eder, CrUX ise gerçek
                kullanıcıların son 28 gününü gösterir.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4 — waterfall + requests */}
      <section className="knotvo-section alt" aria-labelledby="k-f4">
        <div className="container">
          <div className="k-feature rev">
            <div className="k-txt">
              <div className="k-eyebrow">Ağ detayı</div>
              <h2 id="k-f4">Her isteğin nerede zaman kaybettiği</h2>
              <p>
                Zaman çizelgesi (waterfall) yedi aşamalı bir dökümle her isteğin ne kadar
                beklediğini, ne kadar sürdüğünü ve ne kadar ağır olduğunu görsel olarak öne
                çıkarır. Ağır ve geç gelen istekleri anında fark edersin.
              </p>
              <ul className="k-flist">
                <li>Sıralanabilir istek tablosu</li>
                <li>Bekleme, bağlanma, indirme aşamaları ayrı ayrı</li>
                <li>Üçüncü taraf ve izleyici yükü net görünür</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image src={waterfallShot} alt="Knotvo waterfall zaman çizelgesi ekranı" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
            </div>
          </div>
          <div className="k-feature" style={{ marginTop: 64 }}>
            <div className="k-txt">
              <div className="k-eyebrow">İstek envanteri</div>
              <h2>Bütün istekler, filtrelenebilir tabloda</h2>
              <p>
                Boyut, süre, tür ve duruma göre sırala; URL veya alan adına göre filtrele. Bir
                satıra tıkla, o isteğin bütün detayını yan panelde aç.
              </p>
              <ul className="k-flist">
                <li>Boyuta ve süreye göre en ağır istekler</li>
                <li>Başlıklar, öncelik, başlatıcı ve zamanlama</li>
                <li>CSV olarak dışa aktar</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image src={requestsShot} alt="Knotvo istekler tablosu ekranı" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5 — report */}
      <section className="knotvo-section" aria-labelledby="k-f5">
        <div className="container">
          <div className="k-feature rev">
            <div className="k-txt">
              <div className="k-eyebrow">Paylaşılabilir çıktı</div>
              <h2 id="k-f5">Müşteriye gönderilebilir rapor</h2>
              <p>
                Yönetici özeti ve teknik detay tek belgede. Tek tıkla PDF olarak kaydet, ekibine ya
                da müşterine yolla. Ajans sunumu için hazır bir çıktı.
              </p>
              <ul className="k-flist">
                <li>İş etkisi ve Core Web Vitals durumu bir arada</li>
                <li>Öncelikli aksiyonlar ve hızlı kazanımlar</li>
                <li>Koyu ya da baskıya uygun beyaz tema</li>
              </ul>
            </div>
            <div className="k-shot">
              <Image src={reportsShot} alt="Knotvo rapor ekranı, yönetici özeti ve teknik detay" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
            </div>
          </div>
        </div>
      </section>

      {/* MORE FEATURES grid */}
      <section className="knotvo-section alt" aria-labelledby="k-more">
        <div className="container">
          <div className="k-eyebrow">Dahası</div>
          <h2 id="k-more">Tek uygulamada bütün akış</h2>
          <p className="k-lead">
            Ölçümden paylaşıma kadar her adım burada. Bunların hepsini tek pakette sunan başka bir
            site hızı analiz aracı yok.
          </p>
          <div className="k-grid">
            <div className="k-card"><div className="k-ico" aria-hidden="true">📊</div><h3>Lab ve saha, yan yana</h3><p>&quot;Skor 100 ama Core Web Vitals başarısız&quot; karmaşasını bitirir. Gerçek kullanıcı verisini Lighthouse ölçümüyle yan yana, hangisinin sıralamayı etkilediğini belirterek gösterir.</p></div>
            <div className="k-card"><div className="k-ico" aria-hidden="true">🛡️</div><h3>Güvenli paylaşım</h3><p>HAR dosyaları canlı oturum bilgisi taşır. Tek tıkla çerezleri, yetki başlıklarını ve token&apos;ları temizler, paylaşıma uygun bir kopya üretir. Orijinal dosyana dokunmaz.</p></div>
            <div className="k-card"><div className="k-ico" aria-hidden="true">🔀</div><h3>İki HAR karşılaştırma</h3><p>Yayın öncesi ve sonrası iki kaydı yükle, aralarındaki farkı gör. Ağırlık mı arttı, yeni bir hata mı çıktı, saniyeler içinde anla.</p></div>
            <div className="k-card"><div className="k-ico" aria-hidden="true">🏷️</div><h3>Marka panosu</h3><p>Birden fazla markayı yönet, her sitenin geçmişini tut, haftalık otomatik tarama kur. Skor düştüğünde haberin olsun.</p></div>
            <div className="k-card"><div className="k-ico" aria-hidden="true">🌐</div><h3>Çoklu adres kıyası</h3><p>Birkaç adresi aynı anda ölç ve tek tabloda karşılaştır. Kendi sayfanı benzerleriyle yan yana koy.</p></div>
            <div className="k-card"><div className="k-ico" aria-hidden="true">🔒</div><h3>Varsayılan gizlilik</h3><p>HAR analizi tamamen yereldir, hiçbir şey buluta gitmez. Yalnızca canlı ölçümde girdiğin adres Google&apos;a iletilir, o da açıkça belirtilir.</p></div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="knotvo-section" aria-labelledby="k-why">
        <div className="container">
          <div className="k-eyebrow">Neden Knotvo</div>
          <h2 id="k-why">Günlük işini kolaylaştıran yanları</h2>
          <div className="k-benefits">
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Kota, hesap ve abonelik derdi yok.</b> İstediğin kadar analiz yap, tek seferlik bir uygulama.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>localhost, staging ve VPN arkası sayfalar.</b> Tarayıcıda HAR al, Knotvo&apos;da aç. Bulut araçlarının yapamadığı şey.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Verilerin bilgisayarından çıkmaz.</b> Gizlilik ya da uyumluluk gereken ekipler için rahat bir seçenek.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Skoru değil, işi anlatır.</b> Her bulgu ne yapman gerektiğini söyler.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Native bir Mac uygulaması.</b> Hızlı ve akıcı, bir tarayıcı sekmesi değil.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Lab ve gerçek kullanıcı verisi birlikte.</b> Sıralamayı gerçekte ne etkiliyor, kafan karışmadan gör.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Paylaşırken sır sızdırmaz.</b> HAR&apos;ı temizleyip öyle gönderirsin.</span></div>
            <div className="k-benefit"><span className="chk" aria-hidden="true">✓</span><span><b>Öğrenmesi kolay.</b> Sürükle bırak, gerisini uygulama halleder.</span></div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="knotvo-section alt" aria-labelledby="k-cmp">
        <div className="container">
          <div className="k-eyebrow">Kıyas</div>
          <h2 id="k-cmp">Diğer araç türleriyle karşılaştırma</h2>
          <p className="k-lead">
            Piyasada üç grup araç var ve hiçbiri tam olarak Knotvo&apos;nun durduğu yerde değil.
            Aşağıda marka adı vermeden, tür bazında karşılaştırdık.
          </p>
          <div className="k-tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Yetenek</th>
                  <th className="us">Knotvo</th>
                  <th>Bulut tabanlı hız test araçları</th>
                  <th>Ağ yakalama araçları</th>
                  <th>Ücretsiz HAR görüntüleyiciler</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="feat">HAR&apos;ı yapılacaklar listesine çevirir</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="no">yok</span></td><td><span className="no">yok</span></td></tr>
                <tr><td className="feat">İki HAR karşılaştırma</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="no">yok</span></td><td><span className="no">yok</span></td></tr>
                <tr><td className="feat">localhost ve staging test</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="partial">kısmen</span></td><td><span className="partial">kısmen</span></td></tr>
                <tr><td className="feat">Sır temizleyip güvenli paylaşım</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="no">yok</span></td><td><span className="partial">temel</span></td></tr>
                <tr><td className="feat">Hesap ya da giriş gerektirmez</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="yes">var</span></td><td><span className="yes">var</span></td></tr>
                <tr><td className="feat">Kota ve kuyruk yok</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="yes">var</span></td><td><span className="yes">var</span></td></tr>
                <tr><td className="feat">Veriler cihazda kalır</td><td className="us"><span className="yes">var</span></td><td><span className="no">yok</span></td><td><span className="yes">var</span></td><td><span className="partial">değişir</span></td></tr>
                <tr><td className="feat">Lab ve gerçek kullanıcı verisi bir arada</td><td className="us"><span className="yes">var</span></td><td><span className="partial">ayrı</span></td><td><span className="no">yok</span></td><td><span className="no">yok</span></td></tr>
              </tbody>
            </table>
          </div>
          <p className="k-macnote" style={{ marginTop: 14 }}>
            Kısaca: bulut araçları performans ölçer ama yalnız herkese açık adreslerde, hesap ve
            kotayla. Ağ yakalama araçları isteği gösterir ama performans yorumu yapmaz. Ücretsiz
            görüntüleyiciler HAR&apos;ı açar ama öneri üretmez. Knotvo bu üçünün işe yarayan
            yanlarını tek uygulamada, cihazının içinde birleştirir.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="knotvo-section" aria-labelledby="k-faq">
        <div className="container k-narrow">
          <div className="k-eyebrow" style={{ textAlign: 'center' }}>Sık sorulanlar</div>
          <h2 id="k-faq" style={{ textAlign: 'center', marginBottom: 30 }}>Aklına takılanlar</h2>
          <div className="k-faq">
            <details open><summary>Knotvo tam olarak ne işe yarıyor?</summary><p>Bir site hızı analiz aracıdır. HAR dosyalarını ve canlı ölçümleri inceler; ağ isteklerini, Core Web Vitals değerlerini ve üçüncü taraf yükünü analiz edip hepsini önceliklendirilmiş bir yapılacaklar listesine çevirir.</p></details>
            <details><summary>Verilerim buluta gidiyor mu?</summary><p>HAR analizi tamamen bilgisayarında yapılır, hiçbir şey yüklenmez. Yalnızca canlı ölçüm özelliğini kullandığında, girdiğin adres Google PageSpeed Insights&apos;a gönderilir. Bu durum uygulamada açıkça belirtilir.</p></details>
            <details><summary>localhost ya da staging test edebilir miyim?</summary><p>Evet. Tarayıcında HAR kaydı al, Knotvo&apos;da aç. Bulut araçlarının aksine iç ve özel sayfaları da analiz edebilir. Canlı ölçüm ise yalnız herkese açık adreslerde çalışır.</p></details>
            <details><summary>İçinde şifre olan bir HAR&apos;ı güvenle paylaşabilir miyim?</summary><p>Sanitize özelliğini kullan. Çerezleri, yetki başlıklarını ve token&apos;ları temizleyip paylaşıma uygun bir kopya üretir. Senin orijinal dosyan olduğu gibi kalır.</p></details>
            <details><summary>Hangi cihazlarda çalışıyor?</summary><p>Şu an Mac için var, macOS 14 ve üzeri. Apple Silicon ve Intel işlemcileri destekler.</p></details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="k-cta">
        <div className="container">
          <h2 id="k-cta">Knotvo çıktığında ilk sen haberdar ol</h2>
          <p>
            Mac App Store&apos;da çok yakında. Yayına çıktığında haber almak istersen tek bir
            e-posta yeterli.
          </p>
          <a href={NOTIFY_MAILTO} className="btn btn-primary btn-large">
            Beni Haberdar Et
          </a>
          <p style={{ marginTop: 20 }}>
            <Link href="/knotvo-destek" style={{ textDecoration: 'underline' }}>Destek</Link>
            {' · '}
            <Link href="/knotvo-gizlilik" style={{ textDecoration: 'underline' }}>Gizlilik Politikası</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
