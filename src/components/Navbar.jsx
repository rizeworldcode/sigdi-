import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, Info, UtensilsCrossed, User, Images } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenBooking, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, pageId) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const handleMobileNavClick = (e, pageId) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <>
      <motion.header 
        className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          {/* Left Nav */}
          <nav className="nav-links desktop-only">
            <a 
              href="/services" 
              className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </a>
            <a 
              href="/about" 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a 
              href="/restaurant" 
              className={`nav-link ${currentPage === 'restaurant' ? 'active' : ''}`}
              id="nav-restaurant-btn"
              onClick={(e) => handleNavClick(e, 'restaurant')}
            >
              Restaurant
            </a>
          </nav>

          {/* Center Brand */}
          <div className="brand-logo">
            <a 
              href="/" 
              className="brand-logo-link"
              onClick={(e) => handleNavClick(e, 'home')}
              title="Sigdi Resort"
            >
              <img 
                src="/hero/sigdi logo.png" 
                alt="Sigdi Resort" 
                className="navbar-brand-logo-img"
              />
            </a>
          </div>

          {/* Right Nav: Gallery & Contact */}
          <div className="nav-actions desktop-only">
            <a 
              href="/gallery" 
              className={`nav-link ${currentPage === 'gallery' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'gallery')}
            >
              Gallery
            </a>
            <motion.button 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className={`nav-contact-link ${currentPage === 'contact' ? 'active' : ''}`}
              whileHover={{ x: 3, opacity: 0.85 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="contact-arrow">→</span>
              <span className="contact-text">Contact</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-dropdown"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <a 
                href="/services" 
                className={currentPage === 'services' ? 'active-mobile' : ''}
                onClick={(e) => handleMobileNavClick(e, 'services')}
              >
                Services
              </a>
              <a 
                href="/about" 
                className={currentPage === 'about' ? 'active-mobile' : ''}
                onClick={(e) => handleMobileNavClick(e, 'about')}
              >
                About
              </a>
              <a 
                href="/restaurant" 
                className={currentPage === 'restaurant' ? 'active-mobile' : ''}
                onClick={(e) => handleMobileNavClick(e, 'restaurant')}
              >
                Restaurant
              </a>
              <a 
                href="/gallery" 
                className={currentPage === 'gallery' ? 'active-mobile' : ''}
                onClick={(e) => handleMobileNavClick(e, 'gallery')}
              >
                Gallery
              </a>
              <button 
                className="mobile-contact-btn" 
                onClick={(e) => handleMobileNavClick(e, 'contact')}
              >
                → Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating Responsive Mobile Bottom Dock (Human-Crafted Luxury Design) */}
      <div className="mobile-bottom-dock-wrapper">
        <nav className="mobile-bottom-dock" aria-label="Mobile Navigation">

          {/* 2. Services */}
          <button
            type="button"
            className={`dock-item ${currentPage === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'services')}
            aria-label="Services"
          >
            <span className="dock-icon">
              <LayoutGrid size={20} strokeWidth={currentPage === 'services' ? 2.2 : 1.7} />
            </span>
            <span className="dock-label">Services</span>
          </button>

          {/* 3. About */}
          <button
            type="button"
            className={`dock-item ${currentPage === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
            aria-label="About"
          >
            <span className="dock-icon">
              <Info size={20} strokeWidth={currentPage === 'about' ? 2.2 : 1.7} />
            </span>
            <span className="dock-label">About</span>
          </button>

          {/* 4. Restaurant */}
          <button
            type="button"
            className={`dock-item ${currentPage === 'restaurant' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'restaurant')}
            aria-label="Restaurant"
          >
            <span className="dock-icon">
              <UtensilsCrossed size={20} strokeWidth={currentPage === 'restaurant' ? 2.2 : 1.7} />
            </span>
            <span className="dock-label">Restaurant</span>
          </button>

          {/* 5. Gallery */}
          <button
            type="button"
            className={`dock-item ${currentPage === 'gallery' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'gallery')}
            aria-label="Gallery"
          >
            <span className="dock-icon">
              <Images size={20} strokeWidth={currentPage === 'gallery' ? 2.2 : 1.7} />
            </span>
            <span className="dock-label">Gallery</span>
          </button>

          {/* 6. Contact */}
          <button
            type="button"
            className={`dock-item ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
            aria-label="Contact"
          >
            <span className="dock-icon">
              <User size={20} strokeWidth={currentPage === 'contact' ? 2.2 : 1.7} />
            </span>
            <span className="dock-label">Contact</span>
          </button>
        </nav>
      </div>
    </>
  );
}
