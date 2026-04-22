"use client"

import { motion } from 'framer-motion'
import AppShellWrapper from '@/src/components/AppShellWrapper'

const REVIEWS = [
  { name: 'Akansha', city: 'Delhi', type: 'House Party', text: 'Very good singer for our house party, interactive and professional. He made us all sing with him!', stars: 5 },
  { name: 'Sakshi & Rohan', city: 'Delhi', type: 'Wedding', text: 'Perfect wedding vibe, amazing artist, very professional. Our guests still talk about the performance.', stars: 5 },
  { name: 'Jaswinder Kaur', city: 'Corporate', type: 'Annual Meet', text: 'Smooth booking, excellent band, zero stress. Highly recommend for any corporate gala.', stars: 5 },
  { name: 'Mahagun', city: 'Noida', type: 'Sufi Night', text: 'Soulful Sufi night, great coordination and sound. Beautiful voices and perfect management.', stars: 5 },
]

export default function TestimonialsPage() {
  return (
    <AppShellWrapper>
      <section style={{ padding: '120px 24px 60px', background: '#0A0A0A', textAlign: 'center' }}>
        <motion.span style={{ color: '#ffb6c1', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>REAL STORIES</motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, color: '#fff', marginTop: '16px' }}
        >
          What Our <span style={{ color: '#00ff7f' }}>Clients Say</span>
        </motion.h1>
      </section>

      <section style={{ padding: '60px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                padding: '40px', 
                borderRadius: '32px', 
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div style={{ display: 'flex', color: '#ffcc33', fontSize: '20px' }}>
                {Array.from({ length: review.stars }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ color: '#fff', fontSize: '18px', fontStyle: 'italic', lineHeight: 1.6 }}>"{review.text}"</p>
              <div style={{ marginTop: 'auto' }}>
                <strong style={{ display: 'block', color: '#00ff7f', fontSize: '16px' }}>{review.name}</strong>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>{review.city} | {review.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 24px', textAlign: 'center', background: '#000' }}>
        <h2 style={{ fontSize: '40px', color: '#fff', marginBottom: '30px' }}>Ready for an Unforgettable Event?</h2>
        <a href="/contact" className="fx-glow-button" style={{ padding: '18px 40px', borderRadius: '99px', background: '#ffb6c1', color: '#000', fontWeight: 800, textDecoration: 'none' }}>
          Contact Us
        </a>
      </section>
    </AppShellWrapper>
  )
}
