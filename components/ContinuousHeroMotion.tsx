"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

/* ─────────────────────────────────────────────────────────
   EXECUTIVE AMBIENT HERO MOTION (LUXURY CHAMPAGNE GOLD)
   Tailored for premium executive aesthetics in both Light & Dark themes.
───────────────────────────────────────────────────────── */

export interface HeroAmbientMotionProps {
  variant?: string;
  className?: string;
}

export function HeroAmbientMotion({
  className = "",
}: HeroAmbientMotionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* 1. Champagne Aurora Ambient Flow */}
      <AuroraGradientFlow />

      {/* 2. Delicate Executive Fluid Wave Lines */}
      <SubtleFluidWave />

      {/* 3. Traveling Champagne Gold Nodes */}
      <PathMovingDots />

      {/* 4. Drifting Luminous Micro-Orbs */}
      <DriftingLuminousDots />

      {/* 5. Horizon Light Beam */}
      <HorizonLightBeam />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   1. Aurora Ambient Flow (Silky Champagne Pearl Glow)
───────────────────────────────────────────────────────── */
function AuroraGradientFlow() {
  return (
    <motion.div
      animate={{
        opacity: [0.25, 0.45, 0.3, 0.25],
        scale: [1, 1.12, 0.96, 1],
        x: ["-5%", "5%", "-4%", "-5%"],
        y: ["-3%", "4%", "5%", "-3%"],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -inset-[20%] pointer-events-none transform-gpu blur-3xl"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(229, 193, 88, 0.22), rgba(197, 160, 89, 0.08) 60%, transparent 75%)",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────
   2. Delicate Executive Fluid Wave Lines
───────────────────────────────────────────────────────── */
function SubtleFluidWave() {
  return (
    <svg
      className="absolute w-full h-full inset-0 pointer-events-none opacity-50"
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="luxuryWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
          <stop offset="35%" stopColor="#E5C158" stopOpacity="0.6" />
          <stop offset="65%" stopColor="#C5A059" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E5C158" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M -100 240 Q 300 160 600 240 T 1300 240"
        stroke="url(#luxuryWaveGrad)"
        strokeWidth="1.1"
      />
      <path
        d="M -100 380 Q 350 460 700 380 T 1300 380"
        stroke="url(#luxuryWaveGrad)"
        strokeWidth="0.9"
        strokeDasharray="4 8"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   3. Path-Moving Traveling Champagne Nodes
───────────────────────────────────────────────────────── */
function PathMovingDots() {
  return (
    <svg
      className="absolute w-full h-full inset-0 pointer-events-none z-10 opacity-75"
      viewBox="0 0 1200 600"
      fill="none"
    >
      <defs>
        <filter id="champagneGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Traveling Node 1 along Top Curve */}
      <motion.circle
        r="3.5"
        fill="#E5C158"
        filter="url(#champagneGlow)"
        animate={{
          cx: [-50, 300, 600, 900, 1250],
          cy: [240, 200, 240, 280, 240],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Pulse Ripple for Traveling Node 1 */}
      <motion.circle
        r="10"
        stroke="#C5A059"
        strokeWidth="0.8"
        fill="none"
        animate={{
          cx: [-50, 300, 600, 900, 1250],
          cy: [240, 200, 240, 280, 240],
          scale: [0.6, 2.2, 0.6],
          opacity: [0.75, 0, 0.75],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Traveling Node 2 along Bottom Curve */}
      <motion.circle
        r="3"
        fill="#C5A059"
        filter="url(#champagneGlow)"
        animate={{
          cx: [1250, 900, 600, 300, -50],
          cy: [380, 420, 380, 340, 380],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   4. Drifting Luminous Micro-Orbs Across Hero Backdrop
───────────────────────────────────────────────────────── */
function DriftingLuminousDots() {
  const dots = [
    { id: 1, size: 3, x: "14%", y: "30%", dx: [0, 35, -20, 0], dy: [0, -50, 20, 0], duration: 18, delay: 0 },
    { id: 2, size: 2.5, x: "82%", y: "22%", dx: [0, -45, 25, 0], dy: [0, 35, -35, 0], duration: 24, delay: -4 },
    { id: 3, size: 3.5, x: "72%", y: "65%", dx: [0, 25, -40, 0], dy: [0, -40, 25, 0], duration: 20, delay: -8 },
    { id: 4, size: 2.5, x: "28%", y: "74%", dx: [0, -25, 35, 0], dy: [0, 40, -25, 0], duration: 26, delay: -12 },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none opacity-75">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-[#E5C158] shadow-[0_0_10px_rgba(229,193,88,0.6)]"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
          }}
          animate={{
            x: dot.dx,
            y: dot.dy,
            opacity: [0.25, 0.85, 0.35, 0.25],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   5. Horizon Light Beam
───────────────────────────────────────────────────────── */
function HorizonLightBeam() {
  return (
    <div className="absolute left-0 right-0 bottom-12 h-[1px] pointer-events-none opacity-45 overflow-hidden">
      {/* Base Accent Line */}
      <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      {/* Gliding Light Beam */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-0 bottom-0 w-[26vw] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent shadow-[0_0_10px_#C5A059]"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Continuous Image Ambient Zoom Wrapper
───────────────────────────────────────────────────────── */
export function CinematicImageZoom({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={`w-full h-full ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className={`w-full h-full origin-center transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
