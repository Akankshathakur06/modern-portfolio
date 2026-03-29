"use client";

import Link from "next/link";
import { ArrowRight, Code, Database, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-accent-blue/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-purple/10 blur-[150px] animate-pulse delay-700"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center animate-fade-in space-y-8 max-w-4xl">
        <p className="text-accent-blue font-medium tracking-widest uppercase text-sm mb-4">Welcome to my Digital Space</p>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
          AKANKSHA <span className="text-accent-blue">THAKUR</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Aspiring <span className="text-white font-medium italic">AI and ML Engineer</span> focused on building intelligent solutions for a better tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Link 
            href="/projects" 
            className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Get in touch
          </Link>
        </div>

        {/* Short info row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 text-left">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-blue/50 transition-colors">
            <BrainCircuit className="text-accent-blue mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">AI-Driven</h3>
            <p className="text-sm text-gray-500">Creating models that learn, adapt, and solve complex real-world problems.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-purple/50 transition-colors">
            <Code className="text-accent-purple mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Modern Web</h3>
            <p className="text-sm text-gray-500">Full-stack development with a focus on performance and minimal design.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
            <Database className="text-white/80 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Data Science</h3>
            <p className="text-sm text-gray-500">Extracting meaningful insights from vast datasets through rigorous analysis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
