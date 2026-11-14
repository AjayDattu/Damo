import { Link, useParams } from "react-router-dom";
import { Arrow, Btn, Container, Heading } from "../components/ui";
import ArticleCard, { fmtDate } from "../components/ArticleCard";
import Seo from "../components/Seo";
import { articles, getArticle } from "../data/articles";
import { SITE_URL, site } from "../data/seo";

function Article() {
  const { slug } = useParams();
  const a = getArticle(slug);

  if (!a) {
    return (
      <Container className="py-40 text-center">
        <Heading>Guide not found</Heading>
        <div className="mt-8"><Btn to="/learn">All guides</Btn></div>
      </Container>
    );
  }

  const url = `${SITE_URL}/learn/${a.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.date,
      mainEntityOfPage: url,
      author: { "@type": "Person", name: site.name, url: SITE_URL },
      publisher: { "@type": "Person", name: site.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <Seo title={`${a.title} | ${site.name}`} description={a.description} path={`/learn/${a.slug}`} type="article" jsonLd={jsonLd} />
      <section className="bg-peach py-20 md:py-28">
        <Container>
          <Link to="/learn" className="inline-flex items-center gap-2 text-[15px] text-ink transition-opacity hover:opacity-60">
            <Arrow className="h-4 w-4 -rotate-[135deg]" /> All guides
          </Link>
          <span className="mt-8 block text-xs font-semibold uppercase tracking-wide text-orange">{a.category}</span>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-6xl">{a.title}</h1>
          <p className="mt-6 text-[15px] text-ink/70">By {site.name} · {fmtDate(a.date)} · {a.read} min read</p>
        </Container>
      </section>

      <article className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {a.body.map((b, i) => {
              if (b.t === "h") return <h2 key={i} className="mb-3 mt-10 font-display text-2xl font-bold text-ink md:text-3xl">{b.c}</h2>;
              if (b.t === "ul") return <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-mute marker:text-orange">{b.c.map((li) => <li key={li}>{li}</li>)}</ul>;
              return <p key={i} className="my-4 text-[17px] leading-relaxed text-mute">{b.c}</p>;
            })}
            <div className="mt-14 rounded-2xl bg-ink p-8 text-white">
              <p className="font-display text-2xl font-bold text-white">Need help building this?</p>
              <p className="mt-2 text-white/70">I build React Native apps, Next.js sites and Node.js APIs. Let&apos;s talk about your project.</p>
              <div className="mt-6"><Btn to="/#contact" variant="amber">Let&apos;s Talk</Btn></div>
            </div>
          </div>
        </Container>
      </article>

      <section className="bg-soft py-20">
        <Container>
          <h2 className="mb-10 font-display text-3xl font-bold text-ink">More guides</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ArticleCard key={r.slug} a={r} />)}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Article;
