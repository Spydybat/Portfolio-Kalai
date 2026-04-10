"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple intersection logic for active link
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].name);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
          Kalaiyarasan<span className="text-blue-500">.</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                active === link.name ? "text-blue-400" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}
