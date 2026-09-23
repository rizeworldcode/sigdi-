import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const wordsPhrase1 = [
  "From", "royal", "wedding", "vows", "to", "grand", "celebrations", "—"
];

const wordsPhrase2 = [
  "we", "craft", "an", "unforgettable", "luxury", "experience", "in", "Alwar."
];

function WordReveal({ children, progress, range, isPink }) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <motion.span 
      style={{ opacity, y }} 
      className={`intro-word ${isPink ? 'pink-accent-word' : 'dark-word'}`}
    >
      {children}{' '}
    </motion.span>
  );
}

export default function PhilosophyIntro() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "start 0.2"]
  });

  const totalWords = wordsPhrase1.length + wordsPhrase2.length;

  const yArch = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section id="about" className="philosophy-section-2" ref={sectionRef}>
      <div className="container philosophy-container-2">
        <div className="philosophy-grid-2">
          
          {/* Left Column: Arched Floral Walkway Image (comes from LEFT) */}
          <motion.div 
            className="philosophy-image-col-2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="philosophy-arch-wrapper"
              style={{ y: yArch }}
            >
              <motion.img 
                src="/hero/sigdi 4.png" 
                alt="Luxury chandelier and canopy at Sigdi Resort" 
                className="philosophy-arch-img-2"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Top Pink Line, Tag, Headline & Body (comes from RIGHT) */}
          <motion.div 
            className="philosophy-content-col-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Pink Line with [ 01 SIGDI RESORT ] tag on far right */}
            <motion.div 
              className="philosophy-top-divider-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            >
              <div className="top-pink-line"></div>
              <div className="tag-row-right">
                <span className="philosophy-tag-text">[01 SIGDI RESORT]</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <h2 className="philosophy-headline-2">
              <span className="headline-phrase-dark">
                {wordsPhrase1.map((word, idx) => {
                  const start = idx / totalWords;
                  const end = start + (1 / totalWords);
                  return (
                    <WordReveal 
                      key={`w1-${idx}`} 
                      progress={scrollYProgress} 
                      range={[start, end]}
                      isPink={false}
                    >
                      {word}
                    </WordReveal>
                  );
                })}
              </span>{' '}
              <span className="headline-phrase-pink">
                {wordsPhrase2.map((word, idx) => {
                  const globalIdx = idx + wordsPhrase1.length;
                  const start = globalIdx / totalWords;
                  const end = start + (1 / totalWords);
                  return (
                    <WordReveal 
                      key={`w2-${idx}`} 
                      progress={scrollYProgress} 
                      range={[start, end]}
                      isPink={true}
                    >
                      {word}
                    </WordReveal>
                  );
                })}
              </span>
            </h2>

            {/* Description Paragraph */}
            <motion.p 
              className="philosophy-paragraph-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Managed by @rizeworld, Sigdi Resort Alwar is designed for life's most precious occasions. With grand illuminated entrances, royal open lawns, luxury AC rooms, and live hearth culinary experiences, your perfect event awaits.
            </motion.p>
          </motion.div>

        </div>

        {/* Bottom Right Floating Caption Note */}
        <div className="philosophy-bottom-row-2">
          <motion.div 
            className="bottom-right-note-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <p>
              Near Telco Circle, Sadar Thana Road, Alwar <br />
              4.1 ★ Google Rating · Deluxe AC Stays & Event Lawns
            </p>
          </motion.div>
        </div>

        {/* Bottom Section Pink Border Line */}
        <div className="philosophy-bottom-line-2"></div>
      </div>
    </section>
  );
}
