import { useState } from "react";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="reveal mb-12 text-center">
          <p className="text-xs tracking-[0.3em] text-rose">✿ GET IN TOUCH ✿</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Let's make something dreamy</h2>
          <p className="mt-4 text-muted-foreground">I'd love to hear about your project ♡</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="reveal glass-strong rounded-3xl p-8 md:p-10 shadow-dreamy space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {["Your name", "Email"].map((p) => (
              <label key={p} className="group relative block">
                <input
                  required
                  type={p === "Email" ? "email" : "text"}
                  placeholder=" "
                  className="peer w-full rounded-2xl bg-white/60 border border-white/80 px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:shadow-glow"
                />
                <span className="pointer-events-none absolute left-5 top-4 text-sm text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-rose peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs">
                  {p}
                </span>
              </label>
            ))}
          </div>
          <label className="group relative block">
            <textarea
              required
              rows={5}
              placeholder=" "
              className="peer w-full resize-none rounded-2xl bg-white/60 border border-white/80 px-5 py-4 text-sm outline-none transition-all duration-300 focus:border-rose focus:bg-white focus:shadow-glow"
            />
            <span className="pointer-events-none absolute left-5 top-4 text-sm text-muted-foreground transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-rose peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs">
              Tell me your dream
            </span>
          </label>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">or email luna@dream.studio</p>
            <MagneticButton>
              {sent ? "Sent! ♡" : "Send with love →"}
            </MagneticButton>
          </div>
        </form>
      </div>

      <footer className="mx-auto mt-24 max-w-7xl border-t border-rose/20 px-6 py-10 text-center text-xs text-muted-foreground">
        <p>© 2026 Luna Rose · Made with ♡ and a sprinkle of pixie dust</p>
      </footer>
    </section>
  );
}
