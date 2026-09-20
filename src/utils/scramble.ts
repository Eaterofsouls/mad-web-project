// MAD — Text Scramble Utility
// MASTER SOURCE: MAD_MASTER_CONSOLIDATION.md Part 5
// SACRED: 30fps scramble (not 60fps). Mechanical quality vs smooth animation.

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789█▓░·';
const SCRAMBLE_FPS = 30;
const SCRAMBLE_FRAME_MS = 1000 / SCRAMBLE_FPS; // ~33ms

type ScrambleCallback = (text: string) => void;

export interface ScrambleController {
  start: () => void;
  stop: () => void;
  resolve: () => void;
}

/**
 * Creates a text scramble effect at exactly 30fps.
 * Characters reveal left-to-right over the duration.
 *
 * @param targetText - Final text to reveal
 * @param onUpdate - Callback called with each scramble frame
 * @param durationMs - Total scramble duration in milliseconds
 */
export function createScramble(
  targetText: string,
  onUpdate: ScrambleCallback,
  durationMs: number = 1200
): ScrambleController {
  let animationId: ReturnType<typeof setTimeout> | null = null;
  let frame = 0;
  let isRunning = false;
  let lastFrameTime = 0;

  const totalFrames = Math.ceil(durationMs / SCRAMBLE_FRAME_MS);
  const revealPerFrame = targetText.length / totalFrames;

  const getScrambledChar = () => {
    return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
  };

  const tick = (timestamp: number) => {
    if (!isRunning) return;

    if (timestamp - lastFrameTime < SCRAMBLE_FRAME_MS) {
      animationId = requestAnimationFrame(tick) as unknown as ReturnType<typeof setTimeout>;
      return;
    }

    lastFrameTime = timestamp;
    frame++;

    const revealedCount = Math.floor(frame * revealPerFrame);
    let displayText = '';

    for (let i = 0; i < targetText.length; i++) {
      if (targetText[i] === ' ') {
        displayText += ' ';
      } else if (i < revealedCount) {
        displayText += targetText[i];
      } else {
        displayText += getScrambledChar();
      }
    }

    onUpdate(displayText);

    if (frame >= totalFrames) {
      onUpdate(targetText);
      isRunning = false;
      return;
    }

    animationId = requestAnimationFrame(tick) as unknown as ReturnType<typeof setTimeout>;
  };

  return {
    start: () => {
      if (isRunning) return;
      isRunning = true;
      frame = 0;
      lastFrameTime = 0;
      animationId = requestAnimationFrame(tick) as unknown as ReturnType<typeof setTimeout>;
    },
    stop: () => {
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId as unknown as number);
        animationId = null;
      }
    },
    resolve: () => {
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId as unknown as number);
        animationId = null;
      }
      onUpdate(targetText);
    },
  };
}

/**
 * React hook for scramble effect.
 */
export function useScramble(
  targetText: string,
  enabled: boolean,
  durationMs?: number
): string {
  // Implementation in component that needs it
  return targetText;
}
