import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  { id: 1, title: 'Social Media Manager', category: 'Creative Direction', link: 'https://social-media-three-teal.vercel.app', image: '/images/Social-Media.png' },
  { id: 2, title: 'Wedding Hospitality', category: 'Web Development', link: 'https://wed-rosy.vercel.app/', image: '/images/Wedding.png' },
];

export default function Projects() {
  const revealRef = useScrollReveal();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (hoveredProject !== null) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredProject]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div ref={revealRef}>

        <div className="flex justify-between items-end border-b border-[var(--primary)] pb-6 mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--primary)] uppercase tracking-tight">
            Selected Works
          </h2>
          <span className="text-[var(--highlight)] font-sans tracking-widest text-sm uppercase">2023 — 2026</span>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => window.open(project.link, '_blank')}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group border-b border-[var(--primary)]/20 py-10 md:py-16 flex justify-between items-center cursor-none transition-colors duration-500 hover:bg-[var(--primary)]/5 reveal magnetic"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-4xl md:text-7xl font-serif text-stroke-hover transition-all duration-500 transform group-hover:translate-x-6">
                {project.title}
              </h3>
              <p className="hidden md:block text-lg font-sans text-[var(--primary)]/70 uppercase tracking-widest group-hover:text-[var(--highlight)] transition-colors duration-300">
                {project.category}
              </p>
            </div>
          ))}
        </div>

      </div>

      {hoveredProject !== null && (
        <div
          className="fixed pointer-events-none z-50 w-72 h-[450px] rounded-3xl overflow-hidden glass shadow-[0_30px_60px_rgba(173,135,131,0.4)] transition-all duration-300 ease-out"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${hoveredProject !== null ? 1 : 0.8})`,
            opacity: hoveredProject !== null ? 1 : 0
          }}
        >
          <img 
            src={projects[hoveredProject].image} 
            alt={projects[hoveredProject].title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white/70 text-xs font-sans tracking-widest uppercase mb-1">
              {projects[hoveredProject].category}
            </p>
            <h4 className="text-white text-xl font-serif">
              {projects[hoveredProject].title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}