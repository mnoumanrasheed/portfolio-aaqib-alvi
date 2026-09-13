"use client";

import React from "react";
import { CORE_PILLARS, EXPERIENCES } from "@/data/content";
import ExpertiseSubpageLayout from "@/components/ExpertiseSubpageLayout";

const pillars = [
  CORE_PILLARS.find((p) => p.id === "climate-adaptation"),
  CORE_PILLARS.find((p) => p.id === "futures-thinking"),
].filter(Boolean) as any[];

const initiatives = [
  EXPERIENCES.find((e) => e.id === "wupa"),
  EXPERIENCES.find((e) => e.id === "astar"),
].filter(Boolean) as any[];

export default function SustainabilityPage() {
  return (
    <ExpertiseSubpageLayout
      subpageId="sustainability"
      tagline="Climate Adaptation & SDG Visioning"
      title="Sustainability"
      description="Supporting sustainability and climate adaptation through SDG-oriented visioning, corporate innovation, and long-term futures planning."
      pillars={pillars}
      initiatives={initiatives}
      ctaLabel="Align innovation with planetary impact."
    />
  );
}
