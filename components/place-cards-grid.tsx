'use client'

import React, { useState, useMemo } from 'react'
import { PlaceCard } from './place-card'

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

interface PlaceCardsGridProps {
  activeCategory: string
  places?: Place[]
}

const defaultPlaces: Place[] = [
  // DINING
  {
    name: 'SW Steakhouse',
    category: 'dining',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    description: 'Fine dining',
    rating: 4.8,
    priceLevel: '$$$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'SW Steakhouse Wynn Las Vegas',
  },
  {
    name: 'Sinatra',
    category: 'dining',
    distance: '0.4 mi',
    walkTime: '6 min walk',
    description: 'Italian fine dining',
    rating: 4.7,
    priceLevel: '$$$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Sinatra Encore Las Vegas',
  },
  {
    name: 'Kassi Beach House',
    category: 'dining',
    distance: '0.2 mi',
    walkTime: '3 min walk',
    description: 'Mediterranean cuisine',
    rating: 4.6,
    priceLevel: '$$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Kassi Beach House Las Vegas',
  },
  {
    name: 'Bazaar Meat',
    category: 'dining',
    distance: '0.5 mi',
    walkTime: '8 min walk',
    description: 'José Andrés steakhouse',
    rating: 4.9,
    priceLevel: '$$$$',
    address: '3708 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Bazaar Meat José Andrés Las Vegas',
  },
  {
    name: 'Wing Lei',
    category: 'dining',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    description: 'Chinese fine dining',
    rating: 4.8,
    priceLevel: '$$$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Wing Lei Wynn Las Vegas',
  },
  {
    name: 'Bartolotta Ristorante',
    category: 'dining',
    distance: '0.4 mi',
    walkTime: '6 min walk',
    description: 'Italian seafood',
    rating: 4.7,
    priceLevel: '$$$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Bartolotta Wynn Las Vegas',
  },

  // ENTERTAINMENT
  {
    name: 'Wynn Las Vegas',
    category: 'entertainment',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    description: 'Resort/Casino',
    rating: 4.7,
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Wynn Las Vegas',
  },
  {
    name: 'Encore',
    category: 'entertainment',
    distance: '0.4 mi',
    walkTime: '6 min walk',
    description: 'Resort/Casino',
    rating: 4.7,
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Encore Las Vegas',
  },
  {
    name: 'Resorts World',
    category: 'entertainment',
    distance: '0.5 mi',
    walkTime: '8 min walk',
    description: 'Resort/Casino',
    rating: 4.6,
    address: '3000 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Resorts World Las Vegas',
  },
  {
    name: 'T-Mobile Arena',
    category: 'entertainment',
    distance: '1.2 mi',
    walkTime: '18 min walk',
    description: 'Sports/Concerts',
    rating: 4.8,
    address: '3780 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'T-Mobile Arena Las Vegas',
  },
  {
    name: 'Allegiant Stadium',
    category: 'entertainment',
    distance: '2.0 mi',
    description: 'NFL Stadium',
    rating: 4.9,
    address: '3333 Al Davis Way, Las Vegas, NV',
    mapQuery: 'Allegiant Stadium Las Vegas',
  },

  // SHOPPING
  {
    name: 'Fashion Show Mall',
    category: 'shopping',
    distance: '0.8 mi',
    walkTime: '12 min walk',
    description: '250+ stores',
    rating: 4.5,
    address: '3200 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Fashion Show Mall Las Vegas',
  },
  {
    name: 'Wynn Plaza',
    category: 'shopping',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    description: 'Luxury retail',
    rating: 4.7,
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Wynn Plaza Shops Las Vegas',
  },
  {
    name: 'Crystals',
    category: 'shopping',
    distance: '1.5 mi',
    description: 'High-end mall',
    rating: 4.6,
    address: '3720 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Crystals at CityCenter Las Vegas',
  },
  {
    name: 'The Forum Shops',
    category: 'shopping',
    distance: '1.8 mi',
    description: 'Luxury shopping',
    rating: 4.6,
    address: '3500 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Forum Shops Caesars Palace Las Vegas',
  },

  // COFFEE
  {
    name: 'Starbucks Reserve',
    category: 'coffee',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    rating: 4.5,
    priceLevel: '$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Starbucks Reserve Wynn Las Vegas',
  },
  {
    name: 'Urth Caffé',
    category: 'coffee',
    distance: '0.4 mi',
    walkTime: '6 min walk',
    description: 'Organic coffee & tea',
    rating: 4.6,
    priceLevel: '$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Urth Caffé Wynn Las Vegas',
  },
  {
    name: 'Bouchon Bakery',
    category: 'coffee',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    description: 'French bakery & café',
    rating: 4.7,
    priceLevel: '$$',
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Bouchon Bakery Las Vegas',
  },

  // FITNESS
  {
    name: 'Wynn Fitness Center',
    category: 'fitness',
    distance: '0.3 mi',
    walkTime: '5 min walk',
    description: 'State-of-the-art gym',
    rating: 4.8,
    address: '3131 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Wynn Fitness Center Las Vegas',
  },
  {
    name: 'Equinox',
    category: 'fitness',
    distance: '0.8 mi',
    walkTime: '12 min walk',
    description: 'Premium fitness club',
    rating: 4.7,
    address: '3720 S Las Vegas Blvd, Las Vegas, NV',
    mapQuery: 'Equinox Las Vegas',
  },

  // SCHOOLS
  {
    name: 'Las Vegas Academy',
    category: 'schools',
    distance: '1.5 mi',
    description: 'Arts & Academic High School',
    rating: 4.5,
    address: '315 S 7th St, Las Vegas, NV',
    mapQuery: 'Las Vegas Academy',
  },
  {
    name: 'UNLV',
    category: 'schools',
    distance: '3.0 mi',
    description: 'University of Nevada, Las Vegas',
    rating: 4.4,
    address: '4505 S Maryland Pkwy, Las Vegas, NV',
    mapQuery: 'University of Nevada Las Vegas',
  },

  // PARKS
  {
    name: 'Paradise Park',
    category: 'parks',
    distance: '0.8 mi',
    walkTime: '12 min walk',
    description: 'Community park',
    rating: 4.3,
    address: '4775 S Maryland Pkwy, Las Vegas, NV',
    mapQuery: 'Paradise Park Las Vegas',
  },
  {
    name: 'Symphony Park',
    category: 'parks',
    distance: '2.0 mi',
    description: 'Urban park & cultural center',
    rating: 4.5,
    address: '300 S Grand Central Pkwy, Las Vegas, NV',
    mapQuery: 'Symphony Park Las Vegas',
  },
]

const ITEMS_PER_PAGE = 6

export function PlaceCardsGrid({ activeCategory, places = defaultPlaces }: PlaceCardsGridProps) {
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
            <PlaceCard key={`${place.name}-${index}`} place={place} />
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
