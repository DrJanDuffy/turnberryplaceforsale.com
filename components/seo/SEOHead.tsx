/**
 * SEOHead Component
 * Comprehensive meta tag component following 2025 Google SEO best practices
 * Renders title, description, canonical, Open Graph, Twitter Card, and more
 */

import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getSEOConfig, type SEOConfig } from '../../lib/seo-config'

interface SEOHeadProps {
  /**
   * Page path (e.g., '/towers', '/agent')
   * If not provided, uses current router path
   */
  path?: string
  /**
   * Override any SEO config values
   */
  overrides?: Partial<SEOConfig>
  /**
   * Additional meta tags to include
   */
  additionalMeta?: Array<{
    name?: string
    property?: string
    content: string
  }>
  /**
   * Additional link tags to include
   */
  additionalLinks?: Array<{
    rel: string
    href: string
    hreflang?: string
  }>
}

/**
 * SEOHead Component
 * 
 * Usage:
 * ```tsx
 * <SEOHead path="/towers" />
 * 
 * // With overrides
 * <SEOHead 
 *   path="/towers" 
 *   overrides={{ description: 'Custom description' }}
 * />
 * ```
 */
export function SEOHead({
  path,
  overrides,
  additionalMeta = [],
  additionalLinks = [],
}: SEOHeadProps) {
  const router = useRouter()
  
  // Use provided path or current router path
  const pagePath = path || router.asPath.split('?')[0] // Remove query strings
  
  // Get SEO config for this path
  const seo = getSEOConfig(pagePath, overrides)
  
  // Build robots meta
  const robotsContent = seo.noindex
    ? 'noindex, nofollow'
    : seo.nofollow
    ? 'index, nofollow'
    : seo.robots || 'index, follow'
  
  // Site name for Open Graph
  const siteName = 'Turnberry Place Las Vegas | Luxury Real Estate'
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && seo.keywords.length > 0 && (
        <meta name="keywords" content={seo.keywords.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={seo.canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
      {seo.ogImageAlt && (
        <meta property="og:image:alt" content={seo.ogImageAlt} />
      )}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonical} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
      {seo.ogImageAlt && (
        <meta name="twitter:image:alt" content={seo.ogImageAlt} />
      )}
      <meta name="twitter:site" content="@TurnberryPlaceLV" />
      
      {/* Hreflang for Spanish (Google Translate) */}
      <link
        rel="alternate"
        hrefLang="en"
        href={seo.canonical}
      />
      <link
        rel="alternate"
        hrefLang="es"
        href={`https://translate.google.com/translate?hl=es&sl=auto&tl=es&u=${encodeURIComponent(seo.canonical)}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={seo.canonical}
      />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta
          key={index}
          {...(meta.name ? { name: meta.name } : {})}
          {...(meta.property ? { property: meta.property } : {})}
          content={meta.content}
        />
      ))}
      
      {/* Additional Link Tags */}
      {additionalLinks.map((link, index) => (
        <link
          key={index}
          rel={link.rel}
          href={link.href}
          {...(link.hreflang ? { hrefLang: link.hreflang } : {})}
        />
      ))}
    </Head>
  )
}

/**
 * SimpleSEOHead - Minimal version for quick implementation
 * Just requires title and description
 */
interface SimpleSEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SimpleSEOHead({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
}: SimpleSEOHeadProps) {
  const router = useRouter()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'
  const canonicalUrl = canonical || `${baseUrl}${router.asPath.split('?')[0]}`
  const ogImageUrl = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`)
    : `${baseUrl}/images/turnberry/Turnberry_Place_For_Sale.jpg`
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Turnberry Place Las Vegas | Luxury Real Estate" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  )
}
