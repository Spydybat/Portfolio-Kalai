"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past hero section (approx 500vh ~ 4000px, but let's say after 500px)
    if (latest > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.a
      href="#contact"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "backOut" }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 flex items-center gap-2 group transition-colors cursor-pointer"
    >
      <span>Hire Me</span>
      <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        {/* Replace with a paper plane or similar icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    </motion.a>
  );
}
