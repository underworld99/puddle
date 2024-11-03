import React, { useState, useEffect } from 'react';

const PuddleCharacter: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX - 100, y: clientY - 100 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className={`puddle-character transition-transform duration-300 ${
        isAnimating ? 'animate-bounce' : ''
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onClick={handleClick}
    >
      <div className="w-48 h-36 relative group">
        {/* Shiny hover effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -inset-4 bg-[#91F1FF]/20 blur-xl rounded-full animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-radial from-[#91F1FF]/30 to-transparent animate-ping"></div>
        </div>

        {/* Sparkles */}
        <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Main puddle body */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#91F1FF] shadow-lg group-hover:shadow-[#91F1FF]/50 transition-shadow duration-300"
          style={{
            borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%',
            border: '2px solid #6BE4FF'
          }}
        >
          {/* Darker bottom layer */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-6 bg-[#6BE4FF]/50"
            style={{
              borderRadius: '45% 55% 50% 50% / 0% 0% 100% 100%'
            }}
          ></div>

          {/* Shine effects */}
          <div className="absolute top-3 left-6 w-8 h-3 bg-white/70 group-hover:bg-white/90 transition-colors duration-300"
            style={{
              borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%'
            }}
          ></div>
          <div className="absolute top-6 left-8 w-4 h-1.5 bg-white/50 group-hover:bg-white/70 transition-colors duration-300"
            style={{
              borderRadius: '45% 55% 50% 50% / 60% 40% 60% 40%'
            }}
          ></div>
        </div>

        {/* Small bubbles */}
        <div className="absolute top-3 right-6 w-6 h-6 bg-[#91F1FF] rounded-full border-2 border-[#6BE4FF] group-hover:scale-110 transition-transform duration-300">
          <div className="absolute top-1 left-1.5 w-1.5 h-1 bg-white/70 rounded-full"></div>
        </div>
        <div className="absolute top-1 right-2 w-3 h-3 bg-[#91F1FF] rounded-full border-2 border-[#6BE4FF] group-hover:scale-110 transition-transform duration-300">
          <div className="absolute top-0.5 left-0.5 w-1 h-0.5 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PuddleCharacter;