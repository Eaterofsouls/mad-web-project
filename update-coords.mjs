/**
 * update-coords.mjs
 * Updates x,y coordinates in nodes.ts to match real constellation shapes.
 * Reads the file line by line, finds "x": and "y": lines for each node,
 * and replaces them based on cluster+type mapping.
 *
 * Run: node update-coords.mjs
 */

import { readFileSync, writeFileSync } from 'fs';

// ─── CONSTELLATION COORDINATE POOLS ───────────────────────────────────────────
// Each entry: { anchor: [], hub: [], small: [] }
// anchor = CLUSTER_CENTER
// hub    = HUB
// small  = BRIDGE, PERIPHERAL, UNIVERSAL

const CONSTELLATION_COORDS = {
  'PRODUCTION INTELLIGENCE': {
    anchor: [
      { x: 820, y: 720 },
      { x: 880, y: 800 },
    ],
    hub: [
      { x: 760, y: 640 },
      { x: 820, y: 580 },
      { x: 900, y: 640 },
      { x: 950, y: 720 },
    ],
    small: [
      { x: 700, y: 700 },
      { x: 750, y: 780 },
      { x: 820, y: 860 },
      { x: 880, y: 900 },
      { x: 950, y: 800 },
      { x: 1000, y: 680 },
      { x: 840, y: 500 },
      { x: 780, y: 520 },
    ],
  },
  'SUPPLY CHAIN INTELLIGENCE': {
    anchor: [
      { x: 600, y: 1300 },
      { x: 680, y: 1260 },
    ],
    hub: [
      { x: 750, y: 1200 },
      { x: 840, y: 1180 },
      { x: 920, y: 1220 },
      { x: 980, y: 1300 },
    ],
    small: [
      { x: 520, y: 1360 },
      { x: 560, y: 1400 },
      { x: 620, y: 1440 },
      { x: 700, y: 1420 },
      { x: 1040, y: 1360 },
      { x: 1100, y: 1420 },
      { x: 1160, y: 1460 },
    ],
  },
  'QUALITY & COMPLIANCE': {
    anchor: [
      { x: 1700, y: 350 },
      { x: 1700, y: 500 },
    ],
    hub: [
      { x: 1600, y: 420 },
      { x: 1800, y: 420 },
    ],
    small: [
      { x: 1700, y: 250 },
      { x: 1700, y: 600 },
      { x: 1500, y: 420 },
      { x: 1900, y: 420 },
      { x: 1650, y: 380 },
      { x: 1750, y: 380 },
      { x: 1650, y: 460 },
      { x: 1750, y: 460 },
    ],
  },
  'COMMERCIAL INTELLIGENCE': {
    anchor: [
      { x: 1900, y: 600 },
      { x: 2050, y: 580 },
    ],
    hub: [
      { x: 1880, y: 720 },
      { x: 2030, y: 700 },
      { x: 1900, y: 840 },
      { x: 2060, y: 820 },
    ],
    small: [
      { x: 1870, y: 460 },
      { x: 2020, y: 440 },
      { x: 1890, y: 960 },
      { x: 2040, y: 940 },
      { x: 1910, y: 1080 },
      { x: 2050, y: 1060 },
      { x: 1860, y: 380 },
      { x: 2010, y: 360 },
    ],
  },
  'FINANCIAL INTELLIGENCE': {
    anchor: [
      { x: 1200, y: 280 },
      { x: 1350, y: 340 },
    ],
    hub: [
      { x: 1150, y: 360 },
      { x: 1300, y: 420 },
      { x: 1400, y: 300 },
      { x: 1100, y: 300 },
    ],
    small: [
      { x: 1200, y: 200 },
      { x: 1350, y: 200 },
      { x: 1250, y: 450 },
      { x: 1300, y: 460 },
      { x: 1150, y: 250 },
      { x: 1400, y: 380 },
    ],
  },
  'LOGISTICS & DISTRIBUTION': {
    anchor: [
      { x: 1200, y: 1100 },
      { x: 1200, y: 1200 },
    ],
    hub: [
      { x: 1050, y: 1000 },
      { x: 1350, y: 1000 },
      { x: 1000, y: 900 },
      { x: 1400, y: 900 },
    ],
    small: [
      { x: 900, y: 820 },
      { x: 1500, y: 820 },
      { x: 850, y: 750 },
      { x: 1550, y: 750 },
      { x: 1100, y: 1300 },
      { x: 1300, y: 1300 },
    ],
  },
  'MACHINE INTELLIGENCE': {
    anchor: [
      { x: 400, y: 500 },
      { x: 500, y: 420 },
    ],
    hub: [
      { x: 350, y: 600 },
      { x: 460, y: 560 },
      { x: 560, y: 480 },
      { x: 620, y: 420 },
    ],
    small: [
      { x: 300, y: 700 },
      { x: 380, y: 720 },
      { x: 440, y: 680 },
      { x: 660, y: 380 },
      { x: 700, y: 340 },
      { x: 320, y: 480 },
    ],
  },
  'MANAGEMENT SYNTHESIS': {
    anchor: [
      { x: 1680, y: 700 },
      { x: 1820, y: 640 },
    ],
    hub: [
      { x: 1600, y: 800 },
      { x: 1740, y: 760 },
      { x: 1880, y: 760 },
      { x: 1960, y: 680 },
    ],
    small: [
      { x: 1540, y: 860 },
      { x: 1680, y: 820 },
      { x: 1800, y: 820 },
      { x: 1940, y: 820 },
      { x: 2000, y: 740 },
      { x: 1620, y: 880 },
    ],
  },
};

// ─── PARSE NODES.TS ───────────────────────────────────────────────────────────
// Strategy: use regex to find each node block and map node_id -> { lineX, lineY, cluster, type }
const filePath = './src/data/nodes.ts';
const content = readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Build a full map: node_id -> { cluster, type, xLine (0-indexed), yLine (0-indexed) }
const nodeMap = {};

let currentNodeId = null;
let currentCluster = null;
let currentType = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const nodeIdMatch = line.match(/"node_id":\s*"([^"]+)"/);
  if (nodeIdMatch) {
    currentNodeId = nodeIdMatch[1];
    currentCluster = null;
    currentType = null;
    if (!nodeMap[currentNodeId]) {
      nodeMap[currentNodeId] = { cluster: null, type: null, xLine: -1, yLine: -1 };
    }
  }

  if (currentNodeId) {
    const clusterMatch = line.match(/"cluster_primary":\s*"([^"]+)"/);
    if (clusterMatch) {
      nodeMap[currentNodeId].cluster = clusterMatch[1];
      currentCluster = clusterMatch[1];
    }

    const typeMatch = line.match(/"node_type":\s*"([^"]+)"/);
    if (typeMatch) {
      nodeMap[currentNodeId].type = typeMatch[1];
      currentType = typeMatch[1];
    }

    // Match x and y — be careful: only exact "x": and "y": patterns
    const xMatch = line.match(/^\s*"x":\s*\d+,?\s*$/);
    if (xMatch && nodeMap[currentNodeId].xLine === -1) {
      nodeMap[currentNodeId].xLine = i;
    }

    const yMatch = line.match(/^\s*"y":\s*\d+,?\s*$/);
    if (yMatch && nodeMap[currentNodeId].yLine === -1) {
      nodeMap[currentNodeId].yLine = i;
    }
  }
}

// ─── ASSIGN COORDINATES PER CLUSTER ─────────────────────────────────────────
// Group nodes by cluster, sorted to get consistent assignment
const clusterGroups = {};
for (const [nodeId, info] of Object.entries(nodeMap)) {
  if (!info.cluster) continue;
  if (!clusterGroups[info.cluster]) clusterGroups[info.cluster] = { anchor: [], hub: [], small: [] };
  
  const t = info.type;
  if (t === 'CLUSTER_CENTER') {
    clusterGroups[info.cluster].anchor.push(nodeId);
  } else if (t === 'HUB') {
    clusterGroups[info.cluster].hub.push(nodeId);
  } else {
    // BRIDGE, PERIPHERAL, UNIVERSAL
    clusterGroups[info.cluster].small.push(nodeId);
  }
}

// Build the coordinate assignments: nodeId -> { x, y }
const coordAssignments = {};

for (const [cluster, groups] of Object.entries(clusterGroups)) {
  const pool = CONSTELLATION_COORDS[cluster];
  if (!pool) {
    console.warn(`No constellation coords defined for cluster: "${cluster}"`);
    continue;
  }

  // Sort node IDs for deterministic assignment
  groups.anchor.sort();
  groups.hub.sort();
  groups.small.sort();

  groups.anchor.forEach((nodeId, i) => {
    const coord = pool.anchor[i % pool.anchor.length];
    coordAssignments[nodeId] = coord;
  });

  groups.hub.forEach((nodeId, i) => {
    const coord = pool.hub[i % pool.hub.length];
    coordAssignments[nodeId] = coord;
  });

  groups.small.forEach((nodeId, i) => {
    const coord = pool.small[i % pool.small.length];
    coordAssignments[nodeId] = coord;
  });
}

// ─── APPLY COORDINATES TO FILE ───────────────────────────────────────────────
// Clone lines array, apply replacements at xLine and yLine
const newLines = [...lines];
let updatedCount = 0;

for (const [nodeId, info] of Object.entries(nodeMap)) {
  const coord = coordAssignments[nodeId];
  if (!coord) {
    console.warn(`No coord assignment for node: ${nodeId} (cluster: ${info.cluster})`);
    continue;
  }

  if (info.xLine >= 0) {
    const originalX = newLines[info.xLine];
    const indent = originalX.match(/^(\s*)/)[1];
    const hasComma = originalX.trim().endsWith(',');
    newLines[info.xLine] = `${indent}"x": ${coord.x}${hasComma ? ',' : ''}`;
    updatedCount++;
  }

  if (info.yLine >= 0) {
    const originalY = newLines[info.yLine];
    const indent = originalY.match(/^(\s*)/)[1];
    const hasComma = originalY.trim().endsWith(',');
    newLines[info.yLine] = `${indent}"y": ${coord.y}${hasComma ? ',' : ''}`;
    updatedCount++;
  }
}

// ─── WRITE OUTPUT ─────────────────────────────────────────────────────────────
writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log(`✅ Done. Updated ${updatedCount} coordinate lines across ${Object.keys(coordAssignments).length} nodes.`);
console.log('\nCluster summary:');
for (const [cluster, groups] of Object.entries(clusterGroups)) {
  const total = groups.anchor.length + groups.hub.length + groups.small.length;
  console.log(`  ${cluster}: ${total} nodes (${groups.anchor.length} anchor, ${groups.hub.length} hub, ${groups.small.length} small)`);
}
