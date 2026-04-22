"use client";
import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <AppShellWrapper>
      <main className="lux-page contact-page">
        <div className="lux-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-header"
          >
            <span className="accent-tag">CONTACT</span>
            <h1>Book Your <span className="text-gradient">Event</span></h1>
            <p>Let’s Bring Your Event to Life</p>
          </motion.div>

          <div className="contact-main-grid">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="contact-details-card"
            >
              <h3>Direct Channels</h3>
              <div className="channel-item">
                <span>📞</span>
                <a href="tel:+918076515257">+91 8076515257</a>
              </div>
              <div className="channel-item">
                <span>✉️</span>
                <a href="mailto:bookmagnevents@gmail.com">bookmagnevents@gmail.com</a>
              </div>
              
              <div className="whatsapp-wrap">
                <p>Need a quick response?</p>
                <a href="https://wa.me/918076515257" target="_blank" className="whatsapp-btn">
                   Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="booking-form matrix-border"
            >
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-row">
                <select required>
                  <option value="" disabled selected>Type of Artist</option>
                  <option value="solo">Solo Singer</option>
                  <option value="band">Band</option>
                  <option value="sufi">Sufi Artist</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="submit-btn"
              >
                Submit Booking Inquiry
              </motion.button>
            </motion.form>
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
