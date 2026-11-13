import { Link } from "react-router-dom";

export const Arrow = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

const btnBase =
  "inline-flex items-center gap-3 rounded-lg px-7 py-4 font-display text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]";
const btnStyles = {
  dark: "bg-ink text-white",
  light: "border border-ink/30 text-ink hover:bg-ink hover:text-white",
  amber: "bg-amber text-ink",
};

/** Button that renders as a router Link (`to`), anchor (`href`) or button. */
export const Btn = ({ to, href, onClick, variant = "dark", className = "", children, ...rest }) => {
  const cls = `${btnBase} ${btnStyles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children} <Arrow /></Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{children} <Arrow /></a>;
  return <button type="button" onClick={onClick} className={cls} {...rest}>{children} <Arrow /></button>;
};

/** Amber dot behind the first letter of a heading. */
export const Dot = ({ children }) => {
  const text = String(children);
  return (
    <>
      <span className="relative inline-block">
        <span className="absolute -left-[0.12em] top-[0.1em] h-[0.8em] w-[0.8em] rounded-full bg-amber" aria-hidden />
        <span className="relative">{text[0]}</span>
      </span>
      {text.slice(1)}
    </>
  );
};

export const Eyebrow = ({ children, className = "" }) => (
  <span className={`font-display text-base font-bold text-orange ${className}`}>{children}</span>
);

export const Heading = ({ children, className = "", light = false }) => (
  <h2 className={`mt-1 whitespace-pre-line font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl ${light ? "text-white" : "text-ink"} ${className}`}>
    {children}
  </h2>
);

/** Section header: eyebrow + big heading (+ optional right-side text). */
export const SectionHead = ({ tag, title, text, center = false, children }) => (
  <div className={center ? "mb-14 flex flex-col items-center text-center" : "mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"}>
    <div>
      <Eyebrow>{tag}</Eyebrow>
      <Heading><Dot>{title}</Dot></Heading>
    </div>
    {text && <p className="max-w-md text-[17px] leading-relaxed text-mute">{text}</p>}
    {children}
  </div>
);

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-site px-6 md:px-10 ${className}`}>{children}</div>
);

export const SocialIcon = ({ name, className = "h-5 w-5" }) => {
  const p = { className, fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true };
  switch (name) {
    case "linkedin":
      return <svg {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>;
    case "github":
      return <svg {...p}><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" /></svg>;
    case "youtube":
      return <svg {...p}><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" /></svg>;
    case "leetcode":
      return <svg {...p} viewBox="0 -960 960 960"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Z" /></svg>;
    default:
      return null;
  }
};
