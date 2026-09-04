"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EXPERTISE = [
  {
    id: 0,
    num: "01",
    label: "AI & Digital\nReadiness",
    shortLabel: "AI & Digital",
    desc: "Building institutional capacity for AI adoption, digital infrastructure strategy, and workforce readiness at national scale.",
    color: "#00D2FF",
    glowColor: "rgba(0,210,255,0.45)",
    angle: -90,
    labelClass: "left-1/2 top-[4%] -translate-x-1/2",
  },
  {
    id: 1,
    num: "02",
    label: "Sustainability &\nClimate Foresight",
    shortLabel: "Sustainability",
    desc: "Connecting foresight, climate adaptation, and sustainable innovation to strategic action.",
    color: "#34D399",
    glowColor: "rgba(52,211,153,0.45)",
    angle: -30,
    labelClass: "right-[1%] top-[25%]",
  },
  {
    id: 2,
    num: "03",
    label: "EdTech &\nSTEAM Pedagogy",
    shortLabel: "EdTech & STEAM",
    desc: "Designing transformative STEAM learning ecosystems that activate curiosity, creativity, and critical thinking.",
    color: "#D4AF37",
    glowColor: "rgba(212,175,55,0.45)",
    angle: 30,
    labelClass: "right-[1%] bottom-[25%]",
  },
  {
    id: 3,
    num: "04",
    label: "Global Operations\n& Governance",
    shortLabel: "Operations",
    desc: "Orchestrating cross-border programs, sovereign partnerships, and multi-stakeholder governance frameworks.",
    color: "#818CF8",
    glowColor: "rgba(129,140,248,0.45)",
    angle: 90,
    labelClass: "bottom-[4%] left-1/2 -translate-x-1/2",
  },
  {
    id: 4,
    num: "05",
    label: "Stakeholder &\nCommercial Leadership",
    shortLabel: "Commercial",
    desc: "Driving revenue growth, executive alignment, and partner ecosystems across complex global markets.",
    color: "#FB923C",
    glowColor: "rgba(251,146,60,0.45)",
    angle: 150,
    labelClass: "bottom-[25%] left-[1%]",
  },
  {
    id: 5,
    num: "06",
    label: "Institutional\nTransformation",
    shortLabel: "Institutional",
    desc: "Guiding universities, governments, and enterprises through deep structural and cultural evolution.",
    color: "#22D3EE",
    glowColor: "rgba(34,211,238,0.4)",
    angle: 210,
    labelClass: "left-[1%] top-[25%]",
  },
] as const;

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  cx: 48 + ((i * 67 + 13) % 504),
  cy: 48 + ((i * 43 + 77) % 504),
  r: 0.7 + ((i * 31) % 8) / 10,
  delay: (i * 0.38) % 4.5,
  dur: 3 + ((i * 23) % 4),
}));

function polar(angleDeg: number, radius: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

export default function HeroOrbit() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const cycle = window.setInterval(() => {
      setActive((current) => (current + 1) % EXPERTISE.length);
    }, 3400);

    return () => window.clearInterval(cycle);
  }, [paused]);

  const SIZE = 300;
  const CX = SIZE;
  const CY = SIZE;
  const R1 = 106;
  const R2 = 148;
  const activeItem = EXPERTISE[active];
  const activePoint = polar(activeItem.angle, R2);

  const selectItem = (id: number) => {
    setActive(id);
    setPaused(true);
    window.setTimeout(() => setPaused(false), 5200);
  };

  return (
    <div className="relative flex w-full select-none flex-col items-center">
      <div
        className="relative aspect-square w-full max-w-[430px] sm:max-w-[470px] lg:max-w-[500px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute inset-[11%] rounded-full bg-brand-cyan/[0.04] blur-2xl" />

        <svg
          viewBox={`0 0 ${SIZE * 2} ${SIZE * 2}`}
          className="relative z-0 h-full w-full"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.34" />
              <stop offset="58%" stopColor="#0284C7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0" />
            </radialGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glowStrong" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {PARTICLES.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={particle.cx}
              cy={particle.cy}
              r={particle.r}
              fill={particle.id % 3 === 0 ? "#D4AF37" : "#00D2FF"}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.46, 0] }}
              transition={{
                duration: particle.dur,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.circle
            cx={CX}
            cy={CY}
            r={R2}
            fill="none"
            stroke="rgba(0,210,255,0.18)"
            strokeWidth="1.2"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />

          <motion.circle
            cx={CX}
            cy={CY}
            r={R1}
            fill="none"
            stroke="rgba(212,175,55,0.15)"
            strokeDasharray="5 8"
            strokeWidth="1.2"
            animate={{ rotate: -360 }}
            transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />

          <circle
            cx={CX}
            cy={CY}
            r={62}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          <circle cx={CX} cy={CY} r={94} fill="url(#coreGlow)" />

          <motion.line
            key={activeItem.id}
            x1={CX + activePoint.x}
            y1={CY + activePoint.y}
            x2={CX}
            y2={CY}
            stroke={activeItem.color}
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.55 }}
          />

          {EXPERTISE.map((item, index) => {
            const from = polar(item.angle, R2);
            const to = polar(EXPERTISE[(index + 2) % EXPERTISE.length].angle, R2);

            return (
              <line
                key={`web-${item.id}`}
                x1={CX + from.x}
                y1={CY + from.y}
                x2={CX + to.x}
                y2={CY + to.y}
                stroke="rgba(255,255,255,0.045)"
                strokeWidth="0.7"
              />
            );
          })}

          <motion.line
            x1={CX}
            y1={CY}
            x2={CX}
            y2={CY - R1}
            stroke="#00D2FF"
            strokeOpacity="0.38"
            strokeWidth="1"
            animate={{ rotate: 360 }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />

          <motion.circle
            cx={CX}
            cy={CY}
            r={41}
            fill="none"
            stroke="#00D2FF"
            strokeOpacity="0.32"
            strokeWidth="1"
            animate={{ r: [41, 49, 41], opacity: [0.32, 0, 0.32] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle
            cx={CX}
            cy={CY}
            r={36}
            fill="rgba(3,7,18,0.96)"
            stroke="rgba(0,210,255,0.56)"
            strokeWidth="1.6"
            filter="url(#glow)"
          />

          <text
            x={CX}
            y={CY - 5}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="17"
            fontWeight="800"
            fontFamily="Outfit, sans-serif"
            letterSpacing="2"
          >
            AA
          </text>
          <text
            x={CX}
            y={CY + 12}
            textAnchor="middle"
            fill="rgba(126,231,252,0.86)"
            fontSize="6"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            letterSpacing="2"
          >
            LEADERSHIP
          </text>

          {EXPERTISE.map((item) => {
            const point = polar(item.angle, R2);
            const isActive = item.id === active;
            const nodeRadius = isActive ? 13 : 9;

            return (
              <g key={item.id}>
                {isActive && (
                  <motion.circle
                    cx={CX + point.x}
                    cy={CY + point.y}
                    r={22}
                    fill="none"
                    stroke={item.color}
                    strokeOpacity="0.52"
                    strokeWidth="1.2"
                    animate={{ r: [22, 31, 22], opacity: [0.52, 0, 0.52] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                <motion.circle
                  cx={CX + point.x}
                  cy={CY + point.y}
                  r={nodeRadius}
                  fill={isActive ? item.color : "rgba(3,7,18,0.94)"}
                  stroke={item.color}
                  strokeOpacity={isActive ? 1 : 0.68}
                  strokeWidth={isActive ? 2 : 1.2}
                  filter={isActive ? "url(#glowStrong)" : undefined}
                  animate={{ r: nodeRadius }}
                  transition={{ duration: 0.35 }}
                />

                <text
                  x={CX + point.x}
                  y={CY + point.y + 4}
                  textAnchor="middle"
                  fill={isActive ? "#031018" : item.color}
                  fontSize={isActive ? "7" : "6"}
                  fontWeight="800"
                  fontFamily="Inter, sans-serif"
                >
                  {item.num}
                </text>
              </g>
            );
          })}

          {EXPERTISE.map((item) => {
            const point = polar(item.angle + 30, R1);

            return (
              <motion.circle
                key={`inner-${item.id}`}
                cx={CX + point.x}
                cy={CY + point.y}
                r={2.5}
                fill={item.color}
                animate={{ opacity: [0.24, 0.76, 0.24] }}
                transition={{
                  duration: 2.5,
                  delay: item.id * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {EXPERTISE.map((item) => {
          const isActive = item.id === active;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => selectItem(item.id)}
              onMouseEnter={() => {
                setActive(item.id);
                setPaused(true);
              }}
              onMouseLeave={() => setPaused(false)}
              className={`absolute z-10 hidden max-w-[142px] rounded-xl border px-3 py-2 text-left backdrop-blur-xl transition-all duration-300 sm:block ${item.labelClass}`}
              style={{
                background: isActive ? "rgba(6,12,26,0.9)" : "rgba(6,12,26,0.68)",
                borderColor: isActive ? `${item.color}80` : "rgba(255,255,255,0.12)",
                boxShadow: isActive
                  ? `0 0 26px ${item.glowColor}, inset 0 1px 0 rgba(255,255,255,0.08)`
                  : "0 8px 24px rgba(0,0,0,0.34)",
              }}
              aria-pressed={isActive}
            >
              <span
                className="block text-[9px] font-black leading-none tracking-[0.18em]"
                style={{ color: isActive ? item.color : "rgba(226,232,240,0.72)" }}
              >
                {item.num}
              </span>
              <span
                className="mt-1.5 block whitespace-nowrap text-[11px] font-extrabold leading-none tracking-[0.04em]"
                style={{
                  color: isActive ? "#FFFFFF" : "rgba(226,232,240,0.86)",
                  fontFamily: "Outfit, system-ui, sans-serif",
                }}
              >
                {item.shortLabel}
              </span>
            </button>
          );
        })}

        <div
          className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-[#030712]/75 px-3 py-1.5 text-[10px] font-black tracking-[0.18em] backdrop-blur-xl"
          style={{ color: activeItem.color, fontFamily: "Inter, sans-serif" }}
        >
          {String(active + 1).padStart(2, "0")} / 06
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[500px] lg:-mt-1"
        >
          <div
            className="relative overflow-hidden rounded-2xl px-5 py-4 sm:px-6"
            style={{
              background: "rgba(6,12,26,0.86)",
              border: `1px solid ${activeItem.color}42`,
              boxShadow: `0 0 28px ${activeItem.glowColor}24, inset 0 1px 0 rgba(255,255,255,0.055)`,
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              className="absolute left-8 right-8 top-0 h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${activeItem.color}82, transparent)`,
              }}
            />

            <div className="flex items-start gap-3.5">
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-[11px] font-black"
                style={{
                  background: `${activeItem.color}18`,
                  border: `1px solid ${activeItem.color}55`,
                  color: activeItem.color,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {activeItem.num}
              </div>
              <div>
                <h3
                  className="text-[15px] font-extrabold leading-snug"
                  style={{ color: activeItem.color, fontFamily: "Outfit, sans-serif" }}
                >
                  {activeItem.label.replace("\n", " ")}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-300/90">
                  {activeItem.desc}
                </p>
              </div>
            </div>

            <div className="mt-3.5 flex gap-1.5">
              {EXPERTISE.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.shortLabel}`}
                  onClick={() => selectItem(item.id)}
                  className="h-[3px] flex-1 rounded-full transition-transform duration-200 hover:scale-y-150"
                  style={{
                    background: item.id === active ? item.color : "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
