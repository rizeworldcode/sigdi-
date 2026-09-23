import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer({ onOpenBooking, onNavigate }) {
  return (
    <footer className="footer-section-pink" id="footer">
      <div className="footer-container-pink">

        {/* Top Content: Left Brand & Right Links */}
        <div className="footer-top-row">

          {/* Left Column: Brand & Consultation */}
          <motion.div
            className="footer-brand-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="footer-logo-wrap" style={{ marginBottom: '20px' }}>
              <img
                src="/hero/sigdi logo.png"
                alt="Sigdi Resort"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h3 className="footer-title">Host • Celebrate • Stay • Dine</h3>
            <p className="footer-desc">
              Say "I Do" in style. Alwar's premier destination for royal weddings, ring ceremonies, corporate galas, deluxe AC resort stays, and live hearth dining.
            </p>

            {/* Actions: Consultation Button & Social Media Icons */}
            <div className="footer-action-row">
              <motion.button
                onClick={(e) => {
                  e?.preventDefault?.();
                  if (onNavigate) {
                    onNavigate('contact');
                  } else if (onOpenBooking) {
                    onOpenBooking();
                  }
                }}
                className="footer-btn-consultation"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={16} strokeWidth={2.5} className="footer-btn-arrow" />
                <span>Reserve Event / Stay</span>
              </motion.button>

              <div className="footer-social-icons-group">
                <motion.a
                  href="https://www.instagram.com/sigdiresort?stkn=MWd0Y3hzcmxoZGNtcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn"
                  aria-label="Follow on Instagram"
                  title="Instagram"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <InstagramIcon size={18} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/19dmt1RETx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn"
                  aria-label="Follow on Facebook"
                  title="Facebook"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FacebookIcon size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Explore & Contact & Follow */}
          <motion.div
            className="footer-nav-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="footer-links-grid">

              {/* Explore Column */}
              <div className="footer-group">
                <h4 className="footer-group-heading">Explore</h4>
                <ul className="footer-links">
                  <li><a href="/" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a></li>
                  <li><a href="/services" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('services'); }}>Services</a></li>
                  <li><a href="/about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>About</a></li>
                  <li><a href="/gallery" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('gallery'); }}>Gallery</a></li>
                  <li><a href="/restaurant" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('restaurant'); }}>Restaurant</a></li>
                  <li><a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }}>Contact</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="footer-group">
                <h4 className="footer-group-heading">Contact</h4>
                <ul className="footer-links footer-contact-info">
                  <li><a href="mailto:sigdiresorts@gmail.com">sigdiresorts@gmail.com</a></li>
                  <li><a href="tel:+916377820199" style={{ whiteSpace: 'nowrap' }}>+91 63778 20199</a></li>
                  <li><span>2nd Gate, Towards, Sadar Thana Road, near Telco Circle, opposite Harish Hospital, Bhagwanpura, Alwar, Rajasthan 301001</span></li>
                </ul>
              </div>

              {/* Social Media Column */}
              <div className="footer-group">
                <h4 className="footer-group-heading">Social</h4>
                <ul className="footer-links footer-social-links-list">
                  <li>
                    <a
                      href="https://www.instagram.com/sigdiresort?stkn=MWd0Y3hzcmxoZGNtcw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-text-link"
                    >
                      <InstagramIcon size={15} />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/19dmt1RETx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-text-link"
                    >
                      <FacebookIcon size={15} />
                      <span>Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Sub-bar: Copyright & Magdalena credit */}
        <div className="footer-sub-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Sigdi Resort. All rights reserved.
          </p>

          <div className="footer-creator-credit">
            <span className="footer-creator-text">Coded by</span>

            <span className="footer-creator-name">rizeworld</span>
          </div>
        </div>

        {/* Bottom Giant Luminous "SIGDI" with Progressive Glow */}
        <motion.div
          className="footer-giant-sigdi-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            viewBox="0 0 600 160"
            className="footer-sigdi-svg"
            style={{ overflow: 'visible' }}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="SIGDI"
          >
            <text
              x="50%"
              y="118"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Coolvetica', sans-serif"
              fontWeight="900"
              fontSize="112"
              letterSpacing="8"
            >
              SIGDI
            </text>
          </svg>
        </motion.div>

      </div>
    </footer>
  );
}



