"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { LineReveal, Reveal } from "@/components/ui/reveal"
import { ParallaxImage } from "@/components/ui/parallax-image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient pt-44 lg:pt-56">
      <Container size="wide">
        <div className="grid items-end gap-20 pb-28 lg:grid-cols-12 lg:gap-12 lg:pb-40">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="label-editorial flex items-center gap-3"
            >
              <span aria-hidden className="h-px w-10 bg-accent/60" />
              Boutique Delivery Consultancy · London
            </motion.div>

            <h1 className="mt-12 max-w-[16ch] font-serif text-display-3xl text-ink">
              <LineReveal immediate delay={0.05}>
                Delivered expertise.
              </LineReveal>
              <LineReveal immediate delay={0.2}>
                From strategy
              </LineReveal>
              <LineReveal immediate delay={0.34}>
                to <em className="accent-italic">implementation.</em>
              </LineReveal>
            </h1>

            <Reveal
              immediate
              delay={0.55}
              className="mt-12 max-w-editorial text-lg leading-[1.8] text-fog sm:text-xl"
            >
              <p>
                Meridian Thirty is a boutique consultancy of senior
                practitioners. We deliver programme management, advisory,
                technology implementation support, and bid leadership for
                organisations across the public and private sectors —
                embedded alongside the leaders accountable for the outcome.
              </p>
            </Reveal>

            <Reveal
              immediate
              delay={0.7}
              className="mt-14 flex flex-wrap items-center gap-5"
            >
              <Button asChild size="lg" withArrow>
                <Link href="/our-work">Explore our work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Begin a conversation</Link>
              </Button>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={0.4}
            duration={1.2}
            className="lg:col-span-5"
          >
            <div className="group relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                alt="Senior practitioners in client environment"
                aspect="aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                hoverZoom
                wrapperClassName="shadow-image-frame"
                range={120}
              />
              <div className="pointer-events-none absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6 text-eyebrow uppercase text-fog/90">
                <span>London</span>
                <span className="text-right leading-[1.6]">
                  Four practices
                  <br />
                  Five sectors
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hairline-t flex flex-col items-start gap-8 py-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-editorial text-base leading-[1.8] text-fog">
            Independent. Senior-led. Engaged where the work needs to land.
          </p>
          <div className="flex items-center gap-3 text-eyebrow uppercase text-fog">
            <ArrowDown className="h-4 w-4" strokeWidth={1.25} />
            <span>Scroll</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
