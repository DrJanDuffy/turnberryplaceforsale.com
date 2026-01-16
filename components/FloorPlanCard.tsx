'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FloorPlan } from '@/lib/floorPlans'
import FloorPlanModal from './FloorPlanModal'

interface FloorPlanCardProps {
  plan: FloorPlan
  onCompare?: (plan: FloorPlan) => void
  isComparing?: boolean
}

export default function FloorPlanCard({ plan, onCompare, isComparing }: FloorPlanCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        {/* Image Container */}
        <div 
          className="relative aspect-[4/3] bg-gray-100 cursor-pointer overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse bg-gray-200 w-full h-full" />
            </div>
          )}
          <Image
            src={plan.image}
            alt={`Turnberry Place ${plan.name} - ${plan.beds} bedroom ${plan.sqft} sq ft`}
            fill
            className={`object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium text-sm">
              Click to Enlarge
            </span>
          </div>

          {/* Type Badge */}
          <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {plan.type}
          </span>

          {/* Tower Badge */}
          <span className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">
            Tower{plan.towers.length > 1 ? 's' : ''} {plan.towers.join(', ')}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            <span className="text-amber-600 font-semibold text-sm">{plan.priceRange}</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4 text-center">
            <div className="bg-gray-50 rounded-lg py-2">
              <p className="text-lg font-bold text-gray-900">{plan.beds}</p>
              <p className="text-xs text-gray-500">Bed{plan.beds > 1 ? 's' : ''}</p>
            </div>
            <div className="bg-gray-50 rounded-lg py-2">
              <p className="text-lg font-bold text-gray-900">{plan.baths}</p>
              <p className="text-xs text-gray-500">Bath{plan.baths > 1 ? 's' : ''}</p>
            </div>
            <div className="bg-gray-50 rounded-lg py-2">
              <p className="text-lg font-bold text-gray-900">{plan.sqft.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">Sq Ft</p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {plan.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
              {plan.features.length > 3 && (
                <span className="text-xs text-amber-600 px-2 py-1">
                  +{plan.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              View Details
            </button>
            
            {onCompare && (
              <button
                onClick={() => onCompare(plan)}
                className={`px-3 py-2.5 rounded-lg font-medium text-sm transition border-2 ${
                  isComparing 
                    ? 'bg-amber-100 border-amber-600 text-amber-700' 
                    : 'border-gray-300 text-gray-600 hover:border-amber-600 hover:text-amber-600'
                }`}
                aria-label={isComparing ? 'Remove from comparison' : 'Add to comparison'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <FloorPlanModal 
        plan={plan} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
