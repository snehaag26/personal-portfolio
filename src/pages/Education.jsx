import useScrollReveal from '../hooks/useScrollReveal';

export default function Education() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center">
      <div ref={revealRef}>

        <h2 className="text-[12vw] leading-none font-serif font-black text-stroke text-center mb-20 reveal uppercase tracking-tighter">
          Education
        </h2>

        <div className="relative pl-8 md:pl-0 mt-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--primary)]/20 -translate-x-1/2"></div>
          {/* Animated Line that draws down on reveal */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--highlight)] -translate-x-1/2 transform scale-y-0 origin-top transition-transform duration-[1500ms] ease-out reveal-line"></div>

          <style dangerouslySetInnerHTML={{
            __html: `
            .active .reveal-line {
              transform: scaleY(1);
            }
          `}} />

          {/* Timeline Entry 1 - Education 1 */}
          <div className="relative mb-24 md:mb-32 flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal group" style={{ transitionDelay: '200ms' }}>
            <div className="absolute left-[-29px] md:left-1/2 w-6 h-6 rounded-full bg-[var(--main-bg)] border-4 border-[var(--highlight)] -translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--primary)]"></div>

            <div className="md:w-5/12 mb-6 md:mb-0 text-left md:text-right md:pr-16 transition-transform duration-500 group-hover:-translate-x-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-2">B.Tech 1st Year</h3>
              <p className="font-sans text-sm tracking-widest text-[var(--highlight)] uppercase font-bold">Currently Pursuing</p>
            </div>

            <div className="md:w-5/12 md:pl-16">
              <div className="p-8 glass-card rounded-[2rem] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:shadow-[0_20px_50px_rgba(173,135,131,0.2)]">
                <h4 className="text-2xl font-serif text-[var(--primary)] mb-2">Newton School of Technology</h4>
                <p className="text-[var(--primary)]/80 font-light font-sans text-lg leading-relaxed">
                  (Rishihood University)
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Entry 2 - Education 2 */}
          <div className="relative mb-24 md:mb-32 flex flex-col md:flex-row-reverse items-start md:items-center justify-between w-full reveal group" style={{ transitionDelay: '400ms' }}>
            <div className="absolute left-[-29px] md:left-1/2 w-6 h-6 rounded-full bg-[var(--main-bg)] border-4 border-[var(--highlight)] -translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--primary)]"></div>

            <div className="md:w-5/12 mb-6 md:mb-0 text-left md:pl-16 transition-transform duration-500 group-hover:translate-x-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-2">Class 12</h3>
              <p className="font-sans text-sm tracking-widest text-[var(--highlight)] uppercase font-bold">CBSE</p>
            </div>

            <div className="md:w-5/12 md:pr-16 text-left md:text-right">
              <div className="p-8 glass-card rounded-[2rem] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:shadow-[0_20px_50px_rgba(173,135,131,0.2)]">
                <h4 className="text-2xl font-serif text-[var(--primary)] mb-2">Academic World School</h4>
                <p className="text-[var(--primary)]/80 font-light font-sans text-lg leading-relaxed">
                  Completed senior secondary education.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Entry 3 - Education 3 */}
          <div className="relative mb-16 flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal group" style={{ transitionDelay: '600ms' }}>
            <div className="absolute left-[-29px] md:left-1/2 w-6 h-6 rounded-full bg-[var(--main-bg)] border-4 border-[var(--highlight)] -translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--primary)]"></div>

            <div className="md:w-5/12 mb-6 md:mb-0 text-left md:text-right md:pr-16 transition-transform duration-500 group-hover:-translate-x-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-2">Class 10</h3>
              <p className="font-sans text-sm tracking-widest text-[var(--highlight)] uppercase font-bold">2023 • ICSE</p>
            </div>

            <div className="md:w-5/12 md:pl-16">
              <div className="p-8 glass-card rounded-[2rem] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:shadow-[0_20px_50px_rgba(173,135,131,0.2)]">
                <h4 className="text-2xl font-serif text-[var(--primary)] mb-2">Carmel Public School</h4>
                <p className="text-[var(--primary)]/80 font-light font-sans text-lg leading-relaxed">
                  Completed secondary education.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
