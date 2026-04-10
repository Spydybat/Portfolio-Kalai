"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full bg-black flex items-center justify-center">

      {/* Background (Image or Video) */}
      <div className="absolute inset-0">
        {/* OPTION 1: Image */}
        <img
          src="/hero.jpg"
          alt="hero"
          className="w-full h-full object-cover opacity-60"
        />

        {/* OPTION 2: Video (better performance) */}
        {/* 
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase"
        >
          Hi, I'm <span className="text-blue-500">Kalaiyarasan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-white/80"
        >
          Frontend Developer & Creative Programmer
        </motion.p>
      </div>

    </section>
  );
}