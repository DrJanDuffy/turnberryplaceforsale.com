'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = sessionStorage.getItem('exitIntentShown')
    if (hasSeenPopup) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  if (!showPopup) return null

  return (
    <div className="exit-intent-overlay fixed-top w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999 }}>
      <div className="exit-intent-popup bg-white p-4 rounded shadow-lg" style={{ maxWidth: '500px', width: '90%' }}>
        <button
          className="close-btn float-right border-0 bg-transparent"
          onClick={() => setShowPopup(false)}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="mb-3">Wait! Before You Go...</h3>
        <p className="mb-4">
          Get instant access to Turnberry Place's available luxury condos and schedule your private tour today.
        </p>
        <div className="d-flex flex-column gap-2">
          <a href="tel:7022221964" className="btn btn-primary btn-lg font-weight-bold">
            Call (702) 222-1964
          </a>
          <Link href="/request-details" className="btn btn-outline-primary btn-lg">
            Request Details
          </Link>
        </div>
      </div>
    </div>
  )
}
