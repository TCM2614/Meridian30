"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"

type MotionTag = "div" | "li" | "section" | "article" | "span" | "ul"

type FadeUpProps = {
  delay?: number
  y?: number
  duration?: number
  once?: boolean
  amount?: number
  as?: MotionTag
  className?: string
  children?: React.ReactNode
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function FadeUp({
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  as = "div",
  className,
  children,
}: FadeUpProps) {
  const Component = motion[as] as typeof motion.div
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      custom={{ delay, duration }}
      className={className}
    >
      {children}
    </Component>
  )
}
