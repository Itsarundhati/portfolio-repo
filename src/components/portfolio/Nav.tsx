import { useEffect, useState } from "react";

const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#projects"],
  // ["Work", "#projects"],
  // ["Skills", "#skills"],
  ["Journey", "#experience"],
   ["Other", "#sideart"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed left-1/2 top-5 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled ? "scale-95" : ""}`}>
      <div className="glass-strong flex items-center gap-1 rounded-full px-3 py-2 shadow-soft">
        <a href="#home" className="px-3 font-display text-base text-gradient">A✿</a>
        <div className="hidden md:flex items-center">
          {LINKS.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="relative rounded-full px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:text-rose"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
