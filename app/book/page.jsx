"use client"

import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import ReservationCard from '@/app/components/forms/ReservationCard'
import BenefitItem from '@/app/components/common/BenefitItem'
import '@/app/styles/pages/Book.css'

/**
 * BookPage Component
 * 
 * Main reservation page with priority booking options.
 * Refactored into modular components for scalability.
 */
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
            <ReservationCard 
              title="Direct Booking"
              desc="Ready to confirm? Fill out our priority booking form for a 2-hour response time from our curation team."
              actionLabel="Start Priority Form"
              onAction={handleOpenModal}
              direction="left"
            />
            
            <ReservationCard 
              title="Concierge Call"
              desc="Prefer to speak with an expert? Schedule a 15-minute consultation with our world-class event specialists."
              actionLabel="Call +91 80765 15257"
              isExternal
              href="tel:+918076515257"
              direction="right"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="book-footer"
          >
            <BenefitItem label="Verified Elite Artists" />
            <BenefitItem label="Secure Transactions" />
            <BenefitItem label="24/7 Priority Support" />
          </motion.div>

        </div>
      </main>
    </AppShellWrapper>
  )
}

