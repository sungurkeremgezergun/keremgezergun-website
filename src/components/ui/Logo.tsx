import Link from 'next/link';

export default function Logo({ variant = 'header' }: { variant?: 'header' | 'footer' }) {
  return (
    <Link
      href="/"
      className={`logo-mark logo-mark--${variant}`}
      aria-label="Kerem Gezergün Ana Sayfa"
    >
      <span className="logo-monogram">
        KG<span className="logo-dot">.</span>
      </span>
      <span className="logo-name">Kerem Gezergün</span>
    </Link>
  );
}
