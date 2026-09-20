import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TestimonyAvatar } from './TestimonyAvatar';
import { TESTIMONIES } from './testimonies';
import './TestimonySection.css';

export function TestimonySection() {
  const sectionRef = useScrollReveal<HTMLDivElement>('.testimony-row', { threshold: 0.15 });

  return (
    <section className="testimony-section" ref={sectionRef}>
      {TESTIMONIES.map((t, idx) => (
        <div key={t.id} className="testimony-row" data-delay={idx * 150}>
          <div className="testimony-meta">
            <TestimonyAvatar />
            <div className="testimony-meta-field">
              <b>{t.systemDeployed}</b>
              System Deployed
            </div>
            <div className="testimony-meta-field">
              <b>{t.industry}</b>
              Industry
            </div>
            <div className="testimony-meta-field">
              <b>{t.geography}</b>
              Geography
            </div>
          </div>

          <div className="testimony-body">
            <p className="testimony-quote">"{t.quote}"</p>
            <div className="testimony-attribution">{t.name}</div>
            <div className="testimony-attribution-sub">
              {t.role} · {t.company}
            </div>
          </div>

          <a
            href={t.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="testimony-preview"
            aria-label={`Visit ${t.company}`}
          >
            <div className="testimony-preview-chrome">
              <span /><span /><span />
            </div>
            <div className="testimony-preview-shot">
              <iframe
                src={t.companyUrl}
                title={`${t.company} website preview`}
                className="testimony-iframe"
                scrolling="no"
                tabIndex={-1}
                aria-hidden="true"
              />
              <img
                src={`/media/previews/${t.id}.jpg`}
                alt={`${t.company} website preview`}
                loading="lazy"
                className="testimony-preview-img"
              />
            </div>
            <div className="testimony-preview-label">Visit site ↗</div>
          </a>
        </div>
      ))}
    </section>
  );
}
