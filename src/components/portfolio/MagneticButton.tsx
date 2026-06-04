import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function MagneticButton({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button",
}: Props){
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const base =
    "magnetic relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide overflow-hidden group";
  const styles =
    variant === "primary"
      ? "text-primary-foreground shadow-glow"
      : "glass text-foreground hover:bg-white/70";

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-aurora animate-gradient" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 rounded-full ring-0 ring-rose/40 transition-[box-shadow] duration-500 group-hover:ring-4" />
    </>
  );

  if (href) {
    return (
      <a ref={ref as any} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }
  return (
   <button
  ref={ref as any}
  type={type}
  onClick={onClick}
  onMouseMove={onMove}
  onMouseLeave={onLeave}
  className={`${base} ${styles} ${className}`}
>
      {content}
    </button>
  );
}
