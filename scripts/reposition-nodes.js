import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nodesPath = path.join(__dirname, '../src/data/nodes.ts');
let content = fs.readFileSync(nodesPath, 'utf8');

const CLUSTERS = [
  'PRODUCTION INTELLIGENCE',
  'SUPPLY CHAIN INTELLIGENCE',
  'QUALITY & COMPLIANCE',
  'COMMERCIAL INTELLIGENCE',
  'FINANCIAL INTELLIGENCE',
  'LOGISTICS & DISTRIBUTION',
  'MACHINE INTELLIGENCE',
  'MANAGEMENT SYNTHESIS'
];

const CENTER_X = 1200;
const CENTER_Y = 900;
const RADIUS = 650;

const clusterCenters = {};
CLUSTERS.forEach((cluster, i) => {
  const angle = (i / CLUSTERS.length) * Math.PI * 2;
  clusterCenters[cluster] = {
    x: CENTER_X + Math.cos(angle) * RADIUS,
    y: CENTER_Y + Math.sin(angle) * RADIUS,
  };
});

const modifiedContent = content.replace(/\{[^{}]*"node_id"[^{}]*\}/g, (block) => {
  const idMatch = block.match(/"node_id":\s*"([^"]+)"/);
  const clusterMatch = block.match(/"cluster_primary":\s*"([^"]+)"/);
  if (!idMatch || !clusterMatch) return block;
  
  const id = idMatch[1];
  const cluster = clusterMatch[1];
  
  let newX = CENTER_X;
  let newY = CENTER_Y;
  
  if (cluster && clusterCenters[cluster]) {
    const scatterR = Math.random() * 200;
    const scatterTheta = Math.random() * Math.PI * 2;
    newX = Math.round(clusterCenters[cluster].x + Math.cos(scatterTheta) * scatterR);
    newY = Math.round(clusterCenters[cluster].y + Math.sin(scatterTheta) * scatterR);
  } else {
    const scatterR = Math.random() * 100;
    const scatterTheta = Math.random() * Math.PI * 2;
    newX = Math.round(CENTER_X + Math.cos(scatterTheta) * scatterR);
    newY = Math.round(CENTER_Y + Math.sin(scatterTheta) * scatterR);
  }
  
  let newBlock = block.replace(/"x":\s*-?\d+,/, `"x": ${newX},`);
  newBlock = newBlock.replace(/"y":\s*-?\d+,/, `"y": ${newY},`);
  
  return newBlock;
});

fs.writeFileSync(nodesPath, modifiedContent);
console.log('Nodes repositioned successfully via JSON block regex.');
