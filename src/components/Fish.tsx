import React from 'react';

interface FishProps {
  direction: 'left' | 'right';
  speed: number;
  top: string;
  size: number;
  delay: number;
}

const Fish: React.FC<FishProps> = ({ direction, speed, top, size, delay }) => {
  const transform = direction === 'left' ? 'scaleX(-1)' : '';
  
  return (
    <div
      className="absolute fish"
      style={{
        top,
        transform,
        '--speed': `${speed}s`,
        '--delay': `${delay}s`,
        '--size': size,
      } as React.CSSProperties}
    >
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fish-svg"
      >
        <path
          d="M39.5 12C39.5 12 31.5 24 20 24C8.5 24 0.5 12 0.5 12C0.5 12 8.5 0 20 0C31.5 0 39.5 12 39.5 12Z"
          fill="#91F1FF"
          fillOpacity="0.6"
        />
        <circle cx="20" cy="12" r="4" fill="#6BE4FF" />
        <path
          d="M36 12L28 16V8L36 12Z"
          fill="#91F1FF"
          fillOpacity="0.8"
        />
      </svg>
    </div>
  );
};

export default Fish;