import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy, startTransition } from 'react';
import { HomePage } from './pages/Home/Home';
import { OurWorkPage } from './pages/OurWork/OurWork';
import { ExplorerPage } from './pages/Explorer/Explorer';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

const NodePage = lazy(() => import('./pages/Explorer/NodePage').then(module => ({ default: module.NodePage })));
const IndustriesHub = lazy(() => import('./pages/Industries/IndustriesHub').then(module => ({ default: module.IndustriesHub })));
const IndustryPage = lazy(() => import('./pages/Industries/IndustryPage').then(module => ({ default: module.IndustryPage })));
const ContactPage = lazy(() => import('./pages/Contact/Contact').then(module => ({ default: module.ContactPage })));
const AboutPage = lazy(() => import('./pages/About/About').then(module => ({ default: module.AboutPage })));

// Automatically scroll to top when changing routes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If we're opening a node page, don't reset the scroll
    // because the node page opens inside the explorer context
    // Actually, per spec, /explorer/:slug operates as a distinct route.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // NodePage has its own cinematic 1200ms overlay transition.
      // Applying the App-level fade on top causes a black flash.
      // Skip the fade when entering OR leaving a /explorer/:slug route.
      const isNodePageRoute = (path: string) =>
        path.startsWith('/explorer/') && path.split('/').length > 2;

      if (isNodePageRoute(location.pathname) || isNodePageRoute(displayLocation.pathname)) {
        // Instant switch with startTransition — NodePage overlay handles the visual, 
        // and Suspense won't flash a black screen while chunks load
        startTransition(() => {
          setDisplayLocation(location);
        });
        setPageVisible(true);
        return;
      }

      setPageVisible(false);
      const timer = setTimeout(() => {
        startTransition(() => {
          setDisplayLocation(location);
        });
        setPageVisible(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className={pageVisible ? 'page-entering' : 'page-exiting'}>
        <Suspense fallback={<div style={{ height: '100vh', width: '100vw', background: 'var(--void)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-structural)', opacity: 0.3 }}>·</div>}>
          <Routes location={displayLocation}>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/explorer" element={<ExplorerPage />} />
            <Route path="/explorer/:slug" element={<NodePage />} />
            <Route path="/industries" element={<IndustriesHub />} />
            <Route path="/industries/:slug" element={<IndustryPage />} />
            <Route path="/proof" element={<Navigate to="/explorer" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
