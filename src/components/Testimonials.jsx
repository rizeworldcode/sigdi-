import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    quote: "Nice place for family and kids. 5 star for dining, 5 star for food, 5 star for rooms. Best space for private and kitty parties. Nice atmosphere, decent staff. Special thanks to Mr. Vipul Ji for his polite and helpful nature.",
    author: "Narendra Singh Rajput",
    category: "Google Review • Family & Dining",
    rating: 5
  },
  {
    quote: "Best place for marriage or any event. The resort is very nice with neat and clean rooms. It is definitely the best resort in Alwar.",
    author: "Sonit Yadav",
    category: "Google Review • Marriage & Events",
    rating: 5
  },
  {
    quote: "Wedding decoration is very nice and food is also good. It is the best marriage garden in Alwar with excellent ambiance.",
    author: "Aman Roney",
    category: "Google Review • Wedding Decoration",
    rating: 5
  },
  {
    quote: "The location is peaceful and perfect for relaxing. The service was good, and everything was thoroughly well organized.",
    author: "Komal Saini",
    category: "Google Review • Peaceful Stay",
    rating: 5
  },
  {
    quote: "Sigdi Resort is one of the best resorts in Alwar. Very calm place with nice rooms and a large open garden.",
    author: "Yash Khandelwal",
    category: "Google Review • Rooms & Garden",
    rating: 5
  },
  {
    quote: "Rooms and garden are nice. A very good choice among resorts in Alwar for family functions and stays.",
    author: "Shaffy Manchanda",
    category: "Google Review • Resort Stay",
    rating: 5
  },
  {
    quote: "Nice ambience, great location, and very family friendly atmosphere. Great experience with the staff.",
    author: "Amit Kumar",
    category: "Google Review • Family Gathering",
    rating: 5
  }
];

export default function Testimonials() {
  const renderCard = (item, key) => (
    <div key={key} className="testimonial-card-11">
      <div>
        {/* 5 Star Rating Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
          {[...Array(item.rating || 5)].map((_, i) => (
            <span key={i} style={{ color: '#FFB800', fontSize: '15px' }}>★</span>
          ))}
        </div>

        <p className="card-quote-text-11">
          "{item.quote}"
        </p>
      </div>

      <div className="card-author-row-11">
        <div className="author-info-col-11">
          <strong className="author-name-11">{item.author}</strong>
          <span className="author-role-11">{item.category}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials-pink-section-11">
      {/* Curved organic cutout on the right edge */}
      <div className="pink-section-curve-cutout" aria-hidden="true"></div>

      <div className="container testimonials-container-11">
        {/* Header Row */}
        <div className="testimonials-header-11">
          <div className="testimonials-title-wrap-11">
            <motion.h2 
              className="testimonials-headline-11"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="title-dark-11">Words that stay</span>
              <span className="title-white-11">with us.</span>
            </motion.h2>
          </div>

          <div className="testimonials-subhead-wrap-11">
            <motion.span 
              className="testimonials-tag-11"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              [ 05 GOOGLE REVIEWS • AUTO SCROLL ]
            </motion.span>
            
            <motion.p 
              className="testimonials-subtext-11"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Real experiences from our valued guests.<br />
              Hover any card to pause and read.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Full-width continuous auto-scrolling marquee across the entire screen */}
      <motion.div 
        className="testimonials-cards-outer-11"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="testimonials-marquee-track">
          {/* Primary Group */}
          <div className="testimonials-cards-group-11">
            {testimonialsData.map((item, idx) => renderCard(item, `g1-${idx}`))}
          </div>

          {/* Seamless Duplicate Group for Infinite Loop */}
          <div className="testimonials-cards-group-11" aria-hidden="true">
            {testimonialsData.map((item, idx) => renderCard(item, `g2-${idx}`))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
