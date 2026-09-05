"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Award,
  HeartHandshake,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Sparkles,
  MapPin,
  ShieldAlert,
} from "lucide-react";
import {
  GLOBAL_COUNTRIES,
  CERTIFICATIONS,
  VOLUNTEERING,
  EXECUTIVE_METRICS,
} from "@/data/content";

export default function GlobalReachPage() {
  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs uppercase tracking-widest text-brand-cyan font-medium">
            Planetary Footprint
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Global Footprint, SDGs & <br />
            <span className="text-gradient-cyan">Humanitarian Stewardship</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            AI skilling programs were delivered with ministries and partners across 35+ governments,
            alongside work in sustainability, SDG-oriented visioning, and digital readiness.
          </p>
        </div>

        {/* 35+ GOVERNMENTS FOOTPRINT MATRIX */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
                Global Reach
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">
                Programs Delivered Across 35+ Governments
              </h2>
            </div>
            <p className="text-xs text-slate-300 max-w-sm">
              Delivering AI skilling and digital readiness programs with ministries and partners across
              35+ governments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLOBAL_COUNTRIES.map((item, idx) => (
              <motion.div
                key={item.country}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/30 transition-all group"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <MapPin className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {item.country}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{item.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Programs delivered across 35+ governments</span>
            <span className="text-brand-gold font-semibold">200,000+ People Reached</span>
          </div>
        </div>

        {/* UN SDG ALIGNMENT */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
              Sustainable Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Embedding planetary stewardship and equitable human development into every technology initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                sdg: "SDG 4: Quality Education",
                focus: "Digital & AI Literacy for Non-Technical Audiences",
                desc: "Equipping youth, vocational graduates, and working professionals with foundational AI tools, eliminating pedagogical elitism.",
                accent: "border-red-500/30 text-red-400",
              },
              {
                sdg: "SDG 8: Decent Work & Growth",
                focus: "Workforce Reskilling & Economic Transition",
                desc: "Supporting digital readiness for youth, vocational graduates, working professionals, and the general public.",
                accent: "border-amber-500/30 text-amber-400",
              },
              {
                sdg: "SDG 13: Climate Action",
                focus: "Sustainable Living Lab & Climate Adaptation",
                desc: "Supporting sustainability, climate adaptation, and SDG-oriented visioning at SL2.",
                accent: "border-emerald-500/30 text-emerald-400",
              },
            ].map((sdg) => (
              <div
                key={sdg.sdg}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  {sdg.sdg}
                </div>
                <div className={`text-sm font-semibold ${sdg.accent}`}>{sdg.focus}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{sdg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS & LIFELONG MASTERY */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
              Continuous Learning
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Certifications & Professional Credentials
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Rigorous interdisciplinary mastery spanning generative intelligence, corporate finance,
              behavioral economics, and technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-brand-gold/40 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                  <Award className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                </div>
                <div className="text-xs text-brand-cyan">{cert.issuer}</div>
                {cert.credentialId && (
                  <div className="text-[10px] text-slate-300 font-mono mt-2 truncate">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* HUMANITARIAN & COMMUNITY SERVICE */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-brand-emerald/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-brand-emerald/15 text-brand-emerald">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Humanitarian Relief & Community Mentorship
              </h3>
              <p className="text-xs text-brand-gold tracking-wide">
                Ground-level commitment to social equity and emergency disaster response
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VOLUNTEERING.map((vol) => (
              <div
                key={vol.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">{vol.title}</h4>
                  <span className="text-xs text-brand-gold font-medium">{vol.period}</span>
                </div>
                <div className="text-xs text-brand-emerald font-semibold uppercase tracking-wider">
                  {vol.role}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{vol.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
