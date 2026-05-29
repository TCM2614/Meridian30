"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LineReveal, Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { ParallaxImage } from "@/components/ui/parallax-image"

export function FeaturedInsight() {
  return (
    <section className="relative isolate section-y bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-accent-fade opacity-60"
      />
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal duration={1.1} className="group lg:col-span-6">
            <Link href="/insights" className="block">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="Featured insight"
                aspect="aspect-[5/6]"
                hoverZoom
                wrapperClassName="shadow-image-frame"
                range={100}
              />
              <div className="mt-6 flex items-center justify-between text-eyebrow uppercase text-fog">
                <span className="text-accent">Featured · Strategy</span>
                <span>May 2026 · 8 min</span>
              </div>
            </Link>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Featured Insight</Eyebrow>
            </Reveal>
            <h2 className="mt-8 max-w-[18ch] font-serif text-display-xl text-ink">
              <LineReveal>The CEO agenda</LineReveal>
              <LineReveal delay={0.08}>for the next decade</LineReveal>
              <LineReveal delay={0.16}>
                of <em className="accent-italic">compounding</em> advantage.
              </LineReveal>
            </h2>
            <Reveal delay={0.3} className="mt-10">
              <p className="editorial-body">
                What separates institutions that compound from those that
                drift is rarely strategy on paper — it is the operating
                cadence behind it. We examine how the most disciplined
                leadership teams turn conviction into a multi-year programme
                of consequence.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-12">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-fog">
                <span>By Anneliese Marchetti</span>
                <span aria-hidden>·</span>
                <span>Managing Partner</span>
              </div>
            </Reveal>
            <Reveal delay={0.5} className="mt-12">
              <Button asChild size="md" withArrow>
                <Link href="/insights">
                  <span className="flex items-center gap-3">
                    Read the article
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
                  </span>
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
