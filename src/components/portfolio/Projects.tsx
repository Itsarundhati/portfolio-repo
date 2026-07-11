import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "JourneyLog",
    subtitle: "QA Session Recorder & Test Assistant",
    description:
      "A browser extension that records testing sessions, captures user interactions, and generates structured logs to streamline bug reporting and test documentation.",
    tags: ["QA", "Browser Extension", "Automation"],
    github: "https://github.com/Itsarundhati/journeylog/blob/main/README.md", // Replace with your repo
  },
] as const;

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">♡ WORK ♡</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/70">
            Projects I've built to explore new technologies, strengthen my
            technical skills, and create practical solutions.
          </p>
        </div>

        <div className="reveal grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/10 backdrop-blur-sm p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-rose/40 hover:bg-white/20 hover:shadow-xl">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-rose/90">
                  <span>{project.subtitle}</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-black">
                  {project.title}
                </h3>

                <p className="mt-4 flex-grow text-sm leading-7 text-foreground/70">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-foreground/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2 py-1 transition-colors group-hover:border-rose/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}