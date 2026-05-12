import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";

const PROJECTS = [
  { img: p1, title: "Cloud Diaries", tag: "Web · 2025", span: "md:col-span-2 md:row-span-2", desc: "A dreamy journaling app for soft thoughts." },
  { img: p2, title: "Petal", tag: "Mobile · 2024", span: "", desc: "Skincare companion with kawaii personality." },
  { img: p3, title: "Aura", tag: "Brand · 2024", span: "", desc: "Identity for a luxury wellness studio." },
  { img: p4, title: "Sweetheart Co.", tag: "Branding · 2025", span: "md:col-span-2", desc: "Stationery brand world-building." },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">♡ SELECTED WORK ♡</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Quality I’ve Engineered</h2>
        </div>

        <div className="reveal grid auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className={`group relative overflow-hidden rounded-3xl glass shadow-soft transition-all duration-700 hover:shadow-dreamy hover:-translate-y-2 ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/60 via-rose/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 ring-0 ring-rose/50 transition-all duration-500 rounded-3xl group-hover:ring-4" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs tracking-widest opacity-90">{p.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl mt-1">{p.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {p.desc}
                </p>
              </div>
              <div className="absolute right-4 top-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center text-rose opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
