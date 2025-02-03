import { motion } from "framer-motion";

const technicalSkills = [
  "C", "C++", "Java", "Python", "SQL", "Kotlin", "HTML", "CSS", 
  "JavaScript", "React.js", "Node.js", "Tailwind CSS", "Django",
  "Flask", "Express.js", "OpenCV", "MongoDB", "Git", "GitHub",
  "MATLAB", "APIs", "VS Code", "TensorFlow", "Scikit-learn",
  "Pandas", "OpenCV"
];

const softSkills = [
  "Leadership", "Teamwork", "Communication",
  "Attention to Detail", "Analytical Thinking"
];

const languages = ["English", "Hindi"];

const achievements = [
  "Successfully co-authored and presented a Research Paper - Viksit Bharat (2024) focusing on rural development.",
  "Got selected among 1,68,000 applications.",
  "Internal Round Finalist in Smart India Hackathon 2024 among many teams from our university."
];

const summary = `I'm a passionate Computer Science and Engineering student with a strong foundation in web development and machine learning. My journey in technology is driven by a desire to create innovative solutions that make a real impact. I excel in full-stack development, with expertise in the MERN stack, and have a growing interest in AI/ML applications.`;

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#D946EF]/20 to-[#8B5CF6]/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F97316] to-[#D946EF] mx-auto mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-3xl mx-auto mb-12"
          >
            {summary}
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-primary/20 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-secondary/20 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="flex gap-4">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    className="bg-accent/20 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary">•</span>
                  <span className="text-white/80">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
