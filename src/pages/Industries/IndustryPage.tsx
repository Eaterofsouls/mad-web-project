import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { Signal } from '../../components/Signal/Signal';
import { nodes } from '../../data/nodes';
import type { WorkflowNode } from '../../data/types';

import IndustryDock from '../../components/IndustryDock/IndustryDock';
import { ASYMMETRIC_INDUSTRIES, getNodeCount } from './IndustriesHub';
import './IndustryPage.css';

// Pain statements per industry (from consolidation doc Prompt 27)
const INDUSTRY_DATA: Record<string, {
  title: string;
  pain: string;
  realityStatements: string[];
}> = {
  manufacturing: {
    title: 'Manufacturing',
    pain: 'Production delays cost you more than they should. Machine failures are reactive. Inventory is always slightly wrong.',
    realityStatements: [
      'Your production manager learns about the delay after it becomes expensive.',
      'The machine breaks on Friday. The parts arrive on Tuesday. Production waits.',
      'Your store is full of material you don\'t need and out of what you do.',
      'The batch ships defective. Your customer finds it before your inspector did.',
    ],
  },
  pharma: {
    title: 'Pharma',
    pain: 'BMR errors risk audits. Batch records are manual. Regulatory submissions are calendar-tracked in Excel.',
    realityStatements: [
      'One BMR error and the FDA audit observation shuts your export market for a year.',
      'The analyst transcribed the HPLC result incorrectly. The error reaches batch release.',
      'Your registration in that market lapsed. No one noticed until the order was rejected.',
      'Product expires in the warehouse because no one tracked it until the write-off was due.',
    ],
  },
  fmcg: {
    title: 'FMCG',
    pain: 'Festival stockouts. Slow SKUs crowd the warehouse. Distributor reconciliation takes weeks.',
    realityStatements: [
      'Your fastest SKU is out of stock at Diwali. Your slowest one fills the warehouse.',
      'Scheme reconciliation took your finance team eleven days. Three distributors still dispute the number.',
      'The misprinted label reached the retailer. The return came back three weeks later.',
      'You see sales data, production data, and finance data separately. You never see them together.',
    ],
  },
  distribution: {
    title: 'Distribution',
    pain: 'Slow-paying accounts aren\'t caught early. Principal reconciliation is disputed. Cash crunch arrives without warning.',
    realityStatements: [
      'Your largest account has been slow-paying for four months. Your collection team called twice.',
      'Across fifty brands, you cannot say which SKUs are dead stock today.',
      'Your finance team spent two weeks on principal reconciliation. They are still disputing two claims.',
      'The cash crunch arrived on a Friday. You saw it coming on a Thursday.',
    ],
  },
  logistics: {
    title: 'Logistics',
    pain: 'Trucks leave half-loaded. Empty return miles are pure cost. Checkpoint delays come from document mismatches.',
    realityStatements: [
      'Your truck broke down at Bhuj. The port shipment missed the vessel.',
      'Your truck left half-loaded. Your driver took the longer route. Nobody planned either.',
      'The truck returns empty from Mundra every time. That empty run is pure cost.',
      'The vehicle was detained at the checkpoint. The e-way bill figure didn\'t match the invoice.',
    ],
  },
  packaging: {
    title: 'Packaging',
    pain: 'Color-change make-ready wastes hours. Artwork version mismatches cause reprints. Ink waste is invisible until month end.',
    realityStatements: [
      'The color-change sequence was wrong. Three hours of make-ready time disappeared before the shift started.',
      'Production ran version 3 of the artwork. The customer had approved version 5 last week.',
      'The registration error ran for four thousand labels before the operator noticed the misprint.',
      'Your three largest customers pay in ninety days. Your suppliers expect payment in thirty.',
    ],
  },
  engineering: {
    title: 'Engineering',
    pain: 'OEM delivery commitments break when scheduling is manual. Job profitability is a month-end calculation.',
    realityStatements: [
      'Your machines run all day. Actual productive time is forty percent less than you believe.',
      'The loudest customer\'s order jumped the queue. Three other committed deliveries missed their date.',
      'The CNC spindle failed. Six open customer orders are now behind schedule simultaneously.',
      'You finished the job. You don\'t know if you made money on it until month end.',
    ],
  },
  chemicals: {
    title: 'Chemicals',
    pain: 'Yield deviations are investigated after the batch. GPCB submissions run late. Reactor failures are unscheduled.',
    realityStatements: [
      'This batch yielded four points below standard. The last six also did. Nobody investigated why.',
      'The sensor crossed the alarm threshold. By then, the leak had been building for six hours.',
      'The GPCB submission was two days late. The show-cause notice arrived before the explanation did.',
      'The agitator failed mid-batch. The entire reactor contents went off-spec.',
    ],
  },
  export: {
    title: 'Export',
    pain: 'LC discrepancies delay payment by weeks. RoDTEP claims sit uncollected. Freight costs aren\'t benchmarked.',
    realityStatements: [
      'Your LC has a discrepancy. Payment is delayed twenty days. The bank charges are yours.',
      'Every third LC you submit comes back with a discrepancy your team missed.',
      'Your RoDTEP claim sits uncollected. Your CA says you\'ve missed ₹30 lakh this year.',
      'Your freight cost went up fifteen percent. You accepted the rate because you had no comparison.',
    ],
  },
  'it-saas': {
    title: 'IT & SaaS',
    pain: 'Scale breaks internal knowledge. Onboarding takes weeks, QA scripts break constantly, and cloud migrations stall on undocumented dependencies.',
    realityStatements: [
      'Your senior engineers spend their day answering the same Confluence questions in Slack.',
      'QA teams write test scripts that break the moment the UI changes.',
      'Cloud migrations stall for weeks because nobody actually knows all the legacy dependencies.',
      'KYC documents take days to verify because off-the-shelf OCR chokes on messy formats.'
    ],
  },
  'agencies': {
    title: 'Agencies',
    pain: 'Your margin is trapped in unbillable execution. Reporting, creative resizing, and social scheduling consume the hours the client paid for strategy.',
    realityStatements: [
      'Your account team spends three days a month copy-pasting numbers into PowerPoint.',
      'A designer spends a week resizing one approved hero image into forty variants.',
      'Your CRM is full of leads that your reps don\'t have time to work.',
      'Social calendars are filled based on what\'s easy to draft, not what the data says works.'
    ],
  },
  'fintech': {
    title: 'FinTech',
    pain: 'Risk reporting is reactive, and financial closes are manual. By the time the board deck is ready, the numbers have moved.',
    realityStatements: [
      'Your finance team spends the first two weeks of every month manually reconciling ledgers.',
      'A transposed figure in a risk exposure report triggers a regulatory red flag.',
      'Your customer support team is drowning in repetitive tier-1 queries.',
      'KYC and onboarding queues are measured in days instead of minutes.'
    ],
  },
  'professional-services': {
    title: 'Professional Services',
    pain: 'Back-office administrative drag limits your growth. Accounts payable and invoicing consume hours of manual entry.',
    realityStatements: [
      'Your AP team spends most of its time doing three-way matching and chasing approvals.',
      'Late payments strain vendor relationships and trigger penalty fees.',
      'Your finance team closes the month late because data entry wasn\'t finished.',
      'Strategic procurement decisions are delayed because the data is trapped in PDFs.'
    ],
  },
};

const toSlug = (s: string) => s.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

export function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

  const dockIndustries = [
    ...ASYMMETRIC_INDUSTRIES.row1,
    ...ASYMMETRIC_INDUSTRIES.row2,
    ...ASYMMETRIC_INDUSTRIES.row3,
    ...ASYMMETRIC_INDUSTRIES.row4
  ].map(ind => ({
    slug: ind.slug,
    name: ind.name,
    nodeCount: getNodeCount(ind.slug)
  }));

  const industry = INDUSTRY_DATA[slug || ''];
  if (!industry) {
    return (
      <div className="industry-not-found">
        Industry not found.
      </div>
    );
  }

  // Get nodes for this industry (primary) — exclude universal from top, include FP on FMCG
  const industryNodes = nodes
    .filter((n) => {
      const matchesPrimary = toSlug(n.industry_primary) === slug;
      return matchesPrimary && n.node_type !== 'UNIVERSAL';
    })
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 12);

  const handleNodeClick = useCallback((node: WorkflowNode) => {
    setSelectedNode(node);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="industry-page">

      <div className="industry-container">
        {/* Reality strip */}
        <div className="industry-reality-strip">
          {industry.realityStatements.map((s, i) => (
            <p key={i} className="industry-reality-sentence">{s}</p>
          ))}
        </div>

        {/* Header */}
        <div className="industry-header">
          <Link to="/industries" className="industry-breadcrumb">← Industries</Link>
          <h1 className="industry-title">{industry.title}</h1>
          <p className="industry-pain">{industry.pain}</p>
        </div>

        {/* Node grid */}
        <div className="industry-grid-label">AI Systems for {industry.title}</div>
        <div className="industry-node-grid">
          {industryNodes.map((node) => (
            <button
              key={node.node_id}
              className="industry-node-card"
              onClick={() => handleNodeClick(node)}
              id={`industry-node-${node.node_id.toLowerCase()}`}
            >
              <div className="node-card-id">{node.node_id}</div>
              <div className="node-card-name">{node.full_name}</div>
              <div className="node-card-cluster">{node.cluster_primary}</div>
              <div className="node-card-reality">{node.reality_sentence}</div>
            </button>
          ))}
        </div>

        {/* Closing line */}
        <p className="industry-closing">
          ...and systems that apply to every business, including yours{' '}
          <Link to={`/explorer?industry=${slug}`} className="industry-explorer-link">
            →
          </Link>
        </p>

        {/* CTAs */}
        <div className="industry-ctas">
          <Link
            to={`/explorer?industry=${slug}`}
            className="industry-cta-secondary"
            id={`industry-see-all-${slug}`}
          >
            SEE ALL {industry.title.toUpperCase()} SYSTEMS →
          </Link>
          <Link
            to="/contact"
            className="industry-cta-primary"
            id={`industry-begin-assessment-${slug}`}
          >
            BEGIN ASSESSMENT
          </Link>
        </div>
      </div>

      {/* Signal panel */}
      <Signal node={selectedNode} onClose={handleClose} />

      <IndustryDock
        activeIndustry={slug || ''}
        industries={dockIndustries}
        onIndustrySelect={(newSlug) => navigate(`/industries/${newSlug}`)}
      />
    </div>
  );
}

