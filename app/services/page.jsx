"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import './ServicesPage.css'

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

import { AppShellWrapper } from '@/src/components/AppShellWrapper'

export default function ServicesPage() {
  return (
    <AppShellWrapper>
      <main className="services-page-layout">
        <div className="lux-container">
          <header className="services-header">
            <span className="accent-tag">EXPERIENCES</span>
            <h1>Tailored <span className="text-gradient">Entertainment</span></h1>
            <p>From intimate gatherings to stadium-scale productions, we curate the perfect musical journey for your event.</p>
          </header>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <motion.article 
                key={s.title} 
                className="service-item-card fx-soft-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="service-media">
                  <img src={s.image} alt={s.title} />
                  <div className="service-overlay" />
                </div>
                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href="/book" className="service-action-btn">Check Availability</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
