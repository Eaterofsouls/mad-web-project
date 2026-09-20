import { useEffect, useRef, useState } from 'react';
import './ClosingCTA.css';

export function ClosingCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section-root">
      <div className={`cta-root ${isVisible ? 'visible' : ''}`} ref={ctaRef}>
        <span className="cta-label">START HERE</span>
        <h2 className="cta-headline">
          Tell us how your business works.<br/>
          We'll tell you where AI fits.
        </h2>
        <p className="cta-body">
          A structured assessment of your operations — your data flows, your
          decision points, your friction. We identify the AI systems that
          create the most immediate and lasting impact. Then we build them.
        </p>
        <a href="/contact" className="cta-primary-btn">
          Begin the Assessment →
        </a>
        <p className="cta-footnote">
          We respond on WhatsApp · No sales calls · No waiting rooms
        </p>
      </div>
    </section>
  );
}
