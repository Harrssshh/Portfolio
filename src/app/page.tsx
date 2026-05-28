import Navbar from "@/components/Navbar";
import MouseSpotlight from "@/components/MouseSpotlight";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white antialiased selection:bg-white/30 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Global Mouse Tracking Effect */}
      <MouseSpotlight />

      {/* 
        The hero section contains the scrollytelling canvas and the parallax overlay.
        Both share the same scrolling context since they are stacked on top of each other.
      */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* About Me Section */}
      <About />

      {/* Grid of featured projects */}
      <div id="projects">
        <Projects />
      </div>

      {/* Timeline of work and education */}
      <Experience />

      {/* Tools and Technologies */}
      <Skills />

      {/* Contact Form & Links */}
      <Contact />
      
      {/* Simple footer */}
      <footer className="border-t border-white/10 bg-[#121212] py-12 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Harsh Dangi. All rights reserved.</p>
      </footer>
    </main>
  );
}
