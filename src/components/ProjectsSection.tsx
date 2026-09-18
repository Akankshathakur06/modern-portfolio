"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Irrigation System",
      tech: ["Arduino", "Hardware", "Sensors", "Automation"],
      features: [
        "Smart irrigation based on moisture levels",
        "Animal detection algorithms",
        "Weed removal logic",
        "Arduino-based central control system"
      ]
    },
    {
      title: "Snake Game",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Classic arcade gameplay",
        "Smooth grid-based movement",
        "Score tracking and collision detection",
        "Built purely with vanilla web technologies"
      ]
    }
  ];

  return (
    <section id="projects" className="w-full py-32 bg-background relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            PROJECTS
          </h2>
          <div className="w-20 h-1 bg-accent-blue rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-card bg-white/[0.03] border-white/10 p-8 rounded-[2rem] group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>
              
              <ul className="space-y-3 mb-8 relative z-10">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                    <span className="text-accent-purple mt-1">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-accent-blue tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
