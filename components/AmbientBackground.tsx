"use client";

import React from "react";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% -20%, rgba(39,107,109,0.045) 0%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background: "linear-gradient(to top, rgba(246,245,241,0.86) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[120px]"
        style={{
          background: "linear-gradient(to bottom, rgba(246,245,241,0.78) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
