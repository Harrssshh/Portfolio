import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "🛒",
    tech: ["React", "Node.js", "MongoDB", "Stripe","cloudinary"],
    github: "https://github.com/Harrssshh/Chapter-Xchange",
    demo: "https://chapter-xchange.vercel.app/",
  },

  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging application with support for private chats, group conversations, file sharing, and message reactions.",
    image: "💬",
    tech: ["React", "Socket.io", "Express", "Redis","kubernetes","docker","aws"],
    github: "https://github.com/Harrssshh/full-stack-chatApp",
    demo: "",
  },
   {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "✅",
    tech: ["React", "nodejs", "Tailwind", "DnD Kit","JWT"],
    github: "https://github.com",
    demo: "https://mobile-app-three-rust.vercel.app/",
  },
 
];

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group"
    >
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center relative overflow-hidden">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {project.image}
        </span>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-subtitle">Some things I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
