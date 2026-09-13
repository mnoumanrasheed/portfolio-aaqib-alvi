"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Home, ArrowLeft } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Leadership & Expertise", href: "/expertise" },
  { label: "Impact & Ventures", href: "/ventures" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Radial gold glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#C9A227]/10 via-[#E5C158]/5 to-transparent blur-[100px]" />
        {/* Subtle grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025] [html[data-theme='light']_&]:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="nf-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nf-grid)" />
        </svg>
        {/* Animated orbit ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full border border-dashed border-[#C9A227]/10 [html[data-theme='light']_&]:border-[#C9A227]/20"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] rounded-full border border-[#C9A227]/05 [html[data-theme='light']_&]:border-[#C9A227]/10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#C9A227]"
        >
          Error 404
        </motion.p>

        {/* Large decorative number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-[clamp(5rem,18vw,11rem)] leading-none font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#C9A227]/30 to-[#C9A227]/05 [html[data-theme='light']_&]:from-[#C9A227]/25 [html[data-theme='light']_&]:to-[#C9A227]/05 select-none"
          aria-hidden="true"
        >
          404
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-4 font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-normal tracking-tight text-[var(--text-primary)]"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-md text-sm leading-7 text-[var(--text-secondary)]"
        >
          The page you are looking for doesn&apos;t exist or may have moved.
          Navigate to one of the sections below to continue.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-2 rounded-sm btn-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => history.back()}
            className="group inline-flex min-h-11 items-center gap-2 rounded-sm border border-[var(--border)] px-5 py-3 text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] hover:border-gold hover:text-gold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Navigation links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56, ease: "easeOut" }}
          className="mt-12 border-t border-[var(--border)] pt-8"
        >
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Navigate to
          </p>
          <nav aria-label="404 page navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                <span className="border-b border-transparent group-hover:border-gold transition-colors duration-300">
                  {link.label}
                </span>
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
}
