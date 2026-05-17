'use client'

import { motion } from "framer-motion"

// Pre-computed tick marks — avoids SSR/client floating-point mismatch
const ticks = Array.from({ length: 36 }).map((_, i) => {
  const angle = (i * 10 * Math.PI) / 180
  const r2 = i % 9 === 0 ? 118 : 124
  return {
    x1: +(144 + 130 * Math.cos(angle)).toFixed(2),
    y1: +(144 + 130 * Math.sin(angle)).toFixed(2),
    x2: +(144 + r2 * Math.cos(angle)).toFixed(2),
    y2: +(144 + r2 * Math.sin(angle)).toFixed(2),
    accent: i % 9 === 0,
  }
})

export function HealthScanVisual() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full" style={{ minHeight: 420 }}>

      {/* Ambient glow */}
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D7316C 0%, #1EABB3 100%)" }} />

      {/* Outer dashed ring */}
      <svg className="absolute w-[340px] h-[340px] opacity-10" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="166" stroke="#1EABB3" strokeWidth="1" strokeDasharray="6 4" fill="none" />
      </svg>

      {/* Scanner */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 shrink-0">

        {/* Background SVG rings + ticks */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 288">
          <circle cx="144" cy="144" r="138" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          <circle cx="144" cy="144" r="108" stroke="rgba(30,171,179,0.12)" strokeWidth="1" fill="none" />
          <line x1="6" y1="144" x2="282" y2="144" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="144" y1="6" x2="144" y2="282" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          {ticks.map((t, i) => (
            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={t.accent ? "rgba(30,171,179,0.4)" : "rgba(255,255,255,0.07)"} strokeWidth="1" />
          ))}
        </svg>

        {/* Rotating sweep */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 288 288"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <radialGradient id="sweep">
              <stop offset="0%" stopColor="#1EABB3" stopOpacity="0" />
              <stop offset="80%" stopColor="#1EABB3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1EABB3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M144 144 L144 6 A138 138 0 0 1 238 52 Z" fill="url(#sweep)" />
          <line x1="144" y1="144" x2="144" y2="6" stroke="#1EABB3" strokeWidth="1.5" opacity="0.8" />
        </motion.svg>

        {/* Ping dots */}
        {[
          { cx: 175, cy: 105, delay: 0 },
          { cx: 112, cy: 158, delay: 1 },
          { cx: 188, cy: 172, delay: 2 },
          { cx: 98, cy: 118, delay: 1.5 },
        ].map((dot, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${(dot.cx / 288) * 100}%`,
              top: `${(dot.cy / 288) * 100}%`,
              background: "#D7316C",
              boxShadow: "0 0 6px #D7316C",
            }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: dot.delay, times: [0, 0.1, 0.8, 1] }}
          />
        ))}

        {/* Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <motion.div className="text-5xl font-black" style={{ color: "#1EABB3" }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}>
            98
          </motion.div>
          <div className="text-[10px] text-white/40 tracking-widest uppercase">Health Score</div>
          <motion.div
            className="mt-1 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: "rgba(215,49,108,0.12)", color: "#D7316C", border: "1px solid rgba(215,49,108,0.3)" }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Liver — Healthy
          </motion.div>
        </div>

        {/* Outer pulse ring */}
        <motion.div className="absolute inset-0 rounded-full"
          style={{ border: "1px solid #1EABB3" }}
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity }} />
      </div>

      {/* Metric row — below scanner, no overflow */}
      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        {[
          { label: "ALT", value: "32", unit: "U/L", color: "#1EABB3" },
          { label: "AST", value: "28", unit: "U/L", color: "#D7316C" },
          { label: "Bilirubin", value: "0.8", unit: "mg/dL", color: "#1EABB3" },
        ].map((m, i) => (
          <motion.div key={m.label}
            className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl border backdrop-blur-sm"
            style={{
              borderColor: `${m.color}33`,
              background: `${m.color}0d`,
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          >
            <span className="text-[10px] text-white/40 tracking-widest uppercase">{m.label}</span>
            <span className="text-base font-bold" style={{ color: m.color }}>
              {m.value}<span className="text-[10px] font-normal ml-0.5 text-white/30">{m.unit}</span>
            </span>
            <span className="text-[10px]" style={{ color: m.color }}>✓ Normal</span>
          </motion.div>
        ))}
      </div>

      {/* ECG line */}
      <div className="w-48 h-5 mt-4 opacity-30 overflow-hidden">
        <svg viewBox="0 0 200 20" className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M0 10 L40 10 L50 10 L55 2 L60 18 L65 2 L70 10 L130 10 L135 2 L140 18 L145 2 L150 10 L200 10"
            stroke="#1EABB3" strokeWidth="1.5" fill="none" strokeDasharray="200"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Scanning badge */}
      <motion.div
        className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-widest"
        style={{ borderColor: "rgba(30,171,179,0.3)", color: "#1EABB3", background: "rgba(30,171,179,0.08)" }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        SCANNING
      </motion.div>
    </div>
  )
}
