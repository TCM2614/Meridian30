import Link from "next/link"

import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { ParallaxImage } from "@/components/ui/parallax-image"
import { work } from "@/lib/site"

export const metadata = {
  title: "Our Work",
  description:
    "Selected engagements with leadership teams across financial services, energy, healthcare, technology, and private capital.",
}

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        titleLines={[
          "Engagements that shape",
          <>
            the next <em className="accent-italic">decade</em>
          </>,
          "of the institutions we serve.",
        ]}
        description="A selection of recent work, presented as the leadership teams we partner with would describe it. Confidentiality is the default; what is shown here is published with permission or sufficiently anonymised."
      />

      <section className="section-y-tight">
        <Container>
          <ul className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {work.map((item, i) => (
              <Reveal
                key={item.headline}
                delay={i * 0.06}
                as="li"
                className="card-premium group"
              >
                <Link href="#" className="relative z-10 block">
                  <ParallaxImage
                    src={item.image}
                    alt={item.client}
                    aspect="aspect-[4/3]"
                    hoverZoom
                    range={60}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="flex flex-col gap-5 p-9 lg:p-11">
                    <div className="flex items-center justify-between text-eyebrow uppercase text-fog">
                      <span>{item.sector}</span>
                      <span className="text-accent">{item.metric}</span>
                    </div>
                    <h3 className="max-w-[24ch] font-serif text-display-md text-ink transition-colors duration-700 group-hover:text-accent">
                      {item.headline}
                    </h3>
                    <p className="text-sm text-fog">{item.client}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
