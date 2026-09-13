"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import ExecutiveHeroRight from "@/components/ExecutiveHeroRight";
import HomepageHeroBackground from "@/components/HomepageHeroBackground";
import AnimatedProfilePortrait from "@/components/AnimatedProfilePortrait";
import { PERSONAL_INFO } from "@/data/content";

/* ── Shared animation presets ───────────────────────────── */
const editorialReveal = {
  initial: { opacity: 0.85 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const editorialLink =
  "mt-7 inline-flex min-h-11 items-center gap-3 border-b border-gold/40 py-2 text-sm font-medium text-gold transition-colors duration-300 hover:border-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4";

const fadeUp = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const prefersReduced = useReducedMotion();
  return (
    <div className="relative -mt-20 min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          PREMIUM EXECUTIVE HERO — responsive & high performance
      ══════════════════════════════════════════════════════ */}
      <section
        aria-label="Executive profile introduction"
        className="relative flex min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] items-center overflow-hidden bg-[#FAF9F6] dark:bg-[#05070D] transition-colors duration-500"
      >
        {/* ── Premium subtle animated background ── */}
        <HomepageHeroBackground />

        {/* ── Hardware-accelerated soft background atmosphere ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transform-gpu"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(201,162,39,0.07) 0px, transparent 450px), radial-gradient(circle at 80% 70%, rgba(201,162,39,0.05) 0px, transparent 550px)",
          }}
        />

        {/* Subtle AI particle grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.1] dark:opacity-[0.15] transform-gpu"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,162,39,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 70% 50%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 70% 50%, black 0%, transparent 100%)",
          }}
        />

        {/* ── Main content grid ─────────────────────────── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 pt-24 sm:pt-28 lg:pt-24 pb-12 lg:pb-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[46%_54%] lg:gap-20 xl:gap-24 items-center min-h-0 lg:min-h-[calc(100svh-8rem)]">

            {/* ════════════════════════════════════════════
                LEFT — Executive identity & impact
            ════════════════════════════════════════════ */}
            <div className="flex flex-col justify-center pt-2 sm:pt-4 lg:pt-0 pb-4 lg:pb-0">

              {/* Badge */}
              <motion.div {...fadeUp(0.1, 15)} className="mb-4 sm:mb-7">
                <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-[#C9A227]/30 dark:border-[#C9A227]/20 bg-[#C9A227]/10 dark:bg-[#C9A227]/5 px-3.5 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#967410] dark:bg-[#C9A227]"
                    style={{ boxShadow: "0 0 8px rgba(201,162,39,0.7)" }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#8E6E12] dark:text-[#C9A227]">
                    Global AI &amp; Innovation Leader
                  </span>
                </div>
              </motion.div>

              {/* Name — large editorial heading */}
              <motion.h1
                {...fadeUp(0.2, 20)}
                className="hero-name font-display text-[clamp(2.75rem,8vw,7rem)] font-normal leading-[1.05] tracking-[-0.025em] mb-4 sm:mb-7"
                style={{ letterSpacing: "-0.02em" }}
              >
                Aaqib Alvi
              </motion.h1>

              {/* Main headline — strong statement */}
              <motion.p
                {...fadeUp(0.3, 18)}
                className="text-[clamp(1.1rem,2.4vh,1.65rem)] font-semibold leading-[1.3] lg:leading-[1.35] text-slate-900 dark:text-white max-w-[560px] mb-3 sm:mb-5"
                style={{ letterSpacing: "-0.01em" }}
              >
                Turning emerging technology into institutional capability.
              </motion.p>

              {/* Supporting paragraph */}
              <motion.p
                {...fadeUp(0.4, 16)}
                className="text-xs sm:text-base lg:text-[clamp(0.95rem,1.85vh,1.1rem)] leading-[1.65] lg:leading-[1.75] text-slate-700 dark:text-gray-400 max-w-[560px] mb-6 sm:mb-9"
                style={{ letterSpacing: "-0.002em" }}
              >
                Advancing workforce readiness and measurable impact through AI,
                digital transformation and education technology across governments,
                universities, organizations and communities.
              </motion.p>

              {/* CTAs — premium buttons */}
              <motion.div
                {...fadeUp(0.5, 14)}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <Link
                  href="/expertise"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white dark:text-[#05070D] transition-all duration-500 hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(160,123,30,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A227] focus-visible:outline-offset-4 bg-gradient-to-r from-[#9A7B1C] to-[#785E10] dark:from-[#E8D9A6] dark:to-[#C9A227] shadow-[0_8px_25px_-5px_rgba(154,123,28,0.35)] dark:shadow-[0_10px_30px_-5px_rgba(201,162,39,0.3)]"
                >
                  <span>Explore Leadership</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="/aaqib-alvi-profile.pdf"
                  download="Aaqib-Alvi-Executive-Profile.pdf"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-slate-300 dark:border-[#C9A227]/25 px-6 sm:px-7 py-3.5 sm:py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-800 dark:text-white backdrop-blur-sm transition-all duration-500 hover:border-[#9A7B1C] dark:hover:border-[#C9A227]/50 hover:bg-slate-100 dark:hover:bg-[#C9A227]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A227] focus-visible:outline-offset-4 bg-white/80 dark:bg-[#101522]/50 shadow-sm dark:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)]"
                >
                  <Download
                    className="h-4 w-4 text-[#8E6E12] dark:text-[#C9A227] transition-transform duration-500 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span>Download Profile</span>
                </a>
              </motion.div>

              {/* Impact metrics — refined presentation */}
              <motion.dl
                {...fadeUp(0.6, 12)}
                aria-label="Career reach and impact metrics"
                className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-slate-200 dark:border-[#C9A227]/8 pt-6 lg:pt-9"
              >
                {[
                  { value: "35+", label: "Governments" },
                  { value: "200K+", label: "People Reached" },
                  { value: "12+", label: "Years Experience" },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col text-left">
                    <dd className="font-display text-xl sm:text-3xl lg:text-[clamp(2.2rem,4.5vh,3.5rem)] font-normal leading-none tabular-nums text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                      {m.value}
                    </dd>
                    <dt className="text-[9px] sm:text-[10.5px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-slate-600 dark:text-gray-400">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* ════════════════════════════════════════════
                RIGHT — Futuristic AI Ecosystem
            ════════════════════════════════════════════ */}
            <div className="relative flex items-center justify-center pb-4 lg:pb-0 min-h-0 lg:min-h-[650px] w-full">
              <ExecutiveHeroRight />
            </div>

          </div>{/* /grid */}
        </div>{/* /container */}

        {/* Premium scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600 dark:text-gray-300 font-semibold">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#C9A227]/50 dark:from-[#C9A227]/30 via-[#C9A227]/20 dark:via-[#C9A227]/10 to-transparent" />
          </motion.div>
        </motion.div>

      </section>

      {/* ══════════════ EXECUTIVE INTRODUCTION ══════════════ */}
      <div className="font-sans tracking-normal">
        <section aria-labelledby="executive-introduction" className="section-surface border-t border-[var(--border)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.5fr] md:items-center lg:gap-24 lg:px-10 lg:py-24">
            <div className="max-w-[340px]">
              <AnimatedProfilePortrait
                overlayStyle="caption"
                badgeText="Executive"
                name="Aaqib Alvi"
                extraInfo="Singapore / United States"
                priority
              />
            </div>

            <motion.div {...editorialReveal} className="max-w-[680px]">
              <p className="text-xs uppercase tracking-widest font-semibold text-gold">Executive Introduction</p>
              <h2 id="executive-introduction" className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--text-primary)]">
                Connecting technology, education, and sustainable innovation.
              </h2>
              <p className="mt-6 max-w-[580px] text-base leading-8 text-[var(--text-secondary)] sm:text-[17px]">
                A global program and business leader working across AI and digital readiness,
                STEAM learning, sustainability, and business development. The focus:
                human readiness and measurable impact.
              </p>
              <p className="mt-4 max-w-[580px] text-sm leading-7 text-muted sm:text-base">
                Chemical Engineering at the National University of Singapore and an Executive
                MBA at Quantic School of Business and Technology form part of this cross-border journey.
              </p>
              <Link href="/about" className={editorialLink}>
                Read the leadership profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ SELECTED EVIDENCE ══════════════ */}
        <section aria-labelledby="selected-evidence" className="section-soft px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <motion.div {...editorialReveal} className="border-t border-[var(--border)] pt-10">
              <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12">
                <p className="text-xs uppercase tracking-widest font-semibold text-gold">Selected Evidence</p>
                <div>
                  <h2 id="selected-evidence" className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-[var(--text-primary)]">
                    From ambition to delivery.
                  </h2>
                  <p className="mt-4 max-w-[560px] text-base leading-8 text-[var(--text-secondary)]">
                    Work across institutions, learning businesses, and emerging ventures.
                  </p>
                </div>
              </div>

              {/* Article 1: SLL USA */}
              <article className="mt-10 grid gap-6 border-t border-[var(--border)] py-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:py-10">
                <div className="space-y-1.5 text-sm leading-6">
                  <p className="font-medium text-[var(--text-primary)] text-base">Sustainable Living Lab USA</p>
                  <p className="text-muted text-sm">General Manager</p>
                </div>
                <div className="max-w-[690px]">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-[var(--text-primary)]">
                    Building the U.S. presence.
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)] sm:text-base">
                    Formalized and scaled the U.S. presence of Sustainable Living Laboratory LLC,
                    providing consultation, AI learning and digital-skills tools, deployment and IT
                    support, professional training, and AI/GenAI implementation.
                  </p>
                  <p className="mt-4 border-l-2 border-gold/60 pl-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-[15px]">
                    Scaling to 35+ U.S. states, collaborating with 100+ colleges, training 300+
                    professors, and creating more than 1,000 hours of content.
                  </p>
                </div>
              </article>

              {/* Article 2: Whizz Kidz */}
              <article className="grid gap-6 border-t border-[var(--border)] py-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:py-10">
                <div className="space-y-1.5 text-sm leading-6">
                  <p className="font-medium text-[var(--text-primary)] text-base">Whizz Kidz / AI Teach U</p>
                  <p className="text-muted text-sm">Education &amp; Business Development</p>
                </div>
                <div className="max-w-[690px]">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-[var(--text-primary)]">
                    Learning, built for people.
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)] sm:text-base">
                    At Whizz Kidz, supported revenue growth from 200k in late 2013 to more than
                    700k by early 2019, alongside business operations and STEAM learning.
                    At AI Teach U / AI Love Venture, work included teacher training, product
                    development, and instructional design for spoken-language curricula.
                  </p>
                </div>
              </article>

              {/* Article 3: INSEAD */}
              <article className="grid gap-6 border-y border-[var(--border)] py-8 md:grid-cols-[1fr_2fr] md:gap-12">
                <div className="space-y-1.5 text-sm leading-6">
                  <p className="font-medium text-[var(--text-primary)] text-base">INSEAD AI Venture Lab</p>
                  <p className="text-muted text-sm">Startup Mentorship</p>
                </div>
                <div className="max-w-[690px]">
                  <h3 className="font-display text-2xl sm:text-3xl leading-tight text-[var(--text-primary)]">
                    Supporting emerging ventures.
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)] sm:text-base">
                    Mentor top-selected startups under the INSEAD AI Venture Lab.
                  </p>
                </div>
              </article>

              <div className="flex md:justify-end mt-6">
                <Link href="/ventures" className={editorialLink}>
                  Explore the full track record <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ EXPERTISE PREVIEW ══════════════ */}
        <section aria-labelledby="expertise-preview" className="section-warm px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <motion.div {...editorialReveal} className="grid gap-12 border-t border-[var(--border)] pt-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
              <div className="max-w-[430px]">
                <p className="text-xs uppercase tracking-widest font-semibold text-gold">Leadership &amp; Expertise</p>
                <h2 id="expertise-preview" className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--text-primary)]">
                  A connected field of practice.
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                  AI skilling, GenAI implementation, Digital Trust, sustainability, futures
                  thinking, and EdTech.
                </p>
                <Link href="/expertise" className={editorialLink}>
                  Explore leadership &amp; expertise <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>

              <dl className="divide-y divide-[var(--border)]">
                <div className="pb-6">
                  <dt className="font-display text-2xl sm:text-3xl leading-tight text-[var(--text-primary)]">AI &amp; digital readiness</dt>
                  <dd className="mt-3 text-sm sm:text-base leading-7 text-[var(--text-secondary)]">
                    National-level AI skilling, curriculum localization, AI/GenAI implementation,
                    and Digital Trust.
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="font-display text-2xl sm:text-3xl leading-tight text-[var(--text-primary)]">Education &amp; enterprise</dt>
                  <dd className="mt-3 text-sm sm:text-base leading-7 text-[var(--text-secondary)]">
                    EdTech strategy, STEAM learning, instructional design, business development,
                    and program and project management.
                  </dd>
                </div>
                <div className="pt-6">
                  <dt className="font-display text-2xl sm:text-3xl leading-tight text-[var(--text-primary)]">Sustainability &amp; foresight</dt>
                  <dd className="mt-3 text-sm sm:text-base leading-7 text-[var(--text-secondary)]">
                    Climate adaptation, SDG-oriented visioning, futures thinking, foresight
                    planning, corporate innovation, and leadership training.
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ CONVERSATION & ADVISORY (FOOTER CTA) ══════════════ */}
        <section aria-labelledby="conversation-heading" className="section-footer bg-[#0A0D14] text-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div {...editorialReveal} className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end lg:gap-20">
              <div>
                <p className="text-xs text-gold uppercase tracking-widest font-semibold">Conversation &amp; Advisory</p>
                <h2 id="conversation-heading" className="mt-4 max-w-[660px] font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white">
                  Collaborate on AI skilling &amp; sustainable innovation.
                </h2>
              </div>
              <div>
                <p className="max-w-[460px] text-base leading-7 text-slate-300">
                  Available for digital skilling advisory, higher education technology work,
                  GenAI implementation, sustainability, and presentations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center gap-2.5 rounded-sm btn-gold px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                  >
                    Start a Conversation <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 border-b border-white/25 py-2 text-sm text-slate-300 transition-colors hover:border-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                  >
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
