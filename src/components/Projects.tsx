import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Github } from "lucide-react";

const projects = [
  {
    title: "GitHub MERN Profile Platform",
    description: "A full-stack real-time chat application with GitHub OAuth integration",
    technologies: ["React.js", "Node.js", "Passport.js", "MongoDB"],
    details: [
      "Developed and implemented a full-stack real-time chat application with GitHub OAuth integration using Passport.js",
      "Enabled users to log in, view and clone repositories, and explore technologies in use across GitHub",
      "Enhanced user experience by implementing dynamic repository listing and cloning features"
    ],
    duration: "May 2024 - August 2024",
    link: "https://github.com/Vikesh-Mehta/MERN-GIT-PLATFORM"
  },
  {
    title: "ML-Powered Personalized Food Ordering App",
    description: "A mobile-friendly app for personalized meal recommendations",
    technologies: ["HTML", "CSS", "Kotlin", "Flask", "Machine Learning"],
    details: [
      "Built a mobile-friendly app that recommends personalized meals based on health conditions using machine learning algorithms",
      "Created a predictive ML model using a small dataset, with plans to scale for accuracy and personalization",
      "Designed a user-friendly front-end and integrated back-end services for handling user data"
    ],
    duration: "Jan 2024 - April 2022",
    link: "https://github.com/Vikesh-Mehta/Nutribite---Personalized-Food-Recommendation-App-"
  },
  {
    title: "Digital Library Platform",
    description: "A comprehensive digital library management system",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
    details: [
      "Designed and implemented a digital library platform allowing users to register, log in, and browse a collection of books by category",
      "Developed and implemented user-specific book recommendations and secure data management with MongoDB"
    ],
    duration: "Sep 2023 - Dec 2023",
    link: "https://github.com/Vikesh-Mehta"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#8B5CF6]/20 to-[#D946EF]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F97316] to-[#D946EF] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-none hover:bg-white/10 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{project.title}</span>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{project.duration}</div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#8B5CF6]/20 px-3 py-1 rounded-full text-sm"
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

export default Projects;