import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-dream transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 animate-morph bg-aurora animate-gradient shadow-glow" />
          <div className="absolute inset-3 animate-morph bg-white/70 backdrop-blur" style={{ animationDelay: "-0.6s" }} />
        </div>
        <p className="font-display text-lg text-rose tracking-widest">d r e a m i n g…</p>
      </div>
    </div>
  );
}
