import { useTheme } from '../context/ThemeContext';

export default function BackgroundBlobs() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blob 1 */}
      <div 
        className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full filter blur-[120px] transition-all duration-1000 ${
          isDark ? 'opacity-20 mix-blend-screen' : 'opacity-60 mix-blend-multiply'
        } animate-float`}
        style={{ backgroundColor: 'var(--soft-pink)' }}
      />
      {/* Blob 2 */}
      <div 
        className={`absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full filter blur-[100px] transition-all duration-1000 ${
          isDark ? 'opacity-20 mix-blend-screen' : 'opacity-50 mix-blend-multiply'
        } animate-float-delayed`}
        style={{ backgroundColor: 'var(--highlight)' }}
      />
      {/* Blob 3 */}
      <div 
        className={`absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full filter blur-[100px] transition-all duration-1000 ${
          isDark ? 'opacity-15 mix-blend-screen' : 'opacity-40 mix-blend-multiply'
        } animate-float`}
        style={{ backgroundColor: 'var(--primary)' }}
      />
    </div>
  );
}
