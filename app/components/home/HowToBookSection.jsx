"use client";

import { motion } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'
import { BOOKING_STEPS } from '@/app/constants'

export default function HowToBookSection() {
  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-how-section">
        <div className="hp-section-head">
          <p className="hp-eyebrow">🎵 Simple Process</p>
          <h2>How to book a musician</h2>
          <p className="hp-how-desc">Your Live Music in 4 Easy Steps</p>
        </div>

        <div className="hp-orthogonal-flow">
          {BOOKING_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className={`hp-flow-step step-${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <motion.div className="hp-step-card fx-soft-card">
                <div className="hp-step-header">
                  <span className="hp-step-num">{step.num}</span>
                  <span className="hp-step-icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeSection>
  )
}
