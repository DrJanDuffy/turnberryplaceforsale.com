/**
 * BackToTop Component
 * Floating button to scroll back to top of page
 */

import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

interface BackToTopProps {
  /**
   * Show button after scrolling this many pixels (default: 400)
   */
  showAfter?: number
  /**
   * Custom className
   */
  className?: string
  /**
   * Offset from bottom (default: 2rem)
   */
  bottomOffset?: string
  /**
   * Offset from right (default: 2rem)
   */
  rightOffset?: string
}

/**
 * BackToTop Component
 * 
 * Features:
 * - Appears after scrolling down
 * - Smooth scroll to top
 * - Accessible with ARIA labels
 * - Customizable position
 * 
 * Usage:
 * ```tsx
 * <BackToTop showAfter={400} />
 * ```
 */
export function BackToTop({
  showAfter = 400,
  className = '',
  bottomOffset = '2rem',
  rightOffset = '2rem',
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [showAfter])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top fixed z-50 bg-gold-600 text-white p-3 rounded-full shadow-lg hover:bg-gold-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${className}`}
      aria-label="Back to top"
      style={{
        bottom: bottomOffset,
        right: rightOffset,
      }}
    >
      <ChevronUp className="w-5 h-5" aria-hidden="true" />
    </button>
  )
}
