'use client'

import { HealthScanVisual } from "@/components/ui/HealthScanVisual"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D7316C" />

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-0 py-20">

        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center z-10 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span
              className="inline-block px-3 py-1 text-xs font-semibold tracking-widest rounded-full border mb-6 text-white"
              style={{ borderColor: "#1EABB3", background: "rgba(30,171,179,0.1)" }}
            >
              HEALTHCARE FINALLY CAME HOME
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-4"
          >
            <p className="text-neutral-400 text-sm md:text-base italic mb-2">
              Your liver after years of stress, junk food & late nights:
            </p>
            <p className="text-white text-lg md:text-xl font-medium italic">
              &ldquo;Bro&hellip; we need to talk.&rdquo;
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold mt-4 leading-tight"
          >
            <span style={{ color: "#D7316C" }}>Liver</span>
            <span style={{ color: "#1EABB3" }}>Scan</span>
            <br />
            <span className="text-neutral-300 text-3xl md:text-4xl font-semibold">At Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 text-neutral-400 max-w-md text-sm md:text-base"
          >
            Professional liver screening delivered to your door. No queues, no hospitals, no stress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <button
              className="px-8 py-3 font-semibold rounded-full text-white hover:opacity-90 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #D7316C, #1EABB3)" }}
            >
              Book a Scan
            </button>
            <button className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-200">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right — scan visual, fully contained */}
        <div className="flex-1 w-full flex items-center justify-center" style={{ minHeight: 420 }}>
          <HealthScanVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-white/40 rounded-full scroll-dot" />
        </div>
      </div>
    </section>
  )
}
