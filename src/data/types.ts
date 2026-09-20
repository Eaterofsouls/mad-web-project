// MAD — Node Data Types
// MASTER SOURCE: MAD_MASTER_CONSOLIDATION.md Part 3

export type ClusterName =
  | 'PRODUCTION INTELLIGENCE'
  | 'SUPPLY CHAIN INTELLIGENCE'
  | 'QUALITY & COMPLIANCE'
  | 'COMMERCIAL INTELLIGENCE'
  | 'FINANCIAL INTELLIGENCE'
  | 'LOGISTICS & DISTRIBUTION'
  | 'MACHINE INTELLIGENCE'
  | 'MANAGEMENT SYNTHESIS'
  | 'REVENUE OPERATIONS'
  | 'KNOWLEDGE & DELIVERY INTELLIGENCE';

export type IndustryName =
  | 'Manufacturing'
  | 'Pharma'
  | 'FMCG'
  | 'Distribution'
  | 'Logistics'
  | 'Packaging'
  | 'Engineering'
  | 'Chemicals'
  | 'Export'
  | 'Industrial Trading'
  | 'IT & SaaS'
  | 'Agencies'
  | 'FinTech'
  | 'Professional Services';

export type NodeType = 'UNIVERSAL' | 'HUB' | 'BRIDGE' | 'CLUSTER_CENTER' | 'PERIPHERAL';
export type MetadataType = 'REPLACES' | 'TRANSFORMS';

export type WatermarkType =
  | 'sensor'
  | 'signal'
  | 'network'
  | 'flow'
  | 'data'
  | 'logistics'
  | 'chemical'
  | 'pharma'
  | 'generic';

export interface ProofEntry {
  industry: string;
  region: string;
  year: string;
}

// Optional proof citation block — links a node to a real, named case study.
// isPlaceholder: true means the citation uses Option B proxy evidence (problem-at-scale data)
// rather than a named company deployment.
export interface ProofCitation {
  company: string;
  system: string;
  date: string;
  result: string;
  source: string;
  isPlaceholder?: boolean;
}

export interface WorkflowNode {
  node_id: string;
  short_name: string;         // ≤28 chars, for hover labels
  full_name: string;          // complete name for Signal scramble
  reality_sentence: string;   // ≤15 words, present tense
  cluster_primary: ClusterName;
  cluster_secondary: ClusterName | null;
  industry_primary: IndustryName;
  industry_secondary: IndustryName | null;
  priority: 5 | 6 | 7 | 8 | 9 | 10;
  node_type: NodeType;
  x: number;                  // canvas coordinate (2400×1800 space)
  y: number;                  // canvas coordinate
  metadata_watches: string;
  metadata_generates: string;
  metadata_replaces_or_transforms: string;
  metadata_returns: string;
  metadata_type: MetadataType;
  problem_paragraph: string;
  outcomes: string[];         // 4 outcomes, first with specific number
  mechanism_ai_handles: string[];  // max 5 items
  mechanism_you_handle: string[];  // max 5 items
  mechanism_summary: string;
  proof_entries: ProofEntry[];
  proof_counter: number;
  slug: string;               // kebab-case of full_name

  // ─── EXTENDED FIELDS (PROMPT 03) ───────────────────────────────────────────

  // Proof citation: links this node to a real or proxy case study from PROOF_CITATIONS_RESEARCH.md
  proofCitation?: ProofCitation;

  // Plain-language summary for non-technical visitors and the Industries page cards
  laymanSummary?: string;

  // Full paragraph explanation of how the system works — used on the detail page
  detailedExplanation?: string;

  // Controls which SVG watermark renders in the background of the detail page
  watermarkType?: WatermarkType;

  // ─── PROSPECT ENGINE FLAGS ─────────────────────────────────────────────────

  // Marks this node as the flagship Prospect Engine system (renders differently in Explorer)
  isProspectEngine?: boolean;

  // Phase names for the rotating phase loop display on the Prospect Engine detail page
  prospectPhases?: string[];
}
