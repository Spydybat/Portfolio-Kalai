"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              {/* Fallback pattern / gradient if no image */}
              <div className="w-full h-full bg-darkBase rounded-2xl relative overflow-hidden flex items-center justify-center">
                 <div className="absolute w-64 h-64 bg-accent/30 rounded-full blur-[100px] -top-10 -left-10"></div>
                 <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-[100px] -bottom-10 -right-10"></div>
                 <img 
                    src="/profile.jpg" 
                    alt="Kalaiyarasan K" 
                    className="w-full h-full object-cover rounded-2xl" 
                 />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent rounded-br-3xl"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-accent"></span>
              <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">About Me</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Hi There! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">Kalaiyarasan K</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am a Computer Science student passionate about web development, programming, and building impactful projects. 
              I strive to create elegant solutions that merge modern design principles with robust engineering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <DetailItem label="LinkedIn" value="kalai23078" />
              <DetailItem label="Phone" value="+91 6369837960" />
              <DetailItem label="Email" value="kalai23078@gmail.com" />
              <DetailItem label="Location" value="India" />
              <DetailItem label="Languages" value="English, Tamil" />
              <DetailItem label="Freelance" value="Available" />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-accent text-black font-semibold px-8 py-4 rounded-full accent-glow"
            >
              <span>Download CV</span>
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col border-l-2 border-white/10 pl-4 py-1">
      <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</span>
      <span className="text-gray-200 font-medium">{value}</span>
    </div>
  );
}
