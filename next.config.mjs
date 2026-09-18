/** @type {import('next').NextConfig} */

// React's dev build calls eval() to rebuild server-component call stacks and
// logs a console error when the CSP forbids it. Production never evals, so
// the directive is loosened only for `next dev`.
const scriptSrcDev = process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : '';

const ContentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${scriptSrcDev} https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com`,
  "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://www.gstatic.com https://www.google-analytics.com https://www.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://cloudflareinsights.com https://static.cloudflareinsights.com",
  // The redirect matcher runs its comparison in a Web Worker. Turbopack 16.2+
  // serves the worker from a same-origin /_next/static/chunks URL, which
  // default-src already allows; naming worker-src explicitly removes that
  // fallback, so a future regression back to a blob: URL breaks loudly here
  // instead of silently in the browser. blob: is deliberately not listed.
  "worker-src 'self'",
  // The e-ticaret-seo guide embeds a Spotify podcast episode in an iframe.
  "frame-src https://open.spotify.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Isolates the top-level window from any document it opens or is opened by.
  // Lighthouse flags a missing COOP as high severity; the site opens only
  // plain external links, so same-origin costs us nothing.
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    // Required for src/app/global-not-found.tsx. With two root layouts
    // ((tr)/(en)) neither group's not-found.tsx can own unmatched URLs, so the
    // global convention supplies the full document instead of Next's bare
    // built-in fallback.
    globalNotFound: true,
  },
  images: {
    // Default is 4 hours, which makes repeat visitors revalidate optimized
    // images constantly. The sources are content images that change with a
    // deploy, and the URL carries a query hash, so a long TTL is safe.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
