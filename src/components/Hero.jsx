import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// List of hero background images that rotate automatically
export const HERO_IMAGES = [
  '/hero/hero 5.png',
  '/hero/hero 1.png',
  '/hero/hero 2.png',
  '/hero/hero 3.png',
  '/hero/hero 4.png',
];

export default function Hero({ onOpenBooking, images = HERO_IMAGES, intervalTime = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeImages = images && images.length > 0 ? images : HERO_IMAGES;

  // Preload all slides in advance for instant buttery-smooth transitions
  useEffect(() => {
    activeImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [activeImages]);

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeImages.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeImages.length, intervalTime]);

  const { scrollY } = useScroll();

  // Scroll parallax effects matching Framer template
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.12]);
  const opacityContent = useTransform(scrollY, [0, 450], [1, 0.15]);
  const yContent = useTransform(scrollY, [0, 450], [0, -60]);

  return (
    <section className="hero-section">
      <div className="hero-background-wrapper">
        <AnimatePresence mode="sync">
          <motion.img
            key={activeImages[currentIndex]}
            src={activeImages[currentIndex]}
            alt={`Sigdi Resort Alwar - Slide ${currentIndex + 1}`}
            className="hero-image"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              y: yBg
            }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
        <div className="hero-bottom-fade"></div>
      </div>

      <motion.div
        className="hero-content container"
        style={{ opacity: opacityContent, y: yContent }}
      >
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            <motion.span
              className="title-row-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              SAY "I DO" IN STYLE
            </motion.span>

            <motion.div
              className="title-row-pink-badge"
              initial={{ opacity: 0, y: 55, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.05, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="pink-highlight-box" style={{ whiteSpace: 'nowrap' }}>
                HOST • CELEBRATE • STAY • DINE
              </span>
            </motion.div>
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
