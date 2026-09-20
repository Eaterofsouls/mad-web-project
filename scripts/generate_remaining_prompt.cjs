const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\praka\\.gemini\\antigravity\\brain\\c45e675f-c868-42cc-8b91-b10f19397bf1\\research_prompt_for_83_systems.md';
const outputPath = 'C:\\Users\\praka\\.gemini\\antigravity\\brain\\c45e675f-c868-42cc-8b91-b10f19397bf1\\remaining_research_prompt.md';

const content = fs.readFileSync(inputPath, 'utf8');

// Split by sections starting with "### "
const parts = content.split('\n### ');

const header = parts[0];
const systems = parts.slice(1);

const filteredSystems = systems.filter(sys => {
  // Check what it starts with
  const idMatch = sys.match(/^([A-Z]+)\d+\s/);
  if (!idMatch) return true; // keep if it doesn't match the pattern just in case
  
  const prefix = idMatch[1];
  // Remove M (Manufacturing), EN (Engineering), C (Chemicals), P (Pharma - but keep PK for Packaging, FP for Food Processing)
  if (prefix === 'M' || prefix === 'EN' || prefix === 'C' || prefix === 'P') {
    return false; // exclude
  }
  return true; // keep the rest
});

// Reconstruct
let newContent = header + '\n### ' + filteredSystems.join('\n### ');

// Update the intro text
newContent = newContent.replace('**83 AI business systems**', '**46 remaining AI business systems**');
newContent = newContent.replace('All 83 systems', 'The remaining 46 systems');
newContent = newContent.replace('all 83 systems', 'the remaining 46 systems');
newContent = newContent.replace('all 83 objects', 'all 46 objects');

// Update priority order
newContent = newContent.replace(/1\. Manufacturing cluster.*?\n2\. Engineering cluster.*?\n3\. Chemicals cluster.*?\n4\. Pharma cluster.*?\n/s, '');
newContent = newContent.replace(/5\. FMCG/, '1. FMCG');
newContent = newContent.replace(/6\. Distribution/, '2. Distribution');
newContent = newContent.replace(/7\. Logistics/, '3. Logistics');
newContent = newContent.replace(/8\. Export/, '4. Export');
newContent = newContent.replace(/9\. Industrial Trading/, '5. Industrial Trading');
newContent = newContent.replace(/10\. Packaging/, '6. Packaging');


fs.writeFileSync(outputPath, newContent, 'utf8');
console.log('Successfully generated remaining_research_prompt.md');
