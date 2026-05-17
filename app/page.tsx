import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { SceneSection } from "@/components/SceneSection"
import { StatsSection } from "@/components/StatsSection"
import { DoctorSection } from "@/components/DoctorSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CtaSection } from "@/components/CtaSection"
import { Footer } from "@/components/Footer"

const scenes = [
  {
    scene: 1,
    title: "The Problem",
    visual:
      "Clips of heavy traffic, overflowing hospital waiting rooms, people looking exhausted and frustrated checking their phones.",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    reverse: false,
    dark: false,
  },
  {
    scene: 2,
    title: "The Solution",
    visual:
      "Person relaxing at home on a comfortable sofa. Doorbell rings. A professional healthcare worker enters with a medical bag, smiling warmly.",
    voiceover: "Now your liver test can come to you.",
    imageUrl:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
    reverse: true,
    dark: true,
  },
  {
    scene: 3,
    title: "Professional Equipment",
    visual:
      "Close-up shots of advanced medical equipment being carefully unpacked. Gloves snapping on. A compact ultrasound-like machine being set up.",
    voiceover: "No hospital queues.",
    imageUrl:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80",
    reverse: false,
    dark: false,
  },
  {
    scene: 4,
    title: "Comfortable Experience",
    visual:
      "Person sitting comfortably on their sofa, relaxed and smiling, while the healthcare worker gently performs a scan-like procedure.",
    voiceover: "No painful procedures.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    reverse: true,
    dark: true,
  },
  {
    scene: 5,
    title: "For Everyone",
    visual:
      "A happy elderly couple laughing together. A young professional working on a laptop. Someone casually drinking morning coffee at home.",
    voiceover: "Just fast, comfortable liver screening… from your home.",
    imageUrl: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=800&q=80",
    reverse: false,
    dark: false,
  },
]

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <div className="pt-16">
        <HeroSection />

        <div id="how-it-works">
          {scenes.map((s) => (
            <SceneSection key={s.scene} {...s} />
          ))}
        </div>

        <StatsSection />

        <DoctorSection />

        <div id="features">
          <FeaturesSection />
        </div>

        <div id="book">
          <CtaSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}
