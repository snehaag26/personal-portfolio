import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a') || 
                          e.target.closest('button') || 
                          e.target.closest('.magnetic') || 
                          window.getComputedStyle(e.target).cursor === 'pointer';
                          
      if (isClickable) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const render = () => {
      // Smooth lerp animation for the cursor
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      
      requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full mix-blend-difference flex items-center justify-center transition-all duration-300 ease-out`}
      style={{ 
        width: isHovering ? '60px' : '20px',
        height: isHovering ? '60px' : '20px',
        backgroundColor: 'white',
        willChange: 'transform, width, height'
      }}
    >
      {/* Optional tiny text that appears on hover, common in luxury sites */}
      <span className={`text-black text-[10px] font-bold tracking-widest transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        {isHovering ? '' : ''}
      </span>
    </div>
  );
}
