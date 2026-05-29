import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
import { capabilities } from "@/lib/site"

export const metadata = {
  title: "Capabilities",
  description:
    "Strategy, transformation, performance, and organisation—four interlocking practices delivered as one operating cadence.",
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={
          <>
            Four practices.
            <br />
            One operating cadence.
          </>
        }
        description="We deploy small, senior teams across four practices—integrated under a single agenda owned by the CEO and the board, and measured against the long-term performance of the institution."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="hairline-t">
            {capabilities.map((cap) => (
              <FadeUp key={cap.title}>
                <article className="grid gap-12 border-b border-hairline py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
                  <div className="lg:col-span-4">
                    <span className="font-serif text-xl text-accent">
                      {cap.number}
                    </span>
                    <h2 className="mt-6 font-serif text-display-lg text-ink">
                      {cap.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="max-w-prose text-base leading-relaxed text-fog sm:text-lg">
                      {cap.blurb}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-eyebrow uppercase text-fog">
                      Selected services
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {cap.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm text-ink"
                        >
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
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
