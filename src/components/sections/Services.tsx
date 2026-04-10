"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Bot, LineChart, Code2, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive, performant, and accessible websites using modern frameworks like Next.js and React.",
    icon: Monitor,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and aesthetically pleasing user interfaces with a focus on seamless user experiences.",
    icon: Palette,
  },
  {
    title: "Automation Tools",
    description: "Developing custom scripts and tools to streamline workflows and increase productivity.",
    icon: Bot,
  },
  {
    title: "Content Strategy",
    description: "Planning and implementing digital content architectures to maximize engagement and reach.",
    icon: LineChart,
  },
  {
    title: "Backend APIs",
    description: "Designing scalable RESTful and GraphQL APIs using Node.js and modern database solutions.",
    icon: Code2,
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring flawless performance and adaptive layouts across all mobile and tablet devices.",
    icon: Smartphone,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-darkBase/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">Services</h2>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h3 className="text-4xl font-bold text-foreground">What I Do</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="glass-card p-8 h-full group accent-glow cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors"></div>
                
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
