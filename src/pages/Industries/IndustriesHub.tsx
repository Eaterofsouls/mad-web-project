import { Link, useNavigate } from 'react-router-dom';
import { nodes } from '../../data/nodes';
import './IndustriesHub.css';
import IndustryDock from '../../components/IndustryDock/IndustryDock';

export const ASYMMETRIC_INDUSTRIES = {
  row1: [
    { slug: 'manufacturing', name: 'Manufacturing', caption: 'Where cycle time, yield rate, and OEE define survival. AI begins with the process, not the org chart.' },
    { slug: 'pharma', name: 'Pharma', caption: 'Batch compliance and shelf-life pressure are unforgiving. The systems that help know the difference.' },
    { slug: 'fmcg', name: 'FMCG', caption: 'Demand shifts in 48 hours. The distribution network doesn\'t. The gap is where intelligence lives.' }
  ],
  row2: [
    { slug: 'distribution', name: 'Distribution', caption: 'The margin lives in the last mile. Route efficiency, delivery accuracy, and fleet utilization are the numbers.' },
    { slug: 'logistics', name: 'Logistics', caption: 'Vehicles, routes, and warehouse throughput are the core. Each one has a system built for it.' },
    { slug: 'packaging', name: 'Packaging', caption: 'Material waste and changeover time. Two numbers. Multiple systems address each one.' }
  ],
  row3: [
    { slug: 'engineering', name: 'Engineering', caption: 'Project timelines and resource allocation don\'t fail suddenly. They drift. The systems that watch them don\'t drift.' },
    { slug: 'chemicals', name: 'Chemicals', caption: 'Process deviation in chemical production is expensive and dangerous. The monitoring never stops.' }
  ],
  row4: [
    { slug: 'it-saas', name: 'IT & SaaS', caption: 'Scale breaks internal knowledge. Onboarding, QA, and migrations are the bottlenecks.' },
    { slug: 'agencies', name: 'Agencies', caption: 'Margin lives in billable hours. Client reporting and asset resizing consume them.' },
    { slug: 'fintech', name: 'FinTech', caption: 'Reconciliation lags and messy KYC documents delay growth and obscure risk.' },
    { slug: 'professional-services', name: 'Professional Services', caption: 'Invoice processing and AP data entry trap your team in manual execution.' }
  ]
};

const toSlug = (s: string) => s.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

export function getNodeCount(slug: string) {
  return nodes.filter(n => 
    !n.isProspectEngine &&
    (toSlug(n.industry_primary) === slug || 
     (n.industry_secondary ? toSlug(n.industry_secondary) === slug : false))
  ).length;
}

export function IndustriesHub() {
  const navigate = useNavigate();

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
  const renderCard = (ind: { slug: string; name: string; caption: string }, className: string = '') => {
    const count = getNodeCount(ind.slug);
    return (
      <Link
        key={ind.slug}
        to={`/industries/${ind.slug}`}
        className={`industry-card ${className}`}
        id={`industries-card-${ind.slug}`}
      >
        <div className="card-top">
          <div className="industry-card-name">{ind.name}</div>
          <div className="industry-card-count">{count} SYSTEMS</div>
        </div>
        <p className="industry-card-caption">{ind.caption}</p>
      </Link>
    );
  };

  return (
    <div className="industries-hub">

      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-label">Industries</div>
          <h1 className="industries-title">Industries We Serve</h1>
          <p className="industries-sub">
            AI implementation guidance for operational businesses in Gujarat. Each system addresses a specific, measurable problem.
          </p>
        </div>

        <div className="industries-asymmetric-grid">
          {/* Row 1 (Featured Row) */}
          <div className="industries-row-1">
            {renderCard(ASYMMETRIC_INDUSTRIES.row1[0], 'feature-card')}
            <div className="industry-card-stack">
              {renderCard(ASYMMETRIC_INDUSTRIES.row1[1])}
              {renderCard(ASYMMETRIC_INDUSTRIES.row1[2])}
            </div>
          </div>

          {/* Row 2 (Secondary Row) */}
          <div className="industries-row-grid">
            {ASYMMETRIC_INDUSTRIES.row2.map(ind => renderCard(ind))}
          </div>

          {/* Row 3 (Tertiary Row) */}
          <div className="industries-row-grid">
            {ASYMMETRIC_INDUSTRIES.row3.map(ind => renderCard(ind))}
          </div>

          {/* Row 4 (New Industries Row) */}
          <div className="industries-row-grid">
            {ASYMMETRIC_INDUSTRIES.row4.map(ind => renderCard(ind))}
          </div>
        </div>
      </div>

      <IndustryDock
        activeIndustry=""
        industries={dockIndustries}
        onIndustrySelect={(slug) => navigate(`/industries/${slug}`)}
      />
    </div>
  );
}

