"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

const posts = [
  {
    title: "10 CSS Tricks for Premium UI Design",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Why Next.js is the Future of React",
    date: "Feb 28, 2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Understanding Low-Level C Archs",
    date: "Jan 15, 2024",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-accent"></span>
              <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">Blog</h2>
            </div>
            <h3 className="text-4xl font-bold text-foreground">Latest Articles</h3>
          </div>
          
          <a href="#" className="flex items-center gap-2 text-accent hover:text-yellow-300 transition-colors font-medium">
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 relative border border-white/5">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm font-mono mb-3">
                <CalendarDays className="w-4 h-4 text-accent" />
                {post.date}
              </div>
              
              <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                {post.title}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
