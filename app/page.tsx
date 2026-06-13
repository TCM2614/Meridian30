import { Hero } from "@/components/sections/Hero"
import { SectorsStrip } from "@/components/sections/SectorsStrip"
import { CapabilityCards } from "@/components/sections/CapabilityCards"
import { TechnologyStrip } from "@/components/sections/TechnologyStrip"
import { AboutSection } from "@/components/sections/AboutSection"
import { CTABanner } from "@/components/sections/CTABanner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorsStrip />
      <CapabilityCards />
      <TechnologyStrip />
      <AboutSection />
      <CTABanner />
    </>
  )
}
