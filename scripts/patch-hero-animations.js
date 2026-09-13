const fs = require('fs');

// ── Expertise Page ───────────────────────────────────────────────
let expertise = fs.readFileSync('app/expertise/page.tsx', 'utf8');

expertise = expertise.replace(
  `        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Leadership & Expertise
            </p>
            <h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,8svh,6rem)] font-normal leading-[0.99] text-white">
              Where AI readiness becomes institutional capability.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              A practical portfolio of AI, digital readiness, sustainability, EdTech, and business
              development experience across programs, institutions, and communities.
            </p>
          </motion.div>
        </div>
      </section>`,
  `        <HeroAmbientGlow />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <HeroMotionContainer className="max-w-4xl">
            <HeroEyebrow className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Leadership &amp; Expertise
            </HeroEyebrow>
            <HeroHeading className="mt-7 max-w-4xl font-display text-[clamp(3rem,8svh,6rem)] font-normal leading-[0.99] text-white">
              Where AI readiness becomes institutional capability.
            </HeroHeading>
            <HeroDescription className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              A practical portfolio of AI, digital readiness, sustainability, EdTech, and business
              development experience across programs, institutions, and communities.
            </HeroDescription>
          </HeroMotionContainer>
        </div>
      </section>`
);

fs.writeFileSync('app/expertise/page.tsx', expertise);
console.log('expertise done. contains HeroMotionContainer:', expertise.includes('HeroMotionContainer'));

// ── Ventures (Impact) Page ───────────────────────────────────────
let ventures = fs.readFileSync('app/ventures/page.tsx', 'utf8');

// Add import
ventures = ventures.replace(
  `import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";`,
  `import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";
import {
  HeroAmbientGlow,
  HeroDescription,
  HeroEyebrow,
  HeroHeading,
  HeroMotionContainer,
  HeroSecondary,
} from "@/components/HeroAnimations";`
);

// Replace hero content block
ventures = ventures.replace(
  `        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Impact
            </p>
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-4xl font-display text-[clamp(2.7rem,7svh,5.75rem)] font-normal leading-[0.99] text-ink sm:text-[clamp(3rem,8svh,6rem)]"
            >
              Evidence of change across learning systems and institutions.
            </motion.h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-text sm:text-lg">
              From commercial scaling and venture mentorship to AI skilling, EdTech, and sustainable
              innovation work across international programs and organizations.
            </p>`,
  `        <HeroAmbientGlow />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <HeroMotionContainer className="max-w-4xl">
            <HeroEyebrow className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Impact
            </HeroEyebrow>
            <HeroHeading className="mt-7 max-w-4xl font-display text-[clamp(2.7rem,7svh,5.75rem)] font-normal leading-[0.99] text-ink sm:text-[clamp(3rem,8svh,6rem)]">
              Evidence of change across learning systems and institutions.
            </HeroHeading>
            <HeroDescription className="mt-8 max-w-2xl text-base leading-8 text-text sm:text-lg">
              From commercial scaling and venture mentorship to AI skilling, EdTech, and sustainable
              innovation work across international programs and organizations.
            </HeroDescription>`
);

// Also replace the dl stats block wrapper
ventures = ventures.replace(
  `            <dl className="mt-9 grid max-w-3xl grid-cols-3 border-y border-white/10 sm:mt-12">`,
  `            <HeroSecondary as="dl" className="mt-9 grid max-w-3xl grid-cols-3 border-y border-white/10 sm:mt-12">`
);
ventures = ventures.replace(
  `            </dl>
          </motion.div>`,
  `            </HeroSecondary>
          </HeroMotionContainer>`
);

// Also wrap the metric dd values
ventures = ventures.replace(
  /(<motion\.dd\s+initial=\{prefersReducedMotion \? false : \{ opacity: 0, y: 10 \}\}\s+animate=\{prefersReducedMotion \? undefined : \{ opacity: 1, y: 0 \}\}\s+transition=\{\{ duration: 0\.8, delay: 0\.45 \+ index \* 0\.12, ease: \[0\.16, 1, 0\.3, 1\] \}\}\s+className="mt-3 font-display text-3xl font-normal text-white sm:text-5xl"\s+>)/g,
  '<dd className="mt-3 font-display text-3xl font-normal text-white sm:text-5xl">'
);
ventures = ventures.replace(/<\/motion\.dd>/g, '</dd>');

fs.writeFileSync('app/ventures/page.tsx', ventures);
console.log('ventures done. contains HeroMotionContainer:', ventures.includes('HeroMotionContainer'));

// ── Contact Page ─────────────────────────────────────────────────
let contact = fs.readFileSync('app/contact/page.tsx', 'utf8');

// Add import after existing PremiumHeroMotion import
contact = contact.replace(
  `import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";`,
  `import { AmbientLightSweep, CinematicHeroImage } from "@/components/PremiumHeroMotion";
import {
  HeroAmbientGlow,
  HeroDescription,
  HeroEyebrow,
  HeroHeading,
  HeroMotionContainer,
} from "@/components/HeroAnimations";`
);

// Replace hero motion elements (h1 + p)
contact = contact.replace(
  `          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl font-display text-5xl font-normal leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[500px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
          >
            For ministries, institutions, and organizations seeking advisory on AI, digital readiness, or sustainability initiatives.
          </motion.p>`,
  `          <HeroMotionContainer>
            <HeroAmbientGlow />
            <HeroEyebrow className="mb-6 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-gold">
              Start a Conversation
            </HeroEyebrow>
            <HeroHeading
              id="contact-heading"
              className="max-w-xl font-display text-5xl font-normal leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl"
            >
              Let&apos;s Connect
            </HeroHeading>
            <HeroDescription className="mt-6 max-w-[500px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              For ministries, institutions, and organizations seeking advisory on AI, digital readiness, or sustainability initiatives.
            </HeroDescription>
          </HeroMotionContainer>`
);

fs.writeFileSync('app/contact/page.tsx', contact);
console.log('contact done. contains HeroMotionContainer:', contact.includes('HeroMotionContainer'));
