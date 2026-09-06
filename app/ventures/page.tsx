"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES, VOLUNTEERING } from "@/data/content";
import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";

function byId(id: string) {
  const item = EXPERIENCES.find((experience) => experience.id === id);
  if (!item) {
    throw new Error(`Missing experience: ${id}`);
  }
  return item;
}

const intel = byId("sll-country-manager");
const sllUsa = byId("sll-usa-gm");
const whizzKidz = byId("whizzkidz-director");
const whizzKidzEarly = byId("whizzkidz-bdm");
const aiTeachU = byId("aiteachu");

const impactStories = [
  {
    number: "01",
    label: "National AI Readiness",
    title: "Making AI learning usable across public, youth and professional audiences.",
    context:
      "As Country Manager - SL2, Aaqib worked on national-level AI skilling programs for the general public, youth, vocational graduates, and working professionals.",
    action:
      "He managed global AI programs for Intel, led localization of AI curricula, supported AI strategies for educational institutions, and coordinated across U.S., Singapore, Indonesia, and India offices.",
    outcome:
      "Programs were delivered with ministries and partners across 35+ governments and reached more than 200,000 people.",
    evidence: [
      intel.period,
      "United States, Singapore, Indonesia, India, Korea, Japan, Russia, Poland, Germany, and China",
      "SDG-oriented visioning, corporate innovation, leadership training, and opening of SLL USA",
    ],
    measure: "35+ governments",
  },
  {
    number: "02",
    label: "Institutional Scale",
    title: "Building a U.S. operating presence for AI, GenAI and digital-skills work.",
    context:
      "At Sustainable Living Laboratory LLC USA, Aaqib formalized and scaled the U.S. presence from Jan 2025.",
    action:
      "The work includes consultation services, AI learning and digital-skills tools, deployment and IT support, professional training services, AI/GenAI and digital solution implementation, strategic leadership, team management, financial control, business development, stakeholder engagement, legal compliance, and risk management.",
    outcome:
      "The U.S. presence is scaling to 35+ states, collaborating with 100+ colleges, training 300+ professors, and creating more than 1,000 hours of content.",
    evidence: [
      sllUsa.period,
      "General Manager - Sustainable Living Laboratory LLC, USA",
      "Consultation, AI learning tools, deployment support, professional training, and GenAI implementation",
    ],
    measure: "100+ colleges",
  },
  {
    number: "03",
    label: "Learning Ventures",
    title: "Turning enrichment and early-learning programs into durable education ventures.",
    context:
      "Aaqib's education-technology foundation includes Whizz Kidz and AI Teach U / AI Love Venture across STEAM, language learning, operations, product development, and client engagement.",
    action:
      "At Whizz Kidz, he supported business operations, marketing, advertising, web, IT, logistics, STEAM learning, camps, classes, and growth ideas including Science Technology Innovation Creativity 'K'onferences in collaboration with Youth Ambassadors Singapore. At AI Teach U / AI Love Venture, he led multinational teams, teacher training, product development, instructional design, and spoken-language curricula.",
    outcome:
      "Whizz Kidz grew from 200k in late 2013 to more than 700k by early 2019, worked with 25 of 45 schools, supported more than 15 camps across more than eight venues, and won Expat Living Awards for Best Enrichment Classes & Holiday Camps in 2018, 2019, and 2020.",
    evidence: [
      `${whizzKidzEarly.period} / ${whizzKidz.period} / ${aiTeachU.period}`,
      "AI-based language-learning app for children aged 4-8 with progression reports",
      "Relationships with Children's Society, Glyph, NHB, and NLB through demonstrations and community projects",
    ],
    measure: "200k to 700k+",
  },
];

const evidenceIndex = [
  byId("insead"),
  byId("wupa"),
  byId("astar"),
  byId("nus-development"),
  ...VOLUNTEERING,
];

const heroMetrics = [
  { value: "35+", label: "Governments" },
  { value: "200K+", label: "People Reached" },
  { value: "100+", label: "Colleges" },
];

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

export default function VenturesPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative -mt-20 font-sans tracking-normal">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10 pt-20">
        <CinematicHeroImage src="/impact-hero.png" objectPosition="object-[center_42%]" />
        <AmbientLightSweep />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,27,0.82)_0%,rgba(3,12,27,0.60)_45%,rgba(3,12,27,0.26)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,27,0.24)_0%,rgba(3,12,27,0.14)_48%,rgba(3,12,27,0.50)_100%)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Impact
            </p>
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-4xl font-display text-[clamp(2.7rem,7svh,5.75rem)] font-normal leading-[0.99] text-white sm:text-[clamp(3rem,8svh,6rem)]"
            >
              Evidence of change across learning systems and institutions.
            </motion.h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              From commercial scaling and venture mentorship to AI skilling, EdTech, and sustainable
              innovation work across international programs and organizations.
            </p>

            <dl className="mt-9 grid max-w-3xl grid-cols-3 border-y border-white/10 sm:mt-12">
              {heroMetrics.map((metric, index) => (
                <div key={metric.label} className="min-w-0 border-r border-white/10 px-2 py-4 first:pl-0 last:border-r-0 last:pr-0 sm:py-5 sm:pr-8">
                  <dt className="text-[9px] font-medium uppercase leading-4 tracking-[0.12em] text-slate-300 sm:text-xs sm:leading-5 sm:tracking-[0.18em]">
                    {metric.label}
                  </dt>
                  <motion.dd
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-3 font-display text-3xl font-normal text-white sm:text-5xl"
                  >
                    {metric.value}
                  </motion.dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="impact-stories">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-cyan">
              Flagship Impact Stories
            </p>
            <h2 id="impact-stories" className="mt-5 font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
              Three examples of leadership moving from intent to delivery.
            </h2>
          </motion.div>

          <div className="mt-14 space-y-20 lg:space-y-28">
            {impactStories.map((story, index) => (
              <motion.article
                key={story.number}
                {...reveal}
                transition={{ duration: 0.75, delay: index * 0.06, ease: "easeOut" }}
                className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.34fr_1fr] lg:gap-20"
              >
                <aside className="lg:sticky lg:top-28 lg:self-start">
                  <p className="font-display text-7xl font-normal leading-none text-white/15">
                    {story.number}
                  </p>
                  <p className="mt-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-brand-gold">
                    {story.label}
                  </p>
                  <p className="mt-8 max-w-xs border-t border-brand-cyan/30 pt-5 font-display text-4xl font-normal leading-none text-white">
                    {story.measure}
                  </p>
                </aside>

                <div className="max-w-4xl">
                  <h3 className="font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
                    {story.title}
                  </h3>

                  <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <section className="border-l border-white/15 pl-5">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                        Context
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{story.context}</p>
                    </section>

                    <section className="border-l border-white/15 pl-5">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                        Leadership / Action
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{story.action}</p>
                    </section>
                  </div>

                  <section className="mt-9 border-y border-white/10 py-7">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-brand-cyan">
                      Outcome
                    </p>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-100">
                      {story.outcome}
                    </p>
                  </section>

                  <section className="mt-7">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-brand-gold">
                      Evidence
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                      {story.evidence.map((item) => (
                        <p key={item} className="border-l border-brand-gold/35 pl-4 text-sm leading-7 text-slate-300">
                          {item}
                        </p>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="evidence-index" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:px-10 lg:py-24">
          <motion.div {...reveal}>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-cyan">
              Evidence Index
            </p>
            <h2 id="evidence-index" className="mt-5 max-w-md font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
              Additional signals of credibility.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              A quieter record of mentorship, community contribution, research support, fundraising
              collaboration, and humanitarian relief.
            </p>
          </motion.div>

          <motion.div {...reveal} className="divide-y divide-white/10 border-y border-white/10">
            {evidenceIndex.map((item) => {
              const title = "organization" in item ? item.organization : item.title;
              const role = "organization" in item ? item.role : item.role;
              const period = item.period;
              const detail = "highlight" in item ? item.highlight : item.details;

              return (
                <article key={`${title}-${period}`} className="grid grid-cols-1 gap-4 py-6 md:grid-cols-[0.28fr_1fr] md:gap-10">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-gold">
                      {period}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-brand-cyan">{role}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{detail}</p>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="impact-conversation">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <motion.div {...reveal} className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
                From Evidence to Next Mandate
              </p>
              <h2 id="impact-conversation" className="mt-5 max-w-3xl font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
                Build programs that are credible in strategy and practical in delivery.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-3 border-b border-white/25 py-2 text-sm text-white transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan focus-visible:outline-offset-4"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
