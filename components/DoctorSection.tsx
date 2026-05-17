'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const skills = [
  "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
  "EUS (Endoscopic Ultrasound)",
  "Spy Glass & Confocal Laser Endomicroscopy",
  "Gastroduodenoscopy & Colonoscopy — APC, RFA, PEG Tube",
  "Double Balloon & Single Balloon Enteroscopy",
  "Capsule Endoscopy",
  "High Resolution Manometry & Motility Study",
  "Esophageal Stricture Dilatation & Achalasia Management",
]

const education = [
  { degree: "DM — Gastroenterology", institute: "IPGMER – SSKM Hospital, Kolkata", year: "2012" },
  { degree: "MD — Internal Medicine", institute: "Institute of Medical Sciences – BHU, Varanasi", year: "2008" },
  { degree: "MBBS", institute: "Institute of Medical Sciences – BHU, Varanasi", year: "2003" },
]

const experience = [
  { role: "Gastroenterologist", place: "Americana Gastro & Diagnostic Center, Kolkata", period: "Oct 2020 – Present" },
  { role: "Gastroenterologist", place: "Fortis Hospital, Kolkata", period: "Oct 2020 – Present" },
  { role: "Consultant Incharge", place: "Chittaranjan National Cancer Institute, New Town", period: "Oct 2020 – Present" },
  { role: "Gastroenterologist", place: "Apollo Gleneagles Hospitals, Kolkata", period: "Jan 2013 – Jul 2020" },
  { role: "Gastroenterologist", place: "School of Digestive & Liver Disease, Kolkata", period: "Feb 2009 – Oct 2012" },
]

const memberships = [
  "Fellow — American College of Gastroenterology",
  "Fellow — American Society of GI Endoscopy",
  "Member — Indian Society of Gastroenterology",
  "Member — Society of GI Endoscopy of India",
]

export function DoctorSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: "radial-gradient(ellipse at top right, #1EABB3, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#D7316C" }}>
            Meet Your Doctor
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            In expert hands,
            <br />
            <span className="text-neutral-400">at your doorstep.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left — photo + name card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-80 shrink-0 flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/doctor.jpg"
                alt="Dr. Vijay Kumar Rai"
                width={400}
                height={480}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg leading-tight">Dr. Vijay Kumar Rai</p>
                <p className="text-xs mt-1" style={{ color: "#1EABB3" }}>DM · MD · MBBS</p>
              </div>
            </div>

            {/* Memberships */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col gap-3">
              <p className="text-white font-semibold text-sm">Memberships & Fellowships</p>
              {memberships.map((m) => (
                <div key={m} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#D7316C" }} />
                  <p className="text-neutral-400 text-xs leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 flex flex-col gap-10"
          >
            {/* Skills */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-6 h-px" style={{ background: "#1EABB3" }} />
                Procedures & Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {skills.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#1EABB3" }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-6 h-px" style={{ background: "#D7316C" }} />
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((e) => (
                  <div key={e.degree} className="flex gap-4 items-start">
                    <span
                      className="text-xs font-mono font-bold shrink-0 mt-0.5"
                      style={{ color: "#D7316C" }}
                    >
                      {e.year}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">{e.degree}</p>
                      <p className="text-neutral-500 text-xs mt-0.5">{e.institute}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-6 h-px" style={{ background: "#1EABB3" }} />
                Experience
              </h3>
              <div className="relative border-l border-white/10 pl-5 flex flex-col gap-5">
                {experience.map((ex) => (
                  <div key={ex.place + ex.period} className="relative">
                    <span
                      className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full border-2 border-black"
                      style={{ background: "#1EABB3" }}
                    />
                    <p className="text-white text-sm font-medium">{ex.role}</p>
                    <p className="text-neutral-400 text-xs mt-0.5">{ex.place}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#D7316C" }}>{ex.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
