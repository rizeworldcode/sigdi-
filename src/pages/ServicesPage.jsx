import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaBriefcase, FaBed, FaUtensils, FaLayerGroup } from 'react-icons/fa6';
import { FiCheckCircle } from 'react-icons/fi';

/* Auto-cycling Image Slider Component for Service Cards */
function CardImageSlider({ images, title, badge, stats, interval = 3600 }) {
  const imageList = Array.isArray(images) && images.length > 0 ? images : ['/hero/sigdi 1.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, interval);
    return () => clearInterval(timer);
  }, [imageList.length, interval]);

  return (
    <div className="couture-image-holder">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={imageList[currentIndex]}
          alt={`${title} - view ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="couture-slider-img"
        />
      </AnimatePresence>

      {/* Badges */}
      {badge && <div className="couture-badge-tag">{badge}</div>}
      {stats && <div className="couture-stat-pill">{stats}</div>}

      {/* Slide Indicators / Dots */}
      {imageList.length > 1 && (
        <div className="couture-slider-dots">
          {imageList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`slider-dot ${dotIdx === currentIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              aria-label={`Switch to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServicesPage({ onOpenBooking, onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');

  const servicesData = [
    {
      id: 'weddings',
      category: 'weddings',
      title: 'Royal Weddings & Ring Ceremonies',
      tagline: 'Say "I Do" in Style 💍 | @rizeworld Managed',
      images: [
        '/hero/sigdi 1.png',
        '/hero/sigdi 6.png',
        '/hero/sigdi 8.png'
      ],
      badge: 'Bespoke Romance',
      stats: '350+ Celebrations Hosted',
      description: 'Step through our signature illuminated arch tunnel walkway into expansive manicured celebration lawns. From regal floral mandaps and royal velvet sofa stages to dazzling varmala platforms and fairy-light canopies, we bring your dream wedding celebration to life in Alwar.',
      deliverables: [
        'Signature illuminated tunnel entrance with grand chandelier',
        'Royal sofa stage, floral backdrop & varmala platform',
        'Sprawling open wedding lawns with banquet guest seating',
        'Dedicated bridal suites & 24/7 on-site event coordination',
        'Lavish multi-course wedding banqueting & live counters'
      ]
    },
    {
      id: 'corporate',
      category: 'corporate',
      title: 'Corporate Events & Celebration Galas',
      tagline: 'Executive Meets, Conferences & High-Energy DJ Lawns',
      images: [
        '/hero/sigdi 3.png',
        '/hero/sigdi 9.png',
        '/hero/sigdi 11.png'
      ],
      badge: 'Corporate Excellence',
      stats: '180+ Events Hosted',
      description: 'Host memorable corporate annual meets, dealer conventions, executive seminars, and milestone anniversary parties. Featuring state-of-the-art acoustics, stage illumination, cocktail lawns, and gourmet culinary hospitality managed seamlessly.',
      deliverables: [
        'Flexible conference & banquet seating arrangements',
        'High-grade audio-visuals, stage lighting & DJ acoustics',
        'Open-air party lawn for evening cocktails & dinner',
        'Customized corporate buffet & live Sigdi grill stations',
        'Spacious secure guest parking near Telco Circle Alwar'
      ]
    },
    {
      id: 'stay',
      category: 'stay',
      title: 'Deluxe AC Resort Accommodations',
      tagline: 'Double AC Rooms from ₹965 - ₹1,263/night',
      images: [
        '/hero/room 3.png',
        '/hero/room 4.png',
        '/hero/room 5.png'
      ],
      badge: '4.1 ★ Google Rating',
      stats: '52+ Verified Reviews',
      description: 'Experience restful comfort in our well-appointed Deluxe AC Rooms. Designed for wedding guests, business travelers, and weekend vacationers with double air conditioning, plush king beds, elegant wall decor, and 24/7 room hospitality.',
      deliverables: [
        'Deluxe Room with Double Air Conditioning',
        'Plush King-size bed & premium fresh linens',
        'Spacious en-suite bathroom with 24/7 hot & cold water',
        'Round-the-clock in-room dining & housekeeping',
        'Convenient prime location on Sadar Thana Road'
      ]
    },
    {
      id: 'dining',
      category: 'dining',
      title: 'Live Sigdi Hearth Dining & Banqueting',
      tagline: 'Charcoal Grills, Royal Tandoor & Authentic Flavors',
      images: [
        '/hero/segdi 4.png',
        '/hero/sigdi 5.png',
        '/hero/sigdi 10.png'
      ],
      badge: 'Signature Flavors',
      stats: 'Authentic Sigdi Cuisine',
      description: 'Our culinary artistry centers around the traditional Sigdi charcoal hearth. Enjoy sizzling tandoori kebabs, authentic Rajasthani delicacies, aromatic North Indian curries, and live chaat and sweet stations served with warm Rajasthani hospitality.',
      deliverables: [
        'Live charcoal Sigdi barbecue & tandoor specialties',
        'Customized vegetarian & non-vegetarian banquet menus',
        'Interactive live food stations: Chaat, pasta & mithai',
        'Indoor climate-controlled restaurant & garden dining',
        'Experienced chefs and impeccable hygienic food preparation'
      ]
    }
  ];

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  return (
    <div className="page-view umami-contact-page services-couture-page">
      {/* 1. HERO BANNER: "SERVICES & EXPERIENCES" with Scalloped Bottom Divider */}
      <section className="umami-hero-section" style={{ backgroundImage: "url('/hero/sigdi 6.png')" }}>
        <div className="umami-hero-overlay" />
        <div className="umami-hero-inner">
          <motion.h1
            className="umami-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            SERVICES & EXPERIENCES
          </motion.h1>
        </div>

        {/* Scalloped teeth wave divider */}
        <div className="umami-scallop-divider">
          <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="scallop-pattern-svg">
            <defs>
              <pattern id="scallop-teeth-services" x="0" y="0" width="36" height="28" patternUnits="userSpaceOnUse">
                <path d="M 0,28 Q 18,0 36,28 Z" fill="#050505" />
              </pattern>
            </defs>
            <rect width="100%" height="28" fill="url(#scallop-teeth-services)" />
          </svg>
        </div>
      </section>

      {/* 2. SECTION: "EXPERIENCE SIGDI RESORT ALWAR" with 4-Quadrant Capability Box & 3 Arched Photo Cards */}
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
              HOST • CELEBRATE • STAY • DINE
            </motion.h2>
            <p className="umami-experience-sub">
              Say "I Do" in style. From illuminated entrance walkways and royal sofa stages to deluxe AC rooms and live hearth dining, your perfect event awaits at Sigdi Resort Alwar.
            </p>
          </div>

          {/* 3 Arched Lifestyle Cards */}
          <div className="umami-food-trio-row services-lifestyle-trio">
            <motion.div
              className="food-arch-card tilt-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, rotate: -1 }}
            >
              <img src="/hero/sigdi 2.png" alt="Royal Wedding Florals" />
            </motion.div>

            <motion.div
              className="food-arch-card straight-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <img src="/hero/sigdi 3.png" alt="Birthday & Party Installations" />
            </motion.div>

            <motion.div
              className="food-arch-card tilt-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, rotate: 1 }}
            >
              <img src="/hero/sigdi 5.png" alt="Private Dining Tablescapes" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: FILTERABLE DISCIPLINES SHOWCASE */}
      <section className="page-section container" style={{ padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="services-tabs-row" style={{ justifyContent: 'center' }}>
            <button
              className={`service-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <FaLayerGroup className="tab-pill-icon" />
              <span>All Offerings</span>
            </button>
            <button
              className={`service-tab-btn ${activeTab === 'weddings' ? 'active' : ''}`}
              onClick={() => setActiveTab('weddings')}
            >
              <FaCrown className="tab-pill-icon" />
              <span>Royal Weddings</span>
            </button>
            <button
              className={`service-tab-btn ${activeTab === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveTab('corporate')}
            >
              <FaBriefcase className="tab-pill-icon" />
              <span>Corporate & Parties</span>
            </button>
            <button
              className={`service-tab-btn ${activeTab === 'stay' ? 'active' : ''}`}
              onClick={() => setActiveTab('stay')}
            >
              <FaBed className="tab-pill-icon" />
              <span>Deluxe Room Stay</span>
            </button>
            <button
              className={`service-tab-btn ${activeTab === 'dining' ? 'active' : ''}`}
              onClick={() => setActiveTab('dining')}
            >
              <FaUtensils className="tab-pill-icon" />
              <span>Hearth Dining</span>
            </button>
          </div>
        </div>

        <div className="services-couture-grid">
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                className={`couture-service-card ${idx % 2 === 1 ? 'inverted' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55 }}
              >
                <div className="couture-card-media">
                  <CardImageSlider
                    images={service.images || [service.image]}
                    title={service.title}
                    badge={service.badge}
                    stats={service.stats}
                  />
                </div>

                <div className="couture-card-body">
                  <span className="couture-tagline">{service.tagline}</span>
                  <h2 className="couture-title" style={{ fontFamily: "'Coolvetica', sans-serif", fontSize: '32px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    {service.title}
                  </h2>
                  <p className="couture-desc">{service.description}</p>

                  <div className="couture-deliverables-box">
                    <h4 style={{ fontFamily: "'Coolvetica', sans-serif", letterSpacing: '0.04em', textTransform: 'uppercase' }}>Key Inclusions & Highlights</h4>
                    <ul className="deliverables-list">
                      {service.deliverables.map((item, i) => (
                        <li key={i}>
                          <FiCheckCircle size={16} className="pink-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="couture-card-actions">
                    <button onClick={onOpenBooking} className="umami-reserve-btn" style={{ maxWidth: '280px', padding: '14px 24px', fontSize: '15px' }}>
                      <span>RESERVE / INQUIRE NOW</span>
                      <span className="btn-arrow">→</span>
                    </button>
                    <button onClick={() => onNavigate('contact')} className="btn-couture-ghost">
                      <span>View Location & Contact</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>



    </div>
  );
}

