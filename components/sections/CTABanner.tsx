import Link from "next/link"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60"
      />
      <Container className="relative py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <FadeUp>
              <h2 className="max-w-[20ch] font-serif text-display-xl text-ink">
                The most important conversations are the ones worth taking
                seriously.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-fog sm:text-lg">
                If your institution is facing an inflection point—an agenda
                that will define the next decade—we&apos;d welcome the
                conversation.
              </p>
            </FadeUp>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
            <FadeUp delay={0.2}>
              <Button asChild size="lg" className="group" withArrow>
                <Link href="/contact">Begin a conversation</Link>
              </Button>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Button asChild variant="outline" size="lg">
                <Link href="/our-work">See our work</Link>
              </Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
