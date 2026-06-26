"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="px-6 pb-12 pt-4">
      <div className="max-w-[920px] mx-auto">
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-[12px] text-[#555] tracking-wide text-center sm:text-left">
            &copy; 2026 Sagar
          </p>

          <div className="flex items-center gap-6 sm:gap-5">
            <a
              href="https://github.com/Sagar2-1o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sagar2-1o/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
