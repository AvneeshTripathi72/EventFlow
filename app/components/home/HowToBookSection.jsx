"use client";

import { motion } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'
import StepTimelineItem from '@/app/components/booking/StepTimelineItem'
import { HOW_TO_BOOK_STEPS } from '@/app/constants'
import '@/app/styles/pages/HowToBook.css'

export default function HowToBookSection() {
  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-how-section">
        <div className="hp-section-head">
          <p className="hp-eyebrow">🎵 Simple Process</p>
          <h2>How to book a musician</h2>

        </div>

        <div className="steps-timeline">
          {HOW_TO_BOOK_STEPS.map((step, idx) => (
            <StepTimelineItem 
              key={idx} 
              step={step} 
              index={idx} 
              isLast={idx === HOW_TO_BOOK_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </FadeSection>
  )
}

