"use client";

import React from "react";
import { CORE_PILLARS, EXPERIENCES } from "@/data/content";
import ExpertiseSubpageLayout from "@/components/ExpertiseSubpageLayout";

const pillars = [
  CORE_PILLARS.find((p) => p.id === "edtech-strategy"),
].filter(Boolean) as any[];

const initiatives = [
  EXPERIENCES.find((e) => e.id === "whizzkidz-director"),
  EXPERIENCES.find((e) => e.id === "aiteachu"),
].filter(Boolean) as any[];

export default function EdTechPage() {
  return (
    <ExpertiseSubpageLayout
      subpageId="edtech-learning"
      tagline="Scalable Curricula & Instructional Design"
      title="EdTech & Learning"
      description="Advancing future learning frameworks, STEAM learning, and instructional design for scalable curricula. Developing solutions that empower educators and learners globally."
      pillars={pillars}
      initiatives={initiatives}
      ctaLabel="Build the future of learning."
    />
  );
}
