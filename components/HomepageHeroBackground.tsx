"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function HomepageHeroBackground() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle Parallax Layers for Background Depth
  const backX = useSpring(mouseX, { stiffness: 15, damping: 30 });
  const backY = useSpring(mouseY, { stiffness: 15, damping: 30 });

  const midX = useSpring(mouseX, { stiffness: 25, damping: 35 });
  const midY = useSpring(mouseY, { stiffness: 25, damping: 35 });

  useEffect(() => {
    if (reducedMotion) return;
    let rafId: number;
    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        mouseX.set(((e.clientX / innerWidth) - 0.5) * 16);
        mouseY.set(((e.clientY / innerHeight) - 0.5) * 12);
      });
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 70% 45%, rgba(201,162,39,0.18) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 transform-gpu">
      {/* ── 1. Drifting Soft Radial Gold Glow (Right-side focused) ── */}
      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.3, 0.25],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[10%] top-[10%] w-[65vw] h-[65vh] blur-3xl pointer-events-none transform-gpu"
        style={{
          x: backX,
          y: backY,
          background:
            "radial-gradient(ellipse 65% 55% at 65% 45%, rgba(201,162,39,0.25), rgba(229,193,88,0.1) 60%, transparent 80%)",
        }}
      />

      {/* ── 2. Subtle Dotted Grid Texture (Center/Right masked) ── */}
      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          x: backX,
          y: backY,
          backgroundImage:
            "radial-gradient(circle, rgba(201,162,39,0.45) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 72% 48%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 72% 48%, black 0%, transparent 75%)",
        }}
      />

      {/* ── 3. SVG Orbital Arcs & Faint Network Lines (High visibility in Light & Dark Mode) ── */}
      <motion.svg
        style={{ x: midX, y: midY }}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-65 [html[data-theme='light']_&]:opacity-85 transform-gpu"
        viewBox="0 0 1400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="homeOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E5C158" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0.15" />
          </linearGradient>

          <filter id="homeNodeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Large Orbital Arc behind Cards (Center-Right Focus) */}
        <ellipse
          cx="980"
          cy="400"
          rx="440"
          ry="260"
          stroke="url(#homeOrbitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />

        {/* Inner Tilted Orbital Arc */}
        <ellipse
          cx="980"
          cy="400"
          rx="320"
          ry="170"
          stroke="url(#homeOrbitGrad)"
          strokeWidth="1.4"
        />

        {/* Constellation Network Lines linking key card positions */}
        <path
          d="M 680 260 L 920 180 L 1180 320 L 980 560 L 740 440 Z"
          stroke="rgba(201,162,39,0.3)"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
        <line x1="920" y1="180" x2="980" y2="560" stroke="rgba(201,162,39,0.25)" strokeWidth="1" />

        {/* Fixed Network Constellation Nodes */}
        <circle cx="680" cy="260" r="3.5" fill="#C9A227" />
        <circle cx="920" cy="180" r="4.5" fill="#E5C158" filter="url(#homeNodeGlow)" />
        <circle cx="1180" cy="320" r="3.5" fill="#C9A227" />
        <circle cx="980" cy="560" r="4.5" fill="#E5C158" filter="url(#homeNodeGlow)" />
        <circle cx="740" cy="440" r="3.5" fill="#C9A227" />

        {/* ── 4. Tiny Gold Nodes Slowly Moving Along Paths ── */}

        {/* Node 1: Traveling along Outer Arc */}
        <motion.circle
          r="4"
          fill="#E5C158"
          filter="url(#homeNodeGlow)"
          animate={{
            cx: [980 + 440, 980, 980 - 440, 980, 980 + 440],
            cy: [400, 400 + 260, 400, 400 - 260, 400],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Node 2: Traveling along Inner Arc */}
        <motion.circle
          r="3.5"
          fill="#C9A227"
          filter="url(#homeNodeGlow)"
          animate={{
            cx: [980 - 320, 980, 980 + 320, 980, 980 - 320],
            cy: [400, 400 - 170, 400, 400 + 170, 400],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Node 3: Traveling along Constellation Line */}
        <motion.circle
          r="4"
          fill="#FCD34D"
          filter="url(#homeNodeGlow)"
          animate={{
            cx: [680, 920, 1180, 980, 740, 680],
            cy: [260, 180, 320, 560, 440, 260],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Node 4: Soft Pulse Ripple Node */}
        <motion.circle
          cx="920"
          cy="180"
          r="4.5"
          stroke="#E5C158"
          strokeWidth="1.2"
          fill="none"
          animate={{
            r: [4.5, 20, 32],
            opacity: [0.85, 0.2, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.svg>

      {/* ── 5. Faint Animated Light Streak ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-35 [html[data-theme='light']_&]:opacity-50">
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute w-[30vw] h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent rotate-45 transform-gpu"
        />
      </div>
    </div>
  );
}
