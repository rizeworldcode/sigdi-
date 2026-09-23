import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const projects = [
  {
    id: 'royal-wedding-stage',
    title: 'Royal Wedding Stage & Varmala Setup',
    location: 'Grand Stage & Lawns, Sigdi Resort Alwar',
    year: '(2025)',
    image: '/hero/sigdi 5.png',
  },
  {
    id: 'royal-mandap-lounge',
    title: 'Royal Mandap & VIP Lawn Lounge',
    location: 'Central Celebration Lawns, Sigdi Resort Alwar',
    year: '(2025)',
    image: '/hero/sigdi 6.png',
  },
  {
    id: 'lawn-buffet-catering',
    title: 'Grand Lawn Buffet & Royal Catering',
    location: 'Open-Air Banquet Lawns, Sigdi Resort Alwar',
    year: '(2025)',
    image: '/hero/sigdi 7.png',
  }
];

function BetterParallaxCard({ project, index, total }) {
  const cardRef = useRef(null);

  // Parallax tracking relative to viewport entry & exit (matching Framer Better Parallax spec)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Silky smooth inertia spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001
  });

  // Better Parallax travel: Overscan is 24%, shift from -14% to +14%
  const translateY = useTransform(smoothProgress, [0, 1], ["-14%", "14%"]);

  const formattedIndex = String(index + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <motion.article
      ref={cardRef}
      className="better-parallax-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      aria-label={project.title}
    >
      {/* Better Parallax Mask Container */}
      <div className="better-parallax-media-container">
        <motion.div 
          className="better-parallax-media-inner"
          style={{ y: translateY }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="better-parallax-img"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </motion.div>

        {/* Cinematic Vignette Overlays */}
        <div className="better-parallax-overlay-top" />
        <div className="better-parallax-overlay-bottom" />
        <div className="better-parallax-ambient-sheen" />
      </div>

      {/* Floating Header Badges */}
      <div className="better-parallax-header">
        <div className="better-parallax-meta-pill">
          <span className="better-parallax-index">{formattedIndex} / {formattedTotal}</span>
          <span className="better-parallax-dot" />
          <span className="better-parallax-location">{project.location}</span>
        </div>
        <div className="better-parallax-year-pill">
          <span>{project.year}</span>
        </div>
      </div>

      {/* Bottom Editorial Content */}
      <div className="better-parallax-footer">
        <div className="better-parallax-info">
          <div className="better-parallax-kicker">
            <Sparkles size={13} className="better-parallax-sparkle" />
            <span>REALIZATION • ALWAR</span>
          </div>
          <h3 className="better-parallax-title">{project.title}</h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function CelebrationsPortfolio() {
  return (
    <section id="projects" className="portfolio-section-6">
      <div className="container">
        {/* Top Tag on Far Right as seen in Screenshot 6 */}
        <div className="portfolio-tag-row-6">
          <div className="portfolio-tag-pill">
            <span className="portfolio-live-dot" />
            <span className="portfolio-tag-text-6">[03 REALIZATIONS]</span>
          </div>
        </div>

        {/* Headline Row */}
        <div className="portfolio-header-row-6">
          <motion.h2
            className="portfolio-headline-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Signature celebrations we've had the <span className="highlight-pink-6">privilege to host.</span>
          </motion.h2>

          <motion.p
            className="portfolio-subtext-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            From royal Rajasthan weddings to high-energy corporate galas—<br />
            your perfect event awaits at Sigdi Resort Alwar.
          </motion.p>
        </div>

        {/* Better Parallax Cards Flow */}
        <div className="better-parallax-stack">
          {projects.map((project, idx) => (
            <BetterParallaxCard
              key={project.id}
              project={project}
              index={idx}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
