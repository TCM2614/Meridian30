import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { FadeUp } from "@/components/ui/fade-up"
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
        title="Editorial perspectives from our partners."
        description="A small body of work, written for executives. We publish only when we believe we have something useful and original to add."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <FadeUp>
            <Link
              href={featured.href}
              className="group flex flex-col justify-between gap-12 border-y border-hairline py-16 lg:flex-row lg:items-end lg:gap-20 lg:py-20"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 text-eyebrow uppercase text-fog">
                  <span className="text-accent">Featured</span>
                  <span>{featured.eyebrow}</span>
                </div>
                <h2 className="mt-6 font-serif text-display-xl text-ink transition-colors group-hover:text-accent">
                  {featured.title}
                </h2>
                <p className="mt-6 max-w-prose text-base leading-relaxed text-fog sm:text-lg">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm text-fog">
                <span>{featured.date}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-fog transition-all duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          </FadeUp>

          <ul className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((ins, i) => (
              <FadeUp
                key={ins.title}
                delay={i * 0.05}
                as="li"
                className="group h-full bg-background"
              >
                <Link
                  href={ins.href}
                  className="flex h-full flex-col gap-6 p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
                >
                  <span className="text-eyebrow uppercase text-accent">
                    {ins.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent">
                    {ins.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fog">
                    {ins.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm text-fog">
                    <span>{ins.date}</span>
                    <span>{ins.readTime}</span>
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
