/**
 * Linkify Utility
 * Automatically converts key terms in text to internal links
 * Helps with contextual internal linking for SEO
 */

import React from 'react'
import Link from 'next/link'

export interface LinkTerm {
  term: string | RegExp
  href: string
  className?: string
  title?: string
}

// Default link terms for Turnberry Place
export const defaultLinkTerms: LinkTerm[] = [
  {
    term: /\bfloor plans?\b/gi,
    href: '/floor-plans',
    title: 'View Turnberry Place floor plans',
  },
  {
    term: /\bStirling Club\b/g,
    href: '/stirling-club',
    title: 'Learn about The Stirling Club',
  },
  {
    term: /\bTurnberry Place\b/g,
    href: '/',
    title: 'Turnberry Place homepage',
  },
  {
    term: /\bTower 1\b/g,
    href: '/towers#tower-1',
    title: 'Learn about Tower 1',
  },
  {
    term: /\bTower 2\b/g,
    href: '/towers#tower-2',
    title: 'Learn about Tower 2',
  },
  {
    term: /\bTower 3\b/g,
    href: '/towers#tower-3',
    title: 'Learn about Tower 3',
  },
  {
    term: /\bTower 4\b/g,
    href: '/towers#tower-4',
    title: 'Learn about Tower 4',
  },
  {
    term: /\b(contact|schedule showing|schedule a showing|book a tour)\b/gi,
    href: '/request-details',
    title: 'Schedule a private showing',
  },
  {
    term: /\bavailable condos?\b/gi,
    href: '/available-condos',
    title: 'Browse available condos',
  },
  {
    term: /\b(current listings|listings|for sale)\b/gi,
    href: '/available-condos',
    title: 'View current listings',
  },
  {
    term: /\bamenities\b/gi,
    href: '/amenities',
    title: 'View all amenities',
  },
  {
    term: /\bneighborhood\b/gi,
    href: '/neighborhood',
    title: 'Explore the neighborhood',
  },
  {
    term: /\bDr\. Jan Duffy\b/g,
    href: '/agent',
    title: 'Learn about Dr. Jan Duffy',
  },
]

interface LinkifyOptions {
  /**
   * Custom link terms (overrides defaults)
   */
  terms?: LinkTerm[]
  /**
   * Maximum links per term (default: 1)
   */
  maxLinksPerTerm?: number
  /**
   * Custom className for links
   */
  linkClassName?: string
  /**
   * Whether to use default terms (default: true)
   */
  useDefaults?: boolean
}

/**
 * Linkify text content - converts terms to internal links
 * 
 * @param text - Text content to linkify
 * @param options - Configuration options
 * @returns React node with linked content
 * 
 * Usage:
 * ```tsx
 * <p>{linkifyContent('Check out our floor plans and Stirling Club amenities')}</p>
 * ```
 */
export function linkifyContent(
  text: string,
  options: LinkifyOptions = {}
): React.ReactNode {
  const {
    terms = [],
    maxLinksPerTerm = 1,
    linkClassName = 'text-blue-600 hover:text-blue-800 underline',
    useDefaults = true,
  } = options

  // Combine default and custom terms
  const allTerms = useDefaults ? [...defaultLinkTerms, ...terms] : terms

  if (!text || allTerms.length === 0) {
    return text
  }

  // Track how many times each term has been linked
  const linkCounts = new Map<string, number>()

  let result: React.ReactNode[] = []
  let lastIndex = 0
  let currentText = text

  // Process each term
  for (const linkTerm of allTerms) {
    const pattern = linkTerm.term instanceof RegExp ? linkTerm.term : new RegExp(linkTerm.term, 'gi')
    const matches = Array.from(currentText.matchAll(pattern))

    for (const match of matches) {
      if (match.index === undefined) continue

      const termKey = linkTerm.href
      const count = linkCounts.get(termKey) || 0

      // Skip if we've already linked this term enough times
      if (count >= maxLinksPerTerm) {
        continue
      }

      linkCounts.set(termKey, count + 1)

      // Split text around the match
      const beforeMatch = currentText.substring(0, match.index)
      const matchText = match[0]
      const afterMatch = currentText.substring(match.index + matchText.length)

      // Add text before match
      if (beforeMatch) {
        result.push(beforeMatch)
      }

      // Add linked term
      result.push(
        <Link
          key={`${linkTerm.href}-${count}`}
          href={linkTerm.href}
          className={linkTerm.className || linkClassName}
          title={linkTerm.title}
        >
          {matchText}
        </Link>
      )

      // Update currentText to continue processing
      currentText = afterMatch
      lastIndex = 0
      break // Process one match at a time
    }
  }

  // Add remaining text
  if (currentText) {
    result.push(currentText)
  }

  // If no links were created, return original text
  if (result.length === 1 && typeof result[0] === 'string') {
    return text
  }

  return <>{result}</>
}

/**
 * Simple linkify - just returns string with HTML (for dangerouslySetInnerHTML)
 * Use with caution - prefer linkifyContent for React components
 */
export function linkifyText(
  text: string,
  options: LinkifyOptions = {}
): string {
  const {
    terms = [],
    maxLinksPerTerm = 1,
    linkClassName = 'text-blue-600 hover:text-blue-800 underline',
    useDefaults = true,
  } = options

  const allTerms = useDefaults ? [...defaultLinkTerms, ...terms] : terms

  if (!text || allTerms.length === 0) {
    return text
  }

  const linkCounts = new Map<string, number>()
  let result = text

  for (const linkTerm of allTerms) {
    const pattern = linkTerm.term instanceof RegExp ? linkTerm.term : new RegExp(linkTerm.term, 'gi')
    const matches = Array.from(result.matchAll(pattern))

    for (const match of matches) {
      if (match.index === undefined) continue

      const termKey = linkTerm.href
      const count = linkCounts.get(termKey) || 0

      if (count >= maxLinksPerTerm) {
        continue
      }

      linkCounts.set(termKey, count + 1)

      const matchText = match[0]
      const className = linkTerm.className || linkClassName
      const title = linkTerm.title ? ` title="${linkTerm.title}"` : ''
      const link = `<a href="${linkTerm.href}" class="${className}"${title}>${matchText}</a>`

      result = result.replace(match[0], link)
    }
  }

  return result
}
