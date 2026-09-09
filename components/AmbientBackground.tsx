"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Top golden radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(197, 160, 89, 0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 90% 40%, rgba(212, 175, 55, 0.04) 0%, transparent 60%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background: "linear-gradient(to top, rgba(8, 12, 20, 0.95) 0%, transparent 100%)",
        }}
      />
      {/* Top subtle navbar shadow fade */}
      <div
        className="absolute inset-x-0 top-0 h-[120px]"
        style={{
          background: "linear-gradient(to bottom, rgba(8, 12, 20, 0.85) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
