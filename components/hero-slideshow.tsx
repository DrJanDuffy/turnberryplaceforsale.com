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
          <div className="col-12 col-lg-10 col-xl-8 text-center hero-content position-relative" style={{ zIndex: 14 }}>
            <h1 className="display-4 mb-3">
              Turnberry Place Condos From $800K
            </h1>
            <div className="mb-4">
              <h3 className="text-white font-weight-bold" style={{ fontSize: '1.5rem', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                Only <DynamicUnitCount defaultCount={12} elementId="available-units-count" /> Units Available Now
              </h3>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-4 mb-4">
              <Link 
                href="/available-condos" 
                className="btn btn-lg btn-warning px-5 py-3 font-weight-bold"
                style={{ 
                  fontSize: '1.1rem',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
                }}
              >
                View Available Condos
              </Link>
              <a 
                href="tel:7022221988" 
                className="btn btn-lg btn-outline-light px-5 py-3 font-weight-bold"
                style={{ 
                  fontSize: '1.1rem',
                  borderRadius: '6px',
                  borderWidth: '2px',
                  backdropFilter: 'blur(4px)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Schedule Private Tour
              </a>
            </div>
            {/* Social Proof */}
            <div className="mt-5 pt-3 d-flex flex-wrap justify-content-center align-items-center gap-4 text-white" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <div className="text-center px-3">
                <div className="h3 mb-1 font-weight-bold" style={{ fontSize: '2rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>500+</div>
                <div className="small" style={{ fontSize: '0.9rem', opacity: 0.95 }}>Las Vegas Families Helped</div>
              </div>
              <div className="text-center px-3">
                <div className="h3 mb-1 font-weight-bold" style={{ fontSize: '2rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>30+</div>
                <div className="small" style={{ fontSize: '0.9rem', opacity: 0.95 }}>Years Experience</div>
              </div>
              <div className="text-center px-3">
                <div className="h3 mb-1 font-weight-bold" style={{ fontSize: '2rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>⭐ 4.9/5</div>
                <div className="small" style={{ fontSize: '0.9rem', opacity: 0.95 }}>Google Reviews</div>
              </div>
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
