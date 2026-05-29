"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"

const ease = [0.16, 1, 0.3, 1] as const

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  meta?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, meta }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-8 max-w-[20ch] font-serif text-display-2xl text-ink"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease }}
            className="mt-8 max-w-prose text-lg leading-relaxed text-fog"
          >
            {description}
          </motion.p>
        ) : null}
        {meta ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-14"
          >
            {meta}
          </motion.div>
        ) : null}
      </Container>
    </section>
  )
}
