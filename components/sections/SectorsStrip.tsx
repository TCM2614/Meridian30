import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { sectors } from "@/lib/site"

export function SectorsStrip() {
  return (
    <section className="hairline-y bg-background py-16 lg:py-20">
      <Container>
        <Reveal>
          <p className="label-editorial">Sectors of practice</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-1 items-center gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector) => (
              <li
                key={sector}
                className="flex items-center justify-center text-center text-[0.78rem] font-medium tracking-[0.26em] uppercase text-fog/70 transition-colors duration-700 hover:text-ink"
              >
                {sector}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
