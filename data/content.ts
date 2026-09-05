export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "current" | "past";
  highlight: string;
  description: string[];
  tags: string[];
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  metrics: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string[];
  description?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: "Aaqib Alvi",
  title: "Global AI & Digital Readiness Leader",
  headline: "Driving Global Digital Readiness, AI Implementation & Sustainable Adaptation",
  tagline: "Architecting national-scale AI skilling programs across 35+ governments and empowering 200,000+ individuals worldwide.",
  phone: "+65 8339 0549",
  locations: ["Singapore", "United States"],
  linkedin: "https://www.linkedin.com/in/aqb589",
  linkedinHandle: "linkedin.com/in/aqb589",
  emails: ["aaqib@sustainablelivinglab.org", "aqb589@gmail.com"],
  websites: [
    { label: "Sustainable Living Lab USA", url: "https://sustainablelivinglab.org/usa" },
    { label: "Whizz Kidz SG", url: "https://whizzkidz.com.sg" },
    { label: "AI Teach U", url: "https://aiteachu.com" },
    { label: "Zangu App", url: "https://zanguapp.com" },
  ],
  bio: "Global program and business leader with more than 12 years of education-technology experience spanning AI and digital readiness, sustainability, STEAM learning, business development, operations, and cross-border innovation. Managed global AI programs for Intel and launched national-level AI skilling programs delivered with ministries and partners across 35+ governments, reaching more than 200,000 people.",
};

export const EXECUTIVE_METRICS = [
  { value: "35+", label: "Governments", sub: "Global AI Initiatives" },
  { value: "200K+", label: "People Reached", sub: "Public, Youth & Professionals" },
  { value: "12+", label: "Years EdTech Experience", sub: "AI & Digital Readiness" },
  { value: "35+", label: "Scaling to U.S. States", sub: "100+ Colleges Network" },
];

export const CORE_PILLARS: PillarItem[] = [
  {
    id: "global-ai",
    title: "Global AI & Digital Readiness",
    subtitle: "National-level skilling & public capacity building",
    badge: "Government Programs",
    description: "Managed global AI programs for Intel and launched national-level AI skilling programs for the general public, youth, vocational graduates, and working professionals across 35+ governments.",
    highlights: [
      "Delivered AI skilling programs with ministries and partners across 35+ governments, including the United States, Singapore, India, Korea, Japan, Russia, Poland, Germany, and China.",
      "Reached more than 200,000 people across public audiences, youth, vocational graduates, and working professionals.",
      "Led localization of AI curricula for regional contexts and educational institutions.",
      "Supported AI strategies for educational institutions, SDG-oriented visioning, corporate innovation, and leadership training.",
    ],
    metrics: "35+ Governments • 200,000+ People",
    iconName: "Globe2",
  },
  {
    id: "genai-implementation",
    title: "AI & GenAI Implementation",
    subtitle: "Enterprise deployment & operational transformation",
    badge: "Enterprise Tech",
    description: "Supporting institutional and commercial leaders with AI adoption, GenAI implementation, and digital solution work.",
    highlights: [
      "Consultation services assessing client technology stacks and architecting tailored GenAI tools.",
      "Supported AI learning and digital-skills tools across 100+ colleges and 300+ professors in the United States.",
      "Created more than 1,000 hours of educational content and digital upskilling assets.",
      "Supported AI/GenAI and digital solution implementation, deployment, and IT support.",
    ],
    metrics: "1,000+ Content Hours • 100+ Higher Ed Partners",
    iconName: "Cpu",
  },
  {
    id: "digital-trust",
    title: "Digital Trust",
    subtitle: "Building confidence in digital transformation",
    badge: "Policy & Integrity",
    description: "Applying digital trust as a supported area of work alongside AI and digital readiness, implementation, sustainability, and stakeholder engagement.",
    highlights: [
      "Digital Trust.",
      "AI and digital solution implementation.",
      "Stakeholder engagement across education, business, and community settings.",
      "Legal compliance and risk management in business operations.",
    ],
    metrics: "Digital Trust • Responsible Innovation",
    iconName: "ShieldCheck",
  },
  {
    id: "climate-adaptation",
    title: "Sustainability & Climate Adaptation",
    subtitle: "Sustainability, climate adaptation & SDG visioning",
    badge: "Planetary Impact",
    description: "Supporting sustainability and climate adaptation through SDG-oriented visioning, corporate innovation, and digital solution implementation.",
    highlights: [
      "Formalized and scaled the U.S. presence of Sustainable Living Laboratory LLC.",
      "Supported SDG-oriented visioning and corporate innovation.",
      "Worked on AI/GenAI and digital solution implementation alongside sustainability initiatives.",
      "Engaged stakeholders in sustainability and climate adaptation work.",
    ],
    metrics: "SDG Roadmap • Global Lab Operations",
    iconName: "Leaf",
  },
  {
    id: "futures-thinking",
    title: "Futures Thinking & Strategic Foresight",
    subtitle: "Futures thinking, foresight planning & policy support",
    badge: "Executive Foresight",
    description: "Applying futures thinking and foresight planning to policy-supporting work, SDG-oriented visioning, corporate innovation, and leadership training.",
    highlights: [
      "Futures Thinking.",
      "Foresight Planning.",
      "Policy-supporting work and SDG-oriented visioning.",
      "Corporate innovation and leadership training.",
    ],
    metrics: "Foresight Planning • Policy Support",
    iconName: "Compass",
  },
  {
    id: "edtech-strategy",
    title: "EdTech Strategy & Scaled Curricula",
    subtitle: "Pioneering blended learning & gamified engagement",
    badge: "EdTech Innovation",
    description: "More than 12 years of education-technology experience across STEAM learning, business development, operations, instructional design, and AI-based learning tools.",
    highlights: [
      "Supported Whizz Kidz revenue growth from 200k in late 2013 to more than 700k by early 2019.",
      "Worked with 25 of 45 schools, supported more than 15 camps across more than eight venues, and developed approximately 25 offerings.",
      "Led teacher training, product development, instructional design, spoken-language curricula, and an AI-based language-learning app for children aged 4-8.",
      "Introduced growth ideas including Science Technology Innovation Creativity 'K'onferences in collaboration with Youth Ambassadors Singapore.",
    ],
    metrics: "200k to 700k+ Revenue • Expat Living Awards",
    iconName: "GraduationCap",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "insead",
    role: "Startup Mentor",
    organization: "INSEAD AI Venture Lab",
    location: "United States",
    period: "Aug 2025 - Present",
    type: "current",
    highlight: "Mentor top-selected startups under the INSEAD AI Venture Lab.",
    description: [
      "Mentor top-selected startups under the INSEAD AI Venture Lab.",
    ],
    tags: ["Venture Capital", "Startup Acceleration", "GenAI", "Global Scaling"],
  },
  {
    id: "sll-usa-gm",
    role: "General Manager - Sustainable Living Laboratory LLC, USA",
    organization: "Sustainable Living Lab (SL2)",
    location: "United States / Singapore",
    period: "Jan 2025 - Present",
    type: "current",
    highlight: "Formalized and scaled the U.S. presence of Sustainable Living Laboratory LLC.",
    description: [
      "Formalized and scaled the U.S. presence of Sustainable Living Laboratory LLC.",
      "Provided consultation services, AI learning and digital-skills tools, deployment and IT support, and professional training services.",
      "Supported AI/GenAI and digital solution implementation while scaling to 35+ U.S. states and collaborating with 100+ colleges.",
      "Trained 300+ professors and created more than 1,000 hours of content.",
      "Led strategic leadership, team management, financial control, business development, stakeholder engagement, legal compliance, and risk management.",
    ],
    tags: ["Executive Leadership", "35+ States", "100+ Colleges", "GenAI Implementation"],
  },
  {
    id: "sll-country-manager",
    role: "Country Manager - SL2",
    organization: "Sustainable Living Lab (SL2)",
    location: "Singapore & United States",
    period: "Aug 2020 - Dec 2024",
    type: "past",
    highlight: "Managed global AI programs for Intel across 35+ governments, reaching 200,000+ people.",
    description: [
      "Managed global AI programs for Intel and launched national-level AI skilling programs for the general public, youth, vocational graduates, and working professionals.",
      "Delivered programs with ministries and partners across 35+ governments, including the United States, Singapore, Indonesia, India, Korea, Japan, Russia, Poland, Germany, and China.",
      "Led localization of AI curricula and supported AI strategies for educational institutions.",
      "Supported SDG-oriented visioning, corporate innovation, leadership training, and the opening of SLL USA.",
      "Coordinated across U.S., Singapore, Indonesia, and India offices.",
    ],
    tags: ["Intel Global Programs", "35+ Governments", "200k+ People Reached", "Curriculum Localization"],
  },
  {
    id: "wupa",
    role: "Advisor",
    organization: "World University Peace Assembly (WUPA)",
    location: "Hong Kong SAR",
    period: "Dec 2020 - Aug 2023",
    type: "past",
    highlight: "Strategic advisor to university-led international peace & social impact collective.",
    description: [
      "Advised student-led initiative established by University of Hong Kong and University of Edinburgh scholars.",
      "Delivered economic empowerment advisory engagements focused on solidarity, poverty alleviation, and youth innovation.",
      "Maintained strict politically neutral and non-denominational ethos, prioritizing actionable global solutions.",
    ],
    tags: ["Social Innovation", "Advisory", "Youth Empowerment", "Global Peace"],
  },
  {
    id: "aiteachu",
    role: "Country Manager",
    organization: "AI Teach U / AI Love Venture",
    location: "Singapore",
    period: "Jun 2019 - Dec 2020",
    type: "past",
    highlight: "Led multinational engineering & pedagogy teams, launched AI early language app (ages 4-8).",
    description: [
      "Headed operations across Singapore, USA, Japan, China, and El Salvador, directing tech, pedagogy, and market expansion.",
      "Led instructional design for spoken language curricula across Mandarin, English, French, Spanish, Hindi, and Italian.",
      "Developed an AI-based language-learning app for children aged 4-8 with progression reports.",
      "Built relationships with Children's Society, Glyph, NHB, and NLB through demonstrations and community projects.",
      "Presented to clients and EdTech conferences, including EduTech Singapore booths.",
    ],
    tags: ["EdTech AI", "Teacher Training", "Children's Literacy", "Product Development"],
  },
  {
    id: "whizzkidz-director",
    role: "Director, Business Development",
    organization: "Whizz Kidz Pte. Ltd.",
    location: "Singapore",
    period: "Dec 2016 - Jun 2019",
    type: "past",
    highlight: "Supported revenue growth from 200k in late 2013 to more than 700k by early 2019.",
    description: [
      "Supported revenue growth from 200k in late 2013 to more than 700k by early 2019 while managing business operations.",
      "Worked with 25 of 45 schools and supported a 15-school target for enrichment offerings.",
      "Supported approximately six classes per day, 36-40 classes weekly, more than 15 camps across more than eight venues, and approximately 25 offerings.",
      "Introduced growth ideas including Science Technology Innovation Creativity 'K'onferences in collaboration with Youth Ambassadors Singapore.",
      "Won Expat Living Awards for Best Enrichment Classes & Holiday Camps in 2018, 2019, and 2020.",
    ],
    tags: ["200k to 700k+ Revenue", "Expat Living Awards", "STEM / STEAM", "Business Operations"],
  },
  {
    id: "whizzkidz-bdm",
    role: "Business Development Manager & STEAM Lead",
    organization: "Whizz Kidz Pte. Ltd.",
    location: "Singapore",
    period: "Oct 2013 - Dec 2016",
    type: "past",
    highlight: "Supported business operations, marketing, advertising, web, IT, and logistics for Whizz Kidz.",
    description: [
      "Managed business operations, marketing, advertising, web, IT, and logistics.",
      "Supported approximately six classes per day and 36-40 classes weekly.",
      "Supported STEAM learning and approximately 25 offerings.",
    ],
    tags: ["Operations", "STEAM Facilitation", "Logistics", "Program Scaling"],
  },
  {
    id: "evonik",
    role: "Business Development Associate",
    organization: "Evonik Degussa",
    location: "Singapore",
    period: "Jun 2012 - Aug 2012",
    type: "past",
    highlight: "Analyzed production capacities and competitive dynamics for 120+ petrochemical firms.",
    description: [
      "Reported directly to Vice President during comprehensive market and competitor analysis.",
      "Conducted on-site plant assessments and high-level interviews with plant managers across Jurong Island.",
    ],
    tags: ["Petrochemicals", "Competitor Intelligence", "Market Sizing"],
  },
  {
    id: "astar",
    role: "Research Assistant",
    organization: "ICES, A*STAR (Agency for Science, Technology and Research)",
    location: "Jurong Island, Singapore",
    period: "Dec 2011 - May 2012",
    type: "past",
    highlight: "Produced publishable data for a research paper on renewable energy sources.",
    description: [
      "Produced publishable data for a research paper on renewable energy sources by increasing fungal degradation of palm oil and optimising the growth of microalgae.",
    ],
    tags: ["Renewable Energy", "Biotechnology", "Scientific Research"],
  },
  {
    id: "nus-development",
    role: "Student Development Associate",
    organization: "National University of Singapore (NUS)",
    location: "Singapore",
    period: "Oct 2009 - Dec 2011",
    type: "past",
    highlight: "Collaborated with other Associates to raise more than $250,000 in the 2009-10 campaign.",
    description: [
      "Collaborated with other Associates to raise more than $250,000 in the 2009-10 campaign, contributing to 1,700 bursaries for financially needy students in 2011.",
    ],
    tags: ["Philanthropy", "Bursary Campaign", "Student Support"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Executive MBA (EMBA)",
    institution: "Quantic School of Business and Technology",
    location: "United States (Global)",
    period: "Jul 2026",
  },
  {
    degree: "Bachelor of Engineering (B.Eng.), Chemical Engineering",
    institution: "National University of Singapore (NUS)",
    location: "Singapore",
    period: "Aug 2009 - Jun 2013",
    honors: [
      "Student Achievement Award for Exemplary Leadership (PakNUS), 2011",
      "Silver Medalist for Team Singapore at IChemE 2010 (Universiti Teknologi Malaysia)",
      "Assistant Stage Manager, NUS Stage Society (2010 - 2011)",
      "Inter-Varsity Athlete for TeamNUS Cricket (Winner of Singapore University Games & Corporate League 2011)",
      "Final Year Design Project (Technology): Theoretically designed Castor Oil Drying Oil Reactor via Aspen HYSYS simulation & process optimization",
      "Final Year Project (Education): Revamped CN3135: Process Safety, Health and Environment curriculum for NUS Chemical Engineering cohort",
    ],
    description: "Rigorous training in thermodynamics, process simulation (Aspen HYSYS), industrial safety, and mathematical modeling.",
  },
  {
    degree: "GCE A & O Levels (Sciences)",
    institution: "Beaconhouse School System, Margalla Campus",
    location: "Islamabad, Pakistan",
    period: "Jan 2005 - Dec 2008",
    honors: [
      "A Levels: 4 Straight As (Biology, Physics, Mathematics, Chemistry)",
      "O Levels: 7 Straight As (Biology, Physics, Mathematics, Chemistry, English, Urdu, Pakistan Studies, Islamic Studies)",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Introduction to Generative AI" },
  { name: "The Science of Well-Being" },
  { name: "Complete Digital Marketing Masterclass (12 Courses)", credentialId: "UC-ac06f456-3c3e-4f30-8558-9040bff4fb26" },
  { name: "Blue Ocean Strategy" },
  { name: "Finance: Time Value of Money" },
  { name: "Marketing Fundamentals" },
  { name: "Microeconomics I: Supply and Demand" },
  { name: "Accounting I: Fundamentals" },
  { name: "One-Variable Statistics" },
  { name: "SQL Tutorial for Beginners (30 Scenarios)" },
  { name: "First-Aid Certification" },
  { name: "Ultimate Resume Makeover" },
];

export const LANGUAGES = [
  { language: "English", level: "Native / Bilingual" },
  { language: "Urdu", level: "Native / Bilingual" },
  { language: "Punjabi", level: "Native / Bilingual" },
  { language: "Hindi", level: "Professional Working Proficiency" },
];

export const VOLUNTEERING = [
  {
    title: "Humanitarian Relief for Pakistan Flood Victims",
    role: "Regional Lead - West Singapore",
    period: "2009 - 2022",
    details: "Collected funds and served as in-charge of the West region of Singapore.",
  },
  {
    title: "Advisory Singapore",
    role: "Education & Career Mentor",
    period: "Jun 2020",
    details: "Mentored aspiring leaders under an initiative supported by Youth Corps Singapore, National Youth Council, and National Youth Fund, developing open-access advisory repositories.",
  },
];

export const GLOBAL_COUNTRIES = [
  { country: "United States", role: "AI skilling programs and SLL USA" },
  { country: "Singapore", role: "AI programs and SLL headquarters" },
  { country: "India", role: "AI skilling programs and SLL office" },
  { country: "South Korea", role: "AI skilling programs" },
  { country: "Japan", role: "AI programs and EdTech work" },
  { country: "Germany", role: "AI skilling programs" },
  { country: "Poland", role: "AI skilling programs" },
  { country: "Russia", role: "AI skilling programs" },
  { country: "China", role: "AI programs and EdTech work" },
];
