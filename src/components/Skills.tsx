"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C Programming", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Git & GitHub", level: 85 },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="relative bg-black w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Skills</h2>
          <div className="h-px w-full max-w-sm mx-auto md:mx-0 bg-gradient-to-r from-blue-500 to-transparent" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full border-b-2 border-r-2 border-white/20 bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
