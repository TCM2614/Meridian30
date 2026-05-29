import { PageHero } from "@/components/sections/PageHero"
import { ContactForm } from "@/components/sections/ContactForm"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Reveal } from "@/components/ui/reveal"
import { site } from "@/lib/site"

export const metadata = {
  title: "Contact",
  description:
    "Begin a conversation with Meridian Thirty. We respond personally to every enquiry from a leadership team.",
}

const offices = [
  {
    city: "New York",
    address: "30 Hudson Yards, New York, NY",
    email: "newyork@meridianthirty.com",
  },
  {
    city: "London",
    address: "20 Curzon Street, Mayfair, London W1J",
    email: "london@meridianthirty.com",
  },
  {
    city: "Singapore",
    address: "Marina Bay Financial Centre, Singapore",
    email: "singapore@meridianthirty.com",
  },
  {
    city: "Dubai",
    address: "DIFC Gate Building, Dubai",
    email: "dubai@meridianthirty.com",
  },
]

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
        description="Every enquiry from a leadership team is read by a partner and answered personally. We typically respond within one business day."
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
                  <p className="text-ink">{site.contact.address}</p>
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
                <div className="mt-20">
                  <h3 className="label-editorial">Offices</h3>
                  <ul className="mt-8 grid gap-7 sm:grid-cols-2 sm:gap-8">
                    {offices.map((o) => (
                      <li key={o.city} className="card-premium">
                        <div className="relative z-10 p-7 lg:p-8">
                          <p className="font-serif text-xl text-ink">
                            {o.city}
                          </p>
                          <p className="mt-4 text-sm leading-[1.7] text-fog">
                            {o.address}
                          </p>
                          <a
                            href={`mailto:${o.email}`}
                            className="mt-4 block text-sm text-accent transition-colors duration-700 hover:text-ink"
                          >
                            {o.email}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
