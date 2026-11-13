import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Arrow, Btn, Container, SectionHead } from "./ui";
import { apps } from "../data/profile";
import { videoData } from "../utils/constants";

// Cloudinary serves a resized rendition when a transform is inserted after /upload/.
const optimise = (url, t) => (url.includes("/upload/") ? url.replace("/upload/", `/upload/${t}/`) : url);
const videoSrc = (url) => optimise(url, "q_auto,w_1200");
const posterSrc = (url) => optimise(url, "so_0,q_auto,w_1200").replace(/\.(mp4|mov|webm)$/i, ".jpg");

const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((t) => (
      <span key={t} className="rounded-full border border-ink/30 px-3.5 py-1 text-xs font-medium uppercase tracking-wide text-ink">{t}</span>
    ))}
  </div>
);

const Caption = ({ tags, title }) => (
  <div className="mt-6">
    <Tags tags={tags} />
    <div className="mt-4 flex items-center justify-between gap-6">
      <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">{title}</h3>
      <Arrow className="h-7 w-7 shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </div>
  </div>
);

const Frame = ({ children }) => (
  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-soft">
    {children}
    <span className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-amber text-ink opacity-0 transition-[opacity,transform] duration-300 group-hover:scale-100 group-hover:opacity-100">
      <Arrow className="h-6 w-6" />
    </span>
  </div>
);

/** Published app card: icon on a peach panel, links to the store page. */
export const AppCard = ({ app }) => (
  <a href={app.href} target="_blank" rel="noopener noreferrer" className="group block">
    <Frame>
      <div className="absolute inset-0 flex items-center justify-center bg-peach">
        <img src={app.icon} alt="" className="h-36 w-36 rounded-[22%] shadow-2xl md:h-44 md:w-44" loading="lazy" />
      </div>
    </Frame>
    <Caption tags={app.tags} title={app.title} />
    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mute">{app.blurb}</p>
  </a>
);

/** Web project card: video plays while on screen, opens the project page. */
export const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(([e]) => (e.isIntersecting ? el.play().catch(() => {}) : el.pause()), { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Link to={`/project/${project.id}`} className="group block">
      <Frame>
        <img src={posterSrc(project.video)} alt="" loading="lazy" aria-hidden className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${ready ? "opacity-0" : "opacity-100"}`} />
        <video
          ref={ref}
          src={videoSrc(project.video)}
          poster={posterSrc(project.video)}
          preload="metadata" loop muted playsInline
          onLoadedData={() => setReady(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
        />
      </Frame>
      <Caption tags={project.techStack.slice(0, 2)} title={project.title} />
    </Link>
  );
};

/** Home: the two published apps, then the first four web projects. */
function Portfolio({ limit = 4 }) {
  return (
    <section id="work" className="bg-peach py-24 md:py-32">
      <Container>
        <SectionHead center tag="Portfolio" title="My recent work" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {apps.map((a) => <AppCard key={a.id} app={a} />)}
          {videoData.slice(0, limit).map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
        <div className="mt-16 flex justify-center">
          <Btn to="/projects">View all projects</Btn>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
