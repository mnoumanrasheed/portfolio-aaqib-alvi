import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import PremiumLoader from "@/components/PremiumLoader";
import MotionProvider from "@/components/MotionProvider";

// Load fonts via next/font — eliminates render-blocking @import, zero FOUT
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaqibalvi.com"),
  title: "Aaqib Alvi | Global AI Readiness & Sustainable Innovation",
  description:
    "Executive platform of Aaqib Alvi — Global Digital Readiness, AI implementation, sustainability, SDG-oriented visioning, and EdTech experience across 35+ governments.",
  keywords: [
    "Aaqib Alvi",
    "AI Readiness",
    "Digital Trust",
    "Sustainable Living Lab",
    "EdTech Strategy",
    "GenAI Implementation",
    "Climate Adaptation",
    "Intel AI Programs",
    "Global Advisory",
  ],
  authors: [{ name: "Aaqib Alvi" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Aaqib Alvi | Global AI & Digital Readiness Leader",
    description:
      "Global program and business leader working in AI and digital readiness across 35+ governments and reaching more than 200,000 people.",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Aaqib Alvi Brand Emblem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaqib Alvi | Global AI & Digital Readiness Leader",
    description:
      "Global program and business leader working in AI and digital readiness across 35+ governments.",
    images: ["/logo.png"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme-preference');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-page text-text antialiased selection:bg-gold-soft selection:text-ink">
        <MotionProvider>
          <PremiumLoader />
          <AmbientBackground />
          <Navbar />
          <main className="relative pt-20">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
