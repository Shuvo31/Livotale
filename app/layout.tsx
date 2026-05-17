import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livotale — Your Liver Test, At Your Door",
  description:
    "Skip the hospital queue. Livotale brings expert liver screening to your home — fast, painless, and done by certified gastroenterologists.",
  keywords: ["liver scan", "at home liver test", "livotale", "gastroenterology", "liver health"],
  openGraph: {
    title: "Livotale — Your Liver Test, At Your Door",
    description:
      "Skip the hospital queue. Expert liver screening delivered to your home by certified gastroenterologists.",
    url: "https://livotale.com",
    siteName: "Livotale",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Livotale — At Home Liver Screening",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livotale — Your Liver Test, At Your Door",
    description:
      "Skip the hospital queue. Expert liver screening delivered to your home.",
    images: ["/livotale.png"],
  },
  icons: {
    icon: "/livotale.png",
    shortcut: "/livotale.png",
    apple: "/livotale.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
