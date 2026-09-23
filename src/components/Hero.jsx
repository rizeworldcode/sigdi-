import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const { scrollY } = useScroll();

  // Scroll parallax effects matching Framer template
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.12]);
  const opacityContent = useTransform(scrollY, [0, 450], [1, 0.15]);
  const yContent = useTransform(scrollY, [0, 450], [0, -60]);

  return (
    <section className="hero-section">
      <div className="hero-background-wrapper">
        <motion.img
          src="/images/hero.png"
          alt="Sigdi Resort Alwar - Say I Do In Style"
          className="hero-image"
          style={{ y: yBg, scale: scaleBg }}
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
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
