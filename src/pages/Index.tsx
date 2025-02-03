import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Education />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </motion.div>
    </Layout>
  );
};

export default Index;