import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  { id: 1, title: 'Social Media Manager', category: 'Creative Direction', link: 'https://social-media-three-teal.vercel.app/work' },
  { id: 2, title: 'Wedding Hospitality', category: 'Web Development', link: 'https://wed-rosy.vercel.app/' },
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
          className="fixed pointer-events-none z-50 w-64 h-80 rounded-2xl overflow-hidden glass shadow-[0_20px_50px_rgba(173,135,131,0.3)] transition-transform duration-75"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -50%) scale(1)'
          }}
        >
          <div className="absolute inset-0 bg-[var(--soft-pink)] flex items-center justify-center">
            <span className="text-white font-serif italic text-2xl drop-shadow-md">
              {projects[hoveredProject].title.split(' ')[0]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}