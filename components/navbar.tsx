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
                  src="https://assets.cribflyer-proxy.com/cdn-cgi/image/height=300,fit=contain,rotate=0,format=auto,quality=85/4616/2/2953539/asset.jpg"
                  className="agent-photo"
                  width={75}
                  height={75}
                  alt="Dr. Jan Duffy"
                />
              </div>
              <div className="agent-text">
                <div className="agent-name">Dr. Jan Duffy, REALTOR</div>
                <div className="d-none d-lg-block agent-company">
                  The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                </div>
                <div className="agent-phone">
                  <a href="tel:7022221988" title="Call or text Dr. Jan Duffy">(702) 222-1988</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ flex: '1 1 auto', minWidth: 0 }}>
            <div className="nav-wrapper">
              {navigationStructure.map((item) => {
                if (item.children) {
                  const isDropdownOpen = openDropdown === item.title
                  const isItemActive = isActive(item.href, item.children)
                  
                  return (
                    <div
                      key={item.title}
                      className="nav-dropdown position-relative d-none d-lg-block"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={classNames(
                          "nav-link py-2 px-3",
                          isItemActive && "active"
                        )}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'rgba(255, 255, 255, 0.95)',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          fontFamily: 'Cinzel, serif',
                          whiteSpace: 'nowrap',
                          textDecoration: 'none',
                          display: 'inline-block'
                        }}
                      >
                        {item.title}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          className="ml-1"
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            transition: 'transform 0.2s ease',
                            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        >
                          <path d="M6 9L1 4h10L6 9z" />
                        </svg>
                      </Link>
                      {isDropdownOpen && (
                        <div
                          className="dropdown-menu show"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: '#1a1a1a',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '6px',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                            minWidth: '220px',
                            padding: '0.5rem 0',
                            zIndex: 1000,
                            marginTop: '4px'
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={classNames(
                                "dropdown-item",
                                asPath === child.href && "active"
                              )}
                              style={{
                                display: 'block',
                                padding: '0.75rem 1.25rem',
                                color: asPath === child.href ? '#fff' : 'rgba(255, 255, 255, 0.9)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontFamily: 'Cinzel, serif',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap',
                                backgroundColor: asPath === child.href ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                                fontWeight: asPath === child.href ? 500 : 400
                              }}
                              onMouseEnter={(e) => {
                                if (asPath !== child.href) {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (asPath !== child.href) {
                                  e.currentTarget.style.backgroundColor = 'transparent'
                                }
                              }}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={classNames(
                      "py-2 d-none font-size-90 d-lg-inline-block nav-link px-3",
                      asPath === item.href ? "active" : ""
                    )}
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                )
              })}
              <Link
                href="https://translate.google.com/translate?hl=es&sl=auto&tl=es&u=https://www.turnberryplaceforsale.com"
                className="d-none font-size-90 d-lg-inline-block px-3 nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Español
              </Link>
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
