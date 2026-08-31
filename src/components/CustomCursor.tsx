"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the device uses touch to disable the custom cursor there
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("nav-link")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob-morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }
        .blob-cursor {
          animation: blob-morph 4s linear infinite;
        }
        /* Hide default cursor on desktop */
        @media (pointer: fine) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}} />
      
      {/* Main morphing blob */}
      <motion.div
        className="blob-cursor pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
        style={{
          background: "linear-gradient(135deg, #ffffff, #d8b4fe)", // White to faint purple
          filter: "blur(2px)",
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 40 : 20),
          y: mousePosition.y - (isHovering ? 40 : 20),
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
      
      {/* Tiny center dot for precision */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 bg-white rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: 8,
          height: 8,
          opacity: isHovering ? 0 : 1, // Hide the center dot when hovering over links to emphasize the expanded blob
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.1,
        }}
      />
    </>
  );
}
