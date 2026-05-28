"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 18.1v-3.1"></path></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xrbnolav", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative z-20 bg-transparent py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Massive Scaling Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-6 uppercase font-heading text-white">
            Let&apos;s <span className="gradient-text">Talk.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h4 className="text-3xl font-heading font-semibold text-white mb-8">Reach Out</h4>
              <div className="space-y-6">
                <a href="mailto:harshdangi208@gmail.com" className="flex items-center gap-6 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-16 h-16 rounded-2xl border border-border bg-secondary/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                    <Mail size={24} className="group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-heading font-medium tracking-wide text-lg md:text-xl text-white group-hover:text-primary transition-colors">harshdangi208@gmail.com</span>
                </a>
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="w-16 h-16 rounded-2xl border border-border bg-secondary/50 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <span className="font-heading font-medium tracking-wide text-lg md:text-xl text-white">Udaipur, Rajasthan</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-heading font-medium text-white mb-6 tracking-wide">Socials</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/Harrssshh/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon w-14 h-14 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/harsh-dangi-80875a166/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon w-14 h-14 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedinIcon className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form with Magnetic Highlight focus */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="p-8 md:p-12 glass-card space-y-8 relative overflow-hidden group/form"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-focus-within/form:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative z-10">
              <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="w-full px-6 py-4 bg-transparent border-b border-border text-white text-lg placeholder-white/20 focus:outline-none focus:border-primary transition-colors font-light" placeholder="What's your name?" />
            </div>
            <div className="relative z-10">
              <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-6 py-4 bg-transparent border-b border-border text-white text-lg placeholder-white/20 focus:outline-none focus:border-primary transition-colors font-light" placeholder="john@doe.com" />
            </div>
            <div className="relative z-10">
              <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                className="w-full px-6 py-4 bg-transparent border-b border-border text-white text-lg placeholder-white/20 focus:outline-none focus:border-primary transition-colors resize-none font-light" placeholder="Hello Harsh, let's build something..." />
            </div>
            
            <button type="submit" disabled={status === "sending"} className="btn-primary relative z-10 w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 border-none cursor-pointer">
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Try Again" : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

