"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Building,
  CheckCircle2,
  Award,
} from "lucide-react";
import { EXPERIENCES, PERSONAL_INFO } from "@/data/content";

export default function VenturesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "current" | "past">("all");

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.type === activeFilter;
  });

  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-xs uppercase tracking-widest text-brand-emeraldLight font-medium">
            Leadership Odyssey
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ventures, Enterprises & <br />
            <span className="text-gradient-gold">Global Milestones</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From commercial scaling and venture mentorship to AI skilling, EdTech, and sustainable
            innovation work across international programs and organizations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-12">
          {[
            { label: "All Engagements", value: "all" },
            { label: "Active Roles", value: "current" },
            { label: "Track Record & History", value: "past" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === tab.value
                  ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-glow-cyan/20"
                  : "glass-card text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline of Engagements */}
        <div className="space-y-8 mb-24">
          {filteredExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 hover:border-brand-gold/40 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md ${
                        exp.type === "current"
                          ? "bg-brand-emerald/20 text-brand-emeraldLight border border-brand-emerald/30"
                          : "bg-white/5 text-slate-300 border border-white/10"
                      }`}
                    >
                      {exp.type === "current" ? "Active Mandate" : "Completed Engagement"}
                    </span>
                    <span className="text-xs text-brand-gold font-semibold tracking-wider">
                      {exp.organization}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlight Callout */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-sm font-medium text-brand-goldLight flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{exp.highlight}</span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 mb-6">
                {exp.description.map((desc, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SPOTLIGHT VENTURES / ACCELERATION DEEP DIVE */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
              Flagship Scale
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Spotlight Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-brand-cyan/20 space-y-4">
              <div className="p-3 rounded-2xl bg-brand-cyan/15 text-brand-cyan w-fit">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Sustainable Living Lab: Transpacific Expansion
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Formalized and scaled the U.S. presence of Sustainable Living Laboratory LLC USA,
                providing consultation services, AI learning and digital-skills tools, deployment and
                IT support, professional training services, and AI/GenAI implementation. The operation
                is scaling to 35+ U.S. states, collaborating with 100+ colleges, training 300+ professors,
                and creating more than 1,000 hours of content.
              </p>
              <div className="pt-2 text-xs font-semibold text-brand-cyan tracking-wider">
                Scaling to 35+ U.S. States • 100+ Colleges • 1,000+ Content Hours
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="glass-panel p-8 rounded-3xl border border-brand-gold/20 space-y-4">
              <div className="p-3 rounded-2xl bg-brand-gold/15 text-brand-gold w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Whizz Kidz: Revenue Growth & Industry Awards
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Supported revenue growth from 200k in late 2013 to more than 700k by early 2019,
                worked with 25 of 45 schools, introduced Science Technology Innovation Creativity
                &apos;K&apos;onferences with Youth Ambassadors Singapore, and received the Expat Living Awards.
              </p>
              <div className="pt-2 text-xs font-semibold text-brand-gold tracking-wider">
                200k to 700k+ Revenue • Expat Living Awards 2018-2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
