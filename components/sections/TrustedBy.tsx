import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { trustedBy } from "@/lib/site"

export function TrustedBy() {
  return (
    <section className="hairline-y bg-background py-16 lg:py-20">
      <Container>
        <Reveal>
          <p className="label-editorial">
            Trusted by leadership teams at
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-12 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {trustedBy.map((logo) => (
              <li
                key={logo}
                className="flex items-center justify-center text-center text-[0.78rem] font-medium tracking-[0.26em] text-fog/70 transition-colors duration-700 hover:text-ink"
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
