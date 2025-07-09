import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextShpere from "../components/TextShpere";

const AchievementsTable = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
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
  const videoData = [
    {
      video:
        "https://res.cloudinary.com/dxxics5nv/video/upload/v1752061947/Simple_Clean_Screen_Mockup_Fashion_New_Season_Instagram_Post_zynf9b.mp4",
      title: "3D Portfolio",
      description:
        "I learned how to integrate and maintain 3D models in a website, enhancing interactivity and user engagement. This project helped me understand the complexities of rendering 3D assets and optimizing their performance for seamless user experiences.",
      techStack: ["React", "Spline", "Tailwind CSS"],
      link: "https://github.com/AjayDattu/portfolio.git",
    },
    {
      video:
        "https://res.cloudinary.com/dxxics5nv/video/upload/v1752062189/Beige_Grey_Aesthetic_Minimalist_Digital_Product_Grid_Mockup_Facebook_Post_j8h9lj.mp4",
      title: "ShopIt Ecommerce",
      description:
        "Developed a full-stack e-commerce platform with a seamless and responsive user interface. This project taught me how to handle state management with Redux, implement secure user authentication, and design intuitive layouts for better user experiences.",
      techStack: ["MERN", "Redux", "Ant Design", "TailwindCSS"],
      link: "https://www.shopitworld.in/",
    },
    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750106/xbrmgcrdbzucxcatqd3l.mp4",
      title: "Temp-Pad",
      description:
        "Built a secure file-sharing application that allows users to share files without requiring login credentials. Through this project, I gained insights into API integration, secure file handling, and maintaining user privacy while ensuring a smooth workflow.",
      techStack: ["React", "Express.js", "Tailwind CSS"],
      link: "https://tempad.netlify.app/",
    },
    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731752164/Untitled_design_6_ihgzn9.mp4",
      title: "Piclingo Translation",
      description:
        "Worked on a project that uses optical character recognition (OCR) to extract and translate text from images. This project enhanced my understanding of OCR, translation APIs, and creating accessible tools for better communication across languages.",
      techStack: ["React", "Tesseract.js", "Tailwind CSS"],
      link: "https://github.com/AjayDattu/PicLingo.git",
    },
    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753485/Untitled_design_8_rlsds3.mp4",
      title: "Interactive Designs",
      description:
        "Explored interactive web design concepts to create engaging user experiences. This project deepened my knowledge of advanced CSS techniques and leveraging tools like Spline for creating visually captivating and user-friendly designs.",
      techStack: ["React", "Tailwind CSS", "Spline"],
      link: "https://github.com/AjayDattu/",
    },
    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731753490/Untitled_design_9_npsrzp.mp4",
      title: "Notes App",
      description:
        "Developed a real-time note syncing application with customizable themes. I learned how to manage data persistence using MongoDB, set up backend APIs with Node.js, and implement responsive UIs for a seamless user experience.",
      techStack: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/AjayDattu/notesapp1.git",
    },
    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731750787/Untitled_design_2_dyhlx9.mp4",
      title: "Next.js Dashboard",
      description:
        "Built a high-performance dashboard application leveraging Next.js for server-side rendering. I learned how to optimize data fetching, improve application performance, and design dashboards with responsive layouts and minimalistic designs.",
      techStack: ["Next.js", "Tailwind CSS"],
      link: "https://github.com/AjayDattu/Neina-Previously-Nexorand-.git",
    },
    {
      video:
        "https://res.cloudinary.com/dyny7wc0n/video/upload/v1731751734/Untitled_design_5_ghfevt.mp4",
      title: "New Design Concepts",
      description:
        "Discovered unique web design techniques to make web applications more interactive and visually appealing. This project allowed me to experiment with advanced CSS, utilize Figma for prototyping, and create clean, modern UI designs.",
      techStack: ["React", "CSS", "Figma"],
      link: "https://github.com/AjayDattu/",
    },
  ];
  const experience = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      description:
        "Currently working at **Memoa**, a US-based startup, as a full-stack developer. Responsible for implementing core features such as the streaks mechanism. Collaborated on building scalable components and maintaining both frontend and backend systems with a strong focus on performance and clean code practices.",
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
        "Worked at **Axis Intelligence**, a US-based startup, as a full-stack developer. Focused on creating responsive UI components and enhancing website accessibility across devices. Improved frontend performance and usability, contributing to higher user satisfaction.",
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
        "Chakra UI",
        "Postman",
        "Git",
      ],
    },
    {
      year: "2023",
      title: "Java Developer Intern",
      description:
        "Worked as a Java developer intern at Henotic Technologies, building Java-based backend services and APIs. Additionally, focused on frontend development using JavaFX and Java Swing. Developed a Sudoku game project, gaining hands-on experience in desktop application development. Utilized backtracking algorithms to implement the solution for the Sudoku problem, enhancing problem-solving and backend development skills.",
      technologies: ["Java", "JavaFX", "Java Swing", "Backtracking"],
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
    <div className="h-full flex flex-col p-4 md:p-6 lg:p-10 space-y-16 backdrop-blur-md">
      {/* Education Section */}
      <div id="work" className="h-auto pt-8">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white">
          Works
        </h1>
        <div className="relative space-y-6 md:space-y-8 ">
          {videoData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row lg:items-center sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg  align-middle justify-between"
            >
              {/* Video Section */}
              <div className="w-full sm:w-1/2" data-aos="fade-right">
                <video
                  className="w-full rounded-lg"
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Project Information Section */}
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left  " 
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {project.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {project.description}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {project.techStack.join(", ")}
                </div>
                <a
                  className="text-xs md:text-sm text-gray-400"
                  href={project.link}
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="skills" className="h-auto pt-8">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Skills
        </h1>
        <div className="relative space-y-6 md:space-y-8" data-aos="fade-left">
          {/* <div className="flex flex-wrap gap-6 justify-center sm:justify-start p-20">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-neutral-800 text-white text-xs md:text-sm px-5 py-3 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-2xl"
        >
          {skill}
        </span>
      ))}

    </div> */}
          <TextShpere />
        </div>
      </div>

      <div id="edu" className="h-auto pt-8">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Education
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-sm"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {edu.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {edu.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {edu.institution}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="Exp" className="h-auto pt-8 backdrop-blur-sm">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Experience
        </h1>
        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {exp.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {exp.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {exp.description}
                </div>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div id="Ach" className="h-auto pt-8 backdrop-blur-lg">
        <h1
          className="text-3xl md:text-3xl lg:text-5xl font-light mt-12 mb-6 text-center text-white"
          data-aos="zoom-out-down"
        >
          Achievements
        </h1>
        <div className="relative space-y-6 md:space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 p-4 md:p-6 rounded-lg"
            >
              <div
                className="text-sm md:text-lg font-semibold text-neutral-600 w-full sm:text-center"
                data-aos="fade-right"
              >
                {achievement.year}
              </div>
              <div
                className="flex flex-col space-y-1 md:space-y-2 w-full text-center sm:text-left"
                data-aos="fade-left"
              >
                <div className="text-lg md:text-2xl font-light text-white">
                  {achievement.title}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {achievement.description}
                </div>
                {achievement.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {achievement.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-700 text-blue-100 text-xs md:text-sm px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTable;
