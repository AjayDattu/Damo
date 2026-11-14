import { Container, SectionHead } from "./ui";
import { techGroups } from "../data/seo";

function TechStack() {
  return (
    <section id="stack" className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHead
          tag="Tech stack"
          title="Tools I build with"
          text="A modern, proven stack for shipping fast mobile apps, SEO-friendly websites and reliable APIs."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g) => (
            <div key={g.title} className="rounded-2xl bg-white p-7">
              <h3 className="font-display text-xl font-bold">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-full border border-ink/20 px-3.5 py-1.5 text-sm text-ink">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
