import { Container, SectionHead } from "./ui";
import { process } from "../data/seo";

function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <Container>
        <SectionHead tag="How I work" title="From idea to launch" text="A simple, transparent process so you always know what is happening and what comes next." />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((s) => (
            <li key={s.n} className="rounded-2xl bg-peach p-7">
              <span className="font-display text-4xl font-bold text-ink">{s.n}</span>
              <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-mute">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Process;
