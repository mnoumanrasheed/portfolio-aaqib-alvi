"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Brain, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const expertiseData = [
  {
    id: "01",
    title: "AI Transformation",
    category: "AI TRANSFORMATION",
    description: "Helping institutions translate emerging AI technologies into strategy, capability and measurable organizational impact.",
    href: "/expertise/ai-transformation",
    icon: Brain,
    // Layout values for asymmetric desktop composition
    x: 0,
    y: -80,
    zIndex: 30,
    accent: "#C9A227", // Gold
    visual: "network",
  },
  {
    id: "02",
    title: "Sustainability",
    category: "SUSTAINABILITY",
    description: "Climate adaptation & SDG-oriented visioning for corporate innovation and long-term futures planning.",
    href: "/expertise/sustainability",
    icon: Leaf,
    x: 80,
    y: 90,
    zIndex: 20,
    accent: "#8FBC8F", // Muted green
    visual: "ecosystem",
  },
  {
    id: "03",
    title: "EdTech & Learning",
    category: "EDTECH & LEARNING",
    description: "Future learning frameworks, STEAM learning, and instructional design for scalable curricula.",
    href: "/expertise/edtech-learning",
    icon: GraduationCap,
    x: -80,
    y: 60,
    zIndex: 10,
    accent: "#6B9BD1", // Muted blue
    visual: "nodes",
  }
];

export default function ExecutiveHeroRight() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  
  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full h-full min-h-[600px] flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ambient background behind cards */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          x: reducedMotion ? 0 : smoothX,
          y: reducedMotion ? 0 : smoothY,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.03)_0%,transparent_60%)]" />
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #C9A227 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)"
          }}
        />
      </motion.div>

      {/* Container for the cards */}
      <div className="relative w-full max-w-[500px] h-full hidden lg:flex items-center justify-center">
        {expertiseData.map((card, index) => {
          const isHovered = hoveredCard === card.id;
          const isOtherHovered = hoveredCard !== null && !isHovered;
          
          return (
            <motion.div
              key={card.id}
              className="absolute w-[340px]"
              initial={{ opacity: 0, y: card.y + 30, x: card.x, scale: 0.96 }}
              animate={{ opacity: 1, y: card.y, x: card.x, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              style={{ zIndex: isHovered ? 50 : card.zIndex }}
            >
              <motion.div
                animate={{
                  opacity: isOtherHovered ? 0.65 : 1,
                  scale: isHovered ? 1.025 : isOtherHovered ? 0.97 : 1,
                  y: isHovered ? -8 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Idle subtle vertical movement wrapper */}
                <motion.div
                  animate={{
                    y: reducedMotion || isHovered ? 0 : [0, -4, 0]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <ExpertiseCard card={card} isHovered={isHovered} />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet Fallback Stack */}
      <div className="flex flex-col gap-6 w-full lg:hidden relative z-20">
        {expertiseData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
             <ExpertiseCard card={card} isHovered={false} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExpertiseCard({ card, isHovered }: { card: any, isHovered: boolean }) {
  const Icon = card.icon;
  return (
    <Link 
      href={card.href}
      className="group relative block w-full rounded-[24px] bg-white/90 dark:bg-[#0A0D14]/90 p-7 sm:p-8 cursor-pointer overflow-hidden border transition-all duration-500"
      style={{
        borderColor: isHovered ? "rgba(201,162,39,0.3)" : "rgba(255,255,255,0.08)",
        boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,162,39,0.2)" : "0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Surface Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url(data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E)",
        }}
      />
      
      {/* Hover Illumination */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 80% 20%, ${card.accent}15 0%, transparent 60%)`
        }}
      />

      {/* Custom visual per card */}
      <CardVisual type={card.visual} isHovered={isHovered} accent={card.accent} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono font-medium tracking-[0.2em] text-[#C9A227]/70">
            {card.id}
          </span>
          <div className="p-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md">
            <Icon size={18} className="text-gray-900/70 dark:text-white/70" />
          </div>
        </div>

        {/* Content */}
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: card.accent }}>
            {card.category}
          </h4>
          <h3 className="text-xl sm:text-2xl font-display text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-[#C9A227] transition-colors duration-300">
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-8 line-clamp-2 sm:line-clamp-3">
            {card.description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center gap-3 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white group-hover:text-[#C9A227] transition-colors duration-300">
            Explore Expertise
          </span>
          <ArrowRight className="w-4 h-4 text-gray-500 dark:text-white/50 group-hover:text-[#C9A227] group-hover:translate-x-1.5 transition-all duration-300" />
          <div className="h-[1px] flex-grow bg-gray-200/10 dark:bg-white/10 group-hover:bg-[#C9A227]/30 transition-colors duration-300 relative overflow-hidden">
             <div className="absolute inset-0 bg-[#C9A227] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function CardVisual({ type, isHovered, accent }: { type: string, isHovered: boolean, accent: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
      {type === "network" && (
        <motion.div 
          className="absolute right-0 top-0 w-32 h-32"
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <div className="absolute top-20 right-5 w-1 h-1 rounded-full bg-white/30" />
          <div className="absolute top-15 right-20 w-1.5 h-1.5 rounded-full bg-white/40" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <line x1="60" y1="40" x2="80" y2="20" stroke={accent} strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="60" y1="40" x2="40" y2="60" stroke={accent} strokeWidth="0.5" strokeOpacity="0.5" />
          </svg>
        </motion.div>
      )}
      {type === "ecosystem" && (
        <motion.div 
          className="absolute right-[-20%] top-[-20%] w-48 h-48 rounded-full border-[0.5px]"
          style={{ borderColor: accent }}
          animate={{ scale: isHovered ? 1.05 : 1, opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
          <div className="absolute inset-4 rounded-full border-[0.5px] border-white/20" />
          <div className="absolute inset-8 rounded-full border-[0.5px] border-white/10" />
        </motion.div>
      )}
      {type === "nodes" && (
        <div className="absolute right-0 top-0 w-full h-full">
           <motion.div 
            className="absolute right-4 top-10 w-24 h-24 border border-white/10"
            style={{ 
              background: `linear-gradient(45deg, transparent 48%, ${accent} 49%, ${accent} 51%, transparent 52%)`,
              backgroundSize: "10px 10px"
            }}
            animate={{ backgroundPosition: isHovered ? ["0px 0px", "10px 10px"] : "0px 0px" }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
           />
        </div>
      )}
    </div>
  );
}
