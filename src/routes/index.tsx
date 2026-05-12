import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Timeline } from "@/components/portfolio/Timeline";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Background } from "@/components/portfolio/Background";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Loader } from "@/components/portfolio/Loader";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arundhati · Dreamy Portfolio" },
      { name: "description", content: "A dreamy portfolio of magical, soft-pink digital design and creative development by Arundhati." },
      { property: "og:title", content: "Arundhati · Dreamy Portfolio" },
      { property: "og:description", content: "A dreamy portfolio of magical, soft-pink digital design and creative development." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  useReveal();

  // Sparkle burst on click easter egg
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
      {/* <Projects /> */}
      <Skills />
      <Timeline />
      {/* <Testimonials /> */}
      <Contact />
      <div id="sparkle-layer" className="pointer-events-none fixed inset-0 z-[150]" />
    </main>
  );
}
