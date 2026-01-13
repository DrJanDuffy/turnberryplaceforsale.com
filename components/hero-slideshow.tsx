import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { DynamicUnitCount } from "components/dynamic-unit-count"

interface HeroSlideshowProps {
  photos: string[]
}

export function HeroSlideshow({ photos }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [photos.length, isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPaused(true)
    // Resume after 10 seconds
    setTimeout(() => setIsPaused(false), 10000)
  }

  return (
    <header className="card-top-header relative h-screen min-h-[500px] w-full">
      {/* Slideshow */}
      <div className="slick-slideshow absolute inset-0 z-0">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-35 z-10" />

      {/* Hero Content */}
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="row w-100 justify-content-center">
          <div className="col-12 text-center hero-content position-relative" style={{ zIndex: 14 }}>
            <h1 className="mb-2" style={{ 
              fontFamily: 'Cinzel, serif',
              fontWeight: 600,
              fontSize: '4.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
              lineHeight: '1.2',
              marginBottom: '0.5rem'
            }}>
              TURNBERRY PLACE
            </h1>
            <h2 className="mb-3" style={{ 
              fontFamily: 'Cinzel, serif',
              fontWeight: 600,
              fontSize: '3.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              LAS VEGAS
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-4" style={{ gap: '1rem' }}>
              <div style={{ flex: '1', maxWidth: '100px', height: '2px', backgroundColor: '#ffffff' }}></div>
              <h4 style={{ 
                fontFamily: 'Questrial, sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffffff',
                textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                margin: 0,
                whiteSpace: 'nowrap'
              }}>
                LAS VEGAS, NV
              </h4>
              <div style={{ flex: '1', maxWidth: '100px', height: '2px', backgroundColor: '#ffffff' }}></div>
            </div>
            <div className="mt-4">
              <Link 
                href="/available-condos" 
                className="btn"
                style={{ 
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.75rem 2rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 1)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(4px)',
                  fontFamily: 'Questrial, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                }}
              >
                Units for Sale
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails Bar */}
      <div className="thumbnails-bar d-flex align-items-center justify-content-center">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-thumbnail photo-${index + 1} ${index === currentSlide ? "selected" : ""}`}
            data-idx={index + 1}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ cursor: 'pointer', position: 'relative', width: '100px', height: '60px', overflow: 'hidden' }}
          >
            <Image
              src={photo}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100px"
              style={{ objectFit: 'cover' }}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={75}
            />
          </div>
        ))}
        <Link href="/photos" className="ml-2" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
          <div style={{ 
            backgroundColor: 'rgba(0,0,0,0.4)', 
            borderRadius: '4px', 
            padding: '0.5rem',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          >
            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" style={{ color: "#fff" }}>
              <path fill="currentColor" d="M0 128.032v255.93c0 28.425 34.488 42.767 54.627 22.627l128-127.962c12.496-12.496 12.497-32.758 0-45.255l-128-127.968C34.528 85.305 0 99.55 0 128.032zM160 256L32 384V128l128 128z"/>
            </svg>
          </div>
        </Link>
      </div>
    </header>
  )
}
