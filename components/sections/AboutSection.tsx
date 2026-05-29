import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LineReveal, Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "200+", label: "Engagements delivered" },
  { value: "12", label: "Sectors of depth" },
  { value: "4", label: "Continents served" },
  { value: "92%", label: "Repeat client rate" },
]

export function AboutSection() {
  return (
    <section className="section-y">
      <Container>
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>About M30</Eyebrow>
            </Reveal>
            <h2 className="mt-8 max-w-[14ch] font-serif text-display-xl text-ink">
              <LineReveal>A boutique built</LineReveal>
              <LineReveal delay={0.1}>
                for the <em className="accent-italic">consequential.</em>
              </LineReveal>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="editorial-body">
                Meridian Thirty was founded on a quiet conviction: that the
                most consequential decisions an institution faces deserve
                small, senior teams — free of the conflicts and apparatus
                that slow larger firms.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <p className="editorial-body text-base text-fog">
                We work in deep partnership with chief executives, boards,
                and investment committees. Our engagements are intentionally
                few, always senior-led, and measured against the only
                standard that matters: the long-term performance of the
                institutions we serve.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-16 grid grid-cols-2 gap-8 border-t border-hairline pt-12 lg:grid-cols-4 lg:gap-10">
                {stats.map((s) => (
                  <li key={s.label} className="flex flex-col gap-3">
                    <span className="font-serif text-display-lg text-ink">
                      {s.value}
                    </span>
                    <span className="label-editorial">{s.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28} className="mt-14">
              <Button asChild variant="outline" size="md">
                <Link href="/about">More about the firm</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
