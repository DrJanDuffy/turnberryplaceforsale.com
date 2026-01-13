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
    <div className="card-content py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-3">In The Media</h2>
            <p className="lead text-muted">
              Dr. Jan Duffy and Turnberry Place are regularly featured in both national and local media, 
              appearing in publications such as the Las Vegas Review-Journal, Luxury Lifestyle Magazine, 
              Architectural Digest, Forbes Real Estate, and Las Vegas Magazine, among others.
            </p>
          </div>
        </div>
        <div className="row">
          {mediaItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="small text-muted mb-2">
                    <strong>{item.source}</strong>
                    {item.date && <span> • {item.date}</span>}
                  </div>
                  <h5 className="card-title mb-3">{item.title}</h5>
                  {item.excerpt && (
                    <p className="card-text text-muted small">{item.excerpt}</p>
                  )}
                  {item.url && (
                    <Link href={item.url} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
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
            <p className="text-muted mb-0">
              For media inquiries, please contact{" "}
              <a href="tel:7022221988" className="text-primary">(702) 222-1988</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
