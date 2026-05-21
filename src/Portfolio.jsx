import { useState, useEffect, useRef } from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import TiltCard from './components/TiltCard';

const ScrollTypewriter = ({ text1, text2 = "", delay = 100 }) => {
  const [currentText1, setCurrentText1] = useState("");
  const [currentText2, setCurrentText2] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (currentText1.length < text1.length) {
      const timeout = setTimeout(() => {
        setCurrentText1(text1.slice(0, currentText1.length + 1));
      }, delay);
      return () => clearTimeout(timeout);
    } else if (text2 && currentText2.length < text2.length) {
      const timeout = setTimeout(() => {
        setCurrentText2(text2.slice(0, currentText2.length + 1));
      }, delay + 50);
      return () => clearTimeout(timeout);
    }
  }, [currentText1, currentText2, isVisible, text1, text2, delay]);

  const isTypingCompleted = currentText1.length === text1.length && (!text2 || currentText2.length === text2.length);

  return (
    <span ref={containerRef}>
      {currentText1}
      {text2 && <span className="text-green-400">{currentText2}</span>}
      {!isTypingCompleted && (
        <span className="animate-[pulse_1s_ease-in-out_infinite] border-r-4 border-green-400 ml-1"></span>
      )}
    </span>
  );
};

export default function Portfolio() {
  const projects = [
    {
      title: "BrainX AI Learning App",
      desc: "AI-powered learning platform designed to help students learn smarter through intelligent assistance and interactive educational features.",
      tech: "AI • Flutter • Firebase • Machine Learning",
    },
    {
      title: "Smart Campus API",
      desc: "Developed a Smart Campus REST API using Java and JAX-RS (Jersey) to manage rooms, sensors, and sensor readings within a smart campus environment. Implemented RESTful endpoints, JSON data handling, and backend services with Maven and Grizzly HTTP Server for efficient API communication and testing using Postman.",
      tech: "Java 17 • JAX-RS (Jersey) • Maven • Grizzly HTTP Server • JSON • Postman",
    },
    {
      title: "Future AI Innovation",
      desc: "A next-generation AI-powered platform currently under development with advanced intelligent automation and futuristic digital experiences.",
      tech: "Coming Soon • AI • Innovation",
    },
    {
      title: "Printing Shop POS System",
      desc: "Advanced printing shop POS system with invoice generation, sales tracking, and printing service management.",
      tech: "Flutter • Firebase • POS System",
    },
    {
      title: "Animated Portfolio Project",
      desc: "A highly interactive, 3D animated web portfolio featuring dynamic neural network backgrounds, premium glassmorphism UI, and 3D tilt hover effects.",
      tech: "React • Tailwind CSS • Canvas UI",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Flutter",
    "Firebase",
    "Machine Learning",
    "MySQL",
  ];

  return (
    <div className="relative z-0 min-h-screen bg-black text-white overflow-x-hidden">

      <GalaxyBackground />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
        <nav className="w-full backdrop-blur-[80px] backdrop-saturate-[180%] backdrop-contrast-[110%] backdrop-brightness-[110%] bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,0.05)] rounded-full px-8 py-4 flex justify-between items-center transition-all duration-500 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(74,222,128,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <h1 className="text-2xl font-bold text-green-400">Wenuja</h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-green-400 transition">Home</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#skills" className="hover:text-green-400 transition">Skills</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-left order-2 md:order-1">
            <div className="inline-block px-4 py-2 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 animate-bounce">
              Computer Scientist
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 h-[120px] md:h-[160px] flex items-center">
              <div><ScrollTypewriter text1="Hi, I am " text2="Wenuja" /></div>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg">
              Passionate about Artificial Intelligence, Smart Systems, Modern Web Applications, and Software Development Projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-300 text-black shadow-lg shadow-green-500/40 font-semibold transition transform hover:scale-105"
              >
                View Projects
              </a>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-green-400 hover:text-green-400 transition">
                Download CV
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 lg:translate-x-12 xl:translate-x-24">
            <div className="relative w-72 h-72 md:w-96 md:h-96 xl:w-[26rem] xl:h-[26rem] group">
              {/* Decorative Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-emerald-300 rounded-[3rem] rotate-6 opacity-20 group-hover:rotate-12 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-green-500 to-emerald-300 rounded-[3rem] -rotate-6 opacity-20 group-hover:-rotate-12 group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Photo Frame */}
              <div className="relative h-full w-full bg-black/50 backdrop-blur-md border border-white/20 rounded-[3rem] overflow-hidden shadow-[0_0_40px_rgba(74,222,128,0.2)] group-hover:border-green-400/50 group-hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all duration-500 z-10 flex items-center justify-center">
                <img 
                  src="/avatar.png" 
                  alt="Wenuja - Profile" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-8 h-[40px] flex items-center">
              <div><ScrollTypewriter text1="About " text2="Me" delay={75} /></div>
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              I am a Computer Scientist focused on building intelligent systems, AI-powered applications, and modern software solutions.
              I enjoy creating innovative technology projects that solve real-world problems using Artificial Intelligence, web technologies, and software engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 transition hover:-translate-y-2 duration-300">
              <h3 className="text-4xl font-bold text-green-400 mb-2">15+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 transition hover:-translate-y-2 duration-300">
              <h3 className="text-4xl font-bold text-green-400 mb-2">8+</h3>
              <p className="text-gray-400">Technologies Used</p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 transition hover:-translate-y-2 duration-300">
              <h3 className="text-4xl font-bold text-green-400 mb-2">2+</h3>
              <p className="text-gray-400">Years Learning</p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 transition hover:-translate-y-2 duration-300">
              <h3 className="text-4xl font-bold text-green-400 mb-2">100%</h3>
              <p className="text-gray-400">Passion Driven</p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16 h-[40px] flex items-center justify-center">
            <div><ScrollTypewriter text1="Featured " text2="Projects" delay={75} /></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <TiltCard
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-white/10 to-black/10 backdrop-blur-3xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_12px_40px_rgba(0,0,0,0.6)] hover:border-green-400 hover:shadow-green-500/20 transition-colors duration-500 h-full flex flex-col"
              >
                <div className="h-52 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-40 group-hover:scale-110 transition duration-500" style={{ transform: 'translateZ(40px)' }}>
                    💻
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition" style={{ transform: 'translateZ(20px)' }}>
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5 flex-grow" style={{ transform: 'translateZ(10px)' }}>
                  {project.desc}
                </p>

                <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-300 text-sm border border-green-500/20 self-start" style={{ transform: 'translateZ(20px)' }}>
                  {project.tech}
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16 h-[40px] flex items-center justify-center">
            <div><ScrollTypewriter text1="Technical " text2="Skills" delay={75} /></div>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)] hover:border-green-400 hover:shadow-green-500/20 transition hover:scale-110 duration-300"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8 h-[40px] flex items-center justify-center">
            <div><ScrollTypewriter text1="Contact " text2="Me" delay={75} /></div>
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Interested in working together or discussing projects? Feel free to connect with me.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 hover:shadow-green-500/20 transition">
              <h3 className="text-green-400 text-xl font-semibold mb-3">Email</h3>
              <p className="text-gray-400">lapmy2006@gmail.com</p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 hover:shadow-green-500/20 transition">
              <h3 className="text-green-400 text-xl font-semibold mb-3">GitHub</h3>
              <p className="text-gray-400">github.com</p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)] hover:border-green-400 hover:shadow-green-500/20 transition">
              <h3 className="text-green-400 text-xl font-semibold mb-3">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com</p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10 text-gray-500">
        © 2026 Wenuja Portfolio. All Rights Reserved.
      </footer>

    </div>
  );
}