'use client'

import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-lg tracking-tight">
          <span style={{ color: "#D7316C" }}>Livo</span>
          <span style={{ color: "#1EABB3" }}>tale</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#how-it-works" className="text-neutral-400 hover:text-white text-sm transition-colors">How it works</a>
        <a href="#features" className="text-neutral-400 hover:text-white text-sm transition-colors">Features</a>
        <a href="#book" className="text-neutral-400 hover:text-white text-sm transition-colors">Book a scan</a>
      </div>

      <button
        className="px-5 py-2 font-semibold rounded-full text-sm text-white transition-all duration-200 hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #D7316C, #1EABB3)" }}
      >
        Book Now
      </button>
    </motion.nav>
  )
}
