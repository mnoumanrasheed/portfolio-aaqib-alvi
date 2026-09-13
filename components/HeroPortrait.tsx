"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import HeroPortrait3D from "./HeroPortrait3D";

const OVERLAY_CARDS = [
  {
    id: "role",
    position: "top-4 left-4 sm:top-5 sm:left-5",
    content: (
      <>
        <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--accent)] mb-1">
          Current Role
        </p>
        <p className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">
          General Manager
        </p>
        <p className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-tight">
          Sustainable Living Lab USA
        </p>
      </>
    ),
  },
  {
    id: "mentor",
    position: "top-4 right-4 sm:top-5 sm:right-5",
    content: (
      <>
        <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--accent)] mb-1">
          Advisory
        </p>
        <p className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">
          Startup Mentor
        </p>
        <p className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-tight">
          INSEAD AI Venture Lab
        </p>
      </>
    ),
  },
];

export default function HeroPortrait() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* ── Ambient glow behind the portrait ── */}
      <div
        aria-hidden="true"
        className="absolute inset-[5%] rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 40%, rgba(197,160,89,0.13) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* ── Portrait frame ── */}
      <div className="relative w-full max-w-[360px] lg:max-w-none">

        {/* Decorative corner accents */}
        <div
          aria-hidden="true"
          className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[var(--accent)] opacity-60 rounded-tl-xl pointer-events-none z-10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[var(--accent)] opacity-60 rounded-br-xl pointer-events-none z-10"
        />
        <div
          aria-hidden="true"
          className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--border-strong)] opacity-40 rounded-tr-xl pointer-events-none z-10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--border-strong)] opacity-40 rounded-bl-xl pointer-events-none z-10"
        />

        {/* Portrait image */}
        <motion.div
          animate={reducedMotion ? {} : {
            y: [0, -6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[var(--border-strong)]"
          style={{
            boxShadow: "0 32px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(197,160,89,0.08)",
          }}
        >
          <HeroPortrait3D
            imageSrc="/profile.jpeg"
            className="hero-img"
          />
          {/* Subtle inner vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,12,20,0.08) 0%, transparent 30%, transparent 65%, rgba(8,12,20,0.55) 100%)",
            }}
          />
        </motion.div>

        {/* ── Name strip at bottom of image ── */}
        <div
          className="absolute bottom-0 inset-x-0 px-4 pb-4 pt-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(8,12,20,0.82) 0%, rgba(8,12,20,0.5) 55%, transparent 100%)",
          }}
        >
          <p
            className="font-display text-xl leading-tight text-white"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
          >
            Aaqib Alvi
          </p>
          <p className="mt-0.5 text-[11px] uppercase tracking-widest font-medium text-[var(--accent)] opacity-90">
            Singapore · United States
          </p>
        </div>

        {/* ── Overlay glass cards ── */}
        {OVERLAY_CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.55 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute ${card.position} z-20`}
          >
            <div
              className="rounded-lg border border-[var(--border-strong)] px-3 py-2.5 backdrop-blur-md"
              style={{
                background: "rgba(14,19,31,0.82)",
                boxShadow: "0 8px 24px -8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Gold top accent line */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-3 h-px rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(197,160,89,0.7), transparent)",
                }}
              />
              {card.content}
            </div>
          </motion.div>
        ))}
        {/* Theme‑aware hero image brightness */}
        <style>{`
          .hero-img {
            filter: brightness(1.2);
          }
          html[data-theme="dark"] .hero-img {
            filter: brightness(1);
          }
        `}</style>
      </div>
    </div>
  );
}
