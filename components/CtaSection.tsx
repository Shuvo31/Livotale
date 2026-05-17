'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Spotlight } from "@/components/ui/spotlight"
import { Card } from "@/components/ui/card"

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black px-6">
      <div className="max-w-5xl mx-auto">
        <Card className="relative overflow-hidden bg-black/[0.96] border-white/10 p-12 md:p-20 text-center">
          <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="#D7316C" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* Thumbnail-style brand label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#D7316C" }}
              />
              <span className="text-xs font-bold tracking-widest uppercase text-white/60">
                <span style={{ color: "#D7316C" }}>Livo</span>
                <span style={{ color: "#1EABB3" }}>tale</span>
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#1EABB3" }}
              />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Healthcare finally
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #D7316C, #1EABB3)" }}
              >
                decided to come home.
              </span>
            </h2>

            <p className="mt-6 text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
              Book your scan today. A Livotale healthcare professional will be with you within 48 hours.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-10 py-4 font-bold rounded-full text-lg text-white hover:opacity-90 transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #D7316C, #1EABB3)" }}
              >
                Book Now — It&apos;s Free to Enquire
              </button>
            </div>

            <p className="mt-4 text-neutral-600 text-sm">
              No commitment. Cancel anytime.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="tel:8282012929"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                82 8201 2929
              </a>
              <span className="hidden sm:block text-white/10">|</span>
              <a
                href="mailto:support@livotale.com"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                support@livotale.com
              </a>
            </div>
          </motion.div>
        </Card>
      </div>
    </section>
  )
}
