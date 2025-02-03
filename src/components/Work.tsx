import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase } from "lucide-react";

const workExperience = [
  {
    position: "Web Development Intern",
    company: "Tech Company",
    period: "Summer 2023",
    description: "Developed and maintained web applications using React and Node.js.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  // Add more work experiences as needed
];

const Work = () => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/10 border-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Briefcase className="w-8 h-8 text-secondary" />
                  <div>
                    <CardTitle className="text-xl">{work.position}</CardTitle>
                    <p className="text-sm text-white/60">{work.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{work.company}</p>
                  <p className="mt-2 text-white/60">{work.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/20 rounded-full text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;