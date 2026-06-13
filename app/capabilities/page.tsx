import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { capabilityDetails, technologies } from "@/lib/site"

export const metadata = {
  title: "Capabilities",
  description:
    "Project & programme management, consultancy, tender & bid writing, and technology implementation support — delivered by senior practitioners.",
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        titleLines={[
          "Four practices.",
          <>
            <em className="accent-italic">One</em> delivery
          </>,
          "cadence.",
        ]}
        description="We deploy small, senior teams across four practices — embedded with client teams and accountable for landing the work, not just advising on it."
      />

      <section className="section-y-tight">
        <Container>
          <div className="hairline-t">
            {capabilityDetails.map((cap) => (
              <Reveal key={cap.title}>
                <article className="grid gap-12 border-b border-hairline py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
                  <div className="lg:col-span-4">
                    <span className="font-serif text-base text-accent">
                      {cap.number}
                    </span>
                    <h2 className="mt-8 font-serif text-display-lg text-ink">
                      {cap.title}
                    </h2>
                    <p className="mt-8 editorial-body text-base">
                      {cap.overview}
                    </p>
                    {cap.positioning ? (
                      <p className="mt-6 max-w-prose border-l border-accent/40 pl-5 text-sm italic leading-[1.7] text-fog">
                        {cap.positioning}
                      </p>
                    ) : null}
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="label-editorial">Scope of services</h3>
                    <ul className="mt-7 space-y-4">
                      {cap.scope.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-[1.6] text-ink"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-px w-3 shrink-0 bg-accent/60"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {cap.title === "Technology Implementation" ? (
                      <div className="mt-12">
                        <h3 className="label-editorial">
                          Platforms supported
                        </h3>
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {technologies.map((t) => (
                            <li
                              key={t}
                              className="border border-hairline px-3 py-2 text-xs tracking-[0.04em] text-fog"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="label-editorial">
                      Typical engagement scenarios
                    </h3>
                    <ul className="mt-7 space-y-7">
                      {cap.scenarios.map((s, i) => (
                        <li
                          key={i}
                          className="border-l border-hairline pl-5 text-sm italic leading-[1.7] text-fog"
                        >
                          {s}
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
