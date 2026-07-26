import type { Metadata } from 'next';
import Link from 'next/link';
import { alternateMetadata } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Nirengi Gizlilik Politikası',
  description: 'Nirengi’nin yerel macOS işlemesi, isteğe bağlı ağ istekleri ve destek iletişiminde verileri nasıl koruduğunu okuyun.',
  alternates: alternateMetadata('/nirengi-gizlilik-politikasi', '/en/nirengi-privacy-policy'),
};

export default function NirengiPrivacyPage() {
  return <main id="main-content" tabIndex={-1} className="nirengi-legal"><article className="container nirengi-narrow">
    <p className="nirengi-eyebrow">Nirengi</p><h1>Gizlilik Politikası</h1><p className="nirengi-updated">Yürürlük ve son güncelleme: 24 Temmuz 2026</p>
    <p className="nirengi-summary"><strong>Kısaca:</strong> Nirengi, seçtiğiniz log dosyalarını veya analiz sonuçlarını yüklemez. İsteğe bağlı ağ özellikleri ve destek iletişimi aşağıda açıklanır.</p>
    <div className="nirengi-policy">
      <section><h2>1. Kapsam</h2><p>Bu politika, Sungur Kerem Gezergün tarafından sunulan Nirengi macOS uygulaması ile ürün, destek ve gizlilik sayfalarını kapsar.</p></section>
      <section><h2>2. Veri toplama</h2><p>Nirengi hesap gerektirmez; reklam, analiz, takip pikseli, telemetri veya çökme raporlama SDK’sı içermez. Log dosyalarınız ve analiz sonuçlarınız uygulama aracılığıyla geliştiriciye gönderilmez.</p></section>
      <section><h2>3. Dosyalar ve cihaz içi işleme</h2><p>Seçtiğiniz dosyalara macOS App Sandbox üzerinden erişilir ve dosyalar yerel olarak işlenir. Sonuçlar ve dışa aktarımlar cihazınızda veya açıkça seçtiğiniz konumda kalır.</p></section>
      <section><h2>4. İsteğe bağlı ağ istekleri</h2><p>Ağ erişimi yalnızca başlattığınız bir özellik için kullanılır: verdiğiniz sitemap adresini veya sitenin robots.txt dosyasını indirmek, desteklenen arama motoru botlarını DNS ile doğrulamak ve ürün/destek bağlantılarını açmak. Bu istekler geliştiriciye ait bir analiz sunucusundan geçmez.</p></section>
      <section><h2>5. Web sitesi verileri</h2><p>Nirengi sayfaları ana sitenin barındırma ve ölçüm altyapısını kullanır. Standart sunucu erişim logları güvenlik ve süreklilik için barındırma sağlayıcısı tarafından oluşturulabilir.</p></section>
      <section><h2>6. Destek iletişimi</h2><p>Destek için gönüllü olarak paylaştığınız bilgiler yalnızca talebinizi yanıtlamak ve sorunu çözmek için kullanılır. Gizli bilgileri temizlenmemiş üretim loglarını göndermeyin.</p></section>
      <section><h2>7. Çocuklar</h2><p>Nirengi profesyonel bir teknik araçtır ve çocuklara yönelik değildir. Uygulama çocuklardan bilerek kişisel bilgi toplamaz.</p></section>
      <section><h2>8. Değişiklikler</h2><p>Veri uygulamaları değişirse bu politika ve App Store gizlilik beyanı ilgili sürümden önce veya sürümle birlikte güncellenir.</p></section>
      <section><h2>9. İletişim</h2><address>Veri sorumlusu ve geliştirici: Sungur Kerem Gezergün<br />E-posta: <a href="mailto:iletisim@keremgezergun.com">iletisim@keremgezergun.com</a><br />Telefon: <a href="tel:+905526902782">+90 552 690 27 82</a></address></section>
    </div><Link className="nirengi-back" href="/nirengi">← Nirengi ürün sayfasına dön</Link>
  </article></main>;
}
