"use client";

import { motion } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'
import { BOOKING_STEPS } from '@/app/constants'

export default function HowToBookSection() {
  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-how-section">
        <div className="hp-section-head">
          <p className="hp-eyebrow">🎵 How to book a musician</p>
          <h2>Your Live Music in 4 Easy Steps</h2>
        </div>
        <div className="hp-steps-grid hp-steps-grid--4">
          {BOOKING_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className="hp-step-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
            >
              <span className="hp-step-num">{step.num}</span>
              <span className="hp-step-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeSection>
  )
}
