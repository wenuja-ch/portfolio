import GalaxyBackground from './components/GalaxyBackground';
import TiltCard from './components/TiltCard';

export default function Portfolio() {
  const projects = [
    {
      title: "BrainX AI Learning App",
      desc: "AI-powered learning platform designed to help students learn smarter through intelligent assistance and interactive educational features.",
      tech: "AI • Flutter • Firebase • Machine Learning",
    },
    {
      title: "Smart Campus AI",
      desc: "Smart campus management system integrating AI features for automation, student support, and intelligent campus services.",
      tech: "Python • AI • Web Development • Database Systems",
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden backdrop-blur-xl">

      <GalaxyBackground />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">Wenuja</h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-green-400 transition">Home</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#skills" className="hover:text-green-400 transition">Skills</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-left order-2 md:order-1">
            <div className="inline-block px-4 py-2 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 animate-bounce">
              Computer Scientist
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Hi, I am <span className="text-green-400">Wenuja</span>
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
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
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
            <h2 className="text-4xl font-bold mb-8">
              About <span className="text-green-400">Me</span>
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

          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-green-400">Projects</span>
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

          <h2 className="text-4xl font-bold mb-16">
            Technical <span className="text-green-400">Skills</span>
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

          <h2 className="text-4xl font-bold mb-8">
            Contact <span className="text-green-400">Me</span>
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