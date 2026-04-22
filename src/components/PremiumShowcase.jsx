"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import './PremiumShowcase.css'

const PREMIUM_CARDS = [
  {
    id: 'why-choose',
    title: 'Why Choose Magnevents?',
    subtitle: 'Your Trusted Partner for Live Music',
    desc: 'Carefully selected singers, bands, and musicians based on event style and budget.',
    icon: '💎',
    path: '/why-choose',
    color: 'var(--matrix-green)'
  },
  {
    id: 'testimonials',
    title: 'What Our Clients Say',
    subtitle: 'Real Stories. Unforgettable Events.',
    desc: 'Read about the souls we touched with our music across Delhi, Noida, and Gurgaon.',
    icon: '⭐',
    path: '/testimonials',
    color: 'var(--baby-pink)'
  },
  {
    id: 'how-to-book',
    title: 'How to Book a Musician',
    subtitle: 'Your Live Music in 4 Easy Steps',
    desc: 'From sharing your event details to enjoying the performance—hassle-free.',
    icon: '🎵',
    path: '/how-to-book',
    color: 'var(--matrix-green)'
  },
  {
    id: 'contact',
    title: 'Book Your Event',
    subtitle: 'Let’s Bring Your Event to Life',
    desc: 'Reach out to us for a custom quote and handpicked artist options.',
    icon: '📞',
    path: '/contact',
    color: 'var(--baby-pink)'
  }
]

export default function PremiumShowcase() {
  return (
    <section className="premium-section">
      <div className="premium-container">
        <div className="premium-header">
          <motion.span 
            className="premium-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            EXCEPTIONAL SERVICE
          </motion.span>
          <motion.h2 
            className="premium-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Discover the <span className="text-glow">Magnevents</span> Edge
          </motion.h2>
        </div>

        <div className="premium-grid">
          {PREMIUM_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              className="premium-card-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={card.path} className="premium-card">
                <div className="card-glow" style={{ backgroundColor: card.color }} />
                <div className="card-inner">
                  <span className="card-icon">{card.icon}</span>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p className="card-subtitle">{card.subtitle}</p>
                    <p className="card-desc">{card.desc}</p>
                  </div>
                  <div className="card-action">
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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
