"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
      />
      <Container size="wide">
        <div className="grid items-end gap-16 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-32">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <Eyebrow>Boutique Strategy Consultancy</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-8 max-w-[18ch] font-serif text-display-2xl text-ink"
            >
              Strategy with conviction.
              <br />
              <span className="text-accent">Outcomes that endure.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="mt-8 max-w-prose text-lg leading-relaxed text-fog"
            >
              Meridian Thirty partners with leadership teams at the world&apos;s
              most consequential institutions—shaping strategy, accelerating
              transformation, and building organisations designed to compound
              advantage for decades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="group" withArrow>
                <Link href="/our-work">Explore our work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Begin a conversation</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                alt="Executive consulting environment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 text-eyebrow uppercase text-fog">
                <span>Est. 2014</span>
                <span className="text-right">
                  Four practices.
                  <br />
                  Twelve sectors.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="hairline-t flex flex-col items-start gap-6 py-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-prose text-sm leading-relaxed text-fog">
            Independent. Senior-led. Built for the inflection points that
            define an institution&apos;s next decade.
          </p>
          <div className="flex items-center gap-3 text-eyebrow uppercase text-fog">
            <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
            <span>Scroll</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
