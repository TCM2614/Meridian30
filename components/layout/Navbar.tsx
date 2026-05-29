"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks, site } from "@/lib/site"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ease-out-expo",
        scrolled
          ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="group flex items-baseline gap-2 text-ink"
        >
          <span className="font-serif text-2xl tracking-tightest">
            Meridian
          </span>
          <span className="font-serif text-2xl tracking-tightest text-accent">
            Thirty
          </span>
          <span className="ml-1 hidden text-eyebrow text-fog/70 sm:inline">
            / M30
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 lg:flex"
        >
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm tracking-wide text-fog transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group"
          >
            <Link href="/contact">
              <span>Begin a conversation</span>
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center border border-hairline text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-20 border-t border-hairline bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-5 py-8 sm:px-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between border-b border-hairline py-5 font-serif text-2xl text-ink transition-colors hover:text-accent"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden className="text-eyebrow text-fog">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <div className="pt-8">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Begin a conversation</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
