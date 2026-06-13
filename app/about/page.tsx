import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { leadership, principles, technologies } from "@/lib/site"

export const metadata = {
  title: "About",
  description:
    "Meridian Thirty is a boutique consultancy of senior practitioners. Independent, partner-led, and engaged where the work needs to land.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        titleLines={[
          "A small, senior",
          <>
            <em className="accent-italic">delivery</em> firm.
          </>,
        ]}
        description="Meridian Thirty is a boutique consultancy of senior practitioners. We deliver programmes, advisory, technology implementation support, and bid leadership for organisations across the public and private sectors — and we remain on the work from first conversation through to service transition."
      />

      <section className="section-y-tight">
        <Container>
          <div className="grid gap-16 border-y border-hairline py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
            <div className="lg:col-span-4">
              <Eyebrow>Principles</Eyebrow>
            </div>
            <ul className="space-y-16 lg:col-span-8">
              {principles.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.06}
                  as="li"
                  className="grid gap-4 lg:grid-cols-12 lg:gap-10"
                >
                  <span className="font-serif text-lg text-accent lg:col-span-2">
                    0{i + 1}
                  </span>
                  <div className="lg:col-span-10">
                    <h3 className="font-serif text-display-md text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-5 max-w-editorial text-base leading-[1.75] text-fog">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid gap-16 py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
            <div className="lg:col-span-4">
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="mt-8 font-serif text-display-lg text-ink">
                Partners on the work.
              </h2>
              <p className="mt-8 editorial-body">
                A small leadership team with direct delivery backgrounds —
                because the leaders we serve want to work with the people
                doing the work, not through layers of management.
              </p>
            </div>
            <ul className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:col-span-8 lg:gap-10">
              {leadership.map((m, i) => (
                <Reveal
                  key={m.name}
                  delay={i * 0.05}
                  as="li"
                  className="card-premium"
                >
                  <div className="relative z-10 p-9 lg:p-11">
                    <h3 className="font-serif text-display-md text-ink">
                      {m.name}
                    </h3>
                    <p className="mt-3 label-editorial text-accent">
                      {m.role}
                    </p>
                    <p className="mt-7 max-w-prose text-[0.95rem] leading-[1.7] text-fog">
                      {m.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid gap-16 border-t border-hairline py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
            <div className="lg:col-span-4">
              <Eyebrow>Technology Experience</Eyebrow>
              <h2 className="mt-8 font-serif text-display-lg text-ink">
                Platforms we work alongside.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="editorial-body">
                Our consultants have experience supporting implementations
                and optimisation initiatives involving these platforms. We
                position ourselves as advisory, delivery oversight, and
                client-side coordination — working alongside, rather than
                replacing, systems integrators.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
                {technologies.map((t) => (
                  <li
                    key={t}
                    className="flex items-center justify-center bg-background px-6 py-7 text-center text-sm font-medium tracking-[0.06em] text-ink transition-colors duration-700 hover:bg-surface hover:text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
