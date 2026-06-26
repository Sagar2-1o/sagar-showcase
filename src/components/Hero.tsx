"use client";

import { motion } from "framer-motion";

/* ── Floating geometric shapes config ── */
/* Desktop shapes: 6 total. On mobile: only 4, pinned to corners */
const desktopShapes = [
  { top: "12%", left: "8%", size: 18, delay: 0, dur: 5.5, y: [-6, 6, -6], x: [0, 4, 0] },
  { top: "18%", right: "14%", size: 14, delay: 0.3, dur: 6.2, y: [0, -8, 0], x: [-3, 3, -3] },
  { top: "55%", left: "18%", size: 20, delay: 0.6, dur: 5.8, y: [4, -6, 4], x: [2, -2, 2] },
  { top: "72%", right: "22%", size: 16, delay: 0.1, dur: 6.5, y: [-5, 5, -5], x: [0, -4, 0] },
  { bottom: "14%", left: "42%", size: 12, delay: 0.8, dur: 5.2, y: [0, 7, 0], x: [-2, 2, -2], mobileHide: true },
  { top: "38%", right: "6%", size: 22, delay: 0.4, dur: 6.0, y: [3, -5, 3], x: [3, 0, 3], mobileHide: true },
];

/* ── Side labels ── */
const sideTagline = "Computer Science Engineer • Android Developer";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center select-none h-screen pt-16 md:pt-0"
    >
      {/* ═══════════ GIANT BACKGROUND GHOST TEXT ═══════════ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[clamp(60px,18vw,280px)] font-extrabold leading-[0.85] tracking-tighter text-[#151515] uppercase whitespace-nowrap md:ml-[-2vw] ml-0 text-center"
        >
          ANDROID
          <br />
          DEV
        </motion.div>
      </div>

      {/* ═══════════ FLOATING GEOMETRIC SHAPES ═══════════ */}
      {desktopShapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: s.y,
            x: s.x,
          }}
          transition={{
            opacity: { delay: 0.4 + s.delay, duration: 0.6 },
            scale: { delay: 0.4 + s.delay, duration: 0.6 },
            y: { delay: 0.4 + s.delay, duration: s.dur, repeat: Infinity, ease: "easeInOut" },
            x: { delay: 0.4 + s.delay, duration: s.dur, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute z-[5] rounded-[4px] border-[1.5px] border-[#00E5CC] ${s.mobileHide ? "hidden md:block" : ""}`}
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
          }}
        />
      ))}

      {/* ═══════════ LEFT SIDE — VERTICAL TAGLINE ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 hidden md:block"
      >
        <p
          className="font-mono text-[10px] tracking-[0.3em] text-[#666] uppercase whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          {sideTagline}
        </p>
      </motion.div>

      {/* ═══════════ FOREGROUND HEADLINE ═══════════ */}
      <div className="relative z-20 px-6 w-full flex justify-center">
        <div className="w-full max-w-[920px] pl-0 md:pl-[12vw] text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(40px,7.5vw,96px)] font-extrabold text-white leading-[1.1] tracking-tight"
        >
          {/* Line 1: Hello with accent dot */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Hello
            <span className="text-[#00E5CC]">.</span>
          </motion.span>

          {/* Line 2: I am */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            I am
          </motion.span>

          {/* Line 3: Name */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Sagar
          </motion.span>
        </motion.h1>
        </div>
      </div>

      {/* ═══════════ BOTTOM SCROLL HINT ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#555] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-[#333]"
        />
      </motion.div>
    </section>
  );
}
