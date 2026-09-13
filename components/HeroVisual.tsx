"use client";

import React, { useRef, useState, useEffect } from "react";
import AIIntelligenceCore from "./AIIntelligenceCore";
import HolographicPanels from "./HolographicPanels";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates for parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    // Sync framer motion spring values to react state for children that need it
    const unsubscribeX = smoothX.onChange((v) => setMousePos(prev => ({ ...prev, x: v })));
    const unsubscribeY = smoothY.onChange((v) => setMousePos(prev => ({ ...prev, y: v })));
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize mouse position to range [-1, 1]
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AIIntelligenceCore mouseX={mousePos.x} mouseY={mousePos.y} />
      <HolographicPanels mouseX={mousePos.x} mouseY={mousePos.y} />
    </div>
  );
}
