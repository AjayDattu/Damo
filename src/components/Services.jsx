import { Link } from "react-router-dom";
import { Arrow, Container, SectionHead } from "./ui";
import { profile, services } from "../data/profile";

const Icon = ({ name }) => {
  const p = { className: "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: 1.6, viewBox: "0 0 24 24", "aria-hidden": true };
  const paths = {
    phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  };
  return <svg {...p}>{paths[name]}</svg>;
};

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHead tag="Services" title="My specialties" text={profile.intro} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.45fr]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2 lg:col-span-3 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/projects"
                className="group flex min-h-[200px] flex-col justify-between rounded-2xl bg-soft p-6 transition-colors duration-300 hover:bg-peach"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink">
                  <Icon name={s.icon} />
                </span>
                <span className="flex items-end justify-between gap-4">
                  <span className="whitespace-pre-line font-display text-xl font-semibold leading-snug text-ink">{s.title}</span>
                  <Arrow className="mb-1 h-5 w-5 shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <a
            href={profile.phoneHref}
            className="group flex min-h-[260px] flex-col justify-between rounded-2xl bg-ink p-7 text-white md:col-span-2 lg:col-span-1"
          >
            <Arrow className="ml-auto h-10 w-10 text-amber transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span>
              <span className="block font-display text-base font-bold uppercase text-orange">Say hello!</span>
              <span className="mt-1 block font-display text-2xl font-bold md:text-3xl">{profile.phone}</span>
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Services;
