'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300
      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow)
        // Track sticky CTA appearance
        if (shouldShow && typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'sticky_cta_shown', {
            event_category: 'engagement',
            event_label: 'sticky_cta_appeared'
          })
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const handleCTAClick = (type: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sticky_cta_click', {
        event_category: 'engagement',
        event_label: `sticky_cta_${type}`
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="sticky-cta-bar d-lg-none fixed-bottom bg-primary text-white p-3 shadow-lg z-50">
      <div className="container-fluid px-3">
        <div className="row align-items-center no-gutters">
          <div className="col-7">
            <a 
              href="tel:7022221964" 
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => handleCTAClick('phone')}
            >
              <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.65 11.5a.678.678 0 0 1-.58-.122L6.864 9.65a.678.678 0 0 1-.122-.58l.122-2.307a.678.678 0 0 0-.122-.58L4.682 3.654a.678.678 0 0 0-.028-.326z"/>
              </svg>
              <strong>(702) 222-1964</strong>
            </a>
          </div>
          <div className="col-5 text-right">
            <Link 
              href="/request-details" 
              className="btn btn-warning btn-sm font-weight-bold"
              onClick={() => handleCTAClick('tour')}
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
