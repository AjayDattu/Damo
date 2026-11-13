import { Container, Dot, Eyebrow, Heading } from "../components/ui";
import { AppCard, ProjectCard } from "../components/Portfolio";
import { apps } from "../data/profile";
import { videoData } from "../utils/constants";

function Projects() {
  return (
    <>
      <section className="bg-peach py-20 md:py-28">
        <Container className="text-center">
          <Eyebrow>Portfolio</Eyebrow>
          <Heading><Dot>All my work</Dot></Heading>
          <p className="mx-auto mt-6 max-w-lg text-[17px] text-mute">Two apps on the stores and the web projects that got me here.</p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
            {apps.map((a) => <AppCard key={a.id} app={a} />)}
            {videoData.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Projects;
