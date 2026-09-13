"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Leaf, GraduationCap } from "lucide-react";

interface HolographicPanelsProps {
  mouseX: number;
  mouseY: number;
}

const panelsData = [
  {
    id: "01",
    title: "AI Transformation",
    description: "Enterprise & institutional AI readiness.",
    keywords: ["AI Strategy", "Digital Adoption", "Innovation"],
    icon: Brain,
    color: "#C9A227",
    // Position (top leftish)
    x: -160,
    y: -120,
    parallaxDepth: 0.8,
  },
  {
    id: "02",
    title: "Sustainability",
    description: "Climate adaptation & SDG visioning.",
    keywords: ["SDG Visioning", "Climate Tech", "Corporate Innovation"],
    icon: Leaf,
    color: "#8FBC8F",
    // Position (bottom rightish)
    x: 140,
    y: 100,
    parallaxDepth: 1.2,
  },
  {
    id: "03",
    title: "EdTech & Learning",
    description: "Future learning frameworks.",
    keywords: ["STEAM Learning", "Instructional Design", "Scalable Curricula"],
    icon: GraduationCap,
    color: "#6B9BD1",
    // Position (bottom leftish)
    x: -180,
    y: 150,
    parallaxDepth: 0.6,
  }
];

export default function HolographicPanels({ mouseX, mouseY }: HolographicPanelsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
      {panelsData.map((panel, index) => {
        const isHovered = hoveredIndex === index;
        const Icon = panel.icon;
        
        // Parallax calculation
        const px = mouseX * 30 * panel.parallaxDepth;
        const py = mouseY * 30 * panel.parallaxDepth;

        // Floating animation offset
        const floatY = [0, -10, 0];

        return (
          <motion.div
            key={panel.id}
            className="absolute pointer-events-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: panel.x + px,
              y: panel.y + py
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.5 + index * 0.2 },
              scale: { duration: 1, delay: 0.5 + index * 0.2 },
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 }
            }}
            style={{
              zIndex: isHovered ? 50 : 10,
            }}
          >
            <motion.div
              animate={{ y: floatY }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="holographic-panel relative flex flex-col p-4 rounded-xl cursor-pointer"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  width: isHovered ? 260 : 200,
                  backdropFilter: isHovered ? "blur(30px)" : "blur(12px)",
                  backgroundColor: isHovered ? "rgba(16, 21, 34, 0.4)" : "rgba(16, 21, 34, 0.15)",
                  borderColor: isHovered ? panel.color : "rgba(201,162,39,0.15)",
                  boxShadow: isHovered 
                    ? `0 0 40px ${panel.color}33, inset 0 0 20px ${panel.color}11`
                    : "0 10px 30px rgba(0,0,0,0.2)",
                  opacity: hoveredIndex !== null && !isHovered ? 0.4 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Thin Animated Glow Border overlay */}
                <div 
                  className="absolute inset-0 rounded-xl border border-transparent holographic-panel-glow opacity-0 pointer-events-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.4s",
                    borderColor: `${panel.color}66`
                  }}
                />

                {/* Header: Number + Icon + Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-xs font-mono text-gold/70">{panel.id}</div>
                  <motion.div 
                    className="p-1.5 rounded-md border border-white/10"
                    style={{ backgroundColor: `${panel.color}11` }}
                  >
                    <Icon size={14} color={panel.color} />
                  </motion.div>
                </div>
                
                <h3 className="text-sm font-medium text-white mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {panel.title}
                </h3>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-slate-300 mb-3">{panel.description}</p>
                  
                  <div className="flex flex-col gap-1.5">
                    {panel.keywords.map((kw, i) => (
                      <motion.div
                        key={kw}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                        transition={{ delay: isHovered ? i * 0.1 : 0, duration: 0.3 }}
                        className="flex items-center gap-2 text-[11px] text-slate-400"
                      >
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: panel.color }} />
                        {kw}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
