import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '100-200',
    type: 'Destination Wedding',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay" 
          onClick={resetAndClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div 
            className="modal-container" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button 
              className="modal-close-btn" 
              onClick={resetAndClose} 
              aria-label="Close modal"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            {!submitted ? (
              <div className="modal-body">
                <div className="modal-header">
                  <span className="modal-subtitle">(RESERVATION & INQUIRY)</span>
                  <h3 className="modal-title">
                    Begin Your <span className="highlight-pink">Celebration.</span>
                  </h3>
                  <p className="modal-desc">
                    Say "I Do" in style. Tell us about your event or stay dates, and the Sigdi Resort team will be in touch within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label><User size={13} /> Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Rahul Sharma" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label><Phone size={13} /> Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label><Calendar size={13} /> Event / Check-in Date</label>
                      <input 
                        type="date" 
                        required 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label><Users size={13} /> Celebration / Service Type</label>
                      <select 
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                      >
                        <option value="Royal Wedding & Reception">Royal Wedding & Reception</option>
                        <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                        <option value="Anniversary & Birthday Celebration">Anniversary & Birthday Celebration</option>
                        <option value="Corporate Event & Party">Corporate Event & Party</option>
                        <option value="Deluxe AC Room Stay">Deluxe AC Room Stay (₹965 - ₹1,263/night)</option>
                        <option value="Sigdi Restaurant Dining & Buffet">Sigdi Restaurant Dining & Buffet</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Guest Count & Special Requirements</label>
                    <textarea 
                      rows="3" 
                      placeholder="Share estimated guest count, room requirements, catering preferences, decor ideas..." 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit" 
                    className="btn-pill-pink form-submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Inquiry to Sigdi Resort</span>
                    <Sparkles size={16} />
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div 
                className="modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-title">Inquiry Received</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name || 'valued guest'}</strong>. The management team at Sigdi Resort Alwar has received your inquiry for <strong>{formData.type}</strong> and will connect with you shortly.
                </p>
                <button className="btn-pill success-close-btn" onClick={resetAndClose}>
                  Back to Website
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
