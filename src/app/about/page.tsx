"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                    <span className="text-white/50 group-hover:scale-110 transition-transform duration-500">Profile Image</span>
                </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              About Me
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Hello! I'm Akanksha Thakur, an aspiring AI and ML Engineer with a passion for building intelligent systems and creating impactful digital experiences. Currently, I'm deep-diving into the worlds of deep learning, data science, and modern web technologies.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My journey in tech began with a curiosity about how things work behind the scenes, which quickly evolved into a fascination with how machines can learn from data to solve complex problems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-accent-blue">Education</h3>
            <ul className="space-y-4">
                <li>
                    <h4 className="font-bold text-white">Degree Name</h4>
                    <p className="text-sm text-gray-500">University Name | Expected 20XX</p>
                </li>
            </ul>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-accent-purple">Career Goals</h3>
            <p className="text-gray-400 leading-relaxed">
                My goal is to contribute to a field where technology and research meet, specifically in AI-driven healthcare or sustainable technologies. I aim to build systems that are not just intelligent but also ethical and accessible.
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-blue-400">Interests</h3>
            <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new academic papers, contributing to open-source projects, or focusing on digital art and design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
