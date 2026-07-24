import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nirengi Destek ve İletişim',
  description: 'Nirengi macOS SEO log analiz aracı için format, rapor, dışa aktarım, gizlilik ve performans desteği alın.',
  alternates: { canonical: 'https://www.keremgezergun.com/nirengi-iletisim' },
};

const supportRows = [
  ['Log açılamıyor', 'macOS ve Nirengi sürümü, dosya uzantısı, yaklaşık boyut ve dosyanın konumu'],
  ['Desteklenmeyen format', 'Sunucu/CDN ürünü ve gerçek verileri temizlenmiş birkaç örnek satır'],
  ['Beklenmeyen rapor', 'Rapor adı, uygulanan filtre, beklenen sonuç ve farkı gösteren anonim örnek'],
  ['Sitemap veya robots.txt', 'Herkese açık URL, biliniyorsa HTTP durumu ve gösterilen uyarı'],
  ['Dışa aktarım sorunu', 'CSV veya HTML türü, hedef konum, boş disk alanı ve hata mesajı'],
  ['Performans', 'Mac modeli, bellek, girdi boyutu, geçen süre ve bot doğrulama durumu'],
];

export default function NirengiContactPage() {
  return <main id="main-content" className="nirengi-legal" role="main"><div className="container nirengi-narrow">
    <p className="nirengi-eyebrow">Nirengi</p><h1>Destek ve iletişim</h1><p className="nirengi-lead">Log formatı, analiz sonucu, gizlilik veya dışa aktarım konusunda yardıma mı ihtiyacınız var? Geliştiriciyle doğrudan iletişim kurun.</p>
    <div className="nirengi-contact-grid"><a href="mailto:iletisim@keremgezergun.com?subject=Nirengi%20Destek"><span>E-posta</span><strong>iletisim@keremgezergun.com</strong></a><a href="tel:+905526902782"><span>Telefon</span><strong>+90 552 690 27 82</strong></a></div>
    <section aria-labelledby="request-title"><h2 id="request-title">Destek talebine neleri eklemelisiniz?</h2><div className="nirengi-table-wrap" tabIndex={0} role="region" aria-label="Destek talebi için gereken bilgiler"><table><thead><tr><th scope="col">Sorun</th><th scope="col">Yararlı bilgiler</th></tr></thead><tbody>{supportRows.map(([issue, info]) => <tr key={issue}><th scope="row">{issue}</th><td>{info}</td></tr>)}</tbody></table></div>
    <p className="nirengi-note"><strong>Güvenlik notu:</strong> IP adresleri, alan adları, URL’ler, çerezler, erişim belirteçleri ve diğer gizli bilgiler temizlenmeden üretim loglarını e-postayla göndermeyin. Nirengi desteği Apple ID parolanızı veya doğrulama kodunuzu istemez.</p></section>
    <Link className="nirengi-back" href="/nirengi">← Nirengi ürün sayfasına dön</Link>
  </div></main>;
}
