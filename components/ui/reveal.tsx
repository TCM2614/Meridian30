"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * LineReveal — masks a single line of editorial typography and reveals it
 * with a clip-style upward translate. Wrap each visual line of a heading.
 *
 *   <h1>
 *     <LineReveal>Strategy with</LineReveal>
 *     <LineReveal delay={0.1}>conviction.</LineReveal>
 *   </h1>
 */
type LineRevealProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  immediate?: boolean
}

const lineVariants: Variants = {
  hidden: { y: "115%" },
  visible: (custom: { delay: number; duration: number }) => ({
    y: "0%",
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function LineReveal({
  children,
  delay = 0,
  duration = 1.05,
  className,
  immediate = false,
}: LineRevealProps) {
  return (
    <span className={cn("block overflow-hidden pb-[0.05em]", className)}>
      <motion.span
        className="block"
        initial="hidden"
        animate={immediate ? "visible" : undefined}
        whileInView={immediate ? undefined : "visible"}
        viewport={immediate ? undefined : { once: true, amount: 0.4 }}
        variants={lineVariants}
        custom={{ delay, duration }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Reveal — a generic clip-mask reveal used for blocks (paragraphs, CTAs, etc).
 * Less dramatic than LineReveal; applies a soft fade + small Y translate.
 */
type RevealProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: "div" | "span" | "li" | "p"
  immediate?: boolean
}

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  className,
  as = "div",
  immediate = false,
}: RevealProps) {
  const Component = motion[as] as typeof motion.div
  return (
    <Component
      className={className}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : { once: true, amount: 0.25 }}
      variants={blockVariants}
      custom={{ delay, duration }}
    >
      {children}
    </Component>
  )
}
