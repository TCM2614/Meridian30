import { Hero } from "@/components/sections/Hero"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { CapabilityCards } from "@/components/sections/CapabilityCards"
import { FeaturedInsight } from "@/components/sections/FeaturedInsight"
import { AboutSection } from "@/components/sections/AboutSection"
import { CTABanner } from "@/components/sections/CTABanner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <CapabilityCards />
      <FeaturedInsight />
      <AboutSection />
      <CTABanner />
    </>
  )
}
