import React from 'react';
import { Droplets, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-puddle-dark/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Droplets className="w-8 h-8 text-puddle-light" />
            <span className="text-2xl font-bold text-white">$PUDDLE</span>
          </div>
          <a
            href="https://twitter.com/PuddleCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-puddle-light transition-colors"
          >
            <Twitter className="w-6 h-6" />
            <span>Join the Splash</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;