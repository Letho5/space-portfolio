import Link from "next/link";
import { 
  HiOutlineMail, 
  HiOutlineDownload,
  HiOutlineLocationMarker 
} from "react-icons/hi";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014] border-t border-[#2A0E61]/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Column 1: Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-white mb-5 subtitle-glow">Connect</h3>
            <div className="flex flex-col gap-4">
              <Link
                href="https://github.com/Letho5"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                <RxGithubLogo className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/lethukuthulamthiyane/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                <RxLinkedinLogo className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-white mb-5 subtitle-glow">Navigation</h3>
            <div className="flex flex-col gap-4">
              <Link
                href="#about-me"
                className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                About Me
              </Link>
              <Link
                href="#skills"
                className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-white mb-5 subtitle-glow">Contact</h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:lethukuthulanothandomthiyane@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                <HiOutlineMail className="w-5 h-5" />
                <span className="text-sm">Email Me</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <HiOutlineLocationMarker className="w-5 h-5" />
                <span className="text-sm">Sandton, South Africa</span>
              </div>
              <a
                href="/resume.pdf"
                download="Lethukuthula_Mthiyane_Resume.pdf"
                className="flex items-center gap-3 text-gray-400 hover:text-[#A855F7] transition-colors duration-300"
              >
                <HiOutlineDownload className="w-5 h-5" />
                <span className="text-sm">Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A855F7]/50 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © <span className="text-[#A855F7]">Lethukuthula Mthiyane</span> {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};