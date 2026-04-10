"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timelineItems = [
  {
    year: "2024 - 2028",
    title: "Mountzion College of Engineering and Technology",
    subtitle: "Education",
    description: "Pursuing rigorous engineering studies, diving deep into computer science fundamentals and practical applications.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Web Designer",
    subtitle: "Vibecoding",
    description: "Applying modern design principles to build interactive and highly functional web applications.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Freelance Editor",
    subtitle: "Self-Employed",
    description: "Providing professional video and content editing services to enhance digital storytelling.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative bg-[#060D1A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">Resume</h2>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h3 className="text-4xl font-bold text-foreground">Education & Experience</h3>
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 md:pl-0">
          {timelineItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline Connector Line (Desktop) */}
              <div className="hidden md:block absolute left-8 top-8 bottom-[-3rem] w-px bg-white/10" />

              <div className="md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                
                {/* Left Side: Year & Image (Desktop) */}
                <div className="hidden md:flex flex-col items-end pt-1 gap-6">
                  <span className="text-accent font-mono bg-accent/10 px-4 py-1 rounded-full text-sm">
                    {item.year}
                  </span>
                  {item.image && (
                    <div className="w-48 xl:w-56 aspect-[4/3] rounded-xl overflow-hidden border border-white/5 shadow-lg relative group-hover:border-accent/30 transition-colors">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  )}
                </div>

                {/* Center Icon */}
                <div className="absolute left-[-24px] top-1 md:relative md:left-auto md:top-auto w-12 h-12 rounded-full bg-[#050B14] border-2 border-accent flex items-center justify-center text-accent z-10 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                  <item.icon className="w-5 h-5" />
                </div>

                {/* Right Side: Content */}
                <div className="glass-card p-6 md:p-8 group hover:border-accent/40 transition-colors relative overflow-hidden flex flex-col gap-4 text-left w-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors"></div>
                  
                  {/* Year & Image (Mobile Only) */}
                  <div className="md:hidden mb-2">
                    <span className="inline-block text-accent font-mono bg-accent/10 px-3 py-1 rounded-full text-xs mb-4">
                      {item.year}
                    </span>
                    {item.image && (
                      <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/5 shadow-lg relative mb-2">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                  <h5 className="text-lg text-gray-300 font-medium mb-3">{item.subtitle}</h5>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed selection:bg-accent/30 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
