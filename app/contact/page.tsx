import { PageHero } from "@/components/sections/PageHero"
import { ContactForm } from "@/components/sections/ContactForm"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
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
        title="Begin a conversation."
        description="Every enquiry from a leadership team is read by a partner and answered personally. We typically respond within one business day."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-16 border-t border-hairline pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-24">
            <div className="lg:col-span-5">
              <Eyebrow>Direct</Eyebrow>
              <h2 className="mt-6 font-serif text-display-lg text-ink">
                Speak with a partner.
              </h2>
              <div className="mt-10 space-y-3 text-base">
                <p className="text-ink">{site.contact.address}</p>
                <p>
                  <a
                    className="text-fog transition-colors hover:text-accent"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                </p>
                <p>
                  <a
                    className="text-fog transition-colors hover:text-accent"
                    href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  >
                    {site.contact.phone}
                  </a>
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-eyebrow uppercase text-fog">Offices</h3>
                <ul className="mt-6 grid gap-px bg-hairline sm:grid-cols-2">
                  {offices.map((o) => (
                    <li key={o.city} className="bg-background p-6">
                      <p className="font-serif text-xl text-ink">{o.city}</p>
                      <p className="mt-3 text-sm text-fog">{o.address}</p>
                      <a
                        href={`mailto:${o.email}`}
                        className="mt-3 block text-sm text-accent transition-colors hover:text-ink"
                      >
                        {o.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
