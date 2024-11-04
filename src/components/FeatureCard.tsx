import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  glowIntensity?: 'normal' | 'high';
  special?: boolean;
  isLink?: 'true' | 'false';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  glowIntensity = 'normal',
  special = false,
  isLink = 'false'
}) => {
  const glowStyles = {
    normal: 'hover:border-[#91F1FF]/30',
    high: 'hover:border-[#91F1FF]/50 hover:shadow-[0_0_15px_rgba(145,241,255,0.3)]'
  };

  return (
    <div 
      className={`bg-puddle-light/5 backdrop-blur-md rounded-xl p-8 
        hover:transform hover:scale-105 transition-all duration-300 
        border border-[#91F1FF]/10 ${glowStyles[glowIntensity]}
        group relative overflow-hidden
        ${special ? 'hover:shadow-[0_0_25px_rgba(145,241,255,0.4)]' : ''}`}
    >
      {special && (
        <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#91F1FF]/10 
          rounded-full blur-xl group-hover:bg-[#91F1FF]/20 transition-all duration-500"></div>
      )}
      
      <h3 className="text-2xl font-bold text-[#91F1FF] mb-4 
        group-hover:text-[#91F1FF]/90 transition-colors relative z-10">
        {title}{isLink == 'true' && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>)}
      </h3>
      <p className="text-[#91F1FF]/80 text-lg leading-relaxed relative z-10">
        {description}
      </p>
      
      {special && (
        <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-[#91F1FF]/10 
          rounded-full blur-xl group-hover:bg-[#91F1FF]/20 transition-all duration-500"></div>
      )}
    </div>
  );
};

export default FeatureCard;