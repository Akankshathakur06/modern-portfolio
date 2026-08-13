"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  speed: number;
  angle: number;
  distance: number;
  opacity: number;
  baseOpacity: number;
  colorType: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const pointer = {
      x: -1000,
      y: -1000,
    };

    let w = window.innerWidth;
    let h = window.innerHeight;

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const isMobile = w < 768;
      const particleCount = isMobile ? Math.floor(Math.random() * 70 + 80) : Math.floor(Math.random() * 150 + 150); // 80-150 mobile, 150-300 desktop

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.5 + 0.2;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          baseX: Math.random() * w,
          baseY: Math.random() * h,
          speed: Math.random() * 0.5 + 0.1,
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * 1 + 0.5,
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          colorType: Math.random(),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      const isMobile = w < 768;
      const interactionRadius = isMobile ? 150 : 220;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural drifting
        p.angle += p.speed * 0.01;
        
        // Wrap around naturally
        if (p.baseX > w + 20) p.baseX = -20;
        if (p.baseX < -20) p.baseX = w + 20;
        if (p.baseY > h + 20) p.baseY = -20;
        if (p.baseY < -20) p.baseY = h + 20;

        p.baseX += Math.cos(p.angle) * 0.1;
        p.baseY += Math.sin(p.angle) * 0.1;

        let targetX = p.baseX + Math.cos(p.angle) * p.distance;
        let targetY = p.baseY + Math.sin(p.angle) * p.distance;

        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < interactionRadius) {
          // Attract towards pointer, with a swirling effect
          const force = (interactionRadius - dist) / interactionRadius;
          const swirlAngle = Math.atan2(dy, dx) + Math.PI / 6; // Swirl angle offset
          
          targetX += Math.cos(swirlAngle) * force * 80;
          targetY += Math.sin(swirlAngle) * force * 80;

          // Increase brightness when near cursor
          p.opacity = Math.min(1, p.opacity + 0.05);
        } else {
          // Return to normal brightness
          p.opacity = Math.max(p.baseOpacity, p.opacity - 0.02);
        }

        // Smooth movement (easing)
        p.x += (targetX - p.x) * 0.06;
        p.y += (targetY - p.y) * 0.06;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Subtle glow: mostly white/light gray, some faint blue/purple
        if (p.colorType > 0.8) {
          ctx.fillStyle = `rgba(200, 220, 255, ${p.opacity})`; // Faint blue
        } else if (p.colorType > 0.6) {
          ctx.fillStyle = `rgba(220, 200, 255, ${p.opacity})`; // Faint purple
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`; // White
        }
        
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    // Use passive event listeners for better scrolling performance on mobile
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
