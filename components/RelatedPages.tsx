/**
 * RelatedPages Component
 * Displays related page links at the bottom of content for internal linking and SEO
 */

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getRelatedPages, type RelatedPage } from '../lib/related-pages'

interface RelatedPagesProps {
  /**
   * Current page path (e.g., '/towers', '/stirling-club')
   * If not provided, uses current router path
   */
  path?: string
  /**
   * Custom related pages (overrides config)
   */
  pages?: RelatedPage[]
  /**
   * Optional heading text
   */
  heading?: string
  /**
   * Custom className
   */
  className?: string
}

/**
 * RelatedPages Component
 * 
 * Features:
 * - Displays 3-4 related page links
 * - Card-based design with hover effects
 * - Arrow icons for visual indication
 * - Mobile responsive
 * - SEO-friendly internal linking
 * 
 * Usage:
 * ```tsx
 * <RelatedPages path="/towers" />
 * 
 * // Or with custom pages
 * <RelatedPages pages={customPages} />
 * ```
 */
export function RelatedPages({
  path,
  pages,
  heading = 'Related Pages',
  className = '',
}: RelatedPagesProps) {
  // Get related pages from config or use provided
  const relatedPages = pages || getRelatedPages(path || '/')

  if (!relatedPages || relatedPages.length === 0) {
    return null
  }

  return (
    <section
      className={`related-pages py-12 md:py-16 bg-gray-50 ${className}`}
      aria-label="Related Pages"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
            {heading}
          </h2>
          <p className="text-gray-600 text-lg">
            Explore more about Turnberry Place Las Vegas
          </p>
        </div>

        {/* Related Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="related-page-card group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gold-500 overflow-hidden"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Card Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {page.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex items-center text-gold-600 group-hover:text-gold-700 font-medium text-sm">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .related-page-card {
          transition: transform 0.2s ease-in-out;
        }

        .related-page-card:hover {
          transform: translateY(-4px);
        }

        /* Gold color fallback */
        .group-hover\\:text-gold-600:hover {
          color: #d4af37;
        }

        .group-hover\\:text-gold-700:hover {
          color: #b8941f;
        }

        .hover\\:border-gold-500:hover {
          border-color: #d4af37;
        }
      `}</style>
    </section>
  )
}

/**
 * Simple Related Pages (minimal styling)
 */
interface SimpleRelatedPagesProps {
  path?: string
  pages?: RelatedPage[]
  className?: string
}

export function SimpleRelatedPages({
  path,
  pages,
  className = '',
}: SimpleRelatedPagesProps) {
  const relatedPages = pages || getRelatedPages(path || '/')

  if (!relatedPages || relatedPages.length === 0) {
    return null
  }

  return (
    <nav
      className={`simple-related-pages py-8 ${className}`}
      aria-label="Related Pages"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          You might also be interested in:
        </h3>
        <ul className="flex flex-wrap gap-4">
          {relatedPages.map((page, index) => (
            <li key={index}>
              <Link
                href={page.href}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
