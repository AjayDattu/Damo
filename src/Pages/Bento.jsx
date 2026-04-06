import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MarqueeSkills from "../components/MarqueeSkills";
import StatsSection from "../components/StatsSection";
import { videoData } from "../utils/constants";

const AchievementsTable = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const achievements = [
    {
      year: "2023",
      title: "SIH Finalist",
      points: [
        "Developed an Intrusion Detection System for the Smart India Hackathon.",
        "Utilized PyQt5 and PyShark for real-time network monitoring.",
      ],
      technologies: ["PyQt5", "PyShark"],
    },
    {
      year: "2023",
      title: "ECET Rank 79",
      points: [
        "Achieved 79th rank in AP ECET among thousands of candidates.",
        "State-level recognition for engineering entrance excellence.",
      ],
      technologies: [],
    },
    {
      year: "2024",
      title: "Best Impactful Solution",
      points: [
        "Developed a decentralized voting system for Prajwala Hackathon.",
        "Implemented secure blockchain voting using Solidity and Ethereum.",
      ],
      technologies: ["MERN", "Web3", "Blockchain", "Solidity", "Ethereum"],
    },
    {
      year: "2024",
      title: "DS & Algo Excellence",
      points: [
        "Solved over 550+ problems on LeetCode with consistent participation.",
        "Advanced proficiency in algorithms and data structures.",
      ],
      technologies: [],
    },
  ];

  const experience = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      company: "Memoa",
      location: "USA (Remote)",
      points: [
        "Architected core features including the interactive streaks mechanism.",
        "Collaborated on building highly scalable components and complex state management.",
        "Focused on performance optimization and maintaining clean code architecture.",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Redux"],
    },
    {
      year: "Jan 2025 - Jun 2025",
      title: "Full Stack Developer",
      company: "Axis Intelligence",
      location: "USA (Remote)",
      points: [
        "Developed responsive UI components ensuring 100% device compatibility.",
        "Enhanced accessibility patterns across the entire web platform.",
        "Streamlined frontend performance, reducing TBT and improving user satisfaction.",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Accessibility"],
    },
    {
      year: "2024",
      title: "Full Stack Developer Intern",
      company: "BlackBucks Company",
      points: [
        "Engineered web applications using React and Node.js with a modular approach.",
        "Integrated multiple UI frameworks (Ant Design, MUI, Chakra) for diverse client needs.",
        "Automated API testing workflows using Postman and GA-based testing.",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "AntD", "MUI"],
    },
    {
      year: "2023",
      title: "Java Developer Intern",
      company: "Henotic Technologies",
      points: [
        "Developed robust backend services and RESTful APIs using Java.",
        "Built desktop applications implementing complex backtracking algorithms.",
        "Collaborated on cross-functional teams for full software lifecycle delivery.",
      ],
      technologies: ["Java", "JavaFX", "Algorithms"],
    },
  ];

  const education = [
    {
      year: "2022 - 2025",
      title: "BTech in Computer Science",
      institution: "SRKR Engineering College",
      location: "Bhimavaram, AP",
    },
    {
      year: "2019 - 2022",
      title: "Diploma in Engineering",
      institution: "AANM VVSRS Polytechnic",
      location: "Gudlavalleru, AP",
    },
  ];

  return (
    <div className="flex flex-col p-6 md:p-12 lg:p-24 space-y-32 bg-white dark:bg-black transition-colors duration-400">
      
      {/* Intro Stats */}
      <section data-aos="fade-up">
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-black dark:text-white mb-12">
           Professional <br/> <span className="text-black/30 dark:text-white/30">Snapshot</span>
        </h1>
        <StatsSection />
      </section>

      {/* Works Section */}
      <div id="work" className="scroll-mt-32">
        <div className="flex items-end justify-between mb-16 border-b border-black/5 dark:border-white/5 pb-8">
            <h2 className="text-4xl md:text-7xl font-light text-black dark:text-white tracking-tighter">
            Selected Works
            </h2>
            <span className="text-xs uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">
                {videoData.length} Projects
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoData.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative aspect-video overflow-hidden rounded-3xl cursor-pointer bg-black/5 dark:bg-white/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]"
            >
              <video
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-sm" />
              <div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-light text-white tracking-tight">{project.name || "Project View"}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div id="Exp" className="scroll-mt-32">
        <h2 className="text-4xl md:text-7xl font-light mb-16 text-black dark:text-white tracking-tighter border-b border-black/5 dark:border-white/5 pb-8">
          Experience
        </h2>
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {experience.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="py-12 flex flex-col md:flex-row gap-8 md:gap-24"
            >
              <div className="text-lg font-light text-black/40 dark:text-white/40 md:w-56 shrink-0 leading-none pt-2">
                {exp.year}
              </div>
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-black/50 dark:text-white/50 font-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
                      {exp.company} {exp.location && `· ${exp.location}`}
                  </p>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-lg text-black/70 dark:text-white/70 leading-relaxed font-light flex gap-4 max-w-4xl">
                      <span className="text-black/20 dark:text-white/20 mt-1">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div id="edu" className="scroll-mt-32">
        <h2 className="text-4xl md:text-7xl font-light mb-16 text-black dark:text-white tracking-tighter border-b border-black/5 dark:border-white/5 pb-8">
          Education
        </h2>
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="py-12 flex flex-col md:flex-row gap-8 md:gap-24"
            >
              <div className="text-lg font-light text-black/40 dark:text-white/40 md:w-56 shrink-0 leading-none pt-2">
                {edu.year}
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-tight">
                  {edu.title}
                </h3>
                <p className="text-lg text-black/50 dark:text-white/50 font-light">{edu.institution}, {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="scroll-mt-32 pt-20">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-7xl font-light text-black dark:text-white tracking-tighter leading-none">
            Stack
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/20 dark:text-white/20 mb-2">
            Technological Expertise
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white dark:from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white dark:from-black to-transparent" />
          <MarqueeSkills />
        </div>

      </div>

      {/* Achievements Section */}
      <div id="Ach" className="scroll-mt-32">
        <h2 className="text-4xl md:text-7xl font-light mb-16 text-black dark:text-white tracking-tighter border-b border-black/5 dark:border-white/5 pb-8">
          Achievements
        </h2>
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="py-12 flex flex-col md:flex-row gap-8 md:gap-24"
            >
              <div className="text-lg font-light text-black/40 dark:text-white/40 md:w-56 shrink-0 leading-none pt-2">
                {achievement.year}
              </div>
              <div className="space-y-6 flex-1">
                <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-tight">
                  {achievement.title}
                </h3>
                <ul className="space-y-3">
                  {achievement.points.map((point, i) => (
                    <li key={i} className="text-lg text-black/70 dark:text-white/70 leading-relaxed font-light flex gap-4 max-w-4xl">
                      <span className="text-black/20 dark:text-white/20 mt-1">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTable;

