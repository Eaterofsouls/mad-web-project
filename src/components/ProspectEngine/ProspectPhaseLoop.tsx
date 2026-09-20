// NOTE: This component is NOT rendered on the homepage
import React from 'react';
import './ProspectPhaseLoop.css';

export interface ProspectPhaseLoopProps {
  activePhase: number;
}

const PHASES = [
  { name: 'ICP Definition', description: 'Defines the ideal customer profile constraints and parameters for targeting.' },
  { name: 'Sourcing', description: 'Sources leads simultaneously from Meta ads, directories, and trigger monitoring.' },
  { name: 'Enrichment', description: 'Enriches raw contacts through a waterfall pipeline, pushing data coverage to 95%.' },
  { name: 'Scoring', description: 'Scores every lead on ICP fit and real-time timing signals.' },
  { name: 'Personalization', description: 'Generates personalized first-contact messages referencing specific facts about each business.' },
  { name: 'Outreach', description: 'Orchestrates outreach across WhatsApp, email, and LinkedIn in a timed sequence.' },
  { name: 'Conversational AI', description: 'Conversational AI qualifies leads and books appointments in real time.' },
  { name: 'Unified Database', description: 'Writes every touchpoint to a unified database to preserve context permanently.' },
  { name: 'Nurture Loop', description: 'Nurtures non-converting leads through channel-appropriate, low-friction cadences.' },
  { name: 'Analytics', description: 'Feeds conversion data back to ad targeting, improving system accuracy with every cycle.' }
];

export default function ProspectPhaseLoop({ activePhase }: ProspectPhaseLoopProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  // Allow touch taps on nodes to override the scroll-driven active phase
  const [touchPhase, setTouchPhase] = React.useState<number | null>(null);
  const setActivePhase = (i: number) => setTouchPhase(i);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SVG setup
  const size = isMobile ? 320 : 640;
  const center = size / 2;
  const radius = isMobile ? 140 : 260;
  const circumference = 2 * Math.PI * radius;

  // Calculate arc offset (0 = empty, 9 = 90% full)
  // Ensure activePhase is clamped 0-9
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const resolvedPhase = touchPhase !== null ? touchPhase : activePhase;
  const currentPhase = reducedMotion ? 9 : Math.max(0, Math.min(9, resolvedPhase));
  const dashOffset = circumference - (circumference * (currentPhase / 10));

  return (
    <div className="prospect-phase-loop">
      <svg
        className="phase-loop-svg"
        viewBox={`0 0 ${size} ${size}`}
        overflow="visible"
        aria-hidden="true"
      >
        {/* Base Ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          className="phase-base-ring"
        />

        {/* Active Animated Ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          className="phase-active-ring"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${center} ${center})`}
        />

        {/* Nodes and Labels */}
        {PHASES.map((phase, i) => {
          const angleDeg = -90 + (i * 36);
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = center + radius * Math.cos(angleRad);
          const y = center + radius * Math.sin(angleRad);
          
          // Radially position labels slightly outside the ring
          const labelRadius = radius + 24;
          const labelX = center + labelRadius * Math.cos(angleRad);
          const labelY = center + labelRadius * Math.sin(angleRad);
          
          let textAnchor: "start" | "end" | "middle" = 'middle';
          if (Math.abs(Math.cos(angleRad)) > 0.1) {
            textAnchor = labelX > center ? 'start' : 'end';
          }

          // Move the text slightly up/down depending on quadrant for better alignment
          let dy = '0.3em';
          if (Math.sin(angleRad) < -0.5) dy = '0';
          if (Math.sin(angleRad) > 0.5) dy = '0.6em';

          const isActive = currentPhase === i;
          const isPassed = currentPhase > i;

          return (
            <g
              key={i}
              className="phase-node-group"
              style={{ cursor: 'pointer' }}
              onClick={() => setActivePhase(i)}
              onTouchStart={(e) => { e.preventDefault(); setActivePhase(i); }}
            >
              {/* The node circle */}
              <circle
                cx={x}
                cy={y}
                r="6"
                className={`phase-node ${isActive || isPassed ? 'active' : ''}`}
              />
              
              {/* The label */}
              <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                dy={dy}
                className={`phase-label ${isActive || isPassed ? 'active' : ''}`}
              >
                PHASE {i} — {phase.name.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Central Hub Container */}
      <div className="phase-central-hub">
        <div className="hub-phase-number">PHASE {currentPhase}</div>
        <div className="hub-phase-title">{PHASES[currentPhase].name}</div>
        <div className="hub-phase-description">{PHASES[currentPhase].description}</div>
      </div>
    </div>
  );
}
