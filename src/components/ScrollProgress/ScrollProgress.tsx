import { useState, useEffect, useRef } from 'react';
import './ScrollProgress.css';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const getViewportHeight = () =>
      window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    const update = () => {
      const vh = getViewportHeight();
      const total = document.documentElement.scrollHeight - vh;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    const handleViewportResize = () => {
      // Recalculate on iOS address-bar show/hide
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.visualViewport?.addEventListener('resize', handleViewportResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.visualViewport?.removeEventListener('resize', handleViewportResize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
