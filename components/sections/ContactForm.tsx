"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"

const inputBase =
  "w-full border border-hairline bg-transparent px-5 py-4 text-base text-ink placeholder:text-fog/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors duration-500"
const labelBase = "label-editorial"

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Reveal as="div" className="card-premium lg:col-span-7">
      <form
        onSubmit={handleSubmit}
        className="relative z-10 p-10 lg:p-14"
      >
        {submitted ? (
          <div className="flex min-h-[460px] flex-col items-start justify-center gap-7">
            <span className="label-editorial text-accent">Thank you</span>
            <h3 className="max-w-[20ch] font-serif text-display-md text-ink">
              Your enquiry has been received.
            </h3>
            <p className="max-w-prose text-base leading-[1.75] text-fog">
              A partner will be in touch personally within one business day.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className={labelBase}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className={inputBase}
                  placeholder="Full name"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="role" className={labelBase}>
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  className={inputBase}
                  placeholder="e.g. Chief Executive Officer"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="company" className={labelBase}>
                  Organisation
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className={inputBase}
                  placeholder="Organisation"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className={labelBase}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputBase}
                  placeholder="you@organisation.com"
                />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <label htmlFor="topic" className={labelBase}>
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  defaultValue=""
                  className={inputBase}
                >
                  <option value="" disabled className="bg-background">
                    Select a topic
                  </option>
                  <option className="bg-background">Strategy</option>
                  <option className="bg-background">Transformation</option>
                  <option className="bg-background">Performance</option>
                  <option className="bg-background">Organisation</option>
                  <option className="bg-background">Private Capital</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <label htmlFor="message" className={labelBase}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={`${inputBase} resize-none`}
                  placeholder="Tell us briefly about the agenda you are facing."
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-[1.7] text-fog">
                By submitting this form, you agree to our discreet handling
                of your enquiry. We do not share information with third
                parties.
              </p>
              <Button type="submit" size="lg" withArrow>
                Send enquiry
              </Button>
            </div>
          </>
        )}
      </form>
    </Reveal>
  )
}
