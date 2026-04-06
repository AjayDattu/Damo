import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../utils/ThemeContext";
import name from "../assets/Ajay.svg";

const NAV_LINKS = [
  { label: "Home",        id: "home" },
  { label: "Works",       id: "work" },
  { label: "Education",   id: "edu" },
  { label: "Pricing",     id: "pricing" },
  { label: "Contact",     id: "contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 400); 
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <div className="fixed w-full z-[60] flex justify-center items-center p-6">
        <nav className="w-full max-w-4xl backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-black/5 dark:border-white/5 shadow-2xl rounded-full" id="navbar">
          <div className="px-6 md:px-8 flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center group"
            >
              <img src={name} className="h-6 w-auto dark:invert transition-all duration-300 group-hover:scale-105" alt="Ajay" />
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-black/50 dark:text-white/50 font-normal text-sm hover:text-black dark:hover:text-white transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black dark:text-white"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center gap-4 md:hidden">
                <button
                    onClick={toggleTheme}
                    className="w-8 h-8 flex items-center justify-center text-black dark:text-white"
                >
                    {theme === "dark" ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    )}
                </button>
                <button
                    className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
                    onClick={() => setIsMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-px w-6 bg-black dark:bg-white transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block h-px w-6 bg-black dark:bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
                    <span className={`block h-px w-6 bg-black dark:bg-white transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-full max-w-sm z-[80] bg-white dark:bg-black flex flex-col justify-between p-12 shadow-2xl"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-2 mt-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-6 border-b border-black/5 dark:border-white/5 last:border-0 group"
                  >
                    <span className="text-sm font-light text-black/30 dark:text-white/30 mr-4 tracking-widest">
                      0{i + 1}
                    </span>
                    <span className="text-4xl font-light text-black dark:text-white tracking-tight transition-all group-hover:pl-2">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Footer inside menu */}
              <div className="text-[10px] text-black/30 dark:text-white/30 font-light tracking-[0.3em] uppercase">
                © Ajay Dattu {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
