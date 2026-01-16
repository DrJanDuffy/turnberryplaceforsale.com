'use client'

import React from 'react'

interface Category {
  id: string
  label: string
  icon: string
  mapQuery: string
  count: number
}

interface CategoryFilterTabsProps {
  activeCategory: string
  onCategoryChange: (categoryId: string, query: string) => void
}

const categories: Category[] = [
  { id: 'all', label: 'All', icon: '🗺️', mapQuery: 'map', count: 45 },
  { id: 'dining', label: 'Dining', icon: '🍽️', mapQuery: 'restaurants', count: 24 },
  { id: 'entertainment', label: 'Entertainment', icon: '🎰', mapQuery: 'bars', count: 8 },
  { id: 'shopping', label: 'Shopping', icon: '🛍️', mapQuery: 'shopping', count: 6 },
  { id: 'coffee', label: 'Coffee', icon: '☕', mapQuery: 'coffee shops', count: 5 },
  { id: 'fitness', label: 'Fitness', icon: '💪', mapQuery: 'gyms', count: 3 },
  { id: 'schools', label: 'Schools', icon: '📚', mapQuery: 'schools', count: 2 },
  { id: 'parks', label: 'Parks', icon: '🌳', mapQuery: 'parks', count: 2 },
]

export function CategoryFilterTabs({
  activeCategory,
  onCategoryChange,
}: CategoryFilterTabsProps) {
  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id, category.mapQuery)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300
                  ${isActive
                    ? 'bg-[#D4AF37] text-gray-900 font-semibold'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="text-lg" aria-hidden="true">{category.icon}</span>
                <span>{category.label}</span>
                <span
                  className={`
                    text-xs px-2 py-0.5 rounded-full font-medium
                    ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}
                  `}
                >
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
