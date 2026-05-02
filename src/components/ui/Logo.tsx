import Image from 'next/image';
import Link from 'next/link';

const HEADER_WIDTH = 180;
const FOOTER_WIDTH = 220;
const ASPECT_RATIO = 960 / 316;

export default function Logo({ variant = 'header' }: { variant?: 'header' | 'footer' }) {
  const width = variant === 'footer' ? FOOTER_WIDTH : HEADER_WIDTH;
  const height = Math.round(width / ASPECT_RATIO);

  return (
    <Link
      href="/"
      className={`logo-mark logo-mark--${variant}`}
      aria-label="Kerem Gezergün — Ana Sayfa"
    >
      <Image
        src="/images/logo/kerem-gezergun-logo.png"
        alt="Kerem Gezergün"
        width={width}
        height={height}
        priority={variant === 'header'}
        sizes={variant === 'header' ? '(max-width: 768px) 140px, 180px' : '220px'}
      />
    </Link>
  );
}
