"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Languages,
  Building2,
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { EDUCATION, LANGUAGES } from "@/data/content";
import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";
import {
  HeroAmbientGlow,
  HeroDescription,
  HeroEyebrow,
  HeroHeading,
  HeroMotionContainer,
} from "@/components/HeroAnimations";
import { HeroAmbientMotion } from "@/components/ContinuousHeroMotion";
import AnimatedProfilePortrait from "@/components/AnimatedProfilePortrait";


const biographyParagraphs = [
  "Aaqib Alvi is a global program and business leader with more than 12 years of education-technology experience spanning artificial intelligence, digital readiness, sustainability, STEAM learning, business development, operations, and cross-border innovation.",
  "He managed global AI programs for Intel and launched national-level AI skilling programs for the general public, youth, vocational graduates, and working professionals. These programs were delivered with ministries and partners across 35+ governments and reached more than 200,000 people.",
  "His work includes localization of AI curricula, AI strategies for educational institutions, SDG-oriented visioning, corporate innovation, leadership training, and stakeholder engagement.",
];

const capabilityGroups = [
  {
    label: "Leadership Perspective",
    text: "Aaqib works at the intersection of emerging technology, education, and institutional readiness, translating complex AI and digital shifts into programs that can be understood, adopted, and scaled.",
  },
  {
    label: "Institutional / Technology Journey",
    text: "His journey spans Intel global AI programs, Sustainable Living Lab, Whizz Kidz, AI Teach U / AI Love Venture, INSEAD AI Venture Lab mentorship, and earlier research and development work in Singapore.",
  },
  {
    label: "How Aaqib Works",
    text: "The through-line is practical implementation: curriculum localization, team management, stakeholder engagement, business development, professional training, deployment support, and measured execution.",
  },
];

const coreCapabilities = [
  "Global AI / Digital Readiness Programs",
  "AI Skilling, Upskilling & Reskilling",
  "GenAI Implementation",
  "Digital Trust",
  "Sustainability & Climate Adaptation",
  "SDG-Oriented Visioning",
  "Futures Thinking & Foresight",
  "EdTech Strategy & Product Management",
  "STEAM Curricula",
  "Financial Control & Team Building",
  "High-Pressure Crisis Management",
];

const evidenceItems = [
  "Managed global AI programs for Intel across 35+ governments, reaching more than 200,000 people.",
  "General Manager, Sustainable Living Laboratory LLC USA, formalizing and scaling the U.S. presence from Jan 2025.",
  "Mentor top-selected startups under the INSEAD AI Venture Lab.",
  "Supported Whizz Kidz revenue growth from 200k in late 2013 to more than 700k by early 2019.",
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

export default function AboutPage() {
  return (
    <div className="relative -mt-20 font-sans tracking-normal bg-warmWhite dark:bg-charcoal text-charcoal dark:text-warmWhite">
      <section className="section-page relative flex min-h-[100svh] items-center overflow-hidden border-b border-border pt-20">
        <CinematicHeroImage src="/about-hero.png" objectPosition="object-[center_45%]" />
        <AmbientLightSweep />
        <div
          aria-hidden="true"
          className="editorial-hero-overlay absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="editorial-hero-bottom absolute inset-0"
        />
        <HeroAmbientMotion variant="orbital" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 z-10">
          <HeroMotionContainer className="max-w-4xl">
            <HeroEyebrow className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Executive Biography
            </HeroEyebrow>
            <HeroHeading className="mt-7 max-w-4xl font-display text-[clamp(3.1rem,8svh,6.35rem)] font-normal leading-[0.98] text-white">
              Building readiness for technology-led change.
            </HeroHeading>
            <HeroDescription className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Bridging technical divides for non-technical audiences through EdTech, AI and digital
              readiness work across Singapore, the United States, and 35+ governments.
            </HeroDescription>
          </HeroMotionContainer>
        </div>
      </section>

      <section aria-labelledby="leadership-perspective" className="section-page">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-10 lg:py-28">
          <motion.aside {...fadeIn} className="lg:sticky lg:top-28 lg:self-start">
            <AnimatedProfilePortrait
              className="max-w-[390px]"
              overlayStyle="bottom-card"
              name="Aaqib Alvi"
              subtitle="General Manager, SLL USA"
              badgeText="SLL USA"
              extraInfo="Singapore / USA • 12+ Yrs EdTech Exp"
              priority
            />
          </motion.aside>

          <div className="space-y-16">
            <motion.div {...fadeIn} className="max-w-3xl">
              <p id="leadership-perspective" className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
                Leadership Perspective
              </p>
              <div className="mt-6 space-y-6 text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                {biographyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.blockquote
              {...fadeIn}
              className="max-w-3xl border-y border-white/10 py-8"
            >
              <p className="font-display text-3xl font-normal leading-tight text-white sm:text-4xl">
                Practical implementation is the center of the story: programs, curricula, teams,
                institutions, and people moving from ambition into readiness.
              </p>
            </motion.blockquote>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {capabilityGroups.map((item) => (
                <motion.div key={item.label} {...fadeIn} className="border-l border-white/15 pl-5">
                  <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn} className="max-w-4xl border-t border-white/10 pt-10">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
                Core Competencies & Capabilities
              </p>
              <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                {coreCapabilities.map((skill) => (
                  <div key={skill} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                    <span className="mt-2 h-px w-5 shrink-0 bg-brand-gold/70" aria-hidden="true" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-labelledby="selected-credibility" className="section-soft border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10 lg:py-24">
          <motion.div {...fadeIn}>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
              Selected Evidence
            </p>
            <h2 id="selected-credibility" className="mt-5 max-w-md font-display text-4xl font-normal leading-tight text-ink sm:text-5xl">
              Credibility across institutions, ventures and learning systems.
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="divide-y divide-white/10">
            {evidenceItems.map((item) => (
              <p key={item} className="py-6 text-base leading-8 text-text first:pt-0 last:pb-0">
                {item}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="cultural-fluency" className="section-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <motion.div {...fadeIn} className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-brand-gold">
                <Languages className="h-5 w-5" aria-hidden="true" />
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
                  Cultural Fluency
                </p>
              </div>
              <h2 id="cultural-fluency" className="mt-5 font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
                Working across international teams.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                Working across international teams with native and professional linguistic fluency.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {LANGUAGES.map((lang) => (
                <motion.div
                  key={lang.language}
                  className="relative overflow-hidden rounded-xl bg-surface p-5 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 text-ink"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Subtle orbital lines background */}
                  <svg
                    className="absolute inset-0 pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    style={{ opacity: 0.05 }}
                  >
                    <path d="M0 20 Q50 0 100 20" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M0 80 Q50 100 100 80" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-base font-medium">{lang.language}</h3>
                    <p className="mt-1 text-xs text-brand-gold">{lang.level}</p>
                    {/* Proficiency indicator */}
                    <div className="mt-3 h-1 w-full bg-gold/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gold rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="education" className="section-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <motion.div {...fadeIn} className="max-w-3xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
              Education & Academic Honors
            </p>
            <h2 id="education" className="mt-5 font-display text-4xl font-normal leading-tight text-ink sm:text-5xl">
              Engineering discipline, executive management training and formative academic leadership.
            </h2>
            <p className="mt-6 text-sm leading-7 text-text sm:text-base sm:leading-8">
              Combining world-class engineering discipline from the National University of
              Singapore with executive management training at Quantic.
            </p>
          </motion.div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {EDUCATION.map((edu, idx) => (
              <motion.article
                key={edu.institution}
                {...fadeIn}
                transition={{ duration: 0.75, delay: idx * 0.06, ease: "easeOut" }}
                className="grid grid-cols-1 gap-8 py-9 lg:grid-cols-[0.42fr_1fr] lg:gap-16"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-gold">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {edu.period}
                  </div>
                  <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-brand-gold">
                    <Building2 className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {edu.institution} · {edu.location}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-medium leading-tight text-white sm:text-3xl">{edu.degree}</h3>
                  {edu.description && (
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                      {edu.description}
                    </p>
                  )}

                  {edu.honors && (
                    <div className="mt-7">
                      <h4 className="flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-300">
                        <Award className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                        Distinctions, Leadership & Projects
                      </h4>
                      <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
                        {edu.honors.map((honor) => (
                          <p key={honor} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                            <span className="mt-3 h-px w-4 shrink-0 bg-brand-emerald/80" aria-hidden="true" />
                            <span>{honor}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-12">
            <Link
              href="/ventures"
              className="inline-flex min-h-11 items-center gap-3 border-b border-white/25 py-2 text-sm text-white transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4"
            >
              View full leadership journey
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
  );
}
