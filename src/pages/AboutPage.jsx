import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaFire } from 'react-icons/fa6';

/* 12-point Scalloped Starburst Rosette Badge Component */
function ScallopBadge({ children }) {
  return (
    <div className="scallop-badge-box">
      <svg viewBox="0 0 72 72" className="scallop-badge-svg" aria-hidden="true">
        <path 
          d="M 32.57 7.20 Q 36.00 4.00, 39.43 7.20 Q 42.86 10.40, 47.43 9.35 Q 52.00 8.29, 53.37 12.77 Q 54.74 17.26, 59.23 18.63 Q 63.71 20.00, 62.65 24.57 Q 61.60 29.14, 64.80 32.57 Q 68.00 36.00, 64.80 39.43 Q 61.60 42.86, 62.65 47.43 Q 63.71 52.00, 59.23 53.37 Q 54.74 54.74, 53.37 59.23 Q 52.00 63.71, 47.43 62.65 Q 42.86 61.60, 39.43 64.80 Q 36.00 68.00, 32.57 64.80 Q 29.14 61.60, 24.57 62.65 Q 20.00 63.71, 18.63 59.23 Q 17.26 54.74, 12.77 53.37 Q 8.29 52.00, 9.35 47.43 Q 10.40 42.86, 7.20 39.43 Q 4.00 36.00, 7.20 32.57 Q 10.40 29.14, 9.35 24.57 Q 8.29 20.00, 12.77 18.63 Q 17.26 17.26, 18.63 12.77 Q 20.00 8.29, 24.57 9.35 Q 29.14 10.40, 32.57 7.20 Z" 
          fill="var(--color-pink-accent, #111111)" 
        />
      </svg>
      <div className="scallop-badge-icon">
        {children}
      </div>
    </div>
  );
}

export default function AboutPage({ onOpenBooking, onNavigate }) {

  return (
    <div className="page-view umami-contact-page about-editorial-page">
      {/* 1. HERO BANNER: "ABOUT SIGDI RESORT" with Scalloped Bottom Divider */}
      <section className="umami-hero-section" style={{ backgroundImage: "url('/hero/sigdi 1.png')" }}>
        <div className="umami-hero-overlay" />
        <div className="umami-hero-inner">
          <motion.h1 
            className="umami-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ABOUT SIGDI RESORT
          </motion.h1>
        </div>

        {/* Scalloped teeth wave divider */}
        <div className="umami-scallop-divider">
          <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="scallop-pattern-svg">
            <defs>
              <pattern id="scallop-teeth-about" x="0" y="0" width="36" height="28" patternUnits="userSpaceOnUse">
                <path d="M 0,28 Q 18,0 36,28 Z" fill="#050505" />
              </pattern>
            </defs>
            <rect width="100%" height="28" fill="url(#scallop-teeth-about)" />
          </svg>
        </div>
      </section>

      {/* 2. SECTION: "ALWAR'S PREMIER DESTINATION" with 4-Quadrant Milestone Grid & 3 Arched Photos */}
      <section className="umami-experience-section">
        <div className="container">
          <div className="umami-experience-header">
            <motion.h2 
              className="umami-experience-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              HOST • CELEBRATE • STAY • DINE
            </motion.h2>
            <p className="umami-experience-sub">
              Managed by @rizeworld, Sigdi Resort Alwar combines royal Rajasthani warmth with premier celebration lawns, illuminated walkways, comfortable deluxe AC rooms, and authentic live hearth dining.
            </p>
          </div>

          {/* 3 Arched Photos */}
          <div className="umami-food-trio-row about-lifestyle-trio">
            <motion.div 
              className="food-arch-card tilt-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, rotate: -1 }}
            >
              <img src="/hero/sigdi 1.png" alt="Sigdi Resort Grand Lawn & Celebrations" />
            </motion.div>

            <motion.div 
              className="food-arch-card straight-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <img src="/hero/sigdi 7.png" alt="Sigdi Resort Live Hearth Dining & Buffets" />
            </motion.div>

            <motion.div 
              className="food-arch-card tilt-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, rotate: 1 }}
            >
              <img src="/hero/sigdi 10.png" alt="Sigdi Resort Stage & Illumination Setup" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* 4. SECTION: OUR CORE PILLARS (3 Cards matching Screenshots) */}
      <section className="page-section container" style={{ padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h2 className="umami-experience-title">
            THE SIGDI COMMITMENT
          </h2>
          <p className="umami-experience-sub" style={{ color: '#aaaaaa' }}>
            The three pillars of hospitality that define every celebration at Sigdi Resort.
          </p>
        </div>

        <div className="umami-contact-trio-cards">
          {/* Card 1 */}
          <motion.div className="umami-info-card" whileHover={{ y: -6 }}>
            <ScallopBadge>
              <FaHeart size={24} color="#ffffff" />
            </ScallopBadge>
            <span className="info-card-lbl">Say "I Do" In Style</span>
            <h3 className="info-card-val">ROYAL WEDDINGS</h3>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="umami-info-card" whileHover={{ y: -6 }}>
            <ScallopBadge>
              <FaStar size={24} color="#ffffff" />
            </ScallopBadge>
            <span className="info-card-lbl">Guest Hospitality</span>
            <h3 className="info-card-val">4.1 ★ DELUXE STAY</h3>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="umami-info-card" whileHover={{ y: -6 }}>
            <ScallopBadge>
              <FaFire size={24} color="#ffffff" />
            </ScallopBadge>
            <span className="info-card-lbl">Signature Cuisine</span>
            <h3 className="info-card-val">LIVE HEARTH DINE</h3>
          </motion.div>
        </div>
      </section>

      {/* 5. SECTION: MANAGEMENT MESSAGE & CTA CARD */}
      <section className="page-section container" style={{ padding: '0 24px 100px' }}>
        <div style={{ background: '#141414', borderRadius: '32px', padding: 'clamp(28px, 5vw, 50px) clamp(18px, 4vw, 40px)', maxWidth: '1140px', margin: '0 auto', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#aaaaaa', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            MANAGEMENT WELCOME
          </span>
          <h2 style={{ fontFamily: "'Coolvetica', sans-serif", fontSize: '40px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '20px' }}>
            "YOUR PERFECT EVENT AWAITS AT SIGDI"
          </h2>
          <p style={{ fontSize: '17px', color: '#dddddd', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 30px', fontStyle: 'italic' }}>
            "At Sigdi Resort, we believe life's most precious occasions deserve a grand setting. From the romantic glow of our illuminated tunnel entrance to our manicured celebration lawns, deluxe AC rooms, and the rich aroma of our charcoal hearth cuisine, we are committed to hosting your celebrations with royal Rajasthani warmth."
          </p>
          <p style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Management Team — Sigdi Resort Alwar (@rizeworld Managed)
          </p>

          <button 
            onClick={() => onNavigate('contact')}
            className="umami-reserve-btn"
            style={{ maxWidth: '320px', margin: '30px auto 0', padding: '16px 30px' }}
          >
            <span>CONNECT WITH SIGDI RESORT</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

