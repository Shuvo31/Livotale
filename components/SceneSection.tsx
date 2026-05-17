'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SceneSectionProps {
  scene: number
  title?: string
  voiceover?: string
  visual: string
  imageUrl: string
  reverse?: boolean
  dark?: boolean
}

export function SceneSection({
  scene,
  title,
  voiceover,
  visual,
  imageUrl,
  reverse = false,
  dark = false,
}: SceneSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className={`relative py-20 md:py-32 overflow-hidden ${dark ? "bg-neutral-950" : "bg-black"}`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-center`}>
          {/* Image with thumbnail-style overlay */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/60 border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={`Scene ${scene} visual`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Thumbnail scene badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className="px-2 py-1 text-xs font-mono text-white rounded-md"
                  style={{ background: "rgba(215,49,108,0.7)", backdropFilter: "blur(4px)" }}
                >
                  SCENE {String(scene).padStart(2, "0")}
                </span>
              </div>

              {/* Brand watermark on thumbnail */}
              <div className="absolute bottom-4 right-4">
                <span className="text-xs font-bold tracking-wider" style={{ color: "#1EABB3" }}>
                  Livotale
                </span>
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl -z-10 opacity-20"
              style={{ background: "linear-gradient(135deg, #D7316C, #1EABB3)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex-1 flex flex-col gap-6"
          >
            {title && (
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D7316C" }}>
                {title}
              </span>
            )}

            <p
              className="text-neutral-400 text-sm leading-relaxed pl-4 italic border-l-2"
              style={{ borderColor: "#1EABB3" }}
            >
              {visual}
            </p>

            {voiceover && (
              <div className="mt-2">
                <p className="text-white text-2xl md:text-3xl font-bold leading-snug">
                  &ldquo;{voiceover}&rdquo;
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
