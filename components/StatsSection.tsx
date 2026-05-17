'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "10,000+", label: "Scans completed" },
  { value: "98%", label: "Patient satisfaction" },
  { value: "24h", label: "Result turnaround" },
  { value: "1+", label: "Cities covered" },
]

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ background: "linear-gradient(135deg, #D7316C, #1EABB3)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-white">{s.value}</div>
              <div className="text-sm font-medium text-white/70 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
