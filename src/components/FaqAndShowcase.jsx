import React, { useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqList = [
  {
    q: 'Where is Sigdi Resort located?',
    a: 'Sigdi Resort is conveniently located at 2nd Gate, Towards Sadar Thana Road, near Telco Circle, opposite Harish Hospital, Bhagwanpura, Alwar, Rajasthan 301001.'
  },
  {
    q: 'What types of events can we host at Sigdi Resort?',
    a: 'We host Royal Weddings, Ring Ceremonies, Anniversaries, Corporate Events & Parties, Birthday Galas, and Sangeet celebrations on our grand landscaped lawns and banquet spaces.'
  },
  {
    q: 'Do you provide deluxe rooms for overnight guest stay?',
    a: 'Yes, we provide comfortable Deluxe AC Rooms equipped with double air conditioning, king-size beds, 24/7 room service, and modern amenities with nightly prices starting around ₹965 - ₹1,263/night.'
  },
  {
    q: 'What dining and catering options are offered?',
    a: 'Our signature Sigdi restaurant and on-site banqueting team offer live charcoal-grilled delicacies, authentic tandoor specialties, rich North Indian curries, and customized royal wedding buffets.'
  },
  {
    q: 'How can we check date availability or book the resort?',
    a: 'You can call or WhatsApp us directly at +91\u00A063778\u00A020199 (063778\u00A020199), email sigdiresorts@gmail.com, or submit an inquiry using our online reservation form.'
  },
  {
    q: 'Is parking and on-site management provided for large events?',
    a: 'Yes, we have generous parking space for buses and cars, 24/7 security, and an experienced event management team under @rizeworld to ensure seamless execution.'
  }
];

const igImages = [
  { src: '/hero/sigdi 1.png', alt: 'Luxury floral celebration 1', likes: '1.4k' },
  { src: '/hero/sigdi 2.png', alt: 'Royal wedding floral ceremony 2', likes: '2.8k' },
  { src: '/hero/sigdi 3.png', alt: 'Birthday and party floral setup 3', likes: '3.1k' },
  { src: '/hero/segdi 4.png', alt: 'Grand botanical floral installation 4', likes: '980' },
  { src: '/hero/sigdi 5.png', alt: 'Opulent wedding reception decor 5', likes: '2.2k' },
  { src: '/hero/sigdi 7.png', alt: 'Luxury evening event gala 7', likes: '1.9k' }
];

export default function FaqAndShowcase() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-showcase-section" id="faq">
      <div className="container">
        <div className="faq-showcase-grid">
          {/* Left Column: FAQ */}
          <div className="faq-column">
            {/* Top Pink Line with drawing animation */}
            <motion.div 
              className="section-pink-divider-line" 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
            
            {/* Right-aligned tag */}
            <div className="section-col-tag-right">
              <span>(07 FAQ)</span>
            </div>

            {/* Headline */}
            <motion.h2 
              className="faq-headline"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              Common<br />
              <span className="highlight-pink-text">questions.</span>
            </motion.h2>

            {/* Accordion List */}
            <div className="accordion-list">
              {faqList.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div 
                    key={idx} 
                    className={`accordion-item ${isOpen ? 'open' : ''}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <button 
                      className="accordion-trigger" 
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={`accordion-question ${isOpen ? 'question-active' : ''}`}>
                        {item.q}
                      </span>
                      <motion.span 
                        className="accordion-chevron"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ChevronDown size={20} strokeWidth={2} color={isOpen ? "#000000" : "#777777"} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          className="accordion-motion-wrapper"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="accordion-answer">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Follow Along */}
          <div className="showcase-column">
            {/* Top Pink Line with drawing animation */}
            <motion.div 
              className="section-pink-divider-line" 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
            
            {/* Right-aligned tag */}
            <div className="section-col-tag-right">
              <span>(08 FOLLOW ALONG)</span>
            </div>

            {/* Headline */}
            <motion.h2 
              className="showcase-headline"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Follow the<br />
              <span className="highlight-pink-text">latest celebrations.</span>
            </motion.h2>

            {/* Instagram Handle with hover effect */}
            <div className="showcase-handle-wrapper">
              <motion.a 
                href="https://www.instagram.com/sigdiresort?stkn=MWd0Y3hzcmxoZGNtcw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="showcase-handle"
                whileHover={{ x: 4, color: "var(--color-pink)" }}
                transition={{ duration: 0.2 }}
              >
                @sigdiresort
              </motion.a>
            </div>

            {/* 3x2 Photo Grid with hover overlay */}
            <div className="showcase-grid-3x2">
              {igImages.map((img, idx) => (
                <motion.a 
                  key={idx} 
                  href="https://www.instagram.com/sigdiresort?stkn=MWd0Y3hzcmxoZGNtcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-photo-card"
                  style={{ display: 'block', textDecoration: 'none' }}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  
                  {/* Subtle Instagram hover overlay */}
                  <motion.div 
                    className="showcase-hover-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="overlay-badge">
                      <Heart size={14} fill="#fff" color="#fff" />
                      <span>{img.likes}</span>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
