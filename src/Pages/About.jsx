import Entry from "../Entry/page";
import { SmoothScrollHero } from "../components/SmoothScroll";
import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/MainPage");
  }
  return (
    <div className="bg-black">
      <Entry />
      <SmoothScrollHero />
      <button
        className="top-0 right-3 font-light text-white z-30 text-5xl"
        onClick={handleclick}
      >
        Back
      </button>
    </div>
  );
}

export default About;
