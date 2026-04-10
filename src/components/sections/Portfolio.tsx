"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "AI Writing Assistant",
    category: "Frontend & API",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Crypto Dashboard",
    category: "Web3",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Automation Bot",
    category: "Python / Scripts",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">Portfolios</h2>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h3 className="text-4xl font-bold text-foreground">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative rounded-2xl overflow-hidden glass-card border-none"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 flex gap-4">
                     <a href={project.demoLink} className="p-3 bg-accent text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                       <ExternalLink className="w-5 h-5" />
                     </a>
                     <a href={project.githubLink} className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 hover:scale-110 transition-transform backdrop-blur-md">
                       <Github className="w-5 h-5" />
                     </a>
                   </div>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-accent text-xs font-mono tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
