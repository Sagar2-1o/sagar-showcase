"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import GlowCard from "./GlowCard";

const contacts = [
  {
    icon: HiOutlineMail,
    platform: "Email",
    link: "mailto:sagark94165@gmail.com",
    display: "sagark94165@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/sagar2-1o/",
    display: "sagar2-1o",
  },
  {
    icon: FaGithub,
    platform: "GitHub",
    link: "https://github.com/Sagar2-1o",
    display: "Sagar2-1o",
  },
];

/* Entrance animations */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xrewplll", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden bg-black min-h-[700px] flex items-center">
      {/* Dark atmospheric moon/planet background image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none" />
      {/* Cinematic edge gradients to blend into the page */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/50 z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[2] pointer-events-none" />

      <div className="max-w-[920px] mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & 3 Stacked Contact Items */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col"
          >
            {/* Section Tag */}
            <span className="text-[11px] font-mono tracking-widest text-[#00E5CC] uppercase mb-4">
              Get In Touch
            </span>
            
            {/* Large Bold Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
              Getting in touch is easy!
            </h2>

            {/* 3 Comfortably Spaced Contact Items */}
            <div className="flex flex-col gap-5">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.platform}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <GlowCard
                      className="flex items-center gap-4 bg-[#0a0a0a]/60 backdrop-blur-md border border-[#1a1a1a] p-5 hover:border-[#00E5CC]/50 transition-all duration-300"
                      glowColor="rgba(0, 229, 204, 0.04)"
                    >
                      <div className="w-11 h-11 rounded-lg bg-[#161616]/80 border border-[#222] flex items-center justify-center text-[#666] group-hover:text-[#00E5CC] group-hover:border-[#00E5CC]/25 transition-all duration-300">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-[13.5px] font-bold text-white mb-0.5">
                          {contact.platform}
                        </p>
                        <p className="text-[12.5px] text-[#666] group-hover:text-[#999] transition-colors duration-200">
                          {contact.display}
                        </p>
                      </div>
                    </GlowCard>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Dark Semi-Transparent Box with Info/Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[420px] bg-[#111]/70 backdrop-blur-md border border-[#222] rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="text-[16px] font-bold text-white mb-1.5 leading-tight">
                Send a Message
              </h3>
              <p className="text-[12.5px] text-[#888] mb-6 leading-relaxed">
                Got an idea or opportunity? Let's talk.
              </p>

              {/* Form Fields */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#00E5CC]/15 border border-[#00E5CC]/30 flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-[15px] font-semibold text-white mb-2">Message sent!</p>
                  <p className="text-[13px] text-[#888]">I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="bg-[#0a0a0a]/90 border border-[#222] focus:border-[#00E5CC] text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors w-full mb-4 placeholder-[#555]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="bg-[#0a0a0a]/90 border border-[#222] focus:border-[#00E5CC] text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors w-full mb-4 placeholder-[#555]"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity"
                    rows={4}
                    className="bg-[#0a0a0a]/90 border border-[#222] focus:border-[#00E5CC] text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors w-full mb-6 resize-none placeholder-[#555]"
                    required
                  />
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#00E5CC] hover:bg-[#2ae8d1] text-black font-bold py-3 px-6 rounded-lg text-[13px] tracking-wide transition-all duration-300 transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "SENDING..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
