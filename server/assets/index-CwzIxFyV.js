import { r as reactExports, V as jsxRuntimeExports, a1 as getDefaultExportFromCjs, U as f } from "./server-D-GNhvH3.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#projects"],
  // ["Skills", "#skills"],
  ["Journey", "#experience"],
  ["Other", "#projects"],
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center", children: LINKS.map(([l, h2]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: h2,
        className: "relative rounded-full px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:text-rose",
        children: l
      },
      l
    )) })
  ] }) });
}
function MagneticButton({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button"
}) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      type,
      onClick,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      className: `${base} ${styles} ${className}`,
      children: content
    }
  );
}
const ROLES = ["Test Engineer", "Quality Architect", "Automation Engineer"];
function Hero() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v3) => (v3 + 1) % ROLES.length), 2600);
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal from-top mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-widest text-rose", children: [
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
const profile = "/portfolio-repo/assets/profile-Cayhrjl5.png";
const SKILLS = ["Automation", "Reliability", "Agents", "Deployment", "Performance"];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal from-top mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "★ ABOUT ★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "A little about me" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal from-left relative mx-auto h-[22rem] w-[22rem] md:h-[26rem] md:w-[26rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-aurora animate-gradient blur-2xl opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 overflow-hidden rounded-full glass-strong shadow-dreamy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile, alt: "Portrait of Arundhati", className: "h-full w-full object-cover", width: 768, height: 896 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-[spin_22s_linear_infinite]", children: SKILLS.map((s, i) => {
          const angle = i / SKILLS.length * Math.PI * 2;
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal from-right space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl", children: "Crafting quality with a little sparkle ✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "I’m a QA Automation Engineer creating reliable digital experiences that work as beautifully as they’re built. With experience in automation, API testing, performance validation, and intelligent system deployment, I believe quality isn’t just checked — it’s thoughtfully engineered." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "When I’m not writing test scripts or solving tricky edge cases, you’ll usually find me sipping coffee, playing video games or sketching" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 pt-4", children: [
          ["20+", "Projects"],
          ["4y", "Experience"]
        ].map(([n, l], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "reveal from-bottom glass rounded-2xl p-4 text-center",
            "data-reveal-delay": (index + 1) * 0.08,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient", children: n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: l })
            ]
          },
          l
        )) })
      ] })
    ] })
  ] }) });
}
const p1 = "/portfolio-repo/assets/project1-ClZbb7OP.jpg";
const p2 = "/portfolio-repo/assets/project2-DKQLmjAe.jpg";
const p3 = "/portfolio-repo/assets/project3-C_1fPdXM.jpg";
const p4 = "/portfolio-repo/assets/project4-CVjW252r.jpg";
const v1 = "/portfolio-repo/assets/video1-BVFn3TV3.mp4";
const v2 = "/portfolio-repo/assets/video2-C_CFDZ5F.mp4";
const PROJECTS = [
  { type: "image", src: p1, span: "md:col-span-2 md:row-span-2" },
  { type: "video", src: v1, span: "" },
  { type: "image", src: p2, span: "" },
  { type: "image", src: p3, span: "" },
  { type: "video", src: v2, span: "" },
  { type: "image", src: p4, span: "" }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "♡Stuff i make for fun♡" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "Side Quests" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal grid auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-3", children: PROJECTS.map((p, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `group relative overflow-hidden rounded-3xl shadow-soft ${p.span}`,
        children: p.type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: p.src,
            alt: "",
            loading: "lazy",
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "video",
          {
            src: p.src,
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          }
        )
      },
      index
    )) })
  ] }) });
}
const ITEMS = [
  { y: "2024 - cuurent", role: "Test Engineer", co: "Keyvalue Software Solutins", desc: "Building confidence in software through automation, API validation, performance testing, and deploying intelligent agent-based solutions" },
  { y: "2022", role: "Associate Test Engineer", co: "Keyvalue Software Solutins", desc: "Started my journey in software testing, learning automation fundamentals and contributing to web application testing." },
  { y: "2022", role: "BTech", co: "Mar Atanasius College of Engineering", desc: "Completed bacherlors in Electronics and Communications Engineering" },
  { y: "2018", role: "High School", co: "Amrita Vidyalayam" }
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
          className: `reveal ${i % 2 ? "from-right md:flex-row-reverse" : "from-left"} relative mb-10 flex flex-col md:flex-row`,
          "data-reveal-delay": (i + 1) * 0.08,
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
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = f.useRef(cb);
  f.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  f.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var usePrevious = function usePrevious2(value) {
  var ref = f.useRef(value);
  f.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray) return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject) return false;
  if (!leftPlainObject && !leftArray) return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var ElementsContext = /* @__PURE__ */ f.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
({
  stripe: PropTypes.any,
  options: PropTypes.object
});
({
  children: PropTypes.func.isRequired
});
var CheckoutSdkContext = /* @__PURE__ */ f.createContext(null);
CheckoutSdkContext.displayName = "CheckoutSdkContext";
var parseCheckoutSdkContext = function parseCheckoutSdkContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CheckoutProvider> provider."));
  }
  return ctx;
};
var CheckoutContext = /* @__PURE__ */ f.createContext(null);
CheckoutContext.displayName = "CheckoutContext";
({
  stripe: PropTypes.any,
  options: PropTypes.shape({
    fetchClientSecret: PropTypes.func.isRequired,
    elementsOptions: PropTypes.object
  }).isRequired
});
var useElementsOrCheckoutSdkContextWithUseCase = function useElementsOrCheckoutSdkContextWithUseCase2(useCaseString) {
  var checkoutSdkContext = f.useContext(CheckoutSdkContext);
  var elementsContext = f.useContext(ElementsContext);
  if (checkoutSdkContext && elementsContext) {
    throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CheckoutProvider> and <Elements> providers."));
  }
  if (checkoutSdkContext) {
    return parseCheckoutSdkContext(checkoutSdkContext, useCaseString);
  }
  return parseElementsContext(elementsContext, useCaseString);
};
var _excluded = ["mode"];
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange, onSavedPaymentMethodRemove = _ref.onSavedPaymentMethodRemove, onSavedPaymentMethodUpdate = _ref.onSavedPaymentMethodUpdate;
    var ctx = useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var elements = "elements" in ctx ? ctx.elements : null;
    var checkoutSdk = "checkoutSdk" in ctx ? ctx.checkoutSdk : null;
    var _React$useState = f.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = f.useRef(null);
    var domNode = f.useRef(null);
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    useAttachEvent(element, "savedpaymentmethodremove", onSavedPaymentMethodRemove);
    useAttachEvent(element, "savedpaymentmethodupdate", onSavedPaymentMethodUpdate);
    useAttachEvent(element, "change", onChange);
    var readyCallback;
    if (onReady) {
      if (type === "expressCheckout") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    f.useLayoutEffect(function() {
      if (elementRef.current === null && domNode.current !== null && (elements || checkoutSdk)) {
        var newElement = null;
        if (checkoutSdk) {
          switch (type) {
            case "payment":
              newElement = checkoutSdk.createPaymentElement(options);
              break;
            case "address":
              if ("mode" in options) {
                var mode = options.mode, restOptions = _objectWithoutProperties(options, _excluded);
                if (mode === "shipping") {
                  newElement = checkoutSdk.createShippingAddressElement(restOptions);
                } else if (mode === "billing") {
                  newElement = checkoutSdk.createBillingAddressElement(restOptions);
                } else {
                  throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                }
              } else {
                throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
              }
              break;
            case "expressCheckout":
              newElement = checkoutSdk.createExpressCheckoutElement(options);
              break;
            case "currencySelector":
              newElement = checkoutSdk.createCurrencySelectorElement();
              break;
            case "taxId":
              newElement = checkoutSdk.createTaxIdElement(options);
              break;
            default:
              throw new Error("Invalid Element type ".concat(displayName, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
          }
        } else if (elements) {
          newElement = elements.create(type, options);
        }
        elementRef.current = newElement;
        setElement(newElement);
        if (newElement) {
          newElement.mount(domNode.current);
        }
      }
    }, [elements, checkoutSdk, options]);
    var prevOptions = usePrevious(options);
    f.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates && "update" in elementRef.current) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    f.useLayoutEffect(function() {
      return function() {
        if (elementRef.current && typeof elementRef.current.destroy === "function") {
          try {
            elementRef.current.destroy();
            elementRef.current = null;
          } catch (error) {
          }
        }
      };
    }, []);
    return /* @__PURE__ */ f.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id, className = props.className;
    return /* @__PURE__ */ f.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onReady: PropTypes.func,
    onEscape: PropTypes.func,
    onClick: PropTypes.func,
    onLoadError: PropTypes.func,
    onLoaderStart: PropTypes.func,
    onNetworksChange: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onShippingAddressChange: PropTypes.func,
    onShippingRateChange: PropTypes.func,
    onSavedPaymentMethodRemove: PropTypes.func,
    onSavedPaymentMethodUpdate: PropTypes.func,
    options: PropTypes.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
var EmbeddedCheckoutContext = /* @__PURE__ */ f.createContext(null);
EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
createElementComponent("cardNumber", isServer);
createElementComponent("cardExpiry", isServer);
createElementComponent("cardCvc", isServer);
createElementComponent("fpxBank", isServer);
createElementComponent("iban", isServer);
createElementComponent("idealBank", isServer);
createElementComponent("p24Bank", isServer);
createElementComponent("epsBank", isServer);
createElementComponent("payment", isServer);
createElementComponent("expressCheckout", isServer);
createElementComponent("currencySelector", isServer);
createElementComponent("paymentRequestButton", isServer);
createElementComponent("linkAuthentication", isServer);
createElementComponent("address", isServer);
createElementComponent("shippingAddress", isServer);
createElementComponent("paymentMethodMessaging", isServer);
createElementComponent("affirmMessage", isServer);
createElementComponent("afterpayClearpayMessage", isServer);
createElementComponent("taxId", isServer);
var dist;
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  var g = Object.defineProperty;
  var j = Object.getOwnPropertyDescriptor;
  var V2 = Object.getOwnPropertyNames;
  var L = Object.prototype.hasOwnProperty;
  var Y2 = (e, r) => {
    for (var t in r) g(e, t, { get: r[t], enumerable: true });
  }, K = (e, r, t, o) => {
    if (r && typeof r == "object" || typeof r == "function") for (let s of V2(r)) !L.call(e, s) && s !== t && g(e, s, { get: () => r[s], enumerable: !(o = j(r, s)) || o.enumerable });
    return e;
  };
  var $2 = (e) => K(g({}, "__esModule", { value: true }), e);
  var h2 = (e, r, t) => new Promise((o, s) => {
    var i = (a) => {
      try {
        l(t.next(a));
      } catch (m) {
        s(m);
      }
    }, c = (a) => {
      try {
        l(t.throw(a));
      } catch (m) {
        s(m);
      }
    }, l = (a) => a.done ? o(a.value) : Promise.resolve(a.value).then(i, c);
    l((t = t.apply(e, r)).next());
  });
  var W = {};
  Y2(W, { SubmissionError: () => p, appendExtraData: () => E2, createClient: () => R, getDefaultClient: () => U, isSubmissionError: () => A });
  dist = $2(W);
  var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", J2 = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  function I2(e) {
    e = String(e);
    for (var r, t, o, s, i = "", c = 0, l = e.length % 3; c < e.length; ) {
      if ((t = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255 || (s = e.charCodeAt(c++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
      r = t << 16 | o << 8 | s, i += u.charAt(r >> 18 & 63) + u.charAt(r >> 12 & 63) + u.charAt(r >> 6 & 63) + u.charAt(r & 63);
    }
    return l ? i.slice(0, l - 3) + "===".substring(l) : i;
  }
  function O(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !J2.test(e)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    e += "==".slice(2 - (e.length & 3));
    for (var r, t = "", o, s, i = 0; i < e.length; ) r = u.indexOf(e.charAt(i++)) << 18 | u.indexOf(e.charAt(i++)) << 12 | (o = u.indexOf(e.charAt(i++))) << 6 | (s = u.indexOf(e.charAt(i++))), t += o === 64 ? String.fromCharCode(r >> 16 & 255) : s === 64 ? String.fromCharCode(r >> 16 & 255, r >> 8 & 255) : String.fromCharCode(r >> 16 & 255, r >> 8 & 255, r & 255);
    return t;
  }
  var G2 = () => navigator.webdriver || !!document.documentElement.getAttribute(O("d2ViZHJpdmVy")) || !!window.callPhantom || !!window._phantom, y = class {
    constructor() {
      this.loadedAt = Date.now(), this.webdriver = G2();
    }
    data() {
      return { loadedAt: this.loadedAt, webdriver: this.webdriver };
    }
  };
  var S = class {
    constructor(r) {
      this.kind = "success";
      this.next = r.next;
    }
  };
  function w(e) {
    return "next" in e && typeof e.next == "string";
  }
  var b2 = class {
    constructor(r, t) {
      this.paymentIntentClientSecret = r;
      this.resubmitKey = t;
      this.kind = "stripePluginPending";
    }
  };
  function _(e) {
    if ("stripe" in e && "resubmitKey" in e && typeof e.resubmitKey == "string") {
      let { stripe: r } = e;
      return typeof r == "object" && r != null && "paymentIntentClientSecret" in r && typeof r.paymentIntentClientSecret == "string";
    }
    return false;
  }
  function A(e) {
    return e.kind === "error";
  }
  var p = class {
    constructor(...r) {
      this.kind = "error";
      this.formErrors = [];
      this.fieldErrors = /* @__PURE__ */ new Map();
      var t;
      for (let o of r) {
        if (!o.field) {
          this.formErrors.push({ code: o.code && z2(o.code) ? o.code : "UNSPECIFIED", message: o.message });
          continue;
        }
        let s = (t = this.fieldErrors.get(o.field)) != null ? t : [];
        s.push({ code: o.code && Q(o.code) ? o.code : "UNSPECIFIED", message: o.message }), this.fieldErrors.set(o.field, s);
      }
    }
    getFormErrors() {
      return [...this.formErrors];
    }
    getFieldErrors(r) {
      var t;
      return (t = this.fieldErrors.get(r)) != null ? t : [];
    }
    getAllFieldErrors() {
      return Array.from(this.fieldErrors);
    }
  };
  function z2(e) {
    return e in B;
  }
  var B = { BLOCKED: "BLOCKED", EMPTY: "EMPTY", FILES_TOO_BIG: "FILES_TOO_BIG", FORM_NOT_FOUND: "FORM_NOT_FOUND", INACTIVE: "INACTIVE", NO_FILE_UPLOADS: "NO_FILE_UPLOADS", PROJECT_NOT_FOUND: "PROJECT_NOT_FOUND", TOO_MANY_FILES: "TOO_MANY_FILES" };
  function Q(e) {
    return e in Z;
  }
  var Z = { REQUIRED_FIELD_EMPTY: "REQUIRED_FIELD_EMPTY", REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING", STRIPE_CLIENT_ERROR: "STRIPE_CLIENT_ERROR", STRIPE_SCA_ERROR: "STRIPE_SCA_ERROR", TYPE_EMAIL: "TYPE_EMAIL", TYPE_NUMERIC: "TYPE_NUMERIC", TYPE_TEXT: "TYPE_TEXT" };
  function P(e) {
    return "errors" in e && Array.isArray(e.errors) && e.errors.every((r) => typeof r.message == "string") || "error" in e && typeof e.error == "string";
  }
  var D2 = "4.0.0";
  var v3 = (e) => I2(JSON.stringify(e)), N = (e) => {
    let r = `@formspree/core@${D2}`;
    return e ? `${e} ${r}` : r;
  };
  function E2(e, r, t) {
    e instanceof FormData ? e.append(r, t) : e[r] = t;
  }
  function M(e) {
    return e !== null && typeof e == "object";
  }
  var C = class {
    constructor(r = {}) {
      this.project = r.project, this.stripe = r.stripe, typeof window != "undefined" && (this.session = new y());
    }
    submitForm(s, i) {
      return h2(this, arguments, function* (r, t, o = {}) {
        let c = o.endpoint || "https://formspree.io", l = this.project ? `${c}/p/${this.project}/f/${r}` : `${c}/f/${r}`, a = { Accept: "application/json", "Formspree-Client": N(o.clientName) };
        this.session && (a["Formspree-Session-Data"] = v3(this.session.data())), t instanceof FormData || (a["Content-Type"] = "application/json");
        function m(f2) {
          return h2(this, null, function* () {
            try {
              let n = yield (yield fetch(l, { method: "POST", mode: "cors", body: f2 instanceof FormData ? f2 : JSON.stringify(f2), headers: a })).json();
              if (M(n)) {
                if (P(n)) return Array.isArray(n.errors) ? new p(...n.errors) : new p({ message: n.error });
                if (_(n)) return new b2(n.stripe.paymentIntentClientSecret, n.resubmitKey);
                if (w(n)) return new S({ next: n.next });
              }
              return new p({ message: "Unexpected response format" });
            } catch (d) {
              let n = d instanceof Error ? d.message : `Unknown error while posting to Formspree: ${JSON.stringify(d)}`;
              return new p({ message: n });
            }
          });
        }
        if (this.stripe && o.createPaymentMethod) {
          let f2 = yield o.createPaymentMethod();
          if (f2.error) return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Error creating payment method" });
          E2(t, "paymentMethod", f2.paymentMethod.id);
          let d = yield m(t);
          if (d.kind === "error") return d;
          if (d.kind === "stripePluginPending") {
            let n = yield this.stripe.handleCardAction(d.paymentIntentClientSecret);
            if (n.error) return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Stripe SCA error" });
            t instanceof FormData ? t.delete("paymentMethod") : delete t.paymentMethod, E2(t, "paymentIntent", n.paymentIntent.id), E2(t, "resubmitKey", d.resubmitKey);
            let x = yield m(t);
            return k(x), x;
          }
          return d;
        }
        let T = yield m(t);
        return k(T), T;
      });
    }
  };
  function k(e) {
    let { kind: r } = e;
    if (r !== "success" && r !== "error") throw new Error(`Unexpected submission result (kind: ${r})`);
  }
  var R = (e) => new C(e), U = () => (F2 || (F2 = R()), F2), F2;
  return dist;
}
var distExports = /* @__PURE__ */ requireDist();
function V(e) {
  let { prefix: t, field: r, errors: o, ...s } = e;
  if (o == null) return null;
  let n = r ? o.getFieldErrors(r) : o.getFormErrors();
  return n.length === 0 ? null : f.createElement("div", { ...s }, t ? `${t} ` : null, n.map((a) => a.message).join(", "));
}
var E = reactExports.createContext({ elements: null });
function v() {
  return reactExports.useContext(E);
}
var h = f.createContext(null);
function b() {
  return reactExports.useContext(h) ?? { client: distExports.getDefaultClient() };
}
var D = "3.0.0";
var z = `@formspree/react@${D}`;
function F(e, t = {}) {
  let r = b(), { client: o = r.client, extraData: s, origin: n } = t, { elements: a } = v(), { stripe: i } = o;
  return async function(p) {
    let m = I(p) ? $(p) : p;
    if (typeof s == "object") for (let [u, g] of Object.entries(s)) {
      let d;
      typeof g == "function" ? d = await g() : d = g, d !== void 0 && distExports.appendExtraData(m, u, d);
    }
    let c = a?.getElement(CardElement), x = i && c ? () => i.createPaymentMethod({ type: "card", card: c, billing_details: G(m) }) : void 0;
    return o.submitForm(e, m, { endpoint: n, clientName: z, createPaymentMethod: x });
  };
}
function I(e) {
  return "preventDefault" in e && typeof e.preventDefault == "function";
}
function $(e) {
  e.preventDefault();
  let t = e.currentTarget;
  if (t.tagName != "FORM") throw new Error("submit was triggered for a non-form element");
  return new FormData(t);
}
function G(e) {
  let t = { address: Y(e) };
  for (let r of ["name", "email", "phone"]) {
    let o = e instanceof FormData ? e.get(r) : e[r];
    o && typeof o == "string" && (t[r] = o);
  }
  return t;
}
function Y(e) {
  let t = {};
  for (let [r, o] of [["address_line1", "line1"], ["address_line2", "line2"], ["address_city", "city"], ["address_country", "country"], ["address_state", "state"], ["address_postal_code", "postal_code"]]) {
    let s = e instanceof FormData ? e.get(r) : e[r];
    s && typeof s == "string" && (t[o] = s);
  }
  return t;
}
function J(e, t = {}) {
  let [r, o] = reactExports.useState(null), [s, n] = reactExports.useState(null), [a, i] = reactExports.useState(false), [l, p] = reactExports.useState(false);
  let m = F(e, { client: t.client, extraData: t.data, origin: t.endpoint });
  return [{ errors: r, result: s, submitting: a, succeeded: l }, async function(x) {
    i(true);
    let u = await m(x);
    i(false), distExports.isSubmissionError(u) ? (o(u), p(false)) : (o(null), n(u), p(true));
  }, function() {
    o(null), n(null), i(false), p(false);
  }];
}
function Contact() {
  const [state, handleSubmit] = J("mnjyqvzz");
  const formRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal from-top mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-rose", children: "✿ GET IN TOUCH ✿" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl md:text-6xl", children: "Let’s make reliability feel effortless" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "I'd love to hear about your project ♡" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          ref: formRef,
          onSubmit: handleSubmit,
          className: "reveal from-bottom glass-strong rounded-3xl p-8 md:p-10 shadow-dreamy space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: ["Your name", "Email"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group relative block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  required: true,
                  name: p === "Email" ? "email" : "name",
                  type: p === "Email" ? "email" : "text",
                  placeholder: " ",
                  className: "peer w-full rounded-2xl bg-white/60 border border-white/80 px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:shadow-glow"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-5 top-4 text-sm text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-rose peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs", children: p })
            ] }, p)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              V,
              {
                prefix: "Email",
                field: "email",
                errors: state.errors
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "group relative block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  name: "message",
                  rows: 5,
                  placeholder: " ",
                  className: "peer w-full resize-none rounded-2xl bg-white/60 border border-white/80 px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:shadow-glow"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-5 top-4 text-sm text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-rose peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs", children: "Message" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              V,
              {
                prefix: "Message",
                field: "message",
                errors: state.errors
              }
            ),
            state.succeeded && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-rose", children: "Message sent successfully! ♡" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "or email arundhatidevi24@gmail.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { type: "submit", children: state.submitting ? "Sending..." : state.succeeded ? "Sent! ♡" : "Send →" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-auto mt-24 max-w-7xl border-t border-rose/20 px-6 py-10 text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Arundhati · Made with ♡" }) })
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
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.revealDelay ?? 0);
          if (delay) {
            el.style.transitionDelay = `${delay}s`;
          }
          el.classList.add("in");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "sparkle-layer", className: "pointer-events-none fixed inset-0 z-[150]" })
  ] });
}
export {
  Index as component
};
