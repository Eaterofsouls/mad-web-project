// MAD — Clusters + Industries Data
// MASTER SOURCE: MAD_MASTER_CONSOLIDATION.md

export const CLUSTERS = [
  {
    id: 'PRODUCTION INTELLIGENCE',
    label: 'PRODUCTION INTELLIGENCE',
    subtitle: 'Prediction, scheduling, and planning before the floor acts',
    ghostWatermark: 'PRODUCTION',
  },
  {
    id: 'SUPPLY CHAIN INTELLIGENCE',
    label: 'SUPPLY CHAIN INTELLIGENCE',
    subtitle: 'Procurement, inventory, and material flow',
    ghostWatermark: 'SUPPLY CHAIN',
  },
  {
    id: 'QUALITY & COMPLIANCE',
    label: 'QUALITY & COMPLIANCE',
    subtitle: 'Defect detection, regulatory, and documentation systems',
    ghostWatermark: 'QUALITY',
  },
  {
    id: 'COMMERCIAL INTELLIGENCE',
    label: 'COMMERCIAL INTELLIGENCE',
    subtitle: 'Sales, quotation, collections, and customer management',
    ghostWatermark: 'COMMERCIAL',
  },
  {
    id: 'FINANCIAL INTELLIGENCE',
    label: 'FINANCIAL INTELLIGENCE',
    subtitle: 'Costing, reporting, working capital, and cash flow',
    ghostWatermark: 'FINANCIAL',
  },
  {
    id: 'LOGISTICS & DISTRIBUTION',
    label: 'LOGISTICS & DISTRIBUTION',
    subtitle: 'Dispatch, routing, fleet, and channel management',
    ghostWatermark: 'LOGISTICS',
  },
  {
    id: 'MACHINE INTELLIGENCE',
    label: 'MACHINE INTELLIGENCE',
    subtitle: 'Maintenance, OEE, and equipment health',
    ghostWatermark: 'MACHINE',
  },
  {
    id: 'MANAGEMENT SYNTHESIS',
    label: 'MANAGEMENT SYNTHESIS',
    subtitle: 'Owner dashboards, integrated visibility, S&OP systems',
    ghostWatermark: 'SYNTHESIS',
  },
  {
    id: 'KNOWLEDGE & DELIVERY INTELLIGENCE',
    label: 'KNOWLEDGE & DELIVERY INTELLIGENCE',
    subtitle: 'Internal wikis, QA, onboarding, and delivery automation',
    ghostWatermark: 'DELIVERY',
  },
] as const;

// 9 industries (Textile removed for V1 — no TX-coded nodes exist)
export const INDUSTRIES = [
  { id: 'manufacturing', label: 'MANUFACTURING', slug: 'manufacturing' },
  { id: 'pharma',        label: 'PHARMA',        slug: 'pharma'        },
  { id: 'fmcg',          label: 'FMCG',          slug: 'fmcg'          },
  { id: 'distribution',  label: 'DISTRIBUTION',  slug: 'distribution'  },
  { id: 'logistics',     label: 'LOGISTICS',     slug: 'logistics'     },
  { id: 'packaging',     label: 'PACKAGING',     slug: 'packaging'     },
  { id: 'engineering',   label: 'ENGINEERING',   slug: 'engineering'   },
  { id: 'chemicals',     label: 'CHEMICALS',     slug: 'chemicals'     },
  { id: 'export',        label: 'EXPORT',        slug: 'export'        },
  { id: 'it-saas',       label: 'IT & SAAS',     slug: 'it-saas'       },
  { id: 'agencies',      label: 'AGENCIES',      slug: 'agencies'      },
  { id: 'fintech',       label: 'FINTECH',       slug: 'fintech'       },
  { id: 'professional-services', label: 'PROFESSIONAL SERVICES', slug: 'professional-services' },
] as const;

export type IndustryId = typeof INDUSTRIES[number]['id'];
