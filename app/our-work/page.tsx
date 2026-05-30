import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { ParallaxImage } from "@/components/ui/parallax-image"
import { work } from "@/lib/site"

export const metadata = {
  title: "Our Work",
  description:
    "Selected anonymised engagements — programme governance, PMO transformation, Salesforce optimisation, and senior bid leadership across the public and private sectors.",
}

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        titleLines={[
          "Engagements that",
          <>
            <em className="accent-italic">land</em> the work.
          </>,
        ]}
        description="A selection of recent engagements, anonymised in line with our standard confidentiality. Outcomes are described as the leadership teams we partner with would describe them."
      />

      <section className="section-y-tight">
        <Container>
          <ul className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {work.map((item, i) => (
              <Reveal
                key={item.headline}
                delay={i * 0.06}
                as="li"
                className="card-premium group"
              >
                <article className="relative z-10">
                  <ParallaxImage
                    src={item.image}
                    alt={item.client}
                    aspect="aspect-[4/3]"
                    hoverZoom
                    range={60}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="flex flex-col gap-6 p-9 lg:p-11">
                    <div className="flex items-center justify-between text-eyebrow uppercase text-fog">
                      <span>{item.sector}</span>
                      <span className="text-accent">{item.metric}</span>
                    </div>
                    <h3 className="max-w-[24ch] font-serif text-display-md leading-[1.15] text-ink transition-colors duration-700 group-hover:text-accent">
                      {item.headline}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.7] text-fog">
                      {item.summary}
                    </p>
                    <div className="border-t border-hairline pt-6">
                      <p className="label-editorial">Outcome</p>
                      <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink">
                        {item.outcome}
                      </p>
                    </div>
                    <p className="text-sm text-fog">
                      <span className="text-fog/60">Client · </span>
                      {item.client}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <p className="mt-20 max-w-editorial text-sm italic leading-[1.75] text-fog">
              Confidentiality is the default for our engagements. The
              examples shown are sufficiently anonymised; further detail can
              be discussed under NDA.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
