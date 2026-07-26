import { Inter, Playfair_Display } from 'next/font/google';

// Shared by both root layouts (TR and EN). Declaring the font once keeps a
// single font instance in the build instead of one per root layout.
export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// preload: false on purpose. The font is display:swap, so preloading it buys
// nothing for first paint — it only claims 59,440 bytes of High-priority
// bandwidth ahead of the LCP image. Playfair appears in 8 declarations
// (display headings); it swaps in a few hundred ms later with no layout shift,
// because next/font already emits metric-adjusted fallback metrics.
export const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: false,
  variable: '--font-playfair',
});

export const fontVariables = `${inter.variable} ${playfair.variable}`;
