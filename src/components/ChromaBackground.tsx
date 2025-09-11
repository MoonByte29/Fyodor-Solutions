import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import bgimg from "./../assets/bgimg.jpg";

export interface ChromaBackgroundProps {
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  className?: string;
}

const ChromaBackground: React.FC<ChromaBackgroundProps> = ({
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  className = "",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<any>(null);
  const setY = useRef<any>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-screen overflow-hidden ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Background Image */}
      <img
        src={bgimg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Grayscale overlay with a hole (spotlight reveals color) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage: `
            radial-gradient(
              circle var(--r) at var(--x) var(--y),
              transparent 0%, 
              transparent 25%, 
              black 60%, 
              black 100%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              circle var(--r) at var(--x) var(--y),
              transparent 0%, 
              transparent 25%, 
              black 60%, 
              black 100%
            )
          `,
        }}
      />

      {/* Fade-out layer */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 15%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.3) 75%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 15%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.3) 75%, transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaBackground;
