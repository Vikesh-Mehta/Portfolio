import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen } from "lucide-react";

const researchProjects = [
  {
    title: "Viksit Bharat Research Paper (2024)",
    area: "Rural Development",
    date: "2024",
    description: "Successfully co-authored and presented a research paper focusing on rural development strategies and technological integration for sustainable growth.",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Research Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/10 border-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-white/60">{project.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{project.area}</p>
                  <p className="mt-2 text-white/60">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;