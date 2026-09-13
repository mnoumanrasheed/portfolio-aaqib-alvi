"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

const premiumEase = [0.16, 1, 0.3, 1] as const;

type HeroImageProps = {
  src: string;
  objectPosition?: string;
  className?: string;
  intensity?: "soft" | "calm";
};

export function CinematicHeroImage({
  src,
  objectPosition = "center",
  className = "",
  intensity = "soft",
}: HeroImageProps) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 28, damping: 24, mass: 0.7 });
  const y = useSpring(pointerY, { stiffness: 28, damping: 24, mass: 0.7 });

  useEffect(() => {
    if (reducedMotion) return;
    const media = window.matchMedia("(min-width: 1024px)");
    const handleMove = (event: PointerEvent) => {
      if (!media.matches) return;
      pointerX.set(((event.clientX / window.innerWidth) - 0.5) * (intensity === "calm" ? -8 : -12));
      pointerY.set(((event.clientY / window.innerHeight) - 0.5) * (intensity === "calm" ? -4 : -6));
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [intensity, pointerX, pointerY, reducedMotion]);

  return (
    <motion.div
      aria-hidden="true"
      initial={reducedMotion ? false : { opacity: 0.86, scale: 1.025 }}
      animate={reducedMotion ? undefined : { opacity: 1, scale: [1.025, 1.008, 1.012] }}
      transition={reducedMotion ? undefined : {
        opacity: { duration: 1.15, ease: premiumEase },
        scale: { duration: intensity === "calm" ? 12 : 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
      }}
      style={{ x: reducedMotion ? 0 : x, y: reducedMotion ? 0 : y }}
      className="absolute -inset-2"
    >
      <Image src={src} alt="" fill priority sizes="100vw" className={`object-cover ${objectPosition} ${className}`} />
    </motion.div>
  );
}

export function AmbientLightSweep({ tone = "gold" }: { tone?: "gold" | "cyan" }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={reducedMotion ? { opacity: 0.15 } : { opacity: [0.08, 0.22, 0.08], x: ["-5%", "5%", "-5%"] }}
      transition={reducedMotion ? undefined : { duration: tone === "gold" ? 14 : 16, ease: "easeInOut", repeat: Infinity }}
      className={`pointer-events-none absolute inset-y-0 -left-[12%] w-[58%] blur-3xl z-10 ${tone === "gold" ? "bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.18),transparent_68%)]" : "bg-[radial-gradient(ellipse_at_center,rgba(223,183,108,0.15),transparent_68%)]"}`}
    />
  );
}

export function LeadershipNetworkTrace() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 620 460"
      className="pointer-events-none absolute right-[-8%] top-1/2 h-[68%] w-[58%] -translate-y-1/2 opacity-70 sm:right-0 lg:h-[76%] lg:w-[52%]"
    >
      <path d="M70 285 C180 95 390 60 560 180" fill="none" stroke="rgba(197,160,89,.26)" strokeWidth="1" strokeDasharray="2 14" />
      <path d="M95 130 C240 260 405 330 565 245" fill="none" stroke="rgba(223,183,108,.24)" strokeWidth="1" strokeDasharray="1 18" />
      <motion.path
        d="M120 306 C250 180 365 122 540 166"
        fill="none"
        stroke="rgba(197,160,89,.55)"
        strokeWidth="1.2"
        strokeDasharray="3 180"
        initial={{ strokeDashoffset: 0, opacity: 0.25 }}
        animate={reducedMotion ? { strokeDashoffset: 0, opacity: 0.25 } : { strokeDashoffset: -180, opacity: [0.25, 0.65, 0.25] }}
        transition={reducedMotion ? undefined : { duration: 14, ease: "linear", repeat: Infinity }}
      />
      {[
        [118, 306, "gold"],
        [224, 139, "light"],
        [372, 111, "gold"],
        [540, 166, "light"],
        [465, 308, "gold"],
        [286, 328, "light"],
      ].map(([cx, cy, tone], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index === 3 ? 3.5 : 2.2}
          fill={tone === "gold" ? "#C5A059" : "#DFB76C"}
          initial={{ opacity: 0.4 }}
          animate={reducedMotion ? { opacity: 0.4 } : { opacity: index === 3 ? [0.4, 0.95, 0.4] : 0.55 }}
          transition={reducedMotion ? undefined : { duration: 5, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
}
