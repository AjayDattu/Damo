import { useState } from "react";
import { Arrow, Container, SectionHead } from "./ui";
import { awards, education, experience, profile, skills } from "../data/profile";

const TABS = ["About me", "Experience", "Education", "Skills", "Awards"];

const Row = ({ period, title, company, points }) => (
  <div className="grid grid-cols-1 gap-3 border-b border-ink/10 py-7 md:grid-cols-[180px_1fr] md:gap-8">
    <span className="text-[15px] text-mute">{period}</span>
    <div>
      <h4 className="font-display text-2xl font-bold text-ink">{title}</h4>
      <p className="mt-1 text-[15px] text-mute">{company}</p>
      {points && (
        <ul className="mt-4 space-y-1.5 text-[15px] leading-relaxed text-mute">
          {points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-orange" />{p}</li>)}
        </ul>
      )}
    </div>
  </div>
);

const Panels = {
  "About me": () => (
    <div>
      <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">Based in {profile.location}</h3>
      <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-mute">
        {profile.firstName} {profile.lastName}, <span className="text-ink">{profile.role}</span>, based in {profile.location}. {profile.bio}
      </p>
      <dl className="mt-10 grid grid-cols-[140px_1fr] gap-y-4 text-[17px]">
        {[
          ["Name", `${profile.firstName} ${profile.lastName}`],
          ["Based in", profile.location],
          ["Phone", profile.phone],
          ["Experience", `${profile.yearsOfExperience} years`],
          ["Freelance", "Available"],
          ["Apps shipped", "Memoa, Memoa Vault"],
        ].map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-mute">{k}</dt>
            <dd className="font-display text-xl font-bold text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  ),
  Experience: () => <div className="-mt-7">{experience.map((e) => <Row key={e.title + e.company} {...e} />)}</div>,
  Education: () => <div className="-mt-7">{education.map((e) => <Row key={e.title} {...e} />)}</div>,
  Skills: () => (
    <div className="space-y-7">
      {skills.map((s) => (
        <div key={s.name}>
          <div className="mb-2 flex items-center justify-between font-display text-lg font-bold text-ink">
            <span>{s.name}</span><span className="text-orange">{s.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-ink/10">
            <div className="h-full rounded-full bg-amber transition-[width] duration-700" style={{ width: `${s.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  ),
  Awards: () => (
    <div className="-mt-7">
      {awards.map((a) => (
        <div key={a.title} className="flex items-center gap-6 border-b border-ink/10 py-6">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber font-display text-sm font-bold text-ink">{a.year}</span>
          <div>
            <p className="text-[15px] text-mute">{a.label}</p>
            <h4 className="font-display text-xl font-bold text-ink">{a.title}</h4>
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Resume tabs. `layout="side"` puts the tab list to the left (home page);
 * `layout="top"` centres it above the panel (about page).
 */
function Resume({ layout = "side" }) {
  const [tab, setTab] = useState(TABS[0]);
  const Panel = Panels[tab];

  const tabBtn = (t) => (
    <button
      key={t}
      type="button"
      onClick={() => setTab(t)}
      aria-pressed={tab === t}
      className={`flex items-center justify-between gap-4 rounded-lg px-6 py-4 font-display text-[15px] font-bold transition-colors duration-200 ${
        tab === t ? "bg-ink text-white" : "bg-white text-ink hover:bg-peach"
      }`}
    >
      {t} <Arrow />
    </button>
  );

  if (layout === "top") {
    return (
      <section id="resume" className="bg-soft py-24 md:py-32">
        <Container>
          <SectionHead center tag="Resume" title="All over my details find here…" />
          <div className="mx-auto mb-14 flex max-w-4xl flex-wrap justify-center gap-4">{TABS.map(tabBtn)}</div>
          <div className="mx-auto max-w-3xl"><Panel /></div>
        </Container>
      </section>
    );
  }

  return (
    <section id="resume" className="bg-soft py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[400px_1fr] lg:gap-24">
          <div>
            <SectionHead tag="Resume" title={"All over my\ndetails find\nhere…"} />
            <div className="-mt-6 flex flex-col gap-3">{TABS.map(tabBtn)}</div>
          </div>
          <div className="lg:pt-6"><Panel /></div>
        </div>
      </Container>
    </section>
  );
}

export default Resume;
