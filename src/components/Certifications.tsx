import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Matlab and Simulink",
    issuer: "Matlab Training Center",
    description: "Comprehensive training in MATLAB and Simulink for technical computing and simulation.",
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    description: "In-depth study of cloud computing concepts and technologies.",
  },
  {
    title: "Python and Django Development",
    issuer: "Coursera",
    description: "Complete web development course focusing on Python and Django framework.",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    description: "Fundamental concepts of computer networking and infrastructure.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/10 border-none h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="w-8 h-8 text-secondary" />
                  <div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <p className="text-sm text-white/60">{cert.issuer}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
