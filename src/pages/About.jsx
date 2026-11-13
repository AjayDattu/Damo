import { Arrow, Container, Eyebrow, Heading, Dot } from "../components/ui";
import { Counters, YearsBadge } from "../components/AboutIntro";
import Resume from "../components/Resume";
import { profile } from "../data/profile";

function About() {
  const name = `${profile.firstName} ${profile.lastName}`;
  return (
    <>
      {/* Header: portrait on an amber half-circle, intro on the right */}
      <section className="bg-peach py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
              <span className="absolute inset-x-[4%] bottom-0 top-[30%] rounded-t-full bg-amber" aria-hidden />
              <img
                src={profile.aboutPortrait}
                alt={`Portrait of ${name}`}
                draggable={false}
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
            </div>
            <div>
              <Eyebrow>About me</Eyebrow>
              <Heading>{name}</Heading>
              <p className="mt-6 font-display text-2xl font-bold text-ink">{profile.role}</p>
              <p className="mt-6 font-display text-xl font-semibold leading-relaxed text-ink">{profile.intro}</p>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">{profile.bio}</p>
              <p className="mt-8 font-script text-6xl text-ink" aria-hidden>{name}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision + counters + years badge + phone card */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <Heading><Dot>{"My vision is to\nship work people\nactually use"}</Dot></Heading>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-mute">
                Two apps live on the stores, web platforms with real customers, and a daily habit of solving hard problems. I like owning a feature end to end: the screen, the API behind it and the performance budget that keeps it fast.
              </p>
              <div className="mt-10"><Counters /></div>
            </div>
            <div>
              <YearsBadge />
              <a href={profile.phoneHref} className="group mt-14 flex items-center justify-between rounded-2xl bg-ink p-7 text-white">
                <span>
                  <span className="block font-display text-base font-bold uppercase text-orange">Say hello!</span>
                  <span className="mt-1 block font-display text-2xl font-bold md:text-3xl">{profile.phone}</span>
                </span>
                <Arrow className="h-9 w-9 text-amber transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Resume layout="top" />
    </>
  );
}

export default About;
