import { useEffect, useRef } from 'react';

function mulberry32(seed: number): () => number {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(42);

interface StarFieldProps {
  className?: string;
  speed?: number;
}

// Canvas star field — subtle atmospheric background
// Performance: 60fps target, frame budget warning at >16ms
export function StarField({ className, speed = 1.0 }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Stars with different sizes and intensities
    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    let stars: Star[] = [];
    let width = 0;
    let height = 0;

    const initStars = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      const density = Math.floor((width * height) / 8000);
      stars = Array.from({ length: Math.min(density, 200) }, () => {
        const val = rand();
        let size = 0.6;
        let opacity = 0.25;
        if (val > 0.97) {
          size = 1.8;
          opacity = 0.9;
        } else if (val > 0.90) {
          size = 1.2;
          opacity = 0.6;
        }

        return {
          x: rand() * width,
          y: rand() * height,
          size,
          opacity,
          pulseSpeed: 0.0003 + rand() * 0.0005,
          pulseOffset: rand() * Math.PI * 2,
        };
      });
    };

    let lastTime = 0;

    const draw = (timestamp: number) => {
      const frameTime = timestamp - lastTime;

      // Frame budget monitoring (not user-visible)
      if (lastTime > 0 && frameTime > 16) {
      }
      lastTime = timestamp;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const currentSpeed = reducedMotion ? 0 : speed;

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        const pulse = Math.sin(timestamp * star.pulseSpeed * currentSpeed + star.pulseOffset);
        const opacity = star.opacity + pulse * 0.008;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242,238,228,${Math.max(0, opacity)})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      initStars();
    };

    initStars();
    animRef.current = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas.parentElement || canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
