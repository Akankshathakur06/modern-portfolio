"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen py-32 flex items-center bg-background z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              ABOUT ME
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
            
            <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              <p>
                Hi, I'm <span className="text-white font-medium">Akanksha Thakur</span>, a B.Tech student specializing in Artificial Intelligence & Machine Learning.
              </p>
              <p>
                I'm passionate about Artificial Intelligence, Machine Learning, software development and building practical technology solutions.
              </p>
              <p>
                I enjoy transforming ideas into real projects while continuously improving my technical and problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Futuristic AI Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <div className="glass-card border-white/20 bg-[#0a0a0c]/80 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              
              {/* Internal ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-4">
                {[
                  "AI & MACHINE LEARNING",
                  "PROBLEM SOLVING",
                  "SOFTWARE DEVELOPMENT",
                  "CREATIVE TECHNOLOGY"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group/item flex items-center p-4 bg-white/[0.02] rounded-2xl border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-accent-blue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:translate-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-blue/50 mr-4 group-hover/item:bg-accent-blue group-hover/item:shadow-[0_0_10px_#3b82f6] transition-all" />
                    <span className="text-sm md:text-base font-semibold text-gray-300 tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
