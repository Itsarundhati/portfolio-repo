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
      <div className="absolute -top-24 -left-24 h-[24rem] w-[24rem] sm:-top-32 sm:-left-32 sm:h-[40rem] sm:w-[40rem] rounded-full bg-aurora opacity-60 blur-3xl animate-blob"
        style={{ transform: `translate(${m.x * 22}px, ${m.y * 22}px)` }} />
      <div className="absolute top-[18%] -right-24 h-[20rem] w-[20rem] sm:top-1/3 sm:-right-40 sm:h-[36rem] sm:w-[36rem] rounded-full opacity-50 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.1 320), transparent 70%)", transform: `translate(${-m.x * 36}px, ${m.y * 18}px)` }} />
      <div className="absolute bottom-0 left-1/4 h-[18rem] w-[18rem] sm:h-[32rem] sm:w-[32rem] rounded-full opacity-50 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.9 0.08 50), transparent 70%)", animationDelay: "-6s" }} />

      {decor.map((d, i) => (
        <span key={i}
          className={`absolute text-rose/40 animate-float ${i > 3 ? "hidden sm:block" : ""}`}
          style={{
            left: `${(i * 137) % 100}%`,
            top: `${(i * 73) % 100}%`,
            fontSize: `${12 + (i % 4) * 4}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}>{d}</span>
      ))}
    </div>
  );
}
