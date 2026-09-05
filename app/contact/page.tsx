"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";

const INQUIRY_TYPES = [
  "National AI Skilling Program",
  "Enterprise GenAI Strategy",
  "Higher Ed / College Curriculum",
  "Climate Adaptation & SDG Visioning",
  "Startup Mentorship & Advisory",
    "Presentations / Executive Speaking",
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    workEmail: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00D2FF", "#D4AF37", "#10B981"],
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs uppercase tracking-widest text-brand-gold font-medium">
            Direct Concierge
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Initiate Executive <br />
            <span className="text-gradient-gold">Dialogue & Advisory</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Direct channel for ministries, universities, organizations, and communities seeking
            consultation with Aaqib Alvi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Points
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Direct Telephone</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Email 1 */}
                <a
                  href={`mailto:${PERSONAL_INFO.emails[0]}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-brand-cyan/15 text-brand-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Official Institutional Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors truncate">
                      {PERSONAL_INFO.emails[0]}
                    </div>
                  </div>
                </a>

                {/* Email 2 */}
                <a
                  href={`mailto:${PERSONAL_INFO.emails[1]}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-brand-cyan/15 text-brand-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Advisory Direct Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors truncate">
                      {PERSONAL_INFO.emails[1]}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Executive LinkedIn Profile</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {PERSONAL_INFO.linkedinHandle}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Global Geographic Hubs */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-cyan" />
                Operational Hubs
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-bold text-white">Singapore (APAC HQ)</div>
                  <div className="text-slate-300 mt-1">Sustainable Living Lab / Whizz Kidz</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-bold text-white">United States (Americas)</div>
                  <div className="text-slate-300 mt-1">Sustainable Living Lab LLC USA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-brand-cyan/20 relative shadow-glass-elevated">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-emerald/20 text-brand-emerald mx-auto flex items-center justify-center border border-brand-emerald/40 shadow-glow-cyan/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Executive Inquiry Transmitted
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting the executive office of Aaqib Alvi. Your brief will be
                    reviewed directly by the advisory office, and our response will follow within
                    24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        organization: "",
                        workEmail: "",
                        country: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 glass-card hover:text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                      Consultation Brief
                    </h3>
                    <p className="text-xs text-slate-300">
                      Select your engagement parameters and detail your institutional objectives.
                    </p>
                  </div>

                  {/* Inquiry Type Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">
                      Engagement Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {INQUIRY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`p-2.5 rounded-xl text-xs text-left font-medium transition-all ${
                            inquiryType === type
                              ? "bg-brand-cyan/20 border border-brand-cyan/50 text-white font-bold shadow-glow-cyan/20"
                              : "bg-white/[0.02] border border-white/5 text-slate-300 hover:border-white/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. / Director / Executive Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-1.5">
                        Organization / Ministry *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="e.g. Ministry / College / Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-1.5">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="leader@institution.org"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-1.5">
                        Country / Jurisdiction *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United States, Singapore"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-1.5">
                      Executive Brief / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline scope, timeline, and strategic objectives for collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-yellow-500 shadow-glow-gold hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Transmit Executive Brief</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>Direct contact for advisory enquiries</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
