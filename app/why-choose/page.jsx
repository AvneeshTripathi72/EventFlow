"use client"

import { motion } from 'framer-motion'
import AppShellWrapper from '@/src/components/AppShellWrapper'

export default function WhyChoosePage() {
  return (
    <AppShellWrapper>
      <section className="service-detail-hero" style={{ padding: '120px 24px 60px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}
          >
            Why Choose <span style={{ color: '#00ff7f' }}>Magnevents?</span>
          </motion.h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '700px' }}>
            Your Trusted Partner for Live Music Booking Services. We don't just book artists; we curate experiences.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '60px' }}>
          <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '40px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '20px' }}>Handpicked for You</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.7 }}>
                Every event has a unique vibe. Whether it's a soulful Sufi night in Delhi, a high-energy wedding band, 
                or a solo singer for an intimate house party, we provide carefully selected talent that matches your style and budget.
              </p>
            </div>
          </div>

          <div style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '32px', color: '#ffb6c1', marginBottom: '20px' }}>Hassle-Free Booking</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.7 }}>
              From initial inquiry to the final performance, we handle everything. No more chasing artists or worrying about technical riders. 
              Our end-to-end management ensures you can relax and enjoy the music while we take care of the logistics.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '20px' }}>Complete Entertainment Setup</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.7 }}>
              We provide more than just the artist. Our services include full sound setup, professional sound engineers, 
              and real-time coordination. We ensure the technical quality matches the artistic excellence of our performers.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', textAlign: 'center', background: '#000' }}>
        <h2 style={{ fontSize: '40px', color: '#fff', marginBottom: '30px' }}>Ready to Elevate Your Event?</h2>
        <a href="/contact" className="fx-glow-button" style={{ padding: '18px 40px', borderRadius: '99px', background: '#00ff7f', color: '#000', fontWeight: 800, textDecoration: 'none' }}>
          Book Now
        </a>
      </section>
    </AppShellWrapper>
  )
}
