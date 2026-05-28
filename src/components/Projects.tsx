"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 18.1v-3.1"></path></svg>
);


const projects = [
  {
    title: "E-Commerce Platform",
    image: "🛒",
    description: "A full-featured e-commerce platform with cart functionality, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    github: "https://github.com/Harrssshh/Chapter-Xchange",
    demo: "https://chapter-xchange.vercel.app/",
  },
  {
    title: "Real-time Chat App",
    image: "💬",
    description: "A real-time messaging application with support for private chats, group conversations, file sharing, and message reactions.",
    tech: ["React", "Socket.io", "Express", "Redis", "Kubernetes", "Docker", "AWS"],
    github: "https://github.com/Harrssshh/full-stack-chatApp",
    demo: "",
  },
  {
    title: "Vita-Train-AI",
    image: "🏋️",
    description: "An AI-powered fitness assistant designed to help users improve their health and fitness through personalized workout plans, nutrition guidance, and progress tracking.",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Groq"],
    github: "https://github.com/Harrssshh/Vita-Train-AI",
    demo: "https://vita-train-ai.vercel.app/",
  },
  {
    title: "Task Management App",
    image: "✅",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    tech: ["React", "Node.js", "Tailwind", "DnD Kit", "JWT"],
    github: "https://github.com",
    demo: "https://mobile-app-three-rust.vercel.app/",
  },
];

const TiltCard = ({ project }: { project: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass-card p-8 md:p-10 transition-all duration-500 flex flex-col justify-between min-h-[340px] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ transform: "translateZ(0px)" }} />
      
      {/* Massive floating emoji reveal on hover */}
      <div 
        className="absolute -right-8 -bottom-10 text-[10rem] opacity-0 group-hover:opacity-20 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none select-none blur-sm group-hover:blur-none"
        style={{ transform: "translateZ(50px)" }}
      >
        {project.image}
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-3">
            {project.github && (
              <motion.a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-8 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(20px)" }}>
        {project.tech.map((tech: string) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="relative z-20 bg-transparent py-32 px-4 md:px-12 lg:px-24 perspective-1000">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-subtitle">Some things I&apos;ve built</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full" style={{ perspective: 1000 }}>
              <TiltCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

