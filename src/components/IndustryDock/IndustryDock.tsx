import './IndustryDock.css';

interface IndustryDockProps {
  activeIndustry: string;
  industries: Array<{ slug: string; name: string; nodeCount: number }>;
  onIndustrySelect: (slug: string) => void;
}

export default function IndustryDock({ activeIndustry, industries, onIndustrySelect }: IndustryDockProps) {
  return (
    <div className="industry-dock-container">
      <div className="industry-dock">
        {industries.map(ind => {
          const isActive = activeIndustry === ind.slug;
          return (
            <button
              key={ind.slug}
              className={`dock-btn ${isActive ? 'active' : ''}`}
              onClick={() => onIndustrySelect(ind.slug)}
              aria-pressed={isActive}
            >
              <span className="dock-name">{ind.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
