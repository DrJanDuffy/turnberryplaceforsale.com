import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

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
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center hero-content">
            <h1 className="display-4">
              Turnberry Place Las Vegas 
            </h1>
            <div className="d-flex align-items-center justify-content-center">
              <div className="w-10 horiz-line"></div>
              <h4 className="my-0 mx-4">
                Las Vegas, NV
              </h4>
              <div className="w-10 horiz-line"></div>
            </div>
            <div className="mt-4 d-flex align-items-center justify-content-center">
              <div className="p-2 status-banner">
                <h4>
                  Units for Sale
                </h4>
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
            className={`photo-thumbnail photo-${index + 1} ${index === currentSlide ? "selected" : ""} ${index > 0 ? "ml-2" : ""}`}
            data-idx={index + 1}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={photo}
              className="img-fluid"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        <Link href="/photos" className="ml-2">
          <div>
            <svg height="40" width="30" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" style={{ color: "#ddd" }}>
              <path fill="currentColor" d="M0 128.032v255.93c0 28.425 34.488 42.767 54.627 22.627l128-127.962c12.496-12.496 12.497-32.758 0-45.255l-128-127.968C34.528 85.305 0 99.55 0 128.032zM160 256L32 384V128l128 128z"/>
            </svg>
          </div>
        </Link>
      </div>
    </header>
  )
}
