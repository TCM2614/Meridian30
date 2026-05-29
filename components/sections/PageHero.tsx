"use client"

import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LineReveal, Reveal } from "@/components/ui/reveal"

type PageHeroProps = {
  eyebrow: string
  /**
   * Render lines explicitly. Each entry is one visual line; pass `<em/>` for
   * italic editorial accents. Strings are wrapped automatically.
   */
  titleLines: React.ReactNode[]
  description?: React.ReactNode
  meta?: React.ReactNode
}

export function PageHero({
  eyebrow,
  titleLines,
  description,
  meta,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient pb-24 pt-44 lg:pb-32 lg:pt-56">
      <Container>
        <Reveal immediate>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <h1 className="mt-12 max-w-[18ch] font-serif text-display-2xl text-ink">
          {titleLines.map((line, i) => (
            <LineReveal key={i} immediate delay={0.05 + i * 0.1}>
              {line}
            </LineReveal>
          ))}
        </h1>
        {description ? (
          <Reveal immediate delay={0.5} className="mt-12">
            <p className="editorial-body">{description}</p>
          </Reveal>
        ) : null}
        {meta ? (
          <Reveal immediate delay={0.65} className="mt-16">
            {meta}
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
