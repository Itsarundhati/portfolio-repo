import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let x = rx, y = ry;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      if (Math.random() < 0.08) {
        const id = idRef.current++;
        setSparkles((s) => [...s.slice(-12), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => setSparkles((s) => s.filter((p) => p.id !== id)), 900);
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={ringRef} className="absolute h-11 w-11 rounded-full border border-rose/60 mix-blend-multiply transition-[width,height] duration-300" style={{ boxShadow: "0 0 24px oklch(0.78 0.14 5 / 0.5)" }} />
      <div ref={dotRef} className="absolute h-3 w-3 rounded-full bg-rose" style={{ boxShadow: "0 0 12px oklch(0.78 0.14 5 / 0.8)" }} />
      {sparkles.map((s) => (
        <span key={s.id} className="absolute text-rose animate-sparkle" style={{ left: s.x, top: s.y, fontSize: 14 }}>✦</span>
      ))}
    </div>
  );
}
