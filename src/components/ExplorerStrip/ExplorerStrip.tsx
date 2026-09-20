import { useEffect, useRef } from 'react';
import './ExplorerStrip.css';

export type StripCard = {
  id: string;
  title: string;
  cluster: string;
  reality: string;
};

type Props = {
  cards?: StripCard[];
};

export function ExplorerStrip({ cards = [] }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="explorer-strip-root">
      <div className="strip-header">
        <div className="strip-header-left">
          <span className="strip-label">THE SYSTEM MAP</span>
          <h2 className="strip-headline">
            84 AI systems.<br/>Already designed.
          </h2>
        </div>
        <div className="strip-header-right">
          <p className="strip-header-body">
            Each system maps to a real operational function inside a real business.
            You don't need to know which ones belong in yours before you begin.
            That's what we find out. But you can start here.
          </p>
          <a href="/explorer" className="strip-header-link">Open the full map →</a>
        </div>
      </div>
      <div className="strip-scroll-wrapper" ref={scrollRef}>
        <div className="strip-track">
          {cards.map((card, idx) => (
            <a href="/explorer" key={idx} className="strip-card">
              <span className="sc-id">{card.id}</span>
              <span className="sc-cluster">{card.cluster}</span>
              <h4 className="sc-title">{card.title}</h4>
              <p className="sc-reality">{card.reality}</p>
            </a>
          ))}
          <a href="/explorer" className="strip-see-all">
            <span className="see-all-count">84 systems</span>
            <span className="see-all-cta">Explore the full map →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
