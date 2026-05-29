"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/nav-link"

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
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,height] duration-700 ease-out-expo",
        scrolled
          ? "border-b border-hairline bg-background/65 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 transition-[height] duration-700 ease-out-expo sm:px-10 lg:px-12",
          scrolled ? "h-20" : "h-24",
        )}
      >
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="group flex items-baseline gap-2 text-ink"
        >
          <span className="font-serif text-2xl tracking-tightest transition-colors duration-500 ease-out-expo group-hover:text-accent">
            Meridian
          </span>
          <span className="font-serif text-2xl tracking-tightest text-accent">
            Thirty
          </span>
          <span className="ml-2 hidden text-eyebrow text-fog/60 sm:inline">
            / M30
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <NavLink key={link.href} href={link.href} active={active}>
                {link.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">Begin a conversation</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center border border-hairline text-ink transition-colors duration-500 hover:border-accent hover:text-accent lg:hidden"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.25} /> : <Menu className="h-5 w-5" strokeWidth={1.25} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full border-t border-hairline bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-6 py-10 sm:px-10"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.06 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between border-b border-hairline py-6 font-serif text-3xl text-ink transition-colors duration-500 hover:text-accent"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden className="text-eyebrow text-fog">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <div className="pt-10">
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
