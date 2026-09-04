import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import PremiumLoader from "@/components/PremiumLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaqibalvi.com"),
  title: "Aaqib Alvi | Global AI Readiness & Sustainable Innovation",
  description:
    "Executive platform of Aaqib Alvi — Driving Global Digital Readiness (AI/ML, Digital Trust), Future Innovation through SDGs, Climate Adaptation Strategies, and EdTech Consulting across 35+ national governments.",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Aaqib Alvi | Global AI & Digital Readiness Leader",
    description:
      "Global program and business leader orchestrating AI readiness across 35+ governments and upskilling 200,000+ individuals worldwide.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Aaqib Alvi Brand Emblem",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="min-h-screen bg-brand-dark text-slate-100 antialiased selection:bg-brand-cyan/30 selection:text-white"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <PremiumLoader />
        <AmbientBackground />
        <Navbar />
        <main className="relative pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
