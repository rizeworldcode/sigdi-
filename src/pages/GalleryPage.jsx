import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from 'lucide-react';
import AnimatedScrollGallery from '../components/AnimatedScrollGallery';

// User's Curated Gallery Images
const initialGalleryImages = [
  {
    id: 1,
    title: 'Grand Sigdi Celebration',
    category: 'Celebrations',
    image: '/hero/gallery 1.png',
    span: 'normal',
    description: 'Bespoke event decor and royal celebration lawn ambience.'
  },
  {
    id: 2,
    title: 'Festive Illumination & Decor',
    category: 'Decor',
    image: '/hero/gallery 2.png',
    span: 'normal',
    description: 'Enchanting floral installations and celebratory setup.'
  },
  {
    id: 3,
    title: 'Heritage Courtyard & Stage',
    category: 'Celebrations',
    image: '/hero/gallery 3.png',
    span: 'normal',
    description: 'Palatial stage backdrop and ceremonial seating.'
  },
  {
    id: 4,
    title: 'Resort Lawns & Lighting',
    category: 'Resort',
    image: '/hero/gallery 4.png',
    span: 'normal',
    description: 'Vibrant evening celebrations and luminous night ambience.'
  },
  {
    id: 5,
    title: 'Royal Ambiance & Hospitality',
    category: 'Resort',
    image: '/hero/gallery 5.png',
    span: 'normal',
    description: 'Warm Rajasthani hospitality and cherished guest memories.'
  }
];

// 9-tile layout for the Framer Animated 3x3 expansion (with gallery 1.png as the focal expanding center tile)
const scrollGalleryImages = [
  initialGalleryImages[1], // Tile 0: gallery 2
  initialGalleryImages[2], // Tile 1: gallery 3
  initialGalleryImages[3], // Tile 2: gallery 4
  initialGalleryImages[4], // Tile 3: gallery 5
  initialGalleryImages[0], // Tile 4 (CENTER HERO): gallery 1 (Expands to full screen!)
  initialGalleryImages[1], // Tile 5: gallery 2
  initialGalleryImages[2], // Tile 6: gallery 3
  initialGalleryImages[3], // Tile 7: gallery 4
  initialGalleryImages[4]  // Tile 8: gallery 5
];

export default function GalleryPage({ onOpenBooking, onNavigate }) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextPhoto = (e) => {
    e?.stopPropagation?.();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % initialGalleryImages.length);
    }
  };

  const handlePrevPhoto = (e) => {
    e?.stopPropagation?.();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + initialGalleryImages.length) % initialGalleryImages.length
      );
    }
  };

  return (
    <div className="page-view gallery-page-view">
      {/* 1. HERO BANNER */}
      <section className="umami-hero-section" style={{ backgroundImage: "url('/hero/gallery 1.png')" }}>
        <div className="umami-hero-overlay" />
        <div className="umami-hero-inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="gallery-hero-badge"
          >
            <Camera size={16} />
            <span>VISUAL PORTFOLIO</span>
          </motion.div>

          <motion.h1 
            className="umami-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            THE SIGDI GALLERY
          </motion.h1>

          <motion.p
            className="gallery-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            A curated photographic journey through royal nuptials, serene heritage stays, and legendary live hearth dining.
          </motion.p>
        </div>

        {/* Scalloped teeth wave divider */}
        <div className="umami-scallop-divider">
          <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="scallop-pattern-svg">
            <defs>
              <pattern id="scallop-teeth-gallery" x="0" y="0" width="36" height="28" patternUnits="userSpaceOnUse">
                <path d="M 0,28 Q 18,0 36,28 Z" fill="#080808" />
              </pattern>
            </defs>
            <rect width="100%" height="28" fill="url(#scallop-teeth-gallery)" />
          </svg>
        </div>
      </section>

      {/* 2. FRAMER ANIMATED SCROLL GALLERY (3x3 EXPANSION ZOOM) */}
      <AnimatedScrollGallery
        images={scrollGalleryImages}
        gap={24}
        padding={32}
        radius={22}
        pinDistance={260}
        backgroundColor="#080808"
        onSelectImage={(item) => {
          const foundIdx = initialGalleryImages.findIndex(img => img.id === item.id);
          if (foundIdx !== -1) {
            handleOpenLightbox(foundIdx);
          }
        }}
      />



      {/* 3. FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && initialGalleryImages[activeLightboxIndex] && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close-btn" 
                onClick={handleCloseLightbox}
                aria-label="Close image preview"
              >
                <X size={24} />
              </button>

              <button 
                type="button" 
                className="lightbox-nav-btn prev" 
                onClick={handlePrevPhoto}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="lightbox-image-container">
                <img 
                  src={initialGalleryImages[activeLightboxIndex].image} 
                  alt={initialGalleryImages[activeLightboxIndex].title} 
                  className="lightbox-full-image"
                />
                <div className="lightbox-caption">
                  <div className="lightbox-caption-tag">
                    {initialGalleryImages[activeLightboxIndex].category}
                  </div>
                  <h3 className="lightbox-caption-title">
                    {initialGalleryImages[activeLightboxIndex].title}
                  </h3>
                  {initialGalleryImages[activeLightboxIndex].description && (
                    <p className="lightbox-caption-text">
                      {initialGalleryImages[activeLightboxIndex].description}
                    </p>
                  )}
                  <div className="lightbox-counter">
                    {activeLightboxIndex + 1} / {initialGalleryImages.length}
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                className="lightbox-nav-btn next" 
                onClick={handleNextPhoto}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
