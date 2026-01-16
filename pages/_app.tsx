import * as React from "react"
import Router from "next/router"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query"
import NProgress from "nprogress"
import { syncDrupalPreviewRoutes } from "next-drupal"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../lib/schema/generators"
import "nprogress/nprogress.css"

import "styles/globals.css"
import "styles/fonts.css"

NProgress.configure({ showSpinner: false })

Router.events.on("routeChangeStart", function (path) {
  syncDrupalPreviewRoutes(path)
  NProgress.start()
})
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default function App({ Component, pageProps }) {
  const queryClientRef = React.useRef<QueryClient | null>(null)
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  // Sitewide schemas - appear on every page
  const sitewideSchemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
  ]

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* Sitewide JSON-LD structured data */}
        <SchemaMarkup schema={sitewideSchemas} key="sitewide-schemas" />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </Hydrate>
    </QueryClientProvider>
  )
}
