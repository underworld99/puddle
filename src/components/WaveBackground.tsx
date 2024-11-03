import React from 'react';
import Fish from './Fish';

const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="wave-container absolute inset-0 overflow-hidden bg-gradient-to-b from-puddle via-puddle-light to-puddle-dark">
        {/* Animated fish */}
        <Fish direction="right" speed={15} top="20%" size={1.2} delay={0} />
        <Fish direction="left" speed={20} top="35%" size={0.8} delay={2} />
        <Fish direction="right" speed={25} top="55%" size={1} delay={4} />
        <Fish direction="left" speed={18} top="70%" size={1.5} delay={1} />
        <Fish direction="right" speed={22} top="85%" size={0.7} delay={3} />

        {/* Animated waves */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>

        {/* Additional bubble animations */}
        <div className="bubbles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                '--delay': `${i * 2}s`,
                '--size': `${Math.random() * 1 + 0.5}rem`,
                '--left': `${Math.random() * 100}%`,
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaveBackground;