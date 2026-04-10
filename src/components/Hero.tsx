"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >

      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay (for text visibility) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight uppercase"
        >
          Hi, I'm{" "}
          <span className="text-blue-500">Kalaiyarasan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl"
        >
          Frontend Developer & Creative Programmer
        </motion.p>

      </div>

    </section>
  );
}