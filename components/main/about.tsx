"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  HiOutlineLocationMarker, 
  HiOutlineMail, 
  HiOutlinePhone,
  HiOutlineDownload,
  HiOutlineExternalLink
} from "react-icons/hi";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen py-20 px-6 md:px-20 relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold section-title-glow mb-16 text-center"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <Image
              src="/profile.png"
              alt="Lethukuthula Mthiyane"
              width={280}
              height={280}
              className="rounded-full profile-glow object-cover"
              draggable={false}
            />
            <div className="absolute -inset-4 rounded-full border border-[#A855F7]/30 animate-pulse" />
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <div className="contact-badge">
              <HiOutlineLocationMarker className="w-5 h-5" />
              <span>Sandton, South Africa</span>
            </div>
            <a 
              href="mailto:lethukuthulanothandomthiyane@gmail.com"
              className="contact-badge hover:border-[#A855F7] cursor-pointer"
            >
              <HiOutlineMail className="w-5 h-5" />
              <span className="text-sm">lethukuthulanothandomthiyane@gmail.com</span>
            </a>
            <a 
              href="tel:+27610120465"
              className="contact-badge hover:border-[#A855F7] cursor-pointer"
            >
              <HiOutlinePhone className="w-5 h-5" />
              <span>+27 61 012 0465</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="flex flex-col max-w-xl"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;m <span className="text-highlight">Lethukuthula Mthiyane</span> — a Full Stack AI Engineer who speaks fluent Python and JavaScript, and a Data Scientist who transforms raw chaos into intelligent systems.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            While others see two separate worlds, I see one seamless pipeline: from the database to the neural network to the pixel-perfect interface. I don&apos;t just build applications — I architect end-to-end intelligent experiences.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Currently crafting data-driven solutions at <span className="text-[#A855F7]">BCX</span>, I bring a unique ability to build the entire stack AND make it intelligent.
          </p>
          
          <p className="text-gray-300 italic mb-8">
            Creator at heart. Engineer by craft. Problem solver by obsession.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              download="Lethukuthula_Mthiyane_Resume.pdf"
              className="resume-btn button-glow"
            >
              <HiOutlineDownload className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn button-outline-glow"
            >
              <HiOutlineExternalLink className="w-5 h-5" />
              View Resume
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="stats-card">
              <h4 className="text-[#A855F7] font-semibold mb-3 text-lg">Experience</h4>
              <div className="text-left space-y-2 text-sm">
                <div>
                  <p className="text-white font-medium">Data Scientist Intern</p>
                  <p className="text-gray-400">BCX • Current</p>
                </div>
                <div>
                  <p className="text-white font-medium">Data Science Trainee</p>
                  <p className="text-gray-400">Explore AI • Previous</p>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <h4 className="text-[#A855F7] font-semibold mb-3 text-lg">Education</h4>
              <div className="text-left space-y-2 text-sm">
                <div>
                  <p className="text-white font-medium">BSc Honours Computing</p>
                  <p className="text-gray-400">UNISA • Expected 2026</p>
                </div>
                <div>
                  <p className="text-white font-medium">BSc Computer Science & Physics</p>
                  <p className="text-gray-400">University of Zululand</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-[#A855F7] font-semibold mb-3">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">IT Systems Development (NQF 5)</span>
              <span className="tech-badge">AI Bootcamp Certificate</span>
              <span className="tech-badge">Google Data Analytics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};