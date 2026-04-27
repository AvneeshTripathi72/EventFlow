"use client"

import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import StepTimelineItem from '@/app/components/booking/StepTimelineItem'
import { HOW_TO_BOOK_STEPS } from '@/app/constants'
import '@/app/styles/pages/HowToBook.css'

/**
 * HowToBookPage Component
 * 
 * Explains the artist booking process using a visual timeline.
 * Refactored into modular components and centralized data.
 */
export default function HowToBookPage() {
  return (
    <AppShellWrapper>
      <main className="lux-page how-to-book-page">
        <div className="lux-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="how-header"
          >
            <span className="accent-tag">TIMELINE</span>
            <h1>How to Book <span className="text-gradient">a Musician</span></h1>
            <p>Your Live Music in 4 Easy Steps</p>
          </motion.div>

          <div className="steps-timeline">
            {HOW_TO_BOOK_STEPS.map((step, idx) => (
              <StepTimelineItem 
                key={idx} 
                step={step} 
                index={idx} 
              />
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
