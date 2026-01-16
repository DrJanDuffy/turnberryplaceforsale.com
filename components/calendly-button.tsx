'use client'

import React, { useState, useEffect } from 'react'

interface CalendlyButtonProps {
  url?: string
  text?: string
  className?: string
}

export default function CalendlyButton({
  url = 'https://calendly.com/drjanduffy/1-home-tour-30-mins',
  text = 'Schedule Tour',
  className = ''
}: CalendlyButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.body.appendChild(script)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const openCalendly = () => {
    if (isLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url })
    } else {
      // Fallback: open in new tab
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <button
        onClick={openCalendly}
        className={`inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${className}`}
        aria-label={`${text} with Dr. Jan Duffy`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {text}
      </button>
    </>
  )
}
