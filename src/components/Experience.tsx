"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "Techno India NJR Institute of Technology",
    period: "Aug 2022 – Present",
    description: "Currently pursuing B.Tech in Computer Science with a CGPA of 8.3. Actively learning full-stack development, cloud technologies, and DevOps tools.",
  },
  {
    type: "work",
    title: "ML Intern",
    company: "NASSCOM ML Internship – Udaipur",
    period: "June 2024 – Sept 2024",
    description: "Worked on real-world datasets and built basic machine learning models for classification and regression. Collaborated with a team to contribute to ML pipelines.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative z-20 bg-transparent py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Static Dim Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-border/40 -translate-x-1/2 rounded-full overflow-hidden">
            {/* Dynamic Bright Timeline Line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: isLeft ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className={`flex flex-col md:flex-row items-center gap-8 relative ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Box */}
                  <div className={`flex-1 w-full ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card p-8 inline-block w-full transition-all duration-500 hover:-translate-y-1">
                      <div className={`flex items-center gap-2 mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                        {item.type === "work" ? (
                          <Briefcase size={16} className="text-primary" />
                        ) : (
                          <GraduationCap size={16} className="text-primary" />
                        )}
                        <span className="text-sm text-primary font-medium tracking-wide">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 tracking-wider uppercase font-medium">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (Reactive to scroll) */}
                  <div className="hidden md:flex flex-col items-center justify-center relative z-10">
                    <motion.div 
                      className="w-5 h-5 rounded-full border-4 border-background bg-[#0debc3]/20"
                      initial={{ backgroundColor: "rgba(13, 235, 195, 0.2)", boxShadow: "0 0 0px rgba(13, 235, 195, 0)" }}
                      whileInView={{ backgroundColor: "rgb(13, 235, 195)", boxShadow: "0 0 20px rgba(13, 235, 195, 0.6)" }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: false, margin: "-50% 0px -50% 0px" }} // Triggers when dot hits center of screen
                    />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

