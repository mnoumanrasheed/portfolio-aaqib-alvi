"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  sub: string;
  delay?: number;
}

export default function ExecutiveStatBadge({ value, label, sub, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative p-6 rounded-2xl glass-card hover:border-brand-gold/40 transition-all duration-300 overflow-hidden"
    >
      {/* Corner glow */}
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-2 group-hover:text-gradient-gold transition-all duration-300">
          {value}
        </div>
        <div className="text-sm font-semibold tracking-wide text-ink mb-1">
          {label}
        </div>
        <div className="text-xs text-muted tracking-wider">
          {sub}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent/25 group-hover:bg-gold/45 transition-all duration-500" />
    </motion.div>
  );
}
