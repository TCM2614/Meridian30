"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { FadeUp } from "@/components/ui/fade-up"
import { Button } from "@/components/ui/button"

const ease = [0.16, 1, 0.3, 1] as const

export function FeaturedInsight() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="group relative lg:col-span-6"
          >
            <Link href="/insights" className="block">
              <div className="relative aspect-[5/6] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                  alt="Featured insight"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-background/80 px-4 py-2 text-eyebrow uppercase text-accent backdrop-blur">
                  Featured · Strategy
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="lg:col-span-6">
            <FadeUp>
              <Eyebrow>Featured Insight</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-6 max-w-[18ch] font-serif text-display-xl text-ink">
                The CEO agenda for the next decade of compounding advantage.
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-fog sm:text-lg">
                What separates institutions that compound from those that drift
                is rarely strategy on paper—it is the operating cadence behind
                it. We examine how the most disciplined leadership teams turn
                conviction into a multi-year programme of consequence.
              </p>
            </FadeUp>
            <FadeUp delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-fog">
                <span>By Anneliese Marchetti</span>
                <span aria-hidden>·</span>
                <span>May 2026</span>
                <span aria-hidden>·</span>
                <span>8 min read</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.34}>
              <div className="mt-12">
                <Button asChild size="md" className="group" withArrow>
                  <Link href="/insights">
                    Read the article
                    <ArrowUpRight
                      className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
