"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import HeroOrbit from "@/components/HeroOrbit";
import { PERSONAL_INFO } from "@/data/content";

const editorialReveal = {
  initial: { opacity: 0.85 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};
const editorialLink = "mt-7 inline-flex min-h-11 items-center gap-3 border-b border-accent/35 py-2 text-sm text-accent transition-colors duration-300 hover:border-accent-dark hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4";

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
      <section className="section-page relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-8 sm:pt-20 lg:pt-16 lg:pb-6">
        {/* ── Background atmosphere ─────────────────────── */}

        {/* Left radial glow (behind typography) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-[-12%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(39,107,109,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Right radial glow (behind orbit) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(162,124,66,0.05) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />

        {/* Subtle grid overlay — center-masked */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,35,45,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(20,35,45,0.018) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "radial-gradient(ellipse 85% 90% at 50% 50%, black 10%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 90% at 50% 50%, black 10%, transparent 100%)",
          }}
        />

        {/* Vertical center divider (desktop only) */}
        <div
          className="absolute top-[12%] bottom-[12%] left-1/2 -translate-x-1/2 w-[1px] pointer-events-none hidden min-[1180px]:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(20,35,45,0.05) 25%, rgba(39,107,109,0.12) 50%, rgba(20,35,45,0.05) 75%, transparent 100%)",
          }}
        />

        {/* ── Content ──────────────────────────────────── */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100svh-7rem)] grid-cols-1 items-center gap-6 min-[1180px]:grid-cols-[50%_50%] min-[1180px]:gap-4">

            {/* Left: editorial introduction */}
            <div className="relative z-10 flex min-w-0 flex-col justify-center py-10 font-sans tracking-normal sm:py-12 min-[1180px]:py-6 min-[1180px]:pr-10 xl:pr-14">
              <motion.p
                {...fadeUp(0.1, 8)}
                className="text-[10px] font-medium uppercase leading-relaxed tracking-normal text-brand-cyan sm:text-[11px]"
              >
                GLOBAL AI &amp; INNOVATION LEADER
              </motion.p>

              <motion.h1
                {...fadeUp(0.18, 10)}
                className="mt-5 whitespace-nowrap font-display text-[clamp(3.25rem,8svh,3.75rem)] font-normal leading-[1.08] tracking-normal text-ink sm:text-[clamp(3.75rem,10svh,5.5rem)]"
              >
                Aaqib Alvi
              </motion.h1>

              <motion.p
                {...fadeUp(0.26, 8)}
                className="mt-6 max-w-[480px] text-[clamp(1.125rem,2.8svh,1.375rem)] font-medium leading-[1.4] text-ink"
              >
                Turning emerging technology into institutional capability.
              </motion.p>

              <motion.p
                {...fadeUp(0.34, 8)}
                className="mt-4 max-w-[500px] text-sm font-normal leading-[1.75] text-text sm:text-[15px]"
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
                  className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-sm border border-accent bg-accent px-5 py-3 text-xs font-medium leading-normal text-white transition-colors duration-300 hover:border-accent-dark hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  Explore Leadership
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </Link>
                <Link
                  href="/ventures"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 border-b border-accent/35 py-3 text-xs font-medium leading-normal text-accent transition-colors duration-300 hover:border-accent-dark hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
                >
                  View Impact
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </Link>
              </motion.div>

              <motion.dl
                {...fadeUp(0.5, 6)}
                className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-5"
                aria-label="Experience and reach"
              >
                {[
                  { value: "35+", label: "Governments" },
                  { value: "200K+", label: "People Reached" },
                  { value: "12+", label: "Years in EdTech" },
                ].map((metric) => (
                  <div key={metric.label} className="flex min-w-0 flex-col gap-1">
                    <dt className="order-2 text-[10px] leading-relaxed text-slate-400 sm:text-[11px]">{metric.label}</dt>
                    <dd className="order-1 text-xl font-normal leading-tight tabular-nums text-ink sm:text-2xl">{metric.value}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* ═══ RIGHT: Leadership Ecosystem Visual ═════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex -translate-y-2 flex-col items-center justify-center py-6 sm:py-8 min-[1180px]:-translate-y-4 min-[1180px]:py-0 min-[1180px]:pl-2"
            >
              <HeroOrbit />
            </motion.div>

          </div>
        </div>

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(255,255,255,0.42) 0%, transparent 100%)" }}
        />
      </section>

      <div className="font-sans tracking-normal">
        <section aria-labelledby="executive-introduction" className="section-surface border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.5fr] md:items-center lg:gap-24 lg:px-10 lg:py-28">
            <figure className="max-w-[360px]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/profile.jpeg" alt="Aaqib Alvi" fill sizes="(max-width: 767px) 90vw, 360px" className="object-cover object-top" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-white/15 pt-3 text-xs text-slate-400">
                <span>Aaqib Alvi</span>
                <span>Singapore / United States</span>
              </figcaption>
            </figure>
            <motion.div {...editorialReveal} className="max-w-[680px]">
              <p className="text-xs text-brand-gold">Executive introduction</p>
              <h2 id="executive-introduction" className="mt-5 font-display text-4xl leading-[1.12] text-white sm:text-5xl">
                Connecting technology, education, and sustainable innovation.
              </h2>
              <p className="mt-7 max-w-[560px] text-base leading-8 text-slate-300">
                A global program and business leader working across AI and digital readiness,
                STEAM learning, sustainability, and business development. The focus:
                human readiness and measurable impact.
              </p>
              <p className="mt-5 max-w-[560px] text-sm leading-7 text-slate-400">
                Chemical Engineering at the National University of Singapore and an Executive
                MBA at Quantic School of Business and Technology form part of this cross-border journey.
              </p>
              <Link href="/about" className={editorialLink}>
                Read the leadership profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="selected-evidence" className="section-teal px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
          <motion.div {...editorialReveal} className="border-t border-white/15 pt-10">
            <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12">
              <p className="text-xs text-brand-gold">Selected evidence</p>
              <div>
                <h2 id="selected-evidence" className="font-display text-4xl leading-tight text-white sm:text-5xl">
                  From ambition to delivery.
                </h2>
                <p className="mt-5 max-w-[540px] text-base leading-8 text-slate-300">
                  Work across institutions, learning businesses, and emerging ventures.
                </p>
              </div>
            </div>

            <article className="mt-12 grid gap-6 border-t border-white/10 py-10 md:grid-cols-[1fr_2fr] md:gap-12 lg:py-12">
              <div className="space-y-2 text-sm leading-6">
                <p className="text-white">Sustainable Living Lab USA</p>
                <p className="text-slate-400">General Manager</p>
              </div>
              <div className="max-w-[690px]">
                <h3 className="font-display text-3xl leading-tight text-white sm:text-4xl">Building the U.S. presence.</h3>
                <p className="mt-5 text-[15px] leading-8 text-slate-300">
                  Formalized and scaled the U.S. presence of Sustainable Living Laboratory LLC,
                  providing consultation, AI learning and digital-skills tools, deployment and IT
                  support, professional training, and AI/GenAI implementation.
                </p>
                <p className="mt-5 border-l border-brand-gold/40 pl-5 text-sm leading-7 text-slate-300">
                  Scaling to 35+ U.S. states, collaborating with 100+ colleges, training 300+
                  professors, and creating more than 1,000 hours of content.
                </p>
              </div>
            </article>

            <article className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[1fr_2fr] md:gap-12 lg:py-12">
              <div className="space-y-2 text-sm leading-6">
                <p className="text-white">Whizz Kidz / AI Teach U</p>
                <p className="text-slate-400">Education &amp; business development</p>
              </div>
              <div className="max-w-[690px]">
                <h3 className="font-display text-3xl leading-tight text-white sm:text-4xl">Learning, built for people.</h3>
                <p className="mt-5 text-[15px] leading-8 text-slate-300">
                  At Whizz Kidz, supported revenue growth from 200k in late 2013 to more than
                  700k by early 2019, alongside business operations and STEAM learning.
                  At AI Teach U / AI Love Venture, work included teacher training, product
                  development, and instructional design for spoken-language curricula.
                </p>
              </div>
            </article>

            <article className="grid gap-6 border-y border-white/10 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
              <div className="space-y-2 text-sm leading-6">
                <p className="text-white">INSEAD AI Venture Lab</p>
                <p className="text-slate-400">Startup mentorship</p>
              </div>
              <div className="max-w-[690px]">
                <h3 className="font-display text-3xl leading-tight text-white">Supporting emerging ventures.</h3>
                <p className="mt-5 text-[15px] leading-8 text-slate-300">
                  Mentor top-selected startups under the INSEAD AI Venture Lab.
                </p>
              </div>
            </article>
            <div className="flex md:justify-end">
              <Link href="/ventures" className={editorialLink}>
                Explore the full track record <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          </div>
        </section>

        <section aria-labelledby="expertise-preview" className="section-warm px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
          <motion.div {...editorialReveal} className="grid gap-12 border-t border-white/15 pt-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div className="max-w-[430px]">
              <p className="text-xs text-brand-gold">Leadership &amp; expertise</p>
              <h2 id="expertise-preview" className="mt-5 font-display text-4xl leading-[1.12] text-white sm:text-5xl">
                A connected field of practice.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                AI skilling, GenAI implementation, Digital Trust, sustainability, futures
                thinking, and EdTech.
              </p>
              <Link href="/expertise" className={editorialLink}>
                Explore leadership &amp; expertise <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <dl className="divide-y divide-white/10">
              <div className="pb-8">
                <dt className="font-display text-3xl leading-tight text-white">AI &amp; digital readiness</dt>
                <dd className="mt-4 text-sm leading-7 text-slate-300">
                  National-level AI skilling, curriculum localization, AI/GenAI implementation,
                  and Digital Trust.
                </dd>
              </div>
              <div className="py-8">
                <dt className="font-display text-3xl leading-tight text-white">Education &amp; enterprise</dt>
                <dd className="mt-4 text-sm leading-7 text-slate-300">
                  EdTech strategy, STEAM learning, instructional design, business development,
                  and program and project management.
                </dd>
              </div>
              <div className="pt-8">
                <dt className="font-display text-3xl leading-tight text-white">Sustainability &amp; foresight</dt>
                <dd className="mt-4 text-sm leading-7 text-slate-300">
                  Climate adaptation, SDG-oriented visioning, futures thinking, foresight
                  planning, corporate innovation, and leadership training.
                </dd>
              </div>
            </dl>
          </motion.div>
          </div>
        </section>

        <section aria-labelledby="institutional-footprint" className="section-soft relative overflow-hidden border-y border-border">
          {/* Premium background treatment */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Subtle radial gradient top-left */}
            <div
              className="absolute top-0 left-0 w-[600px] h-[600px]"
              style={{
                background: "radial-gradient(circle at top left, rgba(137, 175, 198, 0.04) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            {/* Subtle radial gradient bottom-right */}
            <div
              className="absolute bottom-0 right-0 w-[500px] h-[500px]"
              style={{
                background: "radial-gradient(circle at bottom right, rgba(197, 169, 106, 0.03) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            {/* Premium grid pattern with mask */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(rgba(20,35,45,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(20,35,45,0.018) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
              }}
            />
          </div>

          <motion.div {...editorialReveal} className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
            {/* Section header */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <p className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">Global &amp; Institutional Footprint</p>
              </div>
              <h2 id="institutional-footprint" className="mt-6 max-w-[820px] font-display text-4xl leading-[1.12] text-white sm:text-5xl lg:text-6xl">
                International reach.<br />
                <span className="text-gradient-cyan">Local learning contexts.</span>
              </h2>
            </div>

            {/* Main content grid */}
            <div className="mt-12 lg:mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              {/* Left: Key narrative */}
              <div className="space-y-8">
                {/* Intel program highlight */}
                <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 flex items-center justify-center">
                          <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-xs uppercase tracking-wider text-brand-cyan font-medium">Intel Global Programs</span>
                      </div>
                      <p className="text-base leading-7 text-slate-200">
                        Managed global AI programs for Intel and launched national-level skilling programs with ministries and partners across multiple continents.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-light text-white tabular-nums">35+</div>
                      <div className="text-xs text-slate-400 mt-1">Governments</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-white tabular-nums">200K+</div>
                      <div className="text-xs text-slate-400 mt-1">People Reached</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-white tabular-nums">9</div>
                      <div className="text-xs text-slate-400 mt-1">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Audiences & localization */}
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-xl border border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-brand-emerald/15 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white mb-1.5">Diverse Audiences</h3>
                        <p className="text-sm leading-6 text-slate-400">
                          General public, youth, vocational graduates, and working professionals across institutional and community settings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-xl border border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white mb-1.5">Curriculum Localization</h3>
                        <p className="text-sm leading-6 text-slate-400">
                          AI strategies and curriculum adaptation for regional educational contexts, institutional frameworks, and cultural learning environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Countries visualization */}
              <div className="space-y-6">
                <div className="glass-panel p-8 rounded-2xl border border-brand-cyan/20 relative overflow-hidden">
                  {/* Decorative element */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, rgba(137, 175, 198, 0.08) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-medium text-white uppercase tracking-wider">Program Reach</h3>
                    </div>

                    <ul className="space-y-3">
                      {["United States", "Singapore", "India", "Korea", "Japan", "Russia", "Poland", "Germany", "China"].map((country, i) => (
                        <motion.li
                          key={country}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                          className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.02] transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/50 group-hover:bg-brand-cyan transition-colors" />
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{country}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional scope */}
                <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Extended Scope</p>
                  <p className="text-sm leading-6 text-slate-400">
                    Experience spans SDG-oriented visioning, professional learning certifications, humanitarian relief coordination, and cross-cultural stakeholder engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10">
              <Link href="/global-reach" className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <span className="border-b border-brand-cyan/30 group-hover:border-brand-cyan transition-colors">
                  View complete global reach &amp; community work
                </span>
                <ArrowUpRight className="w-4 h-4 text-brand-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </section>

        <section aria-labelledby="conversation-heading" className="section-footer px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
          <motion.div {...editorialReveal} className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end lg:gap-24">
            <div>
              <p className="text-xs text-brand-gold">Conversation &amp; advisory</p>
              <h2 id="conversation-heading" className="mt-5 max-w-[660px] font-display text-4xl leading-[1.12] text-white sm:text-5xl">
                Collaborate on AI skilling &amp; sustainable innovation.
              </h2>
            </div>
            <div>
              <p className="max-w-[460px] text-sm leading-7 text-slate-300">
                Available for digital skilling advisory, higher education technology work,
                GenAI implementation, sustainability, and presentations.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-5">
                <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 rounded-sm border border-white bg-white px-5 py-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-cyanLight hover:bg-brand-cyanLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan focus-visible:outline-offset-4">
                  Start a Conversation <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border-b border-white/25 py-2 text-sm text-[#BFC8C9] transition-colors hover:border-brand-cyan hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan focus-visible:outline-offset-4">
                  Connect on LinkedIn <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
