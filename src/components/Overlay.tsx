"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Overlay() {
  const { scrollY } = useScroll();
  const [screenHeight, setScreenHeight] = useState(800); // 800px default fallback

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
      const handleResize = () => setScreenHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Section 1: 0 to 0.8 screen heights
  const opacity1 = useTransform(
    scrollY, 
    [0, screenHeight * 0.4, screenHeight * 0.8], 
    [1, 1, 0]
  );
  const y1 = useTransform(
    scrollY, 
    [0, screenHeight * 0.8], 
    [0, -80]
  );

  // Section 2: 1.0 to 2.2 screen heights
  const opacity2 = useTransform(
    scrollY, 
    [screenHeight * 1.0, screenHeight * 1.4, screenHeight * 1.8, screenHeight * 2.2], 
    [0, 1, 1, 0]
  );
  const y2 = useTransform(
    scrollY, 
    [screenHeight * 1.0, screenHeight * 2.2], 
    [80, -80]
  );

  // Section 3: 2.4 to 3.6 screen heights
  const opacity3 = useTransform(
    scrollY, 
    [screenHeight * 2.4, screenHeight * 2.8, screenHeight * 3.2, screenHeight * 3.6], 
    [0, 1, 1, 0]
  );
  const y3 = useTransform(
    scrollY, 
    [screenHeight * 2.4, screenHeight * 3.6], 
    [80, -80]
  );

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      
      {/* Centered Sticky Wrapper for all layers */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Section 1 - Center */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <p className="text-primary font-heading font-medium tracking-wider mb-2 uppercase text-sm md:text-base">
            Hi, my name is
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 font-heading">
            Harsh Dangi.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-lg text-center font-heading">
            I&apos;m a <span className="gradient-text font-semibold">Full-Stack Developer</span>.
          </p>
        </motion.div>

        {/* Section 2 - Left Aligned */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24 max-w-7xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-xl leading-tight mb-4 font-heading">
            I build <span className="gradient-text">things for the web.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md">
            Specializing in building exceptional digital experiences using React, Node.js, and cloud technologies.
          </p>
        </motion.div>

        {/* Section 3 - Right Aligned */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right max-w-7xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-xl leading-tight mb-4 font-heading">
            Accessible & <span className="gradient-text">Human-centered.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md">
            Currently focused on creating scalable products that make a difference in everyday workflows.
          </p>
        </motion.div>

      </div>

    </div>
  );
}


