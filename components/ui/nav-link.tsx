"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * NavLink — a "letter rise" hover, in the FT/Apple editorial idiom.
 * The label is rendered twice: the resting label slides up out of frame on
 * hover while a duplicate slides up into view from below in the accent tone.
 */
type NavLinkProps = {
  href: string
  children: React.ReactNode
  active?: boolean
  className?: string
}

export function NavLink({ href, children, active, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-5 items-center overflow-hidden text-sm tracking-[0.01em] text-fog transition-colors duration-500 ease-out-expo hover:text-ink",
        active && "text-ink",
        className,
      )}
    >
      <span className="relative block leading-5">
        <span
          aria-hidden
          className="block leading-5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
        >
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full leading-5 text-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
        {/* The visible (a11y) text */}
        <span className="sr-only">{children}</span>
      </span>
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100",
          active && "scale-x-100",
        )}
      />
    </Link>
  )
}
