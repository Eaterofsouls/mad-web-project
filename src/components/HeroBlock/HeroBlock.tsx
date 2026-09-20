import React from 'react';
import { HeroShrink } from '../HeroShrink/HeroShrink';
import { HeroCanvas } from '../HeroCanvas/HeroCanvas';
import './HeroBlock.css';

interface HeroBlockProps {
  onVideoReady?: () => void;
  play?: boolean;
}

export function HeroBlock({ onVideoReady, play = true }: HeroBlockProps) {
  return (
    <HeroShrink>
      <section className="hero-block">
        <HeroCanvas onReady={onVideoReady} play={play} />
        <div className="hero-declaration-words">
          <span>SEE.</span>
          <span>BUILD.</span>
          <span>COMPOUND.</span>
        </div>
      </section>
    </HeroShrink>
  );
}

export default HeroBlock;
