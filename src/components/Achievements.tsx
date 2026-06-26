"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import nexhaleImg from "../assets/Nexhale.png";
import shelterImg from "../assets/MilitaryShelter.png";
import sheImg from "../assets/She.png";
import buildImg from "../assets/BuiltWithIndia.png";
import hackImg from "../assets/D4Com.png";
import nsdImg from "../assets/NSD.jpeg";
import sih2025Img from "../assets/SIH2025.png";

const achievements = [
  {
    title: "Nexhale — Handheld Personal Air Filtration Device",
    tech: "Patent",
    description:
      "A wearable handheld air purifier with multi-stage HEPA filtration, reducing reliance on masks in high-pollution environments.",
    link: { label: "Patent Details", href: "#patent" },
    image: nexhaleImg,
  },
  {
    title: "Passive Climate-Adaptive Military Shelter System",
    tech: "Patent",
    description:
      "A zero-electricity shelter using PCM layers and passive ventilation, designed for extreme desert and high-altitude climates.",
    link: { label: "Patent Details", href: "#patent" },
    image: shelterImg,
  },
  {
    title: "SHE — AI-Enabled Shock-Based Self-Defense Footwear",
    tech: "Patent",
    description:
      "An AI-assisted footwear module with false-trigger prevention that delivers a non-lethal deterrent shock only on intent detection.",
    link: { label: "Patent Details", href: "#patent" },
    image: sheImg,
  },
  {
    title: "Smart India Hackathon 2025 — Semi-Finalist",
    tech: "Hackathon",
    description:
      "Advanced to SIH 2025 semi-finals with CitySudhaar, a Kotlin and Firebase based civic issue reporting app with real-time tracking and analytics.",
    link: { label: "Certificate", href: sih2025Img.src },
    image: sih2025Img,
  },
  {
    title: "BuildWithIndia — Top 5,000 / 25,000 Teams",
    tech: "Hackathon",
    description:
      "Placed in the top 5,000 out of 25,000 teams, reaching the finale held at Google Office.",
    link: { label: "Certificate", href: buildImg.src },
    image: buildImg,
  },
  {
    title: "Hack-N-Win 3.0 — D4 Community x CGC University",
    tech: "Hackathon",
    description:
      "Participated in a platform for innovation and technological excellence, March 2026.",
    link: { label: "Certificate", href: hackImg.src },
    image: hackImg,
  },
  {
    title: "National Science Day — 1st Place",
    tech: "Achievement",
    description:
      "Secured 1st place for SpaceHub, an interactive space exploration platform recognized for practical design and scientific implementation.",
    link: { label: "Certificate", href: nsdImg.src },
    image: nsdImg,
  },
];

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* Auto-advance every 3 seconds, looping through all items */
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [goToNext, activeIndex]); // activeIndex in deps resets timer on manual click

  return (
    <section id="achievements" className="py-12 md:py-20 px-6">
      <div className="max-w-[920px] mx-auto">
        {/* Section Title */}
        <h2 className="text-[28px] md:text-4xl font-bold text-white mb-10 md:mb-14 tracking-tight">
          Things I&apos;m Proud Of
        </h2>

        {/* Mobile Layout: stacked vertically */}
        {/* Desktop Layout: Three-Column Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch lg:items-center">
          
          {/* Dots Navigation — horizontal row on mobile, vertical on desktop */}
          <div className="lg:col-span-1 flex justify-center lg:justify-center items-center order-1 lg:order-none">
            {/* Mobile: horizontal dots */}
            <div className="flex lg:hidden gap-2 items-center">
              {achievements.map((_, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative z-10 w-3 h-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-300`}
                    aria-label={`Go to item ${idx + 1}`}
                  >
                    <span className={`block w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#00E5CC] bg-[#00E5CC] scale-110"
                        : "border-[#444] bg-[#0a0a0a] hover:border-[#666]"
                    }`} />
                  </button>
                );
              })}
            </div>
            {/* Desktop: vertical dots */}
            <div className="hidden lg:flex h-[240px] w-[1px] bg-[#222] relative flex-col justify-between items-center py-1">
              {achievements.map((_, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative z-10 w-3 h-3 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#00E5CC] bg-[#00E5CC] scale-110"
                        : "border-[#444] bg-[#0a0a0a] hover:border-[#666]"
                    }`}
                    aria-label={`Go to item ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Title and Description — center on mobile */}
          <div className="lg:col-span-6 flex flex-col justify-center min-h-[200px] md:min-h-[260px] order-2 lg:order-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {/* Category Badge */}
                <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#00E5CC] bg-[#00E5CC]/10 border border-[#00E5CC]/20 rounded-full px-3 py-1 mb-4 w-fit">
                  {achievements[activeIndex].tech}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">
                  {achievements[activeIndex].title}
                </h3>
                
                {/* Description */}
                <p className="text-[13px] md:text-[14.5px] text-[#888] leading-relaxed mb-5 md:mb-6">
                  {achievements[activeIndex].description}
                </p>

                {/* Link */}
                <a
                  href={achievements[activeIndex].link.href}
                  target={achievements[activeIndex].tech === "Patent" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#00E5CC] hover:text-[#33ffeb] transition-colors w-fit min-h-[44px]"
                >
                  {achievements[activeIndex].link.label}
                  <ExternalLink size={12} className="stroke-[2.5]" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Card — full width on mobile, at bottom */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-3 lg:order-none w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-full md:max-w-[320px] bg-[#111] border border-[#222] rounded-2xl p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Top: Card Image or Plain Dark Rectangle Image Placeholder */}
                {achievements[activeIndex].image ? (
                  <div className="w-full h-[180px] md:h-[220px] overflow-hidden rounded-xl mb-3 md:mb-4 bg-[#161616] border border-[#1e1e1e] relative">
                    <img
                      src={achievements[activeIndex].image.src}
                      alt={achievements[activeIndex].title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[180px] md:h-[220px] bg-[#161616] border border-[#1e1e1e] rounded-xl mb-3 md:mb-4" />
                )}

                {/* Bottom: Item Details */}
                <div>
                  <h4 className="text-[14px] md:text-[15px] font-bold text-white mb-1.5 leading-tight">
                    {achievements[activeIndex].title}
                  </h4>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#00E5CC]">
                    {achievements[activeIndex].tech}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
