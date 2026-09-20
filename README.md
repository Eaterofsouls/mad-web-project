# MAD Operating System (Client Acquisition & Business Growth AI Operating System)

> **The enterprise AI client acquisition, workflow intelligence, and interactive constellation platform developed at MadMarketers.**

- **Live Platform:** [madmarketers.in](https://madmarketers.in)
- **Author:** Daksh Chauhan ([buildwithdaksh.com](https://buildwithdaksh.com)) | GitHub: [@Eaterofsouls](https://github.com/Eaterofsouls)
- **License:** Apache License 2.0

---

## Overview

MAD is a specialized Client Acquisition & Business Growth AI Operating System engineered for operational clarity, pipeline velocity, and measurable business outcomes. Built with high-performance web standards (React 19, TypeScript, Vite, and custom SVG/Canvas rendering), the platform showcases industry-mapped automation systems across Manufacturing, Pharmaceuticals, FMCG, Distribution, and Logistics.

### Key Capabilities

1. **Interactive Systems Constellation**: A custom graph-based interactive explorer visualizing dozens of deployed AI automation nodes mapped by industry priority and operational cluster.
2. **Deterministic & Agentic Workflows**: Demonstrates operational pipelines spanning discovery, lead intelligence, scoring, and automated client proposals.
3. **Verified Deployments & Case Studies**: Live client results across commercial B2B clients in India, backed by verified outcomes and operational metrics.
4. **Editorial & Brand Experience**: Dark/light mode theme orchestration, fluid typography tokens, and responsive canvas backdrops.

---

## Tech Stack

- **Framework**: React 19, TypeScript
- **Bundler & Tooling**: Vite 8, Oxlint
- **Graph & Visualization**: Custom Canvas / SVG rendering, D3 (d3-selection, d3-zoom), @xyflow/react
- **Routing**: React Router v7
- **Styling**: CSS Design Tokens (glassmorphism, micro-animations, responsive layout)

---

## Project Structure

```text
mad-web-project/
├── docs/                             # Core technical blueprints and architecture specs
│   ├── MASTER_PROJECT_DOCUMENT.md
│   ├── MASTER_DESIGN_STRATEGY_DOCUMENT.md
│   └── website_architecture.md
├── public/                           # Static assets, sitemaps, and icons
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/                          # Coordinate and node data build tools
├── src/
│   ├── components/                   # Modular UI components (Constellation, Navbar, Hero, etc.)
│   ├── data/                         # Systems node graph data (nodes.ts, clusters.ts, types.ts)
│   ├── hooks/                        # Custom React hooks (useScrollReveal, etc.)
│   ├── pages/                        # Route pages (Home, Explorer, Industries, OurWork, Contact)
│   ├── tokens/                       # Design tokens (colors, spacing, typography)
│   └── utils/                        # Data transformation and animation utilities
├── _asset_manifest.json              # Centralized media asset manifest
├── index.html                        # Application entry point
├── package.json                      # Package dependencies and scripts
└── vite.config.ts                    # Vite configuration
```

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Eaterofsouls/mad-web-project.git
cd mad-web-project

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Build & Production Preview

```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

---

## License

This project is licensed under the **Apache License 2.0** — see the [LICENSE](./LICENSE) file for details.
