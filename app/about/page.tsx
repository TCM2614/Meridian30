import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
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
      "We are partner-owned and conflict-free—free to be honest with the leaders we serve, including when honesty is uncomfortable.",
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
        title="A boutique built for the consequential."
        description="Meridian Thirty was founded on a quiet conviction: that the most consequential decisions an institution faces deserve small, senior teams—free of the conflicts and apparatus that slow larger firms."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 border-y border-hairline py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <div className="lg:col-span-4">
              <Eyebrow>Principles</Eyebrow>
            </div>
            <ul className="space-y-12 lg:col-span-8">
              {principles.map((p, i) => (
                <FadeUp
                  key={p.title}
                  delay={i * 0.05}
                  as="li"
                  className="grid gap-4 lg:grid-cols-12 lg:gap-8"
                >
                  <span className="font-serif text-xl text-accent lg:col-span-2">
                    0{i + 1}
                  </span>
                  <div className="lg:col-span-10">
                    <h3 className="font-serif text-2xl text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-fog">
                      {p.body}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </ul>
          </div>

          <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
            <div className="lg:col-span-4">
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="mt-6 font-serif text-display-lg text-ink">
                Partners on the work.
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-fog">
                A small leadership team with a deliberately broad operating
                background—because the institutions we serve do not operate in
                a single dimension.
              </p>
            </div>
            <ul className="grid gap-px bg-hairline sm:grid-cols-2 lg:col-span-8">
              {leadership.map((m) => (
                <FadeUp
                  key={m.name}
                  as="li"
                  className="bg-background p-8 lg:p-10"
                >
                  <h3 className="font-serif text-2xl text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-eyebrow uppercase text-accent">
                    {m.role}
                  </p>
                  <p className="mt-6 max-w-prose text-sm leading-relaxed text-fog">
                    {m.bio}
                  </p>
                </FadeUp>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
