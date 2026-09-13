"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  CERTIFICATIONS,
  CORE_PILLARS,
  EDUCATION,
  EXPERIENCES,
  VOLUNTEERING,
} from "@/data/content";
import { AmbientLightSweep, CinematicHeroImage, LeadershipNetworkTrace } from "@/components/PremiumHeroMotion";
import {
  HeroAmbientGlow,
  HeroDescription,
  HeroEyebrow,
  HeroHeading,
  HeroMotionContainer,
} from "@/components/HeroAnimations";
import { HeroAmbientMotion } from "@/components/ContinuousHeroMotion";

const primaryExpertise = CORE_PILLARS.slice(0, 3);
const supportingExpertise = CORE_PILLARS.slice(3);

const journeyIds = [
  "insead",
  "sll-usa-gm",
  "sll-country-manager",
  "aiteachu",
  "whizzkidz-director",
  "whizzkidz-bdm",
];

const professionalJourney = journeyIds
  .map((id) => EXPERIENCES.find((item) => item.id === id))
  .filter(Boolean);

const contributionIds = ["wupa", "astar", "nus-development"];
const selectedContributions = contributionIds
  .map((id) => EXPERIENCES.find((item) => item.id === id))
  .filter(Boolean);

const selectedCredentials = [
  "Introduction to Generative AI",
  "Blue Ocean Strategy",
  "Finance: Time Value of Money",
  "Marketing Fundamentals",
  "The Science of Well-Being",
];

const secondaryCredentials = CERTIFICATIONS.filter(
  (cert) => !selectedCredentials.includes(cert.name)
);

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

function mostImportantOutcome(description: string[]) {
  return description[0] || "";
}

export default function ExpertisePage() {
  return (
    <div className="relative -mt-20 font-sans tracking-normal bg-warmWhite dark:bg-charcoal text-charcoal dark:text-warmWhite">
      <section className="section-page relative flex min-h-[100svh] items-center overflow-hidden border-b border-border pt-20">
        <CinematicHeroImage src="/leadership-expertise-hero.png" objectPosition="object-center" intensity="calm" />
        <LeadershipNetworkTrace />
        <AmbientLightSweep tone="cyan" />
        <div
          aria-hidden="true"
          className="editorial-hero-overlay absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="editorial-hero-bottom absolute inset-0"
        />
        <HeroAmbientMotion variant="network" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 z-10">
          <HeroMotionContainer className="max-w-4xl">
            <HeroEyebrow className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Leadership &amp; Expertise
            </HeroEyebrow>
            <HeroHeading className="mt-7 max-w-4xl font-display text-[clamp(3rem,8svh,6rem)] font-normal leading-[0.99] text-white">
              Where AI readiness becomes institutional capability.
            </HeroHeading>
            <HeroDescription className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              A practical portfolio of AI, digital readiness, sustainability, EdTech, and business
              development experience across programs, institutions, and communities.
            </HeroDescription>
          </HeroMotionContainer>
        </div>
      </section>

      <section aria-labelledby="core-expertise" className="section-page">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <motion.div {...reveal} className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
                Core Expertise
              </p>
              <h2 id="core-expertise" className="mt-5 max-w-md font-display text-4xl font-normal leading-tight text-ink sm:text-5xl">
                Strategic domains with delivery depth.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
                Aaqib&apos;s work brings together AI skilling, GenAI implementation, Digital Trust,
                sustainability, foresight, EdTech strategy, and stakeholder engagement.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {primaryExpertise.map((pillar, index) => (
                <article key={pillar.id} className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[0.25fr_1fr] md:gap-10">
                  <div>
                    <span className="font-display text-5xl font-normal text-white/20">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-brand-gold">
                      {pillar.badge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium leading-tight text-white sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-brand-gold">{pillar.subtitle}</p>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                      {pillar.description}
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {pillar.highlights.slice(0, 2).map((highlight) => (
                        <p key={highlight} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                          <span className="mt-2.5 h-px w-5 shrink-0 bg-brand-gold/70" aria-hidden="true" />
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>
                    <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-brand-gold">
                      {pillar.metrics}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal} className="mt-14 border-t border-white/10 pt-10">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
              Supporting Practice Areas
            </p>
            <div className="mt-7 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3">
              {supportingExpertise.map((pillar) => (
                <article key={pillar.id} className="border-l border-white/15 pl-5">
                  <h3 className="text-base font-medium text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="professional-journey" className="section-warm border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
              Professional Journey
            </p>
            <h2 id="professional-journey" className="mt-5 font-display text-4xl font-normal leading-tight text-ink sm:text-5xl">
              A progression from learning ventures to global AI programs.
            </h2>
              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Career progression across AI programs, learning ventures, business development,
                operations, startup mentorship, and institutional implementation.
              </p>
          </motion.div>

          <div className="mt-14 border-y border-white/10">
            {professionalJourney.map((experience, index) => {
              if (!experience) return null;

              return (
                <motion.article
                  key={experience.id}
                  {...reveal}
                  transition={{ duration: 0.75, delay: index * 0.05, ease: "easeOut" }}
                  className="relative grid grid-cols-1 gap-8 border-b border-white/10 py-9 last:border-b-0 lg:grid-cols-[0.32fr_0.38fr_1fr] lg:gap-12"
                >
                  <div className="flex items-center gap-4 lg:block">
                    <div className="h-3 w-3 rounded-full border border-brand-gold bg-brand-dark" aria-hidden="true" />
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold lg:mt-4">
                      {experience.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium leading-tight text-ink sm:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-brand-gold">
                      {experience.organization}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{experience.location}</p>
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                      Leadership Responsibility
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
                      {experience.highlight}
                    </p>
                    <p className="mt-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                      Important Outcome
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                      {mostImportantOutcome(experience.description)}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="institutional-contribution" className="section-teal">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-10 lg:py-24">
          <motion.div {...reveal}>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
              Institutional & Community Contribution
            </p>
            <h2 id="institutional-contribution" className="mt-5 max-w-md font-display text-4xl font-normal leading-tight text-ink sm:text-5xl">
              Selected contributions beyond core roles.
            </h2>
          </motion.div>

          <motion.div {...reveal} className="divide-y divide-white/10 border-y border-white/10">
            {selectedContributions.map((item) => {
              if (!item) return null;

              return (
                <article key={item.id} className="py-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium text-white">{item.organization}</h3>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-brand-gold">{item.role}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.highlight}</p>
                </article>
              );
            })}

            {VOLUNTEERING.map((item) => (
              <article key={item.title} className="py-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold">
                    {item.period}
                  </p>
                </div>
                <p className="mt-2 text-sm text-brand-gold">{item.role}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.details}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="selected-credentials" className="section-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <motion.div {...reveal} className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
                Selected Education & Credentials
              </p>
              <h2 id="selected-credentials" className="mt-5 max-w-md font-display text-4xl font-normal leading-tight text-ink sm:text-5xl">
                Academic grounding with continued professional learning.
              </h2>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-border py-2 text-sm text-ink transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-12">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {EDUCATION.map((item) => (
                  <article key={item.institution} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[0.32fr_1fr] sm:gap-8">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold">
                      {item.period}
                    </p>
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.degree}</h3>
                      <p className="mt-2 text-sm leading-6 text-brand-gold">
                        {item.institution} · {item.location}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                  Selected Credentials
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedCredentials.map((credential) => (
                    <p key={credential} className="border-l border-brand-gold/50 pl-4 text-sm leading-6 text-slate-200">
                      {credential}
                    </p>
                  ))}
                </div>

                {secondaryCredentials.length > 0 && (
                  <details className="mt-8 border-t border-white/10 pt-6">
                    <summary className="cursor-pointer text-sm font-medium text-white transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4">
                      Additional credentials
                    </summary>
                    <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                      {secondaryCredentials.map((credential) => (
                        <p key={credential.name} className="text-sm leading-6 text-slate-400">
                          {credential.name}
                        </p>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
