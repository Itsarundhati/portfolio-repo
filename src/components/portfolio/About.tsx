import profile from "@/assets/profile.png";

const SKILLS = ["Automation", "Reliability", "Agents", "Deployment", "Performance"];

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
              <img src={profile} alt="Portrait of Arundhati" className="h-full w-full object-cover" width={768} height={896} />
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
                   className="absolute text-center whitespace-nowrap"
                       style={{
                            left: `calc(50% + ${x}px)`,
                           top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%) rotate(0deg)", }}>
                    <div className="animate-[spin_22s_linear_infinite_reverse] glass rounded-full px-4 py-2 text-xs font-medium text-rose shadow-glow whitespace-nowrap">
                      {s}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal space-y-6">
            <h3 className="font-display text-3xl md:text-4xl">Crafting quality with a little sparkle ✨</h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m a QA Automation Engineer creating reliable digital experiences that work as beautifully as they’re built.
               With experience in automation, API testing, performance validation, and intelligent system deployment,
                I believe quality isn’t just checked — it’s thoughtfully engineered.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I’m not writing test scripts or solving tricky edge cases, you’ll usually find me sipping coffee, playing video games or sketching
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                ["20+", "Projects"],
                ["4y", "Experience"],
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
