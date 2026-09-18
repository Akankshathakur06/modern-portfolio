"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const links = [
    { name: "Email", icon: <Mail />, href: "mailto:akanksha@example.com", color: "hover:bg-accent-blue/10 hover:border-accent-blue/50 hover:text-accent-blue" },
    { name: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com/in/akanksha", color: "hover:bg-accent-purple/10 hover:border-accent-purple/50 hover:text-accent-purple" },
    { name: "GitHub", icon: <Github />, href: "https://github.com/akanksha", color: "hover:bg-white/10 hover:border-white/50 hover:text-white" }
  ];

  return (
    <section id="contact" className="w-full py-32 bg-background relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            LET'S CONNECT
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`flex items-center gap-3 px-8 py-4 glass-card bg-white/[0.02] border border-white/10 rounded-full text-gray-300 transition-all duration-300 ${link.color}`}
            >
              {link.icon}
              <span className="font-semibold tracking-wide">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
