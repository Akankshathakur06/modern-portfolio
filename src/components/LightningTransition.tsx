"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LightningTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 0 - 40%: Subtle sparks (opacity of small particles increases)
  const sparksOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
  
  // 40 - 80%: Lightning draws down the screen
  const mainLightningLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const branchLightningLength = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const lightningOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 0.9], [0, 1, 1, 0]);

  // 80 - 100%: Flash effect
  const flashOpacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[150vh] flex justify-center items-center overflow-hidden">
      
      {/* Container for the lightning SVG */}
      <div className="absolute inset-0 w-full h-full flex justify-center">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full max-w-2xl h-full drop-shadow-[0_0_15px_rgba(147,51,234,0.8)]"
        >
          <defs>
            <linearGradient id="lightning-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="20%" stopColor="rgba(147, 51, 234, 1)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
              <stop offset="80%" stopColor="rgba(59, 130, 246, 1)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
            </linearGradient>
          </defs>

          {/* Main central lightning bolt */}
          <motion.path
            d="M50 0 L45 15 L52 25 L48 40 L55 55 L42 70 L53 85 L50 100"
            fill="none"
            stroke="url(#lightning-grad)"
            strokeWidth="0.5"
            style={{ 
              pathLength: mainLightningLength,
              opacity: lightningOpacity 
            }}
          />

          {/* Branching bolts */}
          <motion.path
            d="M52 25 L65 35 L58 45 L70 55"
            fill="none"
            stroke="url(#lightning-grad)"
            strokeWidth="0.3"
            style={{ 
              pathLength: branchLightningLength,
              opacity: lightningOpacity 
            }}
          />
          <motion.path
            d="M48 40 L35 50 L42 60 L30 75"
            fill="none"
            stroke="url(#lightning-grad)"
            strokeWidth="0.2"
            style={{ 
              pathLength: branchLightningLength,
              opacity: lightningOpacity 
            }}
          />
          <motion.path
            d="M55 55 L75 70 L65 85"
            fill="none"
            stroke="url(#lightning-grad)"
            strokeWidth="0.3"
            style={{ 
              pathLength: branchLightningLength,
              opacity: lightningOpacity 
            }}
          />
        </svg>
      </div>

      {/* Floating Spark Particles */}
      <motion.div 
        style={{ opacity: sparksOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[30%] left-[40%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff] animate-ping" />
        <div className="absolute top-[50%] right-[35%] w-1 h-1 bg-accent-blue rounded-full shadow-[0_0_10px_#3b82f6] animate-pulse" />
        <div className="absolute top-[70%] left-[45%] w-1.5 h-1.5 bg-accent-purple rounded-full shadow-[0_0_15px_#9333ea] animate-ping" style={{ animationDelay: '500ms' }} />
      </motion.div>

      {/* The Flash Overlay */}
      <motion.div
        style={{ opacity: flashOpacity }}
        className="absolute inset-0 z-50 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none mix-blend-overlay"
      />
      <motion.div
        style={{ opacity: flashOpacity }}
        className="absolute inset-0 z-40 bg-accent-blue/30 pointer-events-none mix-blend-screen blur-3xl"
      />

    </div>
  );
}
