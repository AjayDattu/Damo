import { Btn, Container, SectionHead } from "./ui";
import ArticleCard from "./ArticleCard";
import { articles } from "../data/articles";

function LatestArticles() {
  return (
    <section id="learn" className="py-24 md:py-32">
      <Container>
        <SectionHead tag="Knowledge" title="Developer guides" text="Practical, no-fluff guides from real projects: mobile, web, backend and career." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
        <div className="mt-12 flex justify-center"><Btn to="/learn">All guides</Btn></div>
      </Container>
    </section>
  );
}

export default LatestArticles;
