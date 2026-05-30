import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { industries } from "@/lib/site"

export const metadata = {
  title: "Industries",
  description:
    "Experience supporting programmes, transformation initiatives, reporting solutions, and technology implementations across financial services, public sector, technology, energy, and infrastructure.",
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        titleLines={[
          "Sector experience,",
          <>
            applied to <em className="accent-italic">delivery.</em>
          </>,
        ]}
        description="Experience supporting programmes, transformation initiatives, reporting solutions, and technology implementations within these sectors. Each engagement is led by partners with first-hand experience of the operating environment."
      />

      <section className="section-y-tight">
        <Container>
          <ul className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.title}
                delay={i * 0.05}
                as="li"
                className="card-premium group flex h-full flex-col justify-between gap-12"
              >
                <div className="relative z-10 p-9 lg:p-11">
                  <span className="font-serif text-base text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-12 font-serif text-display-md text-ink lg:mt-20">
                    {ind.title}
                  </h3>
                  <p className="mt-5 max-w-prose text-[0.95rem] leading-[1.7] text-fog">
                    {ind.blurb}
                  </p>
                  <span className="mt-12 block label-editorial transition-colors duration-700 group-hover:text-accent">
                    Practice lead → Partner
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
