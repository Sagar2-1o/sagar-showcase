"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundGrid() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track window scroll
  const { scrollY } = useScroll();
  
  // Translate background grid slightly slower to create a premium parallax effect
  const y = useTransform(scrollY, [0, 5000], [0, -300]);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* Parallax Grid Pattern */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.015]"
        css-bg-pattern=""
      >
        <div 
          className="h-[150%] w-full"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* Dim ambient spotlights for premium look */}
      <div 
        className="absolute -top-[30%] left-[10%] h-[60%] w-[80%] rounded-full bg-blue-900/10 blur-[140px] opacity-40"
      />
      <div 
        className="absolute top-[40%] right-[-10%] h-[50%] w-[60%] rounded-full bg-indigo-900/10 blur-[130px] opacity-30"
      />
      <div 
        className="absolute bottom-[-10%] left-[-10%] h-[40%] w-[50%] rounded-full bg-blue-900/10 blur-[120px] opacity-35"
      />
    </div>
  );
}
