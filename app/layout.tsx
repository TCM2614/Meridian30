import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { site } from "@/lib/site"

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianthirty.com"),
  title: {
    default: `${site.name} — Boutique Delivery Consultancy | Programmes, Technology, Bids`,
    template: `%s — ${site.name}`,
  },
  description:
    "Meridian Thirty is a UK boutique consultancy of senior practitioners. We deliver programme management, advisory, technology implementation support, and bid leadership across the public and private sectors.",
  keywords: [
    "consultancy",
    "boutique consultancy",
    "programme management",
    "PMO",
    "bid writing",
    "tender writing",
    "technology implementation",
    "Salesforce",
    "ServiceNow",
    "Power BI",
    "Tableau",
    "London consultancy",
    "public sector consultancy",
    "Meridian Thirty",
  ],
  openGraph: {
    title: `${site.name} — Boutique Delivery Consultancy`,
    description: site.description,
    type: "website",
    siteName: site.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-dvh bg-background text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
