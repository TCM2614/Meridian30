import Link from "next/link"
import { Container } from "@/components/ui/container"
import { LineReveal, Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden border-y border-hairline bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-accent-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <Container className="relative section-y">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <h2 className="max-w-[20ch] font-serif text-display-xl text-ink">
              <LineReveal>Tell us about</LineReveal>
              <LineReveal delay={0.08}>the work in front</LineReveal>
              <LineReveal delay={0.16}>
                of <em className="accent-italic">you.</em>
              </LineReveal>
            </h2>
            <Reveal delay={0.3} className="mt-10">
              <p className="editorial-body">
                If you are scoping a programme, preparing a major bid, or
                planning a technology implementation, we would welcome a
                direct conversation. Every enquiry is read by a partner and
                answered personally — typically within one business day.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-wrap items-center gap-5 lg:col-span-4 lg:justify-end">
            <Reveal delay={0.35}>
              <Button asChild size="lg" withArrow>
                <Link href="/contact">Begin a conversation</Link>
              </Button>
            </Reveal>
            <Reveal delay={0.45}>
              <Button asChild variant="outline" size="lg">
                <Link href="/our-work">See our work</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
