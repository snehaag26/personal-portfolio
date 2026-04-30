import { useRef, useState } from 'react';

export default function ProjectCard({ title, category, delay }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const rotateX = ((y / height) - 0.5) * -15; // max 15deg
    const rotateY = ((x / width) - 0.5) * 15; // max 15deg

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-10px)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  return (
    <div 
      className="reveal w-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card relative h-80 rounded-3xl p-8 flex flex-col justify-end group overflow-hidden border border-transparent transition-colors duration-500 hover:border-[var(--highlight)] cursor-none"
        style={style}
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--highlight)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Placeholder Image background */}
        <div className="absolute inset-0 bg-[var(--section-bg)] opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-[var(--primary)] opacity-30 font-sans tracking-widest text-xs uppercase">Preview</span>
        </div>

        <div className="z-10 relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-sm font-sans tracking-widest text-[var(--highlight)] mb-2 uppercase">{category}</p>
          <h3 className="text-3xl font-serif text-[var(--primary)] mb-4">{title}</h3>
          
          <div className="flex items-center text-[var(--primary)] font-medium font-sans opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            View Project <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
