import React from 'react';
import { motion } from 'framer-motion';
import AnimatedScrollGallery from '../components/AnimatedScrollGallery';

// User's 9 Unique Curated Gallery Images
const initialGalleryImages = [
  {
    id: 1,
    title: 'Grand Sigdi Celebration',
    category: 'Celebrations',
    image: '/hero/gallery 1.png',
    description: 'Bespoke event decor and royal celebration lawn ambience.'
  },
  {
    id: 2,
    title: 'Festive Illumination & Decor',
    category: 'Decor',
    image: '/hero/gallery 2.png',
    description: 'Enchanting floral installations and celebratory setup.'
  },
  {
    id: 3,
    title: 'Heritage Courtyard & Stage',
    category: 'Celebrations',
    image: '/hero/gallery 3.png',
    description: 'Palatial stage backdrop and ceremonial seating.'
  },
  {
    id: 4,
    title: 'Resort Lawns & Lighting',
    category: 'Resort',
    image: '/hero/gallery 4.png',
    description: 'Vibrant evening celebrations and luminous night ambience.'
  },
  {
    id: 5,
    title: 'Royal Ambiance & Hospitality',
    category: 'Resort',
    image: '/hero/gallery 5.png',
    description: 'Warm Rajasthani hospitality and cherished guest memories.'
  },
  {
    id: 6,
    title: 'Palatial Garden Walkways',
    category: 'Resort',
    image: '/hero/sigdi 2.png',
    description: 'Picturesque landscaped pathways surrounded by flora.'
  },
  {
    id: 7,
    title: 'Royal Nuptial Celebration',
    category: 'Celebrations',
    image: '/hero/sigdi 6.png',
    description: 'Grand celebration lawn catering royal weddings.'
  },
  {
    id: 8,
    title: 'Live Hearth Dining Experience',
    category: 'Dining',
    image: '/hero/sigdi 12.png',
    description: 'Signature live charcoal hearth feast under the stars.'
  },
  {
    id: 9,
    title: 'Open-Air Evening Canopy',
    category: 'Dining',
    image: '/hero/sigdi 13.png',
    description: 'Serene alfresco dining under warm ambient canopies.'
  }
];

// Exactly 9 Unique Tiles for the 3x3 Animated Grid
const scrollGalleryImages = [
  initialGalleryImages[1], // Tile 0: gallery 2.png
  initialGalleryImages[2], // Tile 1: gallery 3.png
  initialGalleryImages[3], // Tile 2: gallery 4.png
  initialGalleryImages[5], // Tile 3: sigdi 2.png
  initialGalleryImages[0], // Tile 4 (CENTER HERO): gallery 1.png
  initialGalleryImages[6], // Tile 5: sigdi 6.png
  initialGalleryImages[4], // Tile 6: gallery 5.png
  initialGalleryImages[7], // Tile 7: sigdi 12.png
  initialGalleryImages[8]  // Tile 8: sigdi 13.png
];

export default function GalleryPage({ onOpenBooking, onNavigate }) {
  return (
    <div className="page-view gallery-page-view">
      {/* 1. HERO BANNER */}
      <section className="umami-hero-section" style={{ backgroundImage: "url('/hero/gallery 1.png')" }}>
        <div className="umami-hero-overlay" />
        <div className="umami-hero-inner">
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
      />
    </div>
  );
}
