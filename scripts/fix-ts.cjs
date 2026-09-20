const fs = require('fs');

let c = fs.readFileSync('src/components/Constellation/Constellation.tsx', 'utf8');
c = c.replace(/borderBottom: '1px solid var\(--rule-heavy\)',\s*cursor: 'pointer'/, `cursor: 'pointer'`);
c = c.replace(/onZoom=\\{\(event\) => \\{/, 'onZoom={(event: any) => {');
c = c.replace(/const hoveredCluster/, 'const _hoveredCluster');
c = c.replace(/const centers =/, 'const _centers =');
fs.writeFileSync('src/components/Constellation/Constellation.tsx', c);

let s = fs.readFileSync('src/components/Signal/Signal.tsx', 'utf8');
s = s.replace(/const navigate = useNavigate\(\);/, '// const navigate = useNavigate();');
fs.writeFileSync('src/components/Signal/Signal.tsx', s);

let e = fs.readFileSync('src/pages/Explorer/Explorer.tsx', 'utf8');
e = e.replace(/, useRef /, ' ');
fs.writeFileSync('src/pages/Explorer/Explorer.tsx', e);

let h = fs.readFileSync('src/pages/Home/Home.tsx', 'utf8');
h = h.replace(/import \{ nodes \} from '\.\.\/\.\.\/data\/nodes';/, '// import { nodes } from "../../data/nodes";');
fs.writeFileSync('src/pages/Home/Home.tsx', h);

let i = fs.readFileSync('src/pages/Industries/IndustryPage.tsx', 'utf8');
i = i.replace(/, getNodesByIndustry /, ' ');
i = i.replace(/import \{ INDUSTRIES \} from '\.\.\/\.\.\/data\/industries';/, '// import { INDUSTRIES } from "../../data/industries";');
fs.writeFileSync('src/pages/Industries/IndustryPage.tsx', i);

let scr = fs.readFileSync('src/utils/scramble.ts', 'utf8');
scr = scr.replace(/const enabled = /g, 'const _enabled = ');
scr = scr.replace(/const durationMs = /g, 'const _durationMs = ');
fs.writeFileSync('src/utils/scramble.ts', scr);

console.log('Fixes applied');
