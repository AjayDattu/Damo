import { Btn, Container, Dot, Eyebrow } from "./ui";
import { counters, profile } from "../data/profile";

export const Counters = ({ items = counters }) => (
  <div className="flex flex-wrap gap-x-12 gap-y-6">
    {items.map((c) => (
      <div key={c.label}>
        <span className="relative inline-block font-display text-4xl font-bold text-ink">
          <span className="absolute -left-2 top-0 h-10 w-10 rounded-full bg-soft" aria-hidden />
          <span className="relative">{c.value}</span>
        </span>
        <p className="mt-1 text-[17px] text-mute">{c.label}</p>
      </div>
    ))}
  </div>
);

export const YearsBadge = () => (
  <div className="relative pl-3">
    <span className="absolute left-0 top-1 h-[120px] w-[120px] rounded-full bg-amber" aria-hidden />
    <span className="relative block font-display text-7xl font-bold leading-none text-ink">{profile.yearsOfExperience}</span>
    <span className="text-outline relative mt-5 block font-display text-4xl font-bold leading-[1.1] md:text-5xl">
      Years of<br />experience
    </span>
  </div>
);

/** Home-page "About" block: portrait on a black half-circle, intro copy and counters. */
function AboutIntro() {
  return (
    <section id="about" className="overflow-hidden py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
              <span className="absolute inset-x-[8%] bottom-0 top-[22%] rounded-t-full bg-ink" aria-hidden />
              <img
                src={profile.aboutPortrait}
                alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
                draggable={false}
              />
            </div>
            <div className="mt-16 pl-[8%] md:pl-[30%]">
              <YearsBadge />
            </div>
          </div>

          <div>
            <Eyebrow>Hello I’m</Eyebrow>
            <h2 className="mt-1 font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-ink md:text-6xl">
              <Dot>{`${profile.firstName} ${profile.lastName},`}</Dot><br />{profile.role}
            </h2>
            <p className="mt-6 font-display text-3xl font-bold text-ink md:text-4xl">Based in {profile.location}</p>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">{profile.bio}</p>
            <div className="mt-10">
              <Counters />
            </div>
            <div className="mt-12">
              <Btn to="/about">More about me</Btn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutIntro;
