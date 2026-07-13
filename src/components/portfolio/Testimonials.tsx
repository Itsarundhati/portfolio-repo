import { useEffect, useState } from "react";

const Q = [
  { q: "Luna  our brand into a literal dream. Pure magic.", n: "Mira K.", r: "Founder, Petal Skincare" },
  { q: "Working with Luna feels like opening a gift box every meeting.", n: "Sora T.", r: "CEO, Cloud Diaries" },
  { q: "The most detail-obsessed designer I've ever collaborated with.", n: "Ines L.", r: "Creative Director" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % Q.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-12 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">♥ KIND WORDS ♥</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Sweet things people said</h2>
        </div>

        <div className="reveal relative h-64">
          {Q.map((t, idx) => (
            <div
              key={t.n}
              className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <div className="glass-strong rounded-3xl p-10 text-center shadow-dreamy h-full flex flex-col justify-center">
                <div className="text-3xl text-rose">❝</div>
                <p className="mt-3 font-display text-2xl md:text-3xl text-foreground">{t.q}</p>
                <div className="mt-6">
                  <p className="font-medium text-rose">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Q.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${idx === i ? "w-8 bg-rose" : "w-2 bg-rose/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
