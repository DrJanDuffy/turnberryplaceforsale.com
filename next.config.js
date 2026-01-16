/**
 * Next.js Configuration
 * Built with Cursor AI, deployed on Vercel, version controlled on GitHub
 */

function getImageDomain() {
  if (process.env.NEXT_IMAGE_DOMAIN) {
    return [process.env.NEXT_IMAGE_DOMAIN]
  }
  if (process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
    try {
      const url = new URL(process.env.NEXT_PUBLIC_DRUPAL_BASE_URL)
      return [url.hostname]
    } catch {
      // Invalid URL, return empty array
    }
  }
  return []
}

module.exports = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: {
    domains: getImageDomain(),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.cribflyer-proxy.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.cribflyer-proxy.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Encourage long CDN caching for optimized images.
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Strong caching for locally hosted gallery images
        source: '/images/turnberry/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect old/legacy routes to current pages (301 permanent redirects)
      {
        source: '/ap',
        destination: '/agent',
        permanent: true,
      },
      {
        source: '/lc',
        destination: '/available-condos',
        permanent: true,
      },
      {
        source: '/tour',
        destination: '/available-condos',
        permanent: true,
      },
      {
        source: '/tour/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/ub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ub/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/accessibility',
        permanent: true,
      },
      // Redirect old property address pages to map page
      {
        source: '/2877-paradise-rd',
        destination: '/map',
        permanent: true,
      },
      // Redirect old API/legacy routes
      {
        source: '/visit-api',
        destination: '/available-condos',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "/blog/page/0",
      },
      {
        source: "/es",
        destination: "/es/home",
        locale: false,
      },
      {
        source: "/en/principal",
        destination: "/",
        locale: false,
      },
    ]
  },
}
