"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen py-20 px-6 md:px-20"
    >
      <div className="flex flex-col items-center max-w-2xl w-full">
        {/* Profile Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
        >
          <Image
            src="/profile.png"
            alt="Lethukuthula Mthiyane"
            width={180}
            height={180}
            className="rounded-full profile-glow object-cover"
            draggable={false}
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mt-8"
        >
          Lethukuthula Mthiyane
        </motion.h2>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 mt-2"
        >
          Data Scientist & AI Engineer
        </motion.p>

        {/* Credentials */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  viewport={{ once: true }}
  className="text-center mt-8 space-y-1"
>
  <p className="text-gray-300">
    Currently at <span className="text-white font-medium">CAPACITI</span>. 
    Previously <span className="text-white font-medium">BCX</span>.
  </p>
  <p className="text-gray-500">
    BSc Computer Science & Physics. BSc Honours Computing (2026).
  </p>
</motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="/resume.pdf"
            download="Lethukuthula_Mthiyane_Resume.pdf"
            className="inline-flex items-center gap-2 py-3 px-8 button-glow rounded-lg font-semibold text-white"
          >
            <HiOutlineDownload className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mt-10"
        >
          <a
            href="https://github.com/Letho5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon-glow"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lethukuthulamthiyane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon-glow"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:lethukuthulanothandomthiyane@gmail.com"
            aria-label="Email"
            className="social-icon-glow"
          >
            <FiMail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};