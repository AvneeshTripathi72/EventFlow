"use client";

import { motion } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'

export default function ContactSection() {
  return (
    <FadeSection className="hp-shell hp-block hp-contact" id="contact">
      <div className="hp-section-head">
        <p className="hp-eyebrow">✉️ Quick Contact</p>
        <h2>Get in Touch</h2>
      </div>
      <div className="hp-contact-inner">
        <div className="hp-contact-info">

          <div className="hp-contact-channels">
            <a href="tel:+918076515257" className="hp-channel-card">
              <span className="hp-channel-icon">📱</span>
              <div>
                <strong>Phone</strong>
                <span>+91 8076515257</span>
              </div>
            </a>
            <a href="mailto:magneventsdotin@gmail.com" className="hp-channel-card">
              <span className="hp-channel-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <span>magneventsdotin@gmail.com</span>
              </div>
            </a>
            <a href="https://wa.me/918076515257" target="_blank" rel="noreferrer" className="hp-channel-card">
              <span className="hp-channel-icon">💬</span>
              <div>
                <strong>Connect on WhatsApp</strong>
                <span>WhatsApp</span>
              </div>
            </a>
          </div>

          <div className="hp-contact-social">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hp-social-link">YouTube</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hp-social-link">Instagram</a>
          </div>
        </div>

        <div className="hp-quote-form">
          <h3 className="hp-quote-title">Request a call</h3>
          <form className="hp-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="hp-form-field">
              <label>Name *</label>
              <input type="text" placeholder="Your full name" required />
            </div>
            <div className="hp-form-field">
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="hp-form-field">
              <label>Phone *</label>
              <input type="tel" placeholder="Your phone number" required />
            </div>
            <motion.button
              type="submit"
              className="hp-btn hp-btn-primary hp-form-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Inquiry
            </motion.button>
          </form>
        </div>
      </div>
    </FadeSection>
  )
}
