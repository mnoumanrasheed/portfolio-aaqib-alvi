export interface FocusAreaItem {
  slug: string;
  index: string;
  category: string;
  title: string;
  description: string;
  route: string;
}

export const focusAreas: FocusAreaItem[] = [
  {
    slug: "ai-digital",
    index: "01 / 06",
    category: "AI & DIGITAL",
    title: "Global AI & Digital Readiness",
    description:
      "Managed global AI programs for Intel and launched national-level AI skilling programs for the general public, youth, vocational graduates, and working professionals across 35+ governments.",
    route: "/focus/ai-digital",
  },
  {
    slug: "sustainability",
    index: "02 / 06",
    category: "SUSTAINABILITY",
    title: "Sustainability & Climate Adaptation",
    description:
      "Supporting sustainability and climate adaptation through SDG-oriented visioning, corporate innovation, and digital solution implementation.",
    route: "/focus/sustainability",
  },
  {
    slug: "edtech",
    index: "03 / 06",
    category: "EDTECH & CURRICULA",
    title: "EdTech Strategy & Scaled Curricula",
    description:
      "More than 12 years of education-technology experience across STEAM learning, business development, operations, instructional design, and AI-based learning tools.",
    route: "/focus/edtech",
  },
];
