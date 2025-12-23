import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-2xl font-heading font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              HD
            </motion.a>
            
          </div>

          <div className="flex gap-3">
            <motion.a
              href="https://github.com/harrssshh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harsh-dangi-80875a166/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=harshdangi208@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
             className="social-icon"
             whileHover={{ scale: 1.1, y: -3 }}
             whileTap={{ scale: 0.9 }}
            >
             <Mail size={18} />
            </motion.a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
