import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData2 from "../assets/Animation - 1731938073445.json";
import AchievementsTable from "./Bento";
import { Contact } from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

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
    <main className="min-h-screen flex flex-col bg-brand-bg text-black overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative flex flex-col justify-between min-h-screen px-6 md:px-14 lg:px-20 pt-32 pb-16"
      >
        {/* Noise grain overlay – very subtle */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── TOP ROW: status dot + skill pills ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8"
          data-aos="fade-down"
        >
          {/* Availability indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-light text-black/50 tracking-widest uppercase">
              Available for work
            </span>
          </div>

          {/* Role tags */}
          <div className="flex flex-wrap gap-2">
            {["MERN Stack", "Full Stack Dev", "React / Next.js", "UI / UX"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-black/10 bg-brand-secondary text-xs uppercase tracking-widest font-light"
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
            className="font-light tracking-[-0.04em] leading-[0.88] uppercase select-none"
            style={{ fontSize: "clamp(4rem, 13vw, 14rem)" }}
            data-aos="fade-up"
          >
            <span className="block text-black">Ajay</span>
            <span className="block text-black/15">Dattu</span>
          </h1>

          {/* ── Bottom info bar ── */}
          <div
            className="mt-14 border-t border-black/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {/* Bio */}
            <div className="md:col-span-2">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-black/55 leading-relaxed max-w-2xl">
                I build fast, beautiful, and thoughtful web experiences — from
                pixel‑perfect UIs to scalable full‑stack systems using React,
                Next.js, Node &amp; MongoDB.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="https://drive.google.com/file/d/1nyJ0s7Fjtm3g3F2SqrEg4rmdPQJFMrhh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-6 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-all"
              >
                <span className="font-light tracking-wide text-sm">Download Resume</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <button
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-between px-6 py-4 border border-black/10 rounded-full hover:border-black/30 bg-transparent transition-all"
              >
                <span className="font-light tracking-wide text-sm">View My Work</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <div
          className="mt-16 border-t border-black/5 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {[
            { num: "2+", label: "Years Experience" },
            { num: "8+", label: "Projects Shipped" },
            { num: "550+", label: "LeetCode Problems" },
            { num: "3", label: "Startups Worked At" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-light tracking-tight">
                {num}
              </span>
              <span className="text-xs text-black/35 uppercase tracking-widest font-light">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REST OF PAGE ─────────────────────────────────────────────────── */}
      <div id="achievements">
        <AchievementsTable />
      </div>

      <Pricing />

      <div
        id="contact"
        className="py-32 px-6 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        <div data-aos="fade-right">
          <Lottie
            animationData={animationData2}
            loop={true}
            className="w-full max-w-md mx-auto opacity-80"
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-10 tracking-tighter">
            Let's talk.
          </h2>
          <Contact />
        </div>
      </div>

      <div className="py-20 border-t border-black/5">
        <SocialLinks />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 rounded-full bg-black text-white shadow-2xl hover:scale-110 transition-all z-50"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
