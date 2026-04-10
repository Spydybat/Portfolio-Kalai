"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Counter Animation Component
function AnimatedCounter({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ExperienceAndStats() {
  return (
    <section id="experience" className="relative bg-black w-full py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Content Creator UI */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Content Creator</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Massive Audience</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Running a highly successful Tamil meme page. Through viral content strategy and deep audience understanding, I've cultivated a highly engaged community. This experience taught me marketing, social media algorithms, and the power of consistent branding.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-white border border-white/10">Viral Strategy</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-white border border-white/10">Community Building</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-md mx-auto"
          >
            {/* Abstract aesthetic representing social media growth */}
            <div className="relative aspect-square rounded-[40px] border border-white/10 bg-gradient-to-tr from-white/5 to-white/10 p-8 backdrop-blur-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px]" />
              <div className="h-full flex flex-col justify-center items-center text-center space-y-8 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">Growth Engine</h4>
                  <p className="text-white/60">Leveraging data and trends to scale digital reach.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/10 py-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
              <AnimatedCounter from={0} to={5} duration={2} suffix="+" />
            </h4>
            <p className="text-blue-400 font-medium tracking-wide uppercase">Projects Completed</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
              <AnimatedCounter from={0} to={100} duration={2} suffix="+" />
            </h4>
            <p className="text-blue-400 font-medium tracking-wide uppercase">Reels Created</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
              <AnimatedCounter from={0} to={50} duration={2} suffix="K+" />
            </h4>
            <p className="text-blue-400 font-medium tracking-wide uppercase">Audience Reach</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
