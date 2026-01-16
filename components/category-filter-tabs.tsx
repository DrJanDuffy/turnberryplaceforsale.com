'use client'

import React, { useState, useEffect, useRef } from 'react'
import { 
  UtensilsCrossed, 
  Star, 
  ShoppingBag, 
  Coffee, 
  Dumbbell, 
  Book, 
  Trees 
} from 'lucide-react'

interface Category {
  id: string
  label: string
  icon: React.ReactNode
  mapQuery: string
  count: number
}

interface CategoryFilterTabsProps {
  activeCategory: string
  onCategoryChange: (category: string, mapQuery: string) => void
  categories?: Category[]
}

const defaultCategories: Category[] = [
  {
    id: 'all',
    label: 'All',
    icon: null,
    mapQuery: 'map',
    count: 0, // Will be calculated if needed
  },
  {
    id: 'dining',
    label: 'Dining',
    icon: <UtensilsCrossed size={18} />,
    mapQuery: 'restaurants',
    count: 24,
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    icon: <Star size={18} />,
    mapQuery: 'bars',
    count: 18,
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: <ShoppingBag size={18} />,
    mapQuery: 'shopping',
    count: 12,
  },
  {
    id: 'coffee',
    label: 'Coffee',
    icon: <Coffee size={18} />,
    mapQuery: 'coffee shops',
    count: 15,
  },
  {
    id: 'fitness',
    label: 'Fitness',
    icon: <Dumbbell size={18} />,
    mapQuery: 'gyms',
    count: 8,
  },
  {
    id: 'schools',
    label: 'Schools',
    icon: <Book size={18} />,
    mapQuery: 'schools',
    count: 14,
  },
  {
    id: 'parks',
    label: 'Parks',
    icon: <Trees size={18} />,
    mapQuery: 'parks',
    count: 6,
  },
]

export function CategoryFilterTabs({
  activeCategory,
  onCategoryChange,
  categories = defaultCategories,
}: CategoryFilterTabsProps) {
  const [isSticky, setIsSticky] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)

  // Sticky behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const rect = tabsRef.current.getBoundingClientRect()
        setIsSticky(rect.top <= 80) // Sticky when scrolled past header (approx 80px)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (category: Category) => {
    onCategoryChange(category.id, category.mapQuery)
  }

  return (
    <div
      ref={tabsRef}
      className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${
        isSticky ? 'sticky top-[80px] z-40 shadow-sm' : 'relative'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop: Centered tabs */}
        <div className="hidden md:flex items-center justify-center gap-2 py-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => handleClick(category)}
                className={`
                  group flex items-center gap-2 px-4 py-2 rounded-full
                  transition-all duration-300 ease-out
                  relative
                  ${
                    isActive
                      ? 'bg-[#D4AF37] text-gray-900 font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category.icon && (
                  <span className={isActive ? 'text-gray-900' : 'text-gray-600'}>
                    {category.icon}
                  </span>
                )}
                <span>{category.label}</span>
                {category.count > 0 && (
                  <span
                    className={`
                      ml-1 px-2 py-0.5 rounded-full text-xs font-medium
                      ${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-300 text-gray-700'
                      }
                    `}
                  >
                    {category.count}
                  </span>
                )}
                {isActive && (
                  <span
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#D4AF37]"
                    style={{ transition: 'all 0.3s ease-out' }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Mobile: Horizontal scrollable */}
        <div className="md:hidden py-3 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max px-2">
            {categories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => handleClick(category)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? 'bg-[#D4AF37] text-gray-900 font-semibold'
                        : 'bg-gray-100 text-gray-700'
                    }
                  `}
                >
                  {category.icon && (
                    <span className={isActive ? 'text-gray-900' : 'text-gray-600'}>
                      {category.icon}
                    </span>
                  )}
                  <span>{category.label}</span>
                  {category.count > 0 && (
                    <span
                      className={`
                        ml-1 px-2 py-0.5 rounded-full text-xs font-medium
                        ${
                          isActive
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-300 text-gray-700'
                        }
                      `}
                    >
                      {category.count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
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
