import { useEffect, useRef, useState } from 'react';
import './ScrollSentence.css';

interface ScrollSentenceProps {
  phrases: string[];
  startTheme: 'dark' | 'light';
  endTheme: 'dark' | 'light';
}

export function ScrollSentence({ phrases, startTheme, endTheme }: ScrollSentenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrolledPastTop = -rect.top;
      const totalScrollable = rect.height - viewportHeight;
      
      if (totalScrollable <= 0) return;
      
      let p = scrolledPastTop / totalScrollable;
      p = Math.max(0, Math.min(1, p));
      
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const darkColor = 'var(--canvas, #0a0a0f)';
  const lightColor = 'var(--gallery, #faf9f7)';
  
  const startColor = startTheme === 'dark' ? darkColor : lightColor;
  const endColor = endTheme === 'dark' ? darkColor : lightColor;

  // Background smoothly interpolates
  const bgStyle = {
    backgroundColor: `color-mix(in srgb, ${endColor} ${progress * 100}%, ${startColor})`
  };

  const startTextColor = startTheme === 'dark' ? '#ffffff' : '#0f0f0d';
  const endTextColor = endTheme === 'dark' ? '#ffffff' : '#0f0f0d';
  
  // Text color swaps exactly at 50% to guarantee it never becomes muddy gray.
  // The word in the center (Word 3) will do a sharp, intentional "yin-yang" flip 
  // from white to black right at the apex of its visibility.
  const textStyle = {
    color: progress < 0.5 ? startTextColor : endTextColor
  };

  return (
    <div className="scroll-sentence-container" ref={containerRef} style={bgStyle}>
      <div className="scroll-sentence-sticky" style={textStyle}>
        <div className="scroll-sentence-words">
          {phrases.map((phrase, i) => {
            const chunk = 1 / phrases.length;
            const phraseStart = i * chunk;
            const phraseEnd = phraseStart + chunk;
            
            // Flashcard animation: word fades in softly, holds, then fades out slowly
            const localProgress = (progress - phraseStart) / (phraseEnd - phraseStart);
            
            let opacity = 0;
            let scale = 0.92;
            
            if (progress >= phraseStart && progress <= phraseEnd) {
              if (localProgress < 0.25) {
                // Fade in gently over first 25% of the chunk
                const t = localProgress / 0.25;
                opacity = t * t; // ease-in curve — starts slow, accelerates
                scale = 0.92 + (0.08 * t);
              } else if (localProgress < 0.7) {
                // Hold at full opacity for 45% of the chunk — words linger
                const t = (localProgress - 0.25) / 0.45;
                opacity = 1;
                scale = 1.0 + (0.03 * t); // subtle drift upward while held
              } else {
                // Fade out softly over last 30% of the chunk
                const t = (localProgress - 0.7) / 0.3;
                opacity = 1 - (t * t); // ease-in curve — holds then drops
                scale = 1.03 + (0.04 * t);
              }
            }

            return (
              <span 
                key={i} 
                className="scroll-sentence-word"
                style={{ 
                  opacity,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  visibility: opacity > 0 ? 'visible' : 'hidden'
                }}
              >
                {phrase}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
