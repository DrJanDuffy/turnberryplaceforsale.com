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

export function Footer({ links }: FooterProps) {
  return (
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
              <a href="tel:7022221964" className="footer-phone-link" title="Call or text Dr. Jan Duffy">
                (702) 222-1964
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
              © {new Date().getFullYear()} Turnberry Place Las Vegas | 
              Built with <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="footer-external-link">Cursor AI</a>, 
              deployed on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="footer-external-link">Vercel</a>, 
              hosted on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-external-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
