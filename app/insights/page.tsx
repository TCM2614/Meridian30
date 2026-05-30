import Link from "next/link"

import { PageHero } from "@/components/sections/PageHero"
import { CTABanner } from "@/components/sections/CTABanner"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "News & Insights",
  description:
    "Original perspectives from the Meridian Thirty team on programme delivery, technology implementation, and bid leadership. Coming soon.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        titleLines={[
          "Original",
          <>
            <em className="accent-italic">perspectives.</em>
          </>,
          "Coming soon.",
        ]}
        description="We will publish original perspectives from our team on programme delivery, technology implementation, and bid leadership. Until then, the best way to hear our views is in conversation."
      />

      <section className="section-y-tight">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl border-y border-hairline py-20 text-center lg:py-28">
              <p className="label-editorial">In the meantime</p>
              <h2 className="mt-8 font-serif text-display-md text-ink">
                Speak with a partner directly.
              </h2>
              <p className="mx-auto mt-6 max-w-prose text-base leading-[1.75] text-fog">
                We are happy to share our point of view on any of the topics
                we work on — programme governance, technology implementation,
                or bid leadership. Every enquiry is answered personally.
              </p>
              <div className="mt-10 flex justify-center">
                <Button asChild size="md" withArrow>
                  <Link href="/contact">Begin a conversation</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
