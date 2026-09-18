"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StormTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 0-20%: Clouds appear
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.7]);
  
  // 20-40%: Rain particles fade in
  const rainOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 0.4]);
  
  // 40-60%: Distant lightning flashes (soft ambient glow)
  const distantFlashOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.5, 0.55, 0.6], [0, 0.2, 0, 0.3, 0]);

  // 60-80%: Branching lightning starts drawing and glowing
  const strikeProgress = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const strikeOpacity = useTransform(scrollYProgress, [0.55, 0.7, 0.75, 0.85], [0, 1, 1, 0]);

  // 80-90%: THE MAJOR STRIKE FLASH
  const blindingFlash = useTransform(scrollYProgress, [0.75, 0.8, 0.85], [0, 1, 0]);
  
  // 80-90%: Thunder rumble (screen shake on the wrapper)
  const thunderShake = useTransform(scrollYProgress, [0.78, 0.8, 0.82, 0.84, 0.86], ["0px", "-4px", "4px", "-2px", "0px"]);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ x: thunderShake }}
      className="relative w-full h-[200vh] flex flex-col items-center overflow-hidden"
    >
      
      {/* 1. ATMOSPHERIC CLOUDS */}
      <motion.div 
        style={{ opacity: cloudOpacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-0 left-0 w-full h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(20,20,30,0.8)_0%,transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-900/10 blur-[100px] mix-blend-screen" />
      </motion.div>

      {/* 2. RAIN PARTICLES */}
      <motion.div
        style={{ opacity: rainOpacity }}
        className="absolute inset-0 pointer-events-none z-10 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQwIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] animate-[rain_0.3s_linear_infinite]"
      />

      {/* 3. DISTANT FLASHES */}
      <motion.div
        style={{ opacity: distantFlashOpacity }}
        className="absolute inset-0 z-20 pointer-events-none bg-accent-blue/10 mix-blend-screen blur-3xl"
      />

      {/* 4. MAIN BRANCHING LIGHTNING STRIKE */}
      <div className="absolute inset-0 w-full h-full flex justify-center z-30 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full max-w-4xl h-[80%] mt-[10vh] drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="lightning-core" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Main jagged core */}
          <motion.path
            d="M50 0 L42 12 L51 22 L45 35 L58 48 L46 62 L60 75 L48 88 L52 100"
            fill="none"
            stroke="url(#lightning-core)"
            strokeWidth="0.8"
            filter="url(#glow)"
            style={{ pathLength: strikeProgress, opacity: strikeOpacity }}
          />

          {/* Major Left Branch */}
          <motion.path
            d="M45 35 L30 42 L35 55 L20 65"
            fill="none"
            stroke="url(#lightning-core)"
            strokeWidth="0.4"
            filter="url(#glow)"
            style={{ pathLength: strikeProgress, opacity: strikeOpacity }}
          />

          {/* Major Right Branch */}
          <motion.path
            d="M58 48 L75 58 L68 70 L85 82"
            fill="none"
            stroke="url(#lightning-core)"
            strokeWidth="0.3"
            filter="url(#glow)"
            style={{ pathLength: strikeProgress, opacity: strikeOpacity }}
          />

          {/* Micro Branches */}
          <motion.path
            d="M42 12 L35 18 M51 22 L62 25 M46 62 L35 70"
            fill="none"
            stroke="url(#lightning-core)"
            strokeWidth="0.15"
            style={{ pathLength: strikeProgress, opacity: strikeOpacity }}
          />
        </svg>
      </div>

      {/* 5. BLINDING FLASH (The strike impact) */}
      <motion.div
        style={{ opacity: blindingFlash }}
        className="absolute inset-0 z-50 pointer-events-none"
      >
        <div className="absolute inset-0 bg-white mix-blend-overlay opacity-80" />
        <div className="absolute inset-0 bg-accent-blue mix-blend-screen blur-3xl opacity-60" />
      </motion.div>

    </motion.div>
  );
}
