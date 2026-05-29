"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LineReveal, Reveal } from "@/components/ui/reveal"
import { capabilities } from "@/lib/site"

const ease = [0.16, 1, 0.3, 1] as const

export function CapabilityCards() {
  return (
    <section className="section-y">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Capabilities</Eyebrow>
            </Reveal>
            <h2 className="mt-8 max-w-[14ch] font-serif text-display-xl text-ink">
              <LineReveal>Four practices.</LineReveal>
              <LineReveal delay={0.1}>
                <em className="accent-italic">One</em> operating
              </LineReveal>
              <LineReveal delay={0.18}>cadence.</LineReveal>
            </h2>
            <Reveal delay={0.3} className="mt-10">
              <p className="editorial-body">
                We deploy small, senior teams across four interlocking
                practices — integrated under a single agenda owned by the CEO
                and the board.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.08,
                    ease,
                  }}
                  className="card-premium group"
                >
                  <Link
                    href="/capabilities"
                    className="relative z-10 flex h-full flex-col p-9 lg:p-11"
                    aria-label={`${cap.title} — learn more`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-base text-accent">
                        {cap.number}
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-fog transition-all duration-700 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                        strokeWidth={1.25}
                      />
                    </div>
                    <h3 className="mt-20 font-serif text-display-md text-ink lg:mt-28">
                      {cap.title}
                    </h3>
                    <p className="mt-5 max-w-prose text-[0.95rem] leading-[1.7] text-fog">
                      {cap.blurb}
                    </p>
                    <ul className="mt-10 space-y-3 border-t border-hairline pt-7 text-sm text-fog">
                      {cap.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent/60"
                          />
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
