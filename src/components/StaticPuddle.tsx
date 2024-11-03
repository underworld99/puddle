import React from 'react';

const StaticPuddle: React.FC = () => {
  return (
    <div className="w-64 h-48 mx-auto relative group">
      {/* Main puddle container */}
      <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full relative">
          {/* Main puddle body */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[#91F1FF] shadow-lg"
            style={{
              borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%',
              border: '2px solid #6BE4FF'
            }}
          >
            {/* Darker bottom layer */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-8 bg-[#6BE4FF]/50"
              style={{
                borderRadius: '45% 55% 50% 50% / 0% 0% 100% 100%'
              }}
            ></div>

            {/* Shine effects */}
            <div className="absolute top-4 left-8 w-12 h-4 bg-white/70"
              style={{
                borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%'
              }}
            ></div>
            <div className="absolute top-8 left-12 w-6 h-2 bg-white/50"
              style={{
                borderRadius: '45% 55% 50% 50% / 60% 40% 60% 40%'
              }}
            ></div>
          </div>

          {/* Small bubbles */}
          <div className="absolute top-4 right-8 w-8 h-8 bg-[#91F1FF] rounded-full border-2 border-[#6BE4FF]">
            <div className="absolute top-1 left-2 w-2 h-1 bg-white/70 rounded-full"></div>
          </div>
          <div className="absolute top-2 right-2 w-4 h-4 bg-[#91F1FF] rounded-full border-2 border-[#6BE4FF]">
            <div className="absolute top-0.5 left-1 w-1 h-0.5 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPuddle;