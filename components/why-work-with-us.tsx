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
    <div className="card-content py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-3">Why Work With Us</h2>
            <p className="lead text-muted">
              Three decades of expertise. Hundreds of successful transactions. One trusted advisor.
            </p>
          </div>
        </div>
        <div className="row">
          {powerStatements.map((statement, index) => (
            <div key={index} className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h3 className="h4 mb-3">{statement.title}</h3>
                  <p className="text-muted mb-4">{statement.description}</p>
                  {statement.linkText && statement.linkHref && (
                    <Link href={statement.linkHref} className="btn btn-outline-primary">
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
