const ITEMS = [
  { y: "2024 - cuurent", role: "Test Engineer", co: "Keyvalue Software Solutins", desc: "Building confidence in software through automation, API validation, performance testing, and deploying intelligent agent-based solutions" },
  { y: "2022", role: "Associate Test Engineer", co: "Keyvalue Software Solutins", desc: "Started my journey in software testing, learning automation fundamentals and contributing to web application testing." },
  { y: "2022", role: "BTech", co: "Mar Atanasius College of Engineering", desc: "Completed bacherlors in Electronics and Communications Engineering" },
  { y: "2018", role: "High School Graduation", co: "Amrita Vidyalayam" },
];

export function Timeline() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">❀ JOURNEY ❀</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">My timeline</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose/0 via-rose/60 to-rose/0" />
          {ITEMS.map((it, i) => (
            <div
              key={it.y}
              className={`reveal relative mb-10 flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 md:px-10">
                <div className="glass rounded-3xl p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className="text-xs tracking-widest text-rose">{it.y}</div>
                  <h3 className="mt-1 font-display text-2xl">{it.role}</h3>
                  <p className="text-sm text-muted-foreground">@ {it.co}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                <div className="relative h-5 w-5">
                  <div className="absolute inset-0 rounded-full bg-aurora animate-gradient shadow-glow" />
                  <div className="absolute -inset-2 rounded-full border border-rose/40 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
