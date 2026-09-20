import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(selector: string, options?: IntersectionObserverInit) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? '0';
            setTimeout(() => el.classList.add('is-visible'), parseInt(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, options]);

  return containerRef;
}
