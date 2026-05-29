"use client"

import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

type ParallaxImageProps = Omit<ImageProps, "fill" | "src" | "alt"> & {
  src: string
  alt: string
  /**
   * Vertical translation range in pixels (total). Higher = stronger parallax.
   * Default: 80 (the image moves -40px to +40px through the viewport).
   */
  range?: number
  /**
   * Aspect ratio class on the wrapper (e.g. "aspect-[4/5]").
   */
  aspect?: string
  /**
   * Optional wrapper className.
   */
  wrapperClassName?: string
  /**
   * Show the soft bottom vignette gradient.
   */
  vignette?: boolean
  /**
   * Enable image zoom on hover (group-hover scale).
   */
  hoverZoom?: boolean
  priority?: boolean
}

export function ParallaxImage({
  src,
  alt,
  range = 80,
  aspect = "aspect-[4/5]",
  wrapperClassName,
  className,
  sizes,
  vignette = true,
  hoverZoom = false,
  priority,
  ...rest
}: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0px", "0px"] : [`-${range / 2}px`, `${range / 2}px`],
  )

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden bg-surface",
        aspect,
        wrapperClassName,
      )}
    >
      <motion.div style={{ y }} className="absolute -inset-y-8 inset-x-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(max-width: 1024px) 100vw, 50vw"}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            hoverZoom && "group-hover:scale-[1.04]",
            className,
          )}
          {...rest}
        />
      </motion.div>
      {vignette ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-image-vignette"
        />
      ) : null}
    </div>
  )
}
