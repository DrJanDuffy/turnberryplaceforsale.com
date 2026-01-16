/**
 * Table of Contents Component
 * Sticky sidebar TOC for long pages
 */

import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  /**
   * Array of TOC items (H2 and H3 headings)
   */
  items: TOCItem[]
  /**
   * Custom className
   */
  className?: string
  /**
   * Show on mobile (default: false)
   */
  showOnMobile?: boolean
}

/**
 * TableOfContents Component
 * 
 * Features:
 * - Sticky sidebar on desktop
 * - Highlights active section
 * - Smooth scroll to sections
 * - Mobile-friendly toggle
 * 
 * Usage:
 * ```tsx
 * <TableOfContents items={[
 *   { id: 'tower-1', text: 'Tower 1', level: 2 },
 *   { id: 'tower-2', text: 'Tower 2', level: 2 },
 * ]} />
 * ```
 */
export function TableOfContents({
  items,
  className = '',
  showOnMobile = false,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (items.length === 0) return

    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all heading elements
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setActiveId(id)
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      {!showOnMobile && (
        <button
          type="button"
          className="lg:hidden fixed bottom-20 right-4 z-40 bg-gold-600 text-white p-3 rounded-full shadow-lg hover:bg-gold-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle table of contents"
        >
          <span className="text-sm font-medium">Contents</span>
        </button>
      )}

      {/* TOC Sidebar */}
      <aside
        className={`table-of-contents ${
          showOnMobile ? 'block' : 'hidden lg:block'
        } ${isOpen ? 'block' : 'hidden'} ${className}`}
      >
        <div className="toc-container sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <nav aria-label="Table of contents">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Contents
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={`toc-item ${
                    item.level === 3 ? 'ml-4' : ''
                  } ${activeId === item.id ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className={`text-left w-full text-sm py-1 px-2 rounded transition-colors ${
                      activeId === item.id
                        ? 'text-gold-600 font-semibold bg-gold-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <style jsx>{`
        .table-of-contents {
          position: fixed;
          left: 2rem;
          top: 8rem;
          width: 240px;
          z-index: 30;
        }

        @media (max-width: 1024px) {
          .table-of-contents {
            position: fixed;
            left: 0;
            top: 0;
            width: 280px;
            height: 100vh;
            background: white;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            overflow-y: auto;
          }
        }

        .toc-container {
          padding: 1rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        }

        .toc-item.active button {
          border-left: 3px solid #d4af37;
        }
      `}</style>
    </>
  )
}
