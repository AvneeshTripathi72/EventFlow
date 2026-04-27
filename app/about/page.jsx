"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import '@/app/styles/pages/AboutPage.css'

export default function AboutPage() {
  return (
    <AppShellWrapper>
      <main className="about-page-layout">
        
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="/assets/lux-hero-bg.png" alt="" />
          </div>
          <div className="about-hero-overlay" />
          <div className="lux-container about-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Beyond the <span className="text-gradient">Performance</span>
            </motion.h1>
          </div>
        </section>

        <div className="lux-container">
          
          <section className="about-intro-section">
            <span className="accent-tag">OUR STORY</span>
            <h2>Making live music booking as exciting as the event itself</h2>
            <p>
              At Magnevents, we believe booking live entertainment should feel like a celebration, not a hassle. 
              Whether it's a cozy house party, a heartfelt wedding singer, or a full live band for a corporate gathering 
              — we arrange it all effortlessly.
            </p>
            <p>
              Our carefully curated network includes talented solo singers, anchors, comedians, acoustic duos, and authentic Sufi bands. 
              From Gurgaon to Noida, and across Delhi NCR, we are only a few clicks away from making your event truly unforgettable.
            </p>
          </section>

          <section className="about-values-grid">
            <ValueCard 
              title="Handpicked for You"
              desc="Every singer and band is carefully selected to match your unique event style, vibe, and budget every single time."
            />
            <ValueCard 
              title="Hassle-Free Booking"
              desc="From your first call to the final song, our team takes care of every detail. Enjoy a smooth musician booking service."
            />
            <ValueCard 
              title="Complete Setup"
              desc="We provide great artists plus professional sound engineers and equipment—so you enjoy music without zero extra hassle."
            />
          </section>

          <section className="about-cta-section">
            <h2>Ready to bring your event to life?</h2>
            <p>Trusted by families, couples, and societies for unforgettable live music experiences. Let's make your next event sing!</p>
            <div className="cta-group">
              <Link href="/book" className="fx-glow-button">Book Your Artist Now</Link>
              <Link href="/artists" className="about-secondary-cta">Explore Talent</Link>
            </div>
          </section>

        </div>
      </main>
    </AppShellWrapper>
  )
}

function ValueCard({ title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="value-card"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  )
}

