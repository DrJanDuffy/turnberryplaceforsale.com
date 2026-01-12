'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="sticky-cta-bar d-lg-none fixed-bottom bg-primary text-white p-3 shadow-lg z-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <a href="tel:7022221964" className="text-white text-decoration-none">
              <strong>(702) 222-1964</strong>
            </a>
          </div>
          <div className="col-4 text-right">
            <Link href="/request-details" className="btn btn-warning btn-sm font-weight-bold">
              Schedule Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
