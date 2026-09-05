"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Cpu,
  ShieldCheck,
  Leaf,
  Compass,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Users,
} from "lucide-react";
import { CORE_PILLARS, PERSONAL_INFO } from "@/data/content";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe2: <Globe2 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
};

export default function ExpertisePage() {
  const [selectedPillar, setSelectedPillar] = useState<string>(CORE_PILLARS[0].id);

  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs uppercase tracking-widest text-brand-cyan font-medium">
            Core Competencies
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Architecting <br />
            <span className="text-gradient-cyan">Global Digital Readiness</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A practical portfolio of AI, digital readiness, sustainability, EdTech, and business
            development experience across programs, institutions, and communities.
          </p>
        </div>

        {/* 6 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {CORE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-brand-cyan/40 hover:shadow-glow-cyan/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-gold/20 group-hover:text-brand-gold transition-colors">
                    {ICON_MAP[pillar.iconName]}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {pillar.title}
                </h3>
                <div className="text-xs text-brand-gold font-medium tracking-wide mb-4">
                  {pillar.subtitle}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-cyan tracking-wider">
                  {pillar.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROGRAM DELIVERY FOCUS */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
              Program Delivery Focus
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              From Planning to Measurable Impact
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Experience spanning planning, curriculum localization, training, implementation, and
              stakeholder engagement across AI, education, and sustainability work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Planning",
                desc: "Supporting program planning for AI, digital readiness, education, and sustainability initiatives.",
              },
              {
                step: "02",
                title: "Curriculum Localization",
                desc: "Localizing AI curricula and developing spoken-language and digital learning content.",
              },
              {
                step: "03",
                title: "Professional Training",
                desc: "Providing teacher, professor, leadership, and professional training services.",
              },
              {
                step: "04",
                title: "Implementation",
                desc: "Supporting AI/GenAI and digital solution implementation, deployment, and IT support.",
              },
              {
                step: "05",
                title: "Stakeholder Engagement",
                desc: "Working with governments, colleges, organizations, partners, and communities.",
              },
            ].map((phase, idx) => (
              <div
                key={phase.step}
                className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-gold/40 transition-all"
              >
                <div className="text-2xl font-extrabold text-gradient-gold mb-2">
                  {phase.step}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONSULTATION BANNER */}
        <div className="text-center p-10 rounded-3xl glass-card border border-brand-cyan/30 flex flex-col items-center">
          <Sparkles className="w-8 h-8 text-brand-cyan mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Need Tailored AI Skilling or Digital Trust Advisory?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mb-6">
            Partner with Aaqib Alvi on AI skilling, digital readiness, GenAI implementation, EdTech,
            sustainability, or SDG-oriented visioning.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-brand-goldLight to-brand-gold shadow-glow-gold hover:scale-105 transition-all"
          >
            Initiate Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
