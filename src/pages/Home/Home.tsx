import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LoadingScreen } from '../../components/LoadingScreen/LoadingScreen';
import HeroBlock from '../../components/HeroBlock/HeroBlock';
import { WordReveal } from '../../components/WordReveal/WordReveal';
import { EditorialHeader } from '../../components/EditorialHeader/EditorialHeader';
import { MethodSection } from '../../components/MethodSection/MethodSection';
import { ExplorerStrip } from '../../components/ExplorerStrip/ExplorerStrip';
import { ClosingCTA } from '../../components/ClosingCTA/ClosingCTA';
import { ScrollProgress } from '../../components/ScrollProgress/ScrollProgress';
import type { StripCard } from '../../components/ExplorerStrip/ExplorerStrip';
import { MorphWords } from '../../components/MorphWords/MorphWords';
import { ScrollSentence } from '../../components/ScrollSentence/ScrollSentence';
import './Home.css';

const ProspectTeaser = lazy(() => import('../../components/ProspectTeaser/ProspectTeaser').then(m => ({ default: m.ProspectTeaser })));
const PledgeSection = lazy(() => import('../../components/PledgeSection/PledgeSection').then(m => ({ default: m.PledgeSection })));

const methodSteps = [
  {
    index: "01",
    title: "Business Intelligence Audit",
    timeframe: "2–3 weeks",
    body: "We map every workflow, data flow, and decision point in your operation. No assumptions. No industry templates. The output is a precise document: where AI creates measurable value in your specific business, and where it would be waste."
  },
  {
    index: "02",
    title: "Systems Architecture",
    timeframe: "1–2 weeks",
    body: "We design the specific systems your audit identifies as high-value. Each system is scoped to your actual data, your actual team, and your actual constraints — not adapted from a library. You review the design before any code is written."
  },
  {
    index: "03",
    title: "Build and Integration",
    timeframe: "4–10 weeks",
    body: "We build and connect the systems into your existing processes without disrupting them. Your team does not learn new software. The systems learn your team's patterns. Everything integrates with your existing tools and data sources."
  },
  {
    index: "04",
    title: "Measurement and Maturity",
    timeframe: "Ongoing",
    body: "Every system is benchmarked from day one. As your data accumulates, accuracy improves. Decision quality improves. This is where compounding begins — each additional month of operation makes the system more precise and more essential to how your business runs."
  },
  {
    index: "05",
    title: "Expansion",
    timeframe: "Ongoing",
    body: "As early systems mature, new layers are designed and added. Your operation becomes AI-native — not through a single transformation event, but incrementally and permanently. New capability is added only when the previous layer is proven and stable."
  }
];

const stripCards: StripCard[] = [
  {
    id: "REV · 01",
    cluster: "SALES INTELLIGENCE",
    title: "Prospect Intelligence Engine",
    reality: "Most B2B businesses lose 60% of inbound leads before a human responds. This system closes that gap in seconds, enriching and qualifying leads in real time."
  },
  {
    id: "FIN · 04",
    cluster: "FINANCIAL FORECASTING",
    title: "Cost & Margin Automation",
    reality: "You make decisions on last month's numbers because the P&L takes 20 days to close. We build a live view of profitability per client and per product."
  },
  {
    id: "OPS · 02",
    cluster: "INVENTORY OPTIMISATION",
    title: "Smart Reorder Engine",
    reality: "Your fastest-moving item is out of stock. The slow-moving one crowds the shelf. We map live stock levels against demand forecasts to trigger exact reorders."
  },
  {
    id: "SRV · 01",
    cluster: "CUSTOMER SERVICE",
    title: "Inbound Routing AI",
    reality: "Your team spends half the day forwarding emails to the right department. This system reads intent, extracts urgency, and routes the ticket instantly."
  },
  {
    id: "DOC · 03",
    cluster: "DOCUMENT PROCESSING",
    title: "Invoice Reconciliation",
    reality: "Accounts payable manually checks PDF invoices against POs. This system extracts line items, validates amounts, and flags discrepancies without human data entry."
  },
  {
    id: "HR · 02",
    cluster: "TEAM PRODUCTIVITY",
    title: "Workflow Bottleneck Detection",
    reality: "Projects stall because one approval is sitting in an inbox. This monitors tool activity, flags stalled processes, and auto-nudges blockers before delays compound."
  },
  {
    id: "DAT · 01",
    cluster: "DATA QUALITY",
    title: "Master Data Sanitisation",
    reality: "Your CRM has five variations of the same client name. This engine deduplicates records, standardizes formats, and continuously cross-references against public registries."
  },
  {
    id: "COM · 02",
    cluster: "COMMUNICATION AUTOMATION",
    title: "Client Update Engine",
    reality: "Your team answers the same status request fifty times a day. This hooks into your operational database and proactively sends WhatsApp updates at key milestones."
  }
];

export function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(
    () => sessionStorage.getItem('mad_visited') !== null
  );
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const el = document.querySelector('.eclipse-container') as HTMLElement;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (window.innerHeight * 1.5)));
      // 0 = white, 0.4 = dusk, 1 = canvas
      if (progress < 0.4) {
        const t = progress / 0.4;
        el.style.background = `color-mix(in srgb, var(--eclipse-dusk, #1f1f26) ${t * 100}%, var(--gallery, #faf9f7))`;
      } else {
        const t = (progress - 0.4) / 0.6;
        el.style.background = `color-mix(in srgb, var(--canvas, #0a0a0f) ${t * 100}%, var(--eclipse-dusk, #1f1f26))`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.background = 'var(--gallery, #faf9f7)';
    return () => { document.body.style.background = ''; };
  }, []);

  const [videoReady, setVideoReady] = useState(false);
  const [videoPlay, setVideoPlay] = useState(() => sessionStorage.getItem('mad_visited') !== null);

  // Fix #2: Fallback timeout raised to 10s — painting-01-desktop.mp4 is 27.8MB;
  // on a mobile connection 5s is not enough. 10s covers 99% of real-world connections.
  useEffect(() => {
    const fallback = setTimeout(() => {
      setVideoReady(true);
    }, 10000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      <ScrollProgress />
      {!loadingComplete && (
        <LoadingScreen 
          onComplete={() => {
            // Fix #9: persist the visit flag so the loading screen is skipped
            // on every subsequent navigation/tab-revisit in this session
            sessionStorage.setItem('mad_visited', '1');
            setLoadingComplete(true);
          }} 
          onFadeStart={() => setVideoPlay(true)}
          isReady={videoReady} 
        />
      )}
      
      {/* ACT 1 — EDITORIAL WHITE */}
      <main id="main-content" className="home-main">
        <div className="home-white-zone" style={{ background: 'var(--gallery, #faf9f7)', position: 'relative' }}>
          <HeroBlock onVideoReady={() => setVideoReady(true)} play={loadingComplete || videoPlay} />
          <MorphWords />
          <WordReveal />
        </div>
        
        {/* ECLIPSE — CSS scroll transition */}
        <div className="eclipse-container">
        
        {/* ECLIPSE SPACER: Allow background to transition to dark before text appears */}
        <div style={{ height: isMobile ? '30vh' : '70vh' }} aria-hidden="true" />
        
        {/* ACT 2 — OPERATIONAL DARK */}
        <EditorialHeader 
          label="Our Method." 
          body="We don't begin with software. We begin with understanding where intelligence creates operational impact." 
          theme="dark" 
          topPadding 
        />
        <MethodSection steps={methodSteps} />
        </div>
        
        {/* VIBE SHIFT: Dark -> Light */}
        <ScrollSentence phrases={['YOUR', 'BUSINESS', 'NEEDS', 'MORE', 'CLIENTS.']} startTheme="dark" endTheme="light" />
        
        {/* PROSPECT ENGINE - WHITE ZONE */}
        <div className="prospect-white-zone" style={{ background: 'var(--gallery, #faf9f7)', position: 'relative' }}>
          <div className="system-label" aria-label="System classification" style={{ paddingTop: '60px', paddingLeft: 'var(--page-padding-x)', paddingRight: 'var(--page-padding-x)' }}>
            <span className="system-label-text" style={{ fontFamily: 'var(--font-sohne-mono)', fontSize: '10px', fontWeight: 400, letterSpacing: '0.18em', color: 'rgba(15,15,13,0.45)', textTransform: 'uppercase' }}>SYSTEM 001</span>
          </div>
          <EditorialHeader 
            label="Prospect Engine." 
            body="Every qualified conversation begins the same way. One AI system that finds, researches, scores, and reaches your next customer." 
            theme="light" 
            topPadding
          />
          <Suspense fallback={<div style={{ height: '200px' }} />}>
            <ProspectTeaser />
          </Suspense>
        </div>

        {/* VIBE SHIFT: Light -> Dark */}
        <ScrollSentence phrases={['FIND', 'OUT', 'WHICH AI SYSTEM', 'YOUR COMPANY', 'NEEDS.']} startTheme="light" endTheme="dark" />

        <div className="dark-zone" style={{ background: 'var(--canvas, #0a0a0f)' }}>
        <EditorialHeader 
          label="The Map." 
          body="84 AI systems mapped across every B2B operation. Built. Tested. Ready to deploy." 
          theme="dark" 
          topPadding 
        />
        <div style={{ paddingTop: '48px' }}>
          <ExplorerStrip cards={stripCards} />
        </div>
        
        <EditorialHeader 
          label="Our Principles." 
          body="Three commitments that govern every system we build." 
          theme="dark" 
          topPadding 
        />
        <Suspense fallback={<div style={{ height: '200px' }} />}>
          <PledgeSection />
        </Suspense>
        
        <ClosingCTA />
        </div>
      </main>
    </>
  );
}

