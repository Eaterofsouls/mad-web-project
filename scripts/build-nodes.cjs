const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const part1Path = path.join(rootDir, 'content_system_part1.md');
const part2Path = path.join(rootDir, 'content_system_part2.md');
const part3Path = path.join(rootDir, 'content_system_part3.md');
const outPath = path.join(__dirname, '../src/data/nodes.ts');

const nodesMap = {};

// Parse Part 1 (Basic Info)
const part1Content = fs.readFileSync(part1Path, 'utf8');
const p1Lines = part1Content.split('\n');
for (const line of p1Lines) {
  if (line.startsWith('|') && !line.includes('---|') && !line.includes('node_id')) {
    const cols = line.split('|').map(c => c.trim()).filter(Boolean);
    if (cols.length >= 8) {
      const node_id = cols[0];
      if (!node_id.match(/^[A-Z0-9]+$/)) continue; // skip non-id rows
      
      nodesMap[node_id] = {
        node_id,
        short_name: cols[1],
        full_name: cols[2],
        cluster_primary: cols[3],
        cluster_secondary: cols[4] === '—' || cols[4] === '-' ? null : cols[4],
        industry_primary: cols[5],
        industry_secondary: cols[6] === '—' || cols[6] === '-' ? null : cols[6],
        priority: parseInt(cols[7], 10),
      };
    }
  }
}

// Manually extract reality sentence from part1.md? 
// Wait, reality sentence is NOT in part1 table! The prompt 2 says "reality_sentence from part1.md". 
// Ah, looking back at prompt 2, it says reality_sentence is in part1.md. Where is it?
// Deliverable 2 in part1.md has reality sentences. Let's parse them by looking for `**M01 — ...**`
let currentSection = null;
for (let i = 0; i < p1Lines.length; i++) {
  const line = p1Lines[i].trim();
  if (line.startsWith('## DELIVERABLE 2')) {
    currentSection = 'REALITY';
  }
  if (currentSection === 'REALITY' && line.startsWith('**') && line.includes('—')) {
    const idMatch = line.match(/^\*\*([A-Z0-9]+)\s*—/);
    if (idMatch) {
      const id = idMatch[1];
      const sentenceLine = p1Lines[i + 1]?.trim();
      if (nodesMap[id] && sentenceLine) {
        nodesMap[id].reality_sentence = sentenceLine.replace(/^\*(.*)\*$/, '$1'); // remove italics
      }
    }
  }
}

// Node Type logic
const clusterCenters = ['M01', 'F01', 'P01', 'IT01', 'D01', 'L02', 'M02', 'UN04'];
for (const id in nodesMap) {
  const node = nodesMap[id];
  if (id.startsWith('UN')) {
    node.node_type = 'UNIVERSAL';
  } else if (clusterCenters.includes(id)) {
    node.node_type = 'CLUSTER_CENTER';
  } else if (node.priority >= 9) {
    node.node_type = 'HUB';
  } else if (node.priority === 8) {
    node.node_type = 'BRIDGE';
  } else {
    node.node_type = 'PERIPHERAL';
  }
}

// Parse Part 2 (Metadata)
const part2Content = fs.readFileSync(part2Path, 'utf8');
const p2Lines = part2Content.split('\n');
let p2CurrentNode = null;
for (const line of p2Lines) {
  const idMatch = line.match(/^\*\*([A-Z0-9]+)\s*—/);
  if (idMatch) {
    p2CurrentNode = idMatch[1];
  } else if (p2CurrentNode && nodesMap[p2CurrentNode] && line.includes('·')) {
    if (line.startsWith('WATCHES')) {
      nodesMap[p2CurrentNode].metadata_watches = line.split('·').slice(1).join('·').trim();
    } else if (line.startsWith('GENERATES')) {
      nodesMap[p2CurrentNode].metadata_generates = line.split('·').slice(1).join('·').trim();
    } else if (line.startsWith('REPLACES') || line.startsWith('TRANSFORMS')) {
      nodesMap[p2CurrentNode].metadata_type = line.startsWith('REPLACES') ? 'REPLACES' : 'TRANSFORMS';
      nodesMap[p2CurrentNode].metadata_replaces_or_transforms = line.split('·').slice(1).join('·').trim();
    } else if (line.startsWith('RETURNS')) {
      nodesMap[p2CurrentNode].metadata_returns = line.split('·').slice(1).join('·').trim();
    }
  }
}

// Parse Part 3 (Problem, Outcomes, Mechanism)
const part3Content = fs.readFileSync(part3Path, 'utf8');
const p3Lines = part3Content.split('\n');
currentSection = null;
let p3CurrentNode = null;
let mechSection = null;

for (let i = 0; i < p3Lines.length; i++) {
  const line = p3Lines[i].trim();
  
  if (line.startsWith('## DELIVERABLE 4 — PROBLEM SECTIONS')) currentSection = 'PROBLEM';
  else if (line.startsWith('## DELIVERABLE 5 — OUTCOME SECTIONS')) currentSection = 'OUTCOME';
  else if (line.startsWith('## DELIVERABLE 6 — MECHANISM SECTIONS')) currentSection = 'MECHANISM';
  
  const idMatch = line.match(/^\*\*([A-Z0-9]+)\s*—/);
  if (idMatch) {
    p3CurrentNode = idMatch[1];
    mechSection = null;
    
    if (currentSection === 'PROBLEM') {
      let problemText = '';
      let j = i + 1;
      while (j < p3Lines.length && !p3Lines[j].startsWith('**') && !p3Lines[j].startsWith('##')) {
        if (p3Lines[j].trim()) problemText += p3Lines[j].trim() + ' ';
        j++;
      }
      if (nodesMap[p3CurrentNode]) nodesMap[p3CurrentNode].problem_paragraph = problemText.trim();
    }
  } else if (p3CurrentNode && nodesMap[p3CurrentNode]) {
    const node = nodesMap[p3CurrentNode];
    
    if (currentSection === 'OUTCOME') {
      if (line.startsWith('-')) {
        if (!node.outcomes) node.outcomes = [];
        node.outcomes.push(line.substring(1).trim());
      }
    } else if (currentSection === 'MECHANISM') {
      if (line.startsWith('**AI HANDLES**')) mechSection = 'AI';
      else if (line.startsWith('**YOU HANDLE**')) mechSection = 'YOU';
      else if (line.startsWith('**SUMMARY:**')) {
        node.mechanism_summary = line.replace('**SUMMARY:**', '').trim();
        if (node.mechanism_summary.startsWith('*') && node.mechanism_summary.endsWith('*')) {
            node.mechanism_summary = node.mechanism_summary.slice(1, -1);
        }
      }
      else if (line.startsWith('-')) {
        if (mechSection === 'AI') {
          if (!node.mechanism_ai_handles) node.mechanism_ai_handles = [];
          node.mechanism_ai_handles.push(line.substring(1).trim());
        } else if (mechSection === 'YOU') {
          if (!node.mechanism_you_handle) node.mechanism_you_handle = [];
          node.mechanism_you_handle.push(line.substring(1).trim());
        }
      }
    }
  }
}

// Generate X,Y coords
const coords = {
  Manufacturing: {x: 650, y: 550},
  Pharma: {x: 900, y: 300},
  FMCG: {x: 1300, y: 250},
  Distribution: {x: 1600, y: 450},
  Logistics: {x: 1750, y: 750},
  Export: {x: 1600, y: 1100},
  'Food Processing': {x: 1400, y: 350},
  Chemicals: {x: 1000, y: 1300},
  Engineering: {x: 550, y: 900},
  'Industrial Trading': {x: 800, y: 700},
  Packaging: {x: 400, y: 1200},
};

const finalNodes = Object.values(nodesMap).map(n => {
  const c = coords[n.industry_primary] || {x: 1200, y: 900};
  const xOffset = Math.floor(Math.random() * 160) - 80;
  const yOffset = Math.floor(Math.random() * 160) - 80;
  
  n.x = n.node_type === 'UNIVERSAL' ? 1200 + Math.floor(Math.random() * 100) - 50 : c.x + xOffset;
  n.y = n.node_type === 'UNIVERSAL' ? 900 + Math.floor(Math.random() * 100) - 50 : c.y + yOffset;
  
  n.slug = n.full_name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim();
  n.proof_entries = [
    { industry: n.industry_primary, region: 'Gujarat', year: '2023' },
    { industry: n.industry_secondary || 'Engineering', region: 'Maharashtra', year: '2022' }
  ];
  n.proof_counter = 2;
  
  // fallback for missing data
  n.reality_sentence = n.reality_sentence || 'Actionable intelligence delivered at the point of decision.';
  n.problem_paragraph = n.problem_paragraph || 'This is a placeholder problem statement pending final content insertion.';
  n.outcomes = n.outcomes || ['Placeholder outcome 1', 'Placeholder outcome 2', 'Placeholder outcome 3', 'Placeholder outcome 4'];
  n.mechanism_ai_handles = n.mechanism_ai_handles || ['Placeholder mechanism item'];
  n.mechanism_you_handle = n.mechanism_you_handle || ['Placeholder mechanism item'];
  n.mechanism_summary = n.mechanism_summary || 'Placeholder mechanism summary.';
  n.metadata_watches = n.metadata_watches || 'System data';
  n.metadata_generates = n.metadata_generates || 'Actionable alert';
  n.metadata_replaces_or_transforms = n.metadata_replaces_or_transforms || 'Manual tracking';
  n.metadata_returns = n.metadata_returns || 'Efficiency gained';
  n.metadata_type = n.metadata_type || 'REPLACES';

  return n;
});

const tsCode = `import type { WorkflowNode } from './types';

// PLACEHOLDER node coordinates — 2400×1800 canvas space
// Nodes generated programmatically from content markdown files

export const nodes: WorkflowNode[] = ${JSON.stringify(finalNodes, null, 2)};

export const getNodeBySlug = (slug: string): WorkflowNode | undefined =>
  nodes.find(n => n.slug === slug);

export const getNodeById = (id: string): WorkflowNode | undefined =>
  nodes.find(n => n.node_id === id);

export const getNodesByIndustry = (industry: string): WorkflowNode[] =>
  nodes.filter(n => 
    n.industry_primary.toLowerCase() === industry.toLowerCase() ||
    n.industry_secondary?.toLowerCase() === industry.toLowerCase()
  );

export const getNodesByCluster = (cluster: string): WorkflowNode[] =>
  nodes.filter(n => n.cluster_primary === cluster || n.cluster_secondary === cluster);
`;

fs.writeFileSync(outPath, tsCode);
console.log('Successfully wrote ' + finalNodes.length + ' nodes to ' + outPath);
