"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black w-full py-32 px-6 md:px-12 flex items-center justify-center border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden border-4 border-white/10 relative z-10">
            {/* The prompt mentioned using animated profile image in Hero, but since I don't have it, I'll put a sleek avatar here too */}
            <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white shadow-inner">
              K
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 -z-10 rounded-full scale-150" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Kalaiyarasan
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl text-white/70 font-light leading-relaxed mb-12"
        >
          I am a Computer Science student passionate about web development, programming, and building impactful projects. I focus on clean UI, performance, and creativity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 border border-white/10 hover:border-white/30 group"
          >
            <span>Download Resume</span>
            <svg className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
