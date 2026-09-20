import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WordReveal.css';

const COLUMNS = [
  {
    label: "SEE.",
    body: "Most businesses are blind to where AI creates value. We map every opportunity before any tool is selected."
  },
  {
    label: "BUILD.",
    body: "Every system we deploy is purpose-built for one operational reality. Not templated. Not generic."
  },
  {
    label: "COMPOUND.",
    body: "Integrated AI systems learn from each other. The tenth system is more intelligent than the first."
  }
];

export function WordReveal() {
  const sectionRef = useScrollReveal<HTMLDivElement>('.wr-col', { threshold: 0.2 });

  return (
    <section className="word-reveal-section" ref={sectionRef}>
      <div className="wr-grid">
        {COLUMNS.map((col, i) => (
          <div key={i} className="wr-col" data-delay="0">
            <h2 className="wr-label">{col.label}</h2>
            <p className="wr-body">{col.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WordReveal;
