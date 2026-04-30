import { Mail } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-50 animate-gradient"
        style={{
          backgroundImage: 'linear-gradient(120deg, var(--section-bg) 0%, var(--soft-pink) 50%, var(--main-bg) 100%)',
          backgroundSize: '200% 200%'
        }}
      ></div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 w-full max-w-5xl mx-auto" ref={revealRef}>

        <div className="text-center mb-16 reveal w-full flex justify-center">
          <h2 className="text-[15vw] leading-none font-serif font-black text-[var(--primary)] uppercase tracking-tighter whitespace-nowrap">
            Let's Talk <span className="text-[var(--highlight)] pulse-glow rounded-full inline-block text-[12vw]">✦</span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-[var(--primary)]/90 max-w-3xl mx-auto text-center font-sans font-light leading-relaxed mb-16 reveal" style={{ transitionDelay: '200ms' }}>
          I'm currently open for freelance projects and new opportunities. Reach out and let's create an unforgettable digital experience together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full reveal" style={{ transitionDelay: '300ms' }}>

          {/* Email Card */}
          <a href="mailto:Sneha.ag2610@gmail.com" className="group glass-card rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(222,149,150,0.25)] hover:border-[var(--highlight)] cursor-none">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-white transition-colors duration-500">
              <Mail size={28} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif font-bold text-[var(--primary)]">Email</h3>
              <p className="text-sm font-sans tracking-widest text-[var(--primary)]/70 uppercase mt-1 group-hover:text-[var(--highlight)] transition-colors">Sneha.ag2610@gmail.com</p>
            </div>
          </a>

          {/* Instagram Card */}
          <a href="https://www.instagram.com/snehha_ag26/" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(222,149,150,0.25)] hover:border-[var(--highlight)] cursor-none">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-white transition-colors duration-500">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif font-bold text-[var(--primary)]">Instagram</h3>
              <p className="text-sm font-sans tracking-widest text-[var(--primary)]/70 uppercase mt-1 group-hover:text-[var(--highlight)] transition-colors">@snehha_ag26</p>
            </div>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/snehaag26" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(222,149,150,0.25)] hover:border-[var(--highlight)] cursor-none">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-white transition-colors duration-500">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif font-bold text-[var(--primary)]">GitHub</h3>
              <p className="text-sm font-sans tracking-widest text-[var(--primary)]/70 uppercase mt-1 group-hover:text-[var(--highlight)] transition-colors">@snehaag26</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/snehaagrawal-93a489295" target="_blank" rel="noopener noreferrer" className="group glass-card rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(222,149,150,0.25)] hover:border-[var(--highlight)] cursor-none">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-white transition-colors duration-500">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif font-bold text-[var(--primary)]">LinkedIn</h3>
              <p className="text-sm font-sans tracking-widest text-[var(--primary)]/70 uppercase mt-1 group-hover:text-[var(--highlight)] transition-colors">Connect</p>
            </div>
          </a>

        </div>
      </div>

      <footer className="relative z-10 py-10 mt-12 text-center border-t border-[var(--primary)]/10 bg-white/10 backdrop-blur-sm">
        <p className="text-sm font-sans tracking-widest text-[var(--primary)]/60 uppercase">
          © {new Date().getFullYear()} Sneha Agrawal. Crafted with care.
        </p>
      </footer>
    </div>
  );
}