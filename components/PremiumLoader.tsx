"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const INITIAL_LOAD_MS = 1500;
const ROUTE_LOAD_MS = 760;

export default function PremiumLoader() {
  const pathname = usePathname();
  const didMount = useRef(false);
  const [visible, setVisible] = useState(true);
  const [settling, setSettling] = useState(false);

  useEffect(() => {
    const loadTime = didMount.current ? ROUTE_LOAD_MS : INITIAL_LOAD_MS;
    didMount.current = true;
    setVisible(true);
    setSettling(false);

    const settleTimer = window.setTimeout(() => setSettling(true), loadTime - 260);
    const hideTimer = window.setTimeout(() => setVisible(false), loadTime);

    return () => {
      window.clearTimeout(settleTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className={`premium-loader fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030712] transition-opacity duration-300 ${
        settling ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="premium-loader__grid absolute inset-0" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/[0.08] blur-[120px]" />
      <div className="absolute right-[8%] top-[14%] h-[360px] w-[360px] rounded-full bg-brand-gold/[0.09] blur-[110px]" />
      <div className="absolute bottom-[8%] left-[10%] h-[320px] w-[320px] rounded-full bg-brand-emerald/[0.07] blur-[110px]" />

      <div className="relative flex w-[min(86vw,420px)] flex-col items-center">
        <div className="premium-loader__halo relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
          <div className="premium-loader__ring premium-loader__ring--outer" />
          <div className="premium-loader__ring premium-loader__ring--middle" />
          <div className="premium-loader__ring premium-loader__ring--inner" />
          <div className="premium-loader__scan" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_48px_rgba(0,210,255,0.24)] backdrop-blur-xl sm:h-28 sm:w-28">
            <div className="absolute inset-[5px] rounded-full border border-brand-gold/35" />
            <Image
              src="/logo.png"
              alt="Aaqib Alvi"
              width={88}
              height={88}
              priority
              className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-brand-cyan">
            Executive Platform
          </p>
          <h2
            className="mt-3 text-2xl font-black uppercase leading-none tracking-[0.16em] text-white sm:text-3xl"
            style={{ fontFamily: "Outfit, system-ui, sans-serif" }}
          >
            Aaqib Alvi
          </h2>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-brand-gold/90">
            AI Readiness | Innovation | Impact
          </p>
        </div>

        <div className="mt-8 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">
          <div className="premium-loader__progress h-full rounded-full" />
        </div>
      </div>
    </div>
  );
}
