/**
 * HeroAnimations.tsx
 *
 * Reusable Framer Motion variants and components for the cinematic hero
 * sections across all main navbar pages (About, Expertise, Impact, Contact).
 *
 * Design philosophy: premium, executive, cinematic — never bouncy or flashy.
 * All animations respect prefers-reduced-motion.
 */

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import React from "react";

/* ─────────────────────────────────────────────────────────
   Shared easing curve — premium decelerate
───────────────────────────────────────────────────────── */
export const premiumEase = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────
   Staggered container: orchestrates child stagger
───────────────────────────────────────────────────────── */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroContainerVariantsReduced: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
};

/* ─────────────────────────────────────────────────────────
   Individual element variants
───────────────────────────────────────────────────────── */

/** Eyebrow / small label — quick, subtle */
export const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: premiumEase },
  },
};

/** Main heading — clip-path reveal + fade + gentle upward drift */
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.0, ease: premiumEase },
  },
};

/** Description paragraph — fades up after heading */
export const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: premiumEase },
  },
};

/** Secondary elements (stats, buttons, CTA row) */
export const secondaryVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: premiumEase },
  },
};

/** Reduced-motion fallback — instant opacity, no movement */
export const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

/* ─────────────────────────────────────────────────────────
   HeroMotionContainer
   Wraps hero content — handles stagger orchestration and
   reduced-motion gracefully.
───────────────────────────────────────────────────────── */
interface HeroMotionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroMotionContainer({ children, className = "" }: HeroMotionContainerProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reduced ? heroContainerVariantsReduced : heroContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroEyebrow
───────────────────────────────────────────────────────── */
interface HeroEyebrowProps {
  children: React.ReactNode;
  className?: string;
}
export function HeroEyebrow({ children, className = "" }: HeroEyebrowProps) {
  const reduced = useReducedMotion();
  return (
    <motion.p
      variants={reduced ? reducedVariants : eyebrowVariants}
      className={className}
    >
      {children}
    </motion.p>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroHeading
───────────────────────────────────────────────────────── */
interface HeroHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  id?: string;
}
export function HeroHeading({ children, as: Tag = "h1", className = "", id }: HeroHeadingProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={reduced ? reducedVariants : headingVariants}
      style={{ overflow: "hidden" }}
    >
      <Tag id={id} className={className}>
        {children}
      </Tag>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroDescription
───────────────────────────────────────────────────────── */
interface HeroDescriptionProps {
  children: React.ReactNode;
  className?: string;
}
export function HeroDescription({ children, className = "" }: HeroDescriptionProps) {
  const reduced = useReducedMotion();
  return (
    <motion.p
      variants={reduced ? reducedVariants : descriptionVariants}
      className={className}
    >
      {children}
    </motion.p>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroSecondary  — stats row, buttons, dl, etc.
───────────────────────────────────────────────────────── */
interface HeroSecondaryProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}
export function HeroSecondary({ children, className = "", as: Tag = "div" }: HeroSecondaryProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;
  return (
    <MotionTag
      variants={reduced ? reducedVariants : secondaryVariants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroAmbientGlow
   A very slow, barely-visible moving light sweep that
   adds depth without distraction.
───────────────────────────────────────────────────────── */
export function HeroAmbientGlow() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
      initial={{ opacity: 0 }}
      animate={reduced ? { opacity: 0.08 } : { opacity: [0.04, 0.12, 0.04], x: ["-4%", "4%", "-4%"] }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 18, ease: "easeInOut", repeat: Infinity }
      }
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 40% 60%, rgba(201,162,39,0.14) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}
