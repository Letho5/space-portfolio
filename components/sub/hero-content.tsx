"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack AI Engineer
          </h1>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={slideInFromLeft(0.4)}
          className="text-gray-400 text-lg md:text-xl mt-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name with Glow */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl md:text-6xl lg:text-7xl font-bold subtitle-glow"
        >
          Lethukuthula Mthiyane
        </motion.h1>

        {/* Tagline */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="flex flex-col gap-6 mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Transforming{" "}
            <span className="text-highlight">
              Ideas
            </span>{" "}
            Into Intelligent Solutions
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I exist at the intersection where data meets design, where algorithms 
          meet user experience. I build end-to-end intelligent systems that don&apos;t 
          just run — they learn, adapt, and solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <a
            href="#projects"
            className="py-3 px-8 button-glow text-center text-white cursor-pointer rounded-lg font-semibold"
          >
            View My Work
          </a>
          <a
            href="mailto:lethukuthulanothandomthiyane@gmail.com"
            className="py-3 px-8 button-outline-glow text-center cursor-pointer rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <HiOutlineMail className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-wrap gap-6 md:gap-10 mt-8"
        >
          <div className="text-center">
            <p className="stats-number text-3xl md:text-4xl font-bold">4+</p>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div className="text-center">
            <p className="stats-number text-3xl md:text-4xl font-bold">3+</p>
            <p className="text-gray-400 text-sm">Certifications</p>
          </div>
          <div className="text-center">
            <p className="stats-number text-3xl md:text-4xl font-bold">2</p>
            <p className="text-gray-400 text-sm">Degrees</p>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};