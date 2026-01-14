import React, { useState } from "react"
import { useRouter } from "next/router"
import { DrupalMenuLinkContent } from "next-drupal"
import classNames from "classnames"
import Image from "next/image"

import { LocaleSwitcher } from "components/locale-switcher"
import Link from "next/link"

interface NavbarProps {
  links: DrupalMenuLinkContent[]
}

// Streamlined navigation structure with dropdowns
interface NavItem {
  href: string
  title: string
  children?: NavItem[]
}

const navigationStructure: NavItem[] = [
  { href: "/", title: "Home" },
  {
    title: "Properties",
    href: "/available-condos",
    children: [
      { href: "/available-condos", title: "Available Condos" },
      { href: "/towers", title: "Towers" },
      { href: "/price-features", title: "Price & Features" },
    ]
  },
  { href: "/floor-plans", title: "Floor Plans" },
  {
    title: "About",
    href: "/amenities",
    children: [
      { href: "/amenities", title: "Amenities" },
      { href: "/stirling-club", title: "Stirling Club" },
      { href: "/neighborhood", title: "Neighborhood" },
      { href: "/photos", title: "Photos" },
    ]
  },
  {
    title: "Contact",
    href: "/request-details",
    children: [
      { href: "/request-details", title: "Request Details" },
      { href: "/open-house", title: "Open House" },
      { href: "/agent", title: "Agent" },
    ]
  },
  { href: "/map", title: "Map" },
  { href: "/share", title: "Share" },
]

// Flattened list for mobile menu
const navigationLinks = [
  { href: "/", title: "Home" },
  { href: "/available-condos", title: "Available Condos" },
  { href: "/floor-plans", title: "Floor Plans" },
  { href: "/towers", title: "Towers" },
  { href: "/price-features", title: "Price & Features" },
  { href: "/amenities", title: "Amenities" },
  { href: "/stirling-club", title: "Stirling Club" },
  { href: "/neighborhood", title: "Neighborhood" },
  { href: "/photos", title: "Photos" },
  { href: "/request-details", title: "Request Details" },
  { href: "/open-house", title: "Open House" },
  { href: "/agent", title: "Agent" },
  { href: "/map", title: "Map" },
  { href: "/share", title: "Share" },
]

export function Navbar({ links, ...props }: NavbarProps) {
  const { locale, asPath } = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isActive = (href: string, children?: NavItem[]) => {
    if (asPath === href) return true
    if (children) {
      return children.some(child => asPath === child.href)
    }
    return false
  }

  return (
    <nav
      className="card-top-nav active w-100 fixed top-0 z-50 bg-gray-900 text-white"
      {...props}
    >
      <div className="container-fluid text-heading pr-3">
        <div className="row align-items-center no-gutters" style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <div className="col-auto" style={{ flexShrink: 0 }}>
            <div className="d-flex align-items-center pl-0 pl-sm-1 pl-lg-2 pl-xl-3">
              <div className="agent-photo-wrapper">
                <Image
                  src="/images/turnberry/asset-1.jpg"
                  className="agent-photo"
                  width={75}
                  height={75}
                  alt="Dr. Jan Duffy"
                />
              </div>
              <div className="agent-text">
                <div className="agent-name">DR. JAN DUFFY, REALTOR</div>
                <div className="d-none d-lg-block agent-company">
                  The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                </div>
                <div className="agent-phone d-flex flex-column flex-sm-row align-items-start align-items-sm-center" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="tel:7022221964" title="Call or text Dr. Jan Duffy">(702) 222-1964</a>
                  <span className="d-none d-sm-inline">|</span>
                  <a href="tel:7025001971" title="Office phone">(702) 500-1971</a>
                </div>
                <div className="agent-address d-none d-md-block font-size-80 mt-1" style={{ fontSize: '0.75rem', opacity: 0.9 }}>
                  2827 Paradise Rd, Las Vegas, NV 89109
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ flex: '1 1 auto', minWidth: 0 }}>
            <div className="nav-wrapper d-none d-lg-block">
              {/* Top Row Navigation */}
              <div className="d-flex flex-wrap align-items-center justify-content-end" style={{ marginBottom: '0.25rem' }}>
                <Link href="/" className={classNames("nav-link px-2", asPath === "/" && "active")}>Home</Link>
                <Link href="/price-features" className={classNames("nav-link px-2", asPath === "/price-features" && "active")}>Price & Features</Link>
                <Link href="/towers" className={classNames("nav-link px-2", asPath === "/towers" && "active")}>Towers</Link>
                <Link href="/amenities" className={classNames("nav-link px-2", asPath === "/amenities" && "active")}>Amenities</Link>
                <Link href="/photos" className={classNames("nav-link px-2", asPath === "/photos" && "active")}>Photos</Link>
                <Link href="/map" className={classNames("nav-link px-2", asPath === "/map" && "active")}>Map</Link>
                <Link href="/open-house" className={classNames("nav-link px-2", asPath === "/open-house" && "active")}>Open House</Link>
                <Link href="/request-details" className={classNames("nav-link px-2", asPath === "/request-details" && "active")}>Request Details</Link>
                <Link href="/agent" className={classNames("nav-link px-2", asPath === "/agent" && "active")}>Agent</Link>
              </div>
              {/* Bottom Row Navigation */}
              <div className="d-flex flex-wrap align-items-center justify-content-end">
                <Link href="/available-condos" className={classNames("nav-link px-2", asPath === "/available-condos" && "active")}>Available Condos</Link>
                <Link href="/floor-plans" className={classNames("nav-link px-2", asPath === "/floor-plans" && "active")}>Floor Plans</Link>
                <Link href="/share" className={classNames("nav-link px-2", asPath === "/share" && "active")}>Share</Link>
                <Link href="/stirling-club" className={classNames("nav-link px-2", asPath === "/stirling-club" && "active")}>Stirling Club</Link>
                <Link href="/neighborhood" className={classNames("nav-link px-2", asPath === "/neighborhood" && "active")}>Neighborhood</Link>
                <Link
                  href="https://translate.google.com/translate?hl=es&sl=auto&tl=es&u=https://www.turnberryplaceforsale.com"
                  className="nav-link px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Español
                </Link>
              </div>
            </div>
            <a
              className="ml-auto pr-2 d-inline d-lg-none nav-mobile cursor-pointer align-items-center"
              aria-label="Toggle mobile navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                height="40"
                width="40"
                aria-hidden="true"
                focusable="false"
                className={classNames("burger-icon", mobileMenuOpen && "d-none")}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                />
              </svg>
              <svg
                height="40"
                width="40"
                aria-hidden="true"
                focusable="false"
                className={classNames("x-icon", !mobileMenuOpen && "d-none")}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="overlay overlay-data overlay-open"
          onClick={(e) => {
            // Close menu when clicking on overlay background
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false)
            }
          }}
        >
          <nav 
            role="navigation" 
            aria-label="Mobile Navigation" 
            id="navbarMobile"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-mobile-link"
                    title={link.title}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://translate.google.com/translate?hl=es&sl=auto&tl=es&u=https://www.turnberryplaceforsale.com"
                  className="nav-mobile-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Español
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  )
}
