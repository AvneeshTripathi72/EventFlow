"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import '@/src/styles/pages/HomePage.css'

const SERVICES = [
  {
    title: 'Book a Singer for House Parties',
    desc: 'Solo vocals, intimate setups, quick confirmation.',
    image: '/assets/lux-singer-session.webp',
  },
  {
    title: 'Book a Live Band for Weddings',
    desc: 'Full wedding energy with stage-ready performance.',
    image: '/assets/lux-wedding-celebration.jpg',
  },
  {
    title: 'Hire a Live Band for Corporate Event',
    desc: 'Professional sets for launches, dinners, and galas.',
    image: '/assets/lux-live-band-concert.jpg',
  },
  {
    title: 'Book Anchor Emcees and Magician',
    desc: 'Multi-artist entertainment with smoother show flow.',
    image: '/assets/lux-hero-artist.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div className="hp" style={{ paddingTop: '100px' }}>
      <section className="hp-shell hp-block">
        <div className="hp-section-head">
          <p className="hp-eyebrow">🎬 Our Services</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>
            Live entertainment solutions
          </h1>
          <p className="hp-services-intro">
            Explore our curated services for weddings, corporate events, and intimate house parties.
          </p>
        </div>

        <div className="hp-services-grid" style={{ marginTop: '40px' }}>
          {SERVICES.map((s, i) => (
            <motion.article 
              key={s.title} 
              className="hp-service-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="hp-service-media">
                <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="hp-service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="hp-btn hp-btn-ghost hp-btn-sm">Enquire Now →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
