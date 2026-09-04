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
  issuer: string;
  date?: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: "Aaqib Alvi",
  title: "Global AI & Digital Readiness Leader",
  headline: "Driving Global Digital Readiness, Ethical AI Governance & Sustainable Adaptation",
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
  bio: "Global program and business leader with over 12 years of high-impact education-technology experience. Spanning AI and digital readiness, sustainability, STEAM learning, business development, operations, and cross-border innovation. Has directed Intel-linked AI skilling, upskilling, and reskilling programs with government ministries and multilateral partners across 35+ sovereign nations, scaling reach to more than 200,000 diverse learners.",
};

export const EXECUTIVE_METRICS = [
  { value: "35+", label: "Government Ministries", sub: "Global AI Initiatives" },
  { value: "200K+", label: "Individuals Upskilled", sub: "Non-Technical & Youth" },
  { value: "12+", label: "Years Leadership", sub: "EdTech & AI Innovation" },
  { value: "35+", label: "U.S. States Scaled", sub: "100+ Colleges Network" },
];

export const CORE_PILLARS: PillarItem[] = [
  {
    id: "global-ai",
    title: "Global AI & Digital Readiness",
    subtitle: "National-scale skilling & public capacity building",
    badge: "Government & Multilateral",
    description: "Architecting and orchestrating national-level AI skilling programs for Intel and sovereign ministries, bridging technical divides for youth, workforce transitions, and non-technical demographics across 35+ nations.",
    highlights: [
      "Directed Intel-linked AI skilling programs deployed in 35+ countries including USA, Singapore, India, Korea, Japan, Germany, Poland, and China.",
      "Reached over 200,000 individuals from diverse socio-economic and non-technical backgrounds.",
      "Curriculum localization frameworks adapting global AI breakthroughs to domestic regulatory and civic needs.",
      "Bridged deep technical skills gaps through intuitive, empathetic pedagogical frameworks.",
    ],
    metrics: "35+ Ministries • 200,000+ Citizens",
    iconName: "Globe2",
  },
  {
    id: "genai-implementation",
    title: "AI & GenAI Implementation",
    subtitle: "Enterprise deployment & operational transformation",
    badge: "Enterprise Tech",
    description: "Consulting institutional and commercial leaders on enterprise AI adoption, GenAI workflow integrations, and proprietary intelligent tools tailored to business goals.",
    highlights: [
      "Consultation services assessing client technology stacks and architecting tailored GenAI tools.",
      "Scaled U.S. institutional initiatives across 100+ colleges and 300+ university professors.",
      "Produced over 1,000+ hours of modern enterprise AI content and digital upskilling assets.",
      "End-to-end operationalization from model selection to organizational change management.",
    ],
    metrics: "1,000+ Content Hours • 100+ Higher Ed Partners",
    iconName: "Cpu",
  },
  {
    id: "digital-trust",
    title: "Digital Trust & Ethical AI",
    subtitle: "Governance, algorithmic accountability & safety",
    badge: "Policy & Integrity",
    description: "Advancing digital trust as a core societal requirement, formulating ethical AI boundaries, policy frameworks, and risk mitigation strategies in high-stakes environments.",
    highlights: [
      "Formulating digital trust principles that safeguard civic inclusion in emerging tech ecosystems.",
      "Guiding educational institutions and corporations through responsible AI compliance.",
      "Balancing rapid algorithmic automation with rigorous human-in-the-loop accountability.",
      "High-pressure environment risk management, legal compliance, and stakeholder consensus.",
    ],
    metrics: "Zero-Trust Frameworks • Responsible Governance",
    iconName: "ShieldCheck",
  },
  {
    id: "climate-adaptation",
    title: "Sustainability & Climate Adaptation",
    subtitle: "Technology-driven climate solutions through SDGs",
    badge: "Planetary Impact",
    description: "Harnessing technology and community-driven labs to design agile climate adaptation mechanisms, active-aging interventions, and SDG-aligned corporate roadmaps.",
    highlights: [
      "Led expansion of Sustainable Living Laboratory LLC in Singapore and the United States.",
      "Co-created SDG-oriented visioning and corporate innovation initiatives with major Asian MNCs.",
      "Implemented grassroots sustainable technologies addressing local climate resilience.",
      "Developed affordable, eco-conscious tools for civic resilience and community longevity.",
    ],
    metrics: "SDG Roadmap • Global Lab Operations",
    iconName: "Leaf",
  },
  {
    id: "futures-thinking",
    title: "Futures Thinking & Strategic Foresight",
    subtitle: "Anticipatory governance & long-range horizon scanning",
    badge: "Executive Foresight",
    description: "Empowering policy makers, university deans, and boardroom executives with futures-thinking methodologies, scenario planning, and systemic risk forecasting.",
    highlights: [
      "Conducted foresight planning sessions supporting state-level educational and workforce policy.",
      "Designed horizon-scanning models for emerging tech convergence (AI + Climate + Longevity).",
      "Mentored university leaders on agile institutional readiness for 2030 and beyond.",
      "Collaborated across international think-tanks and cross-border research consortiums.",
    ],
    metrics: "Horizon 2030+ • Strategic Policy",
    iconName: "Compass",
  },
  {
    id: "edtech-strategy",
    title: "EdTech Strategy & Scaled Curricula",
    subtitle: "Pioneering blended learning & gamified engagement",
    badge: "EdTech Innovation",
    description: "Over a decade directing education-technology firms, scaling revenues by 350%, launching early-childhood AI language platforms, and receiving prestigious industry honors.",
    highlights: [
      "Scaled Whizz Kidz revenue from 200k to >700k, expanding from 15 to 25+ premier international schools.",
      "Triple winner of Expat Living Awards for Best Enrichment Classes & Holiday Camps (2018, 2019, 2020).",
      "Directed AI Teach U / AI Love Venture multilingual AI platform across 7+ languages (Mandarin, French, Spanish, etc.).",
      "Pioneered immersive STEAM conferences (STICK) in collaboration with Youth Ambassadors Singapore.",
    ],
    metrics: "3.5x Revenue Growth • Triple Award Winner",
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
    highlight: "Mentoring elite cohort startups under INSEAD's flagship AI Venture Lab.",
    description: [
      "Provide strategic mentorship to high-potential AI ventures emerging from INSEAD's global founder community.",
      "Advise on product-market fit, enterprise AI integration, global market penetration, and sustainable unit economics.",
      "Bridge early-stage founders with institutional capital, corporate testbeds, and international government partners.",
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
    highlight: "Scaling U.S. institutional footprint across 35+ states and 100+ colleges.",
    description: [
      "Formalized and scaled the U.S. entity following foundational operations established from Singapore headquarters.",
      "Oversee consulting engagements assessing technology architectures and deploying sustainable AI/GenAI solutions.",
      "Scaling across 35+ U.S. states and collaborating with 100+ colleges to integrate emerging technologies into curricula.",
      "Direct train-the-trainer initiatives for 300+ university professors and oversee creation of 1,000+ hours of new educational content.",
      "Executive responsibility for financial control, legal compliance, risk mitigation, HR, and cross-border entity governance.",
    ],
    tags: ["Executive Leadership", "Cross-Border Entity", "35+ States", "100+ Colleges", "GenAI Deployment"],
  },
  {
    id: "sll-country-manager",
    role: "Country Manager - Singapore & USA",
    organization: "Sustainable Living Lab (SL2)",
    location: "Singapore & United States",
    period: "Aug 2020 - Dec 2024",
    type: "past",
    highlight: "Spearheaded Intel global AI initiatives across 35+ national governments, reaching 200,000+ people.",
    description: [
      "Directed global AI skilling programs for Intel Corporation, rolling out national-level initiatives in partnership with ministries and regional agencies.",
      "Targeted public audiences, vocational graduates, and professionals across 35+ countries including USA, Singapore, India, Korea, Japan, Germany, Poland, Russia, and China.",
      "Curriculum localization lead, adapting cutting-edge AI materials into regional pedagogical and cultural contexts.",
      "Established Sustainable Living Laboratory LLC USA, spearheading legal, administrative, and commercial rollout.",
      "Coordinated multinational projects across SL2 hubs in Singapore, the United States, Indonesia, and India.",
    ],
    tags: ["Intel Global Programs", "35+ Sovereign Nations", "200k+ Upskilled", "Policy Localization"],
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
      "Pioneered an AI-powered conversational language app for children aged 4-8 with self-paced adaptive progression algorithms.",
      "Forged public sector partnerships with Singapore Children's Society, Glyph, National Heritage Board (NHB), and National Library Board (NLB).",
      "Keynote presenter and booth lead at EduTech Singapore conference.",
    ],
    tags: ["EdTech AI", "Multilingual NLP", "Children's Literacy", "Public-Private Partnerships"],
  },
  {
    id: "whizzkidz-director",
    role: "Director, Business Development",
    organization: "Whizz Kidz Pte. Ltd.",
    location: "Singapore",
    period: "Dec 2016 - Jun 2019",
    type: "past",
    highlight: "Grew company revenue from 200k to >700k; won Expat Living Awards for 3 consecutive years.",
    description: [
      "Accelerated revenue by 350%, including adding 250k in the final 24 months, while running business operations independently for 3 years.",
      "Secured partnership contracts with 25 of 45 targeted international schools for Fun Science, Lego Robotics, Arts, and Movie Making.",
      "Increased weekly volume to 36-40 classes across schools and expanded holiday camps from 4 camps to 15+ specialized locations.",
      "Co-founded Science Technology Innovation Creativity 'K'onferences (STICK) with Youth Ambassadors Singapore.",
      "Won Expat Living Awards for Best Enrichment Classes & Holiday Camps in 2018, 2019, and 2020.",
    ],
    tags: ["3.5x Revenue Growth", "Expat Living Winner", "STEM / STEAM", "Event Curation"],
  },
  {
    id: "whizzkidz-bdm",
    role: "Business Development Manager & STEAM Lead",
    organization: "Whizz Kidz Pte. Ltd.",
    location: "Singapore",
    period: "Oct 2013 - Dec 2016",
    type: "past",
    highlight: "Scaled weekly classes from 35 to 80 within one year across 12 new international schools.",
    description: [
      "Managed operations, HR, logistics, marketing, and client relations for Singapore's premier enrichment provider.",
      "Expanded curriculum offerings and integrated direct parent/student feedback loops into instructional upgrades.",
      "Delivered high-energy STEAM presentations, emcee duties, and hands-on science facilitation for over 6 years.",
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
    highlight: "Published renewable energy research on palm oil fungal degradation and microalgae growth.",
    description: [
      "Authored publishable findings on green renewable energy through biological optimization of microalgae cultures.",
      "Developed expertise in rigorous laboratory methodologies and chemical engineering experimentation.",
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
    highlight: "Mobilized over $250,000 in university endowment funding to support 1,700 bursaries.",
    description: [
      "Spearheaded donor outreach campaigns supporting financially disadvantaged undergraduate students.",
      "Collaborated with university alumni relations and development directors.",
    ],
    tags: ["Philanthropy", "Endowment", "Alumni Relations"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Executive MBA (EMBA)",
    institution: "Quantic School of Business and Technology",
    location: "United States (Global)",
    period: "Expected Jul 2026",
    description: "Advanced executive leadership curriculum concentrating on algorithmic management, strategic finance, blue ocean strategy, and technological innovation.",
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
  { name: "Introduction to Generative AI", issuer: "Industry Credential" },
  { name: "The Science of Well-Being", issuer: "Yale University / Online" },
  { name: "Complete Digital Marketing Masterclass (12 Courses)", issuer: "Udemy", credentialId: "UC-ac06f456-3c3e-4f30-8558-9040bff4fb26" },
  { name: "Blue Ocean Strategy", issuer: "Smartly by Pedago" },
  { name: "Finance: Time Value of Money", issuer: "Smartly by Pedago" },
  { name: "Marketing Fundamentals", issuer: "Smartly by Pedago" },
  { name: "Microeconomics I: Supply and Demand", issuer: "Smartly by Pedago" },
  { name: "Accounting I: Fundamentals", issuer: "Smartly by Pedago" },
  { name: "One-Variable Statistics", issuer: "Smartly by Pedago" },
  { name: "SQL Tutorial for Beginners (30 Scenarios)", issuer: "Technical Certification" },
  { name: "First-Aid Certification", issuer: "Singapore First Aid Training Centre Pte Ltd" },
  { name: "Ultimate Resume Makeover", issuer: "Professional Development" },
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
    details: "Mobilized critical medical supplies, water purification kits, and emergency fundraising across Singapore's Western corridor in coordinated response to unprecedented monsoon crises.",
  },
  {
    title: "Advisory Singapore",
    role: "Education & Career Mentor",
    period: "Jun 2020",
    details: "Mentored aspiring leaders under an initiative supported by Youth Corps Singapore, National Youth Council, and National Youth Fund, developing open-access advisory repositories.",
  },
];

export const GLOBAL_COUNTRIES = [
  { country: "United States", role: "SLL USA Expansion, 35+ States, INSEAD Mentorship" },
  { country: "Singapore", role: "Asia-Pacific Headquarters, NUS, Intel National AI programs" },
  { country: "India", role: "Intel AI Skilling Deployment & SL2 Technology Office" },
  { country: "South Korea", role: "Government AI Skilling & Youth Digital Capacity" },
  { country: "Japan", role: "AI Language Platform Deployment & Youth Conferences" },
  { country: "Germany", role: "Intel AI for Future Workforce Program Rollout" },
  { country: "Poland", role: "Ministry AI Skills Framework Integration" },
  { country: "China", role: "Intel Youth AI Skilling & Language Learning Exchange" },
  { country: "Indonesia", role: "SL2 Regional Sustainability Hub & Community Labs" },
  { country: "Hong Kong SAR", role: "WUPA Advisory & University Peace Initiatives" },
];
