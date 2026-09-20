import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { WorkflowDiagram } from '../../components/WorkflowDiagram/WorkflowDiagram';
import { getNodeBySlug } from '../../data/nodes';
import { createScramble } from '../../utils/scramble';
import './NodePage.css';
function NodeWatermark({ type }: { type?: string }) {
  const actualType = type || 'generic';
  let content = null;
  switch (actualType) {
    case 'sensor':
      content = (
        <g stroke="currentColor" strokeWidth="2" fill="none">
          <circle cx="400" cy="300" r="100" />
          <circle cx="400" cy="300" r="150" />
          <circle cx="400" cy="300" r="200" />
          <path d="M 390 300 L 410 300 M 400 290 L 400 310" />
          <path d="M 400 100 L 400 0 M 400 500 L 400 600 M 200 300 L 0 300 M 600 300 L 800 300" />
        </g>
      );
      break;
    case 'signal':
      content = (
        <path d="M 0 300 Q 100 100 200 300 T 400 300 T 600 300 T 800 300" fill="none" stroke="currentColor" strokeWidth="4" />
      );
      break;
    case 'network':
      const nodes = [];
      const lines = [];
      for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
          const cx = 200 + i * 133;
          const cy = 150 + j * 100;
          nodes.push(<circle key={`n-${i}-${j}`} cx={cx} cy={cy} r="4" fill="currentColor" />);
          if (i < 3) lines.push(<line key={`h-${i}-${j}`} x1={cx} y1={cy} x2={cx + 133} y2={cy} stroke="currentColor" strokeWidth="1" />);
          if (j < 3) lines.push(<line key={`v-${i}-${j}`} x1={cx} y1={cy} x2={cx} y2={cy + 100} stroke="currentColor" strokeWidth="1" />);
        }
      }
      content = <g>{lines}{nodes}</g>;
      break;
    case 'flow':
      content = (
        <g stroke="currentColor" strokeWidth="3" opacity="0.5">
          <line x1="0" y1="100" x2="800" y2="500" />
          <line x1="0" y1="200" x2="800" y2="600" />
          <line x1="0" y1="300" x2="700" y2="650" />
          <line x1="100" y1="0" x2="800" y2="350" />
          <line x1="200" y1="-50" x2="800" y2="250" />
        </g>
      );
      break;
    case 'data':
      content = (
        <g stroke="currentColor" strokeWidth="2" fill="none">
          <rect x="200" y="400" width="60" height="100" />
          <rect x="280" y="300" width="60" height="200" />
          <rect x="360" y="200" width="60" height="300" />
          <rect x="440" y="350" width="60" height="150" />
          <rect x="520" y="100" width="60" height="400" />
          <line x1="150" y1="500" x2="630" y2="500" />
        </g>
      );
      break;
    case 'logistics':
      content = (
        <g stroke="currentColor" strokeWidth="3" fill="none">
          <circle cx="200" cy="400" r="10" />
          <circle cx="400" cy="200" r="10" />
          <circle cx="600" cy="500" r="10" />
          <path d="M 207 393 L 393 207" />
          <path d="M 405 208 L 595 492" />
          <polygon points="380,220 393,207 380,194" fill="currentColor" />
          <polygon points="580,480 595,492 590,470" fill="currentColor" />
        </g>
      );
      break;
    case 'chemical':
      content = (
        <g stroke="currentColor" strokeWidth="3" fill="none">
          <polygon points="300,300 350,213 450,213 500,300 450,386 350,386" />
          <polygon points="500,300 550,213 650,213 700,300 650,386 550,386" />
        </g>
      );
      break;
    case 'pharma':
      content = (
        <g stroke="currentColor" strokeWidth="4" fill="none">
          <circle cx="400" cy="300" r="150" />
          <path d="M 400 200 L 400 400 M 300 300 L 500 300" />
        </g>
      );
      break;
    case 'generic':
    default:
      const dots = [];
      for(let i=0; i<6; i++) {
        for(let j=0; j<6; j++) {
          dots.push(<circle key={`g-${i}-${j}`} cx={150 + i * 100} cy={100 + j * 80} r="2" fill="currentColor" opacity="0.5" />);
        }
      }
      content = <g>{dots}</g>;
      break;
  }

  return (
    <svg className="node-watermark" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {content}
    </svg>
  );
}

export function NodePage() {
  const { slug } = useParams<{ slug: string }>();
  const node = getNodeBySlug(slug || '');

  // ── Transition overlay refs ───────────────────────────────────────────────
  const overlayRef = useRef<HTMLDivElement>(null);
  const cleanupFiredRef = useRef(false);

  // ── Scramble Labels State ────────────────────────────────────────────────
  const [scrambledLabels, setScrambledLabels] = useState({
    watches: '',
    generates: '',
    optimizes: '',
    acts: ''
  });
  const [labelsFlashing, setLabelsFlashing] = useState(false);

  // ── Scroll Cue State (PROMPT 12) ─────────────────────────────────────────
  const [showScrollCue, setShowScrollCue] = useState(false);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    if (node) {
      document.title = `${node.full_name} — MAD`;
    }
  }, [node]);

  // ── Page-load transition (PROMPT 07 — DO NOT MODIFY) ─────────────────────
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    cleanupFiredRef.current = false;

    const handleAnimationEnd = () => {
      if (cleanupFiredRef.current) return;
      cleanupFiredRef.current = true;
      overlay.classList.add('done');
    };

    overlay.addEventListener('animationend', handleAnimationEnd);

    return () => {
      overlay.removeEventListener('animationend', handleAnimationEnd);
      if (!cleanupFiredRef.current) {
        cleanupFiredRef.current = true;
        overlay.classList.add('done');
      }
    };
  }, []);

  // ── Scramble Animation Lifecycle (PROMPT 09) ──────────────────────────────
  useEffect(() => {
    if (!node) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      setScrambledLabels({
        watches: "WATCHES",
        generates: "GENERATES",
        optimizes: "OPTIMIZES",
        acts: "ACTS"
      });
      return;
    }

    // Start scramble at 700ms (after white-to-black transition is mostly done)
    const startTimer = setTimeout(() => {
      const s1 = createScramble("WATCHES", (text) => setScrambledLabels(prev => ({ ...prev, watches: text })), 800);
      const s2 = createScramble("GENERATES", (text) => setScrambledLabels(prev => ({ ...prev, generates: text })), 800);
      const s3 = createScramble("OPTIMIZES", (text) => setScrambledLabels(prev => ({ ...prev, optimizes: text })), 800);
      const s4 = createScramble("ACTS", (text) => setScrambledLabels(prev => ({ ...prev, acts: text })), 800);

      s1.start();
      s2.start();
      s3.start();
      s4.start();

      // Flash effect after scramble completes (800ms duration)
      setTimeout(() => {
        setLabelsFlashing(true);
        setTimeout(() => setLabelsFlashing(false), 80);
      }, 800);
    }, 700);

    return () => clearTimeout(startTimer);
  }, [node]);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out indicator when user scrolls past 200px (title section)
      setIsScrolledPast(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Scroll Cue Timer ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!node) return;
    const timer = setTimeout(() => setShowScrollCue(true), 1600);
    return () => clearTimeout(timer);
  }, [node]);

  // ── 404 state ─────────────────────────────────────────────────────────────
  if (!node) {
    return (
      <div className="node-page">
        <div ref={overlayRef} className="node-transition-overlay" aria-hidden="true" />
        <div className="node-not-found node-content-reveal">
          <div className="node-title-large" style={{ margin: 0 }}>SYSTEM NOT FOUND</div>
          <Link to="/explorer" className="node-nf-back">← Return to Explorer</Link>
        </div>
      </div>
    );
  }

  const summaryText = node.laymanSummary ?? node.reality_sentence;
  const explanationText = node.detailedExplanation ?? node.problem_paragraph;

  return (
    <div className="node-page">
      <NodeWatermark type={node.watermarkType} />
      <div ref={overlayRef} className="node-transition-overlay" aria-hidden="true" />

      <div className="node-content-reveal node-full-layout">
        {/* ── HEADER: SCRAMBLED LABELS ── */}
        <div className="node-header-labels">
          <div className="node-header-label-container">
            <span className="node-header-label-hidden">WATCHES</span>
            <span className={`node-header-label-visible ${labelsFlashing ? 'flash' : ''}`}>{scrambledLabels.watches}</span>
          </div>
          <div className="node-header-label-container">
            <span className="node-header-label-hidden">GENERATES</span>
            <span className={`node-header-label-visible ${labelsFlashing ? 'flash' : ''}`}>{scrambledLabels.generates}</span>
          </div>
          <div className="node-header-label-container">
            <span className="node-header-label-hidden">OPTIMIZES</span>
            <span className={`node-header-label-visible ${labelsFlashing ? 'flash' : ''}`}>{scrambledLabels.optimizes}</span>
          </div>
          <div className="node-header-label-container">
            <span className="node-header-label-hidden">ACTS</span>
            <span className={`node-header-label-visible ${labelsFlashing ? 'flash' : ''}`}>{scrambledLabels.acts}</span>
          </div>
        </div>

        <section className="node-section-workflow" aria-label="System workflow diagram">
          <WorkflowDiagram systemNode={node} />
        </section>

        <div className="node-detail-column">
          <section className="node-section-title">
            <div className="node-orientation">
              <span className="node-cluster">{node.cluster_primary}</span>
              <span className="node-sep" aria-hidden="true" />
              <span className="node-id">{node.node_id}</span>
            </div>
            <h1 className="node-title-large">{node.full_name.toUpperCase()}</h1>
            <hr className="node-title-rule" aria-hidden="true" />
          </section>

          {/* SECTION 2.5 — SCROLL CUE ──────────────────────────────────────── */}
          <div className="node-scroll-cue-wrapper" aria-hidden="true">
            <div 
              className={`node-scroll-cue ${showScrollCue ? 'visible' : ''} ${isScrolledPast ? 'hidden' : ''}`}
            >
              <div className="node-scroll-cue-text">EXPLORE<br />↓</div>
            </div>
          </div>

          {/* SECTION 3 — LAYMAN SUMMARY ────────────────────────────────────── */}
          <section className="node-section-summary" aria-label="Plain language summary">
            <p className="node-summary-text">{summaryText}</p>
          </section>

          <section className="node-section-explanation" aria-label="How the system works">
            <div className="node-section-label">HOW IT WORKS</div>
            <div className="node-explanation-text">
              <p>{explanationText}</p>
            </div>
          </section>

          <section id="proof-citation-section" className="node-section-proof" aria-label="Deployment evidence">
            <div className="node-section-label">DEPLOYMENT RECORD</div>
            {node.proofCitation ? (
              <>
                {node.proofCitation.isPlaceholder && (
                  <div className="proof-pending-flag">[CITATION PENDING — REPLACE BEFORE LAUNCH]</div>
                )}
                <div className={`proof-card ${node.proofCitation.isPlaceholder ? 'is-placeholder' : ''}`}>
                  <div className="proof-company">{node.proofCitation.company}</div>
                  <div className="proof-system">{node.proofCitation.system}</div>
                  <div className="proof-date">{node.proofCitation.date}</div>
                  <div className="proof-result">{node.proofCitation.result}</div>
                  <div className="proof-source">
                    SOURCE:{' '}
                    {node.proofCitation.source.startsWith('http://') || node.proofCitation.source.startsWith('https://') ? (
                      <a href={node.proofCitation.source} target="_blank" rel="noopener noreferrer">
                        {node.proofCitation.source}
                      </a>
                    ) : (
                      node.proofCitation.source
                    )}
                  </div>
                </div>
              </>
            ) : (
              <p className="proof-fallback-text">
                The system type string from this category is cited in {node.cluster_primary.toLowerCase()} operational deployments across Indian manufacturing facilities. Specific deployment data is available on request during your assessment consultation.
              </p>
            )}
          </section>

          <div className="node-page-footer">
            <Link to="/explorer" className="node-back">← CLOSE FILE</Link>
            <Link to="/contact" className="node-cta-btn" id="node-begin-assessment">BEGIN ASSESSMENT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

