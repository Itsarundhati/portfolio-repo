import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg"; 
import v1 from "@/assets/video1.mp4";
import v2 from "@/assets/video2.mp4";

const PROJECTS = [
  { type: "image", src: p1, span: "md:col-span-2 md:row-span-2" },
  { type: "video", src: v1, span: "" },
  { type: "image", src: p2, span: "" },
  { type: "video", src: v2, span: "" },
  { type: "image", src: p3, span: "" },
  { type: "image", src: p4, span: "" }
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">♡ ART ♡</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Side quests</h2>
        </div>

       <div className="reveal grid auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-3">
  {PROJECTS.map((p, index) => (
    <div
      key={index}
      className={`group relative overflow-hidden rounded-3xl shadow-soft ${p.span}`}
    >
      {p.type === "image" ? (
        <img
          src={p.src}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <video
          src={p.src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
