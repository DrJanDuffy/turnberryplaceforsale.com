import Link from 'next/link'

interface MediaItem {
  title: string
  source: string
  date?: string
  url?: string
  excerpt?: string
}

export function InTheMedia() {
  const mediaItems: MediaItem[] = [
    {
      title: "Turnberry Place: Las Vegas' Premier Luxury High-Rise Community",
      source: "Las Vegas Review-Journal",
      date: "2024",
      excerpt: "Feature on luxury high-rise living at Turnberry Place"
    },
    {
      title: "The Stirling Club: Exclusive Amenities for Turnberry Place Residents",
      source: "Luxury Lifestyle Magazine",
      date: "2024",
      excerpt: "Coverage of the 80,000 sq ft private club facilities"
    },
    {
      title: "Las Vegas Luxury Real Estate Market Trends",
      source: "Las Vegas Business Press",
      date: "2024",
      excerpt: "Expert insights on high-rise condo market performance"
    },
    {
      title: "Turnberry Place Towers: Architectural Excellence on the Strip",
      source: "Architectural Digest",
      date: "2023",
      excerpt: "Design and architecture features of the four luxury towers"
    },
    {
      title: "Investment Opportunities in Las Vegas Luxury Condos",
      source: "Forbes Real Estate",
      date: "2023",
      excerpt: "Market analysis and investment potential at Turnberry Place"
    },
    {
      title: "Dr. Jan Duffy: 30 Years of Las Vegas Real Estate Excellence",
      source: "Las Vegas Magazine",
      date: "2023",
      excerpt: "Profile on expertise in luxury high-rise properties"
    }
  ]

  return (
    <div className="card-content py-5 bg-white" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-3" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
              In The Media
            </h2>
            <p className="lead" style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d',
              lineHeight: 1.7,
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Dr. Jan Duffy and Turnberry Place are regularly featured in both national and local media, 
              appearing in publications such as the Las Vegas Review-Journal, Luxury Lifestyle Magazine, 
              Architectural Digest, Forbes Real Estate, and Las Vegas Magazine, among others.
            </p>
          </div>
        </div>
        <div className="row">
          {mediaItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0" style={{ 
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
              }}
              >
                <div className="card-body p-4">
                  <div className="small text-muted mb-2" style={{ fontSize: '0.85rem' }}>
                    <strong>{item.source}</strong>
                    {item.date && <span> • {item.date}</span>}
                  </div>
                  <h5 className="card-title mb-3" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#333' }}>
                    {item.title}
                  </h5>
                  {item.excerpt && (
                    <p className="card-text text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {item.excerpt}
                    </p>
                  )}
                  {item.url && (
                    <Link 
                      href={item.url} 
                      className="btn btn-sm btn-outline-primary mt-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        borderRadius: '6px',
                        fontWeight: 500
                      }}
                    >
                      Read More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
              For media inquiries, please contact{" "}
              <a href="tel:7022221964" className="text-primary font-weight-bold">(702) 222-1964</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
