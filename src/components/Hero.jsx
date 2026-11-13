import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Arrow, Btn, SocialIcon } from "./ui";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1];
const reveal = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease },
});

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-peach">
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-10 lg:min-h-[calc(100vh-72px)] px-6 pb-16 pt-12 md:px-10 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10 lg:pl-[max(2.5rem,calc((100%-1270px)/2+2.5rem))] lg:pr-0">
        {/* Copy */}
        <div className="relative z-10">
          <motion.p {...reveal(0.1)} className="flex items-center gap-4 font-display text-2xl font-semibold text-ink">
            <span className="hidden h-px w-16 bg-ink sm:block" />
            Hello, I&apos;m <span aria-hidden>✌️</span>
          </motion.p>
          <motion.h1
            {...reveal(0.2)}
            className="mt-2 font-display font-bold leading-[0.9] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(3.75rem, 8.5vw, 7.5rem)" }}
          >
            <span className="relative inline-block">
              <span className="absolute -left-2 top-[8%] h-[0.85em] w-[0.85em] rounded-full bg-amber" aria-hidden />
              <span className="relative">{profile.firstName}</span>
            </span>
            <br />
            {profile.lastName}
          </motion.h1>
          <motion.p {...reveal(0.35)} className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">
            {profile.role} | Based in {profile.location}
          </motion.p>
          <motion.div {...reveal(0.45)} className="mt-10 flex flex-wrap gap-3">
            <Btn to="/#contact">Let&apos;s Talk</Btn>
            <Btn to="/projects" variant="light">My Work</Btn>
          </motion.div>
          <motion.div {...reveal(0.55)} className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-ink">550+</span>
              <span className="text-[17px] text-ink/70">Problems solved</span>
            </div>
            <span className="hidden h-6 w-px bg-ink/20 sm:block" />
            <div className="flex gap-5 text-ink">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="transition-colors hover:text-orange">
                  <SocialIcon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait on the amber shape. Replace profile.portrait to swap the image. */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.15, ease }}
          className="relative order-first mx-auto w-full max-w-[640px] lg:order-none lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[200px] bg-amber lg:aspect-auto lg:h-[min(640px,calc(100vh-200px))] lg:min-h-[480px]">
            <span className="absolute inset-x-0 top-[36%] select-none whitespace-nowrap text-center font-script text-[4.5rem] leading-none text-white/90 sm:text-[7rem] md:text-[9rem]" aria-hidden>
              {profile.firstName} {profile.lastName}
            </span>
            {/* Anchored to the top so the head is always in view; the shape crops the legs. */}
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
              draggable={false}
              className="absolute left-1/2 top-[7%] h-[124%] w-auto max-w-none -translate-x-1/2"
            />
          </div>

          <Link
            to="/#contact"
            aria-label="Contact me"
            className="absolute -bottom-20 right-8 hidden h-[136px] w-[136px] lg:right-10 items-center justify-center rounded-full bg-ink md:flex"
          >
            <svg className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]" viewBox="0 0 136 136" aria-hidden>
              <defs><path id="circ" d="M68,68 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" /></defs>
              <text fill="#fff" fontSize="11" fontWeight="700" letterSpacing="3.4" fontFamily="Syne">
                <textPath href="#circ">CONTACT ME - CONTACT ME - CONTACT ME -</textPath>
              </text>
            </svg>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber text-ink">
              <Arrow className="h-6 w-6 rotate-45" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
