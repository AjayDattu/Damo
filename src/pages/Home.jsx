import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutIntro from "../components/AboutIntro";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutIntro />
      <Resume layout="side" />
      <Portfolio />
      <ContactSection />
    </>
  );
}

export default Home;
