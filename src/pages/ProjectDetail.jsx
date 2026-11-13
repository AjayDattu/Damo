import { Link, useParams } from "react-router-dom";
import { Arrow, Btn, Container, Dot, Eyebrow, Heading } from "../components/ui";
import { videoData } from "../utils/constants";

function ProjectDetail() {
  const { id } = useParams();
  const project = videoData.find((p) => p.id === Number(id));
  const index = videoData.indexOf(project);
  const next = videoData[(index + 1) % videoData.length];

  if (!project) {
    return (
      <Container className="py-40 text-center">
        <Heading>Project not found</Heading>
        <div className="mt-8"><Btn to="/projects">Back to projects</Btn></div>
      </Container>
    );
  }

  return (
    <>
      <section className="bg-peach py-20 md:py-28">
        <Container>
          <Link to="/projects" className="inline-flex items-center gap-2 text-[15px] text-ink transition-opacity hover:opacity-60">
            <Arrow className="h-4 w-4 -rotate-[135deg]" /> All projects
          </Link>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Project</Eyebrow>
              <Heading><Dot>{project.title}</Dot></Heading>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="rounded-full border border-ink/30 px-3.5 py-1 text-xs font-medium uppercase tracking-wide text-ink">{t}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <video src={project.video} autoPlay loop muted playsInline className="aspect-video w-full rounded-3xl bg-soft object-cover" />
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <h3 className="font-display text-3xl font-bold text-ink">About the project</h3>
            <div>
              <p className="text-xl leading-relaxed text-mute">{project.description}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Btn href={project.link}>Visit project</Btn>
                {next && next !== project && <Btn to={`/project/${next.id}`} variant="light">Next: {next.title}</Btn>}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectDetail;
