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
      "Overflowing hospital waiting rooms, long queues, exhausted patients waiting hours just for a basic liver test.",
    imageUrl:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
    reverse: false,
    dark: false,
  },
  {
    scene: 2,
    title: "The Solution",
    visual:
      "Person relaxing at home. A professional gastroenterologist arrives at the door with a medical bag, smiling warmly.",
    voiceover: "Now your liver test can come to you.",
    imageUrl:
      "https://images.unsplash.com/photo-1609188076864-c35269136b09?w=800&q=80",
    reverse: true,
    dark: true,
  },
  {
    scene: 3,
    title: "Liver Ultrasound",
    visual:
      "A certified specialist performs a painless liver ultrasound scan at your home — the same equipment used in top hospitals.",
    voiceover: "No hospital queues.",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    reverse: false,
    dark: false,
  },
  {
    scene: 4,
    title: "Comfortable Experience",
    visual:
      "Patient sits relaxed on their sofa while the specialist gently performs an abdominal scan — comfortable, quick, and stress-free.",
    voiceover: "No painful procedures.",
    imageUrl:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    reverse: true,
    dark: true,
  },
  {
    scene: 5,
    title: "For Everyone",
    visual:
      "Elderly patients, young professionals, busy parents — anyone who needs liver screening without leaving home.",
    voiceover: "Just fast, comfortable liver screening… from your home.",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
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
