import React, { useState, useEffect, useRef, useCallback } from 'react';
import './HeroCanvas.css';

/**
 * Two separate playlists — mobile (portrait-optimised) and desktop (landscape).
 * Clips 3 & 4 share the same file on both platforms.
 * Clip 1: new desktop + new mobile versions
 * Clip 2: existing desktop + new mobile version
 * Clip 3: same file for both
 * Clip 4: same file for both
 * Clip 5: new desktop + new mobile versions
 */
const VIDEOS_DESKTOP = [
  '/media/painting-01-desktop.mp4',
  '/media/painting-02-desktop.mp4',
  '/media/painting-03.mp4',
  '/media/painting-04.mp4',
  '/media/painting-05-desktop.mp4',
];

const VIDEOS_MOBILE = [
  '/media/painting-01-mobile.mp4',
  '/media/painting-02-mobile.mp4',
  '/media/painting-03-mobile.mp4',
  '/media/painting-04-mobile.mp4',
  '/media/painting-05-mobile.mp4',
];

// How many seconds to show each clip before cutting
const CLIP_DURATION_MS = 6000;
// Duration of the cinematic flash-to-black between clips
const TRANSITION_MS = 800;

interface HeroCanvasProps {
  onReady?: () => void;
  play?: boolean;
}

export function HeroCanvas({ onReady, play = true }: HeroCanvasProps = {}) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const VIDEOS = isMobile ? VIDEOS_MOBILE : VIDEOS_DESKTOP;

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  // We create two full sets of video refs — one for desktop, one for mobile.
  // Only the current platform's refs are used.
  const desktopRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const mobileRefs  = useRef<Array<HTMLVideoElement | null>>([]);

  const videoRefs = isMobile ? mobileRefs : desktopRefs;

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Advance to the next clip. After the last clip, loop back to the first.
   */
  const advance = useCallback(() => {
    // 1. Flash to black
    setTransitioning(true);

    setTimeout(() => {
      // 2. Switch video — loop back to 0 after last clip
      setPrevIndex(activeIndex);
      setActiveIndex(i => (i + 1) % VIDEOS.length);

      // 3. Dissolve in
      setTimeout(() => {
        setTransitioning(false);
      }, TRANSITION_MS / 2);
    }, TRANSITION_MS / 2);
  }, [activeIndex, VIDEOS.length]);

  // Play active video from the beginning, pause previous, schedule next advance
  useEffect(() => {
    const refs = videoRefs.current;
    const activeVid = refs[activeIndex];

    if (!play) {
      if (activeVid && activeIndex === 0) {
        // Pre-scrub to 0.001s — forces the decoder to render the first frame
        // while still paused so there's no black flash when play starts
        activeVid.currentTime = 0.001;
      }
      return; // Wait until play is true
    }

    if (activeVid) {
      // Reset to start for every clip except first on initial play
      if (activeIndex !== 0 || activeVid.currentTime > 0.1) {
        activeVid.currentTime = 0;
      }

      // requestVideoFrameCallback: guarantee first frame is on screen before continuing
      if ('requestVideoFrameCallback' in activeVid) {
        (activeVid as any).requestVideoFrameCallback(() => {});
      }

      activeVid.play().catch(() => null);
    }

    // Pause & reset previous
    if (prevIndex !== null) {
      const prevVid = refs[prevIndex];
      if (prevVid) {
        prevVid.pause();
        prevVid.currentTime = 0;
      }
    }

    // Always schedule next clip — looping is handled inside advance()
    timerRef.current = setTimeout(advance, CLIP_DURATION_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, isMobile, play, advance]);

  // Fix #4: Only start loading non-active videos AFTER a short delay so
  // clip 0 gets full bandwidth priority on cold load.
  useEffect(() => {
    const delay = setTimeout(() => {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== 0) v.load();
      });
    }, 3000); // give clip 0 a 3-second head-start
    return () => clearTimeout(delay);
  }, [isMobile]);

  const handleVideoError = () => setErrorCount(c => c + 1);
  const hasAllFailed = errorCount >= VIDEOS.length;
  const posterSrc = isMobile ? '/media/hero-poster-mobile.jpg' : '/media/hero-poster.jpg';

  return (
    <div
      className={`hero-canvas-root ${hasAllFailed ? 'hero-canvas-fallback' : ''} ${transitioning ? 'hero-canvas-transitioning' : ''}`}
      style={hasAllFailed ? { backgroundImage: `url(${posterSrc})` } : undefined}
    >
      {/* Desktop video layer — hidden on mobile via CSS */}
      <div className="hero-video-layer hero-video-layer--desktop">
        {VIDEOS_DESKTOP.map((src, i) => (
          <video
            key={`d-${src}`}
            ref={el => { desktopRefs.current[i] = el; }}
            src={src}
            className={`hero-video ${i === activeIndex ? 'active' : ''} ${i === prevIndex ? 'prev' : ''}`}
            muted
            playsInline
            // Fix #4: only clip 0 loads eagerly — rest wait for the 3s delayed load()
            preload={i === 0 ? 'auto' : 'none'}
            // Fix #3: poster shows the first frame instantly from cache/CDN
            // while the video buffers — kills the black flash entirely
            poster={i === 0 ? '/media/painting-01-still.jpg' : undefined}
            onError={handleVideoError}
            // Fix #3: onCanPlay fires earlier than onLoadedData — as soon as
            // the browser has enough data to start playing (first frame decoded)
            onCanPlay={() => { if (i === 0 && onReady) onReady(); }}
          />
        ))}
      </div>

      {/* Mobile video layer — hidden on desktop via CSS */}
      <div className="hero-video-layer hero-video-layer--mobile">
        {VIDEOS_MOBILE.map((src, i) => (
          <video
            key={`m-${src}`}
            ref={el => { mobileRefs.current[i] = el; }}
            src={src}
            className={`hero-video ${i === activeIndex ? 'active' : ''} ${i === prevIndex ? 'prev' : ''}`}
            muted
            playsInline
            // Fix #4: same bandwidth-priority strategy for mobile
            preload={i === 0 ? 'auto' : 'none'}
            // Fix #3: mobile poster — shows instantly before video buffers
            poster={i === 0 ? '/media/hero-poster-mobile.jpg' : undefined}
            onError={handleVideoError}
            onCanPlay={() => { if (i === 0 && onReady) onReady(); }}
          />
        ))}
      </div>

      <div className="hero-overlay" />
      {/* Cinematic flash curtain */}
      <div className="hero-transition-curtain" />
    </div>
  );
}
