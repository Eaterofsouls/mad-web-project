import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './PledgeSection.css';

const PLEDGES = [
  {
    image: '/media/pledge-01.jpg',
    label: 'Measured.',
    title: 'No system without a measured outcome.',
    body: 'Every AI deployment is defined before it begins. We set a specific, quantifiable metric for success. If we cannot measure it, we do not build it.',
  },
  {
    image: '/media/pledge-02.jpg',
    label: 'Legible.',
    title: 'No AI your team cannot explain.',
    body: 'Every system we deploy must be explainable to the people who operate it. We do not deploy black boxes. Your team inherits full operational understanding.',
  },
  {
    image: '/media/pledge-03.jpg',
    label: 'Compounding.',
    title: 'No engagement that does not compound.',
    body: 'The first system creates data for the second. The second refines the third. We build for the trajectory, not the transaction.',
  },
];

export function PledgeSection(props: { principles?: any[] }) {
  const sectionRef = useScrollReveal<HTMLDivElement>('.pledge-row', { threshold: 0.15 });

  return (
    <section className="pledge-section" ref={sectionRef}>
      <div className="pledge-rows-container">
        {PLEDGES.map((pledge, idx) => (
          <PledgeRow key={idx} pledge={pledge} delay={idx * 150} />
        ))}
      </div>
    </section>
  );
}

function PledgeRow({ pledge, delay }: { pledge: typeof PLEDGES[0], delay: number }) {
  return (
    <div className="pledge-row" data-delay={delay}>
      <img 
        src={pledge.image} 
        alt="" 
        className="pledge-image" 
        loading="lazy"
        width="160"
        height="160"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
        }} 
      />
      <div className="pledge-image-placeholder hidden" aria-hidden="true">
        <div className={`pledge-mark pledge-mark--${delay / 150 + 1}`} />
      </div>
      <div className="pledge-title-block">
        <div className="pledge-label">{pledge.label}</div>
        <h3 className="pledge-title">{pledge.title}</h3>
      </div>
      <div className="pledge-body">
        {pledge.body}
      </div>
    </div>
  );
}
