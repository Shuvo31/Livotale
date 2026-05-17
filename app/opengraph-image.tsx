import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Livotale — Your Liver Test, At Your Door"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Pink glow top-left */}
        <div style={{
          position: "absolute", top: -80, left: -80,
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(215,49,108,0.35) 0%, transparent 70%)",
        }} />

        {/* Teal glow bottom-right */}
        <div style={{
          position: "absolute", bottom: -80, right: -80,
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,171,179,0.3) 0%, transparent 70%)",
        }} />

        {/* Liver icon — circular swirl (SVG inline) */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120, height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(215,49,108,0.15), rgba(30,171,179,0.15))",
          border: "2px solid rgba(30,171,179,0.4)",
          marginBottom: 32,
        }}>
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="52" rx="34" ry="26" fill="none" stroke="#D7316C" strokeWidth="3" />
            <path d="M20 52 Q30 30 50 28 Q70 26 78 45" stroke="#1EABB3" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M25 58 Q35 72 50 74 Q65 72 75 60" stroke="#1EABB3" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <circle cx="50" cy="52" r="6" fill="#D7316C" opacity="0.8"/>
          </svg>
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#D7316C", letterSpacing: "-2px" }}>Livo</span>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#1EABB3", letterSpacing: "-2px" }}>tale</span>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 26,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "1px",
          marginBottom: 40,
        }}>
          Your Liver Test, At Your Door
        </div>

        {/* Divider */}
        <div style={{
          width: 80, height: 2,
          background: "linear-gradient(90deg, #D7316C, #1EABB3)",
          marginBottom: 32,
        }} />

        {/* Contact pill */}
        <div style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "10px 22px",
            color: "rgba(255,255,255,0.6)",
            fontSize: 18,
          }}>
            📞 82 8201 2929
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "10px 22px",
            color: "rgba(255,255,255,0.6)",
            fontSize: 18,
          }}>
            ✉ support@livotale.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
