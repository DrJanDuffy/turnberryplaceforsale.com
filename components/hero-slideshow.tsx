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
      <div className="container h-full relative z-20 flex items-center">
        <div className="w-full text-center hero-content">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Turnberry Place Las Vegas
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 border-t-2 border-white"></div>
            <h4 className="my-0 mx-4 text-white text-xl md:text-2xl">Las Vegas, NV</h4>
            <div className="w-10 border-t-2 border-white"></div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="p-2 border-2 border-white rounded bg-white bg-opacity-30">
              <h4 className="my-0 text-white text-lg md:text-xl">Units for Sale</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails Bar */}
      <div className="thumbnails-bar absolute bottom-4 w-full z-20 flex items-center justify-center gap-2 px-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-thumbnail cursor-pointer border-2 rounded transition-transform ${
              index === currentSlide
                ? "border-white scale-110 selected"
                : "border-white border-opacity-30"
            }`}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            data-idx={index + 1}
          >
            <Image
              src={photo}
              width={45}
              height={45}
              alt={`Slide ${index + 1}`}
              className="rounded"
              objectFit="cover"
            />
          </div>
        ))}
        <Link href="/photos" className="ml-2 text-white hover:text-gray-300">
          <svg height="40" width="30" fill="currentColor" viewBox="0 0 192 512">
            <path d="M0 128.032v255.93c0 28.425 34.488 42.767 54.627 22.627l128-127.962c12.496-12.496 12.497-32.758 0-45.255l-128-127.968C34.528 85.305 0 99.55 0 128.032zM160 256L32 384V128l128 128z" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
