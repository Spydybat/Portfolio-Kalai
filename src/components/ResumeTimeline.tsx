"use client";

import { motion } from "framer-motion";

const timelineElements = [
  {
    type: "Education",
    title: "B.Sc. Computer Science",
    subtitle: "University Name",
    date: "2022 - Present",
    description: "Studying core computer science fundamentals, data structures, algorithms, and software engineering principles."
  },
  {
    type: "Projects",
    title: "Full Stack Developer",
    subtitle: "Freelance & Learning",
    date: "2023 - Present",
    description: "Built and deployed multiple React and Next.js applications, successfully integrating complex APIs and crafting beautiful UIs."
  },
  {
    type: "Content Creator",
    title: "Tamil Meme Page Admin",
    subtitle: "Instagram",
    date: "2021 - Present",
    description: "Grew a page to 50K+ followers, creating engaging content and mastering social media algorithms."
  }
];

export default function ResumeTimeline() {
  return (
    <section id="resume" className="relative bg-black w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Journey</h2>
          <div className="h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {timelineElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 relative pl-10 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline mb-2">
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-1 md:mb-0 md:mr-4 w-32 shrink-0">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
              
              <h4 className="text-lg text-white/50 mb-4">{item.subtitle}</h4>
              <p className="text-white/70 leading-relaxed md:pl-36">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
