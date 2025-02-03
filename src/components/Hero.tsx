import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-accent/5 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vikesh Mehta
          </motion.h1>
          
          <motion.div 
            className="mt-8 relative w-full max-w-2xl mx-auto h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <img 
              src="/lovable-uploads/48bcd167-6ef9-418c-b876-e7ba4bfb6bac.png" 
              alt="Cyberpunk robot in a neon-lit city" 
              className="w-full h-full object-contain rounded-lg relative z-10"
            />
          </motion.div>

          <motion.div 
            className="mt-8 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" className="gap-2 text-secondary-foreground">
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact">
                <Button variant="outline" className="gap-2 text-foreground">
                  Contact Me <Mail className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://drive.google.com/file/d/1lA0eFsBtzCArkamzmBOqwiXqXeu0B-Gr/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 text-foreground">
                  Download Resume <Download className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12 flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="https://github.com/Vikesh-Mehta" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-foreground hover:text-secondary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/vikesh-mehta/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-foreground hover:text-secondary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;