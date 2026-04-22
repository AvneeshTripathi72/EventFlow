"use client"

import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './Book.css'

export default function BookPage() {
  const handleOpenModal = () => {
    const event = new CustomEvent('open-contact-modal', { detail: { type: 'booking' } })
    window.dispatchEvent(event)
  }

  return (
    <AppShellWrapper>
      <main className="book-page">
        <div className="lux-container book-content">
          
          <header className="book-header">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="accent-tag"
            >
              Reservations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Secure Your <span className="text-gradient">Prime Date</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our elite artists book up to 12 months in advance. Start your inquiry now to check availability for your special occasion.
            </motion.p>
          </header>

          <div className="book-grid">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="book-card"
            >
              <h3>Direct Booking</h3>
              <p>Ready to confirm? Fill out our priority booking form for a 2-hour response time from our curation team.</p>
              <button className="book-main-btn" onClick={handleOpenModal}>
                Start Priority Form
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="book-card"
            >
              <h3>Concierge Call</h3>
              <p>Prefer to speak with an expert? Schedule a 15-minute consultation with our world-class event specialists.</p>
              <a href="tel:+918076515257" className="book-outline-btn">
                Call +91 80765 15257
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="book-footer"
          >
            <div className="footer-benefit">
              <div className="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f6b64e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>Verified Elite Artists</span>
            </div>
            <div className="footer-benefit">
              <div className="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f6b64e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>Secure Transactions</span>
            </div>
            <div className="footer-benefit">
              <div className="benefit-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f6b64e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>24/7 Priority Support</span>
            </div>
          </motion.div>

        </div>
      </main>
    </AppShellWrapper>
  )
}
