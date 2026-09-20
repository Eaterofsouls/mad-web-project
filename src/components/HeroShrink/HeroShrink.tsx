import React, { useEffect } from 'react';
import './HeroShrink.css';

export function HeroShrink({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Use feature detection instead of UA sniffing:
    // If the browser supports animation-timeline (Chrome 115+), CSS handles it.
    // Firefox, older Safari, and other browsers need the JS fallback.
    const supportsTimeline = CSS.supports('animation-timeline', 'scroll()');
    if (supportsTimeline) return; // CSS scroll-driven animation handles it

    const innerEl = document.querySelector('.hero-shrink-inner') as HTMLElement;
    if (!innerEl) return;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
      const scale = 1 - (progress * 0.28); // 1 → 0.72
      const translateY = progress * -6; // 0 → -6vh
      innerEl.style.transform = `scale(${scale}) translateY(${translateY}vh)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Disable CSS animation for Safari
    innerEl.style.animation = 'none';
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-shrink-scroll-container">
      <div className="hero-shrink-root">
        <div className="hero-shrink-inner">
          {children}
        </div>
      </div>
      <div className="hero-shrink-spacer" aria-hidden="true" />
    </div>
  );
}
