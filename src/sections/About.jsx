import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProfileImage from "../assets/profile.jpg";

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

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transform rotate-6" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-primary/20 backdrop-blur-xl flex items-center justify-center animate-pulse-glow">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Harsh, a full-stack developer from India with a strong interest 
                in building real, impactful digital products. I enjoy turning ideas into 
                working applications — whether it's a complete MERN project, a cloud-ready 
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
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-heading font-semibold mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="skill-badge justify-center"
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
