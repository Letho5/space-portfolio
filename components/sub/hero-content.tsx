"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
       {/* Profile Image - CHANGED TO PERFECT CIRCLE */}
<motion.div variants={slideInFromTop}>
  <Image
    src="/profile.png"
    alt="Lethukuthula Mthiyane"
    width={120}
    height={120}
    className="w-[120px] h-[120px] rounded-full profile-glow object-cover object-[50%_30%]"
    draggable={false}
  />
</motion.div>

        {/* Name with Platinum Glossy Effect */}
        <motion.h1
          variants={slideInFromLeft(0.4)}
          className="text-4xl md:text-6xl lg:text-7xl font-bold name-glossy"
        >
          Lethukuthula Mthiyane
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={slideInFromLeft(0.6)}
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 max-w-[600px]"
        >
          Data meets design.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="mt-4"
        >
          <a
            href="#projects"
            className="py-3 px-8 button-glow text-center text-white cursor-pointer rounded-lg font-semibold inline-block"
          >
            View My Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-8 md:gap-12 mt-10 opacity-80"
        >
          <div className="text-center">
            <p className="stats-number text-2xl md:text-3xl font-bold">4+</p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Projects</p>
          </div>
          <div className="text-center">
            <p className="stats-number text-2xl md:text-3xl font-bold">3+</p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Certifications</p>
          </div>
          <div className="text-center">
            <p className="stats-number text-2xl md:text-3xl font-bold">2</p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Degrees</p>
          </div>
        </motion.div>
      </div>

      {/* Hero Animation - UNTOUCHED */}
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