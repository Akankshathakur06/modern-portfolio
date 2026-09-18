"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import StormTransition from "@/components/StormTransition";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
        
        {/* Premium Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-background">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        {/* 1. STABLE 100vh HERO SECTION */}
        <main id="home" className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-4">
          
          <div className="w-full max-w-4xl mx-auto">
            {/* The Approved Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass-card bg-[#0a0a0c]/80 border-white/10 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-accent-purple/5"
            >
              {/* Subtle internal animated glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10 opacity-30 pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                    AKANKSHA THAKUR
                  </h1>
                  <p className="text-accent-blue font-semibold tracking-widest uppercase text-xs md:text-sm">
                    B.Tech — Artificial Intelligence & Machine Learning
                  </p>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                  I’m a B.Tech student specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent, practical and creative technology solutions.
                </p>
                
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  I enjoy exploring AI, machine learning, software development and emerging technologies. I love turning ideas into working projects and continuously improving my technical and problem-solving skills.
                </p>
              </div>
            </motion.div>
          </div>

          {/* SCROLL TO EXPLORE INDICATOR */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-medium">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </main>

        {/* 2. CINEMATIC STORM TRANSITION */}
        <StormTransition />

        {/* 3. ABOUT SECTION */}
        <AboutSection />

        {/* 4. PROJECTS SECTION */}
        <ProjectsSection />

        {/* 5. SKILLS SECTION */}
        <SkillsSection />

        {/* 6. CONTACT SECTION */}
        <ContactSection />
        
      </div>
    </>
  );
}
