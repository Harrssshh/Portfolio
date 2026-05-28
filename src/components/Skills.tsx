"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "GitHub", icon: "👨‍💻" },
  { name: "Kubernetes", icon: "🚀" },
  { name: "C++", icon: "👨‍💻" },
  { name: "SQL", icon: "👨‍💻" },
];

export default function Skills() {
  // Duplicate skills to create a seamless infinite loop
  const duplicatedSkillsRow1 = [...skills, ...skills, ...skills];
  const duplicatedSkillsRow2 = [...skills].reverse();
  const duplicatedSkillsRow2Full = [...duplicatedSkillsRow2, ...duplicatedSkillsRow2, ...duplicatedSkillsRow2];

  return (
    <section id="skills" className="relative z-20 bg-transparent py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Tools & Tech</span>
          </h2>
          <p className="section-subtitle">Technologies I work with to build digital products</p>
        </motion.div>
      </div>

      {/* Marquee Row 1 (Left to Right) */}
      <div className="relative flex overflow-hidden w-full mb-6 py-4">
        <motion.div
          className="flex whitespace-nowrap gap-6 shrink-0 px-3"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {duplicatedSkillsRow1.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="glass-card px-8 py-6 flex items-center gap-4 cursor-pointer w-[220px] shrink-0 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-white/80 font-medium tracking-wide font-heading">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="relative flex overflow-hidden w-full py-4">
        <motion.div
          className="flex whitespace-nowrap gap-6 shrink-0 px-3"
          animate={{ x: ["-33.333333%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedSkillsRow2Full.map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="glass-card px-8 py-6 flex items-center gap-4 cursor-pointer w-[220px] shrink-0 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-white/80 font-medium tracking-wide font-heading">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

