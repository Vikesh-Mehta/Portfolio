import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "VIT Bhopal University, Bhopal, MP",
    year: "Sep 2022 - Sep 2026",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/10 border-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-sm text-white/60">{edu.year}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{edu.institution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;