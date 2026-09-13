"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Leaf, GraduationCap, Sparkles, Zap, Network } from "lucide-react";

interface ExpertiseNode {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  angle: number;
  radius: number;
  color: string;
  expandedContent: string[];
}

export default function AIEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { stiffness: 50, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Parallax transforms
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    
    const xPct = (mouseXPos - centerX) / centerX;
    const yPct = (mouseYPos - centerY) / centerY;
    
    mouseX.set(xPct * 0.5);
    mouseY.set(yPct * 0.5);
    
    setMousePosition({ x: mouseXPos, y: mouseYPos });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const expertiseNodes: ExpertiseNode[] = [
    {
      id: "ai",
      number: "01",
      title: "AI & Digital Transformation",
      icon: Brain,
      angle: -90, // top
      radius: 180,
      color: "#C9A227",
      expandedContent: ["AI Strategy", "Digital Transformation", "Institutional Innovation"],
    },
    {
      id: "sustainability",
      number: "02",
      title: "Sustainability & Climate Adaptation",
      icon: Leaf,
      angle: 150, // bottom left
      radius: 180,
      color: "#8FBC8F",
      expandedContent: ["SDG Visioning", "Climate Tech", "Corporate Innovation"],
    },
    {
      id: "edtech",
      number: "03",
      title: "EdTech & Future Learning",
      icon: GraduationCap,
      angle: 30, // bottom right
      radius: 180,
      color: "#6B9BD1",
      expandedContent: ["STEAM Learning", "Instructional Design", "Scalable Curricula"],
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[600px] aspect-square"
      >
        {/* ═══════════════════════════════════════════
            CENTRAL AI CORE
        ═══════════════════════════════════════════ */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main core orb */}
          <motion.div
            className="relative w-32 h-32 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(201,162,39,0.4) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Core sphere */}
            <div
              className="absolute inset-2 rounded-full border border-[#C9A227]/30 backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(201,162,39,0.2) 0%, rgba(16,21,34,0.9) 50%, rgba(10,14,25,0.95) 100%)",
                boxShadow: "0 0 60px rgba(201,162,39,0.4), inset 0 0 40px rgba(201,162,39,0.1)",
              }}
            >
              {/* Inner energy pulse */}
              <motion.div
                className="absolute inset-3 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
                }}
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Sparkles className="w-10 h-10 text-[#C9A227]" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* Rotating orbital ring */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="url(#coreGradient)"
                strokeWidth="1"
                strokeDasharray="8 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A227" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#C9A227" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#C9A227" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating particles around core */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-[#C9A227] blur-[0.5px]"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos((i * 60 * Math.PI) / 180) * 60, 0],
                  y: [0, Math.sin((i * 60 * Math.PI) / 180) * 60, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            ORBITING EXPERTISE NODES
        ═══════════════════════════════════════════ */}
        {expertiseNodes.map((node, index) => {
          const Icon = node.icon;
          const isHovered = hoveredNode === node.id;
          
          // Calculate position based on angle and radius
          const x = Math.cos((node.angle * Math.PI) / 180) * node.radius;
          const y = Math.sin((node.angle * Math.PI) / 180) * node.radius;

          return (
            <React.Fragment key={node.id}>
              {/* Connection line from core to node */}
              <motion.div
                className="absolute top-1/2 left-1/2 origin-center pointer-events-none"
                style={{
                  width: `${node.radius}px`,
                  height: "2px",
                  transform: `rotate(${node.angle}deg)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 + index * 0.2, ease: "easeOut" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, rgba(201,162,39,0.4) 0%, rgba(201,162,39,0.1) 50%, ${node.color}40 100%)`,
                  }}
                />
                
                {/* Traveling light particle along line */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full blur-sm"
                  style={{
                    background: node.color,
                    boxShadow: `0 0 10px ${node.color}`,
                  }}
                  animate={{
                    left: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 1,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Expertise node */}
              <motion.div
                className="absolute top-1/2 left-1/2"
                style={{
                  x: x - 90, // offset for node width
                  y: y - 90, // offset for node height
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ z: 50 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <motion.button
                    onHoverStart={() => setHoveredNode(node.id)}
                    onHoverEnd={() => setHoveredNode(null)}
                    className="relative w-44 bg-gradient-to-br from-[rgba(16,21,34,0.95)] to-[rgba(10,14,25,0.9)] rounded-2xl border backdrop-blur-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070D] transition-all duration-500"
                    style={{
                      borderColor: isHovered ? `${node.color}80` : `${node.color}20`,
                      boxShadow: isHovered 
                        ? `0 20px 60px -10px ${node.color}40, inset 0 1px 0 rgba(255,255,255,0.05)`
                        : `0 10px 30px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)`,
                    }}
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${node.color}15, transparent 40%)`,
                      }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Top accent line */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-px origin-left"
                      style={{
                        background: `linear-gradient(90deg, ${node.color} 0%, transparent 100%)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Content */}
                    <div className="relative p-5">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        {/* Number badge */}
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center border backdrop-blur-sm transition-all duration-300"
                          style={{
                            background: `${node.color}10`,
                            borderColor: `${node.color}30`,
                          }}
                        >
                          <span
                            className="text-xs font-bold font-mono tabular-nums"
                            style={{ color: node.color }}
                          >
                            {node.number}
                          </span>
                        </div>

                        {/* Icon */}
                        <motion.div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-sm transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${node.color}15 0%, ${node.color}05 100%)`,
                            borderColor: `${node.color}25`,
                          }}
                          animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon
                            className="w-5 h-5 transition-transform duration-300"
                            style={{ color: node.color }}
                            strokeWidth={1.5}
                          />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <motion.h3
                        className="text-sm font-medium text-white mb-2 transition-colors duration-300"
                        style={{
                          color: isHovered ? node.color : "#ffffff",
                        }}
                      >
                        {node.title}
                      </motion.h3>

                      {/* Expanded content */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isHovered ? "auto" : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1.5 pt-2 border-t mt-3" style={{ borderColor: `${node.color}20` }}>
                          {node.expandedContent.map((item, i) => (
                            <motion.div
                              key={item}
                              initial={{ x: -10, opacity: 0 }}
                              animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              className="flex items-center gap-2 text-xs text-gray-400"
                            >
                              <div
                                className="w-1 h-1 rounded-full"
                                style={{ background: node.color }}
                              />
                              <span>{item}</span>
                            </motion.div>
                          ))}
                          
                          {/* Explore link */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="pt-2 mt-2 border-t flex items-center gap-1 text-xs font-medium"
                            style={{ borderColor: `${node.color}20`, color: node.color }}
                          >
                            <span>Explore Expertise</span>
                            <motion.div
                              animate={isHovered ? { x: 2 } : { x: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              →
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Glow effect beneath */}
                    <motion.div
                      className="absolute -inset-px rounded-2xl -z-10 blur-xl"
                      style={{
                        background: `radial-gradient(circle, ${node.color}40 0%, transparent 70%)`,
                      }}
                      animate={{
                        opacity: isHovered ? 0.6 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </React.Fragment>
          );
        })}

        {/* ═══════════════════════════════════════════
            AMBIENT BACKGROUND ELEMENTS
        ═══════════════════════════════════════════ */}
        
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
          }}
        />

        {/* Floating ambient orbs */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(107,155,209,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[15%] left-[8%] w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(143,188,143,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
