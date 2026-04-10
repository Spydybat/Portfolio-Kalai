"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Define opacity and y translations for parallax effects
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, -50]);

  // 30% scroll
  const op2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  // 60% scroll
  const op3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center">
      
      {/* Section 1 (0% scroll) - Center */}
      <motion.div 
        style={{ opacity: op1, y: y1 }}
        className="absolute w-full flex flex-col items-center text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase drop-shadow-lg">Kalaiyarasan K</h1>
        <p className="mt-6 text-xl md:text-3xl text-white/90 font-light tracking-widest uppercase drop-shadow-md">Computer Science Student.</p>
      </motion.div>

      {/* Section 2 (30% scroll) - Left aligned */}
      <motion.div 
        style={{ opacity: op2, y: y2 }}
        className="absolute w-full px-8 md:px-24 flex justify-start"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl leading-tight drop-shadow-md">
          I build <span className="text-white/70 italic">modern applications.</span>
        </h2>
      </motion.div>

      {/* Section 3 (60% scroll) - Right aligned */}
      <motion.div 
        style={{ opacity: op3, y: y3 }}
        className="absolute w-full px-8 md:px-24 flex justify-end text-right"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl leading-tight">
          Bridging design and <span className="text-white/50 italic">engineering.</span>
        </h2>
      </motion.div>

    </div>
  );
}
