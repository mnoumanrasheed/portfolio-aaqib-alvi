"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INITIAL_LOAD_MS = 1500;

export default function PremiumLoader() {
  const [visible, setVisible] = useState(true);
  const [settling, setSettling] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if this is the first load
    const hasLoadedBefore = sessionStorage.getItem("premium-loader-shown");
    
    if (hasLoadedBefore) {
      // If already loaded in this session, don't show loader
      setVisible(false);
      setHasLoaded(true);
      return;
    }

    // Mark as loaded in session storage
    sessionStorage.setItem("premium-loader-shown", "true");

    // Show loader for initial load only
    const settleTimer = window.setTimeout(() => setSettling(true), INITIAL_LOAD_MS - 260);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      setHasLoaded(true);
    }, INITIAL_LOAD_MS);

    return () => {
      window.clearTimeout(settleTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible || hasLoaded) return null;

  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className={`premium-loader fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#080C14] transition-opacity duration-500 ${
        settling ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex w-[min(82vw,360px)] flex-col items-center">
        <Image
          src="/logo.png"
          alt="Aaqib Alvi"
          width={56}
          height={56}
          priority
          className="h-14 w-14 rounded-full border border-brand-gold/30 object-cover shadow-[0_0_20px_rgba(197,160,89,0.2)]"
        />

        <div className="mt-7 text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-brand-gold">
            Executive Portfolio
          </p>
          <h2
            className="mt-2 text-3xl font-normal leading-none text-white sm:text-4xl"
            style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
          >
            Aaqib Alvi
          </h2>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
            AI Readiness &bull; Innovation &bull; Impact
          </p>
        </div>

        <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
          <div className="premium-loader__progress h-full" />
        </div>
      </div>
    </div>
  );
}
