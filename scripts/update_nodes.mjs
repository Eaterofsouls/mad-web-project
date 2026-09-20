import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nodesFile = path.resolve(__dirname, '../src/data/nodes.ts');
const resDir = path.resolve(__dirname, '../../../res');

// Read nodes.ts
let nodesContent = fs.readFileSync(nodesFile, 'utf8');

// Extract the array string
const arrayStartStr = 'export const nodes: WorkflowNode[] = ';
const arrayStartIndex = nodesContent.indexOf(arrayStartStr) + arrayStartStr.length;
const arrayEndStr = '];\n\nexport const getNodeBySlug';
const arrayEndIndex = nodesContent.indexOf(arrayEndStr) + 1; // include the closing bracket

const arrayString = nodesContent.substring(arrayStartIndex, arrayEndIndex);

// Evaluate the array string to get the JS objects
let nodesArray;
try {
  nodesArray = new Function(`return ${arrayString};`)();
  console.log(`Successfully parsed nodes array. Total nodes: ${nodesArray.length}`);
} catch (e) {
  console.error('Failed to parse nodes array:', e);
  process.exit(1);
}

// Read the JSON files
const draftFiles = fs.readdirSync(resDir).filter(f => f.endsWith('.json'));
console.log(`Found draft files: ${draftFiles.join(', ')}`);

let updateCount = 0;

for (const file of draftFiles) {
  const filePath = path.join(resDir, file);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Update nodes
    for (const draftNode of data) {
      let targetNode = nodesArray.find(n => n.node_id === draftNode.node_id);
      
      // Fallback 1: EN to E mapping for Engineering
      if (!targetNode && draftNode.node_id.startsWith('EN')) {
        targetNode = nodesArray.find(n => n.node_id === draftNode.node_id.replace('EN', 'E'));
      }
      
      // Fallback 2: Match by full_name exact
      if (!targetNode && draftNode.full_name) {
        targetNode = nodesArray.find(n => n.full_name.trim().toLowerCase() === draftNode.full_name.trim().toLowerCase());
      }
      
      // Fallback 3: Try to find by partial name match (e.g. JSON has "(Packaging)")
      if (!targetNode && draftNode.full_name) {
        targetNode = nodesArray.find(n => {
          const baseName = n.full_name.trim().toLowerCase();
          const draftName = draftNode.full_name.trim().toLowerCase();
          return draftName.includes(baseName) || baseName.includes(draftName.replace(/ \(.*\)/, ''));
        });
      }

      if (targetNode) {
        if (draftNode.outcomes) targetNode.outcomes = draftNode.outcomes;
        if (draftNode.mechanism_ai_handles) targetNode.mechanism_ai_handles = draftNode.mechanism_ai_handles;
        if (draftNode.mechanism_you_handle) targetNode.mechanism_you_handle = draftNode.mechanism_you_handle;
        if (draftNode.mechanism_summary) targetNode.mechanism_summary = draftNode.mechanism_summary;
        if (draftNode.laymanSummary) targetNode.laymanSummary = draftNode.laymanSummary;
        if (draftNode.detailedExplanation) targetNode.detailedExplanation = draftNode.detailedExplanation;
        updateCount++;
      } else {
        console.warn(`Node ${draftNode.node_id} ("${draftNode.full_name}") not found in nodes.ts`);
      }
    }
  } catch (e) {
    console.error(`Failed to process ${file}:`, e);
  }
}

console.log(`Updated ${updateCount} nodes in memory. Writing to file...`);

// Serialize back to JSON string with 2 spaces
const newArrayString = JSON.stringify(nodesArray, null, 2);

// Reconstruct the file content
const newFileContent = nodesContent.substring(0, arrayStartIndex) + newArrayString + nodesContent.substring(arrayEndIndex);

// Write back
fs.writeFileSync(nodesFile, newFileContent, 'utf8');
console.log('Successfully updated nodes.ts');
