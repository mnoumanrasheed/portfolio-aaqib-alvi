"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

import {
  SubpageHeroMotion,
  SubpageTheme,
  FocusAreasCardHighlight,
  AnimatedCTAButton,
} from "./SubpageHeroMotion";

interface Pillar {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  metrics?: string;
}

interface Initiative {
  id: string;
  period: string;
  organization: string;
  role: string;
  highlight: string;
  description: string[];
}

interface ExpertiseSubpageLayoutProps {
  subpageId?: SubpageTheme;
  tagline: string;
  title: string;
  description: string;
  pillars: Pillar[];
  initiatives: Initiative[];
  ctaLabel: string;
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
};

export default function ExpertiseSubpageLayout({
  subpageId,
  tagline,
  title,
  description,
  pillars,
  initiatives,
  ctaLabel,
}: ExpertiseSubpageLayoutProps) {
  return (
    <div
      className="relative font-sans min-h-screen"
      style={{ background: "var(--page)", color: "var(--text-secondary)" }}
    >
      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {/* Continuous Bespoke Background Motion */}
        {subpageId && <SubpageHeroMotion theme={subpageId} />}

        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(201,162,39,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Decorative horizontal rule */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-px z-10"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--border-strong) 30%, var(--accent-text) 50%, var(--border-strong) 70%, transparent)",
            opacity: 0.4,
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              },
            },
          }}
          className="relative max-w-6xl mx-auto z-10"
        >
          {/* Back to Overview */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <Link
              href="/expertise"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-14 transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span style={{ color: "var(--accent-text)" }}>Back to Overview</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.45fr] gap-16 lg:gap-24 items-end">
            <div>
              {/* Eyebrow label */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-[10px] font-mono font-semibold uppercase tracking-[0.28em] mb-5"
                style={{ color: "var(--accent-text)" }}
              >
                {tagline}
              </motion.p>

              {/* Main heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.97] font-normal"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="mt-7 text-base sm:text-lg leading-[1.75] max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {description}
              </motion.p>
            </div>

            {/* Side Focus Areas card & CTA button */}
            <div className="hidden lg:flex flex-col gap-4 pb-2">
              {/* Focus Areas card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <FocusAreasCardHighlight>
                  <p
                    className="text-[10px] font-mono uppercase tracking-widest mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Focus Areas
                  </p>
                  <div className="flex flex-col gap-2">
                    {pillars.map((p) => (
                      <div key={p.id} className="flex items-center gap-2">
                        <span
                          className="h-1 w-1 rounded-full shrink-0"
                          style={{ background: "var(--accent-text)" }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {p.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </FocusAreasCardHighlight>
              </motion.div>

              {/* Start a Conversation button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <AnimatedCTAButton href="/contact">
                  Start a Conversation <ArrowUpRight className="w-3.5 h-3.5" />
                </AnimatedCTAButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Core Expertise ── */}
      <section
        className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="mb-16">
            <p
              className="text-[10px] font-mono font-semibold uppercase tracking-[0.28em] mb-3"
              style={{ color: "var(--accent-text)" }}
            >
              Strategic Domains
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Core Expertise
            </h2>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                {...reveal}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Gold left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-500 group-hover:w-1"
                  style={{ background: "linear-gradient(to bottom, var(--accent-text), transparent)" }}
                />

                {/* Subtle corner glow */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 70%)" }}
                  aria-hidden="true"
                />

                <div className="pl-8 pr-7 py-8 lg:pl-10 lg:py-9">
                  {/* Top row: index + title + subtitle */}
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span
                          className="font-mono text-xs font-bold tabular-nums select-none"
                          style={{ color: "var(--accent-text)", opacity: 0.7 }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="font-display text-xl sm:text-2xl font-normal leading-tight"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      {pillar.subtitle && (
                        <p
                          className="text-[10px] font-mono font-semibold uppercase tracking-[0.22em]"
                          style={{ color: "var(--accent-text)" }}
                        >
                          {pillar.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Decorative badge */}
                    {pillar.metrics && (
                      <div
                        className="hidden sm:flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest"
                        style={{
                          background: "var(--gold-soft)",
                          color: "var(--accent-text)",
                          border: "1px solid var(--accent-text)",
                          opacity: 0.9,
                        }}
                      >
                        {pillar.metrics}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base leading-[1.8] mb-7 max-w-3xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pillar.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px mb-6"
                    style={{
                      background: "linear-gradient(to right, var(--accent-text), var(--border) 60%, transparent)",
                      opacity: 0.3,
                    }}
                  />

                  {/* Highlights grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillar.highlights.slice(0, 4).map((hl: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs leading-[1.7]"
                      >
                        <span
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--accent-text)" }}
                        />
                        <span style={{ color: "var(--text-muted)" }}>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile metrics */}
                  {pillar.metrics && (
                    <p
                      className="sm:hidden mt-6 text-[10px] font-mono font-semibold uppercase tracking-widest"
                      style={{ color: "var(--accent-text)" }}
                    >
                      {pillar.metrics}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Initiatives ── */}
      <section
        className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
        style={{ background: "var(--surface-soft)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal} className="flex items-end justify-between mb-14 gap-8">
            <div>
              <p
                className="text-[10px] font-mono font-semibold uppercase tracking-[0.28em] mb-3"
                style={{ color: "var(--accent-text)" }}
              >
                Evidence
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Selected Initiatives
              </h2>
            </div>
            <div
              className="hidden sm:block h-px flex-1 max-w-xs"
              style={{ background: "var(--border-strong)", opacity: 0.5 }}
            />
          </motion.div>

          <div className="space-y-0">
            {initiatives.map((exp, index) => (
              <motion.article
                key={exp.id}
                {...reveal}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-[0.32fr_1fr] gap-8 lg:gap-16 py-12"
                style={{ borderTop: index === 0 ? "1px solid var(--border)" : "1px solid var(--border)" }}
              >
                {/* Left meta */}
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p
                    className="text-[10px] font-mono font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {exp.period}
                  </p>
                  <h3
                    className="text-xl font-semibold leading-snug mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.organization}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.role}
                  </p>
                </div>

                {/* Right content */}
                <div>
                  <p
                    className="text-lg sm:text-xl font-normal leading-[1.55] mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.highlight}
                  </p>
                  <div
                    className="h-px w-full mb-6"
                    style={{ background: "var(--border)" }}
                  />
                  <div className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-sm leading-[1.75] pl-4"
                        style={{
                          color: "var(--text-secondary)",
                          borderLeft: "2px solid var(--border-strong)",
                        }}
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section
        className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...reveal}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center"
          >
            <div>
              <p
                className="text-[10px] font-mono font-semibold uppercase tracking-[0.28em] mb-4"
                style={{ color: "var(--accent-text)" }}
              >
                Next Step
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight max-w-2xl"
                style={{ color: "var(--text-primary)" }}
              >
                {ctaLabel}
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:flex-col lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 btn-gold"
              >
                Start a Conversation <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/expertise"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All Expertise Areas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
