import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CtaBanner({ onOpenBooking, onNavigate }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 1.1]);

  // Dynamic scale & depth: card becomes smaller/bigger as user scrolls up/down
  const scaleCard = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1.04, 0.82]);
  const opacityCard = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.45, 0.95, 1, 0.95, 0.45]);
  const yCard = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  return (
    <section className="cta-banner-section-12" ref={containerRef}>
      <div className="cta-banner-wrapper-12">
        {/* Background Terrace Floral Image with Parallax */}
        <div className="cta-bg-overflow-wrap">
          <motion.img 
            src="/hero/sigdi 6.png" 
            alt="Dreamy floral villa terrace background" 
            className="cta-bg-image-12"
            loading="lazy"
            style={{ y: yBg, scale: scaleBg }}
          />
        </div>

        {/* Frosted Glass Floating Card with dynamic scroll scale */}
        <motion.div 
          className="cta-glass-card-12"
          style={{
            scale: scaleCard,
            opacity: opacityCard,
            y: yCard,
          }}
          whileHover={{ scale: 1.06, boxShadow: "0 30px 75px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.25 }}
        >
          <div className="cta-tag-12">
            <span>[06 HOST WITH US]</span>
          </div>

          <h2 className="cta-title-12">
            <span className="cta-title-black-12">Host your dream celebration at Sigdi Resort Alwar.</span>
            <span className="cta-title-badge-wrap-12">
              <span className="cta-pink-badge-12">Say "I Do" in style.</span>
            </span>
          </h2>

          <p className="cta-description-12">
            From royal wedding ceremonies and vibrant ring celebrations to corporate meets and deluxe AC resort stays near Telco Circle Alwar — your unforgettable experience begins here. Call: <a href="tel:+916377820199" style={{ whiteSpace: 'nowrap', color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>+91 63778 20199</a>.
          </p>

          <motion.button 
            onClick={(e) => {
              e?.preventDefault?.();
              if (onNavigate) {
                onNavigate('contact');
              } else if (onOpenBooking) {
                onOpenBooking();
              }
            }} 
            className="cta-book-btn-12"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              className="btn-arrow-12"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
            <span>Reserve Date / Book Stay</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
