import Link from 'next/link'

interface PowerStatement {
  title: string
  description: string
  linkText?: string
  linkHref?: string
}

export function WhyWorkWithUs() {
  const powerStatements: PowerStatement[] = [
    {
      title: "The Power of Experience",
      description: "With over 30 years of Las Vegas real estate expertise, Dr. Jan Duffy brings unparalleled knowledge of Turnberry Place and the luxury high-rise market. Her deep understanding of the community, market trends, and property values ensures you make informed decisions.",
      linkText: "Learn More",
      linkHref: "/agent"
    },
    {
      title: "The Power of Results",
      description: "500+ Las Vegas families have trusted Dr. Jan Duffy to help them buy or sell luxury properties. Her track record of successful transactions and satisfied clients speaks to her commitment to excellence and client satisfaction.",
      linkText: "View Testimonials",
      linkHref: "/agent#testimonials"
    },
    {
      title: "The Power of Expertise",
      description: "As a Turnberry Place specialist, Dr. Jan Duffy knows every detail about the four luxury towers, floor plans, amenities, and The Stirling Club. Her specialized knowledge helps clients find the perfect residence that matches their lifestyle and investment goals.",
      linkText: "Explore Properties",
      linkHref: "/available-condos"
    }
  ]

  return (
    <div className="card-content py-5 bg-light" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-3" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
              Why Work With Us
            </h2>
            <p className="lead" style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Three decades of expertise. Hundreds of successful transactions. One trusted advisor.
            </p>
          </div>
        </div>
        <div className="row">
          {powerStatements.map((statement, index) => (
            <div key={index} className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100 shadow-sm border-0" style={{ 
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
              }}
              >
                <div className="card-body text-center p-4">
                  <h3 className="h4 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>
                    {statement.title}
                  </h3>
                  <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: 1.7, minHeight: '120px' }}>
                    {statement.description}
                  </p>
                  {statement.linkText && statement.linkHref && (
                    <Link 
                      href={statement.linkHref} 
                      className="btn btn-outline-primary"
                      style={{
                        borderRadius: '6px',
                        fontWeight: 500,
                        padding: '0.5rem 1.5rem'
                      }}
                    >
                      {statement.linkText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
