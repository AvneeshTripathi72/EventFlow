"use client";

import { motion } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'
import { TESTIMONIALS } from '@/app/constants'

export default function TestimonialsSection() {
  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-section-head">
        <p className="hp-eyebrow">⭐ Google Reviews</p>
        <h2>What Our Clients Say</h2>
        <p className="hp-section-subtitle">Real Stories. Unforgettable Events.</p>
      </div>
      <div className="hp-reviews-grid">
        {TESTIMONIALS.map((item, i) => (
          <motion.article
            key={item.name}
            className="hp-review-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="hp-review-header">
              <div className="hp-review-stars">
                {Array.from({ length: item.stars }).map((_, s) => (
                  <span key={s} className="hp-star">★</span>
                ))}
              </div>
              <span className="hp-review-badge">{item.type}</span>
            </div>
            <h4 className="hp-review-title">{item.title}</h4>
            <p className="hp-review-text">&ldquo;{item.text}&rdquo;</p>
            <div className="hp-review-author">
              <span className="hp-review-name">– {item.name}</span>
              <span className="hp-review-location">{item.location}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </FadeSection>
  )
}
