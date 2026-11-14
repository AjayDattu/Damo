import { Container, Dot, Eyebrow, Heading } from "../components/ui";
import ArticleCard from "../components/ArticleCard";
import Seo from "../components/Seo";
import { articles } from "../data/articles";
import { pages, SITE_URL } from "../data/seo";

function Learn() {
  const meta = pages["/learn"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.title,
    description: meta.description,
    url: `${SITE_URL}/learn`,
    hasPart: articles.map((a) => ({ "@type": "Article", headline: a.title, url: `${SITE_URL}/learn/${a.slug}` })),
  };
  return (
    <>
      <Seo {...meta} path="/learn" jsonLd={jsonLd} />
      <section className="bg-peach py-20 md:py-28">
        <Container>
          <Eyebrow>Learn</Eyebrow>
          <Heading><Dot>Developer guides</Dot></Heading>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/70">
            Practical guides on React Native, React, Next.js, Node.js and data structures, written by a working full-stack engineer.
          </p>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Learn;
