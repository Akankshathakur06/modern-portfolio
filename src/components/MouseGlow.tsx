"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseGlow = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Track mouse position
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Add spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width/height of the glow element (600px / 2 = 300px)
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-300"
      style={{
        x: smoothX,
        y: smoothY,
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 60%)",
        borderRadius: "50%",
      }}
    />
  );
};

export default MouseGlow;
