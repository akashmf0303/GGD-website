import React, { useEffect, useRef } from 'react';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.pageYOffset;
      const shapes = containerRef.current.querySelectorAll('.parallax-shape');
      
      shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        (shape as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-base via-white to-base opacity-90" />
      
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* 3D Abstract Shapes */}
      {/* Large floating orb - top right */}
      <div className="parallax-shape absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/8 to-secondary/12 blur-3xl animate-float" 
           style={{ animationDuration: '20s' }} />
      
      {/* Medium floating orb - left side */}
      <div className="parallax-shape absolute top-1/3 -left-24 w-64 h-64 rounded-full bg-gradient-to-tr from-secondary/6 to-accent/8 blur-2xl animate-float-reverse" 
           style={{ animationDuration: '15s' }} />
      
      {/* Small accent orb - bottom right */}
      <div className="parallax-shape absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-bl from-accent/10 to-primary/8 blur-xl animate-float" 
           style={{ animationDuration: '12s' }} />
      
      {/* Geometric shapes */}
      <div className="parallax-shape absolute top-1/2 left-1/3 w-48 h-48 transform rotate-45 bg-gradient-to-br from-primary/4 to-transparent blur-lg animate-slow-spin" />
      
      <div className="parallax-shape absolute bottom-1/3 right-1/3 w-36 h-36 transform rotate-12 bg-gradient-to-tl from-secondary/5 to-transparent blur-lg animate-slow-spin-reverse" />
      
      {/* Layered depth elements */}
      <div className="parallax-shape absolute top-1/4 right-1/2 w-72 h-2 bg-gradient-to-r from-transparent via-primary/6 to-transparent blur-sm transform rotate-45 animate-pulse" 
           style={{ animationDuration: '6s' }} />
      
      <div className="parallax-shape absolute bottom-1/2 left-1/4 w-56 h-1 bg-gradient-to-r from-transparent via-secondary/8 to-transparent blur-sm transform -rotate-45 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(51, 51, 51, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(51, 51, 51, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px'
           }} />
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }} />
    </div>
  );
};

export default Background3D;