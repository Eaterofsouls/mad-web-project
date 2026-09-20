import { useMemo, useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  MarkerType,
  Controls,
} from '@xyflow/react';
import type { Edge, Node } from '@xyflow/react';
import type { WorkflowNode } from '../../data/types';
import '@xyflow/react/dist/style.css';
import './WorkflowDiagram.css';

interface WorkflowDiagramProps {
  systemNode: WorkflowNode;
}

const edgeStyles = {
  stroke: 'var(--text-tertiary)',
  strokeWidth: 2,
};

/** Build nodes + edges from a WorkflowNode — shared between inline and lightbox */
function buildGraph(systemNode: WorkflowNode): { nodes: Node[]; edges: Edge[] } {
  if (!systemNode) return { nodes: [], edges: [] };

  const inputs  = systemNode.metadata_watches.split('·').map(s => s.trim()).filter(Boolean);
  const outputs = systemNode.metadata_generates.split('·').map(s => s.trim()).filter(Boolean);

  let actionStr = 'Human Validation';
  if (systemNode.mechanism_you_handle && systemNode.mechanism_you_handle.length > 0) {
    actionStr = systemNode.mechanism_you_handle[0];
  } else if (systemNode.metadata_replaces_or_transforms) {
    actionStr = systemNode.metadata_replaces_or_transforms;
  }

  const newNodes: Node[] = [];
  const newEdges: Edge[] = [];

  const inputSpacing      = 100;
  const inputsTotalHeight = (inputs.length - 1) * inputSpacing;
  const startY            = 50;

  // Column 1: Inputs
  inputs.forEach((inp, i) => {
    const id = `input-${i}`;
    newNodes.push({
      id,
      position: { x: 50, y: startY + i * inputSpacing },
      data: { label: inp },
      className: 'workflow-node input-node',
    });
    newEdges.push({
      id: `e-${id}-proc`,
      source: id,
      target: 'processing',
      animated: true,
      style: edgeStyles,
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--text-tertiary)' },
    });
  });

  // Column 2: Processing
  const processingY = startY + inputsTotalHeight / 2;
  newNodes.push({
    id: 'processing',
    position: { x: 350, y: processingY },
    data: { label: `${systemNode.short_name}\nEngine` },
    className: 'workflow-node processing-node',
  });

  // Column 3: Outputs
  const outputsTotalHeight = (outputs.length - 1) * inputSpacing;
  const outStartY          = processingY - outputsTotalHeight / 2;
  outputs.forEach((out, i) => {
    const id = `output-${i}`;
    newNodes.push({
      id,
      position: { x: 650, y: outStartY + i * inputSpacing },
      data: { label: out },
      className: 'workflow-node output-node',
    });
    newEdges.push({
      id: `e-proc-${id}`,
      source: 'processing',
      target: id,
      animated: true,
      style: edgeStyles,
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--text-tertiary)' },
    });
    newEdges.push({
      id: `e-${id}-action`,
      source: id,
      target: 'action',
      style: edgeStyles,
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--text-tertiary)' },
    });
  });

  // Column 4: Action
  newNodes.push({
    id: 'action',
    position: { x: 950, y: processingY },
    data: { label: `Action: ${actionStr.slice(0, 50)}${actionStr.length > 50 ? '…' : ''}` },
    className: 'workflow-node action-node',
  });

  return { nodes: newNodes, edges: newEdges };
}

/** Full-screen lightbox with zoom + pan — mobile only */
function WorkflowLightbox({
  systemNode,
  onClose,
}: {
  systemNode: WorkflowNode;
  onClose: () => void;
}) {
  const { nodes, edges } = useMemo(() => buildGraph(systemNode), [systemNode]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="wf-lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Workflow diagram">
      <div className="wf-lightbox-panel" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="wf-lightbox-header">
          <span className="wf-lightbox-title">{systemNode.short_name} — WORKFLOW</span>
          <button
            className="wf-lightbox-close"
            onClick={onClose}
            aria-label="Close workflow diagram"
          >
            ✕
          </button>
        </div>

        {/* Hint */}
        <div className="wf-lightbox-hint">Pinch to zoom · Drag to pan</div>

        {/* React Flow — full zoom & pan enabled */}
        <div className="wf-lightbox-canvas">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            proOptions={{ hideAttribution: true }}
            minZoom={0.3}
            maxZoom={3}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnDrag
            zoomOnScroll
            zoomOnPinch
            panOnScroll={false}
          >
            <Background color="var(--rule-light)" gap={20} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}

export function WorkflowDiagram({ systemNode }: WorkflowDiagramProps) {
  const { nodes, edges } = useMemo(() => buildGraph(systemNode), [systemNode]);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openLightbox  = useCallback(() => { if (isMobile) setLightboxOpen(true); }, [isMobile]);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <div
        className={`workflow-diagram-container${isMobile ? ' wf-mobile-tap' : ''}`}
        onClick={openLightbox}
        role={isMobile ? 'button' : undefined}
        tabIndex={isMobile ? 0 : undefined}
        aria-label={isMobile ? `Open ${systemNode.short_name} workflow diagram` : undefined}
        onKeyDown={isMobile ? (e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(); } : undefined}
      >
        <div className="react-flow-wrapper">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            proOptions={{ hideAttribution: true }}
            minZoom={0.2}
            maxZoom={1.5}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
          >
            <Background color="var(--rule-light)" gap={20} />
          </ReactFlow>
        </div>

        {/* Tap hint — mobile only */}
        {isMobile && (
          <div className="wf-tap-hint" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
            TAP TO EXPLORE
          </div>
        )}
      </div>

      {lightboxOpen && (
        <WorkflowLightbox systemNode={systemNode} onClose={closeLightbox} />
      )}
    </>
  );
}
