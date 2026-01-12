'use client'

import { useState, useEffect } from 'react'

interface DynamicUnitCountProps {
  defaultCount?: number
  elementId?: string
}

export function DynamicUnitCount({ defaultCount = 12, elementId = 'available-units-count' }: DynamicUnitCountProps) {
  const [count, setCount] = useState(defaultCount)

  useEffect(() => {
    // Try to get count from RealScout widget if available
    const updateCount = () => {
      try {
        // RealScout widget might expose listing count
        const widget = document.querySelector('realscout-office-listings')
        if (widget) {
          // Listen for custom events or check shadow DOM
          // For now, we'll use a mutation observer to detect when listings load
          const observer = new MutationObserver(() => {
            const listings = document.querySelectorAll('realscout-office-listings [data-listing-id]')
            if (listings.length > 0) {
              setCount(listings.length)
            }
          })
          
          observer.observe(widget, { childList: true, subtree: true })
          
          // Cleanup after 10 seconds
          setTimeout(() => observer.disconnect(), 10000)
        }
      } catch (error) {
        // Silently fail - use default count
        console.debug('Could not update unit count dynamically')
      }
    }

    // Try to update after a delay to allow widget to load
    const timeout = setTimeout(updateCount, 2000)
    
    return () => clearTimeout(timeout)
  }, [])

  return <span id={elementId} className="text-warning">{count}</span>
}
