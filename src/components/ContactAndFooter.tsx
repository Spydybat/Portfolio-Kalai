"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Engineer @ TechCorp",
    text: "Kalaiyarasan brings an incredible mix of design sensibility and solid engineering. His work on our frontend architecture improved performance by 40%."
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    text: "Working with Kalai was a breeze. He consistently delivers high-quality React applications and isn't afraid to tackle complex UI challenges."
  }
];

export default function ContactAndFooter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const res = await submitContactForm(formData);
    
    if (res.error) {
      setStatus("error");
      setResponseMsg(res.error);
    } else if (res.success) {
      setStatus("success");
      setResponseMsg(res.message);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="relative bg-black w-full" id="contact">
      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What People Say</h2>
            <div className="h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
              >
                <div className="text-blue-500 mb-6">
                  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/80 text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
              Let's build something <span className="text-blue-500">amazing</span> together.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg mb-12"
            >
              I'm currently looking for new opportunities, freelance projects, or a chance to collaborate on something cool.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              {[
                { name: "GitHub", url: "#", icon: "M12 2C6.477... (SVG path)" }, // Replace with real icons if needed
                { name: "LinkedIn", url: "#", icon: "" },
                { name: "Instagram", url: "#", icon: "" },
                { name: "Email", url: "mailto:hello@example.com", icon: "" }
              ].map(social => (
                <a key={social.name} href={social.url} className="w-12 h-12 bg-white/5 hover:bg-blue-600 border border-white/10 rounded-full flex items-center justify-center transition-colors text-white hover:border-blue-500">
                  <span className="text-xs font-semibold">{social.name[0]}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
                <input required type="text" name="name" id="name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
                <input required type="email" name="email" id="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
                <textarea required name="message" id="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="How can I help you?" />
              </div>
              <button 
                disabled={status === "loading"}
                type="submit" 
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-3 md:py-4 rounded-xl transition-all active:scale-95"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              
              {status === "success" && <p className="text-green-400 text-sm text-center mt-2">{responseMsg}</p>}
              {status === "error" && <p className="text-red-400 text-sm text-center mt-2">{responseMsg}</p>}
            </form>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 flex flex-col items-center justify-center">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Kalaiyarasan. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </div>
  );
}
