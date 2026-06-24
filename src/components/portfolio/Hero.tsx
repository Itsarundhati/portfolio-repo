import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";

const ROLES = ["Test Engineer", "Quality Architect", "Automation Engineer"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
      {/* floating 3D-ish shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[22%] h-28 w-28 rounded-[40%_60%_55%_45%] bg-aurora animate-gradient blur-[1px] animate-float shadow-glow" />
        <div className="absolute right-[10%] top-[18%] h-20 w-20 rounded-full animate-float-slow shadow-dreamy"
          style={{ background: "radial-gradient(circle at 30% 30%, white, oklch(0.85 0.12 350))" }} />
        <div className="absolute left-[18%] bottom-[18%] h-16 w-16 rotate-12 rounded-3xl bg-aurora animate-gradient animate-bounce-soft" />
        <div className="absolute right-[18%] bottom-[22%] text-5xl text-rose animate-float" style={{ animationDelay: "-2s" }}>♡</div>
        <div className="absolute left-1/2 top-[12%] text-3xl text-rose/60 animate-sparkle">✦</div>
      </div>

      <div className="relative max-w-5xl text-center">
        <div className="reveal in mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-widest text-rose">
          <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
          Available for Quality-Driven Projects
        </div>
        <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] font-light">
          <span className="block">hello, I'm</span>
          <span className="block text-gradient italic font-medium">Arundhati</span>
        </h1>

        <div className="mt-6 h-8 overflow-hidden">
          <div
            className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateY(-${i * 2}rem)` }}
          >
            {ROLES.map((r) => (
              <p key={r} className="h-8 text-lg md:text-xl text-muted-foreground">
                ✿ {r} ✿
              </p>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground/90">
         Crafting reliable digital experiences where precision meets seamless performance. ✨
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#projects">View my work →</MagneticButton>
          <MagneticButton variant="ghost" href="#contact">Say hello ♡</MagneticButton>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-rose/40 p-1.5">
            <div className="h-2 w-1 rounded-full bg-rose animate-bounce-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
