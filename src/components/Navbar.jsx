import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import "./Navbar.css";
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

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 400); // wait for menu close animation
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <div className="fixed w-full z-40 flex justify-center items-center p-5">
        <nav className="w-[90%] md:w-[85%] shadow-lg rounded-[20px]" id="navbar">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-14">

            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center"
            >
              <img src={name} className="h-6 w-auto" alt="Ajay" />
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-black/50 font-light text-sm hover:text-black transition-all duration-200 hover:scale-105"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-black transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px w-6 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px w-6 bg-black transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
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
              className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 bg-[#F9F8F6]/95 backdrop-blur-2xl flex flex-col justify-between p-8 shadow-2xl"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-black transition-all"
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav Links — large editorial style */}
              <nav className="flex flex-col gap-1 mt-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.35, ease: "easeOut" }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-4 border-b border-black/5 last:border-0"
                  >
                    <span className="text-3xl font-light text-black/20 mr-3 text-sm tracking-widest">
                      0{i + 1}
                    </span>
                    <span className="text-3xl font-light text-black tracking-tight hover:tracking-tighter transition-all">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Footer inside menu */}
              <div className="text-xs text-black/30 font-light tracking-widest uppercase">
                © Ajay Dattu
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
