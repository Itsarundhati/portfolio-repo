import profile from "@/assets/profile.jpg";

const SKILLS = ["UI/UX", "React", "Motion", "Branding", "3D", "Illustration"];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">★ ABOUT ★</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">A little about me</h2>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* profile + orbit */}
          <div className="reveal relative mx-auto h-[22rem] w-[22rem] md:h-[26rem] md:w-[26rem]">
            <div className="absolute inset-0 rounded-full bg-aurora animate-gradient blur-2xl opacity-70" />
            <div className="absolute inset-4 overflow-hidden rounded-full glass-strong shadow-dreamy">
              <img src={profile} alt="Portrait of Luna Rose" className="h-full w-full object-cover" width={768} height={896} />
            </div>
            {/* orbiting bubbles */}
            <div className="absolute inset-0 animate-[spin_22s_linear_infinite]">
              {SKILLS.map((s, i) => {
                const angle = (i / SKILLS.length) * Math.PI * 2;
                const r = 180;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                return (
                  <div
                    key={s}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    <div className="animate-[spin_22s_linear_infinite_reverse] glass rounded-full px-4 py-2 text-xs font-medium text-rose shadow-glow whitespace-nowrap">
                      {s}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal space-y-6">
            <h3 className="font-display text-3xl md:text-4xl">Designing with a little sparkle ✨</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a creative designer & developer crafting dreamy interfaces that feel as good as they look.
              Five years deep into pixels, gradients, and the perfect border-radius — I believe great design
              should feel like a soft hug.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not designing, you'll find me sipping strawberry matcha, collecting stationery, or
              chasing golden hour with my film camera.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                ["50+", "Projects"],
                ["5y", "Experience"],
                ["28", "Awards"],
              ].map(([n, l]) => (
                <div key={l} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl text-gradient">{n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
