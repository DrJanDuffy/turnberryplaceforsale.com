import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Star } from 'lucide-react'

interface Place {
  name: string
  category: string
  distance: string
  walkTime?: string
  image?: string
  rating?: number
  priceLevel?: string
  address: string
  description?: string
  mapQuery?: string
}

interface PlaceCardProps {
  place: Place
}

export function PlaceCard({ place }: PlaceCardProps) {
  const categoryColors: Record<string, string> = {
    dining: 'bg-red-100 text-red-800',
    entertainment: 'bg-purple-100 text-purple-800',
    shopping: 'bg-blue-100 text-blue-800',
    coffee: 'bg-amber-100 text-amber-800',
    fitness: 'bg-green-100 text-green-800',
    schools: 'bg-indigo-100 text-indigo-800',
    parks: 'bg-emerald-100 text-emerald-800',
  }

  const categoryLabel: Record<string, string> = {
    dining: 'Dining',
    entertainment: 'Entertainment',
    shopping: 'Shopping',
    coffee: 'Coffee',
    fitness: 'Fitness',
    schools: 'Schools',
    parks: 'Parks',
  }

  const imageSrc = place.image || '/images/turnberry/Turnberry_Place_For_Sale.jpg'
  const categoryColor = categoryColors[place.category] || 'bg-gray-100 text-gray-800'
  const categoryName = categoryLabel[place.category] || place.category

  // Generate rating stars
  const renderStars = (rating?: number) => {
    if (!rating) return null
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
        ))}
        {hasHalfStar && (
          <Star size={14} className="fill-[#D4AF37] text-[#D4AF37] opacity-50" />
        )}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={imageSrc}
          alt={place.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
            {categoryName}
          </span>
        </div>
        {/* Price Level */}
        {place.priceLevel && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-900">
            {place.priceLevel}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{place.name}</h3>

        {/* Description */}
        {place.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{place.description}</p>
        )}

        {/* Distance & Walk Time */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <MapPin size={14} aria-hidden="true" />
            <span>{place.distance}</span>
          </div>
          {place.walkTime && (
            <div className="flex items-center gap-1">
              <Clock size={14} aria-hidden="true" />
              <span>{place.walkTime}</span>
            </div>
          )}
        </div>

        {/* Rating */}
        {place.rating && (
          <div className="mb-3">{renderStars(place.rating)}</div>
        )}

        {/* Address */}
        <p className="text-xs text-gray-500 mb-4">{place.address}</p>

        {/* View on Map Button */}
        <Link
          href={`#map-container`}
          className="block w-full text-center py-2 px-4 bg-[#D4AF37] text-gray-900 font-semibold rounded-lg hover:bg-[#B8941F] transition-colors"
        >
          View on Map
        </Link>
      </div>
    </div>
  )
}
