import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaLocationDot, FaLocationArrow, FaWhatsapp } from 'react-icons/fa6';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

/* 12-point Scalloped Starburst Rosette Badge Component matching Screenshot 1 */
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

export default function ContactPage() {
  const [reservation, setReservation] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: ''
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);

    const message =
      `*New Table Reservation Inquiry - Sigdi Resort*
---------------------------------------
👤 *Name:* ${reservation.fullName || 'N/A'}
📧 *Email:* ${reservation.email || 'N/A'}
📞 *Phone:* ${reservation.phone || 'N/A'}
👥 *Guests:* ${reservation.guests || 'N/A'}
📅 *Date:* ${reservation.date || 'N/A'}
⏰ *Time:* ${reservation.time || 'N/A'}
---------------------------------------
_Sent via Sigdi Resort Website Contact Form_`;

    const whatsappUrl = `https://wa.me/916377820199?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-view umami-contact-page">
      {/* 1. HERO BANNER: "CONTACT US" with eating lifestyle photo background (Screenshot 4) */}
      <section className="umami-hero-section" style={{ backgroundImage: "url('/hero/sigdi 10.png')" }}>
        <div className="umami-hero-overlay" />
        <div className="umami-hero-inner">
          <motion.h1
            className="umami-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            CONTACT US
          </motion.h1>
        </div>

        {/* Decorative Scalloped / Undulating Wave Bottom Border matching website background */}
        <div className="umami-scallop-divider">
          <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="scallop-pattern-svg">
            <defs>
              <pattern id="scallop-teeth" x="0" y="0" width="36" height="28" patternUnits="userSpaceOnUse">
                <path d="M 0,28 Q 18,0 36,28 Z" fill="#050505" />
              </pattern>
            </defs>
            <rect width="100%" height="28" fill="url(#scallop-teeth)" />
          </svg>
        </div>
      </section>

      {/* 2. SECTION: "STEP INTO PREMIUM EXPERIENCE" with Hours Box & 3 Arched Food Cards (Screenshot 2) */}
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
              STEP INTO PREMIUM EXPERIENCE
            </motion.h2>
            <p className="umami-experience-sub">
              Premium experience with a seamless blend of design, performance, and innovation crafted to elevate interaction
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
              whileHover={{ y: -6, rotate: -2 }}
            >
              <img src="/hero/food 2.png" alt="Crispy French Fries and Gourmet Burger" />
            </motion.div>

            <motion.div
              className="food-arch-card straight-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <img src="/hero/food 5.png" alt="Dining at Sigdi" />
            </motion.div>

            <motion.div
              className="food-arch-card tilt-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, rotate: 2 }}
            >
              <img src="/hero/food 6.png" alt="Refreshing drinks and dining" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: "RESERVE YOUR SEAT TODAY" with Floating Form & 3 Starburst Contact Cards (Screenshot 3 & 1) */}
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
            RESERVE YOUR SEAT TODAY
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
                <h3>Table Reserved for {reservation.fullName || 'Guest'}!</h3>
                <p>
                  We have forwarded your reservation details for <strong>{reservation.guests} guests</strong> on <strong>{reservation.date || 'your selected date'}</strong> at <strong>{reservation.time || 'selected time'}</strong> directly to WhatsApp (<strong>+91 63778 20199</strong>).
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                  <a
                    href={`https://wa.me/916377820199?text=${encodeURIComponent(
                      `*Table Reservation Inquiry - Sigdi Resort*
---------------------------------------
👤 *Name:* ${reservation.fullName || 'N/A'}
📧 *Email:* ${reservation.email || 'N/A'}
📞 *Phone:* ${reservation.phone || 'N/A'}
👥 *Guests:* ${reservation.guests || 'N/A'}
📅 *Date:* ${reservation.date || 'N/A'}
⏰ *Time:* ${reservation.time || 'N/A'}
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
              <form onSubmit={handleBookingSubmit} className="umami-booking-fields">
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

                <div className="field-group">
                  <label>Number of guests</label>
                  <input
                    type="text"
                    value={reservation.guests}
                    onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                  />
                </div>

                <div className="fields-dual-row">
                  <div className="field-group">
                    <label>Reservation date</label>
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
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
                      placeholder="--:--"
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

          {/* 3 Contact Info Cards with Red Scalloped Starburst Badges (Screenshot 1) */}
          <div className="umami-contact-trio-cards">
            {/* Card 1: Email us */}
            <motion.div
              className="umami-info-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <ScallopBadge>
                <FaPaperPlane size={22} color="#ffffff" />
              </ScallopBadge>
              <span className="info-card-lbl">Email us</span>
              <h3 className="info-card-val">sigdiresorts@gmail.com</h3>
            </motion.div>

            {/* Card 2: Phone us */}
            <motion.div
              className="umami-info-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <ScallopBadge>
                <FaPhone size={22} color="#ffffff" />
              </ScallopBadge>
              <span className="info-card-lbl">Phone us</span>
              <h3 className="info-card-val">
                <a href="tel:+916377820199" style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>+91 63778 20199</a>
              </h3>
            </motion.div>

            {/* Card 3: Address */}
            <motion.div
              className="umami-info-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <ScallopBadge>
                <FaLocationDot size={22} color="#ffffff" />
              </ScallopBadge>
              <span className="info-card-lbl">Address</span>
              <h3 className="info-card-val">2nd Gate, Towards, Sadar Thana Road, near Telco Circle, opposite Harish Hospital, Bhagwanpura, Alwar, Rajasthan 301001</h3>
            </motion.div>
          </div>

          {/* Official Sigdi Resort Google Map Section */}
          <div className="umami-map-holder">
            <div className="umami-map-bar">
              <div className="map-title-col">
                <span className="map-tag">OFFICIAL LOCATION</span>
                <h3>Sigdi Resort & Dining</h3>
                <p>2nd Gate, Towards, Sadar Thana Road, near Telco Circle, opposite Harish Hospital, Bhagwanpura, Alwar, Rajasthan 301001</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Sigdi+Resort/@27.5976621,76.630828,17z/data=!3m1!4b1!4m6!3m5!1s0x397299c851e8c7b7:0xd83d5da8ab01e9f0!8m2!3d27.5976621!4d76.630828!16s%2Fg%2F11t7k1s37_"
                target="_blank"
                rel="noopener noreferrer"
                className="umami-map-directions-btn"
              >
                <FaLocationArrow size={13} />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="umami-iframe-wrapper">
              <iframe
                title="Sigdi Resort Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.866697971875!2d76.630828!3d27.597662099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299c851e8c7b7%3A0xd83d5da8ab01e9f0!2sSigdi%20Resort!5e0!3m2!1sen!2sin!4v1789706916715!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
