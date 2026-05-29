import Image from "next/image"
import Link from "next/link"

import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
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
        title={
          <>
            Engagements that shape the next decade of the institutions we serve.
          </>
        }
        description="A selection of recent work, presented as the leadership teams we partner with would describe it. Confidentiality is the default; what is shown here is published with permission or sufficiently anonymised."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <ul className="grid gap-px bg-hairline lg:grid-cols-2">
            {work.map((item, i) => (
              <FadeUp
                key={item.headline}
                delay={i * 0.05}
                as="li"
                className="group relative h-full bg-background"
              >
                <Link href="#" className="block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-4 p-8 lg:p-10">
                    <div className="flex items-center justify-between text-eyebrow uppercase text-fog">
                      <span>{item.sector}</span>
                      <span className="text-accent">{item.metric}</span>
                    </div>
                    <h3 className="max-w-[24ch] font-serif text-2xl text-ink lg:text-3xl">
                      {item.headline}
                    </h3>
                    <p className="text-sm text-fog">{item.client}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
