"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import GlowCard from "./GlowCard";

// Import unique screenshot assets
import fliqr1 from "@/assets/Fliqr/1.png";
import fliqr2 from "@/assets/Fliqr/2.png";
import fliqr3 from "@/assets/Fliqr/3.png";
import fliqr4 from "@/assets/Fliqr/4.png";
import fliqr5 from "@/assets/Fliqr/5.png";
import fliqr6 from "@/assets/Fliqr/6.png";
import fliqr7 from "@/assets/Fliqr/7.png";

import citysudhaar1 from "@/assets/CITYSudhaar/1.png";
import citysudhaar2 from "@/assets/CITYSudhaar/2.png";
import citysudhaar3 from "@/assets/CITYSudhaar/3.png";
import citysudhaar4 from "@/assets/CITYSudhaar/4.png";

import blogify1 from "@/assets/Blogify/1.png";
import blogify2 from "@/assets/Blogify/2.png";
import blogify3 from "@/assets/Blogify/3.png";
import blogify4 from "@/assets/Blogify/4.png";

const projects = [
  {
    title: "Fliqr",
    tech: "Kotlin",
    description:
      "AI-powered flashcard generation app using Groq API, Room Database, and MVVM architecture.",
    link: "https://github.com/Sagar2-1o/Fliqr",
    imagePath: "/assets/Fliqr.png",
    screenshots: [
      fliqr1.src,
      fliqr2.src,
      fliqr3.src,
      fliqr4.src,
      fliqr5.src,
      fliqr6.src,
      fliqr7.src,
    ],
  },
  {
    title: "CitySudhaar",
    tech: "Android",
    description:
      "Citizen issue reporting platform with image upload, category tagging, and real-time status tracking.",
    link: "https://github.com/CITYSudhaar/CITYSudhaar4",
    imagePath: "/assets/CITYSudhaar.png",
    screenshots: [
      citysudhaar1.src,
      citysudhaar2.src,
      citysudhaar3.src,
      citysudhaar4.src,
    ],
  },
  {
    title: "My Blogs",
    tech: "Kotlin",
    description:
      "Firebase-powered blogging app to create, view, and share posts with a clean Material Design interface.",
    link: "https://github.com/Sagar2-1o/MyBlogs-Mobile",
    imagePath: "/assets/Blogify.png",
    screenshots: [
      blogify1.src,
      blogify2.src,
      blogify3.src,
      blogify4.src,
    ],
  },
];

const filters = ["All Projects"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammatic = useRef(false);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All Projects") return true;
    return p.tech === activeFilter;
  });

  // Scroll to index programmatically
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      isProgrammatic.current = true;
      const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft) || 0;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft - paddingLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
      
      // Reset programmatic flag after scrolling finishes
      setTimeout(() => {
        isProgrammatic.current = false;
      }, 500);
    }
  };

  // Reset index when filter changes
  useEffect(() => {
    scrollToIndex(0);
  }, [activeFilter]);

  // Handle manual scroll to update dots index
  const handleScroll = () => {
    if (isProgrammatic.current || !containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft) || 0;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    Array.from(container.children).forEach((child, index) => {
      const childOffset = (child as HTMLElement).offsetLeft - container.offsetLeft - paddingLeft;
      const distance = Math.abs(childOffset - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== currentIndex && closestIndex < filteredProjects.length) {
      setCurrentIndex(closestIndex);
    }
  };

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    scrollToIndex(nextIndex);
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 px-6 overflow-hidden bg-[#0a0a14]">
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(0, 229, 204, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top & Bottom Borders with soft fades at the edges */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5CC]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5CC]/40 to-transparent" />

      <div className="max-w-[920px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[28px] md:text-5xl font-extrabold text-white tracking-tight"
          >
            Projects
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 border-b border-[#111] pb-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative transition-all duration-300 flex items-center justify-center
                             h-[44px] rounded-full px-5 text-[14px] font-medium border
                             md:h-auto md:rounded-none md:px-4 md:py-2 md:text-xs md:text-sm md:font-medium md:tracking-wide md:uppercase md:border-0
                             ${isActive 
                               ? "text-[#00E5CC] border-[#00E5CC]/30 bg-[#00E5CC]/5 md:bg-transparent md:border-0" 
                               : "text-[#555] hover:text-[#888] border-[#222] bg-[#111]/45 md:bg-transparent md:border-0"
                             }`}
                >
                  {filter}
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5CC] hidden md:block"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="w-full flex gap-4 md:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-0 md:px-[115px] py-4 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="shrink-0 w-full md:w-[690px] snap-center"
                >
                  <GlowCard 
                    className="h-auto md:h-[450px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-[#00E5CC]/40 transition-all duration-500 overflow-hidden group rounded-2xl relative backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
                    glowColor="rgba(0, 229, 204, 0.06)"
                  >
                    {/* Large Faded Project Number */}
                    <div 
                      className="absolute top-4 right-4 md:right-6 text-[80px] md:text-[120px] font-extrabold leading-none select-none pointer-events-none tracking-tighter z-0"
                      style={{ color: "rgba(255, 255, 255, 0.06)" }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Top Content Row */}
                    <div className="flex justify-between items-start w-full relative z-10">
                      {/* Small Arrow Icon (↗) Link Button */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] hover:border-[#00E5CC]/50 text-[#888] hover:text-white transition-all duration-300 transform active:scale-95 mb-3 md:mb-[16px]
                                   w-full md:w-auto h-[44px] md:h-9 rounded-full md:rounded-lg px-5 md:px-3 text-[14px] md:text-xs font-semibold"
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    {/* Text block (tag, title, description) */}
                    <div className="w-full relative z-10 mt-1">
                      <span className="inline-block text-[10px] font-mono font-semibold tracking-widest text-[#00E5CC] bg-[#00E5CC]/10 border border-[#00E5CC]/25 rounded-md px-2 py-0.5 mb-[6px] uppercase">
                        {project.tech}
                      </span>
                      <h3 className="text-[22px] md:text-[28px] font-bold text-white mb-2 md:mb-[10px] leading-tight tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-[12px] text-[#bbb] leading-relaxed line-clamp-2 md:line-clamp-1 max-w-[520px] mb-0">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Ticker Area */}
                    <div className="w-full relative z-10 mt-4 md:mt-6 pt-2">
                      {project.screenshots && project.screenshots.length > 0 ? (
                        <div 
                          className="w-full overflow-hidden h-[200px] md:h-[280px]"
                          style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                          }}
                        >
                          <div className="flex animate-marquee-left whitespace-nowrap">
                            {project.screenshots.map((src, i) => (
                              <img
                                key={`set1-${i}`}
                                src={src}
                                alt={`${project.title} Screenshot`}
                                loading="lazy"
                                className="h-[200px] md:h-[280px] w-auto rounded-[8px] shadow-md mx-1.5 md:mx-2 object-contain"
                              />
                            ))}
                            {project.screenshots.map((src, i) => (
                              <img
                                key={`set2-${i}`}
                                src={src}
                                alt={`${project.title} Screenshot Duplicate`}
                                loading="lazy"
                                className="h-[200px] md:h-[280px] w-auto rounded-[8px] shadow-md mx-1.5 md:mx-2 object-contain"
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="h-[200px] md:h-[280px] w-full border border-dashed border-white/5 rounded-[8px] flex items-center justify-center bg-white/[0.01]">
                          <span className="text-[11px] font-mono text-white/20 select-none">
                            Preview gallery coming soon
                          </span>
                        </div>
                      )}
                    </div>

                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <div className="w-full py-12 flex flex-col items-center justify-center text-center">
                <p className="text-[#555] text-sm font-mono">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Pagination & Next Project Button */}
        {filteredProjects.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 md:mt-8 pt-4 border-t border-[#111]">
            <div className="text-[11px] font-mono text-[#444] tracking-widest uppercase select-none hidden md:block">
              Project Showcase
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 min-h-[44px] flex items-center ${
                    currentIndex === idx ? "w-6 bg-[#00E5CC]" : "w-2.5 bg-[#222] hover:bg-[#444]"
                  }`}
                  style={{
                    height: "10px",
                  }}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Project Trigger */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-1.5 transition-all duration-300 group
                         h-[44px] rounded-full px-5 text-[14px] font-semibold bg-[#111] border border-[#222] text-[#888] hover:text-[#00E5CC] hover:border-[#00E5CC]/30
                         md:h-auto md:rounded-none md:p-0 md:bg-transparent md:border-0 md:text-white"
            >
              Next Project
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
