import React, { useEffect, useRef, useState } from 'react';
import { ClosingCTA } from '../../components/ClosingCTA/ClosingCTA';
import './About.css';

/* ─── Team Data ─── */
const team = [
  {
    index: '01',
    name: 'Urvi Shah',
    role: 'Lead Brand Architect',
    discipline: 'BRAND STRATEGY · MARKETING · COMMUNICATIONS',
    bio: 'Urvi makes brands stop being forgettable. With a postgraduate degree in Social Entrepreneurship from the Entrepreneurship Development Institute of India, she ensures that MAD\'s solutions communicate their identity with precision. Bringing extensive experience from heading sales marketing to independent brand consulting, she makes sure that the systems we build don\'t just work flawlessly — they sound unique, stand out, and create an impact.',
    bgVar: 'var(--void)',
    glyph: 'brand',
  },
  {
    index: '02',
    name: 'Darpan Shakuni',
    role: 'Senior Product Designer',
    discipline: 'UI/UX DESIGN · PRODUCT DESIGN · VISUAL SYSTEMS',
    bio: 'Darpan leads the design of every client-facing solution MAD produces. With deep expertise across branding, UI/UX, and digital experience, he translates complex AI capabilities into interfaces that feel natural, inevitable, and elegant. He works with Adobe Creative Suite, CorelDRAW, and AI-powered visual tools — but his sharpest instrument is his instinct for what the user actually needs.',
    bgVar: 'var(--canvas)',
    glyph: 'design',
  },
  {
    index: '03',
    name: 'Daksh Chauhan',
    role: 'AI Development Lead',
    discipline: 'ARTIFICIAL INTELLIGENCE · SYSTEMS THINKING · ARCHITECTURE',
    bio: 'Daksh brings strong systems thinking and creativity to the AI systems MAD develops. Pursuing his B.Tech in Computer Science (AI-ML) from Adani University, he designs intelligent, scalable architectures that sit at the intersection of precision engineering and lateral thinking. For Daksh, every system is a question: what is the most intelligent thing this could do?',
    bgVar: 'var(--void)',
    glyph: 'ai',
  },
  {
    index: '04',
    name: 'Aryan Parmar',
    role: 'Head of Engineering Operations',
    discipline: 'SOFTWARE ENGINEERING · SYSTEM OPERATIONS · IT',
    bio: 'Aryan builds the systems that make everything run. With a B.Tech in Information Technology from Aditya Silver Oak University of Engineering, he specialises in developing robust and efficient software that powers MAD\'s operational AI deployments. What makes Aryan exceptional is his multidimensional character — as a professional garba coach, he brings the same precision, rhythm, and reading of complex group dynamics to his code.',
    bgVar: 'var(--canvas)',
    glyph: 'engineering',
  },
  {
    index: '05',
    name: 'Mihir Solanki',
    role: 'Security Architect',
    discipline: 'CYBER SECURITY · ARCHITECTURE · ETHICAL HACKING',
    bio: 'Mihir brings top-notch security to every system MAD deploys — ensuring what we build is fortified, auditable, and resilient. A Certified Ethical Hacker pursuing his MSc in Applied Cyber Security at Queen\'s University Belfast, he bridges the gap between robust software engineering and elite security practices. He doesn\'t just protect the perimeter — he architects systems where security is intrinsic, not bolted on.',
    bgVar: 'var(--void)',
    glyph: 'security',
  },
  {
    index: '06',
    name: 'Yash Parmar',
    role: 'Quality Assurance Lead',
    discipline: 'QUALITY ASSURANCE · MANUAL TESTING · RELIABILITY',
    bio: 'Yash ensures that every system MAD delivers is robust and reliable. As a QA Analyst with a sharp eye for detail, he brings rigorous manual testing and quality assurance practices to the team. Drawing on his experience at Emerging Five, Yash thoroughly tests our solutions to identify and eliminate edge cases, guaranteeing that the final product not only meets requirements but exceeds expectations in stability.',
    bgVar: 'var(--canvas)',
    glyph: 'qa',
  },
];

/* ─── SVG Discipline Glyphs ─── */
function SecurityGlyph() {
  return (
    <svg className="about-glyph" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      {/* Protected Asset (Castle Half) */}
      <g stroke="rgba(242,240,236,0.5)" strokeWidth="1.5" fill="rgba(242,240,236,0.05)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 180 200 L 240 200 L 240 60 L 220 60 L 220 70 L 200 70 L 200 60 L 180 60 Z" />
        <line x1="180" y1="100" x2="240" y2="100" />
        <line x1="180" y1="160" x2="240" y2="160" />
        <path d="M 210 120 L 210 140 A 10 10 0 0 1 230 140 L 230 120 Z" />
      </g>

      {/* Forcefield/Shield */}
      <path d="M 160 40 Q 130 120 160 200" stroke="rgba(242,240,236,1)" strokeWidth="1" strokeLinecap="round" className="glyph-forcefield" />
      
      {/* Attack 1 (Upper) */}
      <g className="glyph-attack glyph-attack--1">
        <g className="glyph-arrow" stroke="rgba(242,240,236,1)" strokeWidth="1.5">
          <line x1="72" y1="80" x2="132" y2="80" />
          <polyline points="122,75 132,80 122,85" />
        </g>
        <g stroke="rgba(242,240,236,1)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="152" y1="80" x2="132" y2="60" className="glyph-shard glyph-shard--1" />
          <line x1="152" y1="80" x2="167" y2="90" className="glyph-shard glyph-shard--2" />
          <line x1="152" y1="80" x2="142" y2="70" className="glyph-shard glyph-shard--3" />
        </g>
      </g>

      {/* Attack 2 (Lower) */}
      <g className="glyph-attack glyph-attack--2">
        <g className="glyph-arrow" stroke="rgba(242,240,236,1)" strokeWidth="1.5">
          <line x1="72" y1="160" x2="132" y2="160" />
          <polyline points="122,155 132,160 122,165" />
        </g>
        <g stroke="rgba(242,240,236,1)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="152" y1="160" x2="132" y2="180" className="glyph-shard glyph-shard--1" />
          <line x1="152" y1="160" x2="167" y2="150" className="glyph-shard glyph-shard--2" />
          <line x1="152" y1="160" x2="142" y2="170" className="glyph-shard glyph-shard--3" />
        </g>
      </g>

      {/* Attack 3 (Middle) */}
      <g className="glyph-attack glyph-attack--3">
        <g className="glyph-arrow" stroke="rgba(242,240,236,1)" strokeWidth="1.5">
          <line x1="65" y1="120" x2="125" y2="120" />
          <polyline points="115,115 125,120 115,125" />
        </g>
        <g stroke="rgba(242,240,236,1)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="145" y1="120" x2="115" y2="90" className="glyph-shard glyph-shard--1" />
          <line x1="145" y1="120" x2="165" y2="135" className="glyph-shard glyph-shard--2" />
          <line x1="145" y1="120" x2="125" y2="100" className="glyph-shard glyph-shard--3" />
          <line x1="145" y1="120" x2="125" y2="140" className="glyph-shard glyph-shard--4" />
        </g>
      </g>
    </svg>
  );
}

function AIGlyph() {
  return (
    <svg className="about-glyph" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <g className="ai-assembly-scene">
        {/* Chassis */}
        <g className="ai-chassis">
          <rect x="50" y="20" width="140" height="200" rx="4" stroke="rgba(242,240,236,0.6)" strokeWidth="2" fill="rgba(242,240,236,0.02)" />
          <line x1="70" y1="20" x2="70" y2="220" stroke="rgba(242,240,236,0.2)" strokeWidth="1" />
          <line x1="170" y1="20" x2="170" y2="220" stroke="rgba(242,240,236,0.2)" strokeWidth="1" />
        </g>

        {/* Blade 1 (Middle - The Core) */}
        <g className="ai-blade ai-blade--1">
          <rect x="60" y="95" width="120" height="50" rx="2" stroke="rgba(242,240,236,0.8)" strokeWidth="1.5" fill="rgba(242,240,236,0.05)" />
          <rect x="130" y="110" width="40" height="4" rx="2" fill="rgba(242,240,236,0.3)" />
          <rect x="130" y="126" width="40" height="4" rx="2" fill="rgba(242,240,236,0.3)" />
          <circle cx="90" cy="120" r="12" stroke="rgba(242,240,236,0.6)" strokeWidth="2" fill="none" />
          <circle cx="90" cy="120" r="6" className="ai-blade-status" fill="rgba(242,240,236,1)" />
        </g>

        {/* Blade 2 (Top) */}
        <g className="ai-blade ai-blade--2">
          <rect x="60" y="40" width="120" height="40" rx="2" stroke="rgba(242,240,236,0.4)" strokeWidth="1" fill="rgba(242,240,236,0.02)" />
          <line x1="130" y1="55" x2="170" y2="55" stroke="rgba(242,240,236,0.2)" strokeWidth="2" strokeLinecap="round" />
          <line x1="130" y1="65" x2="170" y2="65" stroke="rgba(242,240,236,0.2)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="90" cy="60" r="4" className="ai-blade-status" fill="rgba(242,240,236,1)" />
        </g>

        {/* Blade 3 (Bottom) */}
        <g className="ai-blade ai-blade--3">
          <rect x="60" y="160" width="120" height="40" rx="2" stroke="rgba(242,240,236,0.4)" strokeWidth="1" fill="rgba(242,240,236,0.02)" />
          <line x1="130" y1="175" x2="170" y2="175" stroke="rgba(242,240,236,0.2)" strokeWidth="2" strokeLinecap="round" />
          <line x1="130" y1="185" x2="170" y2="185" stroke="rgba(242,240,236,0.2)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="90" cy="180" r="4" className="ai-blade-status" fill="rgba(242,240,236,1)" />
        </g>

        {/* Cables physically plugging in */}
        <g className="ai-cables">
          <path d="M 0 60 L 40 60 L 40 120 L 78 120" fill="none" stroke="rgba(242,240,236,0.8)" strokeWidth="3" strokeLinejoin="round" className="ai-cable ai-cable--1" />
          <path d="M 0 20 L 20 20 L 20 60 L 78 60" fill="none" stroke="rgba(242,240,236,0.6)" strokeWidth="2" strokeLinejoin="round" className="ai-cable ai-cable--2" />
          <path d="M 0 220 L 20 220 L 20 180 L 78 180" fill="none" stroke="rgba(242,240,236,0.6)" strokeWidth="2" strokeLinejoin="round" className="ai-cable ai-cable--3" />
        </g>
      </g>
    </svg>
  );
}

function DesignGlyph() {
  const dur = "12s"; // 3 seconds per stage
  const keyTimes = "0; 0.16; 0.25; 0.41; 0.50; 0.66; 0.75; 0.91; 1";
  const calcMode = "spline";
  const keySplines = "0 0 1 1; 0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1";

  // Stage 1: Diamond
  const outlineDiamond = "M 20 120 L 70 70 L 120 20 L 170 70 L 220 120 L 170 170 L 120 220 L 70 170 Z";
  const fold1Diamond = "M 120 20 L 120 220";
  const fold2Diamond = "M 20 120 L 220 120";
  const fold3Diamond = "M 70 70 L 170 170";
  const fold4Diamond = "M 170 70 L 70 170";

  // Stage 2: Isometric Cube
  const outlineCube = "M 120 40 L 155 60 L 189 80 L 189 160 L 120 200 L 51 160 L 51 80 L 85 60 Z";
  const fold1Cube = "M 120 120 L 120 40";
  const fold2Cube = "M 120 120 L 189 160";
  const fold3Cube = "M 120 120 L 51 160";
  const fold4Cube = "M 51 80 L 189 80";

  // Stage 3: Star
  const outlineStar = "M 120 20 L 140 100 L 220 120 L 140 140 L 120 220 L 100 140 L 20 120 L 100 100 Z";
  const fold1Star = "M 120 20 L 120 220";
  const fold2Star = "M 20 120 L 220 120";
  const fold3Star = "M 100 100 L 140 140";
  const fold4Star = "M 140 100 L 100 140";

  // Stage 4: Crane
  const outlineCrane = "M 20 90 L 60 70 L 160 30 L 220 50 L 160 140 L 120 190 L 80 150 L 100 120 Z";
  const fold1Crane = "M 160 30 L 120 190";
  const fold2Crane = "M 100 120 L 160 140";
  const fold3Crane = "M 60 70 L 160 140";
  const fold4Crane = "M 160 30 L 80 150";

  return (
    <svg className="about-glyph" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      {/* Background fixed grid to give the "blueprint" feel */}
      <g stroke="rgba(242,240,236,0.05)" strokeWidth="1">
        {[40, 80, 120, 160, 200].map(pos => (
          <React.Fragment key={`grid-${pos}`}>
            <line x1="0" y1={pos} x2="240" y2={pos} />
            <line x1={pos} y1="0" x2={pos} y2="240" />
          </React.Fragment>
        ))}
      </g>

      <g stroke="rgba(242,240,236,0.8)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        {/* Main Outline */}
        <path fill="rgba(242,240,236,0.1)">
          <animate begin="0s" attributeName="d" dur={dur} repeatCount="indefinite" calcMode={calcMode} keyTimes={keyTimes} keySplines={keySplines} 
            values={`${outlineDiamond}; ${outlineDiamond}; ${outlineCube}; ${outlineCube}; ${outlineStar}; ${outlineStar}; ${outlineCrane}; ${outlineCrane}; ${outlineDiamond}`} />
        </path>
        
        {/* Internal Folds */}
        <path>
          <animate begin="0s" attributeName="d" dur={dur} repeatCount="indefinite" calcMode={calcMode} keyTimes={keyTimes} keySplines={keySplines} 
            values={`${fold1Diamond}; ${fold1Diamond}; ${fold1Cube}; ${fold1Cube}; ${fold1Star}; ${fold1Star}; ${fold1Crane}; ${fold1Crane}; ${fold1Diamond}`} />
        </path>
        <path>
          <animate begin="0s" attributeName="d" dur={dur} repeatCount="indefinite" calcMode={calcMode} keyTimes={keyTimes} keySplines={keySplines} 
            values={`${fold2Diamond}; ${fold2Diamond}; ${fold2Cube}; ${fold2Cube}; ${fold2Star}; ${fold2Star}; ${fold2Crane}; ${fold2Crane}; ${fold2Diamond}`} />
        </path>
        <path>
          <animate begin="0s" attributeName="d" dur={dur} repeatCount="indefinite" calcMode={calcMode} keyTimes={keyTimes} keySplines={keySplines} 
            values={`${fold3Diamond}; ${fold3Diamond}; ${fold3Cube}; ${fold3Cube}; ${fold3Star}; ${fold3Star}; ${fold3Crane}; ${fold3Crane}; ${fold3Diamond}`} />
        </path>
        <path>
          <animate begin="0s" attributeName="d" dur={dur} repeatCount="indefinite" calcMode={calcMode} keyTimes={keyTimes} keySplines={keySplines} 
            values={`${fold4Diamond}; ${fold4Diamond}; ${fold4Cube}; ${fold4Cube}; ${fold4Star}; ${fold4Star}; ${fold4Crane}; ${fold4Crane}; ${fold4Diamond}`} />
        </path>
      </g>
    </svg>
  );
}

function EngineeringGlyph() {
  const dur = "8s";
  const pathLine = "M 40 120 L 51 120 L 63 120 L 74 120 L 86 120 L 97 120 L 109 120 L 120 120 L 131 120 L 143 120 L 154 120 L 166 120 L 177 120 L 189 120 L 200 120";
  const pathServer = "M 120 60 L 172 90 L 172 150 L 120 180 L 68 150 L 68 90 L 120 60 L 120 120 L 172 90 L 120 120 L 120 180 L 120 120 L 68 150 L 120 120 L 68 90";
  
  const keyTimes = "0; 0.20; 0.25; 0.75; 0.80; 1";
  const keySplines = "0 0 1 1; 0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1; 0 0 1 1";

  return (
    <svg className="about-glyph" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      {/* Code Brackets */}
      <path d="M 25 110 L 15 120 L 25 130" stroke="rgba(242,240,236,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 215 110 L 225 120 L 215 130" stroke="rgba(242,240,236,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* The Morphing Code Path */}
      <path className="glyph-code-path" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <animate 
          attributeName="d" 
          dur={dur} 
          repeatCount="indefinite" 
          calcMode="spline" 
          keyTimes={keyTimes} 
          keySplines={keySplines} 
          values={`${pathLine}; ${pathLine}; ${pathServer}; ${pathServer}; ${pathLine}; ${pathLine}`} 
        />
      </path>

      {/* The Cursor */}
      <line x1="38" y1="110" x2="38" y2="130" stroke="rgba(242,240,236,0.8)" strokeWidth="2" className="glyph-code-cursor" />
    </svg>
  );
}

function BrandGlyph() {
  return (
    <svg className="about-glyph" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="beam-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(242,240,236,0.6)" />
          <stop offset="100%" stopColor="rgba(242,240,236,0)" />
        </linearGradient>
      </defs>
      
      {/* Sweeping Beam */}
      <polygon points="120,50 40,240 200,240" fill="url(#beam-grad)" className="glyph-beam" />
      
      {/* Island Base */}
      <path d="M 70 210 L 170 210 L 140 180 L 100 180 Z" stroke="rgba(242,240,236,0.4)" strokeWidth="1" fill="rgba(242,240,236,0.05)" />
      
      {/* Lighthouse Tower */}
      <polygon points="105,60 135,60 145,180 95,180" stroke="rgba(242,240,236,0.8)" strokeWidth="1.5" fill="none" />
      <line x1="102" y1="140" x2="138" y2="140" stroke="rgba(242,240,236,0.4)" strokeWidth="1" />
      <line x1="99" y1="100" x2="141" y2="100" stroke="rgba(242,240,236,0.4)" strokeWidth="1" />
      
      {/* Lantern Room & Dome */}
      <rect x="112" y="45" width="16" height="15" stroke="rgba(242,240,236,0.8)" strokeWidth="1.5" fill="none" />
      <path d="M 112 45 Q 120 35 128 45 Z" fill="rgba(242,240,236,0.8)" />
      
      {/* Moving Ocean Waves */}
      <g clipPath="url(#ocean-clip)">
        <defs>
          <clipPath id="ocean-clip">
            <rect x="0" y="190" width="240" height="50" />
          </clipPath>
        </defs>
        <g className="glyph-ocean">
          <path d="M -100 220 Q -75 210 -50 220 T 0 220 T 50 220 T 100 220 T 150 220 T 200 220 T 250 220 T 300 220 T 350 220" stroke="rgba(242,240,236,0.4)" strokeWidth="1.5" fill="none" />
          <path d="M -100 230 Q -75 240 -50 230 T 0 230 T 50 230 T 100 230 T 150 230 T 200 230 T 250 230 T 300 230 T 350 230" stroke="rgba(242,240,236,0.15)" strokeWidth="1" fill="none" />
        </g>
      </g>
    </svg>
  );
}

function QAGlyph() {
  return (
    <svg className="about-glyph" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      {/* Anvil Base */}
      <path d="M 90 180 L 150 180 L 160 200 L 80 200 Z M 100 160 L 140 160 L 145 180 L 95 180 Z" fill="rgba(242,240,236,0.2)" />
      <rect x="90" y="150" width="60" height="10" fill="rgba(242,240,236,0.5)" />
      
      {/* Hammer (Pivots at handle base) */}
      <g className="glyph-hammer-pivot">
        {/* Handle */}
        <line x1="120" y1="150" x2="180" y2="50" stroke="rgba(242,240,236,0.4)" strokeWidth="6" strokeLinecap="round" />
        {/* Head */}
        <polygon points="100,150 130,130 140,145 110,165" fill="rgba(242,240,236,0.8)" />
      </g>

      {/* Shockwaves */}
      <g className="glyph-shockwave">
        <line x1="40" y1="150" x2="85" y2="150" stroke="rgba(242,240,236,0.6)" strokeWidth="2" strokeLinecap="round" />
        <line x1="155" y1="150" x2="200" y2="150" stroke="rgba(242,240,236,0.6)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

const glyphMap: Record<string, React.ReactElement> = {
  security: <SecurityGlyph />,
  ai: <AIGlyph />,
  design: <DesignGlyph />,
  engineering: <EngineeringGlyph />,
  brand: <BrandGlyph />,
  qa: <QAGlyph />,
};

/* ─── Chapter Component ─── */
interface ChapterProps {
  member: typeof team[0];
  isReversed: boolean;
}

function TeamChapter({ member, isReversed }: ChapterProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`about-chapter ${visible ? 'about-chapter--visible' : ''} ${isReversed ? 'about-chapter--reversed' : ''}`}
      style={{ background: member.bgVar }}
      aria-label={`Team member: ${member.name}`}
    >
      {/* Left Column — Text */}
      <div className="about-chapter__text">
        <h2 className="about-chapter__name">{member.name}</h2>
        <p className="about-chapter__role">{member.role}</p>
        <div className="about-chapter__rule" />
        <p className="about-chapter__bio">{member.bio}</p>
        <span className="about-chapter__discipline">{member.discipline}</span>
      </div>

      {/* Right Column — Glyph */}
      <div className="about-chapter__visual">
        <div className="about-chapter__glyph-wrap">
          {glyphMap[member.glyph]}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export function AboutPage() {
  return (
    <main className="about-page" id="main-content">

      {/* Hero / Opening Statement */}
      <section className="about-hero" style={{ background: 'var(--void)' }}>
        <div className="about-hero__inner">
          <h1 className="about-hero__headline">
            Our Team
          </h1>
          <p className="about-hero__sub">
            Every system MAD builds carries the fingerprint of the person who architected it.
            These are those people.
          </p>
          <div className="about-hero__scroll-cue" aria-hidden="true">
            <span>SCROLL</span>
          </div>
        </div>
      </section>

      {/* Team Chapters */}
      {team.map((member, i) => (
        <TeamChapter
          key={member.index}
          member={member}
          isReversed={i % 2 !== 0}
        />
      ))}

      {/* Closing CTA */}
      <ClosingCTA />

    </main>
  );
}
