import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LineReveal, Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "100%", label: "Senior-led engagements" },
  { value: "4", label: "Capability areas" },
  { value: "5", label: "Sectors of focus" },
  { value: "1:1", label: "Partner-to-engagement" },
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
            <h2 className="mt-8 max-w-[16ch] font-serif text-display-xl text-ink">
              <LineReveal>Senior practitioners,</LineReveal>
              <LineReveal delay={0.1}>
                on the <em className="accent-italic">work.</em>
              </LineReveal>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="editorial-body">
                Meridian Thirty is a small, senior consultancy. Our
                practitioners are former programme directors, business
                analysts, and bid leads from large consultancies, systems
                integrators, and operating businesses — and we remain on the
                work from first conversation through to service transition.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <p className="editorial-body text-base text-fog">
                We accept a deliberate number of engagements at any one time.
                Each is led by a partner; engagement teams are intentionally
                small. Clients work directly with the people doing the work —
                not through layers of management.
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
