'use client'

import React, { useState, useMemo } from 'react'
import { PlaceCard } from './place-card'
import { placesData, type Place } from '../lib/places-data'

interface PlaceCardsGridProps {
  activeCategory: string
  places?: Place[]
  onPlaceClick?: (place: Place) => void
}

const defaultPlaces: Place[] = placesData

const ITEMS_PER_PAGE = 6

export function PlaceCardsGrid({ activeCategory, places = defaultPlaces, onPlaceClick }: PlaceCardsGridProps) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  // Filter places by active category
  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'all') {
      return places
    }
    return places.filter((place) => place.category === activeCategory)
  }, [activeCategory, places])

  // Slice for pagination
  const visiblePlaces = filteredPlaces.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPlaces.length

  // Reset visible count when category changes
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE)
  }, [activeCategory])

  if (filteredPlaces.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No places found in this category.</p>
      </div>
    )
  }

  return (
    <section className="py-8 bg-gray-50" id="place-cards">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-2">
            Nearby Places
          </h2>
          <p className="text-gray-600">
            Showing {visiblePlaces.length} of {filteredPlaces.length} places
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visiblePlaces.map((place, index) => (
            <div
              key={`${place.name}-${index}`}
              onClick={() => onPlaceClick && onPlaceClick(place)}
              className="cursor-pointer"
            >
              <PlaceCard place={place} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              className="px-8 py-3 bg-[#D4AF37] text-gray-900 font-semibold rounded-lg hover:bg-[#B8941F] transition-colors"
            >
              Load More ({filteredPlaces.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
