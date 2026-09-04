"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Award,
  BookOpen,
  Languages,
  CheckCircle2,
  Building2,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, LANGUAGES } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs uppercase tracking-widest text-brand-gold font-medium">
            Executive Leadership
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Strategic Vision, <br />
            <span className="text-gradient-gold">Global Execution</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Bridging technical divides for non-technical audiences, scaling high-impact EdTech and AI
            operations across Singapore, the United States, and over 35 sovereign partners.
          </p>
        </div>

        {/* Profile & Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-glass-elevated group">
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/profile.jpeg"
                  alt="Aaqib Alvi Executive Portrait"
                  fill
                  className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
              </div>

              {/* Holographic Bottom Tag */}
              <div className="absolute bottom-6 inset-x-6 glass-panel p-4 rounded-2xl border border-brand-gold/30">
                <h3 className="text-lg font-bold text-white">Aaqib Alvi</h3>
                <p className="text-xs text-brand-gold font-medium tracking-wide">
                  General Manager, SLL USA • INSEAD AI Mentor
                </p>
                <div className="mt-2 flex items-center gap-4 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-cyan" /> Singapore / USA
                  </span>
                  <span>•</span>
                  <span>12+ Yrs Leadership</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Executive Profile & Mandate
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Aaqib Alvi is a global program and business leader with more than 12 years of
                  cross-functional leadership spanning artificial intelligence, digital readiness,
                  sustainability, STEAM learning, enterprise operations, business development, and
                  international policy alignment.
                </p>
                <p>
                  Throughout his tenure, he has directed flagship Intel-linked AI skilling,
                  upskilling, and reskilling programs in collaboration with sovereign government
                  ministries and regional partners across 35+ countries — successfully reaching over
                  200,000 learners from diverse socio-economic backgrounds.
                </p>
                <p>
                  His core strength lies in bridging complex technical skills gaps for non-technical
                  audiences, localizing sophisticated curricula for domestic regulatory environments,
                  and architecting long-range foresight planning models that inform national policy.
                </p>
              </div>

              {/* Key Competency Pills */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-3">
                  Core Competencies & Capabilities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Global AI / Digital Readiness Programs",
                    "AI Skilling, Upskilling & Reskilling",
                    "GenAI Implementation",
                    "Digital Trust & Algorithmic Ethics",
                    "Sustainability & Climate Adaptation",
                    "SDG-Oriented Visioning",
                    "Futures Thinking & Foresight",
                    "EdTech Strategy & Product Management",
                    "STEAM Curricula",
                    "Financial Control & Team Building",
                    "High-Pressure Crisis Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-200 hover:border-brand-cyan/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Citizenship & Languages */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-brand-cyan/15 text-brand-cyan">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Linguistic & Cultural Fluency</h3>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                Directing cross-border teams across the Asia-Pacific, North America, Europe, and
                South Asia with native and professional linguistic fluency:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <div className="text-sm font-semibold text-white">{lang.language}</div>
                    <div className="text-xs text-brand-gold mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ACADEMIC PEDIGREE & HIGHER EDUCATION */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
              Rigorous Pedigree
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Education & Academic Honors
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Combining world-class engineering discipline from the National University of
              Singapore with executive management training at Quantic.
            </p>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-gold/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-sm text-brand-cyan font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {edu.honors && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-brand-gold" />
                      Distinctions, Leadership & Projects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.honors.map((honor, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed bg-white/[0.02] p-2.5 rounded-xl border border-white/5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span>{honor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
