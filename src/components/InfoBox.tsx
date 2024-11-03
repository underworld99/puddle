import React from 'react';

interface InfoBoxProps {
  text: string;
  glowColor: string;
  small?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text, glowColor, small }) => {
  return (
    <div
      className={`relative group cursor-pointer ${small ? 'w-24' : 'w-64'}`}
      style={{
        filter: `drop-shadow(0 0 10px ${glowColor})`,
      }}
    >
      <div className="absolute inset-0 bg-[#91F1FF]/10 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
      <div
        className={`relative bg-gradient-to-r from-[#91F1FF]/20 to-[#91F1FF]/10 
          backdrop-blur-sm border border-[#91F1FF]/30 rounded-lg 
          ${small ? 'px-4 py-2' : 'px-6 py-3'}`}
      >
        <p
          className={`text-[#91F1FF] font-semibold text-center
            ${small ? 'text-lg' : 'text-xl'}`}
        >
          {text}
        </p>
        
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-lg border border-[#91F1FF]/20 
          animate-pulse group-hover:border-[#91F1FF]/40 transition-colors"></div>
      </div>
    </div>
  );
};

export default InfoBox;