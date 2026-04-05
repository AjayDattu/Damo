import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videoData } from "../utils/constants";
import { ArrowLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = videoData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800 });
  }, []);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-brand-bg text-black px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-black hover:underline"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-black p-4 md:p-10 lg:p-20 font-light">
      <button
        onClick={() => navigate("/MainPage#work")}
        className="mb-10 flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
      >
        <ArrowLeft size={20} /> <span className="text-lg">Back to Works</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div data-aos="fade-right">
          <video
            className="w-full rounded-2xl shadow-2xl border border-brand-secondary"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="flex flex-col justify-center gap-6" data-aos="fade-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 my-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-black/10 bg-brand-secondary text-sm md:text-base"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-black/80 max-w-2xl">
            {project.description}
          </p>

          <div className="mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-black text-white rounded-full text-lg hover:bg-black/80 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
