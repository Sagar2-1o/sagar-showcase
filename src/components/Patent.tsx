"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import GlowCard from "./GlowCard";

import nexhaleImg from "../assets/Nexhale.png";
import shelterImg from "../assets/MilitaryShelter.png";
import sheImg from "../assets/She.png";

const patents = [
  {
    title: "Nexhale — Handheld Personal Air Filtration Device",
    year: "2026",
    status: "Filed",
    description:
      "A wearable handheld air purifier with multi-stage H13 HEPA filtration and activated carbon filter, delivering clean air directly to the user in high-pollution environments. Rechargeable Li-ion battery with 4–9 hr runtime.",
    image: nexhaleImg,
  },
  {
    title: "Passive Climate-Adaptive Military Shelter System",
    year: "2026",
    status: "Filed",
    description:
      "A zero-electricity military shelter using Phase Change Materials (PCM), IR-reflective panels, and passive ventilation to maintain stable temperatures in extreme desert and high-altitude climates.",
    image: shelterImg,
  },
  {
    title: "SHE — AI-Enabled Shock-Based Self-Defense Footwear",
    year: "2026",
    status: "Filed",
    description:
      "An AI-assisted footwear module with false-trigger prevention architecture that delivers a non-lethal deterrent shock only upon intent detection, using multi-sensor fusion and gesture recognition.",
    image: sheImg,
  },
];

export default function Patent() {
  return (
    <section id="patent" className="py-16 md:py-20 px-6 bg-[#050505]">
      <div className="max-w-[920px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight"
        >
          Patents
        </motion.h2>

        {/* Patents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patents.map((pat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              className="h-full"
            >
              <GlowCard
                className="p-6 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full bg-[#111] border-[#222]"
                glowColor="rgba(0, 229, 204, 0.04)"
              >
                {/* Image Thumbnail */}
                <div className="w-full h-[150px] overflow-hidden rounded-lg mb-4 bg-[#161616] border border-[#1e1e1e] relative">
                  <img
                    src={pat.image.src}
                    alt={pat.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Status Badge & Year */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-0.5">
                    <BadgeCheck size={10} className="stroke-[2.5]" />
                    {pat.status}
                  </span>
                  <span className="text-[11px] text-[#555]">•</span>
                  <span className="text-[11px] text-[#666] font-medium">{pat.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-white mb-2 leading-tight">
                  {pat.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#888] leading-relaxed mb-4 flex-1">
                  {pat.description}
                </p>

                {/* Filed Location */}
                <p className="text-[11px] text-[#555] font-mono leading-relaxed mt-2 border-t border-[#1a1a1a] pt-3">
                  Filed at CBS • CGC Landran • 2026
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
