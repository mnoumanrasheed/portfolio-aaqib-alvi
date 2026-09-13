"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { focusAreas, type FocusAreaItem } from "@/data/focusAreas";

export default function HeroExpertiseCards() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  const handleExplore = (e: React.MouseEvent, area: FocusAreaItem) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      sessionStorage.setItem("focus-session-authorized", area.slug);
    }
    router.push(area.route);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      {/* Cards stack container with vertical connector spine */}
      <div className="relative grid grid-cols-1 grid-rows-3 gap-2.5 sm:gap-3 lg:gap-[clamp(8px,1.5vh,16px)] pl-6 sm:pl-8 h-full max-h-[520px] lg:max-h-[calc(100svh-9rem)]">
        {/* ── Vertical Connector Spine ─────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-px bg-[var(--border-strong)]"
        >
          {/* Subtle traveling highlight (5-8s duration, calm and non-distracting) */}
          {!reducedMotion && (
            <div
              className="connector-travel-slow absolute left-[-1px] w-[3px] h-20 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, var(--accent) 50%, transparent 100%)",
              }}
            />
          )}
        </div>

        {focusAreas.map((card, index) => {
          const isHovered = activeCard === index;

          return (
            <div
              key={card.slug}
              className="relative flex items-stretch"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Connector Node aligned to each card */}
              <div
                aria-hidden="true"
                className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10"
              >
                <div
                  className={`w-3 h-3 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    isHovered
                      ? "border-[var(--accent)] bg-[var(--page)] shadow-[0_0_8px_var(--gold-soft)]"
                      : "border-[var(--border-strong)] bg-[var(--page)]"
                  }`}
                >
                  <div
                    className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                      isHovered ? "bg-[var(--accent)]" : "bg-[var(--text-muted)]"
                    }`}
                  />
                </div>
              </div>

              {/* Card Container */}
              <div
                onClick={(e) => handleExplore(e, card)}
                className={`group relative flex flex-col justify-between w-full rounded-xl border p-3.5 sm:p-4 lg:p-[clamp(10px,1.6vh,18px)] transition-all duration-300 ease-out cursor-pointer ${
                  isHovered
                    ? "-translate-y-0.5 border-[var(--accent)] bg-[var(--card-hover-bg)] shadow-[var(--card-hover-shadow)]"
                    : "border-[var(--border)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] hover:border-[var(--border-strong)]"
                }`}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleExplore(e as any, card);
                  }
                }}
                aria-label={`Explore focus area: ${card.title}`}
              >
                {/* Header: Category + Index */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {card.category}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider tabular-nums">
                    {card.index}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[clamp(1.15rem,2.1vh,1.45rem)] font-normal leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mt-1 mb-1">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[clamp(0.78rem,1.45vh,0.875rem)] leading-[1.5] text-[var(--text-secondary)] line-clamp-3">
                  {card.description}
                </p>

                {/* Footer Action: Explore focus area */}
                <div className="mt-1.5 pt-1.5 flex items-center justify-between border-t border-[var(--border)]">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-200">
                    <span>Explore focus area</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
