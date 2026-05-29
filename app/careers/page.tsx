import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"
import { careerOpenings } from "@/lib/site"

export const metadata = {
  title: "Careers",
  description:
    "Join a small, senior team of operators and strategists. Meridian Thirty hires deliberately, and supports the careers of those we hire for the long term.",
}

const valueProps = [
  {
    title: "Apprenticeship at the senior level.",
    body:
      "You will work directly with partners on consequential agendas — every engagement, every week.",
  },
  {
    title: "Range, by design.",
    body:
      "Our engagements span four practices and twelve sectors. You will build a career that is wide as well as deep.",
  },
  {
    title: "Compensation that matches outcomes.",
    body:
      "We pay at the top of the market and share the firm with the people who build it.",
  },
  {
    title: "A firm worth staying at.",
    body:
      "We hire deliberately, and we invest in the long-term careers of the people we hire.",
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        titleLines={[
          "Build a career",
          <>
            of <em className="accent-italic">consequence.</em>
          </>,
        ]}
        description="We hire a small number of exceptional people each year — operators, investors, and strategists who want to do their best work in a firm that takes craft seriously."
      />

      <section className="border-t border-hairline section-y-tight">
        <Container>
          <div className="grid gap-16 py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
            <div className="lg:col-span-5">
              <Eyebrow>Why M30</Eyebrow>
              <h2 className="mt-8 max-w-[16ch] font-serif text-display-lg text-ink">
                A firm built around the careers of its people.
              </h2>
            </div>
            <ul className="space-y-16 lg:col-span-7">
              {valueProps.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 0.06}
                  as="li"
                  className="grid gap-4 lg:grid-cols-12 lg:gap-10"
                >
                  <span className="font-serif text-lg text-accent lg:col-span-2">
                    0{i + 1}
                  </span>
                  <div className="lg:col-span-10">
                    <h3 className="font-serif text-display-md text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-5 max-w-editorial text-base leading-[1.75] text-fog">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="border-t border-hairline pt-24 lg:pt-28">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow>Open roles</Eyebrow>
                <h2 className="mt-8 font-serif text-display-lg text-ink">
                  Currently hiring.
                </h2>
              </div>
              <p className="max-w-editorial text-base leading-[1.75] text-fog">
                Don&apos;t see a fit? We are always interested in meeting
                exceptional operators, investors, and strategists.
              </p>
            </div>

            <ul className="mt-16 border-t border-hairline">
              {careerOpenings.map((role, i) => (
                <Reveal
                  key={role.role}
                  delay={i * 0.04}
                  as="li"
                  className="border-b border-hairline"
                >
                  <Link
                    href="/contact"
                    className="group grid gap-4 py-10 transition-colors duration-700 hover:bg-surface/40 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12"
                  >
                    <h3 className="font-serif text-display-md text-ink transition-colors duration-700 group-hover:text-accent lg:col-span-6">
                      {role.role}
                    </h3>
                    <p className="text-sm text-fog lg:col-span-3">
                      {role.location}
                    </p>
                    <p className="label-editorial lg:col-span-2">
                      {role.type}
                    </p>
                    <span className="flex items-center justify-end lg:col-span-1">
                      <ArrowUpRight
                        className="h-5 w-5 text-fog transition-all duration-700 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.25}
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
