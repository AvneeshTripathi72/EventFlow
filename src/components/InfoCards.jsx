"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import './InfoCards.css'

const CARDS = [
  {
    title: "Why Choose Magnevents?",
    subtitle: "Your Trusted Partner for Live Music Booking",
    icon: "💎",
    link: "/why-choose",
    points: ["Handpicked for You", "Hassle-Free Booking", "Complete Setup"],
    accent: "matrix"
  },
  {
    title: "What Our Clients Say",
    subtitle: "Real Stories. Unforgettable Events.",
    icon: "💬",
    link: "/testimonials",
    points: ["Soulful Sufi Nights", "Perfect Wedding Vibe", "Zero Stress Booking"],
    accent: "pink"
  },
  {
    title: "How to Book a Musician",
    subtitle: "Your Live Music in 4 Easy Steps",
    icon: "🎹",
    link: "/how-to-book",
    points: ["Share Event", "Get Options", "Confirm & Enjoy"],
    accent: "matrix"
  },
  {
    title: "Book Your Event",
    subtitle: "Let’s Bring Your Event to Life",
    icon: "✨",
    link: "/contact",
    points: ["Solo Singer", "Full Band", "Sufi Artist"],
    accent: "pink"
  }
]

export default function InfoCards() {
  return (
    <section className="hp-info-cards-section">
      <div className="lux-container">
        <div className="info-cards-grid">
          {CARDS.map((card, idx) => (
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
