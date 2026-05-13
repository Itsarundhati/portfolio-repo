import { r as reactExports, V as jsxRuntimeExports } from "./server-aSsfuIKv.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#projects"],
  ["Skills", "#skills"],
  ["Journey", "#experience"],
  ["Contact", "#contact"]
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: `fixed left-1/2 top-5 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled ? "scale-95" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong flex items-center gap-1 rounded-full px-3 py-2 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "px-3 font-display text-base text-gradient", children: "A✿" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center", children: LINKS.map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: h,
        className: "relative rounded-full px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:text-rose",
        children: l
      },
      l
    )) })
  ] }) });
}
function MagneticButton({ children, variant = "primary", onClick, href, className = "" }) {
  const ref = reactExports.useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  const base = "magnetic relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide overflow-hidden group";
  const styles = variant === "primary" ? "text-primary-foreground shadow-glow" : "glass text-foreground hover:bg-white/70";
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    variant === "primary" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-aurora animate-gradient" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex items-center gap-2", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full ring-0 ring-rose/40 transition-[box-shadow] duration-500 group-hover:ring-4" })
  ] });
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { ref, href, onMouseMove: onMove, onMouseLeave: onLeave, className: `${base} ${styles} ${className}`, children: content });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref, onClick, onMouseMove: onMove, onMouseLeave: onLeave, className: `${base} ${styles} ${className}`, children: content });
}
const ROLES = ["Test Engineer", "Quality Architect", "Automation Engineer"];
function Hero() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[8%] top-[22%] h-28 w-28 rounded-[40%_60%_55%_45%] bg-aurora animate-gradient blur-[1px] animate-float shadow-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute right-[10%] top-[18%] h-20 w-20 rounded-full animate-float-slow shadow-dreamy",
          style: { background: "radial-gradient(circle at 30% 30%, white, oklch(0.85 0.12 350))" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[18%] bottom-[18%] h-16 w-16 rotate-12 rounded-3xl bg-aurora animate-gradient animate-bounce-soft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-[18%] bottom-[22%] text-5xl text-rose animate-float", style: { animationDelay: "-2s" }, children: "♡" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-[12%] text-3xl text-rose/60 animate-sparkle", children: "✦" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal in mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-widest text-rose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-rose animate-pulse" }),
        "Available for Quality-Driven Projects"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] font-light", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "hello, i'm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient italic font-medium", children: "Arundhati" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-8 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          style: { transform: `translateY(-${i * 2}rem)` },
          children: ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "h-8 text-lg md:text-xl text-muted-foreground", children: [
            "✿ ",
            r,
            " ✿"
          ] }, r))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-base text-muted-foreground/90", children: "Crafting reliable digital experiences where precision meets seamless performance. ✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { href: "#projects", children: "View my work →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { variant: "ghost", href: "#contact", children: "Say hello ♡" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-6 items-start justify-center rounded-full border border-rose/40 p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-1 rounded-full bg-rose animate-bounce-soft" }) }) })
    ] })
  ] });
}
const profile = "/portfolio-repo/assets/profile-Bd-Z4jNc.png";
const SKILLS$1 = ["Automation", "Reliability", "Agents", "Deployment", "Performance"];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "★ ABOUT ★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "A little about me" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal relative mx-auto h-[22rem] w-[22rem] md:h-[26rem] md:w-[26rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-aurora animate-gradient blur-2xl opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 overflow-hidden rounded-full glass-strong shadow-dreamy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile, alt: "Portrait of Arundhati", className: "h-full w-full object-cover", width: 768, height: 896 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-[spin_22s_linear_infinite]", children: SKILLS$1.map((s, i) => {
          const angle = i / SKILLS$1.length * Math.PI * 2;
          const r = 180;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute text-center whitespace-nowrap",
              style: {
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%) rotate(0deg)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-[spin_22s_linear_infinite_reverse] glass rounded-full px-4 py-2 text-xs font-medium text-rose shadow-glow whitespace-nowrap", children: s })
            },
            s
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl", children: "Crafting quality with a little sparkle ✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "I’m a QA Automation Engineer creating reliable digital experiences that work as beautifully as they’re built. With experience in automation, API testing, performance validation, and intelligent system deployment, I believe quality isn’t just checked — it’s thoughtfully engineered." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "When I’m not writing test scripts or solving tricky edge cases, you’ll usually find me sipping coffee, playing video games or sketching" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 pt-4", children: [
          ["20+", "Projects"],
          ["4y", "Experience"]
        ].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: l })
        ] }, l)) })
      ] })
    ] })
  ] }) });
}
const SKILLS = [
  { name: "Playwright", v: 95, icon: "✿" },
  { name: "JIRA", v: 90, icon: "✦" },
  { name: "Postman", v: 80, icon: "✧" },
  { name: "Git", v: 85, icon: "♡" },
  { name: "JMeter", v: 85, icon: "✩" },
  { name: "JAVA", v: 80, icon: "★" },
  { name: "Maven", v: 75, icon: "⟐" }
];
function Ring({ v, icon }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const off = c - v / 100 * c;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32 w-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 120 120", className: "h-full w-full -rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: `g-${v}`, x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.78 0.14 5)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.82 0.1 320)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r, fill: "none", stroke: "oklch(0.92 0.04 10)", strokeWidth: "8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "60",
          cy: "60",
          r,
          fill: "none",
          stroke: `url(#g-${v})`,
          strokeWidth: "8",
          strokeLinecap: "round",
          strokeDasharray: c,
          strokeDashoffset: off,
          style: { transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl text-rose", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl", children: [
        v,
        "%"
      ] })
    ] })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "✦ SKILLS ✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "Where I shine" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-8 md:grid-cols-4", children: SKILLS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal group glass rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-dreamy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto transition-transform duration-700 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { v: s.v, icon: s.icon }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-lg", children: s.name })
    ] }, s.name)) })
  ] }) });
}
const ITEMS = [
  { y: "2024 - cuurent", role: "Test Engineer", co: "Keyvalue Software Solutins", desc: "Building confidence in software through automation, API validation, performance testing, and deploying intelligent agent-based solutions" },
  { y: "2022", role: "Associate Test Engineer", co: "Keyvalue Software Solutins", desc: "Started my journey in software testing, learning automation fundamentals and contributing to web application testing." },
  { y: "2022", role: "BTech", co: "Mar Atanasius College of Engineering", desc: "Completed bacherlors in Electronics and Communications Engineering" },
  { y: "2018", role: "High School Graduation", co: "Amrita Vidyalayam" }
];
function Timeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "❀ JOURNEY ❀" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "My timeline" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose/0 via-rose/60 to-rose/0" }),
      ITEMS.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `reveal relative mb-10 flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-widest text-rose", children: it.y }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl", children: it.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "@ ",
                it.co
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: it.desc })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-6 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-5 w-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-aurora animate-gradient shadow-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-full border border-rose/40 animate-pulse" })
            ] }) })
          ]
        },
        it.y
      ))
    ] })
  ] }) });
}
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "✿ GET IN TOUCH ✿" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "Let’s make reliability feel effortless" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "I'd love to hear about your project ♡" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3e3);
          },
          className: "reveal glass-strong rounded-3xl p-8 md:p-10 shadow-dreamy space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: ["Your name", "Email"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group relative block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  required: true,
                  type: p === "Email" ? "email" : "text",
                  placeholder: " ",
                  className: "peer w-full rounded-2xl bg-white/60 border border-white/80 px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:shadow-glow"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-5 top-4 text-sm text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-rose peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs", children: p })
            ] }, p)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group relative block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  rows: 5,
                  placeholder: " ",
                  className: "peer w-full resize-none rounded-2xl bg-white/60 border border-white/80 px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:shadow-glow"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-5 top-4 text-sm text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-rose peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs", children: "Tell me your dream" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "or email arundhatidevi24@gmail.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { children: sent ? "Sent! ♡" : "Send with love →" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-auto mt-24 max-w-7xl border-t border-rose/20 px-6 py-10 text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Arundhati · Made with ♡ and a sprinkle of pixie dust" }) })
  ] });
}
function Background() {
  const [m, setM] = reactExports.useState({ x: 0.5, y: 0.5 });
  reactExports.useEffect(() => {
    const onMove = (e) => setM({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const decor = ["✿", "✦", "❀", "♡", "✧", "❁", "♥", "✿"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-aurora opacity-60 blur-3xl animate-blob",
        style: { transform: `translate(${m.x * 30}px, ${m.y * 30}px)` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl animate-float-slow",
        style: { background: "radial-gradient(circle, oklch(0.85 0.1 320), transparent 70%)", transform: `translate(${-m.x * 40}px, ${m.y * 20}px)` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-0 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl animate-blob",
        style: { background: "radial-gradient(circle, oklch(0.9 0.08 50), transparent 70%)", animationDelay: "-6s" }
      }
    ),
    decor.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute text-rose/40 animate-float",
        style: {
          left: `${i * 137 % 100}%`,
          top: `${i * 73 % 100}%`,
          fontSize: `${14 + i % 4 * 6}px`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${6 + i % 5}s`
        },
        children: d
      },
      i
    ))
  ] });
}
function CursorGlow() {
  const dotRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  const [sparkles, setSparkles] = reactExports.useState([]);
  const idRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let x = rx, y = ry;
    let frame = 0;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      if (Math.random() < 0.08) {
        const id = idRef.current++;
        setSparkles((s) => [...s.slice(-12), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => setSparkles((s) => s.filter((p) => p.id !== id)), 900);
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-[100] hidden md:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: ringRef, className: "absolute h-11 w-11 rounded-full border border-rose/60 mix-blend-multiply transition-[width,height] duration-300", style: { boxShadow: "0 0 24px oklch(0.78 0.14 5 / 0.5)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dotRef, className: "absolute h-3 w-3 rounded-full bg-rose", style: { boxShadow: "0 0 12px oklch(0.78 0.14 5 / 0.8)" } }),
    sparkles.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute text-rose animate-sparkle", style: { left: s.x, top: s.y, fontSize: 14 }, children: "✦" }, s.id))
  ] });
}
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 z-[200] flex items-center justify-center bg-dream transition-opacity duration-700 ${done ? "pointer-events-none opacity-0" : "opacity-100"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-morph bg-aurora animate-gradient shadow-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 animate-morph bg-white/70 backdrop-blur", style: { animationDelay: "-0.6s" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-rose tracking-widest", children: "l o a d i n g…" })
      ] })
    }
  );
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  reactExports.useEffect(() => {
    const onClick = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Background, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "sparkle-layer", className: "pointer-events-none fixed inset-0 z-[150]" })
  ] });
}
export {
  Index as component
};
