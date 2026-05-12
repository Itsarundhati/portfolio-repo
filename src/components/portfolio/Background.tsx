import { useEffect, useState } from "react";

export function Background() {
  const [m, setM] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setM({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const decor = ["✿", "✦", "❀", "♡", "✧", "❁", "♥", "✿"];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-aurora opacity-60 blur-3xl animate-blob"
        style={{ transform: `translate(${m.x * 30}px, ${m.y * 30}px)` }} />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.1 320), transparent 70%)", transform: `translate(${-m.x * 40}px, ${m.y * 20}px)` }} />
      <div className="absolute bottom-0 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.9 0.08 50), transparent 70%)", animationDelay: "-6s" }} />

      {decor.map((d, i) => (
        <span key={i}
          className="absolute text-rose/40 animate-float"
          style={{
            left: `${(i * 137) % 100}%`,
            top: `${(i * 73) % 100}%`,
            fontSize: `${14 + (i % 4) * 6}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}>{d}</span>
      ))}
    </div>
  );
}
