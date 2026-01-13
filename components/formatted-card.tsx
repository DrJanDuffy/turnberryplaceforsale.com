import React from 'react'
import Link from 'next/link'

interface FormattedCardProps {
  title: string
  description?: string
  image?: string
  icon?: React.ReactNode
  link?: string
  linkText?: string
  featured?: boolean
  className?: string
  children?: React.ReactNode
}

export function FormattedCard({
  title,
  description,
  image,
  icon,
  link,
  linkText,
  featured = false,
  className = '',
  children
}: FormattedCardProps) {
  const cardContent = (
    <div className={`card h-100 shadow-sm border-0 ${featured ? 'featured-card' : ''} ${className}`}>
      {image && (
        <div className="card-img-wrapper position-relative" style={{ height: '200px', overflow: 'hidden' }}>
          <img
            src={image}
            alt={title}
            className="card-img-top"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
          {featured && (
            <div className="position-absolute top-0 end-0 bg-warning text-dark px-3 py-1 small font-weight-bold" style={{ zIndex: 10 }}>
              Featured
            </div>
          )}
        </div>
      )}
      <div className="card-body d-flex flex-column">
        {icon && !image && (
          <div className="text-center mb-3" style={{ fontSize: '3rem' }}>
            {icon}
          </div>
        )}
        <h5 className="card-title">{title}</h5>
        {description && (
          <p className="card-text text-muted flex-grow-1">{description}</p>
        )}
        {children}
        {link && linkText && (
          <div className="mt-auto pt-3">
            <Link href={link} className="btn btn-primary btn-sm">
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  )

  return link && !linkText ? (
    <Link href={link} className="text-decoration-none">
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}
