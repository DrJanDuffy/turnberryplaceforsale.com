import React from "react"
import { useRouter } from "next/router"
import { DrupalMenuLinkContent } from "next-drupal"
import classNames from "classnames"

import { LocaleSwitcher } from "components/locale-switcher"
import Link from "next/link"

interface NavbarProps {
  links: DrupalMenuLinkContent[]
}

export function Navbar({ links, ...props }: NavbarProps) {
  const { locale } = useRouter()

  return (
    <header
      className="static top-0 z-50 flex-shrink-0 bg-gray-800 text-white md:sticky"
      {...props}
    >
      {/* Top Bar with Realtor Info */}
      <div className="bg-gray-900 py-2">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
              {/* Placeholder for realtor image - can be replaced with actual image */}
              <span className="text-xs font-semibold">JD</span>
            </div>
            <div>
              <div className="text-sm font-semibold">DR. JAN DUFFY, REALTOR</div>
              <a href="tel:7022221988" className="text-xs text-gray-300 hover:text-white">
                (702) 222-1988
              </a>
            </div>
          </div>
          <button className="md:hidden text-white" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container flex flex-col items-start justify-between px-6 py-4 mx-auto md:flex-row md:items-center">
        <Link href="/" locale={locale} passHref>
          <a className="text-lg font-bold text-white hover:text-gray-200">Turnberry Place</a>
        </Link>
        {links ? <Menu items={links} /> : null}
        <div className="absolute flex justify-end md:static top-2 right-4">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}

function Menu({ items }: { items: DrupalMenuLinkContent[] }) {
  return (
    <ul
      className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12"
      data-cy="navbar-menu"
    >
      {items.map((item) => (
        <MenuLink link={item} key={item.id} />
      ))}
    </ul>
  )
}

function MenuLink({ link }: { link: DrupalMenuLinkContent }) {
  const { asPath } = useRouter()

  return (
    <li>
      <Link href={link.url} passHref>
        <a
          className={classNames(
            "py-4 hover:underline text-sm md:text-base text-white hover:text-gray-200",
            link.url === asPath ? "font-semibold" : "font-normal"
          )}
        >
          {link.title}
        </a>
      </Link>
    </li>
  )
}
