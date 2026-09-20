import { useEffect, useState, useRef } from 'react';
import { createScramble } from '../../utils/scramble';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
  onFadeStart?: () => void;
  isReady?: boolean;
}

export function LoadingScreen({ onComplete, onFadeStart, isReady = true }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState('');
  const [fading, setFading] = useState(false);
  const isReadyRef = useRef(isReady);
  
  useEffect(() => {
    isReadyRef.current = isReady;
  }, [isReady]);

  useEffect(() => {
    let scramble: any;
    let timeout: ReturnType<typeof setTimeout>;
    
    const runScramble = () => {
      scramble = createScramble('MAD', setDisplayText, 900);
      scramble.start();
      
      timeout = setTimeout(() => {
        if (isReadyRef.current) {
          if (onFadeStart) onFadeStart(); // Tell Home to start the video FIRST
          
          // Fix #6: Give the hardware video decoder enough time to render frame 1
          // before making the loading screen transparent. 500ms was too short on
          // low-end Android / cold iOS. 900ms covers the worst real devices.
          setTimeout(() => {
            setFading(true); // Start CSS fade out
            
            setTimeout(() => {
              onComplete(); // Remove loading screen entirely after 500ms fade
            }, 500); 
          }, 900);
          
        } else {
          runScramble();
        }
      }, 950);
    };

    runScramble();

    return () => {
      if (scramble) scramble.stop();
      clearTimeout(timeout);
    };
  }, [onComplete, onFadeStart]);

  return (
    <div className={`loading-screen ${fading ? 'fading' : ''}`} aria-hidden="true">
      <div className="scramble-word">{displayText}</div>
    </div>
  );
}
