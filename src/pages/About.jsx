import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex items-center">
      <div className="w-full" ref={revealRef}>
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] tracking-wide">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[var(--highlight)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column: Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center relative reveal" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl pulse-glow bg-[var(--section-bg)] overflow-hidden glass z-10 flex items-center justify-center">
              <span className="text-[var(--primary)] opacity-50 font-sans tracking-widest text-sm uppercase">
                [ Image Placeholder ]
              </span>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 z-20 animate-float bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgba(234,184,184,0.3)] border border-white">
              <p className="text-[var(--primary)] font-serif italic text-lg font-medium">
                Currently building <span className="text-[var(--highlight)] text-xl">✦</span>
              </p>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 reveal" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-3xl font-serif text-[var(--primary)] leading-snug">
              <span className="italic text-[var(--highlight)]">pixels, pink palettes & a lot of passion 🎀</span>
            </h3>

            <p className="text-lg text-[var(--primary)]/80 leading-relaxed font-sans font-light">
              I'm Sneha — a Frontend Developer and UI/UX Designer who finds magic in the space where design meets code. Based in Chhattisgarh, India, I'm studying Computer Science & AI at Newton School of Technology — learning how machines think, while teaching interfaces how to feel.
            </p>

            <p className="text-lg text-[var(--primary)]/80 leading-relaxed font-sans font-light">
              Off the screen, I'm someone who dances like nobody's watching, gets lost in music for hours, and finds the most clarity somewhere between a long journey and a window seat. Travel teaches me aesthetics. Music teaches me rhythm. Dance teaches me that movement — even in design — should always feel free.
            </p>

            <p className="text-lg text-[var(--primary)]/80 leading-relaxed font-sans font-light">
              Currently freelancing. Always creating. Open to collaborations that feel like something. 🌸
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
