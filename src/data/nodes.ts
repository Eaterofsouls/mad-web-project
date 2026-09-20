import type { WorkflowNode } from './types';

// PLACEHOLDER node coordinates — 2400×1800 canvas space
// Nodes generated programmatically from content markdown files

export const nodes: WorkflowNode[] = [
  {
    node_id: 'prospect-engine-001',
    short_name: 'Prospect Engine',
    full_name: 'PROSPECT INTELLIGENCE ENGINE',
    cluster_primary: 'REVENUE OPERATIONS',
    cluster_secondary: null,
    industry_primary: 'Manufacturing',
    industry_secondary: null,
    priority: 10,
    reality_sentence: 'Most industrial businesses lose 60% of inbound leads before a human ever responds. This system closes that gap in seconds, not hours.',
    node_type: 'UNIVERSAL',
    metadata_watches: 'Meta Lead Ad responses and Click-to-WhatsApp events · Inbound website visitor identification signals · B2B directory and government tender databases · Trigger events: hiring activity, location expansions, funding rounds · WhatsApp conversation threads and response times',
    metadata_generates: 'Enriched lead profiles with verified contact data · Fit score and intent score per lead · Personalized first-contact message per channel · Unified client record across all touchpoints · Campaign attribution and cost-per-lead analytics',
    metadata_type: 'REPLACES',
    metadata_replaces_or_transforms: 'Manual lead scraping and slow CRM data entry',
    metadata_returns: '67% reduction in lead response time · 3.1x increase in qualified meetings booked per month',
    problem_paragraph: 'Most industrial businesses lose 60% of inbound leads before a human ever responds. When leads are sourced, enriched, scored, and contacted manually, the time gap destroys conversion rates.',
    x: 1200,
    y: 900,
    slug: 'prospect-intelligence-engine',
    proof_entries: [],
    proof_counter: 0,
    outcomes: [
      '67% reduction in lead response time',
      '3.1x increase in qualified meetings booked per month',
      'Unified client record across all touchpoints',
      'Campaign attribution and cost-per-lead analytics'
    ],
    mechanism_ai_handles: [
      'Phase 1 — Sourcing',
      'Phase 2 — Enrichment',
      'Phase 3 — Scoring',
      'Phase 4 — Personalization'
    ],
    mechanism_you_handle: [
      'Review qualified appointments',
      'Close deals'
    ],
    mechanism_summary: 'A closed-loop machine that finds the right businesses, contacts them automatically within 60 seconds, qualifies them in real time, and remembers every conversation — regardless of which channel it happened on.',
    laymanSummary: 'A closed-loop machine that finds the right businesses, contacts them automatically within 60 seconds, qualifies them in real time, and remembers every conversation — regardless of which channel it happened on.',
    detailedExplanation: 'The Prospect Intelligence Engine operates as a nine-phase loop: sourcing leads from outbound directories, inbound Meta ads, WhatsApp click events, and trigger monitoring simultaneously; enriching raw contacts through a waterfall data pipeline that pushes coverage from 40% to 95%; scoring every lead on ICP fit and current timing signals; generating personalized first-contact messages referencing specific facts about each business; orchestrating outreach across WhatsApp, email, and LinkedIn in a timed sequence; running a conversational AI layer that qualifies leads and books appointments in real time; writing every touchpoint to a unified database so no lead is ever contacted twice with the wrong context; nurturing non-converting leads through channel-appropriate cadences; and feeding conversion data back to ad targeting so the system improves with every cycle.',
    watermarkType: 'network',
    isProspectEngine: true,
    prospectPhases: [
      'Phase 0 — ICP Definition',
      'Phase 1 — Sourcing',
      'Phase 2 — Enrichment',
      'Phase 3 — Scoring',
      'Phase 4 — Personalization',
      'Phase 5 — Outreach',
      'Phase 6 — Conversational AI',
      'Phase 7 — Unified Database',
      'Phase 8 — Nurture Loop',
      'Phase 9 — Analytics'
    ],
    proofCitation: {
      company: 'Anonymized — Industrial Distribution, Gujarat',
      system: 'WhatsApp-first lead qualification and follow-up automation',
      date: 'March 2024',
      result: '67% reduction in lead response time. 3.1x increase in qualified meetings booked per month.',
      source: 'Internal deployment — data available on assessment request',
      isPlaceholder: false
    }
  },
  {
    "node_id": "M01",
    "short_name": "Production Delay Prediction",
    "full_name": "Production Delay Prediction System",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "Engineering",
    "priority": 9,
    "reality_sentence": "Your production manager learns about the delay after it becomes expensive.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Production schedule · Machine runtime logs · Attendance records · Open order book · Material stock levels",
    "metadata_generates": "Delay risk score per work order · Alert to production manager 6–24 hours before disruption",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive shift-supervisor WhatsApp calls · Post-delay root cause scrambles",
    "metadata_returns": "15–25% fewer unplanned production delays · Emergency procurement costs eliminated",
    "problem_paragraph": "Your production manager finds out about a delay the same way your customer does — after the commitment has already been broken. The data that would have predicted the risk was there: the material shortage, the machine that's been running hot, the two operators absent on the same shift. It was just never connected. Every corrective action you take is emergency response to a crisis that was predictable three days ago.",
    "x": 820,
    "y": 720,
    "slug": "production-delay-prediction-system",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "AI-driven production scheduling has lifted on-time delivery rates by 25% at comparable manufacturers (industry case study, not India-specific)",
    "Production managers get visibility into a delay 6-24 hours before the customer feels it, instead of finding out after the commitment is already broken",
    "Emergency procurement and expedited shipping costs — the usual fallback when a delay is caught late — are avoided because the warning arrives early enough to react calmly",
    "Root-cause information (material shortage, machine overheating, dual absenteeism) is visible at the time it matters, not reconstructed afterward in a postmortem"
  ],
    "proofCitation": {
      "company": "Anonymized — Ferro Alloys Manufacturer (India)",
      "system": "AI model to predict accretion formation in DRI kilns",
      "date": "2022",
      "result": "2-hour advance warning window for maintenance",
      "source": "PwC India",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes production schedule · Generates delay risk score per work order · Your production manager learns about the delay",
    "watermarkType": "flow"
  },
  {
    "node_id": "M02",
    "short_name": "Predictive Maintenance",
    "full_name": "Predictive Maintenance Intelligence",
    "cluster_primary": "MACHINE INTELLIGENCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "Manufacturing",
    "industry_secondary": "Engineering",
    "priority": 10,
    "reality_sentence": "The machine breaks on Friday. The parts arrive on Tuesday. Production waits.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Machine vibration · Temperature readings · Current draw · Cycle counts · Maintenance history",
    "metadata_generates": "Failure probability score per machine · Maintenance work order with parts pre-list · Alert with lead time",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Calendar-based maintenance schedule · Post-breakdown emergency repair dispatches",
    "metadata_returns": "30–40% reduction in unplanned downtime · Machine life extended 15–20%",
    "problem_paragraph": "Machine breakdowns don't announce themselves. They wait until the production run is live, the customer delivery is imminent, and the replacement part is six days away from a supplier in Pune. Your maintenance team follows a calendar — they service machines based on months elapsed, not on what the machine is actually telling them. By the time vibration or temperature anomalies become visible symptoms, the failure is hours away, not weeks.",
    "x": 400,
    "y": 500,
    "slug": "predictive-maintenance-intelligence",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "30-50% reduction in unplanned downtime, per McKinsey's widely cited research on predictive maintenance in manufacturing — a figure echoed consistently across Deloitte, Aberdeen Group, and multiple industrial case studies",
    "Machine life extended by an estimated 20-40% (McKinsey), since failures are addressed before they cascade into bigger component damage",
    "Maintenance shifts from a fixed calendar to actual machine condition, so technicians stop servicing healthy machines and stop missing failing ones",
    "Emergency repair callouts and expedited spare-parts shipping — the most expensive way to buy a part — become rare instead of routine"
  ],
    "proofCitation": {
      "company": "Tata Steel (Kalinganagar Plant)",
      "system": "AI-driven process optimization for superheating temperature control",
      "date": "January 2023",
      "result": "8% to 12% increase in throughput; $10M annual margin improvement",
      "source": "McKinsey & Company, WEF",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Watches equipment sensor patterns · Predicts failure before it happens · Schedules maintenance before breakdown occurs",
    "watermarkType": "flow"
  },
  {
    "node_id": "M03",
    "short_name": "Raw Material Demand Forecast",
    "full_name": "Raw Material Demand Forecasting",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "Manufacturing",
    "industry_secondary": "FMCG",
    "priority": 9,
    "reality_sentence": "Your store is full of material you don't need and out of what you do.",
    "node_type": "HUB",
    "metadata_watches": "Confirmed order book · Production schedule · BOM structure · Historical consumption · Supplier lead times",
    "metadata_generates": "4–12 week raw material requirement forecast per SKU · Automated reorder trigger at safety threshold",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Warehouse walk-through stock checks · Purchase decisions made on gut feel",
    "metadata_returns": "20–30% reduction in excess raw material inventory · Near-elimination of shortage-caused stoppages",
    "problem_paragraph": "Your purchase manager makes one of the most capital-intensive decisions in the business — what to buy, how much, and when — based on a warehouse walk and accumulated experience. The result is a warehouse simultaneously overstocked with material you won't use for forty-five days and short on what's needed for this week's production run. Every emergency purchase costs thirty to forty percent above standard price, and every excess inventory item is working capital sitting still.",
    "x": 750,
    "y": 1200,
    "slug": "raw-material-demand-forecasting",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "FMCG",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "20-30% reduction in inventory levels achievable through AI-driven demand forecasting, per McKinsey research on AI in distribution and supply chain operations",
    "Material shortages that stall production lines become rare because reorder triggers fire on a forecast, not a stock-out",
    "Working capital that was sitting in the warehouse as excess raw material becomes available for other uses",
    "Purchase decisions are documented and explainable, instead of resting on one person's warehouse-walk judgment"
  ],
    "proofCitation": {
      "company": "Anonymized — Indian Apparel Exporter",
      "system": "ML demand forecasting system",
      "date": "2022",
      "result": "20-25% improvement in forecast accuracy for export orders",
      "source": "Brainyneurals",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Reads order history and market signals · Predicts 30-day demand per SKU · Flags what to reorder and when",
    "watermarkType": "network"
  },
  {
    "node_id": "M04",
    "short_name": "Quality Defect Detection",
    "full_name": "Quality Defect Detection System",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "Manufacturing",
    "industry_secondary": "Packaging",
    "priority": 9,
    "reality_sentence": "The batch ships defective. Your customer finds it before your inspector did.",
    "node_type": "HUB",
    "metadata_watches": "Production line camera feed · Image at 100% inspection speed · Defect classification model per product type",
    "metadata_generates": "Pass/fail decision per unit in real time · Defect trend alert if rate spikes · Root cause alert",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Shift-end spot sampling by manual inspectors · Batch rejection after full production run",
    "metadata_returns": "50–70% reduction in defect escapes to customers · Inspector fatigue eliminated",
    "problem_paragraph": "Your quality inspector works at shift end, checking samples from a batch that was completed hours ago. If there's a systematic defect in that batch, it has already run to completion before the inspector finds it. Visual inspection under fatigue misses what a calibrated system would catch on the first unit. Your customer's incoming quality check finds what yours didn't — and the relationship absorbs the cost.",
    "x": 1800,
    "y": 420,
    "slug": "quality-defect-detection-system",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Packaging",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "37% reduction in defects has been documented at BMW's production lines using AI vision inspection — a real-world automotive benchmark for computer-vision based quality control (global benchmark, not India-specific)",
    "Defects are caught at the unit that produced them, not discovered hours later in a batch that's already shipped",
    "Inspector fatigue and the inconsistency of end-of-shift sampling are eliminated because every unit is checked at line speed",
    "Customer-side rejections and the associated relationship damage drop because escapes are caught before the truck leaves"
  ],
    "proofCitation": {
      "company": "Anonymized — Automotive Plant, Pune (India)",
      "system": "AI-based real-time monitoring of screw compressors",
      "date": "2022",
      "result": "30-50% reduction in unplanned equipment downtime",
      "source": "Vervali Systems",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Watches production line imagery in real time · Flags defects the moment they occur · Stops waste before it compounds",
    "watermarkType": "signal"
  },
  {
    "node_id": "M05",
    "short_name": "Production Planning Optimizer",
    "full_name": "Production Planning Optimizer",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "Engineering",
    "priority": 8,
    "reality_sentence": "Sales pushes a new order in. The sequence collapses. Overtime fixes nothing.",
    "node_type": "BRIDGE",
    "metadata_watches": "Open work orders with due dates · Machine capacity calendar · Operator availability · Material status",
    "metadata_generates": "Optimal production sequence · Conflict highlight list for planner review · Daily schedule to shop floor",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual sequencing by production planner · Ad-hoc priority overrides from sales pressure",
    "metadata_returns": "15–20% improvement in machine utilization · 25–35% reduction in emergency overtime",
    "problem_paragraph": "Your planner builds a sequence on Monday morning. By Monday afternoon, a sales call has repositioned three orders. The optimized sequence is now a patchwork of priorities, and the machines that should be running a long uninterrupted batch are being set up and torn down between jobs. Overtime on Friday covers the gap, and next Monday the cycle begins again.",
    "x": 700,
    "y": 700,
    "slug": "production-planning-optimizer",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Companies using AI-driven resource allocation in scheduling have reported 15-20% reductions in operational cost from improved machine utilisation, per industry case studies on AI manufacturing scheduling (global benchmark, not India-specific)",
    "A new sales-driven order no longer collapses the week's sequence — the optimizer re-sequences automatically and flags genuine conflicts for the planner",
    "Emergency overtime, used today to recover from a broken sequence, becomes the exception rather than the routine fix",
    "The planner spends time resolving real conflicts the system surfaces, instead of manually rebuilding the sequence from scratch every time something changes"
  ],
    "proofCitation": {
      "company": "Godrej & Boyce",
      "system": "AI integration into manufacturing processes for predictive maintenance and process optimization",
      "date": "2023",
      "result": "15% increase in production efficiency; 10% reduction in operational costs",
      "source": "Management School Research Paper, MSNIM",
      "isPlaceholder": false
    },

    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Reads machine capacity and order queue · Builds the optimal production sequence · Reduces changeover time and idle capacity",
    "watermarkType": "flow"
  },
  {
    "node_id": "M06",
    "short_name": "Smart Inventory Reorder",
    "full_name": "Smart Inventory Reorder System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "Distribution",
    "priority": 8,
    "reality_sentence": "Your fastest-moving item is out of stock. The slow-moving one crowds the shelf.",
    "node_type": "BRIDGE",
    "metadata_watches": "Real-time stock levels · Sales velocity (30/60/90-day rolling) · Seasonal patterns · Supplier lead times",
    "metadata_generates": "Safety stock calculation per SKU · Dynamic reorder point · Automated purchase recommendation",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Rule-of-thumb reorder decisions · Weekly stock review meetings",
    "metadata_returns": "20–30% reduction in stockout incidents · 15–25% reduction in excess inventory value",
    "problem_paragraph": "Your inventory management strategy is essentially two rules: reorder when stock looks low, and buy extra when the supplier offers a good deal. The result is a finished goods warehouse where fast-moving items periodically stock out — losing you immediate orders — while slow-moving SKUs occupy shelf space for months. The capital sitting in that slow inventory is the same capital you borrow at twelve percent to fund emergency purchases.",
    "x": 700,
    "y": 1420,
    "slug": "smart-inventory-reorder-system",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "20-30% reduction in inventory levels through AI-driven demand forecasting and dynamic reorder points, per McKinsey's research on AI in distribution operations",
    "Fast-moving SKUs stop running out because reorder points adjust to actual sales velocity instead of a fixed rule of thumb",
    "Slow-moving stock that used to sit on the shelf because of a 'good supplier deal' gets flagged before the purchase, not after",
    "Weekly manual stock-review meetings are replaced by exception-only alerts, freeing that time for decisions instead of data-gathering"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Maps stock levels against demand forecasts · Identifies overstock and understock simultaneously · Recommends reorder quantities per item",
    "watermarkType": "network"
  },
  {
    "node_id": "M07",
    "short_name": "Vendor Performance Scorecard",
    "full_name": "Vendor Performance Scorecard System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "Engineering",
    "priority": 7,
    "reality_sentence": "You know one vendor is unreliable. You keep using them because you can't prove it.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "PO delivery dates vs. committed dates · Quality inspection results per vendor · Price variance · Credit adherence",
    "metadata_generates": "Monthly vendor performance score · Underperforming vendor flag · Development action trigger",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Informal vendor evaluation based on relationship and memory",
    "metadata_returns": "20–30% improvement in input quality rate · Objective basis for vendor consolidation",
    "problem_paragraph": "You know which of your vendors is unreliable. Everyone in your purchase team knows. The knowledge lives in memory, in passing conversation, in the exasperation of the production manager who got short-notice partial delivery again. But when it comes to negotiation, or choosing between vendors for a critical order, there is no number to point to. The relationship continues because the alternative is undocumented.",
    "x": 1040,
    "y": 1360,
    "slug": "vendor-performance-scorecard-system",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Vendor underperformance that everyone 'knows about' but no one has documented becomes a tracked, scored pattern with dates and numbers behind it",
    "Negotiating leverage improves because underperformance is backed by dates and numbers, not memory or a one-off complaint",
    "Concentration risk on a single vendor surfaces before a supply disruption forces the realization",
    "Vendor development conversations happen on a fixed monthly cadence instead of only after a crisis"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Tracks delivery times and quality rates per supplier · Scores each supplier against contract terms · Flags risk before it becomes a delay",
    "watermarkType": "network"
  },
  {
    "node_id": "M08",
    "short_name": "Dispatch & Delivery Intel",
    "full_name": "Dispatch & Delivery Intelligence",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Your driver left two hours ago. You don't know where the shipment is.",
    "node_type": "BRIDGE",
    "metadata_watches": "Day's delivery orders · Vehicle capacity · GPS real-time location · Digital POD on delivery",
    "metadata_generates": "Route-optimized dispatch schedule · Customer WhatsApp ETA notification · Digital proof of delivery",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual route assignment by dispatcher · Driver phone calls to confirm delivery",
    "metadata_returns": "10–20% route efficiency improvement · Dispute resolution through digital POD",
    "problem_paragraph": "Once the truck leaves your gate, your visibility ends. You know what was loaded. You don't know where the vehicle is, whether the customer is reachable, or whether the delivery went through. Your customer calls your salesperson. Your salesperson calls the driver. The driver calls back twenty minutes later. This interaction happens seven times a day across your dispatch team, consuming hours that could be spent on selling.",
    "x": 850,
    "y": 750,
    "slug": "dispatch-delivery-intelligence",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Delivery delays surface before the SLA window closes, giving sales time to manage the customer relationship instead of reacting to a complaint",
    "Customer complaint calls drop because the customer is told about a delay before they have to call and ask",
    "Sales team time previously spent chasing delivery status with the factory and driver is freed for selling",
    "Recurring delay patterns by route or vehicle become visible, instead of every delay feeling like a one-off surprise"
  ],
    "proofCitation": {
      "company": "Anonymized — Capital Equipment Supplier (India)",
      "system": "AI model predicting logistics & operational metrics",
      "date": "2022",
      "result": "10% reduction in logistics cost base",
      "source": "PwC India",
      "isPlaceholder": false
    },

    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Reads delivery schedules and live traffic · Calculates lowest-cost route per vehicle · Saves fuel and driver hours daily",
    "watermarkType": "logistics"
  },
  {
    "node_id": "M09",
    "short_name": "Workforce Productivity Monitor",
    "full_name": "Workforce Productivity Monitoring",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "Your best operator carries the shift. Nobody tracks it. Nobody sees it.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Operator output per shift · Cycle time vs. standard · Skill assignment records",
    "metadata_generates": "Productivity index per operator per shift · Week-over-week trend analysis · Training needs report",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Undifferentiated shift performance into individual operator visibility and data-backed recognition",
    "metadata_returns": "10–15% overall productivity improvement through visibility alone",
    "problem_paragraph": "Your production floor has operators who consistently exceed standard output and operators who consistently fall below it. The difference is invisible because output is tracked at the batch level, not the operator level. Your best performers are carrying a disproportionate share of the production while the gap in performance goes unaddressed — not because you wouldn't address it, but because you can't see it.",
    "x": 1540,
    "y": 860,
    "slug": "workforce-productivity-monitoring",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Labour cost per unit becomes visible by shift and operator in near real time, instead of being reconstructed at month-end",
    "Productivity outliers — both strong performers worth recognizing and persistent underperformers worth coaching — are identified systematically rather than by supervisor impression",
    "Overtime claims are checked against actual output, so overtime pay and overtime productivity stay connected",
    "Coaching conversations are backed by a consistent metric instead of whichever shift the supervisor happened to notice"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "M10",
    "short_name": "Energy Consumption Analytics",
    "full_name": "Energy Consumption Analytics",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "Chemicals",
    "priority": 6,
    "reality_sentence": "Your electricity bill grows every quarter. You cannot say which machine costs the most.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Sub-meter energy data per machine/department · Production output data · Peak demand periods",
    "metadata_generates": "Energy intensity per unit produced · Idle machine waste alert · Peak demand charge alert",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Undifferentiated monthly electricity bill into machine-level cost accountability",
    "metadata_returns": "8–15% reduction in energy costs · Peak demand charge avoidance",
    "problem_paragraph": "Energy is typically your third or fourth largest cost, and it receives almost no management attention. Your electricity bill arrives monthly and gets paid. Whether the cost grew because production grew, or because three machines are running inefficiently, or because the night shift leaves the compressor running idle — you cannot say. The cost is embedded and invisible.",
    "x": 1680,
    "y": 820,
    "slug": "energy-consumption-analytics",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Chemicals",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "AI-powered energy management typically delivers 10-30% savings across manufacturing facilities, a range corroborated across multiple industrial deployments and case studies (e.g. Bosch reported a 12% efficiency improvement using AI-driven monitoring) (global benchmark, India-specific figures not found)",
    "The specific machine or zone responsible for a consumption spike becomes identifiable, instead of the bill simply going up with no explanation",
    "Shift scheduling can be adjusted to avoid peak tariff windows once consumption patterns are visible by time of day",
    "Energy cost per unit produced becomes a trackable metric instead of an unexplained monthly line item"
  ],
    "proofCitation": {
      "company": "Anonymized - Material Processing Unit (Gujarat)",
      "system": "AI energy monitoring and process optimization",
      "date": "2023",
      "result": "15% reduction in energy consumption",
      "source": "Ministry of Commerce, Industry 4.0 Report",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "M11",
    "short_name": "Customer Order Tracking",
    "full_name": "Customer Order Tracking Intelligence",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "Engineering",
    "priority": 7,
    "reality_sentence": "Your sales team spends three hours daily answering one question: where is my order?",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Order status at each production stage · Stage completion by responsible team · Expected vs. actual dates",
    "metadata_generates": "Customer WhatsApp milestone notification · Delay risk alert to sales manager · Delivery ETA with vehicle",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual salesperson calls to production and dispatch for status updates",
    "metadata_returns": "Significant reduction in inbound status inquiry calls · Sales team time freed for selling",
    "problem_paragraph": "Your sales team spends a meaningful part of every working day answering a single question from customers: where is my order? Each answer requires a call or message to production, another to dispatch, and sometimes a third to the driver. The customer has to ask because there's no other way to know. Your salespeople are doing courier-tracking work instead of selling.",
    "x": 1910,
    "y": 1080,
    "slug": "customer-order-tracking-intelligence",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Sales gets the delay alert before the customer's call comes in, so the conversation starts as a proactive update rather than a defensive scramble",
    "The internal chain of phone calls to the factory just to answer 'where's my order' is eliminated",
    "Customer satisfaction improves because status information is available the moment it's asked for, not after an internal investigation",
    "Sales spends order-status conversations building the relationship instead of apologizing for the lack of information"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "M12",
    "short_name": "Financial Reporting Automation",
    "full_name": "Cost and Financial Reporting Automation",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "MANAGEMENT SYNTHESIS",
    "industry_primary": "Manufacturing",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "You made decisions on last month's numbers. The month ended twenty days ago.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Daily production data · Material consumption per batch · Labor actual hours · Overhead rates · Invoices",
    "metadata_generates": "Cost per batch and per unit · Actual vs. standard cost variance · Customer-level margin per invoice",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "15–20-day-delayed monthly P&L into 3-day management report with product-level margin",
    "metadata_returns": "Per-product and per-customer margin visibility · Better pricing decisions on new orders",
    "problem_paragraph": "Your P&L arrives fifteen to twenty days after the month closes. By the time you read it, you're already halfway through the next month, managing on last month's picture. You know your revenues. You don't know your margin per product or your profitability per customer — not until the accounts are reconciled, and by then the pricing decisions that would have changed the outcome have already been made. ---",
    "x": 1300,
    "y": 460,
    "slug": "cost-and-financial-reporting-automation",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Month-end reporting that took days now takes hours, because the consolidation that used to be manual spreadsheet work runs continuously",
    "Cost per unit and product-line P&L become visible in near real time, enabling corrective decisions while the quarter is still open rather than after it's closed",
    "Budget-versus-actual variance is flagged as it happens, instead of being discovered after the period is already over",
    "The finance team's time shifts from data assembly to actually explaining and acting on the numbers"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes daily production data · Generates cost per batch and per unit · You made decisions on last month's numbers",
    "watermarkType": "data"
  },
  {
    "node_id": "P01",
    "short_name": "Batch Record Automation",
    "full_name": "Batch Manufacturing Record Automation",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "Pharma",
    "industry_secondary": null,
    "priority": 10,
    "reality_sentence": "One BMR error and the FDA audit observation shuts your export market for a year.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Manufacturing step completion · Critical parameter entry · Equipment readings · Operator sign-offs",
    "metadata_generates": "Real-time spec validation alert · Assembled batch record on completion · QA review flag for anomalies",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual BMR paper entry · Retrospective QA review from handwritten logs",
    "metadata_returns": "BMR completion time reduced 50–70% · Regulatory audit observation rate sharply reduced",
    "problem_paragraph": "Every step of your manufacturing process must be documented accurately, contemporaneously, and completely. When an inspector from a regulated market reviews your batch records, a single inconsistency — a temperature reading logged retrospectively, a signature in the wrong field, a deviation not formally investigated — becomes an observation that can take a year to remediate. Your operators are writing these records by hand, under production pressure, in shifts. The error rate is not their fault. It is the system's.",
    "x": 1700,
    "y": 350,
    "slug": "batch-manufacturing-record-automation",
    "proof_entries": [
      {
        "industry": "Pharma",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Operators on manual documentation lose roughly 30% of their working time to paperwork rather than production, per a time-motion study on pharmaceutical batch record workflows — automation reclaims most of that time",
    "BMR completion time drops sharply because data is auto-populated from production logs and weighing scales, instead of being handwritten field by field",
    "Manual transcription errors — a leading source of compliance findings during inspection — are eliminated at the point of entry",
    "Deviations are flagged the moment an out-of-spec entry occurs, not discovered days later during QA review"
  ],
    "proofCitation": {
      "company": "Anonymized — Top-5 Indian Pharma Manufacturer",
      "system": "AI-powered eBMR with automated anomaly flagging",
      "date": "2023",
      "result": "Batch record review time reduced from weeks to days",
      "source": "Leucine.ai, Biospec India",
      "isPlaceholder": false
    },

    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes manufacturing step completion · Generates real-time spec validation alert · One BMR error and the FDA audit",
    "watermarkType": "signal"
  },
  {
    "node_id": "P02",
    "short_name": "QC Lab Intelligence (LIMS)",
    "full_name": "QC Lab Data Intelligence (LIMS)",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Pharma",
    "industry_secondary": "Chemicals",
    "priority": 9,
    "reality_sentence": "The analyst transcribed the HPLC result incorrectly. The error reaches batch release.",
    "node_type": "HUB",
    "metadata_watches": "HPLC, UV spectrophotometer, pH meter outputs · Test specifications per product · Historical batch trend",
    "metadata_generates": "Automatic pass/fail against specification · Drift alert approaching spec limit · COA on QA approval",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual transcription of instrument readings · Retrospective trend analysis in spreadsheets",
    "metadata_returns": "Transcription errors eliminated · Test reporting cycle reduced 30–50%",
    "problem_paragraph": "Your QC analysts run tests on expensive instruments, then transcribe the results by hand into logbooks or spreadsheets. Transcription error rates in manual lab environments run between two and eight percent — and those are the errors you can catch. Trend analysis across batches requires someone to manually extract data and build a chart. Out-of-specification events trigger investigations that delay batch release for days; earlier trend detection would have prevented them.",
    "x": 1600,
    "y": 420,
    "slug": "qc-lab-data-intelligence-lims",
    "proof_entries": [
      {
        "industry": "Pharma",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Chemicals",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Out-of-specification (OOS) events get caught the moment the result is recorded, instead of being discovered later when someone manually cross-checks a paper register against the batch",
    "Regulatory audit preparation time drops significantly because every test result is already linked to its batch and timestamped electronically",
    "A test result is never disconnected from the batch it belongs to, since the link is made automatically rather than depending on a notebook entry being correctly cross-referenced",
    "Batch release decisions are supported by an instant pass/fail comparison against spec, rather than a QA reviewer manually checking numbers against a printed pharmacopoeia table"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "P03",
    "short_name": "Regulatory Compliance Monitor",
    "full_name": "Regulatory Compliance Monitoring System",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Pharma",
    "industry_secondary": "Export",
    "priority": 10,
    "reality_sentence": "Your registration in that market lapsed. No one noticed until the order was rejected.",
    "node_type": "HUB",
    "metadata_watches": "Regulatory agency feeds across markets · Registration expiry dates · Product-country obligation matrix",
    "metadata_generates": "Impact assessment on new guideline · 90/60/30-day registration renewal alert · Monthly risk report",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Calendar reminders · Association newsletter dependency for regulatory intelligence",
    "metadata_returns": "Zero lapsed registrations · Regulatory intelligence response time: weeks → days",
    "problem_paragraph": "You're registered in twelve markets. Each registration has a renewal date, a dossier structure, and a regulatory body with its own update cadence. When guidelines change in the EU or the US, someone in your regulatory affairs team needs to assess the impact on every affected product in every affected market. That assessment currently happens when someone reads a newsletter or receives a call from your CHA. A registration that lapses costs you six to eighteen months of revenue from that market.",
    "x": 1800,
    "y": 420,
    "slug": "regulatory-compliance-monitoring-system",
    "proof_entries": [
      {
        "industry": "Pharma",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Export",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Surprise non-conformances during a CDSCO inspection become rare, because every license, SOP, and training record is tracked against its own deadline continuously rather than relying on one QA manager's calendar",
    "Inspection readiness becomes a maintained state instead of a once-a-year scramble in the weeks before an audit",
    "Overdue items get escalated automatically the moment they cross a threshold, instead of being missed in an inbox of reminder emails",
    "An audit readiness score gives management a concrete number to act on, rather than a vague sense of how prepared the facility is"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "P04",
    "short_name": "Drug Expiry & Inventory Intel",
    "full_name": "Drug Expiry & Inventory Intelligence",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "QUALITY & COMPLIANCE",
    "industry_primary": "Pharma",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "Product expires in the warehouse because no one tracked it until the write-off was due.",
    "node_type": "HUB",
    "metadata_watches": "Finished goods lot numbers · Manufacturing dates · Expiry dates · Warehouse stock levels",
    "metadata_generates": "Expiry-risk flag per lot · FEFO pick sequence instruction · Liquidation opportunity alert",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual FEFO compliance by warehouse staff · End-of-month expiry write-off discovery",
    "metadata_returns": "Drug expiry write-offs reduced 60–80% · 0.5–2% of annual revenue in expired product eliminated",
    "problem_paragraph": "Your finished goods warehouse holds products with varying shelf lives, manufactured at different dates, stored in different lots. FEFO management — first expired, first out — is policy. Whether it happens in practice depends on whether your warehouse staff can physically identify the right lot under picking pressure. Write-offs from expired product show up in your P&L as a cost line that most finance teams treat as unavoidable. It isn't.",
    "x": 840,
    "y": 1180,
    "slug": "drug-expiry-inventory-intelligence",
    "proof_entries": [
      {
        "industry": "Pharma",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Near-expiry write-offs drop substantially once dispatch automatically follows First Expiry First Out (FEFO) sequencing rather than depending on individual operator discipline at the point of picking",
    "A recall, when one happens, is traceable to the exact batch and distribution location instantly, instead of requiring a manual search through dispatch records",
    "Expiry risk surfaces 90 days ahead of the breach date, giving time to redirect or discount stock before it becomes a write-off",
    "FEFO compliance becomes a system rule rather than a training point that depends on every warehouse worker following it correctly every time"
  ],
    "proofCitation": {
      "company": "Anonymized — Indian Pharmaceutical Distributor",
      "system": "AI-driven demand sensing & inventory optimization",
      "date": "2022",
      "result": "20-25% improvement in short-term forecast accuracy",
      "source": "Sigmoid Analytics",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes finished goods lot numbers · Generates expiry-risk flag per lot · Product expires in the warehouse because no",
    "watermarkType": "signal"
  },
  {
    "node_id": "P05",
    "short_name": "Sales Force Effectiveness",
    "full_name": "Sales Force Effectiveness Analytics",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Pharma",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Your MR visits the same doctors every week. The high-potential territory sits untouched.",
    "node_type": "BRIDGE",
    "metadata_watches": "MR visit logs · Doctor/chemist call records · Order outcomes · Territory potential data",
    "metadata_generates": "MR productivity score · High-potential territory identification · Visit strategy recommendation",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Activity-based sales management into outcome-based territory and resource optimization",
    "metadata_returns": "MR productivity improvement 15–25% · Equivalent of 7–8 additional MR-years from 50-person team",
    "problem_paragraph": "Your medical representatives log visits in a daily report. Those reports tell you where they went and who they saw. They don't tell you whether the visit produced an outcome, which territories have unrealized potential, or which representatives are spending their time on habit rather than opportunity. High-potential areas stay underserved while familiar territory gets the fourth visit this month.",
    "x": 2050,
    "y": 1060,
    "slug": "sales-force-effectiveness-analytics",
    "proof_entries": [
      {
        "industry": "Pharma",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "MR time reallocates toward the doctors actually driving prescription volume, instead of being spread evenly across a call list regardless of yield",
    "A productivity score per MR replaces a monthly report reviewed at region level with no doctor-by-doctor visibility",
    "Sample distribution gets tied to actual prescription impact, surfacing where samples are working and where they're effectively being given away",
    "Call frequency analysis identifies low-yield doctors receiving disproportionate visit time relative to the prescriptions they generate"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes mr visit logs · Generates mr productivity score · Your MR visits the same doctors every",
    "watermarkType": "generic"
  },
  {
    "node_id": "P06",
    "short_name": "Cold Chain Monitoring",
    "full_name": "Cold Chain Monitoring Intelligence",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": "QUALITY & COMPLIANCE",
    "industry_primary": "Pharma",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "The temperature excursion happened in transit. Nobody detected it until the patient complained.",
    "node_type": "HUB",
    "metadata_watches": "IoT temperature and humidity sensors in storage and transit · Temperature range specifications per product",
    "metadata_generates": "Real-time excursion alert · Duration and severity of excursion · GMP-compliant temperature record",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Periodic manual temperature log checks · Discovery of excursion only at destination",
    "metadata_returns": "Real-time excursion detection · Batch disposition decisions based on data, not assumption",
    "problem_paragraph": "Temperature excursions during storage or transit are not visible events — they are discovered events. By the time a deviation is found, the product has already spent hours or days outside specification. Your documentation shows that temperature was checked at origin and destination. What happened in between is a gap. For a vaccine or injectable, that gap is the entire risk. ---",
    "x": 1350,
    "y": 1000,
    "slug": "cold-chain-monitoring-intelligence",
    "proof_entries": [
      {
        "industry": "Pharma",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "A temperature excursion gets caught in transit, while there's still time to act, instead of being discovered on a logger readout after the truck has already arrived",
    "GDP compliance documentation builds itself continuously from the temperature log, instead of being assembled manually after delivery",
    "A batch release decision can account for a documented in-transit excursion immediately, rather than the product being used before anyone checks the logger data",
    "Chain-of-custody temperature evidence exists automatically for every shipment, strengthening the company's position in any regulatory review"
  ],
    "proofCitation": {
      "company": "Anonymized — Pharma Manufacturer (India)",
      "system": "ML predicting breakdowns before failure",
      "date": "2023",
      "result": "Measurable reduction in downtime",
      "source": "EY India",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "F01",
    "short_name": "Distributor Demand Forecast",
    "full_name": "AI Distributor Demand Forecasting & Auto-Replenishment",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "LOGISTICS & DISTRIBUTION",
    "industry_primary": "FMCG",
    "industry_secondary": "Distribution",
    "priority": 10,
    "reality_sentence": "Your fastest SKU is out of stock at Diwali. Your slowest one fills the warehouse.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Secondary sales data · Festival and seasonal calendar · Scheme activity · Distributor stock levels",
    "metadata_generates": "SKU-level replenishment suggestion per distributor · Distributor app/WhatsApp order alert",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Distributor gut-feel ordering · Monthly sales manager stock review visits",
    "metadata_returns": "Fewer stock-outs across network · Better festival-season fill rates · 5–15% of secondary sales recovered",
    "problem_paragraph": "Your distributors order what they ordered last month, adjusted upward or downward based on their own intuition about what will sell. Your fastest SKU runs out in Surat the week before Diwali because neither you nor your distributor saw the stock-out coming. Meanwhile, a seasonal product that was heavily pushed in trade is sitting in six distributors' warehouses at full price while the window to liquidate it narrows. Your order book looks healthy. Your shelf presence tells a different story.",
    "x": 600,
    "y": 1300,
    "slug": "ai-distributor-demand-forecasting-auto-replenishment",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "AI-driven demand forecasting has cut forecast errors by 20-50% and reduced stockouts by up to 65% in documented industry deployments, per McKinsey research on AI forecasting applications",
    "A fast-moving SKU stops running out at the distributor level because replenishment is forecast ahead, not triggered only after the shelf is already empty",
    "Stockout risk is visible 2 weeks ahead, giving time to act before a competitor fills the gap with their own product",
    "The distributor relationship improves because supply becomes proactive instead of reactive to an MR's stockout report"
  ],
    "proofCitation": {
      "company": "Hindustan Unilever Limited (HUL)",
      "system": "AI/ML-powered demand sensing across Lighthouse factories",
      "date": "2022",
      "result": "20-25% improved forecast accuracy, 30% reduction in excess inventory",
      "source": "HUL Annual Report",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes secondary sales data · Generates sku-level replenishment suggestion per distributor · Your fastest SKU is out of stock",
    "watermarkType": "network"
  },
  {
    "node_id": "F02",
    "short_name": "WhatsApp Retailer Ordering",
    "full_name": "WhatsApp Retailer Ordering with AI Assortment",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": "LOGISTICS & DISTRIBUTION",
    "industry_primary": "FMCG",
    "industry_secondary": "Distribution",
    "priority": 9,
    "reality_sentence": "The kirana owner re-orders the same two SKUs every week. Your margin SKU never moves.",
    "node_type": "HUB",
    "metadata_watches": "Retailer past order history · Store size classification · Local trend data · Inventory availability",
    "metadata_generates": "Personalized assortment suggestion per retailer · Auto-substitute on out-of-stock items",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual order writing by sales rep during retail visit · Missed SKU recommendations",
    "metadata_returns": "Higher average order value per retailer visit · More outlets covered per rep per day",
    "problem_paragraph": "Your sales representative spends the first fifteen minutes of every retail visit writing down the order — the same SKUs the retailer has ordered every time. The rep doesn't have the data to suggest what the retailer is missing, and the retailer doesn't know to ask. Your high-margin SKU, your newest launch, and your fast-mover in the neighboring zone are all invisible to a retailer who just wants to refill what sold. The rep confirms the order and moves to the next outlet.",
    "x": 2030,
    "y": 700,
    "slug": "whatsapp-retailer-ordering-with-ai-assortment",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "60–70% reduction in claims processing time — AI auto-approves valid claims instantly, eliminating multi-day manual verification queues (McKinsey FMCG operations benchmark)",
    "Fraudulent, duplicate, and post-expiry claims identified and flagged before payment is released, protecting scheme budget from leakage",
    "Scheme budget utilization visibility in real time — finance team knows exactly how much of the scheme liability is valid, approved, or under review at any point",
    "Distributor relationship improved as legitimate claims are settled faster, reducing the grievance backlog that strains principal-distributor trust"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes retailer past order history · Generates personalized assortment suggestion per retailer · The kirana owner re-orders the same two",
    "watermarkType": "logistics"
  },
  {
    "node_id": "F03",
    "short_name": "Scheme & Claims Reconciliation",
    "full_name": "Secondary Sales, Scheme & Claims Reconciliation",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "FMCG",
    "industry_secondary": "Distribution",
    "priority": 9,
    "reality_sentence": "Scheme reconciliation took your finance team eleven days. Three distributors still dispute the number.",
    "node_type": "HUB",
    "metadata_watches": "Secondary sales data feed · Scheme terms and conditions · Claim submissions from distributors",
    "metadata_generates": "Auto-validation against scheme rules · Discrepancy flag · Approved credit note",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual month-end scheme reconciliation by finance team (2–11 days of effort)",
    "metadata_returns": "Faster claim settlement · Fewer disputes · Freed finance team capacity",
    "problem_paragraph": "Trade schemes are how you drive sell-through. But the complexity of running multiple simultaneous schemes across dozens of distributors — each with their own secondary sales reporting and claim timing — makes reconciliation a month-end battle that consumes your finance team for days. The number that comes out of the process is contested by at least three distributors, and the settlement amount you paid out doesn't match what your scheme design intended.",
    "x": 1400,
    "y": 300,
    "slug": "secondary-sales-scheme-claims-reconciliation",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Scheme claim leakages — where valid claims go unpaid due to missed paperwork or delays — are eliminated because the system tracks every retailer-level transaction against the scheme conditions continuously",
    "Fraudulent or duplicate claims get flagged before payment is released, protecting scheme budgets from being absorbed by distributors gaming the reconciliation cycle",
    "Finance team time spent on manual claims verification drops by 60–70%, freeing bandwidth for collections and cash flow management instead of spreadsheet reconciliation",
    "Distributor relationships improve because valid claims are settled faster and disputes have a clear audit trail, replacing the typical month-long argument over a number neither party can fully explain"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "F04",
    "short_name": "Computer Vision QC",
    "full_name": "Computer Vision Quality & Defect Detection",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "FMCG",
    "industry_secondary": "Packaging",
    "priority": 9,
    "reality_sentence": "The misprinted label reached the retailer. The return came back three weeks later.",
    "node_type": "HUB",
    "metadata_watches": "Production line camera feed · Fill-level sensor · Label registration camera · Packaging seal check",
    "metadata_generates": "Real-time pass/fail per unit · Defect category classification · Trend alert for systematic issues",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual visual sampling by QC inspector · End-of-shift defect discovery",
    "metadata_returns": "Near-100% inspection coverage · Fewer field complaints and retailer returns",
    "problem_paragraph": "Your QC inspector checks finished goods before packing. At production speeds, a manual inspector can sample, not inspect — and fatigue degrades even that. A label with a registration error, a fill level slightly below standard, a seal that didn't form correctly — these pass at the line because the inspector was watching the previous unit when it happened. Your customer's complaint comes three weeks after the product left your facility.",
    "x": 1800,
    "y": 420,
    "slug": "computer-vision-quality-defect-detection",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Packaging",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "20–30% improvement in forecast accuracy when S&OP is driven by AI-integrated demand and supply data versus disconnected spreadsheet inputs (ADA/McKinsey FMCG India benchmark)",
    "Overcommitment to trade eliminated — production plan aligned to what can actually be made, not what sales wants to promise",
    "Highest-margin SKUs get capacity priority automatically when constraints are identified, protecting margin mix during tight production windows",
    "Weekly S&OP meeting time reduced from half a day to under one hour because all functions review a single pre-built, accurate data source"
  ],
    "proofCitation": {
      "company": "Anonymized - Indian Manufacturing Mill (Export-Oriented)",
      "system": "CNN-based AI fabric inspection system",
      "date": "2022",
      "result": "Detection accuracy >95%, 5-15% revenue recovery",
      "source": "NISCPR Research, Robro Systems",
      "isPlaceholder": false
    },

    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes production line camera feed · Generates real-time pass/fail per unit · The misprinted label reached the retailer. The",
    "watermarkType": "signal"
  },
  {
    "node_id": "F05",
    "short_name": "Integrated S&OP Dashboard",
    "full_name": "Integrated S&OP / Unified Management Dashboard",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "FMCG",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "You see sales data, production data, and finance data separately. You never see them together.",
    "node_type": "BRIDGE",
    "metadata_watches": "ERP data · Sales data · Production data · Finance data feeds",
    "metadata_generates": "Auto-insight summary · Anomaly alert (\"Distributor X offtake dropped 30% this week\") · Daily dashboard",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Four disconnected data sources into a single daily management picture with exception alerts",
    "metadata_returns": "Faster, better-informed decisions · Early visibility into problems across functions",
    "problem_paragraph": "Sales tells you what shipped. Production tells you what was made. Finance tells you what was billed. None of these numbers comes from the same system or arrives at the same time. Before you can make a decision, you spend forty minutes assembling a picture that is already two days old by the time it's complete. The insight you needed to act on happened last Tuesday. You're reading about it now. ---",
    "x": 1940,
    "y": 820,
    "slug": "integrated-sop-unified-management-dashboard",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "25–30% reduction in bad debt provision — AI risk scoring enables earlier collections intervention before accounts become unrecoverable (McKinsey credit risk analytics benchmark for FMCG distribution)",
    "Collections team effort redirected to highest-risk accounts, improving recovery rate on overdue balances without increasing headcount",
    "Credit limit breaches flagged before new orders are dispatched, preventing fresh exposure to already-delinquent accounts",
    "Seasonal credit stress detected 3–4 weeks early, giving finance time to adjust credit terms before the problem becomes an NPA"
  ],
    "proofCitation": {
      "company": "Dabur India",
      "system": "AI-driven route-to-market analytics & inventory optimization",
      "date": "2022",
      "result": "Improved market penetration, reduction in stockouts",
      "source": "Dabur Annual Report, ADA Global",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "D01",
    "short_name": "Dealer Credit & Collections",
    "full_name": "AI Retailer/Dealer Credit & Collections Risk Scoring",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Distribution",
    "industry_secondary": "FMCG",
    "priority": 10,
    "reality_sentence": "Your largest account has been slow-paying for four months. Your collection team called twice.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Order history · Payment history and patterns · Outstanding aging · Behavioral risk signals",
    "metadata_generates": "Dynamic credit score per dealer · Credit limit recommendation · Early warning alert for deteriorating accounts",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Relationship-and-gut-feel credit decisions · Reactive collections only after serious delinquency",
    "metadata_returns": "Lower bad debt · Faster collections · Cash flow protected",
    "problem_paragraph": "You've extended credit to hundreds of retailers based on how long you've known them, how their business looks when you visit, and the history you carry in memory. Most of them pay on time. A handful don't — and you often can't see the shift happening until the account is already thirty days past due and the relationship is already under strain. Your margin is thin enough that a few serious defaults in a year change the profitability of the entire business.",
    "x": 1200,
    "y": 280,
    "slug": "ai-retailerdealer-credit-collections-risk-scoring",
    "proof_entries": [
      {
        "industry": "Distribution",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "FMCG",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "20–30% reduction in working capital tied up in inventory — AI-driven cross-principal reorder recommendations eliminate overbuying on slow movers (ResearchGate India supply chain AI study, 2026)",
    "Stockout incidents on fast-moving SKUs reduced substantially as reorder triggers are set by velocity data, not shelf inspection",
    "Unified view across all 10–50 principals replaces principal-by-principal tracking, giving the distributor a single source of truth for the first time",
    "Scheme deadline compliance improved — the system flags expiring scheme purchase requirements before the window closes, preventing missed incentive capture"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "D02",
    "short_name": "Multi-Principal SKU Intel",
    "full_name": "Multi-Principal SKU & Inventory Intelligence",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Distribution",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "Across fifty brands, you cannot say which SKUs are dead stock today.",
    "node_type": "HUB",
    "metadata_watches": "Multi-principal stock data aggregated · Movement velocity per SKU · Expiry and obsolescence risk",
    "metadata_generates": "Dead stock flag · Fast/slow/risk classification · Principal-wise action list",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Mental inventory model across 10–50 principals · End-of-month write-off discovery",
    "metadata_returns": "Reduced dead stock · Better-informed purchase decisions per principal",
    "problem_paragraph": "You carry products from thirty principals. The inventory for each lives in your warehouse, across thousands of SKUs. Which of those SKUs haven't moved in sixty days? Which are approaching their return-to-principal date? Which principal's product is being cannibalized by another's? These questions have answers — but only if someone manually builds the analysis per principal, per product, per week. That work rarely gets done.",
    "x": 750,
    "y": 1200,
    "slug": "multi-principal-sku-inventory-intelligence",
    "proof_entries": [
      {
        "industry": "Distribution",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "15–25% improvement in forecasting accuracy across the principal portfolio — documented in Indian distribution and FMCG AI supply chain studies (ResearchGate, ADA, 2024–2026)",
    "Festival season stockouts eliminated for the three fastest-moving principals — pre-season stock positions built on forecast data rather than last year's experience",
    "Post-season excess inventory reduced by 30–40% as order quantities are calibrated to AI forecast rather than conservative over-ordering driven by stockout fear",
    "Working capital cycle improved as procurement timing is based on predicted demand velocity, not reactive replenishment"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "D03",
    "short_name": "Multi-Principal Demand Forecast",
    "full_name": "Demand Forecasting Across Multiple Principals",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Distribution",
    "industry_secondary": "FMCG",
    "priority": 9,
    "reality_sentence": "You overordered one brand and ran short on another. Both principals blamed your forecast.",
    "node_type": "HUB",
    "metadata_watches": "Retailer sell-through data · Historical demand patterns · Seasonal indices per principal",
    "metadata_generates": "Purchase forecast per principal per SKU · Overstock/understock risk flag",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Separate manual purchasing decisions per principal with no unified signal",
    "metadata_returns": "Fewer stock-outs across multi-brand portfolio · Reduced overbuying · Better working capital allocation",
    "problem_paragraph": "Each time you buy from a principal, you're making a forward bet on what your retailers will sell. Without a unified demand signal across your entire portfolio, you make each principal purchasing decision independently, using last month's sell-through and a feel for the market. The result is a warehouse simultaneously overstocked in one brand and out of another, with both principals holding you responsible for the outcome.",
    "x": 840,
    "y": 1180,
    "slug": "demand-forecasting-across-multiple-principals",
    "proof_entries": [
      {
        "industry": "Distribution",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "FMCG",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Principal scheme incentives fully captured — AI reconciliation ensures no eligible claim is missed due to documentation errors or missed deadlines (industry benchmark: 15–20% of distributor scheme value is historically unclaimed due to documentation failures)",
    "Reconciliation disputes with principals eliminated — every claim is backed by verified invoice-level transaction records with an auditable trail",
    "Secondary sales reporting time reduced from 3–5 days of manual field-data compilation to same-day automated generation",
    "Sales team confidence improved as field beat records are validated automatically rather than manually checked and questioned"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "D04",
    "short_name": "Scheme & Incentive Recon",
    "full_name": "Secondary Sales, Scheme & Claims Reconciliation",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Distribution",
    "industry_secondary": "FMCG",
    "priority": 9,
    "reality_sentence": "Your finance team spent two weeks on principal reconciliation. They are still disputing two claims.",
    "node_type": "HUB",
    "metadata_watches": "Principal scheme terms · Qualifying purchase and sales data · Claim submission timelines",
    "metadata_generates": "Automated claim calculation per principal · Discrepancy flag · Payment follow-up trigger",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Finance team spending days monthly on manual multi-principal reconciliation",
    "metadata_returns": "Faster claim settlement · Fewer disputes · Freed finance team capacity",
    "problem_paragraph": "Every principal runs schemes with different terms, different qualifying periods, and different claim formats. Your finance team tracks all of them manually, pulling data from different systems and building reconciliation spreadsheets for each. By month end, you've spent two weeks on a process that should take two days, and at least three principals are disputing your claim amounts. The money you should have recovered from legitimate schemes is still sitting in those disputes.",
    "x": 1150,
    "y": 360,
    "slug": "secondary-sales-scheme-claims-reconciliation",
    "proof_entries": [
      {
        "industry": "Distribution",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "FMCG",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
      "Scheme claim leakages are eliminated because the system tracks every retailer-level transaction against scheme conditions continuously",
      "Fraudulent or duplicate claims are flagged before payment is released, protecting scheme budgets from distributor gaming",
      "Finance team time spent on manual claims verification drops by 60-70%, freeing bandwidth for collections and cash flow management",
      "Distributor relationships improve because valid claims are settled faster with a clear audit trail"
    ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "D05",
    "short_name": "Working Capital Forecast",
    "full_name": "Working Capital & Cash Flow Forecasting",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Distribution",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "The cash crunch arrived on a Friday. You saw it coming on a Thursday.",
    "node_type": "BRIDGE",
    "metadata_watches": "Receivables aging and payment patterns · Principal payment schedules · Purchase commitments",
    "metadata_generates": "30/60/90-day cash flow projection · Shortfall alert · Optimal payment timing recommendation",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Reactive cash position checking into forward-looking capital planning",
    "metadata_returns": "Fewer cash crunches · Better-timed financing decisions · Reduced expensive short-term borrowing",
    "problem_paragraph": "Your business runs on the gap between when customers pay you and when you must pay your principals. The size of that gap changes daily as orders come in, collections land, and payments go out. You know your bank balance. You don't know your cash position in thirty days, or which collections this week will actually arrive. The crunch doesn't announce itself until you're already in it. ---",
    "x": 1200,
    "y": 200,
    "slug": "working-capital-cash-flow-forecasting",
    "proof_entries": [
      {
        "industry": "Distribution",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Cash crunch situations anticipated 3–4 weeks ahead — the business can pre-arrange overdraft drawdowns or delay discretionary spend before a crisis hits, not during one",
    "Working capital cycle made visible for the first time: debtor days, creditor days, and stock holding days shown together as a single number rather than three separate spreadsheets reconciled at month-end",
    "15–20% improvement in cash utilization documented in comparable deployments by reducing idle cash sitting in current accounts while payables remain unpaid (McKinsey working capital management benchmark, B2B distribution)",
    "Owner and CFO move from reactive cash management — responding to a shortfall that already exists — to planned drawdowns and early collections triggered by a forecast, not a crisis"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Reads receivables, payables, and payment patterns · Predicts cash position 60 days forward · Flags shortfalls before they become crises",
    "watermarkType": "data"
  },
  {
    "node_id": "L01",
    "short_name": "Predictive Fleet Maintenance",
    "full_name": "Predictive Vehicle Maintenance & Breakdown Prevention",
    "cluster_primary": "MACHINE INTELLIGENCE",
    "cluster_secondary": "LOGISTICS & DISTRIBUTION",
    "industry_primary": "Logistics",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "Your truck broke down at Bhuj. The port shipment missed the vessel.",
    "node_type": "HUB",
    "metadata_watches": "Vehicle telematics data · GPS and fuel consumption patterns · Usage and stress metrics",
    "metadata_generates": "Failure risk score per vehicle · Maintenance priority queue · Route assignment adjustment for high-risk vehicles",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Calendar-based fleet maintenance · Discovery of breakdown only when vehicle stops",
    "metadata_returns": "Fewer on-road breakdowns · Emergency repair costs reduced · On-time delivery improved",
    "problem_paragraph": "Your fleet maintenance runs on a calendar. Every three months, every vehicle goes in for service. Whether the vehicle needs it yet, or already needed it two weeks ago, is irrelevant — the calendar is the system. The breakdown that happens between services — the one that stops your Mundra-bound truck four hours from the port — carries a cost in demurrage, emergency repair, and missed delivery that no calendar interval could have predicted. Condition could have.",
    "x": 460,
    "y": 560,
    "slug": "predictive-vehicle-maintenance-breakdown-prevention",
    "proof_entries": [
      {
        "industry": "Logistics",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "70% reduction in unplanned breakdowns — documented across fleet operators deploying AI predictive maintenance at scale (Deloitte Analytics Institute; confirmed by multiple 2025–2026 fleet operator studies)",
    "Vehicle utilization rate improved as planned maintenance windows replace emergency downtime — trucks are off the road on schedule, not stranded on highways",
    "Emergency repair cost eliminated — planned workshop repairs cost 3–4x less than roadside breakdown repairs on average",
    "Driver productivity and safety improved as vehicles reach service windows before component failures rather than after"
  ],
    "proofCitation": {
      "company": "Mahindra Logistics (India)",
      "system": "AI-optimized route planning for EV fleet",
      "date": "2024",
      "result": "25 million green kilometers, 8 million packages delivered",
      "source": "Mahindra Logistics Annual Report",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "logistics"
  },
  {
    "node_id": "L02",
    "short_name": "Route & Load Optimization",
    "full_name": "AI Route & Load Optimization Engine",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": null,
    "industry_primary": "Logistics",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "Your truck left half-loaded. Your driver took the longer route. Nobody planned either.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Daily delivery order list · Vehicle capacity and availability · Multi-stop delivery zones",
    "metadata_generates": "Optimized multi-stop route sequence · Load plan per vehicle · Driver route sheet via WhatsApp",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual dispatcher route planning · Suboptimal vehicle loading decisions",
    "metadata_returns": "10–15% lower fuel consumption per delivery · Higher load factor per trip",
    "problem_paragraph": "Your dispatcher plans the next day's routes by experience and familiarity. The same zone goes to the same driver, the load is assembled by the warehouse team, and the vehicle leaves at the usual time. Whether that route is optimal, whether that vehicle is efficiently loaded, whether a different sequence would have cut forty kilometers off the day — these calculations don't happen. Fuel is fifty-five to sixty-five percent of your operating cost, and you're not actively managing it.",
    "x": 1200,
    "y": 1100,
    "slug": "ai-route-load-optimization-engine",
    "proof_entries": [
      {
        "industry": "Logistics",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "18–25% reduction in per-km delivery cost within 90 days of deployment — documented in Indian last-mile logistics operations (Locus, FleetRabbit, 2026 industry data)",
    "On-time delivery rate improved by 15–20% as route sequences account for time windows, traffic patterns, and loading constraints that dispatcher intuition misses",
    "Vehicles loaded to higher utilization per trip, reducing the number of trips required to complete the same delivery volume",
    "Customer satisfaction improved through accurate delivery window commitments generated at dispatch, replacing vague 'sometime today' estimates"
  ],
    "proofCitation": {
      "company": "Maersk (Global)",
      "system": "Predictive AI models for vessel routing",
      "date": "2023",
      "result": "$300 million saved annually",
      "source": "Maersk Corporate Sustainability Report 2023",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "logistics"
  },
  {
    "node_id": "L03",
    "short_name": "Empty-Mile Optimization",
    "full_name": "Empty-Mile & Backhaul Optimization",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": "FINANCIAL INTELLIGENCE",
    "industry_primary": "Logistics",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "The truck returns empty from Mundra every time. That empty run is pure cost.",
    "node_type": "BRIDGE",
    "metadata_watches": "Vehicle return route and timing · Available loads in return corridor · Load marketplace signals",
    "metadata_generates": "Return load opportunity match · Revenue estimate for backhaul acceptance",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Empty truck returns with driver waiting at origin for next outbound load",
    "metadata_returns": "Additional revenue per round trip · 25–40% of empty kilometers converted to productive runs",
    "problem_paragraph": "Gujarat's freight flows heavily outbound. You have no shortage of outbound loads from manufacturing clusters to ports and metros. But the return trips are structurally empty — your driver waits at origin for the next outbound assignment while the vehicle generates no revenue. Between twenty-five and forty percent of your total kilometers are empty. That percentage is a cost with no corresponding service delivered.",
    "x": 1500,
    "y": 820,
    "slug": "empty-mile-backhaul-optimization",
    "proof_entries": [
      {
        "industry": "Logistics",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "12–18% of fleet operating cost recovered through backhaul revenue on return legs that previously generated no income (industry benchmark: Indian logistics operators report 30–40% of total km driven are empty; recovering even half generates significant margin)",
    "Fleet asset utilization measurably improved — each truck generates revenue in both directions rather than earning on the forward leg only",
    "Fuel cost per revenue km reduced as empty return miles are replaced by loaded backhaul runs",
    "New logistics revenue streams created without additional fleet investment, improving EBITDA on existing asset base"
  ],
    "proofCitation": {
      "company": "Anonymized — Indian 3PL Provider",
      "system": "ML-based load-balancing and predictive vehicle maintenance",
      "date": "2023",
      "result": "20% reduction in fuel consumption",
      "source": "ADA Global, KenResearch",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "logistics"
  },
  {
    "node_id": "L04",
    "short_name": "E-Way Bill & Documentation",
    "full_name": "Automated E-Way Bill, LR & Customs Documentation Generator",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": "LOGISTICS & DISTRIBUTION",
    "industry_primary": "Logistics",
    "industry_secondary": "Export",
    "priority": 8,
    "reality_sentence": "The vehicle was detained at the checkpoint. The e-way bill figure didn't match the invoice.",
    "node_type": "BRIDGE",
    "metadata_watches": "Sales invoice and order data · Shipment details · GSTIN and HSN codes · Export cargo details",
    "metadata_generates": "E-way bill · Lorry receipt · Customs/port document draft · Validation check before transmission",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual generation of each transport document separately from shared trip data",
    "metadata_returns": "Drastically reduced documentation time per trip · Fewer checkpoint detentions",
    "problem_paragraph": "Every trip generates paperwork: an e-way bill, a lorry receipt, and — for export cargo — a customs document set. Each is currently prepared manually by your documentation team from the same underlying shipment data, entered repeatedly across formats. An error in a GSTIN, a distance miscalculation, a mismatched HSN code stops your vehicle at the checkpoint or rejects your cargo at the port gate. ---",
    "x": 1750,
    "y": 380,
    "slug": "automated-e-way-bill-lr-customs-documentation-generator",
    "proof_entries": [
      {
        "industry": "Logistics",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Export",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Documentation time per dispatch reduced from 20–30 minutes to under 2 minutes — eliminates the primary source of gate detention delays at loading",
    "E-way bill generation errors eliminated as data flows from ERP directly to GST portal without manual re-entry, removing the key cause of compliance rejections",
    "Gate detention incidents eliminated — trucks are cleared with complete, accurate documentation rather than waiting for the documentation team to catch up",
    "Compliance audit readiness improved as every dispatch has a complete, timestamped documentation record accessible from the system"
  ],
    "proofCitation": {
      "company": "DHL (Global)",
      "system": "AI-powered automated sorting and warehouse management",
      "date": "2022",
      "result": "40% increase in sorting capacity, 99% sorting accuracy",
      "source": "DHL Innovation Center",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "EX01",
    "short_name": "Export Documentation Auto",
    "full_name": "AI Export Documentation Automation System",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Export",
    "industry_secondary": null,
    "priority": 10,
    "reality_sentence": "Your LC has a discrepancy. Payment is delayed twenty days. The bank charges are yours.",
    "node_type": "HUB",
    "metadata_watches": "Export order confirmation · LC terms · Product specifications · Buyer requirements",
    "metadata_generates": "Commercial invoice · Packing list · Shipping bill draft · COO · Bank negotiation set — from single data entry",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual preparation of each document separately with repeated data re-entry",
    "metadata_returns": "LC discrepancy rate: 30–40% → under 5% · Documentation time reduced 70–80%",
    "problem_paragraph": "Your export documentation process starts with a confirmed order and ends with the bank receiving a set of documents that are supposed to be internally consistent, LC-compliant, and accurately prepared across seven or more separate formats. Your team prepares each document by hand, re-entering the same data across commercial invoice, packing list, shipping bill, certificate of origin, and bank negotiation set. A discrepancy between any two of them — a value rounded differently, a description worded slightly differently — triggers a bank return that delays payment by three to four weeks.",
    "x": 1600,
    "y": 420,
    "slug": "ai-export-documentation-automation-system",
    "proof_entries": [
      {
        "industry": "Export",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Export documentation preparation time reduced by 70–80% per shipment — packing lists, commercial invoices, certificates of origin, and shipping bills generated automatically from the purchase order and item master rather than typed per consignment",
    "Documentation errors that trigger customs holds and port delays become rare because the system validates field consistency across all documents before the set is submitted",
    "Compliance with country-specific documentation requirements handled automatically — the system applies the correct format and mandatory fields for each destination market without manual reference to country-wise checklists",
    "A small export team can handle 3–4x the shipment volume without additional headcount because the administrative bottleneck is replaced by a review-and-approve workflow instead of a type-from-scratch one"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "EX02",
    "short_name": "LC Compliance Monitoring",
    "full_name": "AI Letter of Credit Compliance Monitoring System",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "QUALITY & COMPLIANCE",
    "industry_primary": "Export",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "Every third LC you submit comes back with a discrepancy your team missed.",
    "node_type": "HUB",
    "metadata_watches": "LC terms extracted from received LC · Document preparation against compliance checklist",
    "metadata_generates": "Real-time compliance check per document · Discrepancy flag with correction suggestion · Compliance score",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Informal LC compliance review by export staff without dedicated LC expertise",
    "metadata_returns": "LC discrepancy rate: 35% → under 5% · Payment realization accelerated 15–20 days",
    "problem_paragraph": "An LC is a contract that pays you if, and only if, every document you submit matches its terms exactly. Most of your export team understands the concept. What they don't have is a systematic method for checking every document against every LC clause before submission. The discrepancy rate for Indian SME LC exporters runs between thirty and forty percent. When your bank returns the documents, you're not just delayed — you're paying correction charges and losing the interest on a payment that should have arrived three weeks ago.",
    "x": 1300,
    "y": 420,
    "slug": "ai-letter-of-credit-compliance-monitoring-system",
    "proof_entries": [
      {
        "industry": "Export",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "LC discrepancy rate reduced to under 10% — AI validates every document field against LC conditions before submission, eliminating the missed clauses and inconsistent phrasing that generate bank rejection (global LC discrepancy rates average 40–70% under manual review, Loamist trade finance benchmark)",
    "Bank charges for document re-presentation eliminated on the majority of shipments — each rejected document set typically costs ₹15,000–₹40,000 in bank fees plus financing cost for delayed payment",
    "LC expiry risks managed proactively — the system tracks shipment readiness against LC validity windows and flags when a delay is likely to cause an expiry before presentation",
    "Finance team knows the status of every open LC in real time — presentation deadline, document readiness, and any open discrepancy — instead of tracking this across email threads and a shared spreadsheet"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "EX03",
    "short_name": "Export Incentive Optimizer",
    "full_name": "Export Incentive & Scheme Optimization System",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Export",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Your RoDTEP claim sits uncollected. Your CA says you've missed ₹30 lakh this year.",
    "node_type": "BRIDGE",
    "metadata_watches": "Shipment data from ICEGATE/shipping bills · RoDTEP rates · Drawback schedules · EPCG/AA obligations",
    "metadata_generates": "Scheme eligibility analysis per shipment · Claim calculation · DGFT filing application · Benefit tracking",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual incentive tracking by finance team or CA with frequent gaps and missed claims",
    "metadata_returns": "All eligible incentives claimed (2–5% of FOB value) · ₹25–50 lakh/year previously unclaimed recovered",
    "problem_paragraph": "The Indian government offers exporters a range of duty and tax benefit schemes — RoDTEP, drawback, Advance Authorization, EPCG — that together can represent two to five percent of your FOB shipment value. For a business doing five crores a month in exports, that's twenty-five to fifty lakh rupees annually. Most SME exporters claim some of these benefits some of the time. The claims that are missed aren't because the entitlement doesn't exist — they're missed because the tracking process didn't flag them before the window closed.",
    "x": 1250,
    "y": 450,
    "slug": "export-incentive-scheme-optimization-system",
    "proof_entries": [
      {
        "industry": "Export",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "RODTEP, MEIS, and RoDTEP scrip entitlements calculated automatically per shipment — no claims missed because a scheme was overlooked or the HS code mapping was incorrect",
    "Incentive receivable tracked as a real-time balance rather than a quarterly estimate, giving the CFO an accurate picture of what is owed by DGFT before the books are closed",
    "Scrip utilization optimized — the system matches available incentive scrips against upcoming import duty payments to maximize cash benefit instead of letting scrips expire or selling them at a discount",
    "Incentive claims filed faster with complete documentation because the system generates the filing pack from shipment data automatically, reducing the average claim cycle from 60–90 days to under 30"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "EX04",
    "short_name": "International Buyer Intel",
    "full_name": "International Buyer Intelligence & Relationship System",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Export",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "You have twelve active buyers. Your relationship lives in your sales director's email account.",
    "node_type": "BRIDGE",
    "metadata_watches": "Buyer order history · Communication records · Compliance requirements per buyer · Market and category signals",
    "metadata_generates": "Buyer engagement health score · Relationship gap alert · New opportunity flag per buyer",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Buyer relationships held in one person's email into a structured, shareable intelligence system",
    "metadata_returns": "No buyer relationship lost to key-person dependency · Better-timed re-engagement",
    "problem_paragraph": "You have relationships with buyers across eight countries. The knowledge of what each buyer needs, what they've ordered, what their compliance requirements are, and when it's the right time to approach them about new business — lives in your export manager's email account and in the notes your sales director keeps in a personal diary. If either of them leaves, that knowledge walks out with them. And when a buyer goes quiet for sixty days, there's no system that flags it before the relationship has already cooled.",
    "x": 1890,
    "y": 960,
    "slug": "international-buyer-intelligence-relationship-system",
    "proof_entries": [
      {
        "industry": "Export",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Every international buyer's order history, payment behavior, compliance requirements, and communication record maintained in a single place — no knowledge lost when the relationship manager changes",
    "Buyer reorder patterns tracked so the sales team contacts key accounts before they place an inquiry elsewhere, rather than responding reactively when an RFQ arrives",
    "Compliance and documentation preferences per buyer maintained automatically — correct format, preferred incoterms, and labeling requirements applied to every shipment without manual reference to buyer-specific folders",
    "Revenue concentration risk visible at a glance — the system flags when 30%+ of export revenue depends on a single buyer, prompting proactive diversification before a cancellation becomes a crisis"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "EX05",
    "short_name": "Freight & Shipping Optimizer",
    "full_name": "AI Freight & Shipping Optimization System",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": "FINANCIAL INTELLIGENCE",
    "industry_primary": "Export",
    "industry_secondary": "Logistics",
    "priority": 8,
    "reality_sentence": "Your freight cost went up fifteen percent. You accepted the rate because you had no comparison.",
    "node_type": "BRIDGE",
    "metadata_watches": "Freight rate quotes across carriers · Shipping line schedules · Mundra/Nhava Sheva/Kandla options",
    "metadata_generates": "Optimal carrier and routing recommendation · Cost comparison across options · Booking trigger",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Accepting first freight quote from familiar forwarder without comparison",
    "metadata_returns": "5–15% freight cost reduction per shipment · Faster booking with documented justification",
    "problem_paragraph": "Your freight booking happens through a familiar freight forwarder at a rate you've been accepting for years. You know roughly what Mundra-to-Rotterdam costs and what Nhava Sheva-to-Felixstowe costs. What you don't know is whether today's market has a better option on a different carrier, a different routing, or a different vessel schedule. Freight is typically ten to fifteen percent of the FOB value of your shipment. A five percent improvement on that number is real money, uncaptured because the comparison isn't made. ---",
    "x": 900,
    "y": 820,
    "slug": "ai-freight-shipping-optimization-system",
    "proof_entries": [
      {
        "industry": "Export",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Logistics",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Freight cost per shipment reduced by 8–15% through carrier and routing optimization — the system compares current rates across forwarders and identifies the lowest compliant option for each lane automatically (McKinsey logistics cost optimization benchmark for mid-size exporters)",
    "Booking delays eliminated — the system generates freight booking requests with complete shipment details the moment cargo is ready, instead of waiting for a logistics coordinator to manually compile the request",
    "Detention and demurrage charges reduced because container release documentation is prepared and submitted before the free-days window closes, not after it has already been exceeded",
    "Freight spend becomes auditable: every carrier selection is logged against the rate quoted, the alternatives considered, and the reason for the choice — replacing the current situation where rate negotiations happen in WhatsApp and the logic is invisible"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "logistics"
  },
  {
    "node_id": "FP01",
    "short_name": "Food Production Scheduling",
    "full_name": "AI Production Planning & Batch Scheduling System",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": "SUPPLY CHAIN INTELLIGENCE",
    "industry_primary": "FMCG",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "The groundnuts arrived past optimal freshness. You had already scheduled three days of production.",
    "node_type": "HUB",
    "metadata_watches": "Customer orders · Demand forecast (7–14 days) · Raw material inventory with expiry dates · Line capacity",
    "metadata_generates": "Optimized batch schedule · Raw material gap identification · Purchase recommendation",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual batch scheduling balancing perishable inputs, orders, and shelf life simultaneously",
    "metadata_returns": "Raw material wastage reduced 20–30% · On-time order fulfillment improved to 95%+",
    "problem_paragraph": "Your production schedule must simultaneously account for perishable raw materials with shrinking windows, customer orders with fixed deadlines, and production line capacity that cannot be easily expanded at short notice. The variables change every day — a delivery of groundnuts arrives below standard moisture, a big order comes in for next Tuesday, and a machine needs servicing. Planning all of this in a spreadsheet means something always gets sacrificed, and what gets sacrificed is usually either freshness or a customer commitment.",
    "x": 900,
    "y": 640,
    "slug": "ai-production-planning-batch-scheduling-system",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "15–22% more raw material processed within a fixed seasonal window — AI scheduling eliminates the capacity idle time and sequencing inefficiencies that cost food processors throughput during peak season (McKinsey food processing operations benchmark)",
    "Finished goods shelf life maximised — optimal batch sequencing and line allocation ensures the longest possible shelf life for each product out of the factory",
    "Raw material wastage reduced as input arrival schedule is matched to processing capacity in advance, preventing quality degradation from input backlogs",
    "Production manager's planning effort reduced from 2–3 days of manual spreadsheet work per week to a 30-minute review cycle"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "FP02",
    "short_name": "FSSAI Compliance System",
    "full_name": "FSSAI Compliance & Food Safety Management System",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "FMCG",
    "industry_secondary": null,
    "priority": 10,
    "reality_sentence": "The FSSAI inspector arrived unannounced. Your supplier approval records were in three different folders.",
    "node_type": "HUB",
    "metadata_watches": "Supplier approval records · Incoming material test results · In-process QC data · Non-conformance events",
    "metadata_generates": "Supplier renewal alert · FSSAI report · Audit readiness score · Inspection preparation package",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual compliance tracking across supplier files, QC logs, and calendar reminders",
    "metadata_returns": "FSSAI inspection pass rate near 100% · License suspension risk eliminated",
    "problem_paragraph": "FSSAI requires you to maintain a Food Safety Management System with documented supplier approvals, incoming material test records, in-process QC data, non-conformance tracking, and audit-ready documentation for every product you make. In practice, your supplier records are in one folder, your test results are in another, and your non-conformance register is a page in a shared notebook. When the inspector arrives, you spend the first two hours locating documents. When they find the gap, it's already written in the report.",
    "x": 1600,
    "y": 420,
    "slug": "fssai-compliance-food-safety-management-system",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Inspection readiness maintained continuously — all CCP monitoring records, temperature logs, and sanitation schedules are automatically captured and organised, eliminating the 2–4 week panic preparation period before an FSSAI audit",
    "License renewal preparation time reduced from 3–4 weeks to under 1 day as all required documentation is already compiled and current in the system",
    "Non-conformance incidents detected in real time rather than discovered during internal audits — temperature deviations and CCP failures trigger immediate alerts to the QA supervisor",
    "HACCP documentation errors eliminated as CCP logs are auto-populated from sensor and device data rather than manually entered by operators"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "FP03",
    "short_name": "Agri RM Procurement Intel",
    "full_name": "Agricultural Raw Material Procurement Intelligence System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "FMCG",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "You bought at the season peak. The price dropped thirty percent the following week.",
    "node_type": "HUB",
    "metadata_watches": "NCDEX/MCX/APMC commodity price feeds · Production requirement forecast · Vendor quality scorecard",
    "metadata_generates": "Price trend analysis · Forward booking vs. spot recommendation · Annual commodity strategy",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive agri commodity purchasing without market intelligence or timing analysis",
    "metadata_returns": "Raw material cost reduction 5–10% through better timing · Supply security through advance planning",
    "problem_paragraph": "Your raw materials are agricultural commodities — groundnuts, spices, oilseeds, milk solids, wheat — and their prices move with seasons, monsoons, APMC arrivals, and export demand. You buy when the price seems reasonable and the material is available. Whether that price was near a cycle peak or approaching a trough — whether you should have bought last month or should wait two more weeks — requires intelligence you don't have in a structured form. Over the course of a year, those timing decisions are worth five to ten percent of your raw material cost.",
    "x": 920,
    "y": 1220,
    "slug": "agricultural-raw-material-procurement-intelligence-system",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "8–15% reduction in input cost per tonne through systematic mandi price tracking and evidence-based procurement timing versus relationship-driven broker buying (CII agri-commodity procurement efficiency benchmark for Indian food processors)",
    "Storage utilization optimised — procurement quantities are calibrated to available capacity and processing schedule rather than broker availability, eliminating the overbuying that drives spoilage",
    "Price trend visibility gives the procurement team a negotiation position rather than information asymmetry against mandi brokers",
    "Post-season input cost variance reduced as planned purchases replace reactive market buying when prices are already elevated"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "FP04",
    "short_name": "Distributor & Secondary Sales",
    "full_name": "Distributor Management & Secondary Sales Intelligence System",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "FMCG",
    "industry_secondary": "Distribution",
    "priority": 9,
    "reality_sentence": "You shipped to the distributor. Whether it reached the kirana is anyone's guess.",
    "node_type": "HUB",
    "metadata_watches": "Primary sales data · Secondary sales data from distributor network · Offtake patterns per zone",
    "metadata_generates": "True demand signal (vs. channel stuffing) · Distributor performance alert · New market opportunity flag",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Primary sales visibility into actual retail sell-through intelligence",
    "metadata_returns": "Demand forecast accuracy improved 30–40% when secondary data is introduced",
    "problem_paragraph": "You sell to distributors. Whether your product is reaching the kirana retailer and the end consumer is a question you currently cannot answer with any precision. Your primary sales data — what you shipped to distributors — tells you about your dispatch, not about your market. The distributor ordered from you this month. Whether they sold it or stocked it or let it sit in their godown while your competitor's product moved briskly on the shelf beside it — you don't know until the next order doesn't come.",
    "x": 1050,
    "y": 1000,
    "slug": "distributor-management-secondary-sales-intelligence-system",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Real sell-through data replaces estimated secondary sales within 60 days of deployment — primary sales no longer used as a proxy for what consumers are actually buying",
    "Under-performing distributor beats identified with outlet-level visibility instead of being buried in aggregate monthly reports",
    "Distributor review meeting quality improved dramatically — discussions are driven by data on specific outlets and beats rather than disputed aggregate figures",
    "Inventory redistribution decisions — moving stock from overstocked to understocked distributors — made on real data rather than principal's assumptions"
  ],
    "proofCitation": {
      "company": "Anonymized — Major Indian FMCG (Top 5)",
      "system": "AI-enabled Distributor Management System (DMS)",
      "date": "2022",
      "result": "15-25% improved distributor fulfillment rates",
      "source": "Deloitte India",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "logistics"
  },
  {
    "node_id": "FP05",
    "short_name": "Product Costing & Margin",
    "full_name": "Product Costing & Profitability Intelligence",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "FMCG",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "Your best-selling SKU has a margin you've never calculated precisely on current input costs.",
    "node_type": "HUB",
    "metadata_watches": "Input cost data per SKU · Batch production actuals · Overhead allocations · Pricing per customer",
    "metadata_generates": "Per-SKU margin at current input costs · Loss-making SKU flag · Pricing gap alert",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Gross margin estimated at budget time into per-SKU profitability at actual current costs",
    "metadata_returns": "Loss-making SKUs identified · Pricing decisions grounded in current cost reality",
    "problem_paragraph": "You know your gross revenue. You know your largest cost lines in aggregate. What you probably don't know — precisely, at current input prices — is the margin on each of your SKUs. Groundnut prices moved twelve percent last quarter. Your packaging cost changed with the paper pulp index. Your pricing was set six months ago in a different cost environment. Some of your best-selling SKUs may be generating margin that no longer justifies their position in your portfolio. You won't know until someone does the calculation at current prices, product by product.",
    "x": 1100,
    "y": 300,
    "slug": "product-costing-profitability-intelligence",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "True SKU-level gross margin calculated for the first time — most food processors estimate profitability at product category level; AI-driven costing reveals margin differences of 8–15% between SKUs in the same category (Deloitte FMCG manufacturer costing benchmark)",
    "Low-margin SKUs identified for re-pricing, reformulation, or discontinuation — preventing continued investment in products that erode overall margin",
    "Pricing strategy aligned to actual cost structure rather than competitive benchmarking alone, protecting margin during raw material cost movements",
    "Returns, wastage, and secondary-grade output costs allocated to specific SKUs, revealing the true net contribution after quality losses"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Reads competitor pricing and demand signals · Calculates optimal price per channel · Updates pricing without human intervention",
    "watermarkType": "data"
  },
  {
    "node_id": "FP06",
    "short_name": "Food Processor Dashboard",
    "full_name": "Food Processor Owner's Intelligence Dashboard",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "FMCG",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "You run a crore-a-month operation from a WhatsApp group and a weekly Tally printout.",
    "node_type": "BRIDGE",
    "metadata_watches": "Production output · Sales and dispatch · Finance and collections · Distributor offtake",
    "metadata_generates": "Daily business health summary · Anomaly alert · Exception requiring owner attention",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "WhatsApp group messages and weekly Tally printout into single mobile daily business view",
    "metadata_returns": "Founder decision-making based on current data · Status update time eliminated",
    "problem_paragraph": "Your business runs at a crore or more per month. Your visibility into it — daily — comes from a WhatsApp group where the plant manager sends yesterday's production number, a Tally statement your accountant generates weekly, and whatever your sales coordinator can tell you about orders in hand. The picture is fragmentary, delayed, and always from different reference points in time. You run the business on experience and instinct because the data doesn't arrive in a form that supports anything else. ---",
    "x": 2000,
    "y": 740,
    "slug": "food-processor-owners-intelligence-dashboard",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Owner can manage plant performance from any location — exception-only reporting eliminates the need for physical presence or daily phone call cycles to gather status",
    "Critical deviations — production below target, quality rejections above threshold, dispatch delays, or receivables overdue — surface to the owner within hours, not days",
    "Monthly P&L as the only financial signal replaced by daily receivables, margin, and dispatch visibility, enabling faster business decisions",
    "Management by exception replaces management by information gathering — the owner's time is spent on actual decisions, not on chasing updates"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "C01",
    "short_name": "Batch Yield Optimization",
    "full_name": "Batch Process Yield & Deviation Optimization",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": "QUALITY & COMPLIANCE",
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "This batch yielded four points below standard. The last six also did. Nobody investigated why.",
    "node_type": "HUB",
    "metadata_watches": "Batch process parameters (DCS/manual log) · Temperature, pressure, reaction time, RM purity",
    "metadata_generates": "Historical yield correlation analysis · Optimal parameter range · Real-time deviation alert during batch",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Post-batch yield analysis with no in-process correction capability",
    "metadata_returns": "Higher average batch yield · Fewer off-spec/rework batches · Raw material wastage reduced",
    "problem_paragraph": "Batch-to-batch yield variation is a normal feature of specialty chemical manufacturing. What is not normal is running six consecutive batches below standard yield without identifying the cause. Temperature drift during reaction, raw material purity variation, operator handling differences, reaction time variance — each of these can shift yield by two to four percentage points. At sixty to seventy-five percent raw material costs, that variation is a direct and compounding cost. Most SME chemical plants track final yield. They don't track what caused the deviation.",
    "x": 760,
    "y": 640,
    "slug": "batch-process-yield-deviation-optimization",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "3–8% improvement in average batch yield — achieved through identification and correction of the process parameter combinations that drive sub-optimal yield (McKinsey Industry 4.0 process optimisation benchmark for batch processing, documented in food and specialty chemical sectors)",
    "Yield variability reduced — batch-to-batch standard deviation narrows as the system identifies the parameter combinations that consistently deliver above-average yield",
    "Root cause of yield losses identified systematically within 24 hours rather than remaining unexplained after weeks of manual review",
    "Process optimisation knowledge captured in the system rather than residing only in the experience of individual operators who may leave"
  ],
    "proofCitation": {
      "company": "BASF (Global, Geismar Plant)",
      "system": "Unsupervised ML batch analysis & PlantGPT assistant",
      "date": "2022",
      "result": "5-10% reduction in batch production time",
      "source": "BASF Corporate Report 2022, Siemens",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "C02",
    "short_name": "Chemical Energy Optimization",
    "full_name": "Energy & Utility Consumption Optimization",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "Your electricity cost grew this quarter. You cannot isolate which reactor is burning the excess.",
    "node_type": "BRIDGE",
    "metadata_watches": "Utility meter data (power, steam, fuel) · Production schedule mapping · Reactor and equipment runtime",
    "metadata_generates": "Consumption-per-batch analysis · Anomaly detection (idle load, inefficiency) · Monthly efficiency report",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Undifferentiated monthly utility bill into process-step energy accountability",
    "metadata_returns": "Lower per-unit energy cost · Equipment-level inefficiency identified",
    "problem_paragraph": "Steam, electricity, compressed air, and cooling water account for eight to fifteen percent of your chemical plant's operating cost. That cost arrives on one utility bill. You know the total. You don't know how much each reactor consumed per batch, which piece of equipment is running inefficiently, or whether an off-peak load shift could cut your demand charges by twenty percent. The data exists in your plant. The connection between that data and your energy bill has never been made.",
    "x": 1540,
    "y": 860,
    "slug": "energy-utility-consumption-optimization",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "8–18% reduction in energy cost per unit of production — documented range for manufacturing and food processing facilities deploying equipment-level energy monitoring with AI scheduling (McKinsey Industry 4.0 energy efficiency benchmark; EESL India industrial energy studies)",
    "Peak demand penalty charges reduced by scheduling high-load equipment to run outside peak tariff windows",
    "Equipment idle-running waste eliminated — boilers, compressors, and chillers running without active production load are identified and shut down automatically or flagged",
    "Energy cost per tonne or per batch becomes a trackable production KPI for the first time, replacing the utility bill as the only energy visibility"
  ],
    "proofCitation": {
      "company": "Anonymized — Chlor-alkali Chemical Manufacturer",
      "system": "AI energy management system",
      "date": "2022",
      "result": "8-15% reduction in energy cost per ton",
      "source": "RSISInternational",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "C03",
    "short_name": "Chemical QC & COA Generation",
    "full_name": "AI-Assisted Quality Testing & COA Generation",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": "Pharma",
    "priority": 8,
    "reality_sentence": "The COA was issued with the wrong assay value. The customer's goods receipt rejected the batch.",
    "node_type": "BRIDGE",
    "metadata_watches": "Instrument outputs · Specification limits per product · Last 20-batch trend",
    "metadata_generates": "Automated pass/fail · Drift alert approaching spec limit · COA on QA approval",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual transcription of lab results into COA document",
    "metadata_returns": "Lab transcription errors eliminated · COA generation automated · Test cycle reduced 30–50%",
    "problem_paragraph": "Your QC lab runs tests on instruments that generate precise, reliable data — and then your analyst transcribes that data by hand into a certificate of analysis. That transcription step introduces error risk that the instrument itself doesn't carry. Your COA is the document your customer uses to accept or reject your shipment. A value entered incorrectly, a specification limit copied from the wrong method version, or a missing field means the COA fails the customer's goods receipt system — and the shipment waits.",
    "x": 1700,
    "y": 250,
    "slug": "ai-assisted-quality-testing-coa-generation",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Pharma",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Response time to safety events drops dramatically when a sensor breach triggers an immediate, escalating alert instead of waiting for a supervisor to notice on a routine check",
    "An off-site or night-shift gas leak alarm reaches an emergency contact even when the nearest supervisor isn't physically present",
    "Safety compliance documentation builds itself continuously through the incident log, instead of being reconstructed after the fact for a regulator",
    "Near-miss patterns become visible over time, enabling preventive action before a real incident occurs"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "C04",
    "short_name": "Feedstock Procurement Intel",
    "full_name": "Raw Material & Feedstock Procurement Intelligence",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "The petrochemical derivative price moved. You bought at the wrong point in the cycle.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Petrochemical and intermediates price feeds · Historical price cycle patterns · Supplier supply risk signals",
    "metadata_generates": "Price trend alert · Purchase timing recommendation · Vendor risk flag",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive feedstock purchasing without market intelligence or price cycle awareness",
    "metadata_returns": "Better-timed purchasing relative to price cycles · Lower average raw material acquisition cost",
    "problem_paragraph": "Your feedstock is a petrochemical derivative. Its price tracks crude, moves with seasonal demand cycles, and responds to supply events in Jamnagar and Vadodara. You buy when you need it, from a supplier you trust, at the price the supplier quotes. Whether that moment in the cycle was optimal, whether an alternate supplier had better pricing, or whether waiting two weeks would have saved fifteen percent — you don't know, because you don't have the market data that would tell you.",
    "x": 520,
    "y": 1360,
    "slug": "raw-material-feedstock-procurement-intelligence",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "AI-driven compliance automation has reduced audit and regulatory reporting preparation time by 40-60% in comparable regulated-manufacturing environments, by generating records automatically from sensor and process data",
    "The monthly submission compiles itself continuously from monitoring data, instead of three people spending two days assembling it before the deadline",
    "Non-compliance with consent-to-operate parameters is flagged the day it happens, not discovered when the report is being prepared",
    "A historical compliance trend becomes visible, useful both internally and as evidence of good-faith operation during an inspection"
  ],
    "proofCitation": {
      "company": "Reliance Industries Limited (India)",
      "system": "AI feedstock optimization across O2C complex",
      "date": "2023",
      "result": "Consistent improvement in yield",
      "source": "Reliance Industries Annual Report, ChemIn Digest",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "C05",
    "short_name": "Predictive Safety Alert",
    "full_name": "Predictive Safety Incident & Gas Detection Alert",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "The sensor crossed the alarm threshold. By then, the leak had been building for six hours.",
    "node_type": "HUB",
    "metadata_watches": "Gas, pressure, temperature, vibration sensor trends · Pre-threshold drift patterns",
    "metadata_generates": "Early warning alert to shift supervisor before threshold breach · Preventive action trigger",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Binary hard-threshold alarm that triggers only when breach has already occurred",
    "metadata_returns": "Reduced risk of leaks, fires, and equipment-failure incidents · Fewer emergency shutdowns",
    "problem_paragraph": "Your gas detectors trigger an alarm when a threshold is crossed. By the time that alarm sounds, the leak or accumulation has been building. Fixed binary sensors tell you that a limit has been reached — they don't tell you that a trend has been developing for six hours that will cross that limit in another two. A chemical plant safety incident carries financial cost, regulatory consequence, and human risk. The most valuable signal is the one before the alarm, not the one after it.",
    "x": 1600,
    "y": 420,
    "slug": "predictive-safety-incident-gas-detection-alert",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Vehicle detentions at the gate for missing or incorrect hazmat paperwork drop sharply once the full document pack is validated and ready before the truck leaves the plant",
    "Transport-related fines tied to incomplete PESO documentation become rare because compliance is checked automatically, not assumed",
    "Gate clearance happens faster because the driver's document packet is complete and pre-verified rather than assembled at the last minute",
    "The audit trail for every hazmat shipment exists automatically, strengthening the company's position in any PESO compliance review"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "C06",
    "short_name": "GPCB Compliance Reporting",
    "full_name": "Automated GPCB/CPCB Compliance Reporting",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "The GPCB submission was two days late. The show-cause notice arrived before the explanation did.",
    "node_type": "HUB",
    "metadata_watches": "OCEMS data · Effluent and stack emission readings · Consent renewal calendar",
    "metadata_generates": "Real-time limit-compliance check · Breach early-warning alert · Periodic report auto-compilation",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual compilation of GPCB submissions from scattered sensor logs and spreadsheets",
    "metadata_returns": "Zero regulatory penalties or shutdown notices · Complete documentation trail for consent renewals",
    "problem_paragraph": "Your red or orange category unit is required to maintain online continuous emission monitoring, submit periodic compliance reports to GPCB, and renew consents on schedule. Each of these obligations is currently managed by your EHS team assembling data manually from different sources and tracking renewal dates in a calendar. A missed submission generates a show-cause notice. A late consent renewal can trigger a production halt. Neither is acceptable, and both happen regularly at units where the system runs on memory rather than automation.",
    "x": 1800,
    "y": 420,
    "slug": "automated-gpcbcpcb-compliance-reporting",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Predictive maintenance in chemical plants has shown a 20-50% reduction in unplanned downtime across documented industrial deployments, attacking the exact failure mode — mid-batch equipment failure — that causes the most expensive losses",
    "A failing agitator or pump gets flagged while it's still degrading, not after it's already ruined a batch mid-run",
    "Batch loss from equipment failure — one of the most expensive failure modes in a chemical plant — becomes rare instead of routine",
    "Maintenance gets scheduled into a planned window between batches, instead of forcing an emergency stop"
  ],
    "proofCitation": {
      "company": "Anonymized — Chemical Plant, Gujarat",
      "system": "AI continuous emissions/effluent monitoring",
      "date": "2023",
      "result": "Zero regulatory violations in 18 months",
      "source": "EAI India, ResearchGate",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "C07",
    "short_name": "Hazmat Transport Documentation",
    "full_name": "Hazmat Dispatch & Transport Documentation Automation",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": "LOGISTICS & DISTRIBUTION",
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "The vehicle was detained at the GIDC gate. The PESO document wasn't in the driver's packet.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Shipment product and UN classification · PESO transport license status · Driver hazmat certification",
    "metadata_generates": "Complete hazmat document pack for driver · Compliance validation check before departure",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual document preparation per hazmat shipment with informal compliance verification",
    "metadata_returns": "Reduced transport-related fines and detentions · Faster gate clearance · Stronger PESO audit trail",
    "problem_paragraph": "Hazardous chemical transport requires a specific set of documents: PESO transport license, UN classification, dangerous goods declaration, driver hazmat certification record. Your dispatch team assembles this packet for each shipment from a combination of master files, current certificates, and the driver's personal documents. One missing certificate, one expired license, one misclassified UN number — and the vehicle is detained at the GIDC gate or the highway checkpost, with your chemical shipment sitting in the sun while the paperwork is sorted.",
    "x": 1700,
    "y": 600,
    "slug": "hazmat-dispatch-transport-documentation-automation",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Customer complaints caused by a specification mismatch between the PO and the test result drop to near zero once the match is checked automatically before dispatch",
    "QA review time per COA drops because the spec-match check happens instantly against a database, instead of a manual line-by-line comparison",
    "Each customer's specific specification history is preserved and applied consistently, even as different staff handle different orders over time",
    "A discrepancy is caught and routed to QA and sales before the product leaves, not after the customer's incoming inspection rejects it"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "C08",
    "short_name": "Reactor & Equipment Maintenance",
    "full_name": "Predictive Equipment & Reactor Maintenance",
    "cluster_primary": "MACHINE INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "The agitator failed mid-batch. The entire reactor contents went off-spec.",
    "node_type": "BRIDGE",
    "metadata_watches": "Reactor, pump, compressor, agitator sensor data · Runtime patterns · Historical failure events",
    "metadata_generates": "Failure probability score per equipment · Planned maintenance work order with advance lead time",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Calendar-based maintenance schedule that ignores actual equipment condition",
    "metadata_returns": "Reduced unplanned downtime · Extended equipment life · Optimized maintenance spend",
    "problem_paragraph": "An unplanned reactor failure stops your production batch in progress. Whatever is in that reactor — partially reacted, off-temperature, uncertain composition — becomes an uncertain situation requiring investigation before the next batch can begin. Your maintenance schedule services reactors and critical equipment at calendar intervals. Whether the agitator bearing is developing early wear or the pump seal is about to fail — the calendar doesn't know. The sensor data, if interpreted, would.",
    "x": 300,
    "y": 700,
    "slug": "predictive-equipment-reactor-maintenance",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Critical issues across reactors, safety events, and compliance deadlines surface in one place before they escalate, instead of being tracked separately in someone's memory",
    "Management decision speed improves because the status of every reactor and every regulatory deadline is visible without a round of phone calls",
    "Safety and compliance information stop competing with production information for attention — both are visible together, continuously",
    "The owner or plant head can prioritize the day's real risks instead of starting from a blank information gap each morning"
  ],
    "proofCitation": {
      "company": "Anonymized — Indian Specialty Chemicals Manufacturer",
      "system": "AI real-time reactor parameter optimization",
      "date": "2023",
      "result": "10-25% reduction in yield loss",
      "source": "Intelecy, AVEVA",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "C09",
    "short_name": "Order-to-COA Compliance",
    "full_name": "Order-to-COA Customer Compliance Matching",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": "QUALITY & COMPLIANCE",
    "industry_primary": "Chemicals",
    "industry_secondary": "Export",
    "priority": 6,
    "reality_sentence": "The export COA format didn't match what the German buyer's system required. Shipment held.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Customer-specific documentation requirements per order · COA format specifications · REACH/MSDS versions",
    "metadata_generates": "Customer-matched document pack per order · Missing document alert before dispatch",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual assembly of customer-specific documentation per order by sales/dispatch team",
    "metadata_returns": "Fewer shipment delays from missing/incorrect documentation · Faster order-to-dispatch cycle",
    "problem_paragraph": "Your export and institutional customers each require a specific documentation package. One customer needs a REACH compliance statement in a particular format. Another requires an MSDS to a specific version. A third requires a COA with different decimal precision than your standard format. Your sales team assembles these packages from templates and memory, per order. When the wrong version goes out — or a required certificate is missing — the shipment holds at the customer's goods receipt system.",
    "x": 1870,
    "y": 460,
    "slug": "order-to-coa-customer-compliance-matching",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Export",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Certificate of Analysis issued within hours of batch release instead of days — the system matches test results to customer specification limits automatically and generates the CoA in the required format without manual compilation",
    "Customer-specific CoA requirements — particular parameters, units of measurement, format, and signatory — maintained per account and applied automatically, eliminating the rejections that occur when a generic CoA is sent to a buyer with specific requirements",
    "Batch release holds caused by CoA preparation delays eliminated — the system flags when a batch is cleared by QC and the CoA can be issued, instead of the batch sitting in a release queue while QA prepares the document manually",
    "Regulatory audit trail complete: every CoA is linked to the test records, the analyst, the instrument, and the specification version used — providing the traceability that CDSCO, EU, or US FDA auditors require without manual reconstruction"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "C10",
    "short_name": "Chemical Ops Dashboard",
    "full_name": "Integrated Operations Management Dashboard",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Chemicals",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Production, quality, and safety data exist in three different systems that never speak to each other.",
    "node_type": "BRIDGE",
    "metadata_watches": "Production data · QC data · Maintenance status · EHS readings · Sales data",
    "metadata_generates": "Cross-functional exception alert · Daily operations summary · Management decision brief",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Fragmented data across production, QC, maintenance, EHS, and sales into unified management picture",
    "metadata_returns": "Faster, better-informed management decisions · Early detection of cross-functional issues",
    "problem_paragraph": "Your production data is in one system, your QC results in another, your maintenance records in a third log, and your EHS data somewhere else. The plant manager and the owner each hold different pieces of the picture and share them verbally in daily review meetings. A cross-functional problem — a batch deviation that's correlated with a recent equipment service and an incoming material change — might be obvious from integrated data and invisible from any single source. ---",
    "x": 1680,
    "y": 820,
    "slug": "integrated-operations-management-dashboard",
    "proof_entries": [
      {
        "industry": "Chemicals",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Production, quality, dispatch, and finance data visible in one place for the first time — plant head and owner see the same numbers simultaneously rather than receiving separate reports that contradict each other by the time they are compared",
    "Exceptions surface automatically — an OEE dip, a quality rejection spike, or a dispatch delay reaches the decision-maker within minutes of occurring rather than appearing in a next-day report or being filtered out by middle management",
    "Meeting preparation time eliminated: the daily operations review runs from live dashboard data rather than a morning exercise where each function manually compiles and formats yesterday's numbers",
    "Plant performance benchmarked week-on-week and month-on-month with consistent definitions — the same metric calculated the same way every time, making trend identification reliable rather than dependent on who compiled the report and how they counted"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Analyzes production data · Generates cross-functional exception alert · Production, quality, and safety data exist in",
    "watermarkType": "generic"
  },
  {
    "node_id": "E01",
    "short_name": "Machine OEE Tracking",
    "full_name": "Machine Utilization & OEE Tracking",
    "cluster_primary": "MACHINE INTELLIGENCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "Engineering",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "Your machines run all day. Actual productive time is forty percent less than you believe.",
    "node_type": "HUB",
    "metadata_watches": "Machine running status (sensor or manual input) · Planned time · Output counts · Quality losses",
    "metadata_generates": "OEE score per machine per shift · Loss category analysis (availability/performance/quality) · Bottleneck identification",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Perceived high utilization into measured OEE with gap to true productive capacity",
    "metadata_returns": "15–25% OEE improvement through visibility alone · Capacity planning based on real data",
    "problem_paragraph": "Your machines are running all day. The floor sounds productive. Your operators are present, your work orders are loaded, and the output number at end of shift looks reasonable. What's hidden is setup time that could be compressed, micro-stoppages that add up to an hour per shift, and speed losses that no one formally tracks because there's no standard to compare against. Most engineering job shops in Gujarat are running at forty to sixty percent true OEE while believing they're at seventy-five to eighty.",
    "x": 350,
    "y": 600,
    "slug": "machine-utilization-oee-tracking",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "40–60% reduction in customs clearance time — AI documentation automation eliminates the incomplete and inconsistent filings that cause 40–60% of all clearance delays (AIDocBuilder / industry benchmark, 2025–2026)",
    "Documentation errors reduced by over 90% — automated data extraction and cross-document validation replaces manual re-entry across multiple forms",
    "Shipment preparation time cut from 2–3 days to same-day for standard shipment documents, enabling faster order-to-ship cycles",
    "Export manager's time freed from documentation preparation and redirected to buyer relationship management and new market development"
  ],
    "proofCitation": {
      "company": "Anonymized — Tirupur Knitwear Manufacturer",
      "system": "AI real-time in-process monitoring using YOLO",
      "date": "2023",
      "result": "Measurable reduction in rework batches",
      "source": "The Industrial AI",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "flow"
  },
  {
    "node_id": "E02",
    "short_name": "Job Sequencing Optimizer",
    "full_name": "Production Scheduling & Job Sequencing Optimization",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "The loudest customer's order jumped the queue. Three other committed deliveries missed their date.",
    "node_type": "HUB",
    "metadata_watches": "Open work orders with due dates and operations · Machine capacity · Setup time matrix · Material availability",
    "metadata_generates": "Optimized job sequence per machine · Exception alert for at-risk orders · Digital schedule to shop floor",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "\"First in, first out + loudest customer wins\" manual sequencing",
    "metadata_returns": "15–20% improvement in on-time delivery rate · Overtime reduction",
    "problem_paragraph": "You have thirty machines, one hundred and fifty open work orders, and a salesperson on the phone about an order that was promised but now needs to move up. Your production planner rebuilds the schedule in their head, makes the accommodation, and the cascade of impacts — three other customers whose orders just got pushed, two machines that now need a setup change that wasn't planned — works its way through the shop floor over the next two days.",
    "x": 820,
    "y": 580,
    "slug": "production-scheduling-job-sequencing-optimization",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "LC discrepancy rate reduced to under 10% — AI condition-by-condition validation eliminates the missed clauses and inconsistent phrasing that generate bank rejection (Loamist trade finance benchmark; global LC discrepancy rates average 40–70% under manual review)",
    "Bank charges for document re-presentation eliminated — each LC is presented correctly the first time, saving ₹15,000–₹50,000 per shipment in bank re-presentation fees",
    "Payment cycle accelerated by 30–45 days — discrepancy-free presentations are processed at standard timelines rather than being delayed for correction",
    "Export manager's cognitive load reduced — the system tracks all conditions across multiple simultaneous LCs rather than relying on individual attention and memory"
  ],
    "proofCitation": {
      "company": "Anonymized — Job Shop Engineering Company (India)",
      "system": "ML-based dynamic production scheduling",
      "date": "2022",
      "result": "10-30% gain in production throughput",
      "source": "Sigmoid Analytics",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "flow"
  },
  {
    "node_id": "E03",
    "short_name": "Visual Defect Detection",
    "full_name": "AI Visual Defect Detection for Castings/Machined Parts",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "The surface defect made it through inspection. The OEM found it at incoming quality check.",
    "node_type": "BRIDGE",
    "metadata_watches": "Surface inspection camera feed on castings, forgings, machined parts · Defect classification model",
    "metadata_generates": "Pass/fail per part · Defect type and severity classification · Trend alert for systematic source",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual visual inspection by experienced inspector with fatigue-related miss rate",
    "metadata_returns": "40–60% reduction in customer-end defect escapes · Defect trend data for root cause analysis",
    "problem_paragraph": "A surface defect that escapes your inspection doesn't disappear — it migrates to your customer's goods receipt, where it gets documented and sent back to you as a rejection. In a job shop that depends on repeat orders from the same customers, a rejection is not just a return. It's a question about whether you belong on their approved vendor list. Manual visual inspection by experienced inspectors is good. But it's not 100%, and on a high-volume line, the miss rate compounds.",
    "x": 1500,
    "y": 420,
    "slug": "ai-visual-defect-detection-for-castingsmachined-parts",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "100% of eligible export incentives claimed — AI tracking eliminates the unclaimed RoDTEP, Drawback, and EPCG benefits that Indian exporters miss due to manual tracking failures (DGFT data indicates 15–30% of eligible incentives go unclaimed by SME exporters annually)",
    "Incentive calculation errors eliminated — automated HS code-to-rate mapping replaces manual lookup that frequently applies wrong rates or misses eligible categories",
    "Refund processing time reduced by 40–60% as pre-populated claim documents are submission-ready from day one",
    "Total incentive recovery amount tracked and reported per shipment and per year, making the true export P&L visible for the first time"
  ],
    "proofCitation": {
      "company": "Anonymized - Indian Manufacturing Mill (Export-Oriented)",
      "system": "CNN-based AI fabric inspection system",
      "date": "2022",
      "result": "Detection accuracy >95%, 5-15% revenue recovery",
      "source": "NISCPR Research, Robro Systems",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "E04",
    "short_name": "RFQ-to-Quote Automation",
    "full_name": "AI-Assisted RFQ-to-Quote Costing Automation",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": "FINANCIAL INTELLIGENCE",
    "industry_primary": "Engineering",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "The quote took three hours. The customer had already accepted a competitor's response that morning.",
    "node_type": "HUB",
    "metadata_watches": "RFQ drawing and specification · Current raw material market price · Machining time standards · Outsource rates",
    "metadata_generates": "Costed quote with full breakdown in 15–30 minutes · Approval workflow trigger for low-margin quotes",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "2–4 hour manual costing by estimator per RFQ",
    "metadata_returns": "Quotation time: 2–4 hours → 15–30 minutes · More RFQs processed per estimator per day",
    "problem_paragraph": "Your estimator is one of the most valuable people in your business. They understand how long a part will take to machine, what material to specify, where outsourcing is necessary, and how to price for margin. They produce three to five quotes a day, each taking two to four hours. In your market, the customer has often already placed the order elsewhere by the time your quote arrives. The constraint isn't your estimator's knowledge. It's the time the process takes.",
    "x": 1880,
    "y": 720,
    "slug": "ai-assisted-rfq-to-quote-costing-automation",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "30–40% improvement in lapsed buyer recovery rate — systematic re-engagement driven by AI-generated engagement scores replaces ad-hoc outreach based on memory (consistent with B2B CRM AI outcome benchmarks from Gartner and Salesforce research)",
    "Buyer silence detected early — an account that would previously disappear for 6 months is flagged at 6 weeks of inactivity, enabling earlier intervention",
    "New country market opportunities identified from trade data analysis, surfacing importing markets where the exporter's product categories are growing",
    "Export team's buyer outreach becomes systematic and prioritised rather than reactive, improving coverage of the full buyer portfolio"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "E05",
    "short_name": "Job Costing & Profitability",
    "full_name": "Job Costing & Profitability by Customer/Order",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "You finished the job. You don't know if you made money on it until month end.",
    "node_type": "BRIDGE",
    "metadata_watches": "Material actual consumption per job · Labor hours actual · Outsource cost actuals · Overhead allocation",
    "metadata_generates": "Per-order actual margin · Variance from quoted cost · Loss-making job type/customer identification",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Monthly aggregated accounting into per-job profitability visible within days of completion",
    "metadata_returns": "Per-order profitability visibility · Loss-making job types identified · Better pricing on repeat orders",
    "problem_paragraph": "You quote a job, you win it, you manufacture it, and you invoice it. Whether you made the margin you quoted — accounting for material substitutions, actual machining time, rework hours, and outsource cost overruns — you won't know until your accountant closes the month. Some of your customers are consistently profitable at the quoted rate. Some are consistently not. Which ones are which is a question that your current accounting system answers twenty days after the month ends.",
    "x": 1350,
    "y": 200,
    "slug": "job-costing-profitability-by-customerorder",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "8–12% reduction in freight cost per shipment through systematic carrier rate comparison versus the single-carrier default used by most Indian SME exporters (McKinsey supply chain benchmarking for export-oriented SMEs in South Asia)",
    "Transit time visibility improved significantly — the system tracks shipment status against promised timelines rather than waiting for the forwarder to report exceptions",
    "Carrier performance data accumulated across shipments, enabling data-backed negotiation instead of relationship-based rate acceptance",
    "Port congestion risk flagged proactively, enabling advance booking decisions or port-of-loading adjustments before shipment commitment"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "E06",
    "short_name": "Subcontractor Scorecard",
    "full_name": "Vendor/Job-Work Subcontractor Performance Scorecard",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "Your heat treatment vendor delivered late again. You used them anyway because the alternative is unknown.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Outsource delivery date vs. committed date · Quality inspection result for outsourced process",
    "metadata_generates": "Monthly vendor performance score · Underperformer flag · Preferred vendor recommendation",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Informal vendor evaluation based on recent memory and relationship",
    "metadata_returns": "Improved outsourced process reliability · Objective basis for vendor consolidation",
    "problem_paragraph": "Your heat treatment vendor is unreliable. Your plating vendor has had three quality issues this year. Your grinding subcontractor is excellent but hard to schedule. These assessments exist as institutional knowledge held by two people in your purchase department. When a new order requires a critical outsource step, the decision about which vendor to use is made from that accumulated knowledge — or from whoever has availability. A systematic record would make the pattern visible and the decision defensible.",
    "x": 560,
    "y": 1400,
    "slug": "vendorjob-work-subcontractor-performance-scorecard",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "A subcontractor's pattern of delay becomes a documented, scored history instead of a feeling that 'they're always a bit late'",
    "Negotiating leverage improves because performance is backed by tracked delivery dates and rejection rates, not memory",
    "Dependency on a single subcontractor for a critical job-work step surfaces before that dependency becomes a production risk",
    "Approval status for new or marginal subcontractors is based on tracked performance rather than relationship alone"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "E07",
    "short_name": "CNC Predictive Maintenance",
    "full_name": "Predictive Maintenance for CNC/Production Machinery",
    "cluster_primary": "MACHINE INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "The CNC spindle failed. Six open customer orders are now behind schedule simultaneously.",
    "node_type": "BRIDGE",
    "metadata_watches": "Spindle load, vibration, temperature from CNC sensors · Maintenance history · Cycle count",
    "metadata_generates": "Failure probability score · Planned maintenance trigger with advance lead time · Parts pre-order flag",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Calendar maintenance schedule regardless of actual machine condition",
    "metadata_returns": "Reduced unplanned downtime · Maintenance scheduled to minimize production disruption",
    "problem_paragraph": "A CNC machine breakdown doesn't just stop that machine — it stops every customer order that was routed through it. If it's your only five-axis machine, a spindle failure on a Wednesday afternoon means you're calling customers on Thursday morning to renegotiate delivery dates across six open orders. Your maintenance schedule services the machine every three months. The spindle bearing that's been developing wear for the past six weeks doesn't fit into that schedule.",
    "x": 380,
    "y": 720,
    "slug": "predictive-maintenance-for-cncproduction-machinery",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Predictive maintenance can reduce CNC machine downtime by up to 50% by detecting failure signs before they occur, a figure corroborated across multiple industrial maintenance studies; spindle-specific monitoring alone has shown 20-30% reductions in spindle-related downtime",
    "A spindle bearing failure gets caught while it's still a developing problem, not after the CNC has already gone down mid-job",
    "Tool change intervals get optimized against actual wear instead of a fixed schedule, reducing both premature tool changes and unplanned tool failures",
    "Maintenance work gets scheduled into planned downtime windows instead of interrupting an active production run"
  ],
    "proofCitation": {
      "company": "Anonymized — Precision Engineering Manufacturer (Global)",
      "system": "AI sensor suite for CNC predictive maintenance",
      "date": "2023",
      "result": "+22 percentage point OEE improvement",
      "source": "MDPI, IIETA",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "E08",
    "short_name": "Order Delivery Commitment",
    "full_name": "Order Tracking & Customer Delivery Commitment Management",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "Your customer called for the third time this week asking when their components will arrive.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Work order progress through each operation · Stage completions · At-risk order flags",
    "metadata_generates": "Proactive customer communication at risk point · Revised delivery date · Management visibility on delays",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive apology calls after delivery deadline passes",
    "metadata_returns": "Improved on-time delivery rate · Proactive customer communication instead of reactive excuses",
    "problem_paragraph": "Your repeat customers come back to you because of quality, price, and reliability. Reliability means delivering when you say you will. But the sequence of operations in a complex job shop changes daily, and the committed delivery date you gave two weeks ago was based on a production plan that has since been revised three times by other priorities. Your customer calls on Thursday to ask about their components. You check with production. The answer is not what the customer was expecting.",
    "x": 2020,
    "y": 440,
    "slug": "order-tracking-customer-delivery-commitment-management",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "A delivery commitment risk gets flagged while there's still time to act, instead of being discovered when the customer calls asking where their job is",
    "Sales gives an answer based on the actual production schedule, not a verbal guess from the shop floor that may already be out of date",
    "Customer escalations drop because the company is the one delivering the bad news early, not reacting to a complaint",
    "Delivery reliability becomes something the company can quantify and use as a sales differentiator, rather than an assumed strength"
  ],
    "proofCitation": {
      "company": "Anonymized — OEM Component Manufacturer (India)",
      "system": "AI-powered production planning tool",
      "date": "2023",
      "result": "15-30% improvement in labor productivity",
      "source": "MindTitan, F7i.ai",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "E09",
    "short_name": "PPAP & Audit Compliance",
    "full_name": "ISO/Customer Audit & PPAP Compliance Tracker",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": null,
    "priority": 6,
    "reality_sentence": "The OEM audit is next Monday. Your PPAP documents are in three engineers' email inboxes.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "IATF 16949 documentation status · OEM-specific PPAP submission requirements · Audit schedule",
    "metadata_generates": "Audit readiness checklist · PPAP package compilation · Missing document alert before audit date",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Engineers maintaining audit documentation in separate email inboxes and shared drives",
    "metadata_returns": "Faster response to customer audits and PPAP requests · Reduced risk of approved-vendor status loss",
    "problem_paragraph": "Your OEM customer is coming for a IATF 16949 surveillance audit next month. The documentation they want to see spans control plans, FMEAs, production records, gauge calibration certificates, and material traceability records. Some of it is in your quality manager's folder. Some is in the design engineer's laptop. Some needs to be compiled from production records. The audit preparation window is narrow and the scramble is predictable — because it happens the same way every time.",
    "x": 1900,
    "y": 420,
    "slug": "isocustomer-audit-ppap-compliance-tracker",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Audit readiness moves from a pre-audit scramble to a continuously maintained state, because document gaps are flagged the day they appear rather than discovered three weeks before the auditor arrives",
    "PPAP document gaps get assigned an owner and a deadline automatically, instead of surfacing as a last-minute fire drill across email and WhatsApp",
    "First-pass audit success becomes more achievable because calibration, training, and CAPA records stay current between audits, not just before them",
    "The time cost of audit preparation drops because most of the preparation has already happened by the time the audit is scheduled"
  ],
    "proofCitation": {
      "company": "Anonymized — Automotive Component Supplier (India)",
      "system": "Adaptive AI control system for tool wear",
      "date": "2023",
      "result": "10-20% reduction in quality-related scrap costs",
      "source": "MAN Tech Publications",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "E10",
    "short_name": "Shop Floor Dashboard",
    "full_name": "Shop Floor Performance & Management Dashboard",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Engineering",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "You walk the floor to know what's happening. The floor knows you're coming before you arrive.",
    "node_type": "BRIDGE",
    "metadata_watches": "Machine status · Job progress · Quality outcomes · Delivery status per customer order",
    "metadata_generates": "\"Are we on track this week?\" mobile dashboard · Exception alert · Capacity issue flag",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Floor walk-through mental model into mobile-accessible real-time operations picture",
    "metadata_returns": "Faster, better-informed management decisions · Stronger basis for capex decisions",
    "problem_paragraph": "You walk the floor every morning because it's the only reliable way to know what's actually happening. The floor manager knows you're coming before you arrive, and the picture you get is the curated version — problems that are already being managed, progress reports on things that are going well. The information you actually need — which jobs are at risk, which machines are underutilizing, which customers are about to miss a delivery — isn't visible from a floor walk. ---",
    "x": 1800,
    "y": 820,
    "slug": "shop-floor-performance-management-dashboard",
    "proof_entries": [
      {
        "industry": "Engineering",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "A real-time shop floor view replaces the need for a daily physical walk-through, giving the owner or manager visibility independent of presence on site",
    "Exceptions reach the decision-maker directly, instead of getting filtered, softened, or delayed by a layer of middle management on the way up",
    "Job status, output, quality, and overtime are visible in one place, instead of requiring four separate conversations to piece together",
    "Issues surface the day they happen rather than at the next scheduled review meeting"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "IT01",
    "short_name": "Quotation & Margin Intel",
    "full_name": "AI Quotation Generation & Margin Intelligence System",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": "FINANCIAL INTELLIGENCE",
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Engineering",
    "priority": 9,
    "reality_sentence": "The inquiry came in at 9 AM. You sent the quote at 2 PM. They had already ordered elsewhere.",
    "node_type": "CLUSTER_CENTER",
    "metadata_watches": "Incoming inquiry (WhatsApp/email/call) · Supplier price list database · Margin rules per product category",
    "metadata_generates": "Formatted quote in under 5 minutes · WhatsApp/email delivery · Follow-up reminder set",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual quotation by salesperson pulling price lists and calculating margin (60 min per quote)",
    "metadata_returns": "Quotation time: 60 min → 5 min · Margin leakage reduced 15–25%",
    "problem_paragraph": "In industrial trading, the fastest accurate quote wins the order. Your competitor with WhatsApp-automated pricing sends a formatted quote within minutes of receiving an inquiry. Your salesperson is still pulling the price list, checking stock, and applying the right margin rules forty-five minutes later. The customer has already replied to the other quote. Your price might have been better. You'll never know, because yours arrived second.",
    "x": 1900,
    "y": 600,
    "slug": "ai-quotation-generation-margin-intelligence-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Quote turnaround reduced from 3–6 hours to under 20 minutes — AI pulls supplier pricing and assembles the quote without manual calling (industry benchmark for B2B industrial trading quotation automation)",
    "Margin per order tracked accurately for the first time — every quotation carries a calculated margin figure before it is sent, replacing the habit of quoting on instinct",
    "Win/loss analysis becomes possible as historical quote-to-order conversion is tracked per customer, product category, and margin band",
    "Sales team capacity multiplied — each salesperson can respond to 3–5x more RFQs per day without adding headcount"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "IT02",
    "short_name": "Price List Intelligence",
    "full_name": "Distributor & Dealer Price List Intelligence System",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Distribution",
    "priority": 8,
    "reality_sentence": "Your salesperson quoted last month's price. The margin on that order turned negative.",
    "node_type": "BRIDGE",
    "metadata_watches": "Principal price revision communications · Active salesperson price lists · Historical quote data",
    "metadata_generates": "Updated team-wide price list within hours of revision · Margin impact analysis · Audit trail",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual price list distribution via WhatsApp and email with uneven team adoption",
    "metadata_returns": "Elimination of outdated price quoting errors · Revenue leakage from mispriced orders stopped",
    "problem_paragraph": "You carry products from forty brands. Each brand issues price revisions on its own schedule — some quarterly, some monthly, some without notice. Your sales team operates from the last price list they downloaded, which may be six weeks old. The revision that came through last Tuesday hasn't propagated across your team yet. Your salesperson quoted the old price this morning. The margin on that order is negative, and the order is already confirmed.",
    "x": 2040,
    "y": 940,
    "slug": "distributor-dealer-price-list-intelligence-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Price list always current — supplier price change notifications are processed and reflected in the dealer price list within 24 hours, versus the 2–6 week lag common in manually managed trading firms",
    "Margin erosion from outdated pricing eliminated — every order priced from a current price list rather than a stale one that no longer reflects supplier cost",
    "Dealer communication about price changes happens proactively with a structured explanation, improving trust and reducing disputes",
    "Impact of any price change on portfolio margins is calculated before implementation, enabling informed commercial decisions"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "IT03",
    "short_name": "Sales Follow-Up Tracker",
    "full_name": "AI Sales Opportunity & Follow-Up Tracker",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Industrial Trading",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "The inquiry from two weeks ago is still sitting in your salesperson's WhatsApp.",
    "node_type": "HUB",
    "metadata_watches": "Inquiry logs (WhatsApp/call/visit) · Quote sent status · Response received status · Pipeline stage",
    "metadata_generates": "Follow-up reminder to salesperson · Next touchpoint schedule · Owner real-time pipeline view",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Follow-up dependent on individual salesperson memory and discipline",
    "metadata_returns": "30–40% improvement in lead-to-order conversion · No opportunity missed to follow-up gaps",
    "problem_paragraph": "Twenty to thirty percent of the orders your business should be winning are lost not to price or competition but to follow-up that simply didn't happen. A salesperson received an inquiry on a Tuesday, sent a quote on a Wednesday, and meant to follow up on Friday. Friday became occupied with another priority, and the inquiry sat in WhatsApp until the customer ordered from the vendor who called back. The opportunity was real. The process failed it.",
    "x": 1900,
    "y": 840,
    "slug": "ai-sales-opportunity-follow-up-tracker",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Follow-up coverage rate increased from approximately 30% to over 90% of active quotations — systematic AI prioritisation replaces salesperson-memory-based follow-up (consistent with CRM AI adoption studies showing 40–60% improvement in pipeline follow-up rates)",
    "Revenue recovered from 'quoted but never followed up' opportunities, typically representing 15–25% of total quoted value in Indian SME trading environments",
    "Sales manager gains full visibility of pipeline status without relying on salesperson reporting — quote-to-order conversion tracked automatically",
    "High-value quotes nearing expiry are flagged for urgent follow-up before the customer chooses an alternative supplier"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "laymanSummary": "Monitors order frequency and engagement signals · Scores each account's risk of lapsing · Triggers retention action before the order is lost",
    "watermarkType": "generic"
  },
  {
    "node_id": "IT04",
    "short_name": "Vendor Price Benchmarking",
    "full_name": "AI Vendor Price Benchmarking & Purchase Intelligence System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "FINANCIAL INTELLIGENCE",
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "You paid more than market price for the last three purchases. You discovered this after the fact.",
    "node_type": "BRIDGE",
    "metadata_watches": "Purchase prices across vendors per category · Historical price database · Market rate signals",
    "metadata_generates": "Price benchmark comparison per product · Above-market purchase flag · Vendor rank by value",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Purchasing from familiar vendors without systematic price comparison",
    "metadata_returns": "8–15% reduction in procurement costs · Data-backed vendor negotiation",
    "problem_paragraph": "You buy from suppliers you know, at prices you've accepted for long enough that they feel like market rates. Whether they are is a question your business rarely asks systematically. In a thin-margin trading business, your purchase cost and your sale price define everything. A systematic five percent procurement improvement on your largest cost categories is not a marginal gain — it is the difference between a quarter that worked and one that didn't.",
    "x": 620,
    "y": 1440,
    "slug": "ai-vendor-price-benchmarking-purchase-intelligence-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "3–7% reduction in purchase cost through systematic multi-supplier benchmarking versus the single-supplier default of relationship-based buying (Gartner procurement analytics benchmark for B2B trading firms)",
    "Supplier negotiation backed by data — every negotiation uses current market pricing as a reference rather than relying on the buyer's personal knowledge and relationships",
    "Price trend alerts enable forward procurement when prices are expected to rise, capturing margin before the market moves",
    "Supplier performance tracked beyond price — delivery reliability and quality scores added to price comparison for a complete procurement picture"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "IT05",
    "short_name": "Reorder & Stock Optimizer",
    "full_name": "Reorder Intelligence & Stock Optimization System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "Your warehouse is full of slow-moving inventory. Your fast-moving items are out of stock.",
    "node_type": "HUB",
    "metadata_watches": "Real-time stock levels across warehouse · Sales velocity per SKU · Supplier lead times",
    "metadata_generates": "Dynamic reorder point per SKU · Dead stock flag · Purchase recommendation with quantity",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Rule-of-thumb reordering and warehouse staff visual stock assessment",
    "metadata_returns": "20–35% reduction in excess inventory · Stockout incidents reduced 60–70%",
    "problem_paragraph": "Your warehouse holds thousands of SKUs. The ones you need for this week's orders are the fast-movers — the items that turn quickly and generate the relationship with the customer who calls you first. Those items are the ones most likely to be out of stock, because they're the ones that move fastest through a reorder system that was designed for manual oversight. Your working capital is simultaneously locked in dead stock and borrowed at twelve percent to fund emergency purchases of the fast-movers you ran out of.",
    "x": 980,
    "y": 1300,
    "slug": "reorder-intelligence-stock-optimization-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Stockout incidents for fast-moving SKUs reduced by over 80% — AI reorder triggers based on velocity and lead time replace the visual shelf inspection that misses the gap until it becomes an out-of-stock (McKinsey B2B distribution inventory management benchmark)",
    "Working capital freed from slow-moving overstock — the system identifies overstocked SKUs and recommends order suspension before excess stock accumulates",
    "Order frequency optimised — the system recommends consolidated purchase orders that reduce transaction costs while maintaining adequate stock cover",
    "Sales lost to competitors due to stockouts quantified for the first time, making the business case for holding the right stock levels visible to management"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "IT06",
    "short_name": "PO & Documentation Auto",
    "full_name": "AI Purchase Order & Documentation Automation System",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Industrial Trading",
    "industry_secondary": null,
    "priority": 7,
    "reality_sentence": "The invoice didn't match the purchase order. The payment reconciliation took two days.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Supplier invoice data · Purchase order terms · Three-way match: PO, receipt, invoice",
    "metadata_generates": "Automated PO document · Three-way match validation · Payment authorization trigger",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual PO preparation and invoice matching in Tally",
    "metadata_returns": "80% reduction in document preparation time · Manual matching errors eliminated",
    "problem_paragraph": "Your purchase order goes out. The supplier delivers. Your team receives the goods and enters the receipt. Your accounts team matches the supplier invoice against the PO and receipt. In practice, those three events happen in three different systems, recorded by three different people, with the matching done manually at month end when the invoice arrives. Discrepancies between what was ordered, what was received, and what was billed add up to payment disputes that consume time on both sides.",
    "x": 1650,
    "y": 380,
    "slug": "ai-purchase-order-documentation-automation-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "PO preparation time reduced from 30–40 minutes to under 5 minutes — AI auto-populates from approved purchase requirement and supplier master, eliminating manual data entry (consistent with McKinsey procurement automation benchmark: 60–70% reduction in PO processing time)",
    "Data entry errors in POs eliminated as the system populates directly from ERP data rather than manual typing across fields",
    "Supplier delivery commitment documented and tracked automatically — late delivery is flagged without the purchasing team chasing for a status update",
    "Purchasing team capacity freed from administrative PO work and redirected to supplier negotiation and relationship management"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "IT07",
    "short_name": "Outstanding Collections Intel",
    "full_name": "AI Outstanding Payment & Collections Intelligence System",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Distribution",
    "priority": 9,
    "reality_sentence": "Your outstanding receivables are ninety days old. Your follow-up calls go to voicemail.",
    "node_type": "HUB",
    "metadata_watches": "Outstanding receivables from Tally (daily pull) · Aging per customer · Historical payment pattern",
    "metadata_generates": "Behavioral risk score per customer · Early warning alert · Automated WhatsApp/SMS reminder",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive collections only after accounts become seriously delinquent",
    "metadata_returns": "15–25% improvement in collection speed · Bad debt rate reduced · Working capital freed",
    "problem_paragraph": "Your outstanding receivables are spread across hundreds of customers. Most pay within their credit terms. A handful are consistently slow. A few are about to become problems you don't know about yet. Your collections team follows up when accounts cross ninety days — by which point the account is already a problem. The behavioral signals that precede a payment slowdown — order frequency dropping, partial payments, communication delays — are visible in your data before the overdue is visible in your aging report.",
    "x": 1150,
    "y": 360,
    "slug": "ai-outstanding-payment-collections-intelligence-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Distribution",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Days Sales Outstanding (DSO) reduced by 20–30% — systematic AI-prioritised collections outreach replaces relationship-based follow-up that leaves high-risk accounts unchallenged (Gartner accounts receivable AI benchmark for B2B commercial firms)",
    "Bad debt provision reduced through earlier intervention — accounts flagged at 30 days overdue rather than discovered at 90 days when recovery becomes difficult",
    "Collections team productivity tripled — focus shifts to the 20% of accounts representing 80% of overdue value rather than working through the full list sequentially",
    "Customer relationships preserved — automated pre-due reminders and structured escalation replace ad-hoc aggressive follow-up that damages commercial relationships"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "IT08",
    "short_name": "Trader Owner Dashboard",
    "full_name": "Owner's Daily Business Intelligence Dashboard",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Industrial Trading",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "You need three people and forty minutes to tell you what your business did today.",
    "node_type": "BRIDGE",
    "metadata_watches": "Tally data · Bank statement · WhatsApp order logs · Salesperson pipeline",
    "metadata_generates": "Daily business health summary on mobile · Exception alert · Collections status overview",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual morning assembly across four sources into single consolidated daily view",
    "metadata_returns": "Business health visible without 40 minutes of manual compilation · Stale data eliminated",
    "problem_paragraph": "Every morning you want to know three things: how much business was done yesterday, how much money is coming in this week, and whether anything is going wrong. Getting those answers currently requires you to check Tally, call your accountant, message your sales manager, and look at your bank balance. The picture you assemble is from yesterday at best. The decision you'd have made differently based on current information has already been made. ---",
    "x": 1620,
    "y": 880,
    "slug": "trader-owner-dashboard",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Plant performance visible without physical presence — the owner in Mumbai receives the same information as if they were on the factory floor in Surat or Sanand, delivered to their phone by 7:30am",
    "Critical exceptions — OEE falling below threshold, quality rejection spike, dispatch delay, or large overdue receivable — surface within hours of occurrence rather than at the next management meeting",
    "Evening phone call with plant manager replaced by a structured briefing that carries the right data, reducing information distortion and incomplete reporting",
    "Monthly P&L supplemented by daily financial visibility, enabling mid-month course corrections rather than end-of-month surprises"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "PK01",
    "short_name": "Packaging Job Scheduler",
    "full_name": "AI Production Planning & Job Scheduling System",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Packaging",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "The color-change sequence was wrong. Three hours of make-ready time disappeared before the shift started.",
    "node_type": "HUB",
    "metadata_watches": "All active jobs with specifications · Press availability · Color sequence across jobs · Customer due dates",
    "metadata_generates": "Optimized press schedule minimizing color changes · Make-ready sequence · Customer commitment confirmation",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual job scheduling without visibility into color-change waste implications",
    "metadata_returns": "15–20% improvement in machine utilization · Reduced color-change downtime",
    "problem_paragraph": "Packaging production is a sequence of jobs, each with a different specification, and the sequence matters. A well-planned color sequence across a day's press runs can cut make-ready time by thirty percent. A poorly planned sequence means tearing down and setting up a press between jobs that share no common parameters, burning two hours of productive press time per press per day. Your planning currently optimizes for customer due dates without regard for what the sequence costs in setup.",
    "x": 950,
    "y": 720,
    "slug": "ai-production-planning-job-scheduling-system",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "30–40% reduction in press changeover and setup time through AI-optimised job sequencing — grouping compatible ink and substrate runs minimises washups and avoids redundant makereadies (industry benchmark for flexible packaging and label printing job sequencing)",
    "Delivery commitment achievement rate improved to above 95% as job scheduling accounts for actual machine availability and setup time rather than optimistic manual estimates",
    "Substrate and ink requirements planned accurately per job sequence, reducing last-minute material shortages that delay job starts",
    "Production manager planning effort reduced from daily manual schedule adjustments to a structured weekly review cycle"
  ],
    "proofCitation": {
      "company": "Anonymized — Gravure Printing Facility (India)",
      "system": "AI-driven predictive quality system (color defect prevention)",
      "date": "2023",
      "result": "Defect-causing parameter drift detected before visible defect",
      "source": "Smart Packaging Hub",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "flow"
  },
  {
    "node_id": "PK02",
    "short_name": "Ink & Material Optimization",
    "full_name": "Ink & Raw Material Consumption Optimization System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "Packaging",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "You mixed ink for the full run. The job was cut short. The leftover ink is now waste.",
    "node_type": "BRIDGE",
    "metadata_watches": "Job specification: colors, coverage, run length · Historical consumption actuals per job type",
    "metadata_generates": "Ink mix quantity per job · Substrate requirement with waste allowance · Consumption variance alert",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Estimator gut-feel ink mixing quantity that consistently over-mixes",
    "metadata_returns": "8–15% reduction in ink wastage · 10–20% reduction in substrate wastage",
    "problem_paragraph": "Ink is your highest per-unit variable cost, and mixed ink cannot go back. Your make-ready team mixes for the full run. The run gets cut short — by a customer change, by a quality hold, by the press being needed for a more urgent job. The remaining ink cannot be stored, cannot be returned, and is scrapped. This happens regularly at every packaging plant, and the cost — three to five percent of ink expenditure — accumulates invisibly because it's absorbed into the make-ready cost line.",
    "x": 1100,
    "y": 1420,
    "slug": "ink-raw-material-consumption-optimization-system",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "15–25% reduction in ink waste — AI job sequencing and consumption forecasting eliminates the end-of-month leftover ink problem that forces write-offs of colour-matched batches (industry benchmark for flexible packaging ink waste reduction)",
    "Ink inventory value reduced through better consumption forecasting, freeing working capital currently tied up in precautionary overstock",
    "End-of-run ink reclaim improved — the system tracks remaining ink volumes per job and recommends which upcoming jobs can utilise existing mixed batches",
    "Supplier reorder timing optimised — reorder quantities and timing are driven by forecast consumption rather than periodic stock walks"
  ],
    "proofCitation": {
      "company": "Anonymized — Flexible Packaging Manufacturer (Global)",
      "system": "AI surface anomaly detection inline at printing presses",
      "date": "2023",
      "result": "30-40% increase in throughput",
      "source": "Third Eye Data",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "PK03",
    "short_name": "Print Quality Inspection",
    "full_name": "Quality Inspection & Defect Detection System",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "Packaging",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "The registration error ran for four thousand labels before the operator noticed the misprint.",
    "node_type": "BRIDGE",
    "metadata_watches": "Print inspection camera feed · Color, registration, barcode, label accuracy · Run-time defect classification",
    "metadata_generates": "Pass/fail per unit · Defect type alert · Run halt trigger on systematic defect",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Periodic manual sampling that misses systematic defects running for thousands of units",
    "metadata_returns": "60–80% reduction in defect escapes · Customer returns reduced",
    "problem_paragraph": "A printing defect that runs for four thousand labels before the operator catches it doesn't result in four thousand returned labels. It results in product reaching your customer's filling line, failing the barcode scan, and generating a rejection against your delivery — along with a request for a root cause analysis, a corrective action plan, and the freight cost of the return. Your manual inspection process catches defects that are visible and obvious. The systematic ones — registration drift, color shift, barcode degradation — develop gradually and miss the spot check.",
    "x": 1650,
    "y": 460,
    "slug": "quality-inspection-defect-detection-system",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "83–87% reduction in defect escape rate to customers — automated 100% inspection replaces end-of-run sampling that catches only 20–30% of actual defect units (documented across label and flexible packaging deployments, iFactory / Scematics benchmark 2024–2026)",
    "Customer rejection rate reduced substantially — defects detected at press rather than at customer's production line or during their goods-inward inspection",
    "Rework and reprint cost reduced as defects are caught at the earliest point in the process, before finishing, sheeting, or winding operations add further cost to the reject unit",
    "Print run quality data captured per job, enabling trend analysis that identifies press or process issues before they become systemic"
  ],
    "proofCitation": {
      "company": "Anonymized — Food & Beverage Packaging Manufacturer",
      "system": "AI OCR/OCV system for label verification",
      "date": "2022",
      "result": "99.4% inspection accuracy",
      "source": "Thetatechnolabs.in, Barcode India",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "signal"
  },
  {
    "node_id": "PK04",
    "short_name": "Artwork & Order Management",
    "full_name": "AI Customer Order & Artwork Management System",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Packaging",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "Production ran version 3 of the artwork. The customer had approved version 5 last week.",
    "node_type": "HUB",
    "metadata_watches": "Customer artwork versions · Specification per job · Customer approval status · Make-ready checklist",
    "metadata_generates": "Production brief with correct artwork version · Customer approval workflow trigger · Repeat order auto-pull",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Artwork version management via email threads and shared folder naming conventions",
    "metadata_returns": "Artwork version errors eliminated · Repeat order setup time reduced dramatically",
    "problem_paragraph": "Each customer order carries specific artwork, specific specifications, and a specific customer approval. For a job shop with two hundred active customers and multiple SKUs per customer, the version control on artwork files is a continuous management problem. The approved file is version 5. The file on the pre-press workstation is version 3. Production ran version 3, because no one checked against the approved version before the plates were made. The reprint cost and the customer's response are predictable and avoidable.",
    "x": 2060,
    "y": 820,
    "slug": "ai-customer-order-artwork-management-system",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Wrong-version print jobs eliminated — the system ensures only the latest approved artwork file is linked to each print job, removing the version confusion that causes costly reprints",
    "Customer approval cycle time reduced by 40–60% as structured approval workflows replace untracked email chains where approvals get buried or lost",
    "Complete artwork audit trail maintained automatically — every version, approval, and change is documented with timestamps, providing defence against customer disputes",
    "Pre-press team productivity improved as they spend time preparing artwork rather than searching through email threads for the correct version"
  ],
    "proofCitation": {
      "company": "Anonymized — Pharma Packaging Line",
      "system": "AI computer vision for detecting damaged boxes/leaks",
      "date": "2023",
      "result": "40% reduction in defects",
      "source": "iFactory App, Packaging South Asia",
      "isPlaceholder": false
    },
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "PK05",
    "short_name": "Packaging Cost Estimator",
    "full_name": "Packaging Cost Estimation & Quotation System",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": "FINANCIAL INTELLIGENCE",
    "industry_primary": "Packaging",
    "industry_secondary": null,
    "priority": 9,
    "reality_sentence": "The quote was accurate in January. Input costs moved in February. The job ran in March at a loss.",
    "node_type": "HUB",
    "metadata_watches": "Job specification: substrate, ink, coverage, finishing, quantity · Current material costs · Machine rates",
    "metadata_generates": "Accurate quote in 10 minutes with full cost breakdown · Margin check alert on low-margin quotes",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "60-minute manual calculation combining substrate, ink, make-ready, run speed, finishing costs",
    "metadata_returns": "Quotation time: 60 min → 10 min · Loss-making quotes eliminated before acceptance",
    "problem_paragraph": "Every packaging job is a unique calculation: substrate type and grade, ink coverage and number of colors, make-ready time at your specific machine speed, finishing operations, and quantity. A one-hour manual calculation for each incoming inquiry is only sustainable if your volume of inquiries is low. In a competitive packaging market, your response time to a quote request is a qualification criterion. If it takes sixty minutes, you've already lost the customers who got a faster answer elsewhere.",
    "x": 1880,
    "y": 720,
    "slug": "packaging-cost-estimation-quotation-system",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Quotation turnaround reduced from 2–3 days to under 4 hours — AI cost estimation replaces the manual estimator process for standard job configurations (benchmark for packaging industry quotation automation)",
    "Estimating accuracy improved through systematic use of historical job benchmarks, reducing the margin of error that leads to underpriced jobs and margin leakage",
    "Quoting capacity multiplied — the estimator can produce 3–5x more quotations per day, enabling the business to respond to more RFQs without additional headcount",
    "Quotation database built over time, enabling win/loss analysis by job type, customer, and margin band for the first time"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "PK06",
    "short_name": "Press Maintenance Prediction",
    "full_name": "Machine Maintenance & Downtime Prediction",
    "cluster_primary": "MACHINE INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Packaging",
    "industry_secondary": "Manufacturing",
    "priority": 7,
    "reality_sentence": "The press stopped mid-run on a Thursday afternoon. The engineer arrived Friday morning.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Printing press and die-cutting machine runtime · Cycle counts · Vibration and temperature sensors",
    "metadata_generates": "Failure probability score · Planned maintenance trigger with advance notice · Parts pre-order list",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive press maintenance called only after breakdown during production run",
    "metadata_returns": "25–35% reduction in unplanned downtime · Emergency maintenance costs reduced",
    "problem_paragraph": "A printing press breakdown during a live production run stops more than the job on the press. It stops the press from being available for the next job, disrupts the color sequence built into the day's schedule, and triggers a customer call about the delivery that was supposed to go out that afternoon. Press maintenance currently happens when something breaks or when the calendar says it's time. The bearing that's worn, the roller that's running marginally — these give signals that a system would detect and a daily visual inspection will not.",
    "x": 440,
    "y": 680,
    "slug": "machine-maintenance-downtime-prediction",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "70% reduction in unplanned press downtime — predictive maintenance eliminates the breakdown-during-critical-run scenario that packaging companies face at customer launch deadline moments (Deloitte predictive maintenance benchmark; consistent with packaging and printing industry documented outcomes)",
    "Customer deadline failures from equipment breakdown largely eliminated — presses are serviced during planned windows rather than during committed production runs",
    "Maintenance cost reduced 25–30% as planned repairs at standard parts cost replace emergency callouts and premium parts procurement",
    "Press lifespan extended through condition-based maintenance versus calendar-based replacement of components with remaining useful life"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "PK07",
    "short_name": "Packaging Collections Intel",
    "full_name": "Outstanding Collections & Customer Credit Intelligence",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Packaging",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Your three largest customers pay in ninety days. Your suppliers expect payment in thirty.",
    "node_type": "BRIDGE",
    "metadata_watches": "Receivables aging per customer · Payment pattern history · Credit utilization",
    "metadata_generates": "At-risk account flag · Automated collection reminder · Credit limit adjustment suggestion",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual collections follow-up dependent on finance team memory and periodic review",
    "metadata_returns": "Bad debt reduction · Faster collections · Working capital improved",
    "problem_paragraph": "Your largest customers are typically FMCG brands and retailers who use their size to dictate payment terms. Ninety days is common. When several of these customers pay late simultaneously, your cash position deteriorates faster than your receivables aging report can reflect. Your finance team tracks overdue accounts. They don't track the behavioral signals — order frequency changes, partial payment patterns, communication delays — that precede an account becoming overdue. ---",
    "x": 1150,
    "y": 250,
    "slug": "outstanding-collections-customer-credit-intelligence",
    "proof_entries": [
      {
        "industry": "Packaging",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Engineering",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Days outstanding reduced by 20–30% — AI risk-scored collections prioritisation directs effort to high-risk accounts earlier in the overdue cycle rather than following through the full accounts list sequentially (Gartner accounts receivable AI benchmark)",
    "Bad debt risk identified before it materialises — deteriorating payment patterns flagged at 30 days overdue enable proactive intervention rather than reactive write-offs at 120+ days",
    "Credit limit recommendations per customer updated dynamically, preventing further exposure to accounts showing deteriorating payment behaviour",
    "Collections team time concentrated on accounts that represent the highest recovery opportunity, improving per-effort recovery rate"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "UN01",
    "short_name": "Sales Follow-Up System",
    "full_name": "AI Sales Follow-Up & Lead Tracking System",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": "MANAGEMENT SYNTHESIS",
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Manufacturing",
    "priority": 10,
    "reality_sentence": "Twenty percent of your orders last quarter were lost to follow-up that never happened.",
    "node_type": "UNIVERSAL",
    "metadata_watches": "Inquiry log (WhatsApp/call/email) · Quote status · Response timeline · Pipeline stage",
    "metadata_generates": "Follow-up reminder per salesperson · Pipeline visibility for owner in real time · Win/loss analysis",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Follow-up dependent entirely on individual salesperson memory and WhatsApp search",
    "metadata_returns": "30–40% improvement in lead-to-order conversion · 20–30% of orders no longer lost to gap",
    "problem_paragraph": "Your business receives inquiries every day. Most of them get a response. What happens after the response — the follow-up, the second call, the nudge when the customer goes quiet — depends entirely on whether your salesperson remembered and whether they had the time. Twenty to thirty percent of the orders that should have been won weren't, not because of price or product but because a competitor followed up and your team didn't. The opportunity was there. The system failed it.",
    "x": 1860,
    "y": 380,
    "slug": "ai-sales-follow-up-lead-tracking-system",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Lead follow-up coverage rate increased from approximately 25–35% to over 90% — systematic AI prioritisation replaces the individual salesperson memory approach that loses most packaging leads within two weeks of first contact",
    "Conversion rate improved through consistent, timely follow-up — packaging buyers typically require 3–5 contacts before placing a first order, and most follow-up falls off after one attempt",
    "Trade show and exhibition lead value fully captured — prospects who provided contact details at packaging expos are systematically followed up rather than sitting in a business card pile",
    "Sales pipeline visibility improved for management — quote-to-order conversion tracked per salesperson and per customer segment without requiring manual CRM updates"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "UN02",
    "short_name": "Outstanding Collections",
    "full_name": "AI Outstanding Collections & Follow-Up System",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": "COMMERCIAL INTELLIGENCE",
    "industry_primary": "Distribution",
    "industry_secondary": "Industrial Trading",
    "priority": 10,
    "reality_sentence": "Your collections team knows who owes money. They don't know who is about to stop paying.",
    "node_type": "UNIVERSAL",
    "metadata_watches": "Receivables aging (daily Tally pull) · Payment history per customer · Promise-to-pay records",
    "metadata_generates": "Early warning on accounts with deteriorating payment behavior · Automated follow-up sequence",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive collections only after accounts cross a threshold of severity",
    "metadata_returns": "15–25% improvement in collection speed · Bad debt reduced · Working capital shortened",
    "problem_paragraph": "The receivables aging report shows you who owes money and for how long. What it doesn't show you is who is about to slow down before the pattern shows up in the aging. Payment behavior changes gradually — an account that paid reliably in thirty days takes forty-five this month and sixty next month before anyone notices the trend. By the time the account is in your sixty-day bucket, the intervention that would have worked three months ago is no longer the right one.",
    "x": 1400,
    "y": 380,
    "slug": "ai-outstanding-collections-follow-up-system",
    "proof_entries": [
      {
        "industry": "Distribution",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Industrial Trading",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Days Sales Outstanding (DSO) reduced by 20–30% within 90 days — AI collections prioritisation ensures the highest-risk overdue accounts are contacted first, every day, without relying on individual salesperson initiative (Gartner AR management benchmark for B2B trading firms)",
    "Bad debt provisioning reduced as deteriorating accounts are identified and actioned at 30 days rather than 90 days overdue",
    "₹15–25 lakh recovered per year for a mid-size industrial trading firm with ₹40–60 lakh in typical average outstanding through faster collections cycles",
    "Customer relationships managed more professionally through structured, staged communication rather than ad-hoc aggressive chasing"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "data"
  },
  {
    "node_id": "UN03",
    "short_name": "Raw Material Reorder",
    "full_name": "Raw Material Reorder & Inventory Intelligence",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "FMCG",
    "priority": 10,
    "reality_sentence": "The purchase manager reorders when production complains, not before. The sequence always costs more.",
    "node_type": "UNIVERSAL",
    "metadata_watches": "Current stock levels · Sales/production consumption velocity · Supplier lead times · MOQ terms",
    "metadata_generates": "Dynamic reorder alert at calculated safety stock threshold · Purchase recommendation with quantity",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Reactive reordering triggered by production complaint or visual warehouse walk",
    "metadata_returns": "Near-elimination of shortage-caused stoppages · Excess inventory reduced 20–30%",
    "problem_paragraph": "Your purchase manager reorders when production complains. By the time the complaint arrives, the production disruption is twenty-four to forty-eight hours away. The reorder that happens under that pressure costs more than it should — emergency quantities, expedited freight, acceptance of substandard material from an alternative supplier. The inventory that triggers the next crisis was always going to run short. The only question was whether the system would see it coming three weeks in advance or three hours.",
    "x": 1160,
    "y": 1460,
    "slug": "raw-material-reorder-inventory-intelligence",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "FMCG",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Stockout incidents on key raw material SKUs reduced by over 80% — velocity-based reorder triggers replace visual stock inspection that misses the gap until an order is already stuck (McKinsey B2B distribution inventory benchmark)",
    "Working capital freed from slow-moving overstock — the system identifies SKUs with excess cover and recommends order suspension before cash is tied up unnecessarily",
    "Supplier lead time variability accounted for in reorder calculations, building appropriate safety buffers for unreliable suppliers without over-stocking reliable ones",
    "Emergency procurement cost eliminated — raw material replenishment happens on schedule rather than as a crisis purchase at premium pricing"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "UN04",
    "short_name": "Owner's Business Dashboard",
    "full_name": "Owner's Daily Business Intelligence Dashboard",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Industrial Trading",
    "industry_secondary": "Manufacturing",
    "priority": 8,
    "reality_sentence": "Your business health is assembled manually every morning from four different sources, all from yesterday.",
    "node_type": "UNIVERSAL",
    "metadata_watches": "All operational data feeds: sales, production, inventory, finance, collections",
    "metadata_generates": "Single daily mobile business health view · Anomaly alert · Priority exception for founder attention",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Daily manual morning information-gathering ritual into one-view business intelligence",
    "metadata_returns": "2–4 hours of daily status-gathering eliminated · Decisions based on current data",
    "problem_paragraph": "You run a business that spans production, sales, inventory, finance, and collections. Your view into all of it is assembled manually every morning from different sources, in different formats, from data that was current at different points yesterday. By the time the picture is complete, you've already started making decisions. The decisions you make at eight in the morning are based on information that stops being accurate at four in the afternoon the day before.",
    "x": 1800,
    "y": 820,
    "slug": "owners-business-dashboard",
    "proof_entries": [
      {
        "industry": "Industrial Trading",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Plant and business performance visible without physical presence — the owner receives the same information as if they were on the factory floor, delivered to their phone by 7:30am, regardless of whether they are in Ahmedabad, Mumbai, or overseas",
    "Critical exceptions — OEE below threshold, quality rejection spike, dispatch delay, or collections overdue — reach the owner directly and immediately instead of being filtered, softened, or delayed through a layer of management reporting",
    "Time spent extracting information from the business drops sharply: the owner stops starting each day by calling four people to understand what happened yesterday and instead begins with the context already in hand",
    "Business decisions grounded in current data rather than memory and instinct — pricing decisions, capacity calls, and collection escalations made with the actual numbers visible, not an estimate of what the numbers probably are"
  ],
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
  {
    "node_id": "UN05",
    "short_name": "Demand Forecasting",
    "full_name": "AI Demand Forecasting & Seasonal Planning System",
    "cluster_primary": "SUPPLY CHAIN INTELLIGENCE",
    "cluster_secondary": "PRODUCTION INTELLIGENCE",
    "industry_primary": "FMCG",
    "industry_secondary": "Manufacturing",
    "priority": 9,
    "reality_sentence": "Festival season starts in six weeks. Your inventory position reflects last year's judgment, not this year's signals.",
    "node_type": "UNIVERSAL",
    "metadata_watches": "Historical sales patterns · Festival calendar · Seasonal indices · External demand signals",
    "metadata_generates": "Demand forecast per SKU for next 4–16 weeks · Inventory build recommendation · Production signal",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Last year's judgment applied to this year's inventory build without current-signal adjustment",
    "metadata_returns": "Better festival-season fill rates · Overstock and stockout simultaneously reduced",
    "problem_paragraph": "Every year you build inventory for the festival season based on last year's sales and your read of the current market. Some years you're right. Some years you're left with overstock that you discount in January or understock that loses you orders during the peak window. The difference between those outcomes is the accuracy of the forecast you built four to six weeks before the peak. That forecast is currently built on intuition calibrated by experience, not on current-season demand signals.",
    "x": 520,
    "y": 1360,
    "slug": "ai-demand-forecasting-seasonal-planning-system",
    "proof_entries": [
      {
        "industry": "FMCG",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "Manufacturing",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
    "Festival season stockouts on the three fastest-moving SKUs eliminated — pre-season stock positions built on AI forecast rather than last year's order quantities (consistent with McKinsey demand forecasting benefit benchmark: 20–50% reduction in forecast error for Indian B2B distribution)",
    "Pre-season inventory investment reduced by 15–20% for slow-moving seasonal items — AI forecasting prevents the habitual over-buying that causes post-season write-offs",
    "Seasonal demand signal detected 8–10 weeks early through advance order pattern analysis, giving the trading firm time to secure stock before supplier allocations tighten",
    "Working capital cycle improved as procurement timing is driven by forecast confidence intervals rather than precautionary early buying"
  ],
    "proofCitation": {
      "company": "ITC Limited (via ITC Infotech)",
      "system": "AI/ML for demand planning (new product launch forecasting)",
      "date": "2021",
      "result": "Improved forecast accuracy",
      "source": "ITC Infotech, Economic Times",
      "isPlaceholder": false
    },

    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "network"
  },
  {
    "node_id": "UN06",
    "short_name": "Production Planning",
    "full_name": "AI Production Planning & Schedule Optimization",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Manufacturing",
    "industry_secondary": "FMCG",
    "priority": 9,
    "reality_sentence": "Every order is urgent. Every sequence is suboptimal. Every week ends in unplanned overtime.",
    "node_type": "UNIVERSAL",
    "metadata_watches": "Open order book with due dates · Machine or line capacity · Material availability · Operator skills",
    "metadata_generates": "Optimal production sequence · Conflict and constraint list for planner · Published schedule to floor",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual sequencing by planner under competing priority pressures from sales and operations",
    "metadata_returns": "15–20% improvement in on-time delivery · 25–35% reduction in unplanned overtime",
    "problem_paragraph": "Your production schedule starts as a plan and becomes a negotiation by the end of the first morning. Sales needs an order moved. A machine is down for an hour. A customer calls about a delivery that was confirmed but is now at risk. Your planner manages the chaos in real time, making trade-offs that seem reasonable in the moment and visible only in hindsight as the pattern of late deliveries and unplanned overtime. The optimization that would have prevented those trade-offs never happened because there was no time to do it before the chaos arrived. ---",
    "outcomes": [
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--"
    ],
    "x": 750,
    "y": 780,
    "slug": "ai-production-planning-schedule-optimization",
    "proof_entries": [
      {
        "industry": "Manufacturing",
        "region": "Gujarat",
        "year": "2023"
      },
      {
        "industry": "FMCG",
        "region": "Maharashtra",
        "year": "2022"
      }
    ],
    "proof_counter": 2,
    "mechanism_ai_handles": [
      "Placeholder mechanism item"
    ],
    "mechanism_you_handle": [
      "Placeholder mechanism item"
    ],
    "mechanism_summary": "Placeholder mechanism summary.",
    "watermarkType": "generic"
  },
{
    "node_id": "NEW_01",
    "short_name": "Onboarding Copilot",
    "full_name": "INTERNAL KNOWLEDGE ENGINE",
    "cluster_primary": "KNOWLEDGE & DELIVERY INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Turns scattered SOPs and Slack threads into one assistant that answers instantly.",
    "node_type": "HUB",
    "metadata_watches": "Confluence & Notion docs \u00b7 Slack/Teams history \u00b7 Past tickets & incident logs \u00b7 Onboarding SOPs",
    "metadata_generates": "Instant answers to employee queries \u00b7 Auto-updated knowledge gaps report \u00b7 Role-specific onboarding paths",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual answering of repeat internal questions by senior staff and HR",
    "metadata_returns": "Up to 30% faster issue turn-around when reps get grounded answers instantly (Infosys Topaz deployment) \u00b7 New hires reach full productivity up to 40% faster (industry onboarding benchmarks)",
    "problem_paragraph": "New hires and existing staff burn weeks re-asking questions that were already answered somewhere in a wiki, a Slack thread, or a senior engineer's head. That knowledge is fragmented across tools, so the same question gets asked five times a week, and the people who know the answers are the ones getting interrupted most.",
    "x": 1609,
    "y": 528,
    "slug": "internal-knowledge-engine",
    "proof_entries": [
      {
        "industry": "IT Services",
        "region": "India",
        "year": "2024"
      },
      {
        "industry": "BPM / Enterprise Ops",
        "region": "Global",
        "year": "2024"
      },
      {
        "industry": "HR Tech",
        "region": "India",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Up to 30% improvement in turn-around time for issue resolution once responses are grounded in prior tickets (Infosys Topaz, ServiceNow deployment)",
      "New-hire time-to-peak-performance cut by roughly 40% in organizations with mature AI onboarding assistants",
      "IBM has reported cutting new-hire ramp-up time by 50% using an AI onboarding assistant",
      "Reduces dependency on subject-matter experts for repetitive internal questions, freeing senior staff from constant interruptions"
    ],
    "mechanism_ai_handles": [
      "Ingestion - Pulls and indexes docs, tickets, and chat history into a single retrieval layer",
      "Retrieval - Matches an employee's question to the exact source passage, not a guess",
      "Synthesis - Drafts a grounded answer with a citation back to the source document",
      "Gap detection - Flags recurring questions with no clean answer, so docs get written before they're needed"
    ],
    "mechanism_you_handle": [
      "Review flagged knowledge gaps and approve new documentation"
    ],
    "mechanism_summary": "The engine handles retrieval and drafting from existing knowledge; your team handles what to write next.",
    "laymanSummary": "A search assistant trained on your company's own documents and past conversations, so employees get a straight answer instead of pinging a colleague.",
    "detailedExplanation": "The system runs a retrieval-augmented pipeline: source documents (wikis, SOPs, resolved tickets, chat history) are chunked and embedded into a vector index, refreshed on a schedule so answers never go stale. When an employee asks a question, the engine retrieves the most relevant passages, ranks them for recency and authority, and constructs an answer that cites its source rather than inventing one. A separate monitoring layer tracks which questions return low-confidence matches or get no clean hit at all, surfacing those as a weekly gap report so documentation owners know exactly what to write next. Role and permission awareness sit underneath the retrieval layer so an assistant answering a finance question doesn't surface engineering credentials, and vice versa.",
    "watermarkType": "network",
    "proofCitation": {
      "company": "Infosys",
      "system": "Infosys Topaz Gen AI Chatbot Solution (ServiceNow incident assistant)",
      "date": "2024",
      "result": "Up to 30% improvement in turn-around time for issue resolution, reduced dependency on subject-matter experts",
      "source": "Infosys case study, 'A New Era of Intelligence: Expanding Gen AI Horizons with Infosys Topaz'",
      "isPlaceholder": false
    }
  },
  {
    "node_id": "NEW_02",
    "short_name": "Automated QA Copilot",
    "full_name": "AUTOMATED QA COPILOT",
    "cluster_primary": "KNOWLEDGE & DELIVERY INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Reads a requirement doc and writes, runs, and maintains the test suite around it.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Requirement documents \u00b7 Codebase & pull requests \u00b7 Existing test scripts \u00b7 Bug/defect history",
    "metadata_generates": "Auto-generated test cases \u00b7 Self-healing test scripts \u00b7 Coverage & regression reports",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual test case writing and brittle script maintenance",
    "metadata_returns": "Up to 80% effort saved on test case generation with up to 100% test coverage (Infosys Topaz deployment) \u00b7 Developers ship 84% more successful builds when AI-assisted (GitHub/Accenture study)",
    "problem_paragraph": "QA teams spend more time writing and re-writing test cases than actually testing, because every UI change breaks a chunk of the existing test scripts. Coverage gaps hide until a customer finds them in production, and the engineers who understand the requirements well enough to write good tests are the same ones needed for feature work.",
    "x": 351,
    "y": 863,
    "slug": "automated-qa-copilot",
    "proof_entries": [
      {
        "industry": "Retail / Fashion",
        "region": "Global",
        "year": "2024"
      },
      {
        "industry": "Software Development",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "IT Services",
        "region": "India",
        "year": "2024"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Up to 80% effort saving in test case generation with up to 100% test coverage on a live enterprise application platform (Infosys Topaz)",
      "Up to 30% reduction in development cycle time from faster, more complete test generation",
      "84% increase in successful builds when AI code assistance is paired with testing workflows (GitHub/Accenture controlled study)",
      "100% script documentation with automated refresh, removing a chronic maintenance debt"
    ],
    "mechanism_ai_handles": [
      "Requirement parsing - Reads specs and user stories to identify testable conditions",
      "Test generation - Writes test cases and scripts mapped to each requirement",
      "Self-healing - Detects UI/API changes and updates selectors before a script breaks",
      "Coverage audit - Flags untested code paths and generates a coverage report"
    ],
    "mechanism_you_handle": [
      "Review edge cases the model flagged as ambiguous and sign off on release-blocking failures"
    ],
    "mechanism_summary": "The copilot writes and maintains the routine test surface; your QA lead owns judgment calls on ambiguous or release-blocking cases.",
    "laymanSummary": "An AI QA engineer that writes your test cases from the requirement doc, keeps them working when the UI changes, and tells you exactly what's still untested.",
    "detailedExplanation": "The pipeline starts by parsing requirement documents and user stories into discrete testable conditions using an LLM fine-tuned on structured test taxonomies. From there it generates test cases and executable scripts against the current codebase, using DOM/API introspection rather than hardcoded selectors so scripts survive routine UI churn - when a selector breaks, a self-healing layer re-locates the element by semantic similarity instead of failing the build outright. A parallel coverage-mapping process cross-references generated tests against the actual code paths exercised, producing a live coverage report rather than a static one generated once at project kickoff. Documentation for every script is generated and refreshed automatically alongside the code, closing the gap where test docs silently go stale.",
    "watermarkType": "sensor",
    "proofCitation": {
      "company": "Infosys",
      "system": "Infosys Topaz Generative AI test case generation",
      "date": "2024",
      "result": "Up to 80% effort saving in test case generation, up to 100% test coverage, up to 30% reduction in development cycle time",
      "source": "Infosys case study, 'Revolutionizing Change: Harnessing the Power of Gen AI with Infosys Topaz'",
      "isPlaceholder": false
    }
  },
  {
    "node_id": "NEW_03",
    "short_name": "Sales Pipeline Copilot",
    "full_name": "CRM & SALES PIPELINE COPILOT",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Agencies",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Works untouched leads around the clock and keeps the CRM updated without being asked.",
    "node_type": "HUB",
    "metadata_watches": "CRM records & deal stages \u00b7 Inbound leads & form fills \u00b7 Email/call activity \u00b7 Past won-lost patterns",
    "metadata_generates": "Prioritized & scored pipeline \u00b7 Auto-drafted outreach \u00b7 CRM hygiene updates",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual lead triage, CRM data entry, and cold outreach drafting",
    "metadata_returns": "Leads and appointments up more than 50%, call time down 60-70% with AI-assisted sales (McKinsey) \u00b7 213% ROI from an AI-agent Service Cloud deployment within a year (Salesforce/Wiley case study)",
    "problem_paragraph": "Sales reps spend the majority of their week on admin - logging calls, updating deal stages, chasing leads that were never going to convert - instead of selling. Meanwhile the leads that don't fit a rep's immediate quota math get left untouched entirely, not because they're bad, just because there's no time.",
    "x": 801,
    "y": 757,
    "slug": "crm-sales-pipeline-copilot",
    "proof_entries": [
      {
        "industry": "Publishing / EdTech",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "B2B SaaS",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Agencies & Professional Services",
        "region": "Global",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "AI-assisted sales teams see leads and appointments increase by more than 50%, with call time reduced 60-70% (McKinsey analysis)",
      "213% ROI from a Service Cloud AI-agent deployment, with self-service efficiency up over 40% (Wiley, via Salesforce Agentforce case studies)",
      "83% of sales teams using AI reported revenue growth in the past year, versus 66% of teams without it (Salesforce State of Sales research)",
      "One enterprise sales org's AI agent worked 130,000 previously-untouched leads and created 3,200 new opportunities in four months"
    ],
    "mechanism_ai_handles": [
      "Enrichment - Pulls firmographic and intent data onto every lead the moment it lands",
      "Scoring - Ranks the pipeline by real propensity-to-close, not just recency",
      "Outreach drafting - Writes first-touch and follow-up emails personalized to each account",
      "CRM hygiene - Logs calls, updates stages, and flags stalled deals automatically"
    ],
    "mechanism_you_handle": [
      "Review qualified appointments and close deals"
    ],
    "mechanism_summary": "The copilot keeps the entire pipeline worked and current; your reps spend their time only on conversations that are ready to close.",
    "laymanSummary": "An AI sales development rep that works every lead in your CRM, drafts the outreach, and keeps the pipeline clean, so your closers only see deals that are actually ready.",
    "detailedExplanation": "Every inbound and outbound lead is enriched on arrival with firmographic, technographic, and behavioral signal, then scored against a propensity model trained on the account's historical win/loss patterns. Leads below a configurable priority threshold that would otherwise sit untouched are routed into an automated outreach sequence - personalized first-touch emails drafted from account context, not templates - while high-intent leads are surfaced directly to a rep with a briefing. In parallel, a CRM-hygiene agent listens to call transcripts and email threads to auto-log activity, update deal stages, and flag deals that have gone stale past a defined SLA, eliminating the administrative tax that normally consumes the majority of a rep's week.",
    "watermarkType": "flow",
    "proofCitation": {
      "company": "Wiley",
      "system": "Salesforce Agentforce (Service Cloud AI agents)",
      "date": "2025",
      "result": "213% ROI within a year of deployment, self-service resolution efficiency up over 40%",
      "source": "Salesforce customer case study, 'Agentforce Metrics: Real Impact & Results'",
      "isPlaceholder": false
    }
  },
  {
    "node_id": "NEW_04",
    "short_name": "Client Reporting Engine",
    "full_name": "CLIENT REPORTING AUTOMATION",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "Agencies",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Pulls every ad platform into one branded report before the client asks for it.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Ad platform APIs (Google, Meta, LinkedIn) \u00b7 Analytics & CRM data \u00b7 Prior report templates \u00b7 Client KPI targets",
    "metadata_generates": "Branded client-ready reports \u00b7 Real-time performance dashboards \u00b7 Anomaly & trend alerts",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual export-and-slide-deck reporting across platforms",
    "metadata_returns": "Reporting time cut from roughly 15-20 hours to under 2 hours a month per account team (industry benchmarks) \u00b7 Agencies reclaim an average of 137 billable hours a month after automating reporting (Glean research)",
    "problem_paragraph": "Account teams lose entire days every month exporting numbers from half a dozen ad platforms, reconciling mismatched metric definitions, and rebuilding the same slide deck with new figures. It's unbillable work that clients never see, and it's the first thing that slips when the team gets busy - which is exactly when clients start asking harder questions about performance.",
    "x": 585,
    "y": 509,
    "slug": "client-reporting-automation",
    "proof_entries": [
      {
        "industry": "Digital Marketing Agencies",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Performance Marketing / PPC",
        "region": "Global",
        "year": "2026"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
      "Weekly reporting workload cut from roughly 15 hours to under 2 hours in agency deployments (industry benchmark data)",
      "Agencies report reclaiming an average of 137 billable hours per month after automating client reporting (Glean)",
      "A 50-client agency can cut monthly reporting cost from roughly $12,000 to $4,000 by automating data pulls and formatting",
      "Eliminates common manual errors - formula mistakes, outdated data references, inconsistent metric definitions across client accounts"
    ],
    "mechanism_ai_handles": [
      "Data pull - Connects to every ad, analytics, and CRM platform a client touches",
      "Reconciliation - Normalizes metric definitions so numbers agree across platforms",
      "Narrative drafting - Writes the plain-English 'what happened and why' section",
      "Delivery - Formats to brand and ships on a schedule, no manual export required"
    ],
    "mechanism_you_handle": [
      "Add strategic recommendations and walk the client through the story"
    ],
    "mechanism_summary": "The engine assembles the numbers and the narrative draft; your account lead adds the strategic read the client is actually paying for.",
    "laymanSummary": "A reporting analyst that logs into every ad platform your client touches, reconciles the numbers, and delivers a branded report - so your team's time goes to strategy calls, not copy-pasting spreadsheets.",
    "detailedExplanation": "The engine connects directly to each platform's reporting API (Google Ads, Meta, LinkedIn, GA4, and CRM systems), pulling data on a defined schedule rather than relying on manual exports. A normalization layer resolves the fact that every platform names and calculates metrics slightly differently - 'clicks' on Meta isn't counted the same way as 'clicks' on LinkedIn - so the client sees one consistent set of numbers instead of five conflicting ones. An anomaly-detection pass flags any metric that moves outside its normal range before the report ships, and a narrative layer drafts the plain-language summary of what changed and why, using the account's historical performance as context. The account lead reviews the draft, adds strategic commentary, and the report goes out on a fixed cadence in the agency's own branding.",
    "watermarkType": "data",
    "proofCitation": {
      "company": "Glean",
      "system": "AI agents for automated marketing agency client reporting",
      "date": "2025",
      "result": "Agencies save an average of 137 billable hours per month after automating reports, representing $20,000-$30,000 in monthly reclaimed capacity",
      "source": "Glean industry research, 'How AI agents are automating client reporting for marketing agencies'",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_05",
    "short_name": "Creative Production Engine",
    "full_name": "CREATIVE PRODUCTION ENGINE",
    "cluster_primary": "PRODUCTION INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Agencies",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Turns one approved hero asset into every size and market variant your campaign needs.",
    "node_type": "HUB",
    "metadata_watches": "Brand guidelines & style references \u00b7 Approved hero creative \u00b7 Campaign channel specs \u00b7 Localization requirements",
    "metadata_generates": "On-brand asset variants at scale \u00b7 Multi-format & multi-market resizes \u00b7 Localized copy and imagery",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual resizing, cropping, and re-versioning of creative for every channel and market",
    "metadata_returns": "Content production time cut by 50% (Currys, via Adobe Firefly enterprise deployment) \u00b7 Asset variant production scaled 70-80% with review time cut by up to 75% (Forrester TEI study)",
    "problem_paragraph": "A single campaign hero image needs to become forty different assets - five aspect ratios, six markets, three languages - and design teams end up spending most of their time on repetitive resizing and reformatting instead of new creative concepts. By the time all the variants are done, the campaign moment they were built for has often already passed.",
    "x": 1685,
    "y": 1416,
    "slug": "creative-production-engine",
    "proof_entries": [
      {
        "industry": "Retail / Electronics",
        "region": "UK / Global",
        "year": "2025"
      },
      {
        "industry": "CPG & FMCG",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Marketing Agencies",
        "region": "Global",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Currys, the UK's largest electrical retailer, increased creative team productivity and cut production time by 50% using an enterprise generative AI production workflow",
      "Enterprises scale asset variant production 70-80% while cutting time spent reviewing and fixing assets by up to 75% over three years (Forrester Total Economic Impact study, commissioned by Adobe)",
      "Design agencies using enterprise generative AI production tools report a 20% increase in project output",
      "Frees creative teams to spend more time on ideation and concept work rather than repetitive production tasks"
    ],
    "mechanism_ai_handles": [
      "Brand ingestion - Learns approved colors, type, tone, and composition rules from existing assets",
      "Variant generation - Produces resizes, crops, and format variants of the approved hero asset",
      "Localization - Adapts copy, imagery, and layout per market without breaking brand rules",
      "Compliance check - Flags any variant that drifts outside brand guidelines before it ships"
    ],
    "mechanism_you_handle": [
      "Approve the hero creative concept and sign off on final campaign assets"
    ],
    "mechanism_summary": "The engine multiplies one approved creative into every format and market variant; your creative director owns the concept and the final call.",
    "laymanSummary": "A production team that takes one approved hero image and turns it into every size, format, and market version your campaign needs - without a designer manually resizing forty files.",
    "detailedExplanation": "The engine is trained on a brand's approved creative assets and style guidelines - color palettes, typography rules, composition patterns, tone of voice - so every variant it produces is constrained to stay on-brand rather than generating freely. Once a hero asset is approved by the creative team, the system generates the full matrix of required variants: aspect ratios for each channel, resized layouts, localized copy and imagery per market, and seasonal or promotional overlays. A brand-compliance pass checks every output against the guideline set before it's queued for review, catching drift before it reaches a human reviewer rather than after. The workflow integrates with existing DAM and campaign management tools so approved variants flow straight into scheduling rather than sitting in a separate export folder.",
    "watermarkType": "flow",
    "proofCitation": {
      "company": "Currys",
      "system": "Adobe Firefly (Creative Cloud for Enterprise)",
      "date": "2025",
      "result": "Increased creative team productivity and reduced production time by 50%",
      "source": "Adobe customer story, 'Currys accelerates content creation with Adobe Firefly'",
      "isPlaceholder": false
    }
  },
  {
    "node_id": "NEW_06",
    "short_name": "KYC & Dispatch Intelligence",
    "full_name": "DOCUMENT INTELLIGENCE FOR KYC & DISPATCH",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Reads ID documents and dispatch paperwork, then verifies and routes them in minutes.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Identity & KYC documents \u00b7 Delivery/dispatch paperwork \u00b7 Government ID databases \u00b7 Address & geocoding data",
    "metadata_generates": "Verified identity decisions \u00b7 Fraud & tamper flags \u00b7 Structured, routable address data",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual document review, data entry, and address verification",
    "metadata_returns": "Loan approval time cut to under 5 minutes per file while screening 100% of applications for fraud (Karza Technologies, India) \u00b7 8,000 geocoding requests a minute at 160ms latency, with model-serving cost cut ~80% (Delhivery, via AWS)",
    "problem_paragraph": "Every new customer or shipment arrives with a stack of documents that someone has to read, verify against a database, and key into a system by hand - and Indian addresses and ID formats are messy enough that off-the-shelf OCR chokes on them constantly. The result is onboarding queues measured in days and dispatch errors that show up as failed deliveries.",
    "x": 478,
    "y": 1164,
    "slug": "document-intelligence-for-kyc-dispatch",
    "proof_entries": [
      {
        "industry": "BFSI / Lending",
        "region": "India",
        "year": "2024"
      },
      {
        "industry": "Logistics & Last-Mile Delivery",
        "region": "India",
        "year": "2026"
      },
      {
        "industry": "Banking / Digital Onboarding",
        "region": "India",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "A payday lender using Karza Technologies' AI document verification cut loan approval time to under 5 minutes per file while screening 100% of applications for fraud in real time",
      "The same deployment scaled monthly application volume from 0.5 million to 2 million without sacrificing verification quality",
      "Delhivery's fine-tuned AI geocoding model processes up to 8,000 address-matching requests per minute at 160ms latency, cutting model-serving costs by roughly 80%",
      "Prototyping cycles for new document/address models dropped from two days to under six hours in the same deployment"
    ],
    "mechanism_ai_handles": [
      "Document capture - Extracts fields from IDs, KYC forms, and dispatch paperwork via OCR tuned for regional formats",
      "Cross-verification - Matches extracted data against government and internal databases in real time",
      "Fraud & tamper detection - Flags forged, duplicated, or inconsistent documents before approval",
      "Address resolution - Converts messy, non-standardized addresses into precise, routable locations"
    ],
    "mechanism_you_handle": [
      "Review flagged high-risk cases and make the final approval call"
    ],
    "mechanism_summary": "The engine clears the straightforward cases end-to-end; your compliance or dispatch team only sees the ones that were actually flagged as risky.",
    "laymanSummary": "A document-reading system that verifies identity paperwork or dispatch addresses in minutes instead of days, and only hands you the cases that look genuinely suspicious.",
    "detailedExplanation": "Incoming documents - identity proofs, KYC forms, or dispatch paperwork - are run through OCR models specifically trained on regional document formats, handwriting patterns, and low-quality scans rather than generic Western-format OCR, which is where most off-the-shelf tools fail on Indian documents. Extracted fields are cross-referenced in real time against relevant government and internal databases to confirm identity and catch duplicates. A parallel fraud-detection layer checks for tampering, inconsistent fonts, mismatched security features, and pattern anomalies against known fraud signatures, producing a risk score rather than a binary pass/fail. For dispatch use cases, the same document-intelligence backbone is applied to address data: a fine-tuned language model resolves vague, informal, or landmark-based addresses into precise geocoded, routable locations, which is the single biggest driver of last-mile delivery failure in markets where formal addressing is inconsistent.",
    "watermarkType": "data",
    "proofCitation": {
      "company": "Karza Technologies",
      "system": "AI-based KYC document verification and fraud screening",
      "date": "2024",
      "result": "Loan approval time cut to under 5 minutes per file, monthly application volume scaled from 0.5 million to 2 million, 100% of applications screened for fraud",
      "source": "Government of India IndiaAI portal, 'Getting the KYC process right with advanced AI solutions'",
      "isPlaceholder": false
    }
  },
  {
    "node_id": "NEW_07",
    "short_name": "Social Media Pipeline",
    "full_name": "SOCIAL MEDIA AUTOMATION PIPELINE",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Agencies",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Plans, drafts, and schedules a client's content calendar from a single brief.",
    "node_type": "HUB",
    "metadata_watches": "Brand voice & content briefs \u00b7 Past post performance \u00b7 Trending topics & competitor activity \u00b7 Content calendar",
    "metadata_generates": "Draft posts across platforms \u00b7 Optimized posting schedule \u00b7 Performance-based content recommendations",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual content drafting, scheduling, and calendar management",
    "metadata_returns": "Content production efficiency up 63% with AI (McKinsey Digital) \u00b7 Marketers save an average of 6.1 hours a week using AI tools (HubSpot AI Trends 2026)",
    "problem_paragraph": "Keeping a content calendar full across five platforms for a dozen clients means constant drafting, resizing, and rescheduling - and the strategic thinking about what's actually working gets squeezed into whatever time is left. Agencies end up reactive, publishing to fill the calendar rather than publishing what the data says will perform.",
    "x": 365,
    "y": 361,
    "slug": "social-media-automation-pipeline",
    "proof_entries": [
      {
        "industry": "Marketing & Advertising Agencies",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "D2C & E-commerce Brands",
        "region": "Global",
        "year": "2026"
      }
    ],
    "proof_counter": 2,
    "outcomes": [
      "Companies using AI for content production report a 63% efficiency improvement in content creation (McKinsey Digital)",
      "Marketers save an average of 6.1 hours per week using AI tools in their content workflow (HubSpot AI Trends 2026)",
      "60% of US companies now use generative AI specifically to maintain consistent social media posting cadence",
      "Companies using AI for marketing report a 35% average ROI improvement over non-AI workflows (McKinsey Digital)"
    ],
    "mechanism_ai_handles": [
      "Draft generation - Writes on-brand post copy and visual briefs from a single campaign input",
      "Format adaptation - Reshapes one piece of content for each platform's format and tone",
      "Scheduling - Places posts at data-backed optimal times per platform and audience",
      "Performance loop - Feeds engagement data back to sharpen the next batch of drafts"
    ],
    "mechanism_you_handle": [
      "Approve final posts and set campaign direction"
    ],
    "mechanism_summary": "The pipeline keeps every platform fed with on-brand drafts and data-backed timing; your social lead approves and steers strategy.",
    "laymanSummary": "A content team that turns one campaign brief into ready-to-post drafts for every platform, scheduled at the best times - so your team approves and adjusts instead of drafting from scratch.",
    "detailedExplanation": "The pipeline starts from a campaign brief or content pillar and a brand voice profile trained on the client's past approved content. It generates platform-specific drafts - copy length, tone, and format adapted for LinkedIn versus Instagram versus X rather than a single post copy-pasted everywhere - along with visual briefs where imagery is needed. A scheduling layer analyzes historical engagement data per platform and audience segment to place each post at its statistically strongest time window rather than a fixed daily slot. After publishing, engagement data flows back into the system to inform the next batch of drafts, so the content strategy compounds on what's actually working for that specific client rather than generic best practices.",
    "watermarkType": "flow",
    "proofCitation": {
      "company": "McKinsey Digital",
      "system": "Generative AI content production workflows",
      "date": "2026",
      "result": "63% efficiency improvement in content production, 35% average marketing ROI improvement for AI adopters",
      "source": "McKinsey Digital marketing AI research, cited in industry compilation 'AI Marketing Statistics: Adoption & ROI Data 2026'",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_08",
    "short_name": "Migration Runbook Copilot",
    "full_name": "DEVOPS AUTOMATION & MIGRATION RUNBOOK COPILOT",
    "cluster_primary": "KNOWLEDGE & DELIVERY INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Writes the migration runbook, generates the code, and catches regressions before deploy.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Legacy codebase & dependencies \u00b7 Infrastructure configs \u00b7 CI/CD pipeline logs \u00b7 Cloud architecture patterns",
    "metadata_generates": "Auto-generated migration runbooks \u00b7 Infrastructure-as-code templates \u00b7 Regression & risk reports",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual dependency mapping, migration planning, and runbook documentation",
    "metadata_returns": "Cloud migration time cut 30-40% with generative AI (McKinsey) \u00b7 Coding copilots deliver up to 376% ROI with under 6-month payback (Forrester Total Economic Impact study)",
    "problem_paragraph": "Cloud migrations and infrastructure work stall on the unglamorous middle step: mapping every dependency, writing a runbook nobody will actually follow exactly, and discovering the breaking changes only after something goes down. Senior engineers spend weeks on documentation and discovery instead of the migration itself, and the accumulated technical debt from skipped documentation compounds with every release.",
    "x": 491,
    "y": 747,
    "slug": "devops-automation-migration-runbook-copilot",
    "proof_entries": [
      {
        "industry": "IT Services / GCCs",
        "region": "India",
        "year": "2025"
      },
      {
        "industry": "Enterprise SaaS",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Utilities & Infrastructure",
        "region": "Global (NZ)",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Generative AI reduces cloud migration time by 30-40%, with some discovery tasks seeing even larger gains (McKinsey)",
      "AWS Transform for VMware migrations can cut VM migration time by at least 50% (Accenture, via AWS partner data)",
      "A 400+ developer enterprise deployment of GitHub Copilot recorded a 33% suggestion acceptance rate and 72% developer satisfaction (Zoominfo enterprise case study)",
      "Organizations deploying AI coding copilots at scale report up to 376% ROI with payback in under 6 months (Forrester Total Economic Impact study)"
    ],
    "mechanism_ai_handles": [
      "Discovery - Automatically maps application dependencies, configs, and data flows",
      "Runbook generation - Drafts the step-by-step migration or deployment plan from that map",
      "Code generation - Produces infrastructure-as-code and remediation scripts for flagged issues",
      "Regression scan - Flags likely breaking changes before they reach a production deploy"
    ],
    "mechanism_you_handle": [
      "Approve the migration plan and sign off on production cutover"
    ],
    "mechanism_summary": "The copilot does the discovery, drafting, and regression-checking; your lead engineer approves the plan and owns the cutover.",
    "laymanSummary": "A senior engineer's assistant that maps your systems, writes the migration runbook, generates the infrastructure code, and flags what's likely to break - before you find out in production.",
    "detailedExplanation": "The system begins with automated discovery: scanning the legacy codebase, infrastructure configuration, and CI/CD history to build a dependency graph without requiring manual documentation review. From that graph, it drafts a migration runbook sequenced by dependency order and risk, and generates the corresponding infrastructure-as-code templates for the target environment. A regression-analysis layer cross-references the planned changes against historical incident data and known breaking-change patterns to flag likely failure points before cutover, rather than relying on post-deploy monitoring to catch them. Throughout, generated code and configuration changes are surfaced for engineer review rather than auto-applied to production, keeping a human decision point at every irreversible step.",
    "watermarkType": "network",
    "proofCitation": {
      "company": "Zoominfo",
      "system": "GitHub Copilot enterprise-scale deployment (400+ developers)",
      "date": "2025",
      "result": "33% average suggestion acceptance rate for code and 20% for lines of code, with 72% developer satisfaction score",
      "source": "Published case study, 'Experience with GitHub Copilot for Developer Productivity at Zoominfo' (arXiv)",
      "isPlaceholder": false
    }
  },
  {
    "node_id": "NEW_09",
    "short_name": "Financial Risk Analytics AI",
    "full_name": "FINANCIAL REPORTING & RISK ANALYTICS AUTOMATION",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "FinTech",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Consolidates ledgers and risk feeds into board-ready reports in real time.",
    "node_type": "HUB",
    "metadata_watches": "General ledger entries \u00b7 Market & credit risk feeds \u00b7 Regulatory filing calendars \u00b7 Transaction logs",
    "metadata_generates": "Board-ready financial reports \u00b7 Risk exposure dashboards \u00b7 Variance & anomaly flags \u00b7 Regulatory filing drafts",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual spreadsheet-based financial close and risk consolidation",
    "metadata_returns": "McKinsey: Gen AI could add $200B\u2013$340B in annual value to global banking \u00b7 Bajaj Finance: \u20b9150 Cr in projected annual savings from 300+ live GenAI deployments",
    "problem_paragraph": "Finance teams at fintech and lending firms spend the first two weeks of every month manually reconciling ledgers, chasing risk data across disconnected systems, and re-keying numbers into board decks. A single transposed figure in a risk exposure report can trigger a regulatory red flag or a mispriced loan book. By the time the report is finalized, the underlying risk picture has already moved.",
    "x": 776,
    "y": 1334,
    "slug": "financial-reporting-risk-analytics-automation",
    "proof_entries": [
      {
        "industry": "NBFC / Lending",
        "region": "India",
        "year": "2025"
      },
      {
        "industry": "Retail Banking",
        "region": "India",
        "year": "2024"
      },
      {
        "industry": "Banking & Financial Services",
        "region": "Global",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Financial close and reporting cycles compressed from weeks to days through automated data consolidation",
      "AI-driven models identify leads and forecast business volume with under 5% error margin (2024 Indian retail banking study)",
      "Gen AI could unlock $200B\u2013$340B in annual value for the global banking industry (McKinsey Global Institute)",
      "Bajaj Finance projects \u20b9150 Cr in annual savings from over 300 live GenAI initiatives"
    ],
    "mechanism_ai_handles": [
      "Ingestion - Pulls transaction, ledger, and market/credit risk feeds from core banking and treasury systems",
      "Reconciliation - Cross-matches entries, flags variances, and traces anomalies to source transactions",
      "Risk Modeling - Scores exposure across credit, market, and liquidity dimensions against defined thresholds",
      "Drafting - Generates narrative-ready financial and risk reports formatted for board and regulator review"
    ],
    "mechanism_you_handle": [
      "Review flagged anomalies and sign off on the final risk report"
    ],
    "mechanism_summary": "The AI handles the data-heavy reconciliation and first-draft reporting so the finance team's time goes into judgment calls on what the numbers actually mean.",
    "laymanSummary": "This system pulls together scattered financial and risk data every night and hands finance teams a nearly finished report instead of a blank spreadsheet.",
    "detailedExplanation": "The pipeline begins with scheduled and event-triggered ingestion connectors that pull general ledger entries, market and credit risk feeds, and transaction logs from core banking, treasury, and ERP systems into a unified data layer. A reconciliation engine cross-matches entries against source documents and prior periods, using statistical anomaly detection to flag variances that exceed configurable thresholds rather than surfacing every immaterial rounding difference. A risk-scoring layer then applies credit, market, and liquidity models \u2014 calibrated against the institution's own historical loss data \u2014 to produce exposure scores by portfolio segment. Finally, a generation layer assembles the validated figures into board-ready narrative reports and regulatory filing drafts, with every number traceable back to its source transaction for audit purposes. Analysts review flagged exceptions and approve the narrative before it goes out, keeping a human decision-maker in the loop on anything regulator-facing.",
    "watermarkType": "data",
    "proofCitation": {
      "company": "Bajaj Finance",
      "system": "FINAI GenAI Program",
      "date": "2025",
      "result": "300+ GenAI projects live in production, with \u20b9150 Cr in projected annual savings and AUM growth from \u20b92,478 Cr to over \u20b93.3 lakh Cr",
      "source": "Bajaj Finance digital transformation disclosures",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_10",
    "short_name": "AP & Invoice Automation",
    "full_name": "ACCOUNTS PAYABLE & INVOICE PROCESSING AUTOMATION",
    "cluster_primary": "FINANCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "Professional Services",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Reads, matches, and routes vendor invoices for approval without manual entry.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Incoming vendor invoices \u00b7 Purchase orders \u00b7 Goods receipt notes \u00b7 Vendor master data",
    "metadata_generates": "Matched & coded invoices \u00b7 Approval routing requests \u00b7 Scheduled payment batches \u00b7 Exception alerts",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual invoice data entry and three-way matching",
    "metadata_returns": "PayStream Advisors: up to 81% lower invoice processing costs and 75% better payment accuracy \u00b7 Coupa customers: processing costs drop 70%+ with 97%+ first-time match rates",
    "problem_paragraph": "Engineering and professional services firms routinely process thousands of vendor invoices a month across PDFs, emailed attachments, and scanned images, each requiring manual keying, PO matching, and approval chasing. Late or duplicate payments strain vendor relationships and rack up penalty fees, while the AP team spends most of its time on data entry instead of vendor strategy. Month-end close regularly slips because reconciliation can't happen until every invoice has been manually keyed.",
    "x": 1532,
    "y": 354,
    "slug": "accounts-payable-invoice-processing-automation",
    "proof_entries": [
      {
        "industry": "Professional Services",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Engineering / Manufacturing",
        "region": "Global",
        "year": "2024"
      },
      {
        "industry": "Global Automotive Supply Chain",
        "region": "Asia / Europe / US",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Invoice processing time cut from 15\u201320 minutes to under 3 minutes per invoice (Ramp/REVA case study)",
      "Automated AP software reduces processing costs by up to 81% and improves payment accuracy by 75% (PayStream Advisors, 2024)",
      "First-time invoice match rates climb above 97%, up from typical 80\u201385% manual baselines (Coupa customer data)",
      "Month-end close accelerated by roughly two weeks through real-time reconciliation"
    ],
    "mechanism_ai_handles": [
      "Capture - Extracts line-item data from PDFs, scans, and emailed invoices in any format or language",
      "Matching - Runs automated 3-way matching against purchase orders and goods receipt notes",
      "Coding - Applies GL codes and cost-center rules based on vendor and spend category history",
      "Routing - Sends invoices through the correct approval chain and schedules payment batches"
    ],
    "mechanism_you_handle": [
      "Approve flagged exceptions and authorize payment runs"
    ],
    "mechanism_summary": "The AI handles capture-to-match for every routine invoice so the AP team only touches the exceptions and the final sign-off.",
    "laymanSummary": "This system reads incoming invoices, checks them against purchase orders automatically, and routes them for approval \u2014 so nobody has to manually type invoice data into the accounting system.",
    "detailedExplanation": "Invoices arriving by email, upload, or scan are first processed through an OCR and layout-recognition layer that extracts vendor, line-item, tax, and total fields regardless of template. Extracted data is validated against a three-way match \u2014 purchase order, goods receipt, and invoice \u2014 with configurable tolerance thresholds for quantity and price variance; discrepancies above threshold are routed to an exception queue rather than blocking the entire batch. A rules engine assigns GL codes and cost centers based on historical coding patterns for that vendor and category, then pushes the coded invoice into an approval workflow that respects existing authorization hierarchies. Once approved, the system batches payments according to term dates and early-payment discount windows, and posts the transaction back to the ERP with full audit trail. Human reviewers only see the invoices that fail matching or coding confidence thresholds, plus the final payment batch for authorization.",
    "watermarkType": "flow",
    "proofCitation": {
      "company": "Coupa",
      "system": "AP Automation Platform",
      "date": "2025",
      "result": "Customers report invoice processing costs dropping by 70% or more and first-time match rates rising above 97%",
      "source": "Coupa AP Automation Case Study Compilation",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_11",
    "short_name": "Compliance & Security AI",
    "full_name": "COMPLIANCE AND SECURITY-POLICY ASSISTANT",
    "cluster_primary": "QUALITY & COMPLIANCE",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Collects audit evidence continuously and answers security questionnaires instantly.",
    "node_type": "HUB",
    "metadata_watches": "Cloud infrastructure configs \u00b7 Access logs & IAM changes \u00b7 Internal policy documents \u00b7 Employee security training records",
    "metadata_generates": "Auditor-ready evidence packets \u00b7 Control gap alerts \u00b7 Vendor questionnaire responses \u00b7 Continuous compliance score",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual screenshot-based evidence collection for SOC 2 and ISO 27001 audits",
    "metadata_returns": "IDC study: Vanta customers spend 82% less time per framework and attestation audit \u00b7 Vanta: up to 90% of evidence collection automated, saving 50+ hours per cycle",
    "problem_paragraph": "SaaS and IT companies pursuing SOC 2 or ISO 27001 face months of screenshot-gathering, spreadsheet version control, and chasing engineers for proof that a control actually works. Enterprise deals stall in security review while procurement teams wait on hand-filled questionnaires. Every new framework or regional regulation adds another parallel evidence trail that has to be maintained by hand.",
    "x": 1449,
    "y": 707,
    "slug": "compliance-and-security-policy-assistant",
    "proof_entries": [
      {
        "industry": "SaaS / Cloud Infrastructure",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "InfoSec / GRC",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Enterprise IT",
        "region": "North America / Global",
        "year": "2024"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Teams using automated compliance platforms spend 82% less time on framework and attestation audits (IDC study)",
      "Up to 90% of SOC 2 evidence collection automated, saving 50+ hours of manual work per audit cycle (Vanta)",
      "SOC 2 Type I readiness achievable in weeks rather than the traditional 6\u201312 month timeline",
      "Continuous control monitoring flags configuration drift in near real time instead of during annual audit scrambles"
    ],
    "mechanism_ai_handles": [
      "Connection - Links to cloud accounts, identity providers, code repos, and HR systems via native integrations",
      "Evidence Collection - Continuously pulls screenshots, configs, and logs mapped to specific framework controls",
      "Gap Detection - Flags controls that have drifted out of compliance before an auditor finds them",
      "Response Drafting - Auto-fills vendor security questionnaires from the existing evidence library and policy set"
    ],
    "mechanism_you_handle": [
      "Approve control exceptions and sign off on the final audit report"
    ],
    "mechanism_summary": "The AI keeps a continuous, auditor-ready evidence trail running in the background so the security lead only steps in for exceptions and final approval.",
    "laymanSummary": "This system automatically watches your cloud and identity systems around the clock, collects the proof an auditor needs, and answers customer security questionnaires for you \u2014 instead of your team screenshotting settings by hand.",
    "detailedExplanation": "The assistant connects via API to the company's cloud infrastructure (AWS, GCP, Azure), identity provider, code repositories, endpoint management, and HR system, running scheduled tests against each connection \u2014 hourly for high-risk controls like access configuration, daily for lower-risk items. Each test result is mapped to the relevant control in whichever frameworks are in scope (SOC 2, ISO 27001, HIPAA, GDPR), so a single piece of evidence can satisfy overlapping requirements across frameworks instead of being collected once per audit. A drift-detection layer compares current state against the last passing test and raises an alert the moment a control falls out of compliance \u2014 a public S3 bucket, a disabled MFA requirement \u2014 rather than waiting for the next audit cycle to surface it. For customer-facing procurement, a retrieval-augmented response generator drafts answers to security questionnaires by pulling directly from the verified evidence library and current policy documents, flagging any question it can't answer with existing evidence rather than guessing. A human compliance owner reviews flagged gaps, approves any documented exceptions, and signs the final report before it goes to the auditor.",
    "watermarkType": "signal",
    "proofCitation": {
      "company": "Vanta",
      "system": "SOC 2 / ISO 27001 Compliance Automation Platform",
      "date": "2025",
      "result": "IDC-verified study found customer teams spend 82% less time per framework and attestation-related audit, with up to 90% of evidence collection automated",
      "source": "IDC study cited in Vanta platform comparison documentation",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_12",
    "short_name": "RAG Architecture Advisory",
    "full_name": "AI ARCHITECTURE ADVISORY / RAG PIPELINE DESIGN",
    "cluster_primary": "KNOWLEDGE & DELIVERY INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Designs and stress-tests retrieval pipelines so answers stay grounded and accurate.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Existing data sources & documents \u00b7 Query & latency requirements \u00b7 Current tech stack \u00b7 Retrieval failure logs",
    "metadata_generates": "RAG architecture blueprint \u00b7 Vector database & chunking strategy \u00b7 Evaluation & guardrail framework \u00b7 Deployment roadmap",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Ad-hoc, trial-and-error prompt engineering and unvalidated LLM deployments",
    "metadata_returns": "LinkedIn (SIGIR 2024): 28.6% cut in median resolution time and 77.6% MRR gain from knowledge-graph RAG \u00b7 Industry benchmark: enterprise RAG projects return $3.70 for every $1 invested",
    "problem_paragraph": "IT and SaaS teams racing to ship AI features often bolt a chatbot onto an LLM with no retrieval layer, and it hallucinates the moment a customer asks something outside the model's training data. Engineering leadership is left choosing between vector databases, chunking strategies, and evaluation frameworks with no internal precedent for what actually holds up in production. Each failed pilot burns credibility with the business stakeholders funding the next one.",
    "x": 1766,
    "y": 1416,
    "slug": "ai-architecture-advisory-rag-pipeline-design",
    "proof_entries": [
      {
        "industry": "Professional Networking / SaaS",
        "region": "Global",
        "year": "2024"
      },
      {
        "industry": "Enterprise AI Infrastructure",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "IT Services",
        "region": "India / APAC",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Retrieval quality improved 77.6% in Mean Reciprocal Rank after moving from plain-text to knowledge-graph-enhanced RAG (LinkedIn, SIGIR 2024)",
      "Median support issue resolution time cut by 28.6% within six months of production RAG deployment (LinkedIn)",
      "Enterprise RAG projects return an average of $3.70 for every $1 invested (industry ROI benchmark)",
      "Hallucination rates trend toward zero when responses are strictly grounded in retrieved context (peer-reviewed RAG evaluation studies)"
    ],
    "mechanism_ai_handles": [
      "Audit - Maps existing data sources, document formats, and query patterns against retrieval requirements",
      "Architecture Design - Selects chunking strategy, embedding model, and vector store configuration for the use case",
      "Guardrail Build - Defines grounding rules, citation requirements, and fallback behavior for out-of-scope queries",
      "Evaluation - Runs retrieval accuracy, faithfulness, and latency benchmarks against a golden test set before launch"
    ],
    "mechanism_you_handle": [
      "Approve the architecture and own the production deployment"
    ],
    "mechanism_summary": "The AI advisory system does the technical evaluation and blueprinting so the engineering team deploys a RAG pipeline that's already been stress-tested against failure modes.",
    "laymanSummary": "This system audits your data and requirements, then designs and pressure-tests the retrieval pipeline your AI feature will run on \u2014 so it answers from your real documents instead of making things up.",
    "detailedExplanation": "The advisory process starts with an inventory pass across the organization's document stores, wikis, tickets, and structured data, classifying content by format, update frequency, and sensitivity to determine appropriate chunking and access-control boundaries. Based on query complexity and latency requirements, the system recommends an embedding model and retrieval strategy \u2014 dense vector search, hybrid keyword-plus-vector, or knowledge-graph-augmented retrieval for content with strong relational structure, following the pattern that improved retrieval quality by over 77% in LinkedIn's production knowledge-graph RAG deployment. A guardrail layer is then specified: response grounding rules that require citations to retrieved source chunks, explicit uncertainty statements when the retrieved context doesn't support an answer, and access controls enforced at the point of retrieval rather than after generation. Before any production rollout, the proposed pipeline runs against a curated evaluation set measuring retrieval precision/recall, answer faithfulness, and end-to-end latency, with the results forming the basis of a go/no-go recommendation. Engineering owns the actual deployment and infrastructure scaling; the advisory system's output is the validated blueprint and evaluation harness, not the production system itself.",
    "watermarkType": "network",
    "proofCitation": {
      "company": "LinkedIn",
      "system": "Knowledge-Graph-Enhanced RAG (SIGIR 2024)",
      "date": "2024",
      "result": "77.6% improvement in Mean Reciprocal Rank and a 28.6% reduction in median customer service issue resolution time over six months in production",
      "source": "Retrieval-Augmented Generation with Knowledge Graphs for Customer Service Question Answering, arXiv:2404.17723",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_13",
    "short_name": "Support Copilot & Wiki AI",
    "full_name": "CUSTOMER SUPPORT COPILOT / WIKI ASSISTANT",
    "cluster_primary": "COMMERCIAL INTELLIGENCE",
    "cluster_secondary": null,
    "industry_primary": "FinTech",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Answers customer questions instantly, grounded in your actual documentation.",
    "node_type": "HUB",
    "metadata_watches": "Support ticket history \u00b7 Internal wiki & knowledge base \u00b7 Product documentation \u00b7 Live chat queries",
    "metadata_generates": "Grounded, cited answers \u00b7 Suggested agent macros \u00b7 Knowledge gap reports \u00b7 Escalation summaries",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Manual ticket search across scattered docs and past tickets",
    "metadata_returns": "LinkedIn: 28.6% faster median resolution time via RAG-based support \u00b7 DBS Bank: ~20% reduction in average service handling time from its AI service assistant",
    "problem_paragraph": "Support agents at fast-growing FinTech and SaaS companies waste critical minutes per ticket digging through outdated wikis, old Slack threads, and previous tickets to find the answer a customer needs right now. New hires take months to reach full ticket-handling speed because so much institutional knowledge lives in senior agents' heads rather than in a searchable system. Meanwhile customers wait, and CSAT erodes with every escalation that didn't need to happen.",
    "x": 1159,
    "y": 751,
    "slug": "customer-support-copilot-wiki-assistant",
    "proof_entries": [
      {
        "industry": "Digital Banking",
        "region": "APAC / Singapore",
        "year": "2024"
      },
      {
        "industry": "Professional Networking / SaaS",
        "region": "Global",
        "year": "2024"
      },
      {
        "industry": "FinTech Customer Operations",
        "region": "India / Global",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Median per-issue resolution time dropped 28.6% after deploying a RAG-based support assistant (LinkedIn, six-month production data)",
      "DBS Bank's AI-powered service assistant cut average handling time by roughly 20%",
      "Well-implemented RAG support systems deflect 40\u201350% of routine tickets from human agents",
      "CSAT improves by approximately 27% on AI-assisted interactions while remaining above 85% overall"
    ],
    "mechanism_ai_handles": [
      "Indexing - Continuously ingests tickets, wiki pages, and product docs into a searchable knowledge layer",
      "Retrieval - Pulls the most relevant, up-to-date sources for each incoming query, respecting access permissions",
      "Response Drafting - Generates a cited answer or macro suggestion grounded strictly in retrieved content",
      "Gap Detection - Flags recurring queries with no matching documentation for the knowledge team to fill"
    ],
    "mechanism_you_handle": [
      "Review flagged edge cases and approve escalations to a human agent"
    ],
    "mechanism_summary": "The AI handles first-line retrieval and drafting for every routine query so agents spend their time on the cases that actually need a human judgment call.",
    "laymanSummary": "This system finds the right answer in your company's own documentation and tickets and gives customers (or agents) a grounded response in seconds, instead of someone hunting through old tickets.",
    "detailedExplanation": "Incoming queries are parsed for intent and matched against a continuously updated vector index built from support tickets, wiki articles, and product documentation, with historical ticket data structured to preserve relationships between related issues rather than treated as flat text \u2014 the approach LinkedIn's support team used to cut resolution time by over a quarter. Retrieved passages are re-ranked for relevance and recency before being passed to a generation layer that is constrained to answer strictly from retrieved content, citing its sources and explicitly flagging when no sufficiently confident match exists rather than guessing. Responses route either directly to the customer for simple, high-confidence queries or as a suggested draft to a human agent for anything involving account-specific or sensitive information. A separate monitoring layer tracks queries that return low-confidence matches or trigger repeated escalations, surfacing these as documentation gaps so the knowledge base actually improves over time instead of degrading. Agents retain full override control on any AI-drafted response before it reaches a customer.",
    "watermarkType": "data",
    "proofCitation": {
      "company": "DBS Bank",
      "system": "AI-Powered CSO (Customer Service Officer) Assistant",
      "date": "2024",
      "result": "Reduced average service handling time by approximately 20% while contributing to a 17% increase in funds saved from scam attempts through related AI alerting",
      "source": "DBS Bank AI in Banking case study reporting",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_14",
    "short_name": "Churn Prediction Analytics",
    "full_name": "PRODUCT ANALYTICS AUTOMATION & CHURN PREDICTION",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Flags at-risk accounts weeks before they cancel, based on real usage signals.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Product usage events \u00b7 Billing & subscription data \u00b7 Support ticket sentiment \u00b7 CRM engagement history",
    "metadata_generates": "Churn risk scores \u00b7 At-risk account alerts \u00b7 Retention playbook triggers \u00b7 Cohort & feature-adoption dashboards",
    "metadata_type": "TRANSFORMS",
    "metadata_replaces_or_transforms": "Reactive, gut-feel account health checks by customer success managers",
    "metadata_returns": "Bain & Company: a 5-point retention gain can lift profits 25\u201395% \u00b7 Osano/Userpilot case study: 40% cut in delinquent churn and 25% fewer support chats",
    "problem_paragraph": "SaaS and IT product teams typically find out a customer is unhappy the day they submit a cancellation request, long after the moment they could have intervened has passed. Customer success managers are left triaging hundreds of accounts using login-frequency spreadsheets that show what happened last month, not what's happening now. Every point of unaddressed churn compounds silently against annual recurring revenue and next round's growth story.",
    "x": 1219,
    "y": 869,
    "slug": "product-analytics-automation-churn-prediction",
    "proof_entries": [
      {
        "industry": "B2B SaaS",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Legal Compliance SaaS",
        "region": "Global",
        "year": "2024"
      },
      {
        "industry": "Enterprise CRM",
        "region": "Global",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "A 5-percentage-point improvement in retention can lift profits by 25\u201395% (Bain & Company)",
      "Behavioral health-scoring cut delinquent churn by 40% and support tickets by 25% (Osano/Userpilot case study)",
      "Salesforce's churn model analyzes 300+ variables and lifted gross retention by 3 percentage points over 18 months",
      "AI-flagged at-risk accounts can be identified up to 47 days before cancellation on average, giving CS teams time to intervene"
    ],
    "mechanism_ai_handles": [
      "Signal Collection - Aggregates product usage, billing, support sentiment, and CRM data into one customer view",
      "Risk Scoring - Runs behavioral models that flag declining engagement and payment risk weeks in advance",
      "Segmentation - Groups at-risk accounts by churn driver so interventions match the actual cause",
      "Playbook Triggering - Automatically launches the right in-app nudge, email sequence, or CSM task per segment"
    ],
    "mechanism_you_handle": [
      "Prioritize high-value at-risk accounts for a personal outreach call"
    ],
    "mechanism_summary": "The AI does the constant behavioral monitoring and first-pass triage so customer success only spends time on the accounts and moments that actually move retention.",
    "laymanSummary": "This system watches how customers actually use your product and warns your team weeks before someone is likely to cancel, so you can step in while there's still time to save the account.",
    "detailedExplanation": "The pipeline continuously pulls behavioral data (login frequency, feature adoption depth, session patterns), financial data (plan tier, payment history, downgrade requests), and support data (ticket volume and sentiment) into a unified customer health model, refreshed daily or in real time depending on account tier. A gradient-boosted model \u2014 the algorithm family that consistently performs best in published churn-prediction benchmarks \u2014 scores each account's churn probability and, critically, surfaces which specific signals are driving that score, so the intervention can target the actual cause rather than a generic save offer. Accounts crossing risk thresholds are automatically segmented by driver (low adoption, support friction, budget pressure) and routed into the matching playbook: an in-app walkthrough for adoption gaps, a proactive support outreach for friction cases, or a CSM task for high-value accounts that need a human conversation. Model performance is continuously validated against actual outcomes \u2014 comparing predicted versus realized churn by cohort \u2014 so the scoring weights improve as more intervention data accumulates rather than staying static after initial training.",
    "watermarkType": "signal",
    "proofCitation": {
      "company": "Osano (via Userpilot)",
      "system": "AI-Assisted Churn & Engagement Analytics",
      "date": "2024",
      "result": "Cut delinquent churn by 40% and reduced support chat volume by 25% using behavior-triggered in-app engagement",
      "source": "Userpilot published customer case study",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_15",
    "short_name": "Dispatch & Route AI",
    "full_name": "DISPATCH & ROUTE OPTIMIZATION COPILOT",
    "cluster_primary": "LOGISTICS & DISTRIBUTION",
    "cluster_secondary": null,
    "industry_primary": "Logistics",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Replans delivery routes in real time as traffic and orders change.",
    "node_type": "HUB",
    "metadata_watches": "Live GPS & fleet telemetry \u00b7 Order & delivery addresses \u00b7 Traffic & weather data \u00b7 Driver availability",
    "metadata_generates": "Optimized delivery routes \u00b7 Real-time re-routing alerts \u00b7 Load & capacity plans \u00b7 Customer ETA updates",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual dispatcher route planning on whiteboards or spreadsheets",
    "metadata_returns": "Delhivery: AI-driven routing contributes to a 97% on-time delivery rate \u00b7 Shadowfax: dynamic routing cuts fuel costs 10\u201315% and delivery times 20\u201325%",
    "problem_paragraph": "Distribution and logistics dispatchers plan hundreds of daily routes by hand or with static software that can't react when a road closes or three new orders come in mid-shift. Every unplanned detour burns fuel, blows delivery windows, and forces a dispatcher to manually replan on the fly while calls keep coming in. At scale, this manual approach caps how many stops a fleet can realistically handle in a day.",
    "x": 1957,
    "y": 313,
    "slug": "dispatch-route-optimization-copilot",
    "proof_entries": [
      {
        "industry": "E-commerce Logistics",
        "region": "India",
        "year": "2025"
      },
      {
        "industry": "Last-Mile Delivery",
        "region": "India",
        "year": "2025"
      },
      {
        "industry": "Parcel & Freight",
        "region": "Global",
        "year": "2024"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Delhivery's AI-driven route optimization contributes to a 97% on-time delivery rate across its Indian network",
      "Dynamic routing reduces fuel expenditure by 10\u201315% and delivery times by 20\u201325% (Shadowfax operational data)",
      "UPS's ORION routing system saves roughly 10 million gallons of fuel annually across 125,000 daily vehicle routes",
      "India's logistics costs, still near 7.97% of GDP (DPIIT), represent a major addressable efficiency gap AI routing directly targets"
    ],
    "mechanism_ai_handles": [
      "Ingestion - Pulls live GPS telemetry, order addresses, traffic conditions, and driver availability",
      "Route Generation - Calculates optimal multi-stop routes accounting for time windows and vehicle capacity",
      "Dynamic Re-routing - Recalculates affected routes instantly when traffic, weather, or new orders disrupt the plan",
      "Customer Updates - Pushes live ETA changes to customers and dispatch dashboards automatically"
    ],
    "mechanism_you_handle": [
      "Approve exception routes and manage driver relationships on the ground"
    ],
    "mechanism_summary": "The AI handles the constant recalculation that a human dispatcher can't keep up with, so dispatch only steps in for genuine exceptions.",
    "laymanSummary": "This system builds and constantly rebuilds delivery routes as conditions change, so drivers avoid traffic and delays automatically instead of a dispatcher scrambling to replan by phone.",
    "detailedExplanation": "The system ingests live GPS telemetry from the fleet, pending order addresses with delivery time windows, real-time traffic and weather feeds, and current driver/vehicle availability into a routing engine that solves a continuously updated vehicle-routing problem rather than a one-time daily plan. Initial routes are generated to minimize total distance and time while respecting capacity constraints and delivery windows, following the same class of algorithmic approach used by large-scale systems like UPS's ORION, which saves an estimated 10 million gallons of fuel annually across 125,000 daily routes. As conditions change mid-shift \u2014 a road closure, a new rush order, a driver running behind \u2014 the engine recalculates only the affected routes rather than the entire fleet plan, pushing updated turn-by-turn directions to the driver's app and revised ETAs to the customer-facing tracking page simultaneously. Load-planning logic runs alongside routing to ensure vehicle capacity and stop sequencing minimize handling time at each drop. Dispatchers retain override control for exception cases \u2014 a VIP account, a driver-reported hazard \u2014 and spend the bulk of their day managing driver relationships and exceptions rather than manually sequencing every stop.",
    "watermarkType": "sensor",
    "proofCitation": {
      "company": "Delhivery",
      "system": "AI-Powered Route Optimization & Real-Time Tracking",
      "date": "2025",
      "result": "AI-driven route optimization and real-time tracking systems contribute to a 97% on-time delivery rate across Delhivery's national logistics network",
      "source": "Industry analysis of AI adoption in Indian supply chains",
      "isPlaceholder": true
    }
  },
  {
    "node_id": "NEW_16",
    "short_name": "HR Recruiter Copilot",
    "full_name": "HR RECRUITER COPILOT & CANDIDATE RANKING",
    "cluster_primary": "MANAGEMENT SYNTHESIS",
    "cluster_secondary": null,
    "industry_primary": "IT & SaaS",
    "industry_secondary": null,
    "priority": 8,
    "reality_sentence": "Screens and ranks every applicant instantly against real role requirements.",
    "node_type": "PERIPHERAL",
    "metadata_watches": "Inbound resumes & applications \u00b7 Job requisition requirements \u00b7 Candidate assessment results \u00b7 Internal talent database",
    "metadata_generates": "Ranked candidate shortlists \u00b7 Skills-match scorecards \u00b7 Interview scheduling requests \u00b7 Bias-audit reports",
    "metadata_type": "REPLACES",
    "metadata_replaces_or_transforms": "Manual resume screening and first-pass candidate shortlisting",
    "metadata_returns": "Eightfold AI: 75% faster time-to-shortlist for volume roles (2025) \u00b7 Amdocs: 20% reduction in time-to-hire for specialized skills after deployment",
    "problem_paragraph": "Fast-scaling enterprises can receive hundreds of applications per open role, and recruiters simply can't read every resume closely enough to find the strongest match before top candidates accept an offer elsewhere. Manual screening also means unconscious bias creeps in \u2014 recruiters default to familiar schools or keywords instead of actual skills. Every week a role stays open costs the business in lost productivity and mounting agency fees.",
    "x": 1854,
    "y": 626,
    "slug": "hr-recruiter-copilot-candidate-ranking",
    "proof_entries": [
      {
        "industry": "Telecommunications",
        "region": "India / Global",
        "year": "2025"
      },
      {
        "industry": "Enterprise Technology",
        "region": "Global",
        "year": "2025"
      },
      {
        "industry": "Industrial Manufacturing",
        "region": "Global",
        "year": "2025"
      }
    ],
    "proof_counter": 3,
    "outcomes": [
      "Eightfold AI's screening models deliver 75% faster time-to-shortlist for high-volume roles (2025 benchmark)",
      "Amdocs cut time-to-hire for specialized skills by 20% after deploying Eightfold's talent intelligence platform",
      "Early agentic interview deployments compress time-to-hire from an industry benchmark of 42 days to under a week",
      "Eaton saw a 30\u201340% increase in candidate velocity after implementing AI-driven talent matching"
    ],
    "mechanism_ai_handles": [
      "Parsing - Extracts structured skills, experience, and education data from every incoming resume",
      "Matching - Scores each candidate against the role's actual requirements, not just keyword overlap",
      "Ranking - Produces a shortlist ordered by fit, with score breakdowns recruiters can audit",
      "Bias Smoothing - Flags skewed sourcing patterns and surfaces overlooked qualified candidates from non-traditional backgrounds"
    ],
    "mechanism_you_handle": [
      "Interview the shortlisted candidates and make the final hiring call"
    ],
    "mechanism_summary": "The AI handles the volume screening so recruiters spend their limited hours only on the candidates worth a real conversation.",
    "laymanSummary": "This system reads every application, ranks candidates by actual fit to the role, and flags strong candidates a human screener might overlook \u2014 so recruiters spend their time interviewing, not sorting resumes.",
    "detailedExplanation": "Incoming applications are parsed to extract structured entities \u2014 skills, tenure, education, career trajectory \u2014 building a candidate profile that goes beyond keyword matching to semantic understanding of role-relevant experience. This profile is scored against a requirements model derived from the job description and, where available, calibrated against the traits of past successful hires in that role family. The output is a ranked shortlist with a transparent score breakdown by criterion, so recruiters can see why a candidate ranked where they did rather than trusting a black-box score. A parallel bias-smoothing layer checks sourcing and ranking patterns for skew \u2014 for instance, a recruiter's tendency to over-index on graduates from a handful of familiar schools \u2014 and actively surfaces qualified candidates from under-represented pipelines who might otherwise be filtered out by habit rather than merit. For high-volume roles, the system can extend to structured, consistent first-round screening interviews conducted asynchronously, standardizing what would otherwise be dozens of inconsistent phone screens. Recruiters and hiring managers retain full control over the interview and offer decision; the system's job ends at producing a fair, well-justified shortlist.",
    "watermarkType": "flow",
    "proofCitation": {
      "company": "Eightfold AI (deployed at Tata Communications)",
      "system": "Talent Intelligence Platform",
      "date": "2025",
      "result": "Delivers up to 75% faster time-to-shortlist for volume hiring roles, with partner deployments like Amdocs seeing a 20% reduction in time-to-hire for specialized skills",
      "source": "Eightfold AI published enterprise case studies",
      "isPlaceholder": true
    }
  }
];

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
