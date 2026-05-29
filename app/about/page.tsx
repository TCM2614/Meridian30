import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { leadership } from "@/lib/site"

export const metadata = {
  title: "About",
  description:
    "Meridian Thirty is a boutique strategy consultancy. Independent, senior-led, and built for the inflection points that define an institution's next decade.",
}

const principles = [
  {
    title: "Senior-led, always.",
    body:
      "Every engagement is owned by a partner who is on the work, every week. There are no pyramids, no rotations, and no surrogates.",
  },
  {
    title: "Few engagements, deeply done.",
    body:
      "We accept a small number of engagements each year. The discipline of saying no is what allows us to deliver the work we accept.",
  },
  {
    title: "Independent by design.",
    body:
      "We are partner-owned and conflict-free — free to be honest with the leaders we serve, including when honesty is uncomfortable.",
  },
  {
    title: "Measured by long-term outcomes.",
    body:
      "We are paid for our work; we are judged by the long-term performance of the institutions we help to shape.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        titleLines={[
          "A boutique built",
          <>
            for the <em className="accent-italic">consequential.</em>
          </>,
        ]}
        description="Meridian Thirty was founded on a quiet conviction: that the most consequential decisions an institution faces deserve small, senior teams — free of the conflicts and apparatus that slow larger firms."
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
                A small leadership team with a deliberately broad operating
                background — because the institutions we serve do not operate
                in a single dimension.
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
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
