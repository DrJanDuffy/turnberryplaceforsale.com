import Link from "next/link"
import Image from "next/image"
import { DrupalMenuLinkContent } from "next-drupal"

interface FooterProps {
  links: DrupalMenuLinkContent[]
}

const footerLinks = [
  { href: "/", title: "Home" },
  { href: "/price-features", title: "Price & Features" },
  { href: "/towers", title: "Towers" },
  { href: "/amenities", title: "Amenities" },
  { href: "/photos", title: "Photos" },
  { href: "/map", title: "Map" },
  { href: "/open-house", title: "Open House" },
  { href: "/request-details", title: "Request Details" },
  { href: "/agent", title: "Agent" },
  { href: "/available-condos", title: "Available Condos" },
  { href: "/floor-plans", title: "Floor Plans" },
  { href: "/share", title: "Share" },
  { href: "/stirling-club", title: "Stirling Club" },
  { href: "/neighborhood", title: "Neighborhood" },
]

const allPages = [
  { href: "/", title: "Home" },
  { href: "/available-condos", title: "Available Condos" },
  { href: "/towers", title: "Towers" },
  { href: "/price-features", title: "Price & Features" },
  { href: "/floor-plans", title: "Floor Plans" },
  { href: "/amenities", title: "Amenities" },
  { href: "/stirling-club", title: "Stirling Club" },
  { href: "/neighborhood", title: "Neighborhood" },
  { href: "/photos", title: "Photos" },
  { href: "/map", title: "Map" },
  { href: "/open-house", title: "Open House" },
  { href: "/request-details", title: "Request Details" },
  { href: "/agent", title: "Agent" },
  { href: "/share", title: "Share" },
]

export function Footer({ links }: FooterProps) {
  return (
    <>
      {/* Site Links Section - Above Footer */}
      <section className="card-content site-links-section py-4" aria-label="Site Links">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Site Navigation
              </h2>
              <nav role="navigation" aria-label="Site links navigation">
                <div className="row g-3">
                  {allPages.map((link) => (
                    <div key={link.href} className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <Link 
                        href={link.href} 
                        className="site-link-item d-block text-center py-2 px-3"
                        style={{
                          color: '#495057',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          transition: 'all 0.2s ease',
                          border: '1px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8f9fa'
                          e.currentTarget.style.borderColor = '#dee2e6'
                          e.currentTarget.style.color = '#212529'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.borderColor = 'transparent'
                          e.currentTarget.style.color = '#495057'
                        }}
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <footer className="card-content card-site-footer footer-01 pt-5" role="contentinfo" aria-label="Footer">
        <div className="container-fluid px-3 px-md-5">
          {/* Navigation Links */}
          <div className="row">
            <div className="col-12">
              <nav role="navigation" aria-label="Footer navigation" id="navbarFooter">
                <div className="row g-2">
                  {footerLinks.map((link) => (
                    <div key={link.href} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center py-2">
                      <Link href={link.href} className="footer-nav-link">
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>

        {/* Company Information */}
        <div className="row justify-content-center align-items-center pt-4 pt-md-5">
          <div className="agent-company-info col-12 col-lg-10 font-size-90 d-flex flex-column flex-md-row justify-content-center align-items-center text-center">
            <div className="px-2 px-md-3 mb-2 mb-md-0">The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties</div>
            <div className="px-2 px-md-3 mb-2 mb-md-0">License: S.0197614.LLC</div>
            <div className="px-2 px-md-3">
              <a href="tel:7022221988" className="footer-phone-link" title="Call or text Dr. Jan Duffy">
                (702) 222-1988
              </a>
            </div>
          </div>
        </div>

        {/* Berkshire Hathaway Logo */}
        <div className="row mt-4 mt-md-5">
          <div className="col-12 text-center">
            <div className="d-inline-block" style={{ maxWidth: '300px', width: '100%' }}>
              <Image
                src="https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=60/4616/3/2953540/asset.jpg"
                className="img-fluid footer-team-logo"
                alt="Berkshire Hathaway HomeServices Nevada Properties logo"
                width={300}
                height={125}
              />
            </div>
          </div>
        </div>

        {/* Las Vegas 55 Plus Homes Logo & Copyright */}
        <div className="row py-4 py-md-5 justify-content-center align-items-center">
          <div className="col-12 col-lg-10 text-center">
            <div className="mt-4 mt-md-5">
              <a
                href="https://lasvegas55plushomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Las Vegas 55 Plus Homes"
                className="d-inline-block"
                style={{ maxWidth: '300px', width: '100%' }}
              >
                <Image
                  src="https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/4616/4/2829593/asset.jpg"
                  className="img-fluid footer-wl-logo"
                  alt="Las Vegas 55 Plus Homes company logo"
                  width={300}
                  height={100}
                />
              </a>
            </div>
            <div className="mt-3 font-size-80">
              <Link
                href="/privacy"
                className="footer-privacy-link"
                title="Privacy Policy and Cookie Policy"
              >
                Privacy, Cookie & Web Accessibility Policy
              </Link>
            </div>
            <div className="mt-3 font-size-80 text-muted">
              Turnberry Place Las Vegas | Listings, Sales & Market Updates | Dr. Jan Duffy | <a href="tel:7022221988" className="footer-phone-link">702-222-1988</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
