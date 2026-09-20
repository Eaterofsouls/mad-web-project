import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

type NavState = 'initial' | 'light-scrolled' | 'dark-pill' | 'light-pill';

export function Navbar() {
  const location = useLocation();
  const usesScrollTheme = location.pathname === '/' || location.pathname === '/our-work';

  // Non-home pages have dark backgrounds — default to dark-pill immediately
  // Home page uses scroll-driven state logic below
  const getInitialNavState = (): NavState => {
    if (usesScrollTheme) return 'initial';
    return 'dark-pill';
  };

  const [navState, setNavState] = useState<NavState>(getInitialNavState);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobileHidden, setIsMobileHidden] = useState<boolean>(false);
  
  const scrollTicking = useRef(false);
  const lastScrollY = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset navState when route changes
  useEffect(() => {
    if (!usesScrollTheme) {
      setNavState('dark-pill');
    } else {
      setNavState('initial');
    }
  }, [location.pathname, usesScrollTheme]);

  // Global mobile auto-hide logic
  useEffect(() => {
    let ticking = false;
    const handleMobileScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (window.innerWidth <= 768) {
            const isBottom = Math.ceil(window.innerHeight + y) >= document.body.offsetHeight - 50;
            
            let minHideY = 100;
            if (window.location.pathname === '/') {
              const eclipseContainer = document.querySelector('.eclipse-container');
              if (eclipseContainer) {
                // The navbar starts hiding right as the "Our Method" section begins
                minHideY = eclipseContainer.getBoundingClientRect().top + y;
              } else {
                minHideY = window.innerHeight * 4;
              }
            }

            // Hide if scrolling down past minHideY and not at the bottom
            if (y > minHideY && y > lastScrollY.current + 10 && !isBottom) {
              setIsMobileHidden(true);
            } else if (y < lastScrollY.current - 10 || y <= minHideY || isBottom) {
              setIsMobileHidden(false);
            }
          } else {
            setIsMobileHidden(false);
          }
          lastScrollY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleMobileScroll, { passive: true });
    // Don't call it immediately to avoid false initial hides
    return () => window.removeEventListener('scroll', handleMobileScroll);
  }, []);

  // Home-page specific theme logic
  useEffect(() => {
    if (!usesScrollTheme) return;

    const handleScroll = () => {
      if (!scrollTicking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const eclipseEl = document.querySelector('.eclipse-container');
          const eclipseStart = eclipseEl
            ? eclipseEl.getBoundingClientRect().top + y - window.innerHeight * 0.3
            : window.innerHeight * 2;

          const prospectEl = document.querySelector('.prospect-white-zone');
          const prospectStart = prospectEl
            ? prospectEl.getBoundingClientRect().top + y - window.innerHeight * 0.1
            : window.innerHeight * 5;
            
          const mapEl = document.querySelector('.dark-zone');
          const mapStart = mapEl 
            ? mapEl.getBoundingClientRect().top + y - window.innerHeight * 0.1
            : window.innerHeight * 8;

          if (y >= mapStart) {
            setNavState('dark-pill');
          } else if (y >= prospectStart) {
            setNavState('light-pill');
          } else if (y >= eclipseStart) {
            setNavState('dark-pill');
          } else if (y >= 120) {
            setNavState('light-scrolled');
          } else {
            setNavState('initial');
          }
          scrollTicking.current = false;
        });
        scrollTicking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [usesScrollTheme]);

  // Close menu on outside tap
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) setMenuOpen(false);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar navbar--${navState} ${isMobileHidden ? 'navbar--hidden' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            MAD
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link to="/explorer" className="nav-link" aria-label="Explore the AI system map">
              Explorer
            </Link>
            <Link to="/industries" className="nav-link" aria-label="Browse by industry">
              Industries
            </Link>
            <Link to="/our-work" className="nav-link" aria-label="See client results">
              Our Clients
            </Link>
            <Link to="/about" className="nav-link" aria-label="Meet the MAD team">
              Team
            </Link>
            <Link to="/contact" className="nav-link" aria-label="Begin your assessment">
              Assessment
            </Link>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          ref={overlayRef}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <Link to="/" className="nav-mobile-link" onClick={closeMenu}>Home</Link>
          <Link to="/explorer" className="nav-mobile-link" onClick={closeMenu}>Explorer</Link>
          <Link to="/industries" className="nav-mobile-link" onClick={closeMenu}>Industries</Link>
          <Link to="/our-work" className="nav-mobile-link" onClick={closeMenu}>Our Clients</Link>
          <Link to="/about" className="nav-mobile-link" onClick={closeMenu}>Team</Link>
          <Link to="/contact" className="nav-mobile-link" onClick={closeMenu}>Assessment</Link>
        </div>
      )}
    </>
  );
}
