import React from 'react';
import { Twitter } from 'lucide-react';
import WaveBackground from './components/WaveBackground';
import PuddleCharacter from './components/PuddleCharacter';
import StaticPuddle from './components/StaticPuddle';
import FeatureCard from './components/FeatureCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <WaveBackground />
      
      <div className="absolute top-4 right-4 z-50">
        <a
          href="https://x.com/puddleonhl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#91F1FF] hover:text-[#91F1FF]/80 transition-colors"
        >
          <Twitter className="w-9 h-9" />
        </a>
      </div>
      
      <main className="relative z-10 pt-24 px-4 container mx-auto pb-24">
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold text-[#91F1FF] mb-8">
            $PUDDLE
          </h1>
          <StaticPuddle />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24">
          <FeatureCard
            title="💧 Staking"
            description="Our objective is to become the first stakeable token on the Hyperliquid blockchain, Stake your PUDDLE to make it DOUBLE."
            glowIntensity="high"
          />
          <FeatureCard
            title="🎨 NFT Collection"
            description="A single puddle, when divided, transforms into countless smaller puddles—each unique in its own way. This concept embodies the essence of our NFT creation."
            glowIntensity="high"
          />
          <FeatureCard
            title="Puddle's Story"
            description="In the waves of Hyperliquid, a Puddle was born, lost in the trenches, destined to form a united community to bring the Puddle back home."
          />
          <FeatureCard
            title="🌊 Community Driven"
            description="As the community of HYPERLIQUID, it is our responsibility to bring the SACRED and HOLY liquid, PUDDLE, back to the ocean."
          />
          <FeatureCard
            title="🌏 Ocean Charity"
            description="Everyday a small amount will be donated to help clean the ocean and preserve marine life"
            glowIntensity="high"
            special
          />
          <FeatureCard
            title="🎮 Puddle Games"
            description="Enjoy exclusive Puddle games and earn PUDDLE tokens as rewards for top-performing players."
            glowIntensity="high"
            special
          />
          <FeatureCard
            title="🔥 Token Burn"
            description="Regular token burns to maintain scarcity and increase value for our community members."
            glowIntensity="high"
            special
          />
          <FeatureCard
            title="💎 Tokenomics"
            description="Carefully crafted tokenomics designed to ensure long-term sustainability and growth of the PUDDLE ecosystem."
            glowIntensity="high"
            special
          />
        </div>
      </main>
      
      <PuddleCharacter />
    </div>
  );
};

export default App;