import Link from "next/link"
import { Container } from "@/components/ui/container"
import { navLinks, site } from "@/lib/site"

const columns = [
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Capabilities", href: "/capabilities" },
      { label: "Industries", href: "/industries" },
      { label: "Our Work", href: "/our-work" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Offices",
    links: [
      { label: "New York", href: "#" },
      { label: "London", href: "#" },
      { label: "Singapore", href: "#" },
      { label: "Dubai", href: "#" },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-hairline bg-background">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex items-baseline gap-2 text-ink"
              aria-label={`${site.name} home`}
            >
              <span className="font-serif text-3xl tracking-tightest">
                Meridian
              </span>
              <span className="font-serif text-3xl tracking-tightest text-accent">
                Thirty
              </span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
              {site.description}
            </p>
            <div className="mt-10 space-y-2 text-sm text-fog">
              <p className="text-ink">{site.contact.address}</p>
              <p>
                <a
                  className="transition-colors hover:text-accent"
                  href={`mailto:${site.contact.email}`}
                >
                  {site.contact.email}
                </a>
              </p>
              <p>
                <a
                  className="transition-colors hover:text-accent"
                  href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                >
                  {site.contact.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-eyebrow uppercase text-fog">
                  {col.title}
                </h4>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-ink transition-colors hover:text-accent"
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

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-hairline pt-10 text-sm text-fog md:flex-row md:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-ink"
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
                className="transition-colors hover:text-ink"
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
