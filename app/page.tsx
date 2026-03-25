import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { DishesSection } from "@/components/sections/dishes"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { AtmosphereSection } from "@/components/sections/atmosphere"
import { EventsSection } from "@/components/sections/events"
import { ContactSection } from "@/components/sections/contact"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <DishesSection />
      <TestimonialsSection />
      <AtmosphereSection />
      <EventsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
