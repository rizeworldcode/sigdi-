import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFire, FaWineGlass, FaLocationDot, FaArrowRight, FaWhatsapp } from 'react-icons/fa6';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

/* 12-point Scalloped Starburst Rosette Badge Component matching Contact Page */
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

export default function RestaurantPage({ onOpenBooking }) {
  const [reservation, setReservation] = useState({
    area: '',
    guests: '',
    date: '',
    time: '',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);

    const message =
      `*New Table Reservation - Sigdi Resort Restaurant*
---------------------------------------
ðŸ‘¤ *Name:* ${reservation.fullName || 'N/A'}
ðŸ“§ *Email:* ${reservation.email || 'N/A'}
ðŸ“ž *Phone:* ${reservation.phone || 'N/A'}
ðŸ½ï¸ *Dining Area:* ${reservation.area || 'N/A'}
ðŸ‘¥ *Guests:* ${reservation.guests || 'N/A'}
ðŸ“… *Date:* ${reservation.date || 'N/A'}
â° *Time:* ${reservation.time || 'N/A'}
---------------------------------------
_Sent via Sigdi Resort Website Restaurant Form_`;

    const whatsappUrl = `https://wa.me/916377820199?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-view umami-contact-page restaurant-lounge-page">
      {/* 1. HERO BANNER: "CHARCOAL HEARTH & DINING" with Scalloped Bottom Divider */}
      <section className="umami-hero-section" style={{ backgroundImage: "url('/hero/sigdi 14.png')" }}>
        <div className="umami-hero-overlay" />
        <div className="umami-hero-inner">
          <motion.h1
            className="umami-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            CHARCOAL HEARTH & DINING
          </motion.h1>
        </div>

        {/* Scalloped teeth wave divider */}
        <div className="umami-scallop-divider">
          <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="scallop-pattern-svg">
            <defs>
              <pattern id="scallop-teeth-restaurant" x="0" y="0" width="36" height="28" patternUnits="userSpaceOnUse">
                <path d="M 0,28 Q 18,0 36,28 Z" fill="#050505" />
              </pattern>
            </defs>
            <rect width="100%" height="28" fill="url(#scallop-teeth-restaurant)" />
          </svg>
        </div>
      </section>

      {/* 2. SECTION: "STEP INTO FLAME GASTRONOMY" with 4-Quadrant Timing Grid & 3 Arched Food Cards */}
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
              STEP INTO FLAME GASTRONOMY
            </motion.h2>
            <p className="umami-experience-sub">
              Where heritage white binchotan embers and delicate edible botanical pairings converge inside a dramatic conservatory setting.
            </p>
          </div>

          {/* 3 Arched Food Cards (Tilted Left, Straight Center, Tilted Right) */}
          <div className="umami-food-trio-row">
            <motion.div
              className="food-arch-card tilt-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, rotate: -1 }}
            >
              <img src="/hero/food 1.png" alt="Smoked Skewers over Sigdi Hearth" />
            </motion.div>

            <motion.div
              className="food-arch-card straight-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <img src="/hero/food 3.png" alt="Greenhouse Floral Conservatory Dining" />
            </motion.div>

            <motion.div
              className="food-arch-card tilt-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, rotate: 1 }}
            >
              <img src="/hero/food 4.png" alt="Artisanal Dining Appetizers" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: RESTAURANT & DINING ATMOSPHERE (sigdi 12.png, sigdi 13.png, sigdi 14.png) */}
      <section className="restaurant-gallery-showcase-section">
        <div className="container">
          <div className="umami-experience-header" style={{ marginBottom: '40px' }}>
            <motion.h2
              className="umami-experience-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              LIVE HEARTH & OPEN-AIR AMBIENCE
            </motion.h2>
            <p className="umami-experience-sub">
              Experience Rajasthan's finest charcoal flavors amidst tranquil garden canopies, ambient warm lighting, and royal culinary hospitality.
            </p>
          </div>

          <div className="restaurant-ambiance-grid">
            {/* Card 1: sigdi 12.png */}
            <motion.div 
              className="restaurant-ambiance-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="restaurant-ambiance-img-wrap">
                <img src="/hero/sigdi 12.png" alt="Sigdi Live Hearth Dining Experience" />
              </div>
            </motion.div>

            {/* Card 2: sigdi 13.png */}
            <motion.div 
              className="restaurant-ambiance-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="restaurant-ambiance-img-wrap">
                <img src="/hero/sigdi 13.png" alt="Open Air Garden Seating" />
              </div>
            </motion.div>

            {/* Card 3: sigdi 14.png */}
            <motion.div 
              className="restaurant-ambiance-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="restaurant-ambiance-img-wrap">
                <img src="/hero/sigdi 14.png" alt="Royal Dining Feast" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: "RESERVE YOUR TABLE" Floating White Card matching Contact Page */}
      <section className="umami-reserve-section">
        <div className="umami-reserve-backdrop-scrim" />
        <div className="container umami-reserve-content">
          <motion.h2
            className="umami-reserve-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            RESERVE YOUR HEARTH TABLE
          </motion.h2>

          {/* Floating White Reservation Card */}
          <motion.div
            className="umami-booking-white-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {isBooked ? (
              <div className="booking-completed-msg">
                <FiCheckCircle size={46} className="booked-check-icon" />
                <h3>Reservation Sent to WhatsApp!</h3>
                <p>
                  Your reservation for <strong>{reservation.guests}</strong> in the <strong>{reservation.area}</strong> on <strong>{reservation.date || 'your selected date'}</strong> at <strong>{reservation.time || '19:30'}</strong> has been sent directly to WhatsApp (<strong>+91 63778 20199</strong>).
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                  <a
                    href={`https://wa.me/916377820199?text=${encodeURIComponent(
                      `*Table Reservation - Sigdi Resort Restaurant*
---------------------------------------
ðŸ‘¤ *Name:* ${reservation.fullName || 'N/A'}
ðŸ“§ *Email:* ${reservation.email || 'N/A'}
ðŸ“ž *Phone:* ${reservation.phone || 'N/A'}
ðŸ½ï¸ *Dining Area:* ${reservation.area || 'N/A'}
ðŸ‘¥ *Guests:* ${reservation.guests || 'N/A'}
ðŸ“… *Date:* ${reservation.date || 'N/A'}
â° *Time:* ${reservation.time || 'N/A'}
---------------------------------------
_Sent via Sigdi Resort Website_`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="umami-reserve-btn"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <FaWhatsapp size={18} />
                    <span>OPEN IN WHATSAPP</span>
                  </a>
                  <button
                    onClick={() => setIsBooked(false)}
                    className="umami-reserve-btn"
                    style={{ background: 'transparent', color: 'inherit', border: '1px solid currentColor' }}
                  >
                    RESERVE ANOTHER TABLE →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="umami-booking-fields">
                <div className="field-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    value={reservation.fullName}
                    onChange={(e) => setReservation({ ...reservation, fullName: e.target.value })}
                  />
                </div>

                <div className="field-group">
                  <label>Email address</label>
                  <div className="input-with-icon">
                    <input
                      type="email"
                      required
                      value={reservation.email}
                      onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                    />
                    <FiMail size={16} className="field-end-icon" />
                  </div>
                </div>

                <div className="field-group">
                  <label>Phone number</label>
                  <input
                    type="tel"
                    required
                    value={reservation.phone}
                    onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                  />
                </div>

                <div className="fields-dual-row">
                  <div className="field-group">
                    <label>Dining Area</label>
                    <input
                      type="text"
                      value={reservation.area}
                      onChange={(e) => setReservation({ ...reservation, area: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label>Number of guests</label>
                    <input
                      type="text"
                      value={reservation.guests}
                      onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                    />
                  </div>
                </div>

                <div className="fields-dual-row">
                  <div className="field-group">
                    <label>Reservation date</label>
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                      value={reservation.date}
                      onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label>Reservation time</label>
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = 'time')}
                      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                      value={reservation.time}
                      onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="umami-reserve-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <FaWhatsapp size={18} />
                  <span>SEND TO WHATSAPP</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* 3 Contact Info Cards with Red/Pink Scalloped Starburst Badges */}
          <div className="umami-contact-trio-cards">
            {/* Card 1 */}
            <motion.div className="umami-info-card" whileHover={{ y: -6 }}>
              <ScallopBadge>
                <FaFire size={24} color="#ffffff" />
              </ScallopBadge>
              <span className="info-card-lbl">Signature Hearth</span>
              <h3 className="info-card-val">WHITE EMBERS</h3>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="umami-info-card" whileHover={{ y: -6 }}>
              <ScallopBadge>
                <FaWineGlass size={24} color="#ffffff" />
              </ScallopBadge>
              <span className="info-card-lbl">Botanical Sips</span>
              <h3 className="info-card-val">ARTISAN ELIXIRS</h3>
            </motion.div>

            {/* Card 3 */}
            <motion.div className="umami-info-card" whileHover={{ y: -6 }}>
              <ScallopBadge>
                <FaLocationDot size={24} color="#ffffff" />
              </ScallopBadge>
              <span className="info-card-lbl">Resort Location</span>
              <h3 className="info-card-val">ALWAR, RAJASTHAN</h3>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

