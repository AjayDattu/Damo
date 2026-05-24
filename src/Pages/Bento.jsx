// eslint-disable-next-line no-unused-vars
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
      title: "Software Engineer — SDE 1",
      company: "Memoa",
      location: "USA (Remote)",
      points: [
        "Architected core features including the interactive streaks mechanism across the React Native Expo mobile app.",
        "Implemented In-App Purchases (IAP) with subscription tiers for both iOS and Android platforms.",
        "Collaborated on building highly scalable components and complex state management.",
        "Focused on performance optimization and maintaining clean code architecture.",
      ],
      technologies: ["React Native", "Expo", "React", "Next.js", "Node.js", "MongoDB", "Redux", "In-App Purchases"],
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
            Websites
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
              data-aos-delay={index * 80}
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

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project number badge */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Info panel slides up */}
              <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {/* Tech stack pills */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-xl font-light text-white tracking-tight mb-1">
                  {project.title || "Project View"}
                </h3>
                {project.description && (
                  <p className="text-sm text-white/60 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                    View Project
                  </span>
                  <svg className="w-3 h-3 text-white/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Mobile Applications Section ─────────────────────────────────── */}
      <div id="mobile-apps" className="scroll-mt-32">

        {/* Section header */}
        <div className="flex items-end justify-between mb-6 border-b border-black/5 dark:border-white/5 pb-8">
          <h2 className="text-4xl md:text-7xl font-light text-black dark:text-white tracking-tighter">
            Mobile Apps
          </h2>
          <span className="text-xs uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">
            2 Published
          </span>
        </div>

        {/* Team context banner */}
        <div data-aos="fade-up" className="mb-12 flex items-center gap-4 px-6 py-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 w-fit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-xs text-black/50 dark:text-white/50 font-light tracking-wide">
            Built as a <span className="text-black dark:text-white font-medium">Full Stack Developer</span> at{" "}
            <span className="text-black dark:text-white font-medium">Memoa Corp</span> · USA (Remote) · 2025 – Present
          </span>
        </div>

        {/* ── App cards ── */}
        <div className="flex flex-col gap-8">

          {/* ── Card: Memoa Vault (first) ── */}
          <div
            data-aos="fade-up"
            className="group relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* Left */}
              <div className="flex flex-col items-start gap-8">
                {/* Icon + name */}
                <div className="flex items-center gap-6">
                  <div className="relative shrink-0">
                    <img
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/66/b9/88/66b988db-d3d3-17fa-1ae5-e6792a59df4a/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg"
                      alt="Memoa Vault icon"
                      className="w-24 h-24 md:w-28 md:h-28 rounded-[22%] shadow-2xl object-cover"
                    />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white dark:border-black" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-tight leading-none">Memoa Vault</h3>
                    <p className="mt-1.5 text-sm text-black/40 dark:text-white/40 font-light">Memoa Corp · Finance &amp; Lifestyle</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-black/30 dark:text-white/30">5.0</span>
                    </div>
                  </div>
                </div>

                {/* Store badges */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://apps.apple.com/in/app/memoa-vault/id6759069483" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-black dark:bg-white text-white dark:text-black hover:scale-[0.97] transition-all duration-300 shadow-lg">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest opacity-60 leading-none mb-0.5">Download on the</p>
                      <p className="text-sm font-semibold leading-none">App Store</p>
                    </div>
                  </a>
                  <a href="https://play.google.com/store/search?q=memoa+vault&c=apps" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[0.97] transition-all duration-300">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M3.18 23.76A2 2 0 0 1 2 22V2c0-.75.44-1.4 1.08-1.72l11.34 11.64L3.18 23.76z" fill="#4CAF50"/>
                      <path d="M20.12 10.45l-2.59-1.47L14.69 12l2.84 2.93 2.59-1.47a1.93 1.93 0 0 0 0-3.01z" fill="#FFD600"/>
                      <path d="M3.18.28 14.69 12 17.53 9.07 5.04.22A2.12 2.12 0 0 0 3.18.28z" fill="#FF3D00"/>
                      <path d="M3.18 23.72a2.12 2.12 0 0 0 1.86.06l12.49-8.85L14.69 12 3.18 23.72z" fill="#00B0FF"/>
                    </svg>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-black/50 dark:text-white/50 leading-none mb-0.5">Get it on</p>
                      <p className="text-sm font-semibold text-black dark:text-white leading-none">Google Play</p>
                    </div>
                  </a>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Auth0", "Apple ID Login", "In-App Purchases", "AI Image Scanning", "Encrypted Vault", "Broker–Client"].map((t) => (
                    <span key={t} className="px-3.5 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 mb-3 font-bold">About</p>
                  <p className="text-xl md:text-2xl font-light text-black/70 dark:text-white/70 leading-relaxed tracking-tight">
                    A <span className="text-black dark:text-white">private, encrypted vault</span> built to secure broker–client relationships — document high-value items, track AI-powered market valuations, and protect assets with end-to-end encryption.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 font-bold">Key Features</p>
                  {[
                    { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title: "Broker–Client Vault", desc: "Secure relationship management between brokers and clients to protect and document high-value items." },
                    { icon: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>, title: "AI Image Scanning", desc: "Snap a photo to instantly identify items and get AI-estimated real-time market valuations." },
                    { icon: <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>, title: "In-App Purchases", desc: "Premium tiers unlocking expanded vault capacity, priority AI scans, and advanced insurance reports." },
                    { icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>, title: "Auth0 & Apple ID Login", desc: "Frictionless Sign in with Apple and Auth0-backed authentication for maximum security." },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{f.icon}</svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black dark:text-white mb-0.5">{f.title}</p>
                        <p className="text-sm text-black/50 dark:text-white/50 font-light leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-2 border-t border-black/5 dark:border-white/5">
                  {[{ label: "Rating", value: "5.0 ★" }, { label: "Version", value: "1.2.8" }, { label: "Platform", value: "iOS & Android" }, { label: "Status", value: "Live" }].map((s) => (
                    <div key={s.label}>
                      <p className="text-[9px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-0.5">{s.label}</p>
                      <p className="text-sm font-medium text-black dark:text-white">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Card: Memoa (second) ── */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* Left */}
              <div className="flex flex-col items-start gap-8">
                {/* Icon + name */}
                <div className="flex items-center gap-6">
                  <div className="relative shrink-0">
                    <img
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a4/e7/6f/a4e76fdc-ada1-c124-b88a-632c883f531e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg"
                      alt="Memoa icon"
                      className="w-24 h-24 md:w-28 md:h-28 rounded-[22%] shadow-2xl object-cover"
                    />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white dark:border-black" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-tight leading-none">Memoa</h3>
                    <p className="mt-1.5 text-sm text-black/40 dark:text-white/40 font-light">Memoa Corp · Lifestyle</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[1,2,3,4].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <defs><linearGradient id="half1"><stop offset="50%" stopColor="currentColor"/><stop offset="50%" stopColor="transparent"/></linearGradient></defs>
                        <path fill="url(#half1)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="ml-1 text-xs text-black/30 dark:text-white/30">4.2 · 30 ratings</span>
                    </div>
                  </div>
                </div>

                {/* Store badges */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://apps.apple.com/in/app/memoa/id6743237503" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-black dark:bg-white text-white dark:text-black hover:scale-[0.97] transition-all duration-300 shadow-lg">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest opacity-60 leading-none mb-0.5">Download on the</p>
                      <p className="text-sm font-semibold leading-none">App Store</p>
                    </div>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.memoa.android.app" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[0.97] transition-all duration-300">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M3.18 23.76A2 2 0 0 1 2 22V2c0-.75.44-1.4 1.08-1.72l11.34 11.64L3.18 23.76z" fill="#4CAF50"/>
                      <path d="M20.12 10.45l-2.59-1.47L14.69 12l2.84 2.93 2.59-1.47a1.93 1.93 0 0 0 0-3.01z" fill="#FFD600"/>
                      <path d="M3.18.28 14.69 12 17.53 9.07 5.04.22A2.12 2.12 0 0 0 3.18.28z" fill="#FF3D00"/>
                      <path d="M3.18 23.72a2.12 2.12 0 0 0 1.86.06l12.49-8.85L14.69 12 3.18 23.72z" fill="#00B0FF"/>
                    </svg>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-black/50 dark:text-white/50 leading-none mb-0.5">Get it on</p>
                      <p className="text-sm font-semibold text-black dark:text-white leading-none">Google Play</p>
                    </div>
                  </a>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Next.js", "Node.js", "MongoDB", "Redux", "Community Feed", "Streaks", "40+ Countries"].map((t) => (
                    <span key={t} className="px-3.5 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60 font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 mb-3 font-bold">About</p>
                  <p className="text-xl md:text-2xl font-light text-black/70 dark:text-white/70 leading-relaxed tracking-tight">
                    A <span className="text-black dark:text-white">global collectibles community</span> platform — upload photos, document memories, track valuations, and connect with enthusiasts across <span className="text-black dark:text-white">40+ countries</span>.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 font-bold">My Contributions</p>
                  {[
                    { icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/>, title: "Streaks Mechanism", desc: "Architected the core interactive daily-streaks feature driving user retention." },
                    { icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>, title: "Scalable Components", desc: "Built reusable, performance-optimised component library used across the entire app." },
                    { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>, title: "State Management", desc: "Complex Redux state architecture for real-time feeds, vault sync, and user sessions." },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{f.icon}</svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black dark:text-white mb-0.5">{f.title}</p>
                        <p className="text-sm text-black/50 dark:text-white/50 font-light leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-2 border-t border-black/5 dark:border-white/5">
                  {[{ label: "Rating", value: "4.2 ★" }, { label: "Version", value: "1.5" }, { label: "Reach", value: "40+ Countries" }, { label: "Status", value: "Live" }].map((s) => (
                    <div key={s.label}>
                      <p className="text-[9px] uppercase tracking-widest text-black/30 dark:text-white/30 mb-0.5">{s.label}</p>
                      <p className="text-sm font-medium text-black dark:text-white">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

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

