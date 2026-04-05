import Entry from "../Entry/page";
import { SmoothScrollHero } from "../components/SmoothScroll";
import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/MainPage");
  }
  return (
    <div className="bg-brand-bg min-h-screen relative">
      <div className="fixed top-10 right-10 z-50">
        <button
          className="font-light text-black text-2xl hover:opacity-50 transition-all border-b border-black/20"
          onClick={handleclick}
        >
          Back
        </button>
      </div>
      <Entry />
      <SmoothScrollHero />
    </div>
  );
}

export default About;
