"use client"
import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './Testimonials.css'

const REVIEWS = [
  { name: "Akansha", city: "Delhi", text: "Very good singer for our house party, interactive and professional.", stars: 5 },
  { name: "Sakshi & Rohan", city: "Delhi", text: "Perfect wedding vibe, amazing artist, very professional.", stars: 5 },
  { name: "Jaswinder Kaur", city: "Corporate", text: "Smooth booking, excellent band, zero stress.", stars: 5 },
  { name: "Mahagun", city: "Noida", text: "Soulful Sufi night, great coordination and sound.", stars: 5 },
]

export default function TestimonialsPage() {
  return (
    <AppShellWrapper>
      <main className="lux-page testimonials-page">
        <div className="lux-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="testi-header"
          >
            <span className="accent-tag">REVIEWS</span>
            <h1>What Our <span className="text-gradient">Clients Say</span></h1>
            <p>Real Stories. Unforgettable Events.</p>
          </motion.div>

          <div className="testi-grid">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="testi-card"
              >
                <div className="stars">
                  {"★".repeat(review.stars)}
                </div>
                <p className="testi-text">"{review.text}"</p>
                <div className="testi-user">
                  <div className="user-info">
                    <strong>{review.name}</strong>
                    <span>{review.city}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
