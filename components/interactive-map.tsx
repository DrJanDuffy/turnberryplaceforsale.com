'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Navigation, Maximize2, Map as MapIcon } from 'lucide-react'

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
  lat?: number
  lng?: number
}

interface InteractiveMapProps {
  mapKey: string
  center?: { lat: number; lng: number }
  zoom?: number
  activeCategory: string
  places: Place[]
  onPlaceClick?: (place: Place) => void
  selectedPlace?: Place | null
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

const TURNBERRY_POSITION = { lat: 36.1447, lng: -115.1541 }

const categoryColors: Record<string, string> = {
  dining: '#ef4444', // red
  entertainment: '#a855f7', // purple
  shopping: '#3b82f6', // blue
  coffee: '#f59e0b', // amber
  fitness: '#10b981', // green
  schools: '#6366f1', // indigo
  parks: '#059669', // emerald
}

export function InteractiveMap({
  mapKey,
  center = TURNBERRY_POSITION,
  zoom = 15,
  activeCategory,
  places = [],
  onPlaceClick,
  selectedPlace,
}: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const infoWindowRef = useRef<any>(null)
  const turnberryMarkerRef = useRef<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap')
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Calculate place coordinates (simplified - in production, use geocoding)
  const getPlaceCoordinates = (place: Place): { lat: number; lng: number } => {
    if (place.lat && place.lng) {
      return { lat: place.lat, lng: place.lng }
    }
    // Approximate positions based on distance and direction from Turnberry
    // This is a simplified approach - in production, use Google Geocoding API
    const baseOffset = 0.001 // ~111 meters per 0.001 degree
    const distance = parseFloat(place.distance.replace(/[^0-9.]/g, ''))
    const offset = (distance * baseOffset) / 0.1 // Rough approximation

    return {
      lat: center.lat + (Math.random() - 0.5) * offset * 2,
      lng: center.lng + (Math.random() - 0.5) * offset * 2,
    }
  }

  // Create custom marker icon
  const createMarkerIcon = (category: string, isActive = false, isTurnberry = false) => {
    if (isTurnberry) {
      return {
        path: window.google?.maps?.SymbolPath?.CIRCLE || 'circle',
        fillColor: '#D4AF37',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 3,
        scale: 12,
        anchor: new window.google.maps.Point(0, 0),
      }
    }

    const color = categoryColors[category] || '#6b7280'
    const scale = isActive ? 10 : 8

    return {
      path: window.google?.maps?.SymbolPath?.CIRCLE || 'circle',
      fillColor: color,
      fillOpacity: isActive ? 1 : 0.8,
      strokeColor: '#ffffff',
      strokeWeight: isActive ? 3 : 2,
      scale,
      anchor: new window.google.maps.Point(0, 0),
    }
  }

  // Create info window content
  const createInfoWindowContent = (place: Place) => {
    const stars = place.rating
      ? '★'.repeat(Math.floor(place.rating)) + '☆'.repeat(5 - Math.floor(place.rating))
      : ''
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}`

    return `
      <div style="padding: 12px; min-width: 200px; max-width: 300px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #111827;">
          ${place.name}
        </h3>
        ${
          place.description
            ? `<p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">${place.description}</p>`
            : ''
        }
        <div style="margin: 0 0 8px 0; font-size: 12px; color: #374151;">
          <strong>Distance:</strong> ${place.distance}${place.walkTime ? ` • ${place.walkTime}` : ''}
        </div>
        <div style="margin: 0 0 8px 0; font-size: 12px; color: #374151;">
          <strong>Address:</strong> ${place.address}
        </div>
        ${
          place.rating
            ? `<div style="margin: 0 0 8px 0; font-size: 14px; color: #D4AF37;">${stars} ${place.rating}</div>`
            : ''
        }
        <a 
          href="${directionsUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          style="display: inline-block; margin-top: 8px; padding: 8px 16px; background-color: #D4AF37; color: #000; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;"
        >
          Get Directions
        </a>
      </div>
    `
  }

  // Initialize map
  const initMap = () => {
    if (!mapRef.current || !window.google) return

    const mapOptions = {
      center,
      zoom,
      mapTypeId: mapType,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }

    const map = new window.google.maps.Map(mapRef.current, mapOptions)
    mapInstanceRef.current = map

    // Create Turnberry Place marker (gold star, always visible)
    turnberryMarkerRef.current = new window.google.maps.Marker({
      position: center,
      map,
      icon: createMarkerIcon('', false, true),
      title: 'Turnberry Place',
      zIndex: 1000,
    })

    // Info window for Turnberry
    const turnberryInfoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111827;">
            Turnberry Place
          </h3>
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">
            2827 Paradise Rd, Las Vegas, NV 89109
          </p>
          <p style="margin: 0; font-size: 12px; color: #374151;">
            Luxury High-Rise Condominiums
          </p>
        </div>
      `,
    })

    turnberryMarkerRef.current.addListener('click', () => {
      if (infoWindowRef.current) {
        infoWindowRef.current.close()
      }
      turnberryInfoWindow.open(map, turnberryMarkerRef.current)
    })

    infoWindowRef.current = turnberryInfoWindow

    setMapLoaded(true)
    updateMarkers()
  }

  // Update markers based on active category
  const updateMarkers = () => {
    if (!mapInstanceRef.current || !window.google) return

    // Clear existing markers (except Turnberry)
    markersRef.current.forEach((marker) => {
      marker.setMap(null)
    })
    markersRef.current = []

    if (infoWindowRef.current) {
      infoWindowRef.current.close()
    }

    // Filter places by category
    const filteredPlaces =
      activeCategory === 'all'
        ? places
        : places.filter((place) => place.category === activeCategory)

    // Create markers for filtered places
    filteredPlaces.forEach((place) => {
      const coords = getPlaceCoordinates(place)
      const isSelected = selectedPlace?.name === place.name

      const marker = new window.google.maps.Marker({
        position: coords,
        map: mapInstanceRef.current,
        icon: createMarkerIcon(place.category, isSelected, false),
        title: place.name,
        animation: isSelected ? window.google.maps.Animation.BOUNCE : null,
      })

      // Hover tooltip
      let hoverTimeout: NodeJS.Timeout
      marker.addListener('mouseover', () => {
        hoverTimeout = setTimeout(() => {
          const tooltip = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; text-align: center;">
                <div style="font-weight: 600; font-size: 14px;">${place.name}</div>
                <div style="font-size: 12px; color: #6b7280;">${place.distance}</div>
              </div>
            `,
          })
          tooltip.open(mapInstanceRef.current, marker)
          marker.tooltip = tooltip
        }, 300)
      })

      marker.addListener('mouseout', () => {
        if (hoverTimeout) clearTimeout(hoverTimeout)
        if (marker.tooltip) {
          marker.tooltip.close()
        }
      })

      // Click info window
      marker.addListener('click', () => {
        if (infoWindowRef.current) {
          infoWindowRef.current.close()
        }

        const infoWindow = new window.google.maps.InfoWindow({
          content: createInfoWindowContent(place),
        })

        infoWindow.open(mapInstanceRef.current, marker)
        infoWindowRef.current = infoWindow

        // Center map on marker
        mapInstanceRef.current.setCenter(coords)
        mapInstanceRef.current.setZoom(16)

        if (onPlaceClick) {
          onPlaceClick(place)
        }
      })

      markersRef.current.push(marker)
    })

    // If selected place, center on it
    if (selectedPlace) {
      const coords = getPlaceCoordinates(selectedPlace)
      mapInstanceRef.current.setCenter(coords)
      mapInstanceRef.current.setZoom(16)
    }
  }

  // Load Google Maps script
  useEffect(() => {
    if (window.google) {
      initMap()
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&libraries=places&callback=initMap`
    script.async = true
    script.defer = true

    window.initMap = initMap
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Update markers when category or places change
  useEffect(() => {
    if (mapLoaded) {
      updateMarkers()
    }
  }, [activeCategory, places, selectedPlace, mapLoaded])

  // Handle map type change
  const toggleMapType = () => {
    if (!mapInstanceRef.current) return
    const newType = mapType === 'roadmap' ? 'satellite' : 'roadmap'
    setMapType(newType)
    mapInstanceRef.current.setMapTypeId(newType)
  }

  // Handle current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        mapInstanceRef.current?.setCenter(pos)
        mapInstanceRef.current?.setZoom(16)
      },
      () => {
        alert('Error: Unable to retrieve your location.')
      }
    )
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!mapRef.current) return

    if (!isFullscreen) {
      if (mapRef.current.requestFullscreen) {
        mapRef.current.requestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-gray-200 rounded-lg overflow-hidden">
      {/* Map Container */}
      <div ref={mapRef} id="map-container" className="w-full h-full" />

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        {/* Map/Satellite Toggle */}
        <button
          onClick={toggleMapType}
          className="bg-white rounded-lg shadow-md p-2 hover:bg-gray-50 transition-colors"
          aria-label={mapType === 'roadmap' ? 'Switch to satellite view' : 'Switch to map view'}
        >
          <MapIcon size={20} className="text-gray-700" />
        </button>

        {/* Current Location */}
        <button
          onClick={getCurrentLocation}
          className="bg-white rounded-lg shadow-md p-2 hover:bg-gray-50 transition-colors"
          aria-label="Center on current location"
        >
          <Navigation size={20} className="text-gray-700" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="bg-white rounded-lg shadow-md p-2 hover:bg-gray-50 transition-colors"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          <Maximize2 size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Turnberry Place Label */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md z-10">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#D4AF37' }}
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-gray-900">Turnberry Place</span>
        </div>
      </div>
    </div>
  )
}
