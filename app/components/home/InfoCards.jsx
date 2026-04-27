"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { INFO_CARDS } from '@/app/constants'
import '@/app/styles/components/InfoCards.css'

/**
 * InfoCards Component
 * 
 * Displays a grid of informational cards with key value propositions.
 * Refactored to use centralized constants.
 */
export default function InfoCards() {
  return (
    <section className="hp-info-cards-section">
      <div className="lux-container">
        <div className="info-cards-grid">
          {INFO_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={card.link} className={`info-card-link ${card.accent}-accent`}>
                <div className="info-card-inner">
                  <div className="card-top">
                    <span className="card-icon-pill">{card.icon}</span>
                    <div className="card-text">
                      <h4>{card.title}</h4>
                      <p>{card.subtitle}</p>
                    </div>
                  </div>
                  <ul className="card-points">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx}><span>•</span> {pt}</li>
                    ))}
                  </ul>
                  <div className="card-footer">
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
