'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center group"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          <div className="hidden md:flex flex-col ml-3">
            <span className="font-bold text-white nav-name-glow text-lg">
              Lethukuthula Mthiyane
            </span>
            <span className="text-xs text-gray-400">
              Full Stack AI Engineer
            </span>
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[450px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[#A855F7] transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}

            {/* GitHub */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[#A855F7] transition-colors duration-300"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              title={name}
            >
              <Icon className="h-6 w-6 social-icon-glow" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl hover:text-[#A855F7] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-md p-6 flex flex-col items-center text-gray-300 md:hidden border-t border-[rgba(112,66,248,0.2)]">
          {/* Name for Mobile */}
          <div className="flex flex-col items-center mb-6 pb-6 border-b border-[rgba(112,66,248,0.2)] w-full">
            <span className="font-bold text-white subtitle-glow text-xl">
              Lethukuthula Mthiyane
            </span>
            <span className="text-sm text-gray-400 mt-1">
              Full Stack AI Engineer
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[#A855F7] transition-colors text-center text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[#A855F7] transition-colors text-center text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-[rgba(112,66,248,0.2)] w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                title={name}
              >
                <Icon className="h-8 w-8 social-icon-glow" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};