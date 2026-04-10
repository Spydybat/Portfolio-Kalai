"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C Programming", percent: 85 },
  { name: "HTML/CSS", percent: 90 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 75 },
  { name: "Digital Content Strategy", percent: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-accent"></span>
              <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">My Skills</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Expertise that <br/> drives success
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A blend of low-level programming foundations, modern web development frameworks, and strategic thinking allows me to build comprehensive and efficient digital solutions.
            </p>
          </motion.div>

          {/* Right Side: Skills List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 md:p-6 flex items-center gap-4 border-l-4 border-l-accent accent-glow"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
                <span className="text-gray-200 font-medium text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
