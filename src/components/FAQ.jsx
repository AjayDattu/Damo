import { Container, SectionHead } from "./ui";
import { faqs } from "../data/seo";

function FAQ() {
  return (
    <section id="faq" className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHead tag="FAQ" title="Common questions" text="Answers to what clients and recruiters ask most about working with a full-stack developer." />
        <div className="mx-auto max-w-3xl divide-y divide-ink/10 rounded-2xl bg-white px-6 md:px-8">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold text-ink">
                {f.q}
                <span className="text-2xl leading-none text-orange transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-4 text-[17px] leading-relaxed text-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
