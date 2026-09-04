import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-dark/90 backdrop-blur-2xl overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/50 shadow-glow-gold/20">
                <Image src="/logo.png" alt="Aaqib Alvi Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-wider text-white">AAQIB ALVI</h3>
                <p className="text-xs tracking-widest uppercase text-brand-gold">
                  AI • Innovation • Impact
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Global Program & Business Leader driving Digital Readiness, Generative AI implementation,
              Digital Trust, and Climate Adaptation initiatives across 35+ national governments and multilateral institutions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Singapore / United States</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Home Nexus
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Leadership Profile
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Core Expertise
                </Link>
              </li>
              <li>
                <Link href="/ventures" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Ventures & Impact
                </Link>
              </li>
              <li>
                <Link href="/global-reach" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Global Reach & SDGs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Advisory Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ventures Ecosystem */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-4">
              Ventures & Affiliations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PERSONAL_INFO.websites.map((site) => (
                <li key={site.url}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-brand-gold transition-colors group"
                  >
                    <span>{site.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Executive Inquiries */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.emails[0]}`}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                <div className="text-[11px] text-brand-gold">Executive Office</div>
                {PERSONAL_INFO.emails[0]}
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.emails[1]}`}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                <div className="text-[11px] text-brand-cyan">Personal Advisory</div>
                {PERSONAL_INFO.emails[1]}
              </a>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight to-brand-gold rounded-xl hover:shadow-glow-gold transition-all"
                >
                  Book Advisory
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Aaqib Alvi. All rights reserved. Global Digital Readiness & Climate Innovation.
          </div>
          <div className="flex items-center gap-6">
            <span>Singapore (APAC HQ)</span>
            <span>•</span>
            <span>United States (Americas)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
