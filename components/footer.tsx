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
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12">
            <nav role="navigation" aria-label="Footer navigation" id="navbarFooter">
              <div className="row">
                {footerLinks.map((link) => (
                  <div key={link.href} className="col-6 col-sm-4 text-center">
                    <Link href={link.href} className="nav-link font-size-90 text-underline">
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <div className="row justify-content-center align-items-center pt-5">
          <div className="agent-company-info col-12 col-lg-10 font-size-90 d-flex flex-column flex-md-row justify-content-center text-center">
            <div className="px-3">The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties</div>
            <div className="px-3">0197614 NV</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Image
              src="https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=60/4616/3/2953540/asset.jpg"
              className="img-fluid footer-team-logo"
              alt="Agent company logo"
              width={300}
              height={125}
            />
          </div>
        </div>
        <div className="row py-5 justify-content-center align-items-center">
          <div className="col-12 col-lg-10 text-center">
            <div className="mt-5 font-size-80">
              <a
                href="https://lasvegas55plushomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to company"
              >
                <Image
                  src="https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/4616/4/2829593/asset.jpg"
                  className="img-fluid footer-wl-logo"
                  alt="Company logo"
                  width={300}
                  height={100}
                />
              </a>
            </div>
            <div className="mt-3 font-size-80">
              <Link
                href="/privacy"
                className="text-underline privacy-link"
                title="Privacy Policy and Cookie Policy"
              >
                Privacy, Cookie & Web Accessibility Policy
              </Link>
            </div>
            <div className="mt-3 font-size-80 text-muted">
              © {new Date().getFullYear()} Turnberry Place Las Vegas | 
              Built with <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-underline">Cursor AI</a>, 
              deployed on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-underline">Vercel</a>, 
              hosted on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
