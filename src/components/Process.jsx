import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="process" className="process-section-9">
      <div className="container">
        
        {/* Header Row Matching Framer Design */}
        <div className="process-header-row-9">
          <motion.h2 
            className="process-headline-9"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="headline-line-1">From your first inquiry</span>
            <span className="headline-line-2">
              to the <span className="highlight-pink-9">grand celebration.</span>
            </span>
          </motion.h2>

          <motion.p 
            className="process-subhead-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            A seamless 4-step hospitality experience at Sigdi Resort Alwar.
          </motion.p>
        </div>

        {/* 4-Card Photographic Grid */}
        <div className="process-rows-container-9">
          
          {/* Top Row: Card 1 (Discover & Reserve) + Card 2 (Stage & Decor Concept) */}
          <div className="process-row-9 process-row-top-9">
            <motion.div 
              className="process-card-9 process-card-wide-9"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-img-wrap-9">
                <img 
                  src="/hero/sigdi 8.png" 
                  alt="Wedding consultation and lawn reservation at Sigdi Resort Alwar" 
                  loading="lazy" 
                />
                <div className="process-vignette-top-9"></div>
                <div className="process-vignette-bottom-9"></div>

                <div className="process-top-num-9">
                  <span>(01)</span>
                </div>

                <div className="process-bottom-content-9">
                  <h3 className="process-card-title-9">Discover & Reserve</h3>
                  <p className="process-card-desc-9">
                    Connect with our event team to reserve your auspicious date, wedding lawn, banquet hall, or deluxe AC guest room block.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="process-card-9 process-card-narrow-9"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-img-wrap-9">
                <img 
                  src="/hero/sigdi 9.png" 
                  alt="Stage design and illuminated tunnel entrance decor at Sigdi Resort" 
                  loading="lazy" 
                />
                <div className="process-vignette-top-9"></div>
                <div className="process-vignette-bottom-9"></div>

                <div className="process-top-num-9">
                  <span>(02)</span>
                </div>

                <div className="process-bottom-content-9">
                  <h3 className="process-card-title-9">Decor & Scenography</h3>
                  <p className="process-card-desc-9">
                    Curate royal floral mandaps, our signature illuminated tunnel walkway, royal sofa stages, and ambient evening lighting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Card 3 (Sigdi Hearth Catering) + Card 4 (Grand Celebration) */}
          <div className="process-row-9 process-row-bottom-9">
            <motion.div 
              className="process-card-9 process-card-narrow-9"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-img-wrap-9">
                <img 
                  src="/hero/sigdi 10.png" 
                  alt="Authentic live Sigdi hearth catering and royal buffet" 
                  loading="lazy" 
                />
                <div className="process-vignette-top-9"></div>
                <div className="process-vignette-bottom-9"></div>

                <div className="process-top-num-9">
                  <span>(03)</span>
                </div>

                <div className="process-bottom-content-9">
                  <h3 className="process-card-title-9">Sigdi Hearth Cuisine</h3>
                  <p className="process-card-desc-9">
                    Taste authentic charcoal-grilled delicacies, live tandoor counters, rich North Indian curries, and customized wedding banquets.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="process-card-9 process-card-wide-9"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-img-wrap-9">
                <img 
                  src="/hero/sigdi 11.png" 
                  alt="Flawless grand celebration and luxury stay at Sigdi Resort Alwar" 
                  loading="lazy" 
                />
                <div className="process-vignette-top-9"></div>
                <div className="process-vignette-bottom-9"></div>

                <div className="process-top-num-9">
                  <span>(04)</span>
                </div>

                <div className="process-bottom-content-9">
                  <h3 className="process-card-title-9">Flawless Celebration</h3>
                  <p className="process-card-desc-9">
                    Relax as @rizeworld management handles every minute detail, leaving you and your guests free to celebrate in style.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

