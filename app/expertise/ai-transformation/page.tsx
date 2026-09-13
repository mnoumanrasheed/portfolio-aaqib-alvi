"use client";

import React from "react";
import { CORE_PILLARS, EXPERIENCES } from "@/data/content";
import ExpertiseSubpageLayout from "@/components/ExpertiseSubpageLayout";

const pillars = [
  CORE_PILLARS.find((p) => p.id === "global-ai"),
  CORE_PILLARS.find((p) => p.id === "genai-implementation"),
  CORE_PILLARS.find((p) => p.id === "digital-trust"),
].filter(Boolean) as any[];

const initiatives = [
  EXPERIENCES.find((e) => e.id === "sll-usa-gm"),
  EXPERIENCES.find((e) => e.id === "sll-country-manager"),
].filter(Boolean) as any[];

export default function AITransformationPage() {
  return (
    <ExpertiseSubpageLayout
      subpageId="ai-transformation"
      tagline="Global AI Readiness & Implementation"
      title="AI Transformation"
      description="Helping institutions translate emerging AI technologies into strategy, capability, and measurable organizational impact. From national-level skilling to enterprise deployment."
      pillars={pillars}
      initiatives={initiatives}
      ctaLabel="Drive institutional impact through AI."
    />
  );
}
