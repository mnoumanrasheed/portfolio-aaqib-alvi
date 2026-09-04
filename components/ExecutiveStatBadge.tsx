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
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-all duration-500" />

      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 group-hover:text-gradient-gold transition-all duration-300">
          {value}
        </div>
        <div className="text-sm font-semibold tracking-wide text-slate-200 mb-1">
          {label}
        </div>
        <div className="text-xs text-slate-300 tracking-wider">
          {sub}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent group-hover:via-brand-gold transition-all duration-500" />
    </motion.div>
  );
}
