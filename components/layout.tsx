import * as React from "react"
import { DrupalMenuLinkContent } from "next-drupal"

import { Navbar } from "components/navbar"
import { Footer } from "components/footer"

export interface LayoutProps {
  menus: {
    main: DrupalMenuLinkContent[]
    footer: DrupalMenuLinkContent[]
  }
  children?: React.ReactNode
}

export function Layout({ menus, children }: LayoutProps) {
  React.useEffect(() => {
    // Adjust header margin for fixed navbar and set CSS variable
    const adjustHeaderMargin = () => {
      const nav = document.querySelector('.card-top-nav')
      const header = document.querySelector('.card-top-header')
      if (nav) {
        const navHeight = (nav as HTMLElement).offsetHeight
        document.documentElement.style.setProperty('--navbar-height', `${navHeight}px`)
        
        if (header) {
          ;(header as HTMLElement).style.marginTop = `${navHeight}px`
        }
      }
    }
    
    adjustHeaderMargin()
    window.addEventListener('resize', adjustHeaderMargin)
    return () => window.removeEventListener('resize', adjustHeaderMargin)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={menus.main} />
      <main className="flex-1" style={{ paddingTop: 0, marginTop: 0 }}>
        {children}
      </main>
      <Footer links={menus.footer} />
    </div>
  )
}
