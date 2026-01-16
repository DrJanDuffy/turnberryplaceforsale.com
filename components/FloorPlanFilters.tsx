'use client'

import { useState } from 'react'

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  type: string
  minSqft: number
  maxSqft: number
  minPrice: number
  maxPrice: number
  tower: number | null
}

export default function FloorPlanFilters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    minSqft: 0,
    maxSqft: 10000,
    minPrice: 0,
    maxPrice: 15000000,
    tower: null
  })
  
  const [showAdvanced, setShowAdvanced] = useState(false)

  const typeOptions = ['All', '1-Bedroom', '2-Bedroom', '3-Bedroom', '4-Bedroom', 'Penthouse']

  const handleTypeChange = (type: string) => {
    const newFilters = { ...filters, type: type.toLowerCase() }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {typeOptions.map(type => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
              filters.type === type.toLowerCase()
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-pressed={filters.type === type.toLowerCase()}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Advanced Filters Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1 transition"
        aria-expanded={showAdvanced}
      >
        {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
        <svg 
          className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="grid md:grid-cols-3 gap-6 mt-4 pt-4 border-t">
          {/* Square Footage Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Square Footage
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={filters.minSqft || ''}
                onChange={e => {
                  const newFilters = { ...filters, minSqft: parseInt(e.target.value) || 0 }
                  setFilters(newFilters)
                  onFilterChange(newFilters)
                }}
              />
              <span className="text-gray-400" aria-hidden="true">—</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={filters.maxSqft === 10000 ? '' : filters.maxSqft}
                onChange={e => {
                  const newFilters = { ...filters, maxSqft: parseInt(e.target.value) || 10000 }
                  setFilters(newFilters)
                  onFilterChange(newFilters)
                }}
              />
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <select 
              className="w-full border rounded-lg px-3 py-2 text-sm"
              onChange={e => {
                const [min, max] = e.target.value.split('-').map(Number)
                const newFilters = { ...filters, minPrice: min, maxPrice: max }
                setFilters(newFilters)
                onFilterChange(newFilters)
              }}
            >
              <option value="0-15000000">Any Price</option>
              <option value="0-1000000">Under $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000-5000000">$2M - $5M</option>
              <option value="5000000-15000000">$5M+</option>
            </select>
          </div>

          {/* Tower Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tower
            </label>
            <select 
              className="w-full border rounded-lg px-3 py-2 text-sm"
              onChange={e => {
                const tower = e.target.value === 'all' ? null : parseInt(e.target.value)
                const newFilters = { ...filters, tower }
                setFilters(newFilters)
                onFilterChange(newFilters)
              }}
            >
              <option value="all">All Towers</option>
              <option value="1">Tower 1</option>
              <option value="2">Tower 2</option>
              <option value="3">Tower 3</option>
              <option value="4">Tower 4</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
