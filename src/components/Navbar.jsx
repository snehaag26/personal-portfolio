import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Experience', path: '#experience' },
  { name: 'Contact', path: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active hash based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.path));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = '#home';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          current = '#' + section.id;
        }
      }
      setActiveHash(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3 glass-nav' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-3xl font-serif font-bold text-[var(--primary)] tracking-tight cursor-none"
          >
            SA
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`nav-link font-sans text-[var(--primary)] text-sm tracking-widest uppercase transition-colors hover:text-[var(--highlight)] cursor-none ${
                  activeHash === link.path ? 'active text-[var(--highlight)]' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="text-[var(--primary)] hover:text-[var(--highlight)] transition-all duration-500 cursor-none p-1 hover:rotate-12 active:scale-90"
              aria-label="Toggle theme"
            >
              <div className="transition-all duration-500 transform">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </div>
            </button>
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-4">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="text-[var(--primary)] hover:text-[var(--highlight)] transition-all duration-500 cursor-none p-1 active:rotate-180"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="text-[var(--primary)] hover:text-[var(--highlight)] transition-colors cursor-none z-[102]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[101] bg-[var(--main-bg)]/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-4xl text-[var(--primary)] transition-all duration-500 hover:text-[var(--highlight)] cursor-none ${
                activeHash === link.path ? 'text-[var(--highlight)] drop-shadow-[0_0_8px_rgba(222,149,150,0.5)]' : ''
              }`}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
