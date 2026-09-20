import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import type { WorkflowNode } from '../../data/types';
import { CLUSTERS, INDUSTRIES } from '../../data/clusters';
import { StarField } from '../Canvas/StarField';
import './Constellation.css';

// Canvas coordinate space — 2400×1800
const CANVAS_W = 2400;
const CANVAS_H = 1800;
const CANVAS_CX = CANVAS_W / 2;  // 1200
const CANVAS_CY = CANVAS_H / 2;  // 900

/**
 * CLUSTER_AFFINITY_MAP
 * Defines semantic relationships between clusters.
 * Kinetic lines are drawn from this map — NOT from geometric distance.
 * Must remain bidirectional: if A → B exists, B → A must also exist.
 */
const CLUSTER_AFFINITY_MAP: Record<string, string[]> = {
  'PRODUCTION INTELLIGENCE':      ['QUALITY & COMPLIANCE', 'SUPPLY CHAIN INTELLIGENCE'],
  'QUALITY & COMPLIANCE':         ['PRODUCTION INTELLIGENCE', 'FINANCIAL INTELLIGENCE'],
  'SUPPLY CHAIN INTELLIGENCE':    ['PRODUCTION INTELLIGENCE', 'LOGISTICS & DISTRIBUTION', 'COMMERCIAL INTELLIGENCE'],
  'LOGISTICS & DISTRIBUTION':     ['SUPPLY CHAIN INTELLIGENCE', 'COMMERCIAL INTELLIGENCE'],
  'COMMERCIAL INTELLIGENCE':      ['SUPPLY CHAIN INTELLIGENCE', 'LOGISTICS & DISTRIBUTION', 'FINANCIAL INTELLIGENCE', 'KNOWLEDGE & DELIVERY INTELLIGENCE', 'MANAGEMENT SYNTHESIS'],
  'FINANCIAL INTELLIGENCE':       ['COMMERCIAL INTELLIGENCE', 'QUALITY & COMPLIANCE', 'MANAGEMENT SYNTHESIS'],
  'MANAGEMENT SYNTHESIS':         ['COMMERCIAL INTELLIGENCE', 'FINANCIAL INTELLIGENCE', 'KNOWLEDGE & DELIVERY INTELLIGENCE'],
  'KNOWLEDGE & DELIVERY INTELLIGENCE': ['COMMERCIAL INTELLIGENCE', 'MANAGEMENT SYNTHESIS'],
};

/**
 * CLUSTER_COLORS
 * Maps each cluster to its legend accent color.
 * Used for bloom gradients and legend dots.
 */
const CLUSTER_COLORS: Record<string, string> = {
  'PRODUCTION INTELLIGENCE':   '#FF2A2A', // Vivid Red
  'SUPPLY CHAIN INTELLIGENCE': '#0088FF', // Deep Blue
  'QUALITY & COMPLIANCE':      '#00FF66', // Neon Green
  'COMMERCIAL INTELLIGENCE':   '#FF9500', // Bright Orange
  'FINANCIAL INTELLIGENCE':    '#B92BFF', // Electric Purple
  'LOGISTICS & DISTRIBUTION':  '#FFDF00', // Pure Yellow
  'MACHINE INTELLIGENCE':      '#00FFFF', // Cyan / Aqua
  'MANAGEMENT SYNTHESIS':      '#FF007F', // Hot Pink
  'KNOWLEDGE & DELIVERY INTELLIGENCE': '#00FFCC', // Neon Teal
};

/**
 * renderStarSpikes — generates optical flares (diffraction spikes) for astrophotography stars.
 * 
 * UNIVERSAL / CLUSTER_CENTER → 5 flares
 * HUB → 4 flares (classic cross)
 * BRIDGE → 3 flares
 * PERIPHERAL → 0 flares (just a glowing point)
 */
function getSpikeCount(nodeType: string): 0 | 3 | 4 | 5 {
  if (nodeType === 'CLUSTER_CENTER' || nodeType === 'UNIVERSAL') return 5;
  if (nodeType === 'HUB') return 4;
  if (nodeType === 'BRIDGE') return 3;
  return 0; // PERIPHERAL
}

// Build the SVG <path> for optical flares.
// Flares are extremely thin and will be blurred via CSS/SVG filters to look like light rays.
function buildSpikePaths(cx: number, cy: number, spikeLen: number, count: 0 | 3 | 4 | 5): string {
  if (count === 0) return '';

  const angles: number[] =
    count === 3 ? [0, 120, 240] :
    count === 4 ? [0, 90, 180, 270] :
    [0, 72, 144, 216, 288];

  const halfW = 0.2; // razor-thin, like a light ray
  return angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const perpRad = rad + Math.PI / 2;
    const tipX = cx + Math.cos(rad) * spikeLen;
    const tipY = cy + Math.sin(rad) * spikeLen;
    const b1x = cx + Math.cos(perpRad) * halfW;
    const b1y = cy + Math.sin(perpRad) * halfW;
    const b2x = cx - Math.cos(perpRad) * halfW;
    const b2y = cy - Math.sin(perpRad) * halfW;
    return `M ${b1x.toFixed(2)} ${b1y.toFixed(2)} L ${tipX.toFixed(2)} ${tipY.toFixed(2)} L ${b2x.toFixed(2)} ${b2y.toFixed(2)} Z`;
  }).join(' ');
}



interface ConstellationProps {
  nodes: WorkflowNode[];
  activeFilter: string;
  onNodeClick: (node: WorkflowNode) => void;
  onFilterChange: (filter: string) => void;
  defaultView?: 'map' | 'index';
  onNodeHover?: (node: WorkflowNode | null) => void;
}

// ─── NODE SIZE LOGIC ──────────────────────────────────────────────────────────
// Determines radius and anchor status for each node based on cluster hierarchy.
function buildNodeSizeMap(nodes: WorkflowNode[]): Map<string, { r: number; isAnchor: boolean }> {
  const sizeMap = new Map<string, { r: number; isAnchor: boolean }>();

  // Count nodes per cluster
  const clusterCounts: Record<string, number> = {};
  nodes.forEach((n) => {
    clusterCounts[n.cluster_primary] = (clusterCounts[n.cluster_primary] || 0) + 1;
  });

  const counts = Object.values(clusterCounts);
  const avgCount = counts.reduce((a, b) => a + b, 0) / counts.length;

  // Identify anchor nodes: first 2 alphabetically by short_name in each cluster
  const anchorIds = new Set<string>();
  const clusterIds = Object.keys(clusterCounts);
  clusterIds.forEach((clusterId) => {
    const clusterNodes = nodes
      .filter((n) => n.cluster_primary === clusterId)
      .sort((a, b) => a.short_name.localeCompare(b.short_name));
    clusterNodes.slice(0, 2).forEach((n) => anchorIds.add(n.node_id));
  });

  const isMobileSize = typeof window !== 'undefined' && window.innerWidth < 768;
  nodes.forEach((n) => {
    const count = clusterCounts[n.cluster_primary] || 0;
    const isAnchor = anchorIds.has(n.node_id);
    let r: number;
    if (isAnchor) {
      r = isMobileSize ? 14 : 20; // var(--node-radius-anchor)
    } else if (count >= avgCount) {
      r = isMobileSize ? 10 : 14; // var(--node-radius-primary)
    } else {
      r = isMobileSize ? 6 : 8;   // var(--node-radius-secondary)
    }
    sizeMap.set(n.node_id, { r, isAnchor });
  });

  return sizeMap;
}


const toSlug = (s: string) => s.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
export function Constellation({
  nodes,
  activeFilter,
  onNodeClick,
  onFilterChange,
  defaultView = 'map',
  onNodeHover,
}: ConstellationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [view, setView] = useState<'map' | 'index'>(defaultView);
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<WorkflowNode | null>(null);
  const hoveredIdRef = useRef<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canvasPhase, setCanvasPhase] = useState<'hidden'|'stars'|'ring'|'nodes'>('hidden');
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  // Legend modal — open by default on mobile so user sees it on first visit
  const [legendOpen, setLegendOpen] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const t1 = setTimeout(() => setCanvasPhase('stars'), 100);
    const t2 = setTimeout(() => setCanvasPhase('ring'),  400);
    const t3 = setTimeout(() => setCanvasPhase('nodes'), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const transformRef = useRef(d3.zoomIdentity);

  const handleResetView = useCallback(() => {
    if (svgRef.current && zoomRef.current) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const initialScale = Math.min(vw / CANVAS_W, vh / CANVAS_H) * 0.85;
      const initialX = (vw - CANVAS_W * initialScale) / 2;
      const initialY = (vh - CANVAS_H * initialScale) / 2;
      const resetTransform = d3.zoomIdentity.translate(initialX, initialY).scale(initialScale);

      d3.select(svgRef.current)
        .transition()
        .duration(750)
        .call(zoomRef.current.transform, resetTransform);
    }
  }, []);

  // Pre-compute node sizes once
  const nodeSizeMap = useMemo(() => buildNodeSizeMap(nodes), [nodes]);

  // Find which clusters have visible nodes for the active filter
  const activeClusters = useMemo(() => {
    if (activeFilter === 'all') return new Set(CLUSTERS.map(c => c.id));
    const active = new Set<string>();
    nodes.forEach(node => {
      if (toSlug(node.industry_primary) === activeFilter ||
          (node.industry_secondary ? toSlug(node.industry_secondary) : undefined) === activeFilter) {
        active.add(node.cluster_primary);
      }
    });
    return active;
  }, [nodes, activeFilter]);

  // Compute cluster centroids for bokeh glow positioning
  const clusterCentroids = useMemo(() => {
    const centroids: Record<string, { x: number; y: number; count: number }> = {};
    nodes.forEach((n) => {
      if (!centroids[n.cluster_primary]) {
        centroids[n.cluster_primary] = { x: 0, y: 0, count: 0 };
      }
      centroids[n.cluster_primary].x += n.x;
      centroids[n.cluster_primary].y += n.y;
      centroids[n.cluster_primary].count += 1;
    });
    return Object.entries(centroids).map(([id, { x, y, count }]) => ({
      id,
      cx: x / count,
      cy: y / count,
      count,
    }));
  }, [nodes]);

  // Top 4 clusters by node count for bokeh glow
  const bokehClusters = useMemo(
    () => [...clusterCentroids].sort((a, b) => b.count - a.count).slice(0, 4),
    [clusterCentroids]
  );

  // Build kinetic lines connecting actual bright anchor nodes within clusters
  // This creates real night-sky constellation lines (node-to-node, not centroid-to-centroid)
  const getClusterLines = useCallback(() => {
    // Build a map of cluster -> sorted anchor nodes (brightest first)
    const clusterAnchors: Record<string, WorkflowNode[]> = {};
    nodes.forEach(n => {
      const sizeInfo = nodeSizeMap.get(n.node_id);
      if (!clusterAnchors[n.cluster_primary]) clusterAnchors[n.cluster_primary] = [];
      // Include anchors AND hub nodes as constellation points
      if (sizeInfo?.isAnchor || n.node_type === 'HUB' || n.node_type === 'CLUSTER_CENTER') {
        clusterAnchors[n.cluster_primary].push(n);
      }
    });
    // Fallback: if a cluster has no anchors, use its 3 largest nodes
    nodes.forEach(n => {
      if (!clusterAnchors[n.cluster_primary] || clusterAnchors[n.cluster_primary].length === 0) {
        clusterAnchors[n.cluster_primary] = nodes
          .filter(x => x.cluster_primary === n.cluster_primary)
          .slice(0, 3);
      }
    });

    const lines: Array<{ x1: number; y1: number; x2: number; y2: number; key: string; source: string; target: string; }> = [];
    const addedPairs = new Set<string>();

    // 1. Within-cluster lines: connect anchor nodes in a chain (like drawing a constellation)
    Object.entries(clusterAnchors).forEach(([clusterId, anchors]) => {
      // Sort anchors spatially to form a visually pleasing chain
      if (anchors.length < 2) return;
      // Sort by angle from cluster centroid so lines trace the cluster shape
      const cx = anchors.reduce((s, n) => s + n.x, 0) / anchors.length;
      const cy = anchors.reduce((s, n) => s + n.y, 0) / anchors.length;
      const sorted = [...anchors].sort((a, b) =>
        Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx)
      );
      // Connect in a ring around the cluster
      for (let i = 0; i < sorted.length; i++) {
        const a = sorted[i];
        const b = sorted[(i + 1) % sorted.length];
        const key = [a.node_id, b.node_id].sort().join('-');
        if (!addedPairs.has(key)) {
          addedPairs.add(key);
          lines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, key, source: clusterId, target: clusterId });
        }
      }
    });

    // 2. Between-cluster lines: connect the nearest anchor node of each affinity pair
    Object.entries(CLUSTER_AFFINITY_MAP).forEach(([source, targets]) => {
      const sourceAnchors = clusterAnchors[source];
      if (!sourceAnchors || sourceAnchors.length === 0) return;
      targets.forEach((target) => {
        const targetAnchors = clusterAnchors[target];
        if (!targetAnchors || targetAnchors.length === 0) return;
        const dedupeKey = [source, target].sort().join('--');
        if (addedPairs.has(dedupeKey)) return;
        addedPairs.add(dedupeKey);
        // Find the closest pair of anchor nodes between the two clusters
        let minDist = Infinity;
        let bestSrc = sourceAnchors[0], bestTgt = targetAnchors[0];
        sourceAnchors.forEach(s => {
          targetAnchors.forEach(t => {
            const d = Math.hypot(s.x - t.x, s.y - t.y);
            if (d < minDist) { minDist = d; bestSrc = s; bestTgt = t; }
          });
        });
        lines.push({ x1: bestSrc.x, y1: bestSrc.y, x2: bestTgt.x, y2: bestTgt.y, key: dedupeKey, source, target });
      });
    });

    return lines;
  }, [clusterCentroids, nodes, nodeSizeMap]);

  // ─── PERSPECTIVE GRID (PROMPT 25) ─────────────────────────────────────────────
  const gridLines = useMemo(() => {
    const lines = [];
    const vpX = CANVAS_W / 2;
    const vpY = CANVAS_H * 0.85;
    const horizon = CANVAS_H * 0.5;

    // 12 Horizontal lines with perspective spacing (bunching at the horizon)
    for (let i = 0; i < 12; i++) {
      const t = i / 11;
      const y = horizon + (CANVAS_H - horizon) * (t * t);
      lines.push({ x1: 0, y1: y, x2: CANVAS_W, y2: y });
    }

    // 8 Radial lines (4 left, 4 right) to vanishing point
    for (let i = 0; i < 4; i++) {
      const t = i / 3;
      const yEdge = horizon + (CANVAS_H - horizon) * t;
      lines.push({ x1: vpX, y1: vpY, x2: 0, y2: yEdge });
      lines.push({ x1: vpX, y1: vpY, x2: CANVAS_W, y2: yEdge });
    }

    return lines;
  }, []);

  // Setup d3-zoom on SVG
  useEffect(() => {
    if (!svgRef.current || view !== 'map') return;

    const svg = d3.select(svgRef.current);

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 4])
      .on('zoom', (event) => {
        transformRef.current = event.transform;
        const g = svg.select<SVGGElement>('g.canvas-group');
        g.attr('transform', event.transform.toString());
        
        // Perspective Grid visibility
        const grid = svg.select<SVGGElement>('g.perspective-grid');
        if (event.transform.k > 0.6) {
          grid.classed('grid-visible', true).classed('grid-hidden', false);
        } else {
          grid.classed('grid-visible', false).classed('grid-hidden', true);
        }
      });

    svg.call(zoom);
    zoomRef.current = zoom;

    // Initial: fit canvas to viewport so everything is visible
    const container = containerRef.current;
    if (container) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const initialScale = Math.min(vw / CANVAS_W, vh / CANVAS_H) * 0.85;
      
      const initialX = (vw - CANVAS_W * initialScale) / 2;
      const initialY = (vh - CANVAS_H * initialScale) / 2;

      const initialTransform = d3.zoomIdentity
        .translate(initialX, initialY)
        .scale(initialScale);
        
      svg.call(zoom.transform, initialTransform);
    }

    return () => {
      svg.on('.zoom', null);
    };
  }, [view, nodes]);

  // Track mouse position for near-hover effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Check if node is near-hover
  const isNearHover = useCallback((node: WorkflowNode): boolean => {
    const t = transformRef.current;
    const nx = t.applyX(node.x);
    const ny = t.applyY(node.y);
    const dist = Math.sqrt((mousePos.x - nx) ** 2 + (mousePos.y - ny) ** 2);
    return dist < 80;
  }, [mousePos]);

  const lines = getClusterLines();

  return (
    <div
      className="constellation-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <StarField />

      {/* Industry filter bar */}
      <div 
        className="constellation-filter-bar" 
        role="group" 
        aria-label="Filter by industry"
      >
        <button
          className={`filter-tab${activeFilter === 'all' ? ' active' : activeFilter !== 'all' ? ' inactive' : ''}`}
          onClick={() => onFilterChange('all')}
          id="filter-all"
        >
          ALL
        </button>
        {INDUSTRIES.map((ind) => (
          <button
            key={ind.id}
            id={`filter-${ind.id}`}
            className={`filter-tab${
              activeFilter === ind.id ? ' active' :
              activeFilter !== 'all' ? ' inactive' : ''
            }`}
            onClick={() => onFilterChange(ind.id)}
          >
            {ind.label}
          </button>
        ))}
      </div>

      {/* View toggle */}
      <div className="view-toggle" role="group" aria-label="Switch between map and index view">
        <button
          className={`view-toggle-btn${view === 'map' ? ' active' : ''}`}
          onClick={() => setView('map')}
          id="view-toggle-map"
          aria-pressed={view === 'map'}
        >
          MAP
        </button>
        <button
          className={`view-toggle-btn${view === 'index' ? ' active' : ''}`}
          onClick={() => setView('index')}
          id="view-toggle-index"
          aria-pressed={view === 'index'}
        >
          INDEX
        </button>
      </div>



      {/* ── Map view ─────────────────────────────────────────────────────────── */}
      {view === 'map' && (
        <>
          <svg
            ref={svgRef}
            className={`constellation-svg phase-${canvasPhase}`}
            aria-label="Operational intelligence constellation map"
            role="img"
            style={{ touchAction: 'none' }}
          >
            <defs>
              {/* Fallback white glow gradients (kept for legacy) */}
              <radialGradient id="glow-anchor" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(242,238,228,0.70)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="glow-primary" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(242,238,228,0.40)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="glow-secondary" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(242,238,228,0.20)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Soft blur for optical flares */}
              <filter id="flare-blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.8"/>
                </feComponentTransfer>
              </filter>
              <filter id="core-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>

              {/* Per-cluster colored star glow radialGradients */}
              {Object.entries(CLUSTER_COLORS).map(([id, color]) => (
                <radialGradient key={`sglow-${id}`} id={`star-glow-${id.replace(/[\s&]+/g, '-')}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={color} stopOpacity="0.50" />
                  <stop offset="40%" stopColor={color} stopOpacity="0.15" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </radialGradient>
              ))}

              {/* Cluster bloom radialGradients */}
              {Object.entries(CLUSTER_COLORS).map(([id, color]) => (
                <radialGradient key={id} id={`bloom-${id.replace(/\s+/g, '-')}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={color} stopOpacity="0.08" />
                  <stop offset="30%" stopColor={color} stopOpacity="0.03" />
                  <stop offset="70%" stopColor={color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <g className="canvas-group">
              {/* 0. PERSPECTIVE GRID FLOOR (PROMPT 25) */}
              <g className="perspective-grid" style={{ pointerEvents: 'none' }}>
                {gridLines.map((line, i) => (
                  <line
                    key={`grid-${i}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="var(--text-structural)"
                    strokeWidth="0.5"
                    opacity="0.04"
                  />
                ))}
              </g>

              {/* 1. BOUNDARY RING - renders first, at back of z-order */}
              <circle
                className="boundary-ring"
                cx={CANVAS_CX}
                cy={CANVAS_CY}
                r={680}
                fill="none"
                stroke={`var(--boundary-ring)`}
                strokeWidth={0.8}
                strokeDasharray="2 18"
                pointerEvents="none"
              />

              {/* 2. CLUSTER BLOOM (ORGANIC FAINT GLOW) */}
              {clusterCentroids.map((bc) => (
                <circle
                  key={`bloom-${bc.id.replace(/\s+/g, '-')}`}
                  cx={bc.cx}
                  cy={bc.cy}
                  r={450}
                  fill={`url(#bloom-${bc.id.replace(/\s+/g, '-')})`}
                  style={{ pointerEvents: 'none' }}
                />
              ))}

              {/* 3. KINETIC LINES */}
              {lines.map((line, i) => {
                const isLineVisible = activeFilter === 'all' || 
                                      activeClusters.has(line.source) || 
                                      activeClusters.has(line.target);
                return (
                  <g key={line.key}>
                    <line
                      className="kinetic-line"
                      x1={line.x1} y1={line.y1}
                      x2={line.x2} y2={line.y2}
                      style={{ 
                        animationDelay: `${(i * 2.3) % 10}s`,
                        opacity: isLineVisible ? undefined : 0.03,
                        transition: 'opacity 400ms ease'
                      }}
                    />
                  </g>
                );
              })}

              {/* 4. NODES — variable radius based on hierarchy */}
              {nodes.map((node) => {
                const isFiltered = activeFilter !== 'all' &&
                  toSlug(node.industry_primary) !== activeFilter &&
                  (node.industry_secondary ? toSlug(node.industry_secondary) : undefined) !== activeFilter;
                const isNear = !isFiltered && isNearHover(node);
                const sizeInfo = nodeSizeMap.get(node.node_id) ?? { r: 8, isAnchor: false };
                const r = sizeInfo.r + (isNear ? 2 : 0);
                const { isAnchor } = sizeInfo;

                let magneticDx = 0;
                let magneticDy = 0;

                if (isNear) {
                  const t = transformRef.current;
                  const invertedMouseX = t.invertX(mousePos.x);
                  const invertedMouseY = t.invertY(mousePos.y);
                  const canvasDx = invertedMouseX - node.x;
                  const canvasDy = invertedMouseY - node.y;
                  // Tiny, barely perceptible subtle shift (0.02 instead of 0.15)
                  magneticDx = canvasDx * 0.02;
                  magneticDy = canvasDy * 0.02;
                }

                // Cluster color for star glow
                const clusterColor = CLUSTER_COLORS[node.cluster_primary] ?? '#ffffff';
                const clusterGlowId = `star-glow-${node.cluster_primary.replace(/[\s&]+/g, '-')}`;
                // Glow halo radius
                const glowR = isAnchor ? 40 : r === 14 ? 26 : 16;
                // Spike length scales with node importance
                const spikeLen = isAnchor ? 28 : r === 14 ? 18 : 10;
                // Core dot radius (the actual bright point)
                const coreR = isAnchor ? 3.5 : r === 14 ? 2.2 : 1.4;
                // Spike count by node type
                const spikeCount = getSpikeCount(node.node_type);
                const spikePaths = buildSpikePaths(node.x, node.y, spikeLen, spikeCount);


                return (
                  <g
                    key={node.node_id}
                    className={`node-group ${!isFiltered ? 'node-visible' : 'node-dimmed'}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.full_name} - ${node.cluster_primary}`}
                    onClick={() => !isFiltered && onNodeClick(node)}
                    onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !isFiltered) { e.preventDefault(); onNodeClick(node); } }}
                    onTouchStart={(e) => { if (!isFiltered) { e.preventDefault(); onNodeClick(node); } }}
                    onMouseEnter={() => setHoveredCluster(node.cluster_primary)}
                    onMouseLeave={() => setHoveredCluster(null)}
                    style={{
                      cursor: isFiltered ? 'default' : 'pointer',
                      transform: `translate(${magneticDx}px, ${magneticDy}px)`,
                      transition: 'transform 0.15s ease-out',
                    }}
                  >
                    <g className="node-visuals">
                      {/* Soft colored bloom/halo */}
                      <circle
                        id={`glow-${node.node_id}`}
                        cx={node.x}
                        cy={node.y}
                        r={glowR}
                        fill={`url(#${clusterGlowId})`}
                        opacity={isFiltered ? 0.02 : 0.20}
                        pointerEvents="none"
                        style={{ transition: 'opacity 200ms ease' }}
                      />
                      {/* Optical flares (softened) */}
                      {spikePaths && (
                        <path
                          d={spikePaths}
                          fill={isFiltered ? 'rgba(255,255,255,0.05)' : clusterColor}
                          opacity={0.7}
                          filter="url(#flare-blur)"
                          pointerEvents="none"
                        />
                      )}
                      {/* Bright core point with internal glow */}
                      <circle
                        className={`node-star type-${node.node_type.toLowerCase()}${
                          isAnchor ? ' anchor' : ''
                        }${isFiltered ? ' filtered' : ''}${isNear ? ' near-hover' : ''}`}
                        cx={node.x}
                        cy={node.y}
                        r={coreR}
                        filter={!isFiltered ? "url(#core-glow)" : undefined}
                        fill={
                          isFiltered
                            ? 'rgba(255,255,255,0.10)'
                            : 'rgba(255,255,255,1.00)'
                        }
                      />
                      {/* Invisible hit target */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={Math.max(spikeLen + 4, 20)}
                        fill="transparent"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => {
                          hoveredIdRef.current = node.node_id;
                          const glowEl = document.getElementById(`glow-${node.node_id}`);
                          if (glowEl) glowEl.setAttribute('opacity', '0.45');
                          setHoveredNode(node);
                          onNodeHover?.(node);
                        }}
                        onMouseLeave={() => {
                          hoveredIdRef.current = null;
                          const glowEl = document.getElementById(`glow-${node.node_id}`);
                          if (glowEl) glowEl.setAttribute('opacity', '0.20');
                          setHoveredNode(null);
                          onNodeHover?.(null);
                        }}
                      />
                    </g>

                  </g>
                );
              })}

              {/* 5. EMPTY STATE */}
              {!nodes.some(n => 
                activeFilter === 'all' || 
                toSlug(n.industry_primary) === activeFilter || 
                (n.industry_secondary ? toSlug(n.industry_secondary) : undefined) === activeFilter
              ) && (
                <g className="empty-state" style={{ pointerEvents: 'none' }}>
                  <text 
                    x={CANVAS_CX} 
                    y={CANVAS_CY} 
                    textAnchor="middle" 
                    fill="var(--text-ghost)" 
                    fontSize="16" 
                    fontFamily="var(--font-mono)" 
                    letterSpacing="0.2em"
                  >
                    NO NODES MATCH FILTER IN THIS CONSTELLATION
                  </text>
                </g>
              )}
            </g>
          </svg>

          {/* ✨ LEGEND OVERLAY - React DOM, pointer-events: none ✨ */}
          <div className="legend-overlay">
            {/* LEFT LEGEND - Node Index */}
            <div className="node-index-legend" aria-label="Map navigation guide">
              <h3>NODE INDEX</h3>
              <ul>
                <li>
                  <div className="circle-icon">
                    <svg width="22" height="22"><circle cx="11" cy="11" r="10" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" /></svg>
                  </div>
                  <span>Cluster Anchor</span>
                </li>
                <li>
                  <div className="circle-icon">
                    <svg width="16" height="16"><circle cx="8" cy="8" r="7" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" /></svg>
                  </div>
                  <span>Core System</span>
                </li>
                <li>
                  <div className="circle-icon">
                    <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" /></svg>
                  </div>
                  <span>Sub-Process</span>
                </li>
              </ul>
            </div>
            <div className="cluster-legend" aria-label="Cluster legend">
              <h3>CLUSTERS</h3>
              <ul>
                {CLUSTERS.map((cluster) => (
                  <li key={cluster.id}>
                    <div 
                      className="cluster-dot"
                      style={{ background: CLUSTER_COLORS[cluster.id] ?? 'var(--text-secondary)' }}
                    />
                    <span>{cluster.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="reset-view-btn" onClick={handleResetView} aria-label="Reset map to default view">
              RESET VIEW
            </button>
          </div>
          {/* ── LEGEND BUTTON (mobile only) ── */}
          {isMobile && (
            <button
              className="legend-mobile-btn"
              onClick={() => setLegendOpen(true)}
              aria-label="Open legend"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="7" cy="7" r="2.5" fill="currentColor"/>
                <line x1="7" y1="1" x2="7" y2="0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="7" y1="14" x2="7" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="1" y1="7" x2="0" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="14" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              LEGEND
            </button>
          )}

          {/* ── LEGEND MODAL (mobile full-screen, must close to interact) ── */}
          {isMobile && legendOpen && (
            <div className="legend-modal-backdrop" role="dialog" aria-modal="true" aria-label="Map legend">
              <div className="legend-modal-panel">
                <div className="legend-modal-header">
                  <span className="legend-modal-title">MAP LEGEND</span>
                  <button
                    className="legend-modal-close"
                    onClick={() => setLegendOpen(false)}
                    aria-label="Close legend and explore map"
                  >
                    ✕
                  </button>
                </div>

                {/* Node types */}
                <div className="legend-modal-section">
                  <h4 className="legend-modal-section-title">NODE INDEX</h4>
                  <ul className="legend-modal-list">
                    <li>
                      <svg width="22" height="22"><circle cx="11" cy="11" r="10" fill="none" stroke="rgba(242,238,228,0.7)" strokeWidth="1.5"/></svg>
                      <span>Cluster Anchor</span>
                    </li>
                    <li>
                      <svg width="16" height="16"><circle cx="8" cy="8" r="7" fill="none" stroke="rgba(242,238,228,0.6)" strokeWidth="1.5"/></svg>
                      <span>Core System</span>
                    </li>
                    <li>
                      <svg width="10" height="10"><circle cx="5" cy="5" r="4" fill="none" stroke="rgba(242,238,228,0.5)" strokeWidth="1.5"/></svg>
                      <span>Sub-Process</span>
                    </li>
                  </ul>
                </div>

                {/* Clusters */}
                <div className="legend-modal-section">
                  <h4 className="legend-modal-section-title">CLUSTERS</h4>
                  <ul className="legend-modal-list">
                    {CLUSTERS.map((cluster) => (
                      <li key={cluster.id}>
                        <div
                          className="legend-modal-dot"
                          style={{ background: CLUSTER_COLORS[cluster.id] ?? 'rgba(242,238,228,0.6)' }}
                        />
                        <span>{cluster.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="legend-modal-explore-btn"
                  onClick={() => setLegendOpen(false)}
                >
                  EXPLORE THE MAP →
                </button>
              </div>
            </div>
          )}

        </>
      )}

      {/* Index view */}
      {view === 'index' && (
        <IndexView
          nodes={nodes}
          activeFilter={activeFilter}
          onNodeClick={onNodeClick}
        />
      )}

      {/* Cluster hover label (kept for future use, currently hidden) */}
      <div
        className={`cluster-label-container${hoveredCluster ? ' visible' : ''}`}
        style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
      />
    </div>
  );
}

// ─── INDEX VIEW ───────────────────────────────────────────────────────────────

interface IndexViewProps {
  nodes: WorkflowNode[];
  activeFilter: string;
  onNodeClick: (node: WorkflowNode) => void;
}

function IndexView({ nodes, activeFilter, onNodeClick }: IndexViewProps) {
  const [search, setSearch] = useState('');

  const filteredNodes = nodes.filter((node) => {
    const matchesFilter =
      activeFilter === 'all' ||
      toSlug(node.industry_primary) === activeFilter ||
      (node.industry_secondary ? toSlug(node.industry_secondary) : undefined) === activeFilter;

    const matchesSearch =
      !search ||
      node.full_name.toLowerCase().includes(search.toLowerCase()) ||
      node.short_name.toLowerCase().includes(search.toLowerCase()) ||
      node.cluster_primary.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const byCluster = CLUSTERS.map((cluster) => ({
    cluster,
    nodes: filteredNodes.filter((n) => n.cluster_primary === cluster.id),
  })).filter((group) => group.nodes.length > 0);

  const totalVisible = filteredNodes.length;

  return (
    <div className="index-view-root">
      {/* ── Header strip ──────────────────────────────────────────────── */}
      <div className="index-view-header">
        <div className="index-view-title-row">
          <h2 className="index-view-title">SYSTEM INDEX</h2>
          <span className="index-view-count">{totalVisible} systems</span>
        </div>
        <input
          type="text"
          placeholder="Search by name, cluster..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="index-search-input"
          id="explorer-search"
          aria-label="Search AI systems"
        />
      </div>

      {/* ── Cluster sections ──────────────────────────────────────────── */}
      <div className="index-view-body">
        {byCluster.map(({ cluster, nodes: clusterNodes }, groupIdx) => {
          const accentColor = CLUSTER_COLORS[cluster.id] ?? 'rgba(242,238,228,0.4)';
          const sorted = [...clusterNodes].sort((a, b) => b.priority - a.priority);
          return (
            <section
              key={cluster.id}
              className="index-cluster-section"
              style={{
                animationDelay: `${groupIdx * 80}ms`,
                '--accent': accentColor,
              } as React.CSSProperties}
            >
              {/* Cluster heading */}
              <div className="index-cluster-heading">
                <div
                  className="index-cluster-bar"
                  style={{ background: accentColor }}
                />
                <div className="index-cluster-meta">
                  <h3 className="index-cluster-name">{cluster.label}</h3>
                  <span
                    className="index-cluster-badge"
                    style={{
                      color: accentColor,
                      borderColor: accentColor,
                      boxShadow: `0 0 8px ${accentColor}33`,
                    }}
                  >
                    {sorted.length}
                  </span>
                </div>
              </div>

              {/* Node rows */}
              <div className="index-node-list">
                {sorted.map((node, nodeIdx) => (
                  <button
                    key={node.node_id}
                    onClick={() => onNodeClick(node)}
                    className="index-node-row"
                    style={{ animationDelay: `${groupIdx * 80 + nodeIdx * 30}ms` }}
                  >
                    <span className="index-node-id">{node.node_id}</span>
                    <span className="index-node-name-editorial">{node.full_name}</span>
                    <span className="index-node-type-tag">{node.node_type.replace('_', ' ')}</span>
                    <svg
                      className="index-node-arrow"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </section>
          );
        })}

        {byCluster.length === 0 && (
          <div className="index-empty-state">
            <span>No systems match your search.</span>
          </div>
        )}
      </div>
    </div>
  );
}
