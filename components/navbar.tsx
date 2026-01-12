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

const navigationLinks = [
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
  { href: "/stirling-club", title: "Stirling Club" },
  { href: "/neighborhood", title: "Neighborhood" },
]

export function Navbar({ links, ...props }: NavbarProps) {
  const { locale, asPath } = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className="py-2 card-top-nav active w-100 fixed top-0 z-50 bg-gray-900 text-white"
      {...props}
    >
      <div className="container-fluid text-heading pr-3">
        <div className="row align-items-center">
          <div className="col-10 col-md-4 col-lg-3">
            <div className="d-flex align-items-center pl-0 pl-sm-1 pl-lg-2 pl-xl-3">
              <div className="">
                <Image
                  src="https://assets.cribflyer-proxy.com/cdn-cgi/image/height=300,fit=contain,rotate=0,format=auto,quality=85/4616/2/2953539/asset.jpg"
                  className="agent-photo"
                  width={75}
                  height={75}
                  alt="Dr. Jan Duffy"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="agent-text">
                <div>Dr. Jan Duffy, REALTOR</div>
                <div className="d-none d-xl-block">
                  The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                </div>
                <div itemScope itemType="https://schema.org/LocalBusiness">
                  <a href="tel:7022221988">(702) 222-1988</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 col-md-8 col-lg-9">
            <div className="nav-wrapper">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <a
                    className={classNames(
                      "py-2 d-none font-size-90 d-lg-inline-block nav-link px-3",
                      asPath === link.href ? "active" : ""
                    )}
                    title={link.title}
                  >
                    {link.title}
                  </a>
                </Link>
              ))}
              <Link href="https://translate.google.com/translate?hl=es&sl=auto&tl=es&u=https://www.turnberryplaceforsale.com" passHref>
                <a className="d-none font-size-90 d-lg-inline-block px-3 nav-link" target="_blank">
                  Español
                </a>
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
      <div className={classNames("overlay overlay-data", mobileMenuOpen && "overlay-open")}>
        <nav role="navigation" aria-label="Mobile" id="navbarMobile">
          <ul className="pl-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} passHref>
                  <a
                    className="nav-mobile-link"
                    title={link.title}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://translate.google.com/translate?hl=es&sl=auto&tl=es&u=https://www.turnberryplaceforsale.com"
                passHref
              >
                <a className="nav-mobile-link" target="_blank">
                  Español
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}
