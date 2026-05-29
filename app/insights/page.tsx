import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { insights } from "@/lib/site"

export const metadata = {
  title: "Insights",
  description:
    "Editorial perspectives from our partners on strategy, transformation, performance, and the institutions shaping the next decade.",
}

export default function InsightsPage() {
  const [featured, ...rest] = insights

  return (
    <>
      <PageHero
        eyebrow="Insights"
        titleLines={[
          "Editorial perspectives",
          <>
            from <em className="accent-italic">our</em> partners.
          </>,
        ]}
        description="A small body of work, written for executives. We publish only when we believe we have something useful and original to add."
      />

      <section className="section-y-tight">
        <Container>
          <Reveal>
            <Link
              href={featured.href}
              className="group flex flex-col justify-between gap-12 border-y border-hairline py-20 lg:flex-row lg:items-end lg:gap-24 lg:py-28"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 text-eyebrow uppercase text-fog">
                  <span className="text-accent">Featured</span>
                  <span>{featured.eyebrow}</span>
                </div>
                <h2 className="mt-8 font-serif text-display-xl text-ink transition-colors duration-700 group-hover:text-accent">
                  {featured.title}
                </h2>
                <p className="mt-8 editorial-body">{featured.excerpt}</p>
              </div>
              <div className="flex shrink-0 items-center gap-6 text-sm text-fog">
                <span>{featured.date}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-fog transition-all duration-700 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  strokeWidth={1.25}
                />
              </div>
            </Link>
          </Reveal>

          <ul className="mt-20 grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {rest.map((ins, i) => (
              <Reveal
                key={ins.title}
                delay={i * 0.06}
                as="li"
                className="card-premium group h-full"
              >
                <Link
                  href={ins.href}
                  className="relative z-10 flex h-full flex-col gap-6 p-9 lg:p-11"
                >
                  <span className="text-eyebrow uppercase text-accent">
                    {ins.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl leading-[1.2] text-ink transition-colors duration-700 group-hover:text-accent lg:text-[1.65rem]">
                    {ins.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.7] text-fog">
                    {ins.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-hairline pt-6 text-sm text-fog">
                    <span>{ins.date}</span>
                    <span>{ins.readTime}</span>
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
