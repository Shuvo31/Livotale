'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: "🏠",
    title: "At-Home Service",
    description: "A certified healthcare professional comes directly to your door with all necessary equipment.",
  },
  {
    icon: "⚡",
    title: "Fast Results",
    description: "Get your liver health report within 24 hours, reviewed by specialist physicians.",
  },
  {
    icon: "💆",
    title: "Comfortable & Painless",
    description: "No needles, no discomfort. Our non-invasive ultrasound-based scan is completely painless.",
  },
  {
    icon: "🛡️",
    title: "Clinical Accuracy",
    description: "Hospital-grade diagnostic accuracy in the comfort of your own home.",
  },
  {
    icon: "📱",
    title: "Digital Health Record",
    description: "All results securely stored in your personal health dashboard, accessible anywhere.",
  },
  {
    icon: "🔄",
    title: "Follow-up Support",
    description: "Post-scan consultation included. Our team guides you through your results and next steps.",
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: "radial-gradient(ellipse at center, #D7316C 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#1EABB3" }}>
            Why Livotale
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Everything you need.
            <br />
            <span className="text-neutral-400">Nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border bg-white/[0.02] transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#D7316C55")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
