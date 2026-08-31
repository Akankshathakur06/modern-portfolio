"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BrainCircuit, 
  Cpu, 
  Code2, 
  Lightbulb, 
  ArrowRight,
  GraduationCap,
  TerminalSquare,
  Bot,
  Rocket,
  Palette,
  Music,
  Plane,
  BookOpen
} from "lucide-react";

export default function AboutMe() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 pt-12 pb-24 relative z-10">
        {/* Subtle AI background elements */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent-blue/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-accent-blue font-semibold tracking-widest uppercase text-sm">
            About Me
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Turning Curiosity Into <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligent Solutions.</span>
          </motion.h1>
          <motion.blockquote variants={fadeUp} className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto border-l-2 border-accent-purple/50 pl-6 italic">
            "Hi, I'm Akanksha Thakur, a B.Tech student specializing in Artificial Intelligence & Machine Learning. I'm passionate about technology, problem-solving, and building intelligent solutions that can make everyday tasks smarter and more efficient."
          </motion.blockquote>
          <motion.p variants={fadeUp} className="text-md md:text-lg font-medium text-gray-300">
            Aspiring AI & ML Engineer | Problem Solver | Tech Enthusiast
          </motion.p>
        </motion.div>
      </section>

      {/* 2. PERSONAL INTRODUCTION */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden group border-white/20">
              {/* Abstract Visual / Profile Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 opacity-50"></div>
              
              {/* Neural network decorative lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20%" cy="30%" r="4" fill="white" />
                <circle cx="80%" cy="40%" r="4" fill="white" />
                <circle cx="40%" cy="80%" r="4" fill="white" />
                <circle cx="70%" cy="85%" r="4" fill="white" />
                <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="white" strokeWidth="1" />
                <line x1="80%" y1="40%" x2="40%" y2="80%" stroke="white" strokeWidth="1" />
                <line x1="40%" y1="80%" x2="70%" y2="85%" stroke="white" strokeWidth="1" />
                <line x1="20%" y1="30%" x2="40%" y2="80%" stroke="white" strokeWidth="1" />
              </svg>

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">Akanksha Thakur</h3>
                <p className="text-accent-blue text-sm font-medium mb-1">B.Tech — AI & ML</p>
                <p className="text-gray-400 text-sm">Aspiring AI & ML Engineer</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">A Little About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                I am a curious and ambitious B.Tech student with a strong interest in <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Machine Learning</span>, software development, and emerging technologies.
              </p>
              <p>
                I enjoy learning by building projects rather than only studying concepts theoretically. From developing intelligent systems to experimenting with web technologies and programming, I like turning ideas into practical solutions.
              </p>
              <p>
                My journey in technology is driven by curiosity, <span className="text-white font-medium">continuous learning</span>, and the desire to create meaningful solutions using technology. I am currently strengthening my foundations in programming, Data Structures & Algorithms, AI/ML, and software development while exploring new technologies and real-world applications.
              </p>
              <p>
                My long-term goal is to become a skilled AI/ML Engineer and work on <span className="text-white font-medium">innovation</span>-driven systems that combine intelligence, automation, and real-world impact.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              {['Artificial Intelligence', 'Machine Learning', 'Problem Solving', 'Innovation', 'Continuous Learning'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MY JOURNEY (TIMELINE) */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            My Journey
          </motion.h2>
          
          <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12 pb-8">
            {[
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "B.Tech in AI & ML",
                date: "Present",
                desc: "Currently pursuing B.Tech with specialization in Artificial Intelligence & Machine Learning."
              },
              {
                icon: <TerminalSquare className="w-5 h-5" />,
                title: "Exploring Programming",
                date: "Foundation",
                desc: "Built a strong interest in programming, problem-solving, and Data Structures & Algorithms."
              },
              {
                icon: <Bot className="w-5 h-5" />,
                title: "Building Intelligent Projects",
                date: "Practice",
                desc: "Started developing practical projects involving automation, sensors, AI/ML concepts, and real-world problem solving."
              },
              {
                icon: <Rocket className="w-5 h-5" />,
                title: "Future Goal",
                date: "Vision",
                desc: "Aspiring to become an AI/ML Engineer and contribute to innovative technology-driven solutions."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="relative pl-10 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-background border-2 border-accent-blue flex items-center justify-center text-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {item.icon}
                </div>
                
                <div className="glass-card">
                  <span className="text-accent-purple text-xs font-bold uppercase tracking-wider mb-2 block">{item.date}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT I LOVE BUILDING */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            What I Love Building
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BrainCircuit className="w-8 h-8" />, title: "Artificial Intelligence", desc: "Exploring intelligent systems, machine learning concepts, automation, and AI-powered solutions." },
              { icon: <Cpu className="w-8 h-8" />, title: "Smart Technology", desc: "Interested in combining software, sensors, and intelligent systems to solve real-world problems." },
              { icon: <Code2 className="w-8 h-8" />, title: "Software Development", desc: "Enjoy creating functional and visually appealing applications while improving my programming skills." },
              { icon: <Lightbulb className="w-8 h-8" />, title: "Problem Solving", desc: "Constantly improving my logical thinking and Data Structures & Algorithms skills through practice." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="glass-card group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500"></div>
                <div className="p-4 rounded-2xl bg-white/5 text-blue-400 mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. MY PROJECTS HIGHLIGHT */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Things I've Built
          </motion.h2>
          
          <motion.div variants={fadeUp} className="glass-card p-0 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 bg-white/5 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
                {/* Abstract graphic for the project */}
                <div className="relative z-10 grid grid-cols-2 gap-4 opacity-70">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"><Cpu className="text-white/50" /></div>
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"><Lightbulb className="text-white/50" /></div>
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"><Bot className="text-white/50" /></div>
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"><BrainCircuit className="text-white/50" /></div>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 md:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">Featured Project</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Smart Irrigation System with Weed Removal & Animal Detection</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  A smart agriculture system designed to improve farming efficiency by combining automated irrigation, weed removal, and animal detection. The system uses sensors and embedded components to monitor environmental conditions and automate specific agricultural tasks.
                </p>
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Technology / Components</h4>
                  <p className="text-sm text-accent-blue leading-loose font-medium">
                    Arduino UNO • Soil Moisture Sensor • PIR Sensor • Relay Module • Water Pump • Buzzer • Motor Driver • DC Motor
                  </p>
                </div>
                <Link href="/projects" className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors group">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. TECHNICAL INTERESTS */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            My Technical Interests
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { category: "Programming", skills: ["C++", "Python", "JavaScript", "HTML", "CSS"] },
              { category: "AI / ML", skills: ["Machine Learning", "Artificial Intelligence", "Data Analysis", "Computer Vision", "AI-powered Applications"] },
              { category: "Development", skills: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
              { category: "Core Concepts", skills: ["Data Structures & Algorithms", "DBMS", "Software Engineering", "Object-Oriented Programming"] }
            ].map((group, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                  <span className="w-8 h-px bg-accent-blue/50"></span>
                  <span>{group.category}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/5 rounded-lg text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. MY STRENGTHS */}
      <section className="container mx-auto px-6 py-20 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Defines Me
          </motion.h2>
          
          {/* Subtle horizontal marquee style display for strengths */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Curious Learner', 'Problem Solver', 'Creative Thinker', 'Adaptable', 'Team Player', 'Consistent Learner', 'Technology Enthusiast', 'Goal Oriented'].map((strength, i) => (
              <motion.div 
                key={strength}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-6 py-4 glass-card rounded-2xl flex items-center space-x-3 border-white/10 hover:border-accent-purple/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>
                <span className="font-semibold text-gray-200">{strength}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BEYOND CODE */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto glass-card p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] -z-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Beyond Technology</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-12">
            Technology is a big part of my journey, but curiosity is what drives me. I enjoy exploring creative interests, discovering new ideas, learning from experiences, and finding inspiration beyond the world of code. <br/><br/>
            I believe that creativity and technology work best together—and that some of the best ideas come from looking at problems from a different perspective.
          </p>
          
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {[
              { icon: <Palette />, label: "Creativity" },
              { icon: <Music />, label: "Music" },
              { icon: <Plane />, label: "Travel" },
              { icon: <Palette />, label: "Art" }, // Re-using Palette for Art if no Brush icon is easily available
              { icon: <BookOpen />, label: "Learning" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="p-4 rounded-full bg-white/5 text-white">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. CAREER VISION & CTA */}
      <section className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-sm font-bold text-accent-blue tracking-[0.3em] uppercase">
            Where I'm Heading
          </motion.h2>
          
          <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Building the future with AI, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">one idea at a time.</span>
          </motion.h3>
          
          <motion.p variants={fadeUp} className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            My goal is to grow into a capable AI/ML Engineer who can transform complex problems into practical, intelligent solutions. I want to continuously learn, work on challenging projects, gain real-world experience, and contribute to technology that creates meaningful impact.
          </motion.p>
          
          <motion.div variants={fadeUp} className="pt-16 pb-8 border-t border-white/10 mt-16">
            <h4 className="text-2xl font-bold text-white mb-4">Let's Build Something Intelligent.</h4>
            <p className="text-gray-400 mb-10">I'm always excited to learn, collaborate, build, and explore new opportunities in technology.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
