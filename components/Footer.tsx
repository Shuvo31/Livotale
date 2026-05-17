'use client'

import { useState } from "react"

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-neutral-950 border border-white/10 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors text-xl leading-none"
        >
          ✕
        </button>
        <h2 className="text-white font-bold text-xl mb-6">{title}</h2>
        <div className="text-neutral-400 text-sm leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  )
}

export function Footer() {
  const [modal, setModal] = useState<"privacy" | "terms" | "contact" | null>(null)

  return (
    <>
      <footer className="bg-black border-t border-white/10 pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xl tracking-tight">
                <span style={{ color: "#D7316C" }}>Livo</span>
                <span style={{ color: "#1EABB3" }}>tale</span>
              </span>
              <p className="text-neutral-500 text-sm max-w-xs">
                Professional liver screening delivered to your door. Fast, painless, and comfortable.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold text-sm tracking-wide">Contact Us</span>
              <a
                href="tel:8282012929"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                82 8201 2929
              </a>
              <a
                href="mailto:support@livotale.com"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                support@livotale.com
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold text-sm tracking-wide">Quick Links</span>
              <div className="flex flex-col gap-2 text-neutral-500 text-sm">
                <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#book" className="hover:text-white transition-colors">Book a scan</a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-neutral-600 text-xs">
              © {new Date().getFullYear()} Livotale. All rights reserved.
            </p>
            <div className="flex gap-6 text-neutral-500 text-xs">
              <button onClick={() => setModal("privacy")} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => setModal("terms")} className="hover:text-white transition-colors">Terms</button>
              <button onClick={() => setModal("contact")} className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {modal === "privacy" && (
        <Modal title="Privacy Policy" onClose={() => setModal(null)}>
          <p>Last updated: May 2026</p>
          <p>
            At Livotale, your privacy is our priority. We collect only the personal information necessary to deliver your at-home liver screening service — including your name, address, contact details, and health information relevant to your scan.
          </p>
          <p>
            <strong className="text-white">What we collect:</strong> Name, phone number, email address, home address, and health data related to your screening.
          </p>
          <p>
            <strong className="text-white">How we use it:</strong> To schedule and deliver your scan, communicate results with your consent, and improve our services.
          </p>
          <p>
            <strong className="text-white">We never sell your data.</strong> Your health information is stored securely and shared only with licensed medical professionals involved in your care.
          </p>
          <p>
            For any privacy concerns, contact us at{" "}
            <a href="mailto:support@livotale.com" className="text-[#1EABB3] hover:underline">support@livotale.com</a>.
          </p>
        </Modal>
      )}

      {/* Terms Modal */}
      {modal === "terms" && (
        <Modal title="Terms & Conditions" onClose={() => setModal(null)}>
          <p>Last updated: May 2026</p>
          <p>
            By booking a Livotale at-home scan, you agree to the following terms:
          </p>
          <p>
            <strong className="text-white">Service:</strong> Livotale provides non-invasive liver screening performed by certified healthcare professionals at your home address.
          </p>
          <p>
            <strong className="text-white">Bookings:</strong> Appointments are subject to availability. We require at least 24 hours notice to cancel or reschedule without a fee.
          </p>
          <p>
            <strong className="text-white">Results:</strong> Results are provided for informational purposes. Livotale does not replace your GP or specialist. Always consult a qualified physician for medical decisions.
          </p>
          <p>
            <strong className="text-white">Liability:</strong> Livotale is not liable for decisions made based on scan results without professional medical consultation.
          </p>
          <p>
            Questions? Reach us at{" "}
            <a href="mailto:support@livotale.com" className="text-[#1EABB3] hover:underline">support@livotale.com</a> or call{" "}
            <a href="tel:8282012929" className="text-[#1EABB3] hover:underline">82 8201 2929</a>.
          </p>
        </Modal>
      )}

      {/* Contact Modal */}
      {modal === "contact" && (
        <Modal title="Contact Us" onClose={() => setModal(null)}>
          <p>We&apos;re here to help. Reach out through any of the channels below and we&apos;ll get back to you promptly.</p>
          <div className="space-y-4 mt-2">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" style={{ color: "#D7316C" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                <p className="text-white/50 text-xs mb-0.5">Phone</p>
                <a href="tel:8282012929" className="text-white font-medium hover:text-[#1EABB3] transition-colors">82 8201 2929</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" style={{ color: "#1EABB3" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>
                <p className="text-white/50 text-xs mb-0.5">Email</p>
                <a href="mailto:support@livotale.com" className="text-white font-medium hover:text-[#1EABB3] transition-colors">support@livotale.com</a>
              </div>
            </div>
          </div>
          <p className="text-neutral-600 text-xs mt-4">Mon–Sat, 9am–7pm. We aim to respond within 2 hours.</p>
        </Modal>
      )}
    </>
  )
}
