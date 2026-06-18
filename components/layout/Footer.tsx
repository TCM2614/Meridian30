import Link from "next/link"
import { Container } from "@/components/ui/container"
import { navLinks, site } from "@/lib/site"

const columns = [
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Capabilities", href: "/capabilities" },
      { label: "Industries", href: "/industries" },
      { label: "Our Work", href: "/our-work" },
    ],
  },
  {
    title: "Office",
    links: [
      { label: "London", href: "#" },
      { label: "London, UK", href: "/contact" },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-hairline bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <Container className="py-24 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex items-baseline gap-2 text-ink"
              aria-label={`${site.name} home`}
            >
              <span className="font-serif text-display-md tracking-tightest">
                Meridian
              </span>
              <span className="font-serif text-display-md tracking-tightest text-accent">
                Thirty
              </span>
            </Link>
            <p className="mt-8 max-w-md editorial-body">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="label-editorial">{col.title}</h4>
                <ul className="mt-7 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-ink transition-colors duration-700 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-hairline pt-12 text-sm text-fog md:flex-row md:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors duration-700 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="transition-colors duration-700 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
