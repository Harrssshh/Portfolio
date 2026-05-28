"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-transparent py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Container with Parallax-style styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transform rotate-6 border border-primary/20" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/20 glass">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-xl flex items-center justify-center animate-pulse-glow border border-primary/30">
                <span className="text-4xl">🚀</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light"
          >
            <p>
              Hello! I&apos;m Harsh, a full-stack developer from India with a strong interest 
              in building real, impactful digital products. I enjoy turning ideas into 
              working applications — whether it&apos;s a complete MERN project, a cloud-ready 
              deployment, or a tool that helps improve everyday workflows.
            </p>
            <p>
              My journey began with curiosity for how websites and applications actually 
              work behind the scenes. Over time, that curiosity grew into hands-on 
              experience with full-stack development, DevOps practices, and cloud 
              technologies like Docker, Kubernetes, and AWS.
            </p>
            <p>
              Today, I focus on creating scalable, user-friendly solutions and deploying 
              them with modern tools and automation. I enjoy learning new technologies, 
              solving real problems, and building products that feel smooth, reliable, 
              and meaningful to use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

