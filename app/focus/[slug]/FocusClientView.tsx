"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { FocusAreaItem } from "@/data/focusAreas";

interface FocusClientViewProps {
  item: FocusAreaItem;
}

export default function FocusClientView({ item }: FocusClientViewProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center py-16 px-5 sm:px-8">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, var(--gold-soft) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-3xl mx-auto">
        <motion.article
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-8 sm:p-12 lg:p-14 shadow-[var(--card-shadow)]"
        >
          {/* Eyebrow and index row */}
          <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
                {item.category}
              </span>
            </div>
            <span className="font-mono text-sm font-medium tracking-wider text-muted tabular-nums">
              {item.index}
            </span>
          </div>

          {/* Large display title */}
          <h1 className="mt-8 font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.14] text-[var(--text-primary)]">
            {item.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[var(--text-secondary)]">
            {item.description}
          </p>

          {/* Subtle decorative line */}
          <div
            aria-hidden="true"
            className="my-10 h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--border-strong) 25%, var(--gold-soft) 50%, var(--border-strong) 75%, transparent)",
            }}
          />

          {/* Back action */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Executive Overview</span>
            </Link>

            <span className="text-xs uppercase tracking-wider text-muted font-mono hidden sm:inline-block">
              Internal Focus View
            </span>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
