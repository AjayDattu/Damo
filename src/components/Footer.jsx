import { Link } from "react-router-dom";
import { Arrow, Container, Dot, SocialIcon } from "./ui";
import { profile } from "../data/profile";

const Card = ({ title, children }) => (
  <div className="flex min-h-[250px] flex-col justify-between rounded-2xl border border-white/15 p-8">
    <p className="font-display text-xl font-bold text-white">{title}</p>
    {children}
  </div>
);

function Footer() {
  return (
    <footer className="bg-ink pt-28 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.9fr] lg:gap-20">
          <div>
            <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              <Dot>Let’s work</Dot><br />together
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <span className="font-display text-lg font-bold">Based in {profile.location} |</span>
              <div className="flex gap-5">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white/80 transition-colors hover:text-amber">
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card title="Looking for a developer?">
              <a href={profile.phoneHref} className="group flex items-center justify-between font-display text-2xl font-bold text-orange">
                {profile.phone}
                <Arrow className="h-7 w-7 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Card>
            <Card title="Want to talk about a project?">
              <Link to="/#contact" className="group flex items-center justify-between font-display text-2xl font-bold text-orange">
                Send a message
                <Arrow className="h-7 w-7 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Card>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap text-center font-display font-extrabold uppercase leading-none tracking-tight text-peach"
          style={{ fontSize: "clamp(2.6rem, 11.2vw, 11.5rem)" }}
        >
          {profile.firstName} {profile.lastName}
        </p>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 py-8 text-[15px] text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <span>©{new Date().getFullYear()} {profile.firstName} {profile.lastName}, All Rights Reserved</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 transition-colors hover:text-amber">
            Back to Top
            <svg className="h-4 w-4 text-amber" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden><path d="M12 20V4M5 11l7-7 7 7" /></svg>
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
