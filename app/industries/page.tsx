import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
import { industries } from "@/lib/site"

export const metadata = {
  title: "Industries",
  description:
    "Deep sector expertise across financial services, energy, healthcare, industrials, technology, consumer, private capital, and the public sector.",
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector depth, executed by senior teams."
        description="Our industry leaders combine operating experience with the rigour of strategy. Each sector is led by partners who have spent careers, not engagements, in the field."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <ul className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <FadeUp
                key={ind.title}
                delay={i * 0.04}
                as="li"
                className="group flex h-full flex-col justify-between gap-10 bg-background p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
              >
                <div>
                  <span className="font-serif text-base text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 font-serif text-2xl text-ink lg:text-3xl">
                    {ind.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-fog">
                    {ind.blurb}
                  </p>
                </div>
                <span className="text-eyebrow uppercase text-fog transition-colors group-hover:text-accent">
                  Practice lead → Partner
                </span>
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
