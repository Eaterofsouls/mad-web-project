import { useScrollReveal } from '../../hooks/useScrollReveal';
import './MethodSection.css';

export type Step = {
  index: string;
  title: string;
  timeframe: string;
  body: string;
};

type Props = {
  steps: Step[];
};

export function MethodSection({ steps }: Props) {
  const sectionRef = useScrollReveal<HTMLDivElement>('.method-row', { threshold: 0.15 });

  return (
    <section className="method-section" ref={sectionRef}>
      {steps.map((step, idx) => (
        <div key={step.index} className="method-row" data-delay={idx * 100}>
          <div className="method-index">{step.index}</div>
          <div className="method-title">
            {step.title}
            <span className="method-timeframe">{step.timeframe}</span>
          </div>
          <div className="method-body">{step.body}</div>
        </div>
      ))}
    </section>
  );
}
