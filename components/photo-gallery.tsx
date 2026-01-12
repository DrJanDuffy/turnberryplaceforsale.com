import React, { useState } from "react"
import Image from "next/image"
import { absoluteURL } from "lib/utils/absolute-url"

interface PhotoGalleryProps {
  photos: string[]
  title?: string
}

export function PhotoGallery({ photos, title = "Photo Gallery" }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  if (!photos || photos.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-video cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
              onClick={() => setSelectedPhoto(index)}
            >
              <Image
                src={absoluteURL(photo)}
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt={`Turnberry Place ${index + 1}`}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              <Image
                src={absoluteURL(photos[selectedPhoto])}
                width={1200}
                height={800}
                layout="intrinsic"
                objectFit="contain"
                alt={`Turnberry Place photo ${selectedPhoto + 1}`}
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
