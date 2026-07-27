import Image from 'next/image';
import Link from 'next/link';

const HEADER_WIDTH = 180;
const FOOTER_WIDTH = 220;
const ASPECT_RATIO = 960 / 316;

export default function Logo({ variant = 'header', href = '/' }: { variant?: 'header' | 'footer'; href?: string }) {
  const width = variant === 'footer' ? FOOTER_WIDTH : HEADER_WIDTH;
  const height = Math.round(width / ASPECT_RATIO);

  return (
    <Link
      href={href}
      className={`logo-mark logo-mark--${variant}`}
      aria-label={`Kerem Gezergün — ${href.startsWith('/en') ? 'Home' : 'Ana Sayfa'}`}
    >
      <Image
        src="/images/logo/kerem-gezergun-logo.png"
        alt="Kerem Gezergün"
        width={width}
        height={height}
        // No `priority`: preloading a 180px logo would put a competing request
        // ahead of the real LCP element. But it is above the fold, so it must
        // not be lazy either — without this Next defaults to loading="lazy".
        loading={variant === 'header' ? 'eager' : 'lazy'}
        sizes={variant === 'header' ? '(max-width: 768px) 140px, 180px' : '220px'}
      />
    </Link>
  );
}
