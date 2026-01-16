/**
 * Breadcrumb navigation component with automatic BreadcrumbList schema
 * Provides both visual navigation and structured data for SEO
 */

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbSchema } from '../../lib/schema/generators'
import { SchemaMarkup } from './SchemaMarkup'
import type { BreadcrumbItem } from '../../lib/schema/types'

interface BreadcrumbsProps {
  /**
   * Array of breadcrumb items with name and href
   * First item should typically be "Home" with href "/"
   */
  items: BreadcrumbItem[]
  /**
   * Optional className for custom styling
   */
  className?: string
  /**
   * Show home icon for first item
   * @default true
   */
  showHomeIcon?: boolean
}

/**
 * Breadcrumbs Component
 * 
 * Usage:
 * ```tsx
 * <Breadcrumbs items={[
 *   { name: 'Home', url: '/' },
 *   { name: 'Towers', url: '/towers' },
 *   { name: 'Tower 1', url: '/towers/tower-1' }
 * ]} />
 * ```
 */
export function Breadcrumbs({
  items,
  className = '',
  showHomeIcon = true,
}: BreadcrumbsProps) {
  // Generate schema for SEO
  const breadcrumbSchema = generateBreadcrumbSchema(items)

  // Don't render if no items
  if (!items || items.length === 0) {
    return null
  }

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <SchemaMarkup schema={breadcrumbSchema} key="breadcrumb-schema" />

      {/* Visual Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const isFirst = index === 0

            return (
              <li
                key={item.url}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  // Current page - not a link
                  <span
                    className="text-gray-600 dark:text-gray-400 font-medium"
                    itemProp="name"
                  >
                    {isFirst && showHomeIcon ? (
                      <span className="flex items-center gap-1.5">
                        <Home size={16} aria-hidden="true" />
                        {item.name}
                      </span>
                    ) : (
                      item.name
                    )}
                  </span>
                ) : (
                  // Link to other pages
                  <>
                    <Link
                      href={item.url}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">
                        {isFirst && showHomeIcon ? (
                          <span className="flex items-center gap-1.5">
                            <Home size={16} aria-hidden="true" />
                            {item.name}
                          </span>
                        ) : (
                          item.name
                        )}
                      </span>
                    </Link>
                    <ChevronRight
                      size={16}
                      className="text-gray-400 mx-2"
                      aria-hidden="true"
                    />
                  </>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

/**
 * Simple Breadcrumbs variant without icons
 * For minimal styling needs
 */
export function SimpleBreadcrumbs({
  items,
  className = '',
}: BreadcrumbsProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(items)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} key="breadcrumb-schema" />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center space-x-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.url} className="flex items-center">
                {isLast ? (
                  <span className="text-gray-600">{item.name}</span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
