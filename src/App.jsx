import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import RestaurantPage from './pages/RestaurantPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import FloatingContactButtons from './components/FloatingContactButtons';
import './components/components.css';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const lenisRef = useRef(null);

  const getPageFromUrl = () => {
    // Check clean pathname first (e.g. /services, /about, /gallery, /restaurant, /contact)
    const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
    if (['services', 'about', 'gallery', 'restaurant', 'contact'].includes(pathname)) {
      return pathname;
    }
    // Backward compatibility: If URL has a legacy hash (#services, #gallery), clean it up
    const hash = window.location.hash.replace('#', '').trim().toLowerCase();
    if (['services', 'about', 'gallery', 'restaurant', 'contact'].includes(hash)) {
      window.history.replaceState(null, '', `/${hash}`);
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromUrl);

  useEffect(() => {
    // Ensure the website scroll restoration is controlled
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Clean up any stray hash in address bar immediately
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace('#', '').trim().toLowerCase();
      const targetPath = ['services', 'about', 'gallery', 'restaurant', 'contact'].includes(cleanHash) ? `/${cleanHash}` : '/';
      window.history.replaceState(null, '', targetPath);
    }

    // Initialize Lenis smooth scroll matching fluid scrolling physics
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
      infinite: false,
    });
    lenisRef.current = lenis;

    lenis.scrollTo(0, { immediate: true });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Listen to browser popstate (back/forward buttons)
    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    const targetUrl = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetUrl || window.location.hash) {
      window.history.pushState({ page }, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* Top Fixed Navbar */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Dynamic Page Routing */}
      {currentPage === 'services' && (
        <ServicesPage 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate} 
        />
      )}

      {currentPage === 'about' && (
        <AboutPage 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate} 
        />
      )}

      {currentPage === 'gallery' && (
        <GalleryPage 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate} 
        />
      )}

      {currentPage === 'restaurant' && (
        <RestaurantPage 
          onOpenBooking={handleOpenBooking} 
        />
      )}

      {currentPage === 'contact' && (
        <ContactPage 
          onOpenBooking={handleOpenBooking} 
        />
      )}

      {currentPage === 'home' && (
        <HomePage 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate}
        />
      )}

      {/* Footer with Page Navigation */}
      <Footer 
        onOpenBooking={handleOpenBooking} 
        onNavigate={handleNavigate} 
      />

      {/* Consultation Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />

      {/* Floating Direct Call & WhatsApp Contact Actions */}
      <FloatingContactButtons />
    </div>
  );
}
