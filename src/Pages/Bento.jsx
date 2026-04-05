import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import TextShpere from "../components/TextShpere";
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
      description:
        "Developed an Intrusion Detection System using PyQt5 and PyShark for the Smart India Hackathon.",
      technologies: ["PyQt5", "PyShark"],
    },
    {
      year: "2023",
      title: "ECET Rank 79",
      description:
        "Achieved 79th rank in AP ECET, a state-level engineering entrance examination.",
      technologies: [],
    },
    {
      year: "2024",
      title: "Best Impactful Solution",
      description:
        "Developed a decentralized voting system using MERN stack, Web3, Blockchain, Solidity, and Ethereum for Prajwala Hackathon.",
      technologies: ["MERN", "Web3", "Blockchain", "Solidity", "Ethereum"],
    },
    {
      year: "2024",
      title: "Solved 550+ Problems",
      description:
        "LeetCode Problem Solving, solving over 550+ problems to sharpen algorithm and data structure skills.",
      technologies: [],
    },
  ];

  const experience = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      description:
        "Currently working at Memoa, a US-based startup, as a full-stack developer. Responsible for implementing core features such as the streaks mechanism. Collaborated on building scalable components and maintaining both frontend and backend systems with a strong focus on performance and clean code practices.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Redux",
        "Git",
      ],
    },
    {
      year: "Jan 2025 - Jun 2025",
      title: "Full Stack Developer",
      description:
        "Worked at Axis Intelligence, a US-based startup, as a full-stack developer. Focused on creating responsive UI components and enhancing website accessibility across devices. Improved frontend performance and usability, contributing to higher user satisfaction.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Accessibility",
        "Git",
        "Responsive Design",
      ],
    },
    {
      year: "2024",
      title: "Full Stack Developer Intern",
      description:
        "Worked as a full-stack developer intern at BlackBucks Company, developing web applications using React and Node.js. Focused on understanding client-server architecture and creating responsive designs, particularly emphasizing frontend development. Gained experience with various UI frameworks such as Ant Design, Material-UI, and Chakra UI. Additionally, learned API testing using Postman, resolved Git conflicts, and collaborated effectively with a team.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Ant Design",
        "Material-UI",
      ],
    },
    {
      year: "2023",
      title: "Java Developer Intern",
      description:
        "Worked as a Java developer intern at Henotic Technologies, building Java-based backend services and APIs. Additionally, focused on frontend development using JavaFX and Java Swing. Developed a Sudoku game project, gaining hands-on experience in desktop application development. Utilized backtracking algorithms to implement the solution for the Sudoku problem, enhancing problem-solving and backend development skills.",
      technologies: ["Java", "Backtracking"],
    },
  ];

  const education = [
    {
      year: "2022-2025",
      title: "BTech in Computer Science",
      institution: "SRKR Engineering College",
      location: "Bhimavaram, Andhra Pradesh",
    },
    {
      year: "2019-2022",
      title: "Diploma in Engineering",
      institution: "AANM VVSRS Polytechnic",
      location: "Gudlavalleru, Andhra Pradesh",
    },
    {
      year: "2018-2019",
      title: "High School",
      institution: "SJRVV High School",
      location: "Unguturu, Andhra Pradesh",
    },
  ];

  return (
    <div className="flex flex-col p-4 md:p-10 lg:p-20 space-y-32">
      {/* Works Section - Grid View */}
      <div id="work" className="scroll-mt-32">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-12 text-black dark:text-white tracking-tighter">
          Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoData.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer bg-brand-secondary dark:bg-neutral-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <video
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div id="Exp" className="scroll-mt-32">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-12 text-black tracking-tighter">
          Experience
        </h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border-t border-black/10 pt-8 flex flex-col md:flex-row gap-6 md:gap-20"
            >
              <div className="text-lg font-light text-black/50 md:w-48 shrink-0">
                {exp.year}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-light text-black">
                  {exp.title}
                </h3>
                <p className="text-lg text-black/70 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full border border-black/10 bg-brand-secondary text-xs uppercase tracking-wider"
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
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-12 text-black tracking-tighter">
          Education
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border-t border-black/10 pt-8 flex flex-col md:flex-row gap-6 md:gap-20"
            >
              <div className="text-lg font-light text-black/50 md:w-48 shrink-0">
                {edu.year}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-black">
                  {edu.title}
                </h3>
                <p className="text-lg text-black/70">{edu.institution}, {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="scroll-mt-32 overflow-hidden">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-12 text-black tracking-tighter text-center">
          Skills
        </h2>
        <div data-aos="zoom-in" className="flex justify-center py-10 scale-125 md:scale-150">
          <TextShpere />
        </div>
      </div>

      {/* Achievements Section */}
      <div id="Ach" className="scroll-mt-32">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-12 text-black tracking-tighter">
          Achievements
        </h2>
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border-t border-black/10 pt-8 flex flex-col md:flex-row gap-6 md:gap-20"
            >
              <div className="text-lg font-light text-black/50 md:w-48 shrink-0">
                {achievement.year}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-light text-black">
                  {achievement.title}
                </h3>
                <p className="text-lg text-black/70 leading-relaxed max-w-3xl">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTable;
