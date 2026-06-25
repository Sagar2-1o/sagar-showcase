"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="px-6 pb-12 pt-4">
      <div className="max-w-[920px] mx-auto">
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#555] tracking-wide">
            &copy; 2026 Sagar
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Sagar2-1o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/sagar2-1o/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://peerlist.io/sagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white transition-colors duration-300"
              aria-label="Peerlist"
            >
              <SiPeerlist size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
