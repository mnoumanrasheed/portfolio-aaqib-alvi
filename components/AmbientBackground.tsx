"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Fine cinematic grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Deep radial vignette to push depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,180,255,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Hero-zone glow — top-left cyan bloom */}
      <div
        className="absolute top-[-8%] left-[-5%] w-[700px] h-[700px] rounded-full blur-[160px] animate-pulse-slow"
        style={{ background: "rgba(0,210,255,0.09)" }}
      />

      {/* Right side — gold bloom (counterbalance) */}
      <div
        className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] animate-pulse-slow"
        style={{ background: "rgba(212,175,55,0.08)", animationDelay: "2s" }}
      />

      {/* Mid-page emerald undertone */}
      <div
        className="absolute top-[50%] left-[30%] w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse-slow"
        style={{ background: "rgba(16,185,129,0.06)", animationDelay: "4s" }}
      />

      {/* Bottom atmospheric gradient */}
      <div
        className="absolute bottom-0 inset-x-0 h-[40vh]"
        style={{
          background:
            "linear-gradient(to top, rgba(3,7,18,0.9) 0%, transparent 100%)",
        }}
      />

      {/* Top fade (navbar integration) */}
      <div
        className="absolute top-0 inset-x-0 h-[120px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,7,18,0.7) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
