"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const categories = [
    {
      title: "PROGRAMMING",
      skills: ["C++", "Python", "JavaScript"]
    },
    {
      title: "AI / ML",
      skills: ["Artificial Intelligence", "Machine Learning"]
    },
    {
      title: "WEB DEVELOPMENT",
      skills: ["HTML", "CSS", "JavaScript", "Next.js", "Node.js", "Tailwind CSS"]
    },
    {
      title: "TOOLS / TECHNOLOGIES",
      skills: ["Git", "GitHub", "Arduino"]
    }
  ];

  return (
    <section id="skills" className="w-full py-32 bg-background relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            SKILLS
          </h2>
          <div className="w-20 h-1 bg-accent-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-bold text-accent-blue tracking-[0.2em]">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-gray-300 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
