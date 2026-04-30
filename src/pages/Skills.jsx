import useScrollReveal from '../hooks/useScrollReveal';

const skillsList = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Figma', 'UI/UX', 'Canva', 'Git'
];

export default function Skills() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[var(--primary)] text-[var(--main-bg)]">
      <div className="w-full max-w-full" ref={revealRef}>

        {/* Marquee Container */}
        <div className="marquee-container w-full overflow-hidden reveal py-20 transform -rotate-3 transition-transform duration-700 hover:rotate-0 hover:scale-105" style={{ transitionDelay: '300ms' }}>
          <div className="animate-marquee flex items-center">
            {/* Render list multiple times for seamless looping */}
            {[...skillsList, ...skillsList, ...skillsList, ...skillsList].map((skill, idx) => (
              <div
                key={idx}
                className="px-8 whitespace-nowrap cursor-none transition-all duration-300 hover:scale-110"
              >
                <span className={`text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter ${idx % 2 === 0 ? 'text-[var(--main-bg)]' : 'text-stroke opacity-70'} hover:opacity-100 hover:text-[var(--highlight)] transition-colors duration-300`}>
                  {skill}
                  <span className="text-[var(--highlight)] ml-8">✦</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Since we changed the background color of this section, let's redefine the text stroke specifically for the dark background */}
      <style dangerouslySetInnerHTML={{
        __html: `
        #skills .text-stroke {
          -webkit-text-stroke: 2px var(--main-bg);
          color: transparent;
        }
        #skills .text-stroke:hover {
          color: var(--highlight);
          -webkit-text-stroke: 2px transparent;
        }
      `}} />
    </div>
  );
}
