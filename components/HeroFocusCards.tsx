"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FocusCard {
  index: string;
  category: string;
  title: string;
  description: string;
  href: string;
  slug: string;
}

const FOCUS_CARDS: FocusCard[] = [
  {
    index: "01",
    slug: "ai-digital",
    category: "AI & Digital Transformation",
    title: "Global AI & Digital Readiness",
    description:
      "National-level AI skilling programs with ministries and partners across 35+ governments, reaching 200,000+ people.",
    href: "/expertise/ai-transformation",
  },
  {
    index: "02",
    slug: "sustainability",
    category: "Sustainability & Climate",
    title: "Climate Adaptation & SDG Visioning",
    description:
      "SDG-oriented corporate innovation, sustainability advisory, and digital solution implementation for institutional stakeholders.",
    href: "/expertise/sustainability",
  },
  {
    index: "03",
    slug: "edtech",
    category: "EdTech & Future Learning",
    title: "EdTech Strategy & Scaled Curricula",
    description:
      "12+ years of education-technology experience across STEAM learning, instructional design, and AI-based learning tools.",
    href: "/expertise/edtech-learning",
  },
  {
    index: "04",
    slug: "impact",
    category: "Institutional Impact",
    title: "AI & GenAI Implementation",
    description:
      "Supporting institutional and commercial leaders with AI adoption, GenAI implementation, and large-scale digital transformation.",
    href: "/expertise",
  },
];

export default function HeroFocusCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-2.5 lg:gap-3">
      {FOCUS_CARDS.map((card, i) => {
        const isHovered = hovered === i;

        return (
          <motion.div
            key={card.slug}
            initial={reducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.18 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={card.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              aria-label={`${card.category}: ${card.title}`}
              className={[
                "group relative flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2",
                "lg:px-5 lg:py-4",
                isHovered
                  ? "border-[var(--accent)] -translate-y-px"
                  : "border-[var(--border)] hover:border-[var(--border-strong)]",
              ].join(" ")}
              style={{
                background: isHovered
                  ? "var(--card-hover-bg)"
                  : "var(--card-bg)",
                boxShadow: isHovered
                  ? "var(--card-hover-shadow), inset 0 1px 0 rgba(255,255,255,0.04)"
                  : "var(--card-shadow)",
              }}
            >
              {/* Gold left accent bar — slides in on hover */}
              <div
                aria-hidden="true"
                className={[
                  "absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300",
                  isHovered
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-50",
                ].join(" ")}
                style={{
                  background:
                    "linear-gradient(180deg, transparent, var(--accent), transparent)",
                  transformOrigin: "center",
                }}
              />

              {/* Index number */}
              <span
                className={[
                  "shrink-0 font-mono text-[11px] font-semibold tabular-nums tracking-wider transition-colors duration-300",
                  isHovered ? "text-[var(--accent)]" : "text-[var(--text-muted)]",
                ].join(" ")}
              >
                {card.index}
              </span>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="shrink-0 w-px h-8 bg-[var(--border)] transition-colors duration-300"
                style={{
                  background: isHovered ? "var(--border-strong)" : undefined,
                }}
              />

              {/* Text content */}
              <div className="min-w-0 flex-1">
                <p
                  className={[
                    "text-[10px] uppercase tracking-widest font-semibold mb-0.5 transition-colors duration-300",
                    isHovered ? "text-[var(--accent)]" : "text-[var(--text-muted)]",
                  ].join(" ")}
                >
                  {card.category}
                </p>
                <h3
                  className={[
                    "font-display text-[clamp(0.9rem,1.7vh,1.05rem)] leading-snug transition-colors duration-300",
                    isHovered
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-primary)]",
                  ].join(" ")}
                >
                  {card.title}
                </h3>
                <p
                  className={[
                    "mt-1 text-[11px] leading-[1.5] line-clamp-2 transition-all duration-300",
                    isHovered
                      ? "text-[var(--text-secondary)] max-h-10 opacity-100"
                      : "text-[var(--text-muted)] max-h-0 opacity-0 overflow-hidden",
                  ].join(" ")}
                >
                  {card.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                aria-hidden="true"
                className={[
                  "shrink-0 h-4 w-4 transition-all duration-300",
                  isHovered
                    ? "text-[var(--accent)] translate-x-0.5 -translate-y-0.5"
                    : "text-[var(--text-muted)] translate-x-0 translate-y-0",
                ].join(" ")}
              />
            </Link>
          </motion.div>
        );
      })}

      {/* Bottom: "View all expertise" link */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.62, ease: "easeOut" }}
        className="flex justify-end pt-1"
      >
        <Link
          href="/expertise"
          className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
        >
          <span className="border-b border-transparent group-hover:border-[var(--accent)] transition-colors duration-300">
            View all expertise
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
    </div>
  );
}
