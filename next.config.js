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
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: {
    domains: getImageDomain(),
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
