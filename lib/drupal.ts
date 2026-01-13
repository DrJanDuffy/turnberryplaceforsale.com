import { DrupalClient } from "next-drupal"

// Validate required environment variable
const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

// Only show warning in development, not during build
if (!baseUrl && process.env.NODE_ENV === 'development') {
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

// Use a valid but non-functional URL when baseUrl is not set to prevent fetch errors
// This URL will never be called if we check for baseUrl before using drupal methods
export const drupal = new DrupalClient(
  baseUrl || "https://localhost",
  {
    frontPage: "/home",
    ...authConfig,
  }
)

// Export a helper to check if Drupal is configured
export const isDrupalConfigured = (): boolean => {
  return !!baseUrl
}
