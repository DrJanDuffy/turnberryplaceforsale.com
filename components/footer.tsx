import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"

interface FooterProps {
  links: DrupalMenuLinkContent[]
}

export function Footer({ links }: FooterProps) {
  return (
    <footer className="border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p className="mb-6 md:mb-0">
            © {new Date().getFullYear()} Turnberry Place Las Vegas | 
            Built with <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="underline">Cursor AI</a>, 
            deployed on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">Vercel</a>, 
            hosted on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
          </p>
          {links?.length ? (
            <ul className="flex gap-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} passHref>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
