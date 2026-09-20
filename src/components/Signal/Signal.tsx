import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { WorkflowNode } from '../../data/types';
import { createScramble } from '../../utils/scramble';
import { WorkflowDiagram } from '../WorkflowDiagram/WorkflowDiagram';
import { nodes } from '../../data/nodes';
import './Signal.css';

// SACRED CONSTANT — Do not reduce without design lead approval
// The 0.9-second pause is when understanding occurs. It is not a loading delay.
const SIGNAL_SILENCE_MS = 900;

interface SignalProps {
  node: WorkflowNode | null;
  onClose: () => void;
  onNavigate?: (node: WorkflowNode) => void;
}

type PanelPhase =
  | 'closed'
  | 'entering'
  | 'scrambling'
  | 'silence'      // THE SILENCE — 900ms
  | 'reality'
  | 'revealing'
  | 'complete';

export function Signal({ node, onClose, onNavigate }: SignalProps) {
  const [phase, setPhase] = useState<PanelPhase>('closed');
  const [scrambledTitle, setScrambledTitle] = useState('');
  const [metadataVisible, setMetadataVisible] = useState(false);
  const [realityVisible, setRealityVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const prevNodeRef = useRef<WorkflowNode | null>(null);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swipeStartY = useRef<number | null>(null);

  // Reset all visible states
  const resetVisibility = useCallback(() => {
    setMetadataVisible(false);
    setRealityVisible(false);
    setSectionVisible(false);
    setCtaVisible(false);
    setFooterVisible(false);
    setScrambledTitle('');
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
  }, []);

  // Run the full panel sequence
  const runSequence = useCallback((targetNode: WorkflowNode) => {
    resetVisibility();
    setPhase('entering');

    // Small delay for panel slide-in to start
    setTimeout(() => {
      setPhase('scrambling');

      // Start title scramble
      const isTwoLine = targetNode.full_name.length > 28;
      const scrambleDuration = isTwoLine ? 1400 : 1100;

      const scramble = createScramble(
        targetNode.full_name.toUpperCase(),
        setScrambledTitle,
        scrambleDuration
      );
      scramble.start();

      // After scramble: show reality summary first
      setTimeout(() => {
        setRealityVisible(true);
        setPhase('silence');

        // THE SILENCE — 900ms — do not reduce
        silenceTimerRef.current = setTimeout(() => {
          // Metadata appears after silence
          setMetadataVisible(true);
          setPhase('reality');

          // Then body sections cascade in
          setTimeout(() => {
            setSectionVisible(true);
            setPhase('revealing');

            setTimeout(() => {
              setCtaVisible(true);

              setTimeout(() => {
                setFooterVisible(true);
                setPhase('complete');
              }, 200);
            }, 600);
          }, 400);
        }, SIGNAL_SILENCE_MS);
      }, scrambleDuration + 100);
    }, 50);
  }, [resetVisibility]);

  // Open / close / swap
  useEffect(() => {
    if (!node) {
      setPhase('closed');
      resetVisibility();
      prevNodeRef.current = null;
      document.body.classList.remove('signal-open');
      return;
    }

    document.body.classList.add('signal-open');

    if (prevNodeRef.current?.node_id !== node.node_id) {
      prevNodeRef.current = node;
      runSequence(node);
    }
  }, [node, runSequence, resetVisibility]);

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && node) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [node, onClose]);

  // Handle arrow key navigation (PROMPT 18)
  useEffect(() => {
    if (!node || phase === 'closed') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const idx = nodes.findIndex(n => n.node_id === node.node_id);
        const next = nodes[(idx + 1) % nodes.length];
        onNavigate?.(next);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const idx = nodes.findIndex(n => n.node_id === node.node_id);
        const prev = nodes[(idx - 1 + nodes.length) % nodes.length];
        onNavigate?.(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [node, phase, onNavigate]);

  // Focus trap
  useEffect(() => {
    if (node && panelRef.current) {
      panelRef.current.focus();
    }
  }, [node]);

  if (!node && phase === 'closed') return null;

  const isTwoLine = node ? node.full_name.length > 28 : false;

  return (
    <div
      className={`signal-overlay${node ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={node ? `Signal: ${node.full_name}` : 'Signal panel'}
    >
      {/* Sliver — click to close */}
      <div
        className="signal-sliver"
        onClick={onClose}
        aria-label="Close signal panel"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
      />

      {/* Panel */}
      <div
        className={`signal-panel${phase !== 'closed' ? ' panel-entering' : ''}`}
        ref={panelRef}
        onTouchStart={(e) => { swipeStartY.current = e.touches[0].clientY; }}
        onTouchMove={(e) => {
          if (swipeStartY.current === null) return;
          const deltaY = e.touches[0].clientY - swipeStartY.current;
          if (deltaY > 60) {
            swipeStartY.current = null;
            onClose();
          }
        }}
        onTouchEnd={() => { swipeStartY.current = null; }}
        tabIndex={-1}
      >
        {/* CLOSE FILE */}
        <button
          className="signal-close"
          onClick={onClose}
          aria-label="Close file"
        >
          ← CLOSE FILE
        </button>

        {node && (
          <>
            {/* Orientation line */}
            <div className="signal-orientation">
              <span className="orientation-cluster">{node.cluster_primary}</span>
              <span className="orientation-divider" aria-hidden="true" />
              <span className="orientation-node-id">{node.node_id}</span>
            </div>

            {/* Scramble title */}
            <div className="signal-title-block">
              <h1 className={`signal-title${isTwoLine ? ' two-line' : ''}`}>
                {scrambledTitle || '\u00A0'}
              </h1>
            </div>

            {/* Reality sentence / Layman summary (appears FIRST after scramble) */}
            <div className={`signal-reality${realityVisible ? ' visible' : ''}`}>
              {node.laymanSummary && node.laymanSummary.includes(' · ') ? (
                <p className="reality-text">
                  {node.laymanSummary.split(' · ').map((segment, index, array) => (
                    <span key={index}>
                      <span className="phrase-segment">{segment}</span>
                      {index < array.length - 1 && (
                        <span className="phrase-dot">·</span>
                      )}
                    </span>
                  ))}
                </p>
              ) : (
                <p className="reality-text">{node.reality_sentence}</p>
              )}
            </div>

            {/* THE SILENCE — 900ms of quiet before metadata appears */}
            {/* SIGNAL_SILENCE_MS = 900 — protected decision */}

            {/* Metadata stack */}
            <div className={`signal-metadata${metadataVisible ? ' visible' : ''}`} aria-live="polite">
              <div className="metadata-row">
                <span className="metadata-label">WATCHES</span>
                <span className="metadata-value">{node.metadata_watches}</span>
              </div>
              <div className="metadata-divider" />
              <div className="metadata-row">
                <span className="metadata-label">GENERATES</span>
                <span className="metadata-value">{node.metadata_generates}</span>
              </div>
              <div className="metadata-divider" />
              <div className="metadata-row">
                <span className="metadata-label">{node.metadata_type}</span>
                <span className="metadata-value">{node.metadata_replaces_or_transforms}</span>
              </div>
              <div className="metadata-divider" />
              <div className="metadata-row">
                <span className="metadata-label">RETURNS</span>
                <span className="metadata-value">{node.metadata_returns}</span>
              </div>
            </div>

            {/* Diagram Section */}
            <div className={`signal-diagram-section${sectionVisible ? ' visible' : ''}`}>
              <WorkflowDiagram systemNode={node} />
            </div>

            <div className={`signal-rule${sectionVisible ? ' visible' : ''}`} />

            {/* Problem section */}
            <div className={`signal-section${sectionVisible ? ' visible' : ''}`}>
              <div className="section-label">The Problem</div>
              <p className="problem-text">{node.problem_paragraph}</p>
            </div>

            {/* Outcomes section */}
            <div className={`signal-section${sectionVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="section-label">What Changes</div>
              <ul className="outcomes-list">
                {node.outcomes.map((outcome, i) => (
                  <li key={i} className="outcome-item">{outcome}</li>
                ))}
              </ul>
            </div>

            {/* Proof section */}
            <div className={`signal-section${sectionVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="section-label">Deployed</div>
              <ul className="proof-list">
                {node.proof_entries.map((entry, i) => (
                  <li key={i} className="proof-entry">
                    {entry.industry} · {entry.region} · operational since {entry.year}
                  </li>
                ))}
              </ul>
              <div className="proof-counter">
                {node.proof_counter} INDUSTRY {node.proof_counter === 1 ? 'CATEGORY' : 'CATEGORIES'}
              </div>
            </div>

            {/* Mechanism section */}
            <div className={`signal-section${sectionVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="section-label">How It Works</div>
              <div className="mechanism-grid">
                <div className="mechanism-col">
                  <div className="mechanism-col-header">AI Handles</div>
                  <ul className="mechanism-items">
                    {node.mechanism_ai_handles.map((item, i) => (
                      <li key={i} className="mechanism-item">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mechanism-divider-vertical" />
                <div className="mechanism-col">
                  <div className="mechanism-col-header">You Handle</div>
                  <ul className="mechanism-items">
                    {node.mechanism_you_handle.map((item, i) => (
                      <li key={i} className="mechanism-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mechanism-summary-text">{node.mechanism_summary}</p>
            </div>

            {/* CTA block */}
            <div className={`signal-cta-block${ctaVisible ? ' visible' : ''}`}>
              <p className="cta-headline">Begin the assessment.</p>
              <Link
                to="/contact"
                className="cta-button-primary"
                id="signal-begin-assessment"
                onClick={onClose}
              >
                BEGIN ASSESSMENT
              </Link>
            </div>

            {/* Signal Footer (Prompt 30) */}
            <div className={`signal-footer${footerVisible ? ' visible' : ''}`}>
              {node.proofCitation && !node.proofCitation.isPlaceholder && (
                <div className="signal-proof-citation">
                  <span className="citation-prefix">DEPLOYED: </span>
                  {node.proofCitation.company} · {node.proofCitation.system} · {node.proofCitation.result}
                </div>
              )}
              <Link to={`/explorer/${node.slug}`} className="signal-record-link" onClick={onClose}>
                VIEW FULL SYSTEM RECORD →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
