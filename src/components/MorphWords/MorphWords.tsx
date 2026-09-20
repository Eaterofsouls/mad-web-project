import React, { useEffect, useRef, useState } from 'react';
import './MorphWords.css';

const WORDS = ["SEE.", "BUILD.", "COMPOUND."];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*+%!?";

// ─── DESKTOP: Scroll-morphing version ────────────────────────────────────────
function MorphWordsDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(WORDS);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const startScroll = 0;
          // Extended: 2.5x viewport height so the morph is slow and deliberate
          const endScroll = window.innerHeight * 2.5;

          let p = 0;
          if (scrollY > startScroll) {
            p = (scrollY - startScroll) / (endScroll - startScroll);
          }
          p = Math.max(0, Math.min(1, p));

          if (containerRef.current) {
            containerRef.current.style.setProperty('--morph-progress', p.toString());
          }

          // Scramble logic — only mid-transition
          if (p > 0.05 && p < 0.95) {
            setDisplayText(WORDS.map(word => {
              let scrambled = '';
              for (let i = 0; i < word.length; i++) {
                if (Math.random() > (p * 1.5)) {
                  scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
                } else {
                  scrambled += word[i];
                }
              }
              return scrambled;
            }));
          } else {
            setDisplayText(WORDS);
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

const BOX_TEXT = [
  "Most businesses are blind to where AI creates value. We map every opportunity before any tool is selected.",
  "Every system we deploy is purpose-built for one operational reality. Not templated. Not generic.",
  "Integrated AI systems learn from each other. The tenth system is more intelligent than the first."
];

  return (
    <div className="morph-words-container" ref={containerRef}>
      <div className="morph-grid">
        {displayText.map((text, i) => (
          <div key={i} className={`morph-col morph-col-${i}`}>
            <div className="morph-sticky-zone">
              <span className="morph-text">{text}</span>
            </div>
            <div className="morph-wr-box">
              <p className="morph-wr-body">{BOX_TEXT[i]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MOBILE: Simple scroll-reveal stacked words ───────────────────────────────
function MorphWordsMobile() {
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mwm-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="morph-mobile-section">
      {WORDS.map((word, i) => (
        <div
          key={i}
          className="morph-mobile-word"
          ref={el => { refs.current[i] = el; }}
          style={{ transitionDelay: `${i * 0.08}s` }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

// ─── EXPORT: renders correct version per platform ────────────────────────────
export function MorphWords() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile ? <MorphWordsMobile /> : <MorphWordsDesktop />;
}
