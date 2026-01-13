export function PowerOfNumbers() {
  const stats = [
    {
      number: "500+",
      label: "Las Vegas Families Helped",
      description: "Successful real estate transactions"
    },
    {
      number: "30+",
      label: "Years of Experience",
      description: "Las Vegas luxury real estate expertise"
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "From satisfied clients"
    },
    {
      number: "$500M+",
      label: "In Sales Volume",
      description: "Luxury property transactions"
    }
  ]

  return (
    <div className="card-content py-5 bg-primary text-white" style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#007bff' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-3 text-white" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
              The Power of Numbers
            </h2>
            <p className="lead" style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Proven results. Trusted expertise. Exceptional service.
            </p>
          </div>
        </div>
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="text-center p-3" style={{ 
                transition: 'all 0.3s ease',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <div className="display-4 font-weight-bold mb-2" style={{ fontSize: '3rem', fontWeight: 700 }}>
                  {stat.number}
                </div>
                <div className="h5 mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {stat.label}
                </div>
                <div className="small" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a 
              href="/agent" 
              className="btn btn-light btn-lg"
              style={{
                padding: '0.875rem 2.5rem',
                fontSize: '1.1rem',
                borderRadius: '6px',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
              }}
            >
              Learn What We Offer
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
