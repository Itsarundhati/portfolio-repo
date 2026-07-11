import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Sideart } from "@/components/portfolio/Sideart";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Background } from "@/components/portfolio/Background";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Loader } from "@/components/portfolio/Loader";
import { useReveal } from "@/hooks/useReveal";

export default function App() {
  useReveal();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const layer = document.getElementById("sparkle-layer");
      if (!layer) return;
      for (let i = 0; i < 8; i++) {
        const s = document.createElement("span");
        const dx = (Math.random() - 0.5) * 140;
        const dy = (Math.random() - 0.5) * 140;
        s.textContent = ["✦", "♡", "✿", "✧"][i % 4];
        s.style.cssText = `position:absolute;left:${e.clientX}px;top:${e.clientY}px;color:oklch(0.78 0.14 5);font-size:${12 + Math.random() * 14}px;pointer-events:none;transition:transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.9s ease-out;will-change:transform,opacity;`;
        layer.appendChild(s);
        requestAnimationFrame(() => {
          s.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random() * 360}deg)`;
          s.style.opacity = "0";
        });
        setTimeout(() => s.remove(), 900);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <main className="relative">
      <Loader />
      <Background />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Sideart />
      <Timeline />
      <Contact />
      <div id="sparkle-layer" className="pointer-events-none fixed inset-0 z-[150]" />
    </main>
  );
}
