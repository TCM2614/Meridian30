import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"
import { technologies } from "@/lib/site"

export function TechnologyStrip() {
  return (
    <section className="relative isolate overflow-hidden border-y border-hairline bg-surface/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-accent-fade opacity-50"
      />
      <Container className="relative section-y-tight">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Technology Expertise</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-[16ch] font-serif text-display-lg text-ink">
                Platforms we have experience supporting.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-prose text-base leading-[1.75] text-fog">
                Advisory, delivery oversight, configuration support,
                implementation coordination, and adoption management — across
                the platforms most commonly found in our clients&apos; estates.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.18}>
              <ul className="grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center justify-center bg-surface px-6 py-8 text-center text-sm font-medium tracking-[0.06em] text-ink transition-colors duration-700 hover:bg-surface2 hover:text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
