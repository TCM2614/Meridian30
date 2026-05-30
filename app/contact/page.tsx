import { PageHero } from "@/components/sections/PageHero"
import { ContactForm } from "@/components/sections/ContactForm"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"
import { site } from "@/lib/site"

export const metadata = {
  title: "Contact",
  description:
    "Begin a conversation with Meridian Thirty. London-based, partner-led, with a one-business-day response commitment to every enquiry.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titleLines={[
          "Begin a",
          <>
            <em className="accent-italic">conversation.</em>
          </>,
        ]}
        description="Every enquiry is read by a partner and answered personally. We typically respond within one business day."
      />

      <section className="section-y-tight">
        <Container>
          <div className="grid gap-20 border-t border-hairline pt-24 lg:grid-cols-12 lg:gap-12 lg:pt-32">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Direct</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 font-serif text-display-lg text-ink">
                  Speak with a partner.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-12 space-y-3 text-base">
                  <p className="text-ink">{site.contact.fullAddress}</p>
                  <p>
                    <a
                      className="text-fog transition-colors duration-700 hover:text-accent"
                      href={`mailto:${site.contact.email}`}
                    >
                      {site.contact.email}
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-fog transition-colors duration-700 hover:text-accent"
                      href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                    >
                      {site.contact.phone}
                    </a>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <ul className="mt-16 grid gap-7 sm:grid-cols-2 sm:gap-8">
                  <li className="card-premium">
                    <div className="relative z-10 p-7 lg:p-8">
                      <p className="label-editorial text-accent">
                        Where to find us
                      </p>
                      <p className="mt-5 font-serif text-xl text-ink">
                        London, United Kingdom
                      </p>
                      <p className="mt-4 text-sm leading-[1.7] text-fog">
                        Our practice is based in central London. We work with
                        clients across the United Kingdom, Europe, and select
                        international engagements.
                      </p>
                    </div>
                  </li>
                  <li className="card-premium">
                    <div className="relative z-10 p-7 lg:p-8">
                      <p className="label-editorial text-accent">
                        Response commitment
                      </p>
                      <p className="mt-5 font-serif text-xl text-ink">
                        Within one business day
                      </p>
                      <p className="mt-4 text-sm leading-[1.7] text-fog">
                        Every enquiry is answered personally by a partner.
                        We will not route you through a sales team.
                      </p>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
