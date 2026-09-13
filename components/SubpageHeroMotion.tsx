"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";
import Link from "next/link";

export type SubpageTheme = "ai-transformation" | "sustainability" | "edtech-learning";

interface SubpageHeroMotionProps {
  theme: SubpageTheme;
  className?: string;
}

export function SubpageHeroMotion({ theme, className = "" }: SubpageHeroMotionProps) {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(mouseX, { stiffness: 25, damping: 30 });
  const parallaxY = useSpring(mouseY, { stiffness: 25, damping: 30 });

  useEffect(() => {
    if (reducedMotion) return;
    const handlePointerMove = (e: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(((e.clientX / innerWidth) - 0.5) * 15);
      mouseY.set(((e.clientY / innerHeight) - 0.5) * 10);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY, reducedMotion]);

  if (reducedMotion) {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,162,39,0.14) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 transform-gpu ${className}`}
    >
      {/* Moving Radial Champagne Gold Glow (Silky Luxury Lighting in Light & Dark Mode) */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.3, 0.25],
          scale: [1, 1.12, 0.95, 1],
          x: ["-4%", "5%", "-3%", "-4%"],
          y: ["-2%", "3%", "5%", "-2%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-[20%] blur-3xl transform-gpu"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 20%, rgba(229, 193, 88, 0.22), rgba(197, 160, 89, 0.08) 60%, transparent 75%)",
        }}
      />

      {/* Theme-Specific Bespoke Animation Layers */}
      {theme === "ai-transformation" && <AINetworkNodesTheme />}
      {theme === "sustainability" && <SustainabilityOrbitTheme />}
      {theme === "edtech-learning" && <EdTechPathwayTheme />}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   1. AI Transformation: Refined Network Nodes & Data Lines
───────────────────────────────────────────────────────── */
function AINetworkNodesTheme() {
  return (
    <svg
      className="absolute w-full h-full inset-0 opacity-55"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="aiNodeGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="aiLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#E5C158" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C5A059" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Faint Animated Grid Background */}
      <motion.path
        d="M 100 0 V 500 M 300 0 V 500 M 500 0 V 500 M 700 0 V 500 M 900 0 V 500 M 0 100 H 1000 M 0 250 H 1000 M 0 400 H 1000"
        stroke="rgba(197, 160, 89, 0.12)"
        strokeWidth="0.8"
        strokeDasharray="4 8"
        animate={{ strokeDashoffset: [0, 24] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Network Data Lines */}
      <line x1="150" y1="120" x2="450" y2="280" stroke="url(#aiLineGrad)" strokeWidth="1.2" />
      <line x1="450" y1="280" x2="850" y2="160" stroke="url(#aiLineGrad)" strokeWidth="1.2" strokeDasharray="4 6" />
      <line x1="450" y1="280" x2="700" y2="420" stroke="url(#aiLineGrad)" strokeWidth="1.2" />

      {/* Network Fixed Junction Nodes */}
      <circle cx="150" cy="120" r="3.5" fill="#E5C158" filter="url(#aiNodeGlow)" />
      <circle cx="450" cy="280" r="4.5" fill="#C5A059" filter="url(#aiNodeGlow)" />
      <circle cx="850" cy="160" r="3" fill="#E5C158" filter="url(#aiNodeGlow)" />
      <circle cx="700" cy="420" r="3.5" fill="#C5A059" filter="url(#aiNodeGlow)" />

      {/* Data Pulse 1 traveling along line 1 */}
      <motion.circle
        r="3.5"
        fill="#E5C158"
        filter="url(#aiNodeGlow)"
        animate={{
          cx: [150, 450, 850],
          cy: [120, 280, 160],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Data Pulse 2 traveling along branch line */}
      <motion.circle
        r="3"
        fill="#C5A059"
        filter="url(#aiNodeGlow)"
        animate={{
          cx: [450, 700],
          cy: [280, 420],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Pulse Ripple around main junction */}
      <motion.circle
        cx="450"
        cy="280"
        r="4.5"
        stroke="#E5C158"
        strokeWidth="1"
        fill="none"
        animate={{
          r: [4.5, 20, 32],
          opacity: [0.75, 0.2, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   2. Sustainability: Refined Orbits & Organic Flowing Lines
───────────────────────────────────────────────────────── */
function SustainabilityOrbitTheme() {
  return (
    <svg
      className="absolute w-full h-full inset-0 opacity-55"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="sustGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="sustArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#E5C158" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C5A059" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Organic Flowing Curves */}
      <motion.path
        d="M -50 350 C 250 150, 550 450, 1050 200"
        stroke="url(#sustArcGrad)"
        strokeWidth="1.2"
        animate={{
          d: [
            "M -50 350 C 250 150, 550 450, 1050 200",
            "M -50 320 C 250 190, 550 410, 1050 230",
            "M -50 350 C 250 150, 550 450, 1050 200",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow Orbital Ellipse */}
      <motion.ellipse
        cx="550"
        cy="250"
        rx="340"
        ry="150"
        stroke="rgba(197, 160, 89, 0.3)"
        strokeWidth="0.9"
        strokeDasharray="4 8"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "550px 250px" }}
      />

      {/* Orbiting Node 1 */}
      <motion.circle
        r="3.5"
        fill="#E5C158"
        filter="url(#sustGlow)"
        animate={{
          cx: [550 + 340, 550, 550 - 340, 550, 550 + 340],
          cy: [250, 250 + 150, 250, 250 - 150, 250],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbiting Node 2 (Counter) */}
      <motion.circle
        r="3"
        fill="#C5A059"
        filter="url(#sustGlow)"
        animate={{
          cx: [550 - 340, 550, 550 + 340, 550, 550 - 340],
          cy: [250, 250 - 150, 250, 250 + 150, 250],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   3. EdTech & Learning: Connected Nodes & Pathway Animation
───────────────────────────────────────────────────────── */
function EdTechPathwayTheme() {
  return (
    <svg
      className="absolute w-full h-full inset-0 opacity-55"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="edGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="edPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.1" />
          <stop offset="40%" stopColor="#E5C158" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#C5A059" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E5C158" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Interconnected Pathway Lines */}
      <path
        d="M 120 380 Q 320 180 520 280 T 920 180"
        stroke="url(#edPathGrad)"
        strokeWidth="1.1"
        strokeDasharray="5 7"
      />
      <line x1="320" y1="230" x2="420" y2="380" stroke="url(#edPathGrad)" strokeWidth="0.9" />
      <line x1="520" y1="280" x2="750" y2="360" stroke="url(#edPathGrad)" strokeWidth="0.9" />

      {/* Connected Learning Nodes */}
      <circle cx="320" cy="230" r="4" fill="#C5A059" filter="url(#edGlow)" />
      <circle cx="520" cy="280" r="4.5" fill="#E5C158" filter="url(#edGlow)" />
      <circle cx="720" cy="205" r="3.5" fill="#C5A059" filter="url(#edGlow)" />
      <circle cx="420" cy="380" r="3" fill="#E5C158" filter="url(#edGlow)" />

      {/* Traveling Learning Signal Node */}
      <motion.circle
        r="3.5"
        fill="#E5C158"
        filter="url(#edGlow)"
        animate={{
          cx: [120, 320, 520, 720, 920],
          cy: [380, 230, 280, 205, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Branch Signal Node */}
      <motion.circle
        r="2.5"
        fill="#C5A059"
        filter="url(#edGlow)"
        animate={{
          cx: [520, 750],
          cy: [280, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Card Animated Border Highlight Component
───────────────────────────────────────────────────────── */
export function FocusAreasCardHighlight({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative group rounded-xl p-[1px] overflow-hidden transform-gpu">
      {/* Animated Soft Gold Glow Border Ring */}
      {!reducedMotion && (
        <motion.div
          aria-hidden="true"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-[100%] pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(229,193,88,0.5) 25%, transparent 50%, rgba(197,160,89,0.4) 75%, transparent 100%)",
          }}
        />
      )}
      <div
        className="relative rounded-xl p-5 z-10 transition-shadow duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CTA Button Moving Gold Accent Component
───────────────────────────────────────────────────────── */
export function AnimatedCTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <Link
      href={href}
      className="relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl py-3 px-5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 btn-gold transform-gpu group shadow-sm hover:shadow-md"
    >
      {/* Subtly Moving Gold Accent Beam */}
      {!reducedMotion && (
        <motion.span
          aria-hidden="true"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 pointer-events-none"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
