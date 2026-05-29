import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { capabilities } from "@/lib/site"

export const metadata = {
  title: "Capabilities",
  description:
    "Strategy, transformation, performance, and organisation — four interlocking practices delivered as one operating cadence.",
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        titleLines={[
          "Four practices.",
          <>
            <em className="accent-italic">One</em> operating
          </>,
          "cadence.",
        ]}
        description="We deploy small, senior teams across four practices — integrated under a single agenda owned by the CEO and the board, and measured against the long-term performance of the institution."
      />

      <section className="section-y-tight">
        <Container>
          <div className="hairline-t">
            {capabilities.map((cap) => (
              <Reveal key={cap.title}>
                <article className="grid gap-12 border-b border-hairline py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
                  <div className="lg:col-span-4">
                    <span className="font-serif text-base text-accent">
                      {cap.number}
                    </span>
                    <h2 className="mt-8 font-serif text-display-lg text-ink">
                      {cap.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="editorial-body">{cap.blurb}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="label-editorial">Selected services</h3>
                    <ul className="mt-7 space-y-4">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-ink">
                          <span
                            aria-hidden
                            className="mt-2 h-px w-3 shrink-0 bg-accent/60"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
