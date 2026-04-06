import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AchievementsTable from "./Bento";
import { Contact } from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import StatsSection from "../components/StatsSection";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-400 overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative flex flex-col justify-between min-h-screen px-6 md:px-14 lg:px-24 pt-32 pb-16"
      >
        {/* Noise grain overlay – very subtle */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.02] dark:opacity-[0.05] z-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── TOP ROW: status dot + skill pills ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12"
          data-aos="fade-down"
        >
          {/* Availability indicator */}
          <div className="flex items-center gap-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-black/40 dark:text-white/40 tracking-[0.2em] uppercase">
              Open for opportunities
            </span>
          </div>

          {/* Role tags */}
          <div className="flex flex-wrap gap-2">
            {["Full Stack", "React", "Next.js", "Web3"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-widest font-medium text-black/60 dark:text-white/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* ── MAIN HEADLINE ── */}
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="font-light tracking-[-0.05em] leading-[0.85] uppercase select-none"
            style={{ fontSize: "clamp(4.5rem, 14vw, 15rem)" }}
            data-aos="fade-up"
          >
            <span className="block text-black dark:text-white">Ajay</span>
            <span className="block text-black/10 dark:text-white/10 italic">Dattu</span>
          </h1>

          {/* ── Bottom info bar ── */}
          <div
            className="mt-16 border-t border-black/5 dark:border-white/5 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {/* Bio */}
            <div className="md:col-span-2">
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-black/60 dark:text-white/60 leading-relaxed max-w-2xl tracking-tight">
                Crafting meaningful digital experiences through <span className="text-black dark:text-white">clean code</span> and <span className="text-black dark:text-white">thoughtful design</span>. Specializing in high-performance web applications.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="https://drive.google.com/file/d/1nyJ0s7Fjtm3g3F2SqrEg4rmdPQJFMrhh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-8 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-[0.98] transition-all duration-300 shadow-xl dark:shadow-white/5"
              >
                <span className="font-medium tracking-wider text-xs uppercase">Resume</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <button
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-between px-8 py-5 border border-black/10 dark:border-white/10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
              >
                <span className="font-medium tracking-wider text-xs uppercase text-black/60 dark:text-white/60">Portfolio</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REST OF PAGE ─────────────────────────────────────────────────── */}
      <div id="achievements">
        <AchievementsTable />
      </div>

      <Pricing />

      <div
        id="contact"
        className="py-40 px-6 md:px-14 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start bg-white dark:bg-black transition-colors duration-400"
      >
        <div data-aos="fade-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 mb-8 font-bold">Collaborate</p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85] mb-12 text-black dark:text-white">
            Let's<br/>build<br/><span className="text-black/10 dark:text-white/10 italic">together.</span>
          </h2>
          <p className="text-xl text-black/50 dark:text-white/50 font-light max-w-sm leading-relaxed tracking-tight">
            I'm always looking for interesting projects and ambitious teams. If that sounds like you, let's talk.
          </p>
        </div>
        <div data-aos="fade-left" className="bg-black/5 dark:bg-white/5 p-8 md:p-12 rounded-[2rem]">
          <Contact />
        </div>
      </div>

      <div className="py-24 border-t border-black/5 dark:border-white/5 bg-white dark:bg-black transition-colors duration-400">
        <SocialLinks />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-14 h-14 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-110 active:scale-95 transition-all z-[100]"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </main>
  );
}

export default Home;

