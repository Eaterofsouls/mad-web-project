import React, { useState, useEffect, useRef } from 'react';
import './EditorialHeader.css';

interface EditorialHeaderProps {
  label: string;
  body: string;
  theme?: 'light' | 'dark';
  topPadding?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*+%!?";

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  label,
  body,
  theme = 'dark',
  topPadding,
}) => {
  const [isStuck, setIsStuck] = useState(false);
  const [displayText, setDisplayText] = useState(label);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (headerRef.current) {
            // Using <= 1 to avoid subpixel rounding issues when sticking to top: 0
            const rect = headerRef.current.getBoundingClientRect();
            setIsStuck(rect.top <= 1);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed scramble effect per user request

  return (
    <div 
      ref={headerRef}
      className={`editorial-header editorial-header--${theme}${topPadding ? ' editorial-header--top-pad' : ''} ${isStuck ? 'is-stuck' : ''}`}
    >
      <div className="eh-row">
        <div className="eh-label">{label}</div>
        <div className="eh-body">
          <div className="eh-body-inner">{body}</div>
        </div>
      </div>
      <div className="eh-rule" />
    </div>
  );
};
