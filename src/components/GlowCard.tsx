"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  innerClassName?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.08)", // subtle blue
  onClick,
  style,
  innerClassName,
}: GlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={style}
      className={`group relative overflow-hidden rounded-xl border border-[#222] bg-[#111] transition-all duration-300 hover:border-[#333] hover:shadow-[0_0_25px_rgba(59,130,246,0.03)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className={`relative z-10 ${innerClassName || ""}`}>{children}</div>
    </div>
  );
}
