import Link from "next/link"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "200+", label: "Engagements delivered" },
  { value: "12", label: "Sectors of depth" },
  { value: "4", label: "Continents served" },
  { value: "92%", label: "Repeat client rate" },
]

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <FadeUp>
              <Eyebrow>About M30</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-6 max-w-[16ch] font-serif text-display-xl text-ink">
                A boutique built for the consequential.
              </h2>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <FadeUp>
              <p className="max-w-prose text-lg leading-relaxed text-fog">
                Meridian Thirty was founded on a quiet conviction: that the
                most consequential decisions an institution faces deserve
                small, senior teams—free of the conflicts and apparatus that
                slow larger firms.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-fog">
                We work in deep partnership with chief executives, boards, and
                investment committees. Our engagements are intentionally few,
                always senior-led, and measured against the only standard that
                matters: the long-term performance of the institutions we
                serve.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <ul className="mt-14 grid grid-cols-2 gap-px border border-hairline bg-hairline lg:grid-cols-4">
                {stats.map((s) => (
                  <li
                    key={s.label}
                    className="flex flex-col gap-3 bg-background p-6 lg:p-8"
                  >
                    <span className="font-serif text-4xl text-ink">
                      {s.value}
                    </span>
                    <span className="text-eyebrow uppercase text-fog">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="mt-12">
                <Button asChild variant="outline" size="md">
                  <Link href="/about">More about the firm</Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
