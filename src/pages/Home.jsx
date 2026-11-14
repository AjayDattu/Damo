import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutIntro from "../components/AboutIntro";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import TechStack from "../components/TechStack";
import Process from "../components/Process";
import LatestArticles from "../components/LatestArticles";
import FAQ from "../components/FAQ";
import Seo from "../components/Seo";
import { faqs, pages, site, SITE_URL } from "../data/seo";
import { profile } from "../data/profile";
import ContactSection from "../components/ContactSection";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: SITE_URL + "/",
    jobTitle: "Full-stack Software Developer",
    description: site.description,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    sameAs: profile.socials.map((s) => s.href),
    knowsAbout: ["React", "React Native", "Next.js", "Node.js", "TypeScript", "Expo", "MongoDB", "Supabase", "Data structures and algorithms"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL + "/",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

function Home() {
  return (
    <>
      <Seo {...pages["/"]} path="/" jsonLd={jsonLd} />
      <Hero />
      <Services />
      <TechStack />
      <AboutIntro />
      <Resume layout="side" />
      <Portfolio />
      <Process />
      <LatestArticles />
      <FAQ />
      <ContactSection />
    </>
  );
}

export default Home;
