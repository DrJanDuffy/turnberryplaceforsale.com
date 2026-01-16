'use client'

import React, { useEffect } from 'react'

interface CalendlyEmbedProps {
  url?: string
  minWidth?: string
  height?: string
}

export default function CalendlyEmbed({ 
  url = 'https://calendly.com/drjanduffy/1-home-tour-30-mins',
  minWidth = '320px',
  height = '700px'
}: CalendlyEmbedProps) {
  
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 px-6 py-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Schedule a Private Tour
        </h2>
        <p className="text-amber-100 text-sm mt-1">
          Book a 30-minute private showing of Turnberry Place
        </p>
      </div>
      
      <div 
        className="calendly-inline-widget"
        data-url={`${url}?hide_gdpr_banner=1&primary_color=d97706`}
        style={{ minWidth, height }}
      />
    </div>
  )
}
