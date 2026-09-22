/** Form strings, in a plain module: the server-rendered page reads the
 * status messages for its no-JavaScript :target fallback, and a client
 * module's non-component exports are not readable from a server component. */
export const formCopy = {
  name: { tr: 'Adınız', en: 'Your name' },
  email: { tr: 'E-posta', en: 'Email' },
  topic: { tr: 'Konu', en: 'Topic' },
  message: { tr: 'Mesajınız', en: 'Message' },
  send: { tr: 'Gönder', en: 'Send' },
  sending: { tr: 'Gönderiliyor…', en: 'Sending…' },
  sent: {
    tr: 'Mesajınız ulaştı. En geç birkaç gün içinde e-postayla dönüş yaparım.',
    en: 'Your message is in. I reply by email, usually within a few days.',
  },
  errors: {
    invalid: { tr: 'Lütfen tüm alanları doldurun; mesaj en az 10 karakter olmalı.', en: 'Please fill in every field; the message needs at least 10 characters.' },
    spam: { tr: 'Gönderim çok hızlı oldu, lütfen tekrar deneyin.', en: 'That was too quick — please try again.' },
    rate: { tr: 'Kısa sürede çok fazla mesaj gönderildi. Biraz sonra tekrar deneyin.', en: 'Too many messages in a short time. Please try again later.' },
    config: { tr: 'Form şu an gönderemiyor; e-posta ile yazabilirsiniz.', en: 'The form cannot send right now; please email instead.' },
    send: { tr: 'Gönderilemedi; e-posta ile yazabilirsiniz.', en: 'Could not send; please email instead.' },
    network: { tr: 'Bağlantı hatası; lütfen tekrar deneyin.', en: 'Connection error; please try again.' },
  },
  topics: {
    training: { tr: 'Eğitim / workshop', en: 'Training / workshop' },
    speaking: { tr: 'Konuşmacılık', en: 'Speaking' },
    podcast: { tr: 'Podcast konukluğu', en: 'Podcast guest' },
    product: { tr: 'Ürün geri bildirimi (Nirengi, Knotvo, Crawlseer)', en: 'Product feedback (Nirengi, Knotvo, Crawlseer)' },
    other: { tr: 'Diğer', en: 'Other' },
  },
} as const;

export type ErrorCode = keyof typeof formCopy.errors;
