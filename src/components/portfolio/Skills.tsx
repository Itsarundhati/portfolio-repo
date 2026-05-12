const SKILLS = [
  { name: "Design", v: 95, icon: "✿" },
  { name: "Development", v: 88, icon: "✦" },
  { name: "Motion", v: 82, icon: "✧" },
  { name: "Branding", v: 90, icon: "♡" },
];

function Ring({ v, icon }: { v: number; icon: string }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const off = c - (v / 100) * c;
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id={`g-${v}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.14 5)" />
            <stop offset="100%" stopColor="oklch(0.82 0.1 320)" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={r} fill="none" stroke="oklch(0.92 0.04 10)" strokeWidth="8" />
        <circle
          cx="60" cy="60" r={r} fill="none"
          stroke={`url(#g-${v})`} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
          style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl text-rose">{icon}</div>
        <div className="font-display text-xl">{v}%</div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">✦ SKILLS ✦</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Things I'm sweet at</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {SKILLS.map((s) => (
            <div key={s.name} className="reveal group glass rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-dreamy">
              <div className="mx-auto transition-transform duration-700 group-hover:scale-110">
                <Ring v={s.v} icon={s.icon} />
              </div>
              <p className="mt-4 font-display text-lg">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
