"use client"
import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './WhyChoose.css'

export default function WhyChoosePage() {
  return (
    <AppShellWrapper>
      <main className="lux-page why-choose-page">
        <div className="lux-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="why-choose-header"
          >
            <span className="accent-tag">EXCELLENCE</span>
            <h1>Why Choose <span className="text-gradient">Magnevents?</span></h1>
            <p>Your Trusted Partner for Live Music Booking Services</p>
          </motion.div>

          <div className="why-choose-grid">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="why-card matrix-border"
            >
              <div className="card-icon">✨</div>
              <h3>Handpicked for You</h3>
              <p>
                We don't just provide artists; we curate experiences. Magnevents provides carefully selected singers, 
                bands, and musicians based on your event style, audience, and budget.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="why-card pink-border"
            >
              <div className="card-icon">📅</div>
              <h3>Hassle-Free Booking</h3>
              <p>
                From initial inquiry to the final performance, we handle everything. Mention services like hiring 
                singers for house parties, Sufi singers in Delhi, or wedding bands—we make it simple.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="why-card matrix-border"
            >
              <div className="card-icon">🔊</div>
              <h3>Complete Entertainment Setup</h3>
              <p>
                Zero stress for you. We provide end-to-end management, including professional sound setups, 
                stage coordination, and technical support to ensure a flawless show.
              </p>
            </motion.div>
          </div>

          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="why-cta-section"
          >
            <h2>Ready to find your perfect artist?</h2>
            <button className="matrix-btn">Explore Categories</button>
          </motion.section>
        </div>
      </main>
    </AppShellWrapper>
  )
}
