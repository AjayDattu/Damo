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
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-8 tracking-tighter">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" /> 
            <span className="text-sm uppercase tracking-widest font-medium">Return Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6 md:p-14 lg:px-24 py-32 transition-colors duration-400 font-light">
      <button
        onClick={() => navigate("/MainPage#work")}
        className="group mb-16 flex items-center gap-4 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-all"
      >
        <ArrowLeft size={22} className="transition-transform group-hover:-translate-x-1" /> 
        <span className="text-xs uppercase tracking-[0.3em] font-bold">Back to Works</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        <div data-aos="fade-right" className="relative group">
          <div className="absolute -inset-4 bg-black/5 dark:bg-white/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <video
            className="relative w-full rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/5 object-cover"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="flex flex-col gap-10" data-aos="fade-left">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 font-bold">Project Detail</p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-tighter leading-[0.9]">
              {project.title}
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-widest font-medium text-black/60 dark:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-black/60 dark:text-white/60 max-w-2xl tracking-tight">
            {project.description}
          </p>

          <div className="mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between gap-12 pl-10 pr-6 py-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:scale-[0.98] active:scale-95 shadow-2xl dark:shadow-white/5"
            >
              <span className="relative z-10">Project Link</span>
              <svg
                className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};


export default ProjectDescription;
