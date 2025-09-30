import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const Background3D: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Destroy old instance if HMR reloads
    if (effectRef.current) effectRef.current.destroy();

    effectRef.current = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,

      // Brand colors (hex -> 0xRRGGBB)
      baseColor: 0xF5F5F5,     // page background
      lowlightColor: 0x673AB7, // secondary (purple)
      midtoneColor: 0xFF5722,  // primary (orange)
      highlightColor: 0xFFC107,// accent (glints)

      // Tuning – adjust to taste
      blurFactor: 0.60,   // softness of fog
      speed: 0.80,        // fog movement
      zoom: 0.85,         // scene scale
    });

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none isolate">
      {/* Vanta mounts its WebGL canvas here */}
      <div ref={vantaRef} className="absolute inset-0" />

      {/* Soft brand blobs (very subtle so they don't fight fog) */}
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 blur-[120px]" />
      <div className="absolute top-1/3 -left-32 w-[24rem] h-[24rem] rounded-full bg-gradient-to-tr from-secondary/15 to-accent/25 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-gradient-to-bl from-accent/20 to-primary/15 blur-[80px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.01] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Background3D;
