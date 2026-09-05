"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Cpu,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";
import HeroOrbit from "@/components/HeroOrbit";
import ExecutiveStatBadge from "@/components/ExecutiveStatBadge";
import { EXECUTIVE_METRICS, PERSONAL_INFO } from "@/data/content";

/* ── Animation helpers ──────────────────────────────────── */
const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div className="relative -mt-20 min-h-screen overflow-hidden">

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-8 sm:pt-20 lg:pt-16 lg:pb-6">
        {/* ── Background atmosphere ─────────────────────── */}

        {/* Left radial glow (behind typography) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-[-12%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Right radial glow (behind orbit) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />

        {/* Subtle grid overlay — center-masked */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,210,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.02) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "radial-gradient(ellipse 85% 90% at 50% 50%, black 10%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 90% at 50% 50%, black 10%, transparent 100%)",
          }}
        />

        {/* Vertical center divider (desktop only) */}
        <div
          className="absolute top-[12%] bottom-[12%] left-1/2 -translate-x-1/2 w-[1px] pointer-events-none hidden lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 25%, rgba(0,210,255,0.1) 50%, rgba(255,255,255,0.04) 75%, transparent 100%)",
          }}
        />

        {/* ── Content ──────────────────────────────────── */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100svh-7rem)] grid-cols-1 items-center gap-6 lg:grid-cols-[50%_50%] lg:gap-4">

            {/* Left: editorial introduction */}
            <div className="relative z-10 flex min-w-0 flex-col justify-center py-10 font-sans tracking-normal sm:py-12 lg:py-6 lg:pr-10 xl:pr-14">
              <motion.p
                {...fadeUp(0.1, 8)}
                className="text-[10px] font-medium uppercase leading-relaxed tracking-normal text-brand-cyan sm:text-[11px]"
              >
                GLOBAL AI &amp; INNOVATION LEADER
              </motion.p>

              <motion.h1
                {...fadeUp(0.18, 10)}
                className="mt-5 whitespace-nowrap font-display text-[clamp(3.25rem,8svh,3.75rem)] font-normal leading-[1.08] tracking-normal text-white sm:text-[clamp(3.75rem,10svh,5.5rem)]"
              >
                Aaqib Alvi
              </motion.h1>

              <motion.p
                {...fadeUp(0.26, 8)}
                className="mt-6 max-w-[480px] text-[clamp(1.125rem,2.8svh,1.375rem)] font-medium leading-[1.4] text-white"
              >
                Turning emerging technology into institutional capability.
              </motion.p>

              <motion.p
                {...fadeUp(0.34, 8)}
                className="mt-4 max-w-[500px] text-sm font-normal leading-[1.75] text-slate-300 sm:text-[15px]"
              >
                Advancing workforce readiness and measurable impact through emerging
                technologies across governments, universities, organizations, and communities.
              </motion.p>

              <motion.div
                {...fadeUp(0.42, 8)}
                className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                <Link
                  href="/expertise"
                  className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-sm border border-white bg-white px-5 py-3 text-xs font-medium leading-normal text-brand-dark transition-colors duration-300 hover:border-brand-cyanLight hover:bg-brand-cyanLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan focus-visible:outline-offset-4"
                >
                  Explore Leadership
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </Link>
                <Link
                  href="/ventures"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 border-b border-white/25 py-3 text-xs font-medium leading-normal text-white transition-colors duration-300 hover:border-brand-cyan hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan focus-visible:outline-offset-4"
                >
                  View Impact
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </Link>
              </motion.div>

              <motion.dl
                {...fadeUp(0.5, 6)}
                className="mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-5"
                aria-label="Experience and reach"
              >
                {[
                  { value: "35+", label: "Governments" },
                  { value: "200K+", label: "People Reached" },
                  { value: "12+", label: "Years in EdTech" },
                ].map((metric) => (
                  <div key={metric.label} className="flex min-w-0 flex-col gap-1">
                    <dt className="order-2 text-[10px] leading-relaxed text-slate-400 sm:text-[11px]">{metric.label}</dt>
                    <dd className="order-1 text-xl font-normal leading-tight tabular-nums text-white sm:text-2xl">{metric.value}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* ═══ RIGHT: Leadership Ecosystem Visual ═════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex -translate-y-2 flex-col items-center justify-center py-6 sm:py-8 lg:-translate-y-4 lg:py-0 lg:pl-2"
            >
              <HeroOrbit />
            </motion.div>

          </div>
        </div>

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(3,7,18,1) 0%, transparent 100%)" }}
        />
      </section>

      {/* ══════════════ EXECUTIVE IMPACT RIBBON ══════════════ */}
      <section className="relative py-14 border-y border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(6,14,28,0.6)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {EXECUTIVE_METRICS.map((item, idx) => (
              <ExecutiveStatBadge
                key={item.label}
                value={item.value}
                label={item.label}
                sub={item.sub}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STRATEGIC PHILOSOPHY ══════════════ */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/25 text-brand-gold mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight max-w-4xl mx-auto"
              style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
            >
              Connecting technology, education, and sustainable innovation for human readiness
              and measurable impact.
            </h2>
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-cyan font-semibold mt-6">
              Aaqib Alvi • Executive Focus
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CORE PORTALS ══════════════ */}
      <section className="relative py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-gold">
              Executive Ecosystem
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight"
              style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
            >
              Explore The Complete Platform
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Discover detailed insights across dedicated chapters covering leadership,
            foundational expertise, ventures, and global footprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              href: "/about",
              icon: <ShieldCheck className="w-5 h-5" />,
              label: "Leadership Profile",
              desc: "Executive journey, Quantic Executive MBA, NUS Chemical Engineering, and cross-border experience.",
              cta: "View Profile",
              color: "cyan" as const,
            },
            {
              href: "/expertise",
              icon: <Cpu className="w-5 h-5" />,
              label: "Core Capabilities",
              desc: "AI skilling, GenAI implementation, Digital Trust, sustainability, futures thinking, and EdTech experience.",
              cta: "Explore Pillars",
              color: "gold" as const,
            },
            {
              href: "/ventures",
              icon: <Sparkles className="w-5 h-5" />,
              label: "Ventures & Impact",
              desc: "Experience across Sustainable Living Lab, INSEAD AI Venture Lab, Whizz Kidz, and AI Teach U.",
              cta: "Inspect Ventures",
              color: "emerald" as const,
            },
            {
              href: "/global-reach",
              icon: <Globe className="w-5 h-5" />,
              label: "Global Reach & SDGs",
              desc: "AI programs across 35+ governments, SDG-oriented visioning, certifications, and humanitarian work.",
              cta: "View Global Footprint",
              color: "sky" as const,
            },
          ].map((card, idx) => {
            const colorStyles = {
              cyan: {
                iconBg: "bg-brand-cyan/[0.12] text-brand-cyan",
                hover: "hover:border-brand-cyan/40 hover:shadow-[0_0_28px_rgba(0,210,255,0.12)]",
                cta: "text-brand-cyan",
              },
              gold: {
                iconBg: "bg-brand-gold/[0.12] text-brand-gold",
                hover: "hover:border-brand-gold/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.12)]",
                cta: "text-brand-gold",
              },
              emerald: {
                iconBg: "bg-brand-emerald/[0.12] text-brand-emerald",
                hover: "hover:border-brand-emerald/40 hover:shadow-[0_0_28px_rgba(16,185,129,0.12)]",
                cta: "text-brand-emeraldLight",
              },
              sky: {
                iconBg: "bg-sky-400/[0.12] text-sky-400",
                hover: "hover:border-sky-400/40 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]",
                cta: "text-sky-300",
              },
            };
            const s = colorStyles[card.color];

            return (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  href={card.href}
                  className={`group relative p-7 rounded-2xl glass-panel border border-white/[0.08] ${s.hover} transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center mb-5`}>
                      {card.icon}
                    </div>
                    <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight">
                      {card.label}
                    </h3>
                    <p className="text-[12px] text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest ${s.cta} mt-5 group-hover:translate-x-1 transition-transform duration-200`}>
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════ EXECUTIVE CTA ══════════════ */}
      <section className="relative py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-10 md:p-14 rounded-3xl glass-panel border border-white/[0.09] overflow-hidden"
            style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/[0.08] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-cyan/[0.08] rounded-full blur-3xl pointer-events-none" />
            <div
              className="absolute top-0 inset-x-12 h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0,210,255,0.5), rgba(212,175,55,0.4), transparent)",
              }}
            />
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-brand-cyan">
                High-Level Engagement
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight"
                style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
              >
                Collaborate on AI Skilling & Sustainable Innovation
                <br className="hidden sm:block" /> &amp; Sustainable Innovation
              </h2>
              <p className="text-slate-300 text-[14px] sm:text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed">
                Available for digital skilling advisory, higher education technology work, GenAI
                implementation, sustainability, and presentations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl text-[12px] font-bold uppercase tracking-[0.1em] btn-gold"
                >
                  Initiate Executive Dialogue
                </Link>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[12px] font-semibold tracking-[0.06em] btn-ghost"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
