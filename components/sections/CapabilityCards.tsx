"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeUp } from "@/components/ui/fade-up"
import { capabilities } from "@/lib/site"

const ease = [0.16, 1, 0.3, 1] as const

export function CapabilityCards() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <FadeUp>
              <SectionHeading
                eyebrow="Capabilities"
                title={
                  <>
                    Four practices.
                    <br />
                    One operating cadence.
                  </>
                }
                description="We deploy small, senior teams across four interlocking practices—integrated under a single agenda owned by the CEO and the board."
                size="xl"
              />
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease,
                  }}
                  className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
                >
                  <Link
                    href="/capabilities"
                    className="flex h-full flex-col"
                    aria-label={`${cap.title} — learn more`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-xl text-accent">
                        {cap.number}
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-fog transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                        strokeWidth={1.25}
                      />
                    </div>
                    <h3 className="mt-12 font-serif text-3xl text-ink lg:mt-20">
                      {cap.title}
                    </h3>
                    <p className="mt-4 max-w-prose text-sm leading-relaxed text-fog">
                      {cap.blurb}
                    </p>
                    <ul className="mt-8 space-y-2 text-sm text-fog">
                      {cap.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-3">
                          <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
