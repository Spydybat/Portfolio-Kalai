"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Instagram Reel Automation Bot",
    category: "Automation",
    description: "Automates reel downloads using Telegram API for a massive meme page.",
    tech: ["Python", "Telegram API", "Node.js"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "University Management System",
    category: "Full Stack",
    description: "A comprehensive portal for student academic tracking and course registrations.",
    tech: ["React", "Next.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    category: "Machine Learning",
    description: "A Python-based NLP model integrated with a React frontend.",
    tech: ["Python", "TensorFlow", "React"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Hostel Allocation App",
    category: "Mobile Dev",
    description: "A cross-platform mobile app helping students find and book hostel rooms.",
    tech: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-black w-full py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Selected Work</h2>
          <div className="h-px w-full max-w-sm mx-auto md:mx-0 bg-gradient-to-r from-blue-500 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pl-2 pr-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-blue-400 mb-2 font-semibold">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 line-clamp-2 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.link} className="flex-1 text-center py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                    View Project
                  </a>
                  <a href={project.github} className="flex-1 text-center py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/10">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
