import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullName = 'SNEHA';
  const lastName = 'AGRAWAL';
  const revealRef = useScrollReveal();

  useEffect(() => {
    let currentLength = 0;
    const fullString = fullName + ' ' + lastName;
    const intervalId = setInterval(() => {
      setTypedText(fullString.substring(0, currentLength));
      currentLength++;
      if (currentLength > fullString.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      <div className="z-10" ref={revealRef}>
        
        {/* Massive Typography Name */}
        <div className="flex flex-col reveal leading-[0.8] mb-8">
          <h1 className="text-[18vw] font-serif font-black text-[var(--primary)] tracking-tighter uppercase ml-[-1vw]">
            {fullName}
          </h1>
          <h1 className="text-[18vw] font-serif font-black text-stroke tracking-tighter uppercase self-end mr-[-1vw]">
            {lastName}
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 reveal" style={{ transitionDelay: '300ms' }}>
          <p className="text-xl md:text-3xl text-[var(--primary)] max-w-md font-sans font-light tracking-wide leading-relaxed">
            Frontend Developer & <br />
            <span className="text-[var(--highlight)] italic font-serif text-3xl md:text-4xl">UI/UX Designer</span>
          </p>
          
          <div className="flex gap-6 magnetic">
            <a 
              href="#projects"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[var(--primary)] flex items-center justify-center text-[var(--primary)] uppercase tracking-widest text-xs font-bold transition-all duration-500 hover:bg-[var(--primary)] hover:text-white cursor-none animate-[spin_10s_linear_infinite] hover:animate-none group"
            >
              <span className="group-hover:scale-110 transition-transform">Explore</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Absolute Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-[var(--highlight)] rounded-full mix-blend-multiply opacity-50 pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>
    </div>
  );
}
