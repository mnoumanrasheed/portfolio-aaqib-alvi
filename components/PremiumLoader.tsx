"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INITIAL_LOAD_MS = 1200;

export default function PremiumLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter for loader
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / (INITIAL_LOAD_MS - 200)) * 100), 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
      }
    }, 20);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, INITIAL_LOAD_MS);

    return () => {
      clearInterval(interval);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="premium-executive-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#05070D] [html[data-theme='light']_&]:bg-[#FAF9F6] select-none pointer-events-auto"
        >
          {/* ── 1. Luxury Champagne Ambient Glow ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.35, 0.65, 0.4],
              scale: [0.95, 1.15, 1],
            }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          >
            <div className="h-[55vh] w-[55vh] rounded-full bg-gradient-to-tr from-[#C9A227]/20 via-[#E5C158]/15 to-transparent blur-[110px] [html[data-theme='light']_&]:from-[#C9A227]/25 [html[data-theme='light']_&]:via-[#E5C158]/20" />
          </motion.div>

          {/* ── 2. Rotating Geometric Orbit Ring ── */}
          <div className="pointer-events-none absolute z-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="h-64 w-64 rounded-full border border-[#C9A227]/20 border-dashed [html[data-theme='light']_&]:border-[#C9A227]/35"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute h-80 w-80 rounded-full border border-[#E5C158]/10 [html[data-theme='light']_&]:border-[#C9A227]/20"
            />
          </div>

          {/* ── 3. Central Executive Loader Content ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.08,
                },
              },
            }}
            className="relative z-10 flex w-[min(85vw,400px)] flex-col items-center"
          >
            {/* Logo Emblem with Pulse Ring */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 15 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="relative flex items-center justify-center"
            >
              {/* Radiating Halo Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.45],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute h-20 w-20 rounded-full border border-[#C9A227]/60"
              />

              <div className="relative rounded-full p-1.5 bg-gradient-to-b from-[#C9A227]/40 via-[#C9A227]/10 to-transparent shadow-[0_0_40px_rgba(201,162,39,0.3)]">
                <Image
                  src="/logo.png"
                  alt="Aaqib Alvi Executive Emblem"
                  width={80}
                  height={80}
                  priority
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-[#C9A227]/50"
                />
              </div>
            </motion.div>

            {/* Editorial Executive Typography */}
            <div className="mt-8 text-center">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-[#C9A227]"
              >
                Global Executive Platform
              </motion.p>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mt-2.5 font-display text-3xl sm:text-5xl font-normal leading-none tracking-tight text-white [html[data-theme='light']_&]:text-[#1A1A1A]"
              >
                Aaqib Alvi
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                className="mt-3.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-slate-400 [html[data-theme='light']_&]:text-slate-600"
              >
                AI Readiness &bull; Innovation &bull; Impact
              </motion.p>
            </div>

            {/* Ultra-Sleek Progress Track & Counter */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="mt-10 flex flex-col items-center w-full max-w-[220px]"
            >
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-slate-800 [html[data-theme='light']_&]:bg-slate-200">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#C9A227] via-[#FCD34D] to-[#C9A227] shadow-[0_0_12px_#C9A227]"
                />
              </div>

              {/* Minimalist Percentage Counter */}
              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest text-[#C9A227] tabular-nums font-semibold">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
