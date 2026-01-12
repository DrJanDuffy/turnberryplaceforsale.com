import { DrupalClient } from "next-drupal"

// Validate required environment variable
const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

if (!baseUrl) {
  console.warn(
    "Warning: NEXT_PUBLIC_DRUPAL_BASE_URL is not set. Drupal features will not work."
  )
}

// Only set up auth if we have a real base URL and credentials
const authConfig = baseUrl && process.env.DRUPAL_CLIENT_ID && process.env.DRUPAL_CLIENT_SECRET
  ? {
      auth: {
        clientId: process.env.DRUPAL_CLIENT_ID,
        clientSecret: process.env.DRUPAL_CLIENT_SECRET,
      },
    }
  : {}

export const drupal = new DrupalClient(
  baseUrl || "https://placeholder.drupal.site",
  {
    frontPage: "/home",
    ...authConfig,
  }
)
