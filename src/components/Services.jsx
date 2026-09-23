import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="services-section-3">
      <div className="container services-container-3">
        
        {/* Asymmetrical 2-Column Staggered Layout as seen in Screenshot 3 & Video */}
        <div className="services-grid-3">
          
          {/* Left Column: Weddings (01) & Brand & Corporate (02) */}
          <div className="services-col-left-3">
            
            {/* Item 01: Weddings & Ring Ceremony (comes from LEFT) */}
            <motion.div 
              className="service-card-3"
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="service-pink-line-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
              />
              
              <div className="service-title-row-3">
                <h3 className="service-heading-3">Weddings & Ring Ceremony</h3>
                <span className="service-num-3">(01)</span>
              </div>

              <p className="service-desc-3">
                Say "I Do" in style. Grand illuminated tunnel entrance, royal sofa stages, floral mandaps, and varmala setups on sprawling landscaped lawns.
              </p>

              <div className="service-img-frame-3">
                <motion.img 
                  src="/hero/sigdi 2.png" 
                  alt="Weddings and Ring Ceremony at Sigdi Resort" 
                  loading="lazy" 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>

            {/* Item 02: Corporate Events & Parties (comes from LEFT) */}
            <motion.div 
              className="service-card-3 service-card-second-3"
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="service-pink-line-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
              />

              <div className="service-title-row-3">
                <h3 className="service-heading-3">Corporate Events & Parties</h3>
                <span className="service-num-3">(02)</span>
              </div>

              <p className="service-desc-3">
                Executive conferences, corporate galas, milestone anniversary bashes, and high-energy DJ lawn parties with state-of-the-art audiovisuals.
              </p>

              <div className="service-img-frame-3">
                <motion.img 
                  src="/hero/sigdi 3.png" 
                  alt="Corporate events and parties at Sigdi Resort" 
                  loading="lazy" 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>

          </div>

          {/* Right Column: Deluxe Stay & Hearth Dining (03) offset downwards (comes from RIGHT) */}
          <div className="services-col-right-3">
            
            {/* Item 03: Deluxe Stay & Hearth Dining */}
            <motion.div 
              className="service-card-3 service-card-stagger-3"
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="service-pink-line-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
              />

              <div className="service-title-row-3">
                <h3 className="service-heading-3">Deluxe Stay & Hearth Dining</h3>
                <span className="service-num-3">(03)</span>
              </div>

              <p className="service-desc-3">
                Deluxe AC rooms (from ₹965/night), 24/7 room service, and live charcoal Sigdi hearth dining with authentic North Indian & Rajasthani flavors.
              </p>

              <div className="service-img-frame-3">
                <motion.img 
                  src="/hero/sigdi 1.png" 
                  alt="Deluxe stay and dining at Sigdi Resort" 
                  loading="lazy" 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
