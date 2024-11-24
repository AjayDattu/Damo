import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData1 from "../assets/HSL2GN7IOi.json"; // Replace with correct path
import animationData2 from "../assets/Animation - 1731938073445.json"; // Replace with correct path
import AchievementsTable from "./Bento";
import { Contact } from "../components/Contact";
import VideoFrame from "../components/VideoFrame";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";
import './Pulse.css'

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="h-full flex flex-col bg-black overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center align-middle opacity-40">
      <div className="w-52 h-52 pulse bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
      </div>
 
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80 animate-pulse filter blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white opacity-40 animate-spin-slow"></div>
          <div className="absolute w-full h-full backdrop-blur-md"></div> */}
        </div>
      <Navbar/>
      <div id="home" className="h-screen relative flex flex-col pt-20 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row w-full h-full md:gap-5 lg:gap-0" data-aos="fade-left">
          <div className="flex w-full h-64 lg:h-auto align-middle items-center justify-center">
            <Lottie
              animationData={animationData1}
              loop={true}
              className="w-full h-[60%] opacity-75 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full align-middle items-center justify-center gap-5 p-10" data-aos="fade-right">
            <div className="text-base w-full text-left sm:text-lg md:text-xl lg:text-2xl font-light text-gray-400 max-w-3xl mx-auto">
              <div className="flex flex-col gap-5">
                <p className="text-left w-full md:text-3x lg:text-5xl font-light text-white mx-auto">I am Ajay Dattu,</p>
                <p> a final-year B.Tech student in Computer Science. I specialize in building beautiful, interactive web applications using modern technologies such as Next.js, React.js, animation libraries, UI libraries, and Tailwind CSS. I am constantly exploring new tools and frameworks to create optimized user experiences.
                </p>
                <a
                href="https://drive.google.com/file/d/19_1CEIwt8tDtM3fTVHtiYMXePjqXLmhz/view?usp=sharing"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-100 cursor-pointer hover:underline"
              >
                Download Resume
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div id="achievements" className="h-full">
        <AchievementsTable />
      </div>
      <div id="About" className="h-screen">
        <VideoFrame />
      </div>
      <div
        id="contact"
        className="h-full p-6 flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-6 backdrop-blur-sm"
      >
        <div className="flex-1 w-full h-64 lg:h-auto">
          <Lottie
            animationData={animationData2}
            loop={true}
            className="w-full h-[80%] opacity-75 rounded-md"
          />
        </div>
        <div className="flex-1 w-full h-screen mt-6 lg:mt-0 lg:w-auto pt-8">
          <Contact />
        </div>
      </div>

      <div data-aos="zoom-in" className="backdrop-blur-sm">
        <SocialLinks />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-400 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}

export default Home;
