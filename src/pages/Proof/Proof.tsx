import { Navbar } from '../../components/Navbar/Navbar';
import { nodes } from '../../data/nodes';
import { CLUSTERS } from '../../data/clusters';
import { Link } from 'react-router-dom';
import './Proof.css';

export function ProofPage() {
  return (
    <div className="proof-page">
      <Navbar />

      <div className="proof-container">
        <div className="proof-header">
          <div className="proof-label">Evidence</div>
          <h1 className="proof-title">Deployment Record</h1>
          <p className="proof-sub">
            Anonymized deployment evidence, organized by operational cluster. Every entry represents a live system running in a real business.
          </p>
          <p className="proof-disclaimer">
            All client names are anonymized. No testimonials. No named case studies at V1. Evidence is operational deployment records only.
          </p>
        </div>

        <div className="proof-clusters">
          {CLUSTERS.map((cluster) => {
            const clusterNodes = nodes.filter(
              (n) => n.cluster_primary === cluster.id
            );
            return (
              <div key={cluster.id} className="proof-cluster-section">
                <div className="proof-cluster-header">
                  <span className="proof-cluster-name">{cluster.label}</span>
                  <span className="proof-cluster-count">{clusterNodes.length} systems</span>
                </div>
                <div className="proof-entries">
                  {clusterNodes
                    .sort((a, b) => b.priority - a.priority)
                    .map((node) => (
                      <div key={node.node_id} className="proof-node-entry">
                        <div className="proof-node-header">
                          <span className="proof-node-id">{node.node_id}</span>
                          <Link
                            to={`/explorer/${node.slug}`}
                            className="proof-node-name"
                          >
                            {node.full_name}
                          </Link>
                        </div>
                        <div className="proof-deployments">
                          {node.proof_entries.map((entry, i) => (
                            <span key={i} className="proof-deployment-tag">
                              {entry.industry} · {entry.region} · {entry.year}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="proof-cta">
          <p className="proof-cta-text">
            These systems were identified for businesses that described their operational problems. We did not pitch a product. We mapped a gap.
          </p>
          <Link to="/contact" className="proof-cta-btn" id="proof-begin-assessment">
            BEGIN ASSESSMENT
          </Link>
        </div>
      </div>
    </div>
  );
}
