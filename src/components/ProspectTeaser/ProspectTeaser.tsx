import React from 'react';
import './ProspectTeaser.css';

// ─── ICONS (inline SVG paths for zero dependencies) ───────────────────────────
const IconSource = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.2" />
    <line x1="10" y1="3" x2="10" y2="1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="10" y1="19" x2="10" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="1" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="19" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconEnrich = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <rect x="3" y="5" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="3" y="10" width="10" height="3" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="3" y="15" width="7" height="1.5" rx="0.75" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);
const IconScore = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <path d="M4 16 L8 11 L12 13 L17 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="17" cy="6" r="1.5" fill="currentColor"/>
  </svg>
);
const IconPersonalize = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <path d="M10 3C6.686 3 4 5.686 4 9c0 2.21 1.197 4.14 2.97 5.17L7 17l3-1.5 3 1.5-.03-2.83C14.803 13.14 16 11.21 16 9c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M8 9h4M10 7v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <path d="M10 2C5.58 2 2 5.58 2 10c0 1.54.42 2.98 1.14 4.22L2 18l3.9-1.12A7.94 7.94 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M7.5 8.5c.5 1.5 2.5 3.5 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconEmail = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M6 8v6M6 6v.01M10 14v-3c0-1 .5-2 2-2s2 1 2 2v3M10 8v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconConverse = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <path d="M3 5h14v8H3z" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M6 18l3-5h2l3 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 9h6M7 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconLearn = () => (
  <svg viewBox="0 0 20 20" fill="none" className="node-icon-svg">
    <path d="M10 4L3 8l7 4 7-4-7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M3 12l7 4 7-4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);

// ─── NODE DEFINITIONS ─────────────────────────────────────────────────────────
// accentColor → top-border line (low = raw data, high = AI peak, dim = background process)
// labelColor  → icon + label text (labels stay legible; only accent encodes the pipeline arc)
const MAIN_NODES = [
  {
    id: 'source',
    label: 'SOURCE',
    headline: 'Finds buyers before they raise their hand.',
    accentColor: 'rgba(15,15,13,0.14)',
    labelColor:  'rgba(15,15,13,0.42)',
    Icon: IconSource,
  },
  {
    id: 'enrich',
    label: 'ENRICH',
    headline: 'Verified email, mobile & firmographics appended.',
    accentColor: 'rgba(15,15,13,0.20)',
    labelColor:  'rgba(15,15,13,0.52)',
    Icon: IconEnrich,
  },
  {
    id: 'score',
    label: 'SCORE',
    headline: 'Hot, Warm, Cold — decided in milliseconds.',
    accentColor: 'rgba(15,15,13,0.38)',
    labelColor:  'rgba(15,15,13,0.70)',
    Icon: IconScore,
  },
  {
    id: 'personalize',
    label: 'PERSONALIZE',
    headline: 'One real hook per prospect. No templates.',
    accentColor: 'rgba(15,15,13,0.85)',  // peak — where the AI fires
    labelColor:  '#0f0f0d',
    Icon: IconPersonalize,
    isAiBrain: true,
    highlight: true,
  },
  // REACH → branches into 3 channels
  {
    id: 'converse',
    label: 'CONVERSE',
    headline: 'AI agent qualifies, answers, books. Hands off at the right moment.',
    accentColor: 'rgba(15,15,13,0.55)',
    labelColor:  'rgba(15,15,13,0.82)',
    Icon: IconConverse,
  },
  {
    id: 'learn',
    label: 'LEARN',
    headline: 'Every deal recalibrates the model. The loop never stops.',
    accentColor: 'rgba(15,15,13,0.10)',  // barely there — background process
    labelColor:  'rgba(15,15,13,0.28)',
    Icon: IconLearn,
  },
];

const BRANCH_NODES = [
  { id: 'whatsapp', label: 'WhatsApp', sell: 'Response in under 60 seconds.', accentColor: 'rgba(15,15,13,0.28)', labelColor: 'rgba(15,15,13,0.64)', Icon: IconWhatsApp },
  { id: 'email',    label: 'Email',    sell: 'Full context, perfectly timed.', accentColor: 'rgba(15,15,13,0.28)', labelColor: 'rgba(15,15,13,0.64)', Icon: IconEmail },
  { id: 'linkedin', label: 'LinkedIn', sell: 'Platform-native tone. Always.',  accentColor: 'rgba(15,15,13,0.28)', labelColor: 'rgba(15,15,13,0.64)', Icon: IconLinkedIn },
];

// ─── ANIMATED CONNECTOR ───────────────────────────────────────────────────────
function FlowConnector({ vertical = false, reverse = false }: { vertical?: boolean; reverse?: boolean }) {
  return (
    <div className={`flow-connector ${vertical ? 'flow-vertical' : ''} ${reverse ? 'flow-reverse' : ''}`}>
      <div className="flow-track" />
      <div className="flow-dash" />
      <div className="flow-arrowhead">{vertical ? '↓' : '→'}</div>
    </div>
  );
}

// ─── NODE CARD ────────────────────────────────────────────────────────────────
// accentColor drives the top-border accent line (--node-color).
// labelColor drives the icon + label text — kept separate so labels stay readable
// while the border line encodes the pipeline's confidence arc.
function NodeCard({
  label, headline, accentColor, labelColor, Icon, mini = false, sell, highlight = false,
}: {
  label: string; headline?: string; accentColor: string; labelColor: string;
  Icon: React.FC; mini?: boolean; sell?: string; highlight?: boolean;
}) {
  return (
    <div
      className={`wf-node ${mini ? 'wf-node-mini' : ''} ${highlight ? 'is-highlight' : ''}`}
      style={{ '--node-color': accentColor } as React.CSSProperties}
    >
      <div className="wf-node-top">
        <span className="wf-node-icon" style={{ color: labelColor }}><Icon /></span>
        <span className="wf-node-label" style={{ color: labelColor }}>{label}</span>
      </div>
      {!mini && headline && <p className="wf-node-headline">{headline}</p>}
      {mini && sell && <p className="wf-node-sell">{sell}</p>}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function ProspectTeaser() {
  return (
    <section className="workflow-teaser">

      {/* ── DESKTOP: Horizontal scroll canvas ── */}
      <div className="wf-canvas wf-canvas--desktop">

        {/* ── MAIN RAIL ── */}
        <div className="wf-rail">

          {/* SOURCE → ENRICH → SCORE → PERSONALIZE */}
          {MAIN_NODES.slice(0, 4).map((node) => (
            <React.Fragment key={node.id}>
              <NodeCard {...node} />
              <FlowConnector />
            </React.Fragment>
          ))}

          {/* ── BRANCH BLOCK (REACH = 3 channels) ── */}
          <div className="wf-branch-block">
            <div className="branch-header">
              <span className="branch-label-tag">REACH</span>
              <p className="branch-headline">Omnichannel, in parallel.</p>
            </div>
            <div className="branch-fork">
              <div className="branch-channels">
                {BRANCH_NODES.map((bn) => (
                  <div key={bn.id} className="branch-channel-row">
                    <div className="branch-fork-line" />
                    <NodeCard mini label={bn.label} accentColor={bn.accentColor} labelColor={bn.labelColor} Icon={bn.Icon} sell={bn.sell} />
                  </div>
                ))}
              </div>
              <div className="branch-merge-line" />
            </div>
          </div>

          <FlowConnector />

          {/* CONVERSE → LEARN */}
          {MAIN_NODES.slice(4).map((node, i) => (
            <React.Fragment key={node.id}>
              <NodeCard {...node} />
              {i < MAIN_NODES.slice(4).length - 1 && <FlowConnector />}
            </React.Fragment>
          ))}

        </div>

        {/* ── LOOP-BACK ARC (Learn → Source) ── */}
        <div className="wf-loopback" aria-hidden="true">
          <div className="loopback-line" />
          <div className="loopback-dash" />
          <div className="loopback-label">
            Every closed deal sharpens tomorrow's targeting.
          </div>
        </div>

      </div>

      {/* ── MOBILE: Vertical stacked layout ── */}
      <div className="wf-canvas wf-canvas--mobile">
        <div className="wf-rail-vertical">

          {/* SOURCE */}
          <NodeCard {...MAIN_NODES[0]} />
          <FlowConnector vertical />

          {/* ENRICH */}
          <NodeCard {...MAIN_NODES[1]} />
          <FlowConnector vertical />

          {/* SCORE */}
          <NodeCard {...MAIN_NODES[2]} />
          <FlowConnector vertical />

          {/* PERSONALIZE */}
          <NodeCard {...MAIN_NODES[3]} />
          <FlowConnector vertical />

          {/* REACH branch block — vertical */}
          <div className="wf-branch-block-vertical">
            <div className="branch-header-vertical">
              <span className="branch-label-tag">REACH</span>
              <p className="branch-headline">Omnichannel, in parallel.</p>
            </div>
            <div className="branch-channels-vertical">
              {BRANCH_NODES.map((bn) => (
                <React.Fragment key={bn.id}>
                  <NodeCard mini label={bn.label} accentColor={bn.accentColor} labelColor={bn.labelColor} Icon={bn.Icon} sell={bn.sell} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <FlowConnector vertical />

          {/* CONVERSE */}
          <NodeCard {...MAIN_NODES[4]} />
          <FlowConnector vertical />

          {/* LEARN */}
          <NodeCard {...MAIN_NODES[5]} />

          {/* Loop-back note */}
          <div className="wf-loopback-mobile" aria-hidden="true">
            <div className="loopback-line-mobile" />
            <p className="loopback-label-mobile">Every closed deal sharpens tomorrow's targeting.</p>
          </div>

        </div>
      </div>

    </section>
  );
}
