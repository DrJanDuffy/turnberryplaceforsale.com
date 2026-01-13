import React from 'react'

interface FormattedSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  background?: 'white' | 'light' | 'primary' | 'dark'
  centered?: boolean
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid'
}

export function FormattedSection({
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
  centered = false,
  containerSize = 'lg'
}: FormattedSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-light',
    primary: 'bg-primary text-white',
    dark: 'bg-dark text-white'
  }

  const containerClasses = {
    sm: 'col-12 col-md-8 col-lg-6',
    md: 'col-12 col-md-10 col-lg-8',
    lg: 'col-12 col-lg-10',
    xl: 'col-12 col-lg-11',
    fluid: 'col-12'
  }

  return (
    <div className={`card-content py-5 ${backgroundClasses[background]} ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className={containerClasses[containerSize]}>
            {title && (
              <div className={`mb-4 ${centered ? 'text-center' : ''}`}>
                <h2 className="mb-3">{title}</h2>
                {subtitle && (
                  <p className={`lead ${background === 'primary' || background === 'dark' ? 'text-white-50' : 'text-muted'} ${centered ? 'text-center' : ''}`}>
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
