import type { WorkflowNode } from '../../data/types';
import './NodeTooltipCard.css';

interface Props {
  node: WorkflowNode | null;
}

export function NodeTooltipCard({ node }: Props) {
  return (
    <div className={`node-tooltip-card ${node ? 'visible' : ''}`} role="status" aria-live="polite">
      {node && (
        <>
          <div className="ntc-header">
            <span className="ntc-cluster">{node.cluster_primary}</span>
            <span className="ntc-sep" aria-hidden="true" />
            <span className="ntc-id">{node.node_id}</span>
          </div>
          <div className="ntc-name">{node.full_name.toUpperCase()}</div>
          <div className="ntc-rule" aria-hidden="true" />
          <p className="ntc-summary">{node.reality_sentence}</p>
          <div className="ntc-industries">
            <span className="ntc-meta-label">INDUSTRY</span>
            <span className="ntc-meta-value">
              {node.industry_primary}
              {node.industry_secondary ? ` · ${node.industry_secondary}` : ''}
            </span>
          </div>
          <div className="ntc-footer">
            <span className="ntc-cta">CLICK TO OPEN SYSTEM RECORD →</span>
          </div>
        </>
      )}
    </div>
  );
}
