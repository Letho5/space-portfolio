"use client";

import { motion } from "framer-motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
} from "@/constants";

export const Skills = () => {
  const allSkills = [...FRONTEND_SKILL, ...BACKEND_SKILL, ...FULLSTACK_SKILL];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center relative overflow-hidden py-20"
    >
      {/* 3D Sphere Video - FULLY VISIBLE */}
      <div className="w-full flex items-center justify-center">
        <video
          className="w-full max-w-5xl h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Statement in Rose Gold */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="statement-glossy text-xl md:text-2xl lg:text-3xl text-center max-w-3xl px-6 mt-12 mb-16 leading-relaxed font-medium"
      >
        Creator at heart. I love watching ideas come to life, seeing hard work yield results. But above all — teamwork makes the dream work.
      </motion.p>

      {/* Skills - Consecutive Animation */}
      <div className="flex flex-row justify-center flex-wrap gap-6 items-center max-w-5xl px-6">
        {allSkills.map((skill, i) => (
          <motion.div
            key={skill.skill_name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};