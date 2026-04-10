"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "Working with Kalaiyarasan was an absolute pleasure. The attention to detail and modern design approaches took our product to the next level.",
    name: "Sarah Jenkins",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Exceptional coding skills and a great eye for UI/UX. Delivered the project ahead of expected timeline without compromising on quality.",
    name: "David Chen",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Very professional and responsive. Solved complex backend issues seamlessly and integrated them beautiful with the frontend.",
    name: "Elena Rodriguez",
    role: "Senior Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative bg-darkBase/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">Reviews</h2>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h3 className="text-4xl font-bold text-foreground">Client Testimonials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 group relative overflow-hidden accent-glow"
            >
              <div className="absolute -top-4 -right-4 opacity-5 text-accent rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                <Quote size={120} />
              </div>

              <Quote className="w-10 h-10 text-accent mb-6" />
              
              <p className="text-gray-300 italic leading-relaxed mb-8 relative z-10">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-semibold">{review.name}</h5>
                  <span className="text-accent text-sm font-mono">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
