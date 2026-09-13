"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { CORE_PILLARS, EXPERIENCES } from "@/data/content";

const CAPABILITIES = [
  { shortLabel: "AI & Digital", source: "global-ai", track: 0, angle: -55 },
  { shortLabel: "Sustainability", source: "climate-adaptation", track: 1, angle: 18 },
  { shortLabel: "EdTech & STEAM", source: "edtech-strategy", track: 2, angle: 85 },
  { shortLabel: "Operations", source: "whizzkidz-bdm", track: 0, angle: 145 },
  { shortLabel: "Commercial", source: "whizzkidz-director", track: 1, angle: 230 },
  { shortLabel: "Institutional", source: "genai-implementation", track: 2, angle: 285 },
].map((item, index) => {
  const pillar = CORE_PILLARS.find((entry) => entry.id === item.source);
  const experience = EXPERIENCES.find((entry) => entry.id === item.source);
  return {
    ...item,
    id: String(index + 1).padStart(2, "0"),
    title: pillar?.title ?? experience!.role,
    description: pillar?.description ?? experience!.description[0],
  };
});

const ROTATION_DELAY = 4800;
const INTERACTION_DELAY = 10000;
const informationTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

const TRAJECTORIES = [
  { rx: 208, ry: 112, tilt: -24 },
  { rx: 202, ry: 116, tilt: 40 },
  { rx: 198, ry: 118, tilt: 102 },
] as const;

function nodePosition(track: number, degrees: number) {
  const orbit = TRAJECTORIES[track];
  const angle = degrees * Math.PI / 180;
  const tilt = orbit.tilt * Math.PI / 180;
  const x = orbit.rx * Math.cos(angle);
  const y = orbit.ry * Math.sin(angle);
  return {
    x: 260 + x * Math.cos(tilt) - y * Math.sin(tilt),
    y: 260 + x * Math.sin(tilt) + y * Math.cos(tilt),
  };
}

const controlStyle = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-gold/40 hover:bg-gold/10 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:opacity-40 motion-reduce:transition-none";

export default function HeroOrbit() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [interactionVersion, setInteractionVersion] = useState(0);
  const resumeAt = useRef(0);
  const [focused, setFocused] = useState(false);
  const rotation = useMotionValue(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 45, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 45, damping: 22 });
  const activePoint = nodePosition(CAPABILITIES[active].track, CAPABILITIES[active].angle);
  const canMove = reducedMotion === false && !paused && !focused && pageVisible && inView;

  useEffect(() => {
    if (!canMove || focused) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % CAPABILITIES.length);
    }, Math.max(ROTATION_DELAY, resumeAt.current - Date.now()));
    return () => window.clearTimeout(timer);
  }, [active, canMove, focused, interactionVersion]);

  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState === "visible");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!canMove) {
      pointerX.set(0);
      pointerY.set(0);
    }
  }, [canMove, pointerX, pointerY]);

  useAnimationFrame((_, delta) => {
    if (canMove) rotation.set((rotation.get() + Math.min(delta, 64) / 1000 * 3) % 360);
  });

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!canMove || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
  };

  const select = (index: number) => {
    resumeAt.current = Date.now() + INTERACTION_DELAY;
    setInteractionVersion((value) => value + 1);
    setActive((index + CAPABILITIES.length) % CAPABILITIES.length);
  };

  return (
    <div ref={root} role="region" aria-label="Leadership expertise network" onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} className="relative flex w-full min-w-0 max-w-[500px] flex-col items-center font-sans tracking-normal">
      <div
        className="relative aspect-square w-full max-w-[304px] overflow-hidden sm:max-w-[356px] min-[1180px]:max-w-[min(360px,45svh)]"
        onPointerMove={onPointerMove}
        onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      >
        <div aria-hidden="true" className="absolute inset-[16%] rounded-full bg-gold/15 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-[25%] rounded-full bg-amber-500/10 blur-2xl" />
        <motion.div className="absolute inset-0" style={{ x: reducedMotion ? 0 : x, y: reducedMotion ? 0 : y }}>
          <svg role="group" aria-label="Six expertise nodes" viewBox="0 0 520 520" className="block h-full w-full overflow-hidden text-black dark:text-white">
            <defs>
              <radialGradient id="aaCoreGlow" cx="50%" cy="45%" r="62%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.25" />
                <stop offset="58%" stopColor="#D4AF37" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#080C14" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="activeConnection" x1="260" y1="260" x2={activePoint.x} y2={activePoint.y} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#080C14" stopOpacity="0.1" />
                <stop offset="62%" stopColor="#C5A059" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#DFB76C" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <circle cx="260" cy="260" r="130" fill="url(#aaCoreGlow)" />
            <motion.g style={{ rotate: rotation, originX: "260px", originY: "260px" }}>
              {TRAJECTORIES.map((orbit, index) => (
                <ellipse
                  key={orbit.tilt}
                  cx="260" cy="260" rx={orbit.rx} ry={orbit.ry}
                  transform={`rotate(${orbit.tilt} 260 260)`}
                  fill="none"
                  stroke={index === 1 ? "#C5A059" : "#DFB76C"}
                  strokeOpacity={index === 1 ? 0.38 : 0.28}
                  strokeWidth="1.15"
                />
              ))}
              {TRAJECTORIES.map((orbit, index) => (
                <ellipse
                  key={`${orbit.tilt}-shadow`}
                  cx="260" cy="260" rx={orbit.rx - 18} ry={orbit.ry - 10}
                  transform={`rotate(${orbit.tilt} 260 260)`}
                  fill="none"
                  stroke="#E5C378"
                  strokeOpacity={0.08}
                  strokeWidth="0.8"
                />
              ))}
              <line
                x1="260" y1="260" x2={activePoint.x} y2={activePoint.y}
                stroke="url(#activeConnection)" strokeOpacity="0.85" strokeWidth="1.25"
              />
              {CAPABILITIES.map((item, index) => {
                const point = nodePosition(item.track, item.angle);
                const selected = index === active;
                return (
                  <g key={item.id} role="button" tabIndex={0} aria-label={`${item.id}: ${item.shortLabel}`} aria-pressed={selected} onClick={() => select(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(index); } }} className="group cursor-pointer outline-none">
                    <title>{item.shortLabel}</title>
                    <circle cx={point.x} cy={point.y} r="40" fill="transparent" />
                    {selected ? (
                      <circle cx={point.x} cy={point.y} r="21" fill="#C5A059" opacity="0.2" />
                    ) : null}
                    <circle cx={point.x} cy={point.y} r="17" fill="none" stroke="#DFB76C" strokeWidth="2" className="opacity-0 group-focus-visible:opacity-100" />
                    <circle cx={point.x} cy={point.y} r={selected ? 11 : 7} fill="#0E131F" stroke={selected ? "#DFB76C" : "#C5A059"} strokeOpacity={selected ? 1 : 0.75} strokeWidth={selected ? 1.6 : 1.1} />
                    <circle cx={point.x} cy={point.y} r={selected ? 3.5 : 2.15} fill={selected ? "#DFB76C" : "#C5A059"} />
                  </g>
                );
              })}
            </motion.g>
            <circle cx="260" cy="260" r="72" fill="#0E131F" fillOpacity="0.95" stroke="#C5A059" strokeOpacity="0.35" strokeWidth="12" />
            <circle cx="260" cy="260" r="66" fill="#0E131F" stroke="#F8FAFC" strokeOpacity="0.12" strokeWidth="1.15" />
            <circle cx="260" cy="260" r="55" fill="none" stroke="#C5A059" strokeOpacity="0.4" strokeWidth="0.8" />
            <path d="M 206 226 A 68 68 0 0 1 292 203" fill="none" stroke="#DFB76C" strokeOpacity="0.3" strokeWidth="1" />
            <text x="260" y="257" textAnchor="middle" dominantBaseline="middle" fontFamily="Instrument Serif, Georgia, serif" fontSize="64" fontWeight="400" letterSpacing="0" fill="currentColor">AA</text>
            <text x="260" y="304" textAnchor="middle" dominantBaseline="middle" fontFamily="Geist, Arial, sans-serif" fontSize="10" fontWeight="500" letterSpacing="1.8" fill="currentColor" opacity="0.9">LEADERSHIP</text>
          </svg>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[452px] overflow-hidden rounded-lg border border-white/10 bg-[#0E131F]/90 px-5 py-5 shadow-glass backdrop-blur-md sm:px-6">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,rgba(197,160,89,0.06),transparent_42%,rgba(223,183,108,0.04))]" />
        <div className="relative flex items-center justify-between gap-4 text-[11px] font-medium leading-5">
          <span className="tabular-nums text-slate-400"><span className="text-gold">{CAPABILITIES[active].id}</span> / 06</span>
          <span className="truncate uppercase tracking-wider text-gold">{CAPABILITIES[active].shortLabel}</span>
        </div>
        {/* Shared grid cells reserve room for every entry without truncating copy. */}
        <div aria-live={canMove && !focused ? "off" : "polite"} aria-atomic="true" className="relative mt-4 grid">
          {CAPABILITIES.map((item, index) => (
            <motion.div key={item.id} aria-hidden={index !== active} initial={false} animate={{ opacity: index === active ? 1 : 0, y: reducedMotion || index === active ? 0 : 8 }} transition={reducedMotion ? { duration: 0 } : informationTransition} className={`col-start-1 row-start-1 ${index === active ? "" : "pointer-events-none"}`}>
              <h2 className="max-w-[390px] text-[1.35rem] font-medium leading-[1.22] text-white sm:text-[1.45rem]">{item.title}</h2>
              <p className="mt-3 max-w-[410px] text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div role="group" aria-label="Choose expertise" className="relative mt-5 grid grid-cols-6 gap-2">
          {CAPABILITIES.map((item, index) => (
            <button key={item.id} type="button" onClick={() => select(index)} aria-label={`Show ${item.shortLabel}`} aria-pressed={index === active} title={item.shortLabel} className="group flex min-h-11 min-w-0 flex-col justify-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2">
              <span className={`text-[10px] font-medium tabular-nums transition-colors duration-300 motion-reduce:transition-none ${index === active ? "text-gold font-semibold" : "text-slate-400 group-hover:text-gold"}`}>{item.id}</span>
              <span className={`h-px w-full transition-all duration-500 motion-reduce:transition-none ${index === active ? "bg-gold" : "bg-white/10 group-hover:bg-gold/40"}`} />
            </button>
          ))}
        </div>
        <div role="group" aria-label="Explore capabilities" className="relative mt-1 flex items-center justify-between border-t border-white/10 pt-3">
          <button type="button" onClick={() => select(active - 1)} aria-label="Previous capability" title="Previous capability" className={controlStyle}>
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => setPaused((value) => !value)} disabled={!!reducedMotion} aria-label={reducedMotion ? "Motion disabled by your preference" : paused ? "Resume expertise rotation and orbital motion" : "Pause expertise rotation and orbital motion"} title={reducedMotion ? "Motion disabled by your preference" : paused ? "Resume animation" : "Pause animation"} className={controlStyle}>
            {paused || reducedMotion ? <Play aria-hidden="true" className="h-3.5 w-3.5" /> : <Pause aria-hidden="true" className="h-3.5 w-3.5" />}
          </button>
          <button type="button" onClick={() => select(active + 1)} aria-label="Next capability" title="Next capability" className={controlStyle}>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
