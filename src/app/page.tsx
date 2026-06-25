import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Patent from "@/components/Patent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";

import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      {/* Premium Background */}
      <BackgroundGrid />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sections Container */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Achievements />
        <Projects />
        <Patent />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
