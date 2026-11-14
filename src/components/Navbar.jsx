import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow, SocialIcon } from "./ui";
import { profile } from "../data/profile";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Learn", to: "/learn" },
  { label: "Contact", to: "/#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname, hash]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-ink/15 bg-peach/90 backdrop-blur-md">
        <div className="flex h-[72px] w-full items-center justify-between pl-6 md:pl-[max(2.5rem,calc((100%-1270px)/2+2.5rem))]">
          <Link to="/" className="flex items-center" aria-label="Home">
            <span className="font-display text-2xl font-bold uppercase leading-none tracking-[-0.02em] text-ink">Ajay</span>
          </Link>

          <div className="flex h-full items-center">
            <Link to="/#contact" className="mr-6 hidden items-center gap-2 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-60 sm:inline-flex">
              Let&apos;s Talk <Arrow />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[90] flex h-full w-[72px] items-center justify-center bg-ink text-white md:w-[98px]"
            >
              <span className="relative block h-4 w-6">
                <span className={`absolute left-0 top-0 h-[2px] w-6 bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] h-[2px] w-6 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-[14px] h-[2px] w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-ink/50"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="panel"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col justify-between bg-ink px-10 pb-12 pt-28 text-white"
            >
              <nav className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.div key={l.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.07 }}>
                    <Link to={l.to} onClick={() => setOpen(false)} className="group flex items-center justify-between border-b border-white/10 py-6 font-display text-3xl font-bold transition-colors hover:text-amber">
                      {l.label}
                      <Arrow className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div>
                <p className="font-display text-sm font-bold text-white/60">Based in {profile.location}</p>
                <div className="mt-4 flex gap-5">
                  {profile.socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white/70 transition-colors hover:text-amber">
                      <SocialIcon name={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
