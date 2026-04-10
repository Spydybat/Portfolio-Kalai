"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <h2 className="text-accent uppercase tracking-widest text-sm font-semibold">Contact Me</h2>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h3 className="text-4xl font-bold text-foreground">Let's Work Together</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Describe your project requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-accent text-black font-bold text-lg px-8 py-4 rounded-xl accent-glow hover:bg-yellow-400 transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                Feel free to reach out for collaborations, freelance projects, or simply to say hello. I always try to respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem icon={Mail} title="Email Address" content="kalai23078@gmail.com" />
              <ContactItem icon={Phone} title="Phone Number" content="+91 123 456 7890" />
              <ContactItem icon={MapPin} title="Location" content="Chennai, Tamil Nadu, India" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex items-start gap-6 group cursor-default">
      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h5 className="text-sm text-gray-500 uppercase tracking-widest mb-1">{title}</h5>
        <span className="text-lg text-gray-200 font-medium group-hover:text-accent transition-colors">{content}</span>
      </div>
    </div>
  );
}
