"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";
import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";

const CONVERSATION_CATEGORIES = [
  "AI Skilling & Government Programs",
  "Enterprise GenAI Strategy",
  "Higher Education Partnerships",
  "Climate & Sustainability Advisory",
  "Startup Mentorship",
  "Speaking & Presentations",
  "Other Collaboration",
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  honeypot: string;
  timestamp: number;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    message: "",
    honeypot: "",
    timestamp: Date.now(),
  });

  // Set timestamp on mount
  useEffect(() => {
    setFormData((prev) => ({ ...prev, timestamp: Date.now() }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setFormState("idle");
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
      honeypot: "",
      timestamp: Date.now(),
    });
  };

  return (
    <div className="section-page relative -mt-20 pb-12 lg:pb-20">
      <section aria-labelledby="contact-heading" className="section-page relative isolate flex min-h-[100svh] items-center overflow-hidden border-b border-border pt-20">
        <CinematicHeroImage src="/contact-hero.png" objectPosition="object-[center_48%]" intensity="calm" />
        <AmbientLightSweep />
        <div aria-hidden="true" className="editorial-hero-overlay absolute inset-0 z-0" />
        {/* Background gradients */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(197, 160, 89, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 50% 120%, rgba(197, 160, 89, 0.06) 0%, transparent 60%)",
          }}
        />
        <div aria-hidden="true" className="editorial-hero-bottom absolute inset-0 -z-10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 font-sans tracking-normal sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl font-display text-5xl font-normal leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[500px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
          >
            For ministries, institutions, and organizations seeking advisory on AI, digital readiness, or sustainability initiatives.
          </motion.p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column: Invitation & Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Invitation */}
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I work with governments, universities, and enterprises on AI implementation, digital transformation, and climate adaptation. If you&apos;re exploring initiatives in these areas, I&apos;d welcome a conversation.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Response within 24 business hours.
              </p>
            </div>

            {/* Conversation Categories */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                Conversation Topics
              </h2>
              <ul className="space-y-2">
                {CONVERSATION_CATEGORIES.map((category) => (
                  <li key={category} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/70" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                Direct Contact
              </h2>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-gold transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-gold/70 group-hover:text-brand-gold" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              {/* Primary Email */}
              <a
                href={`mailto:${PERSONAL_INFO.emails[0]}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-gold transition-colors group"
              >
                <Mail className="w-4 h-4 text-brand-gold/70 group-hover:text-brand-gold" />
                <span>{PERSONAL_INFO.emails[0]}</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-gold transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-brand-gold/70 group-hover:text-brand-gold" />
                <span>LinkedIn Profile</span>
              </a>

              {/* Locations */}
              <div className="flex items-center gap-3 text-sm text-slate-400 pt-2">
                <MapPin className="w-4 h-4 text-brand-gold/70" />
                <span>Singapore · United States</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-light text-white">
                        Message Sent
                      </h3>
                      <p className="text-sm text-slate-400 max-w-sm mx-auto">
                        Thank you for reaching out. I&apos;ll review your message and respond within 24 business hours.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Error State */}
                    {formState === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm text-red-300">{errorMessage}</p>
                          <button
                            type="button"
                            onClick={() => setFormState("idle")}
                            className="text-xs text-red-400 hover:text-red-300 underline"
                          >
                            Try Again
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Honeypot (hidden) */}
                    <input
                      type="text"
                      name="website"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      className="absolute opacity-0 pointer-events-none"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-slate-400 font-medium">
                        Name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={formState === "loading"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="editorial-input w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-slate-400 font-medium">
                        Email <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={formState === "loading"}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@institution.org"
                        className="editorial-input w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <label htmlFor="organization" className="block text-xs uppercase tracking-widest text-slate-400 font-medium">
                        Organization <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        disabled={formState === "loading"}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Ministry, University, or Company"
                        className="editorial-input w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs uppercase tracking-widest text-slate-400 font-medium">
                        Message <span className="text-brand-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        disabled={formState === "loading"}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your initiative, goals, or questions..."
                        className="editorial-input w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-colors resize-none disabled:opacity-50"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="w-full py-3.5 rounded-lg text-xs uppercase tracking-widest font-semibold text-brand-dark btn-gold transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-brand-dark" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      I read every message personally
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
