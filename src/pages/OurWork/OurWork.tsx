import { Suspense, lazy, useEffect } from 'react';
import { EditorialHeader } from '../../components/EditorialHeader/EditorialHeader';
import { MethodSection } from '../../components/MethodSection/MethodSection';
import { ScrollSentence } from '../../components/ScrollSentence/ScrollSentence';
import { ClosingCTA } from '../../components/ClosingCTA/ClosingCTA';
import { TestimonySection } from '../../components/TestimonySection/TestimonySection';
import './OurWork.css';

const PledgeSection = lazy(() =>
  import('../../components/PledgeSection/PledgeSection').then(m => ({ default: m.PledgeSection }))
);

const aboutRows = [
  {
    index: '01',
    title: 'Who we are.',
    timeframe: 'MAD',
    body: 'A small, deliberate team of AI systems architects and operational designers. We are not a software house. We are not a consultancy. We identify where intelligence creates measurable impact inside a specific business, then we build exactly that system — nothing broader, nothing adjacent.',
  },
  {
    index: '02',
    title: 'How we work.',
    timeframe: 'The Method',
    body: 'Every engagement begins with an audit, not a pitch. We map your workflows, your data, and your decision points before any system is designed. The architecture we propose is specific to what we found — not adapted from a template. You review the design before any code is written.',
  },
  {
    index: '03',
    title: 'What we guarantee.',
    timeframe: 'Our Commitment',
    body: 'Every system we build is benchmarked from day one against a metric we agree on before we start. If we cannot define a measurable outcome, we tell you that upfront and we do not proceed. Accountability is not a clause in our contract — it is the condition under which we take on work.',
  },
  {
    index: '04',
    title: 'What we never do.',
    timeframe: 'The Limits',
    body: 'We do not deploy systems your team cannot understand or maintain. We do not build for scale before proving value. We do not take on engagements where the primary goal is to appear modern. We do not optimize for speed when accuracy is what your business actually needs.',
  },
];

export function OurWorkPage() {
  // Set body background to match the light zone entry — mirrors Home.tsx pattern.
  // Without this, navigating from a dark page leaves body background dark,
  // causing a black flash before the component's own backgrounds paint.
  useEffect(() => {
    document.body.style.background = 'var(--gallery, #faf9f7)';
    return () => { document.body.style.background = ''; };
  }, []);

  return (
    <main className="our-work-main" style={{ background: 'var(--gallery, #faf9f7)' }}>

      {/* ACT 1 — LIGHT ZONE: Testimonials */}
      {/* prospect-white-zone class is required by Navbar's scroll-theme logic —
          it marks the bottom boundary of the light zone so navState transitions
          to light-scrolled cleanly and never fires the 5x-viewport fallback. */}
      <div className="our-work-light-zone prospect-white-zone">
        <EditorialHeader
          label="Proof of Work."
          body="The systems are deployed. The results are measured. The clients are still running them."
          theme="light"
          topPadding
        />
        <TestimonySection />
      </div>

      {/* VIBE SHIFT: Light → Dark */}
      <div className="eclipse-container">
        <ScrollSentence
          phrases={['MEASURED.', 'LEGIBLE.', 'COMPOUNDING.']}
          startTheme="light"
          endTheme="dark"
        />

        {/* ACT 2 — DARK ZONE: About + Principles */}
        <div className="dark-zone our-work-dark-zone">
          <EditorialHeader
            label="Who builds this."
            body="A focused team. A deliberate method. No ambiguity about what we do and what we do not."
            theme="dark"
            topPadding
          />
          <MethodSection steps={aboutRows} />

          <EditorialHeader
            label="Our Pledges."
            body="Three commitments that govern every system we build."
            theme="dark"
            topPadding
          />
          <Suspense fallback={<div style={{ height: '200px' }} />}>
            <PledgeSection />
          </Suspense>

          <ClosingCTA />
        </div>
      </div>

    </main>
  );
}
