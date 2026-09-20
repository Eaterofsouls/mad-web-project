import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Constellation } from '../../components/Constellation/Constellation';
import { Signal } from '../../components/Signal/Signal';
import { NodeTooltipCard } from '../../components/NodeTooltipCard/NodeTooltipCard';
import { nodes } from '../../data/nodes';
import type { WorkflowNode } from '../../data/types';
import './Explorer.css';

export function ExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>(
    searchParams.get('industry') || 'all'
  );
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<WorkflowNode | null>(null);
  const [openedSlugs, setOpenedSlugs] = useState<Set<string>>(new Set());
  const [showSurface2, setShowSurface2] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Surface 2 — appears after 2 Signal panels opened
  useEffect(() => {
    if (openedSlugs.size >= 2 && !showSurface2) {
      // Check sessionStorage for existing surface2 display
      const shown = sessionStorage.getItem('mad_surface2_shown');
      if (!shown) {
        setShowSurface2(true);
        sessionStorage.setItem('mad_surface2_shown', '1');
      }
    }
  }, [openedSlugs, showSurface2]);

  const handleNodeClick = useCallback((node: WorkflowNode) => {
    setSelectedNode(node);
    setOpenedSlugs(prev => { const next = new Set(prev); next.add(node.slug); return next; });
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      searchParams.delete('industry');
    } else {
      searchParams.set('industry', filter);
    }
    setSearchParams(searchParams, { replace: true });
  }, [searchParams, setSearchParams]);

  return (
    <div className="explorer-page">

      <div className="explorer-canvas">
        <Constellation
          nodes={nodes}
          activeFilter={activeFilter}
          onNodeClick={handleNodeClick}
          onFilterChange={handleFilterChange}
          defaultView={isMobile ? 'index' : 'map'}
          onNodeHover={setHoveredNode}
        />
      </div>

      <NodeTooltipCard node={selectedNode ? null : hoveredNode} />

      {/* Signal panel */}
      <div
        className={`explorer-scrim ${selectedNode ? 'active' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <Signal node={selectedNode} onClose={handleClose} onNavigate={setSelectedNode} />

      {/* Surface 2 — persistent CTA after 2 panels */}
      {showSurface2 && !selectedNode && (
        <Surface2 onDismiss={() => setShowSurface2(false)} />
      )}
    </div>
  );
}

function Surface2({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(var(--nav-height, 60px) + 52px + 48px)', // below nav + filter bar
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 130,
        background: 'rgba(14,14,18,0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(242,238,228,0.10)',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        animation: 'surface2-rise 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
      role="complementary"
      aria-label="Assessment invitation"
    >
      <span style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        letterSpacing: '0.04em',
      }}>
        Ready to assess your operation?
      </span>
      <a
        href="/contact"
        id="surface2-begin-assessment"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 24px',
          background: 'var(--cta-bg)',
          color: 'var(--cta-text)',
          fontFamily: 'var(--font-primary)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: 'var(--ls-cta)',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: 0,  /* PROTECTED: No rounded corners */
          transition: 'background 0.2s ease',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--cta-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--cta-bg)')}
      >
        BEGIN ASSESSMENT
      </a>
      <button
        onClick={onDismiss}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          fontSize: '14px',
          padding: '4px',
          lineHeight: 1,
        }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}

