import { Inter, Playfair_Display } from 'next/font/google';

// Shared by both root layouts (TR and EN). Declaring the font once keeps a
// single font instance in the build instead of one per root layout.
export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-playfair',
});

export const fontVariables = `${inter.variable} ${playfair.variable}`;
