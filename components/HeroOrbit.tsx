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

const CAPABILITIES = [
  { label: "AI & Digital Readiness", track: 0, angle: -55 },
  { label: "Sustainability & Climate Adaptation", track: 1, angle: 18 },
  { label: "EdTech & STEAM Learning", track: 2, angle: 85 },
  { label: "Program & Project Management", track: 0, angle: 145 },
  { label: "Business Development & Stakeholder Engagement", track: 1, angle: 230 },
] as const;

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

const controlStyle = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan focus-visible:outline-offset-2 disabled:opacity-40 motion-reduce:transition-none";

export default function HeroOrbit() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const rotation = useMotionValue(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 45, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 45, damping: 22 });
  const activePoint = nodePosition(CAPABILITIES[active].track, CAPABILITIES[active].angle);
  const canMove = reducedMotion === false && !paused && pageVisible && inView;

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

  const select = (direction: number) => {
    setActive((current) => (current + direction + CAPABILITIES.length) % CAPABILITIES.length);
  };

  return (
    <div ref={root} role="region" aria-label="Leadership expertise network" className="relative flex w-full min-w-0 max-w-[500px] flex-col items-center font-sans tracking-normal">
      <div
        className="relative aspect-square w-full max-w-[440px] overflow-hidden lg:max-w-[min(440px,60svh)]"
        onPointerMove={onPointerMove}
        onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      >
        <motion.div className="absolute inset-0" style={{ x: reducedMotion ? 0 : x, y: reducedMotion ? 0 : y }}>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 520 520" className="block h-full w-full overflow-hidden">
            <motion.g style={{ rotate: rotation, originX: "260px", originY: "260px" }}>
              {TRAJECTORIES.map((orbit, index) => (
                <ellipse
                  key={orbit.tilt}
                  cx="260" cy="260" rx={orbit.rx} ry={orbit.ry}
                  transform={`rotate(${orbit.tilt} 260 260)`}
                  fill="none"
                  stroke={index === 1 ? "#C5A96A" : "#89AFC6"}
                  strokeOpacity={index === 1 ? 0.24 : 0.3}
                  strokeWidth="1"
                />
              ))}
              <line
                x1="260" y1="260" x2={activePoint.x} y2={activePoint.y}
                stroke="#B7CFDC" strokeOpacity="0.55" strokeWidth="1"
              />
              {CAPABILITIES.map((item, index) => {
                const point = nodePosition(item.track, item.angle);
                const selected = index === active;
                return (
                  <g key={item.label}>
                    <circle cx={point.x} cy={point.y} r={selected ? 10 : 7} fill="#0B1726" stroke={selected ? "#E2D3AC" : "#89AFC6"} strokeOpacity={selected ? 0.9 : 0.65} strokeWidth="1" />
                    <circle cx={point.x} cy={point.y} r={selected ? 3 : 2} fill={selected ? "#F3EFE5" : "#89AFC6"} />
                  </g>
                );
              })}
            </motion.g>
            <circle cx="260" cy="260" r="63" fill="#0B1726" stroke="#89AFC6" strokeOpacity="0.25" strokeWidth="1" />
            <path d="M 207 226 A 63 63 0 0 1 290 205" fill="none" stroke="#F3EFE5" strokeOpacity="0.25" strokeWidth="1" />
            <text x="260" y="263" textAnchor="middle" dominantBaseline="middle" fontFamily="Instrument Serif, Georgia, serif" fontSize="60" fontWeight="400" letterSpacing="0" fill="#F3EFE5">AA</text>
          </svg>
        </motion.div>
      </div>

      <div className="w-full max-w-[440px] border-t border-white/15 pt-4">
        <p aria-live="polite" aria-atomic="true" className="mx-auto flex min-h-[60px] max-w-[360px] items-center justify-center px-3 text-center text-[15px] font-medium leading-6 text-white">
          {CAPABILITIES[active].label}
        </p>
        <div role="group" aria-label="Explore capabilities" className="mt-1 flex items-center justify-center gap-3">
          <button type="button" onClick={() => select(-1)} aria-label="Previous capability" title="Previous capability" className={controlStyle}>
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => setPaused((value) => !value)} disabled={!!reducedMotion} aria-label={reducedMotion ? "Motion disabled by your preference" : paused ? "Resume orbital motion" : "Pause orbital motion"} title={reducedMotion ? "Motion disabled by your preference" : paused ? "Resume orbital motion" : "Pause orbital motion"} className={controlStyle}>
            {paused || reducedMotion ? <Play aria-hidden="true" className="h-3.5 w-3.5" /> : <Pause aria-hidden="true" className="h-3.5 w-3.5" />}
          </button>
          <button type="button" onClick={() => select(1)} aria-label="Next capability" title="Next capability" className={controlStyle}>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
