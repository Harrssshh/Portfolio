import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
  type: "education",
  title: "B.Tech in Computer Science",
  company: "Techno India NJR Institute of Technology",
  period: "Aug 2022 – Present",
  description:
    "Currently pursuing B.Tech in Computer Science with a CGPA of 8.3. Actively learning full-stack development, cloud technologies, and DevOps tools.",
},
{
  type: "work",
  title: "ML Intern",
  company: "NASSCOM ML Internship – Udaipur",
  period: "June 2024 – Sept 2024",
  description:
    "Worked on real-world datasets and built basic machine learning models for classification and regression. Collaborated with a team to contribute to ML pipelines.",
},

];

const TimelineItem = ({ item, index, isInView }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 inline-block w-full md:max-w-md"
        >
          <div
            className={`flex items-center gap-2 mb-2 ${
              isLeft ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {item.type === "work" ? (
              <Briefcase size={16} className="text-primary" />
            ) : (
              <GraduationCap size={16} className="text-primary" />
            )}
            <span className="text-sm text-primary font-medium">
              {item.period}
            </span>
          </div>
          <h3 className="text-lg font-heading font-semibold mb-1">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3">{item.company}</p>
          <p className="text-muted-foreground/80 text-sm">{item.description}</p>
        </motion.div>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
          className="w-4 h-4 rounded-full bg-primary glow-effect"
        />
      </div>

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
