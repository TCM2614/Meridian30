import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
import { trustedBy } from "@/lib/site"

export function TrustedBy() {
  return (
    <section className="hairline-y bg-background py-14 lg:py-16">
      <Container>
        <FadeUp>
          <p className="text-eyebrow uppercase text-fog">
            Trusted by leadership teams at
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {trustedBy.map((logo) => (
              <li
                key={logo}
                className="flex items-center justify-center text-center text-[0.78rem] font-medium tracking-[0.22em] text-fog/70 transition-colors hover:text-ink"
              >
                {logo}
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  )
}
