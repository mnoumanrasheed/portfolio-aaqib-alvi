"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { MapPin, ShieldCheck, Sparkles } from "lucide-react";

interface AnimatedProfilePortraitProps {
  src?: string;
  alt?: string;
  name?: string;
  subtitle?: string;
  badgeText?: string;
  extraInfo?: string;
  aspectRatio?: string;
  className?: string;
  overlayStyle?: "bottom-card" | "caption" | "none";
  priority?: boolean;
}

export default function AnimatedProfilePortrait({
  src = "/profile.jpeg",
  alt = "Aaqib Alvi Executive Portrait",
  name = "Aaqib Alvi",
  subtitle = "General Manager, SLL USA",
  badgeText = "AI & Digital Leader",
  extraInfo = "Singapore / USA",
  aspectRatio = "aspect-[4/5]",
  className = "",
  overlayStyle = "bottom-card",
  priority = false,
}: AnimatedProfilePortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Mouse Parallax & 3D Tilt Values
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 200, damping: 25 });
  const shineX = useTransform(x, [0, 1], ["0%", "100%"]);
  const shineY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className={`relative group select-none ${className}`}>
      {/* ── 1. Animated Outer Multi-Layer Aura Glow ── */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-300/10 to-amber-600/20 blur-xl pointer-events-none"
        animate={
          reducedMotion
            ? { opacity: 0.3 }
            : {
                opacity: [0.25, 0.55, 0.25],
                scale: [0.98, 1.03, 0.98],
                rotate: [0, 5, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── 2. Floating Ambient Holographic Orbs ── */}
      {!reducedMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-amber-400/80 shadow-[0_0_15px_#C9A227] pointer-events-none z-20"
            animate={{
              y: [0, -8, 0],
              x: [0, 4, 0],
              opacity: [0.6, 1, 0.6],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-2 -left-3 w-3 h-3 rounded-full bg-amber-500/60 shadow-[0_0_12px_#C9A227] pointer-events-none z-20"
            animate={{
              y: [0, 6, 0],
              x: [0, -3, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      {/* ── 3. Main Interactive 3D Frame ── */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`relative ${aspectRatio} w-full overflow-hidden rounded-2xl border border-amber-500/30 dark:border-amber-400/25 bg-slate-950/80 shadow-2xl shadow-amber-950/20`}
      >
        {/* Animated Light-Beam Border (Rotating Conic Gradient) */}
        <motion.div
          aria-hidden="true"
          className="absolute -inset-[150%] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10"
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0 300deg, rgba(201,162,39,0.9) 330deg, rgba(255,223,128,1) 360deg)",
          }}
        />

        {/* Inner Border Mask Container */}
        <div className="absolute inset-[1.5px] rounded-[15px] overflow-hidden bg-slate-900/90 z-10 flex flex-col justify-between">
          
          {/* Subtle Continuous Vertical Light Sweep across Portrait */}
          {!reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-amber-200/15 to-transparent skew-x-12 pointer-events-none z-20"
              animate={{
                x: ["-100%", "350%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Mouse Interactive Dynamic Flare Overlay */}
          {!reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              style={{
                background: `radial-gradient(400px circle at ${shineX} ${shineY}, rgba(255,215,0,0.18), transparent 70%)`,
              }}
            />
          )}

          {/* Profile Image with Gentle Micro-Float Animation */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={
              reducedMotion
                ? {}
                : {
                    scale: [1, 1.025, 1],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Top-Right Live Status Badge */}
          {badgeText && (
            <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-semibold tracking-wider text-amber-300 shadow-lg">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Gradient Shadow vignette at bottom for clear text read */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none z-20"
          />

          {/* Optional Embedded Card Overlay (used in About / Executive section) */}
          {overlayStyle === "bottom-card" && (
            <motion.div
              className="relative z-30 mt-auto p-4 sm:p-5 border-t border-white/10 bg-slate-950/70 backdrop-blur-md"
              initial={{ y: 10, opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Leader</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-normal text-white mt-0.5">
                {name}
              </h3>
              <p className="text-xs text-amber-200/90 font-medium mt-0.5">{subtitle}</p>
              {extraInfo && (
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center gap-3 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {extraInfo}
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Optional External Caption (used on Homepage under image) */}
      {overlayStyle === "caption" && (
        <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-3 text-xs sm:text-sm text-[var(--text-primary)]">
          <span className="font-medium text-[var(--text-primary)] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {name}
          </span>
          <span className="text-[var(--text-muted)]">{extraInfo}</span>
        </figcaption>
      )}
    </div>
  );
}
