/**
 * OptimizedImage Component
 * Wrapper around next/image with Core Web Vitals optimizations
 */

import React from 'react'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'priority'> {
  /**
   * Whether this is an LCP (Largest Contentful Paint) image
   * Sets fetchpriority="high" and priority={true}
   */
  isLCP?: boolean
  /**
   * Explicit aspect ratio to prevent CLS (Cumulative Layout Shift)
   * Format: "16/9" or number
   */
  aspectRatio?: string | number
  /**
   * Blur placeholder data URL
   */
  blurDataURL?: string
  /**
   * Custom className
   */
  className?: string
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - fetchpriority="high" for LCP images
 * - Explicit dimensions to prevent CLS
 * - Blur placeholder for better perceived performance
 * - Proper sizes attribute for responsive images
 * 
 * Usage:
 * ```tsx
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   isLCP={true}
 *   width={1920}
 *   height={1080}
 *   aspectRatio="16/9"
 * />
 * ```
 */
export function OptimizedImage({
  isLCP = false,
  aspectRatio,
  blurDataURL,
  className = '',
  width,
  height,
  fill,
  sizes,
  ...props
}: OptimizedImageProps) {
  // Calculate aspect ratio if provided
  const aspectRatioStyle = aspectRatio
    ? {
        aspectRatio: typeof aspectRatio === 'number' ? aspectRatio : aspectRatio,
      }
    : {}

  // Determine sizes if not provided
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'

  // For LCP images, use priority and fetchpriority
  if (isLCP) {
    return (
      <div
        className={`optimized-image-container ${className}`}
        style={{
          position: 'relative',
          ...aspectRatioStyle,
        }}
      >
        <Image
          {...props}
          priority={true}
          fetchPriority="high"
          width={width}
          height={height}
          fill={fill}
          sizes={defaultSizes}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          quality={85}
          style={{
            objectFit: 'cover',
            ...props.style,
          }}
        />
      </div>
    )
  }

  // For non-LCP images
  return (
    <div
      className={`optimized-image-container ${className}`}
      style={{
        position: 'relative',
        ...aspectRatioStyle,
      }}
    >
      <Image
        {...props}
        width={width}
        height={height}
        fill={fill}
        sizes={defaultSizes}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        quality={85}
        loading="lazy"
        style={{
          objectFit: 'cover',
          ...props.style,
        }}
      />
    </div>
  )
}

/**
 * Generate blur placeholder data URL
 * Use this for better perceived performance
 */
export function generateBlurDataURL(width: number, height: number): string {
  // Simple base64 encoded 1x1 transparent pixel
  // In production, use a tool like plaiceholder or next/image's built-in blur
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
    </svg>
  `
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}
