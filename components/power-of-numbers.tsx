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
    <div className="card-content py-5 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="mb-3 text-white">The Power of Numbers</h2>
            <p className="lead text-white-50">
              Proven results. Trusted expertise. Exceptional service.
            </p>
          </div>
        </div>
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 mb-md-0">
              <div className="text-center">
                <div className="display-4 font-weight-bold mb-2">{stat.number}</div>
                <div className="h5 mb-2">{stat.label}</div>
                <div className="small text-white-50">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="/agent" className="btn btn-light btn-lg">
              Learn What We Offer
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
