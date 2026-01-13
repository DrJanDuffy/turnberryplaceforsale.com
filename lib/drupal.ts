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

// Create Drupal client - will only be used if baseUrl is set (checked before use)
// Using a non-routable IP to prevent actual network calls when not configured
export const drupal = new DrupalClient(
  baseUrl || "http://127.0.0.1:0",
  {
    frontPage: "/home",
    ...authConfig,
  }
)

// Export a helper to check if Drupal is configured
export const isDrupalConfigured = (): boolean => {
  return !!baseUrl
}
