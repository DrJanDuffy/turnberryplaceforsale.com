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
            <h1 className="display-4 mb-2" style={{ 
              fontFamily: 'Cinzel, serif',
              fontWeight: 500,
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
            }}>
              Turnberry Place Las Vegas 
            </h1>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div className="w-10 horiz-line" style={{ flex: '1', maxWidth: '100px', height: '2px', backgroundColor: '#ffffff' }}></div>
              <h4 className="my-0 mx-4" style={{ 
                fontFamily: 'Cinzel, serif',
                fontWeight: 500,
                color: '#ffffff',
                textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
              }}>
                Las Vegas, NV
              </h4>
              <div className="w-10 horiz-line" style={{ flex: '1', maxWidth: '100px', height: '2px', backgroundColor: '#ffffff' }}></div>
            </div>
            <div className="mt-4 d-flex flex-column align-items-center justify-content-center" style={{ gap: '1rem' }}>
              <div className="p-2 status-banner" style={{
                border: '1px solid rgba(255, 255, 255, 1)',
                borderRadius: '4px',
                minWidth: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }}>
                <h4 className="my-0" style={{
                  marginTop: '2px',
                  marginBottom: '0px',
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 500,
                  color: '#ffffff',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                }}>
                  Units for Sale
                </h4>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center" style={{ gap: '0.75rem' }}>
                <Link 
                  href="/available-condos" 
                  className="btn btn-light btn-lg px-4 py-2"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  View Current Listings
                </Link>
                <Link 
                  href="/request-details" 
                  className="btn btn-outline-light btn-lg px-4 py-2"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    borderWidth: '2px',
                  }}
                >
                  See Available Condos
                </Link>
              </div>
              <p className="text-white mb-0" style={{ 
                fontSize: '0.875rem', 
                textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                fontStyle: 'italic',
              }}>
                Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} 2025
              </p>
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
              quality={60}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
