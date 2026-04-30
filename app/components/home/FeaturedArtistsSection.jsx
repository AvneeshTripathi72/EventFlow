"use client";

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'
import TiltCard from '@/app/components/common/TiltCard'
import Stars from '@/app/components/common/Stars'
import { FEATURED_ARTISTS } from '@/app/constants'

export default function FeaturedArtistsSection() {
  const [pauseFeatured, setPauseFeatured] = useState(false)
  const featuredRef = useRef(null)

  const moveFeatured = (direction) => {
    const scroller = featuredRef.current
    if (!scroller) return
    const card = scroller.querySelector('[data-featured-card]')
    const cardWidth = card ? card.getBoundingClientRect().width + 16 : scroller.clientWidth * 0.86
    const maxLeft = scroller.scrollWidth - scroller.clientWidth - 4
    const atEnd = scroller.scrollLeft >= maxLeft
    const atStart = scroller.scrollLeft <= 2

    if (direction > 0 && atEnd) {
      scroller.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    if (direction < 0 && atStart) {
      scroller.scrollTo({ left: maxLeft, behavior: 'smooth' })
      return
    }

    scroller.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const id = window.setInterval(() => {
      if (!pauseFeatured) moveFeatured(1)
    }, 3400)

    return () => window.clearInterval(id)
  }, [pauseFeatured])

  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-feat-head" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
        <div className="hp-section-head" style={{ textAlign: 'center', margin: 0 }}>
          <h2>Featured Artists</h2>
        </div>
        <div className="hp-feat-actions" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link href="/artists" className="hp-see-all">See all →</Link>
          <div className="hp-feat-controls" aria-label="Featured artists slider controls">
            <button
              type="button"
              className="lux-arrow-btn is-left"
              onClick={() => moveFeatured(-1)}
              aria-label="Previous featured artists"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <button
              type="button"
              className="lux-arrow-btn"
              onClick={() => moveFeatured(1)}
              aria-label="Next featured artists"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="hp-feat-carousel"
        ref={featuredRef}
        onMouseEnter={() => setPauseFeatured(true)}
        onMouseLeave={() => setPauseFeatured(false)}
      >
        {FEATURED_ARTISTS.map((artist, i) => (
          <motion.div
            key={artist.name}
            className="hp-feat-slide"
            data-featured-card
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
          >
            <TiltCard className="hp-feat-card">
              <div className="hp-feat-img-wrap">
                <Image 
                  src={artist.image} 
                  alt={artist.name} 
                  width={320} 
                  height={400} 
                  style={{ objectFit: 'cover' }}
                />
                <div className="hp-feat-overlay">
                  <span className="hp-feat-live-pill">Live preview</span>
                </div>
              </div>
              <div className="hp-feat-info">
                <span className="hp-feat-genre">{artist.genre}</span>
                <h3>{artist.name}</h3>
                <p className="hp-feat-location">{artist.city}</p>
                <div className="hp-feat-meta">
                  <Stars count={Math.round(Number(artist.rating))} />
                  <span>{artist.rating} · {artist.bookings}</span>
                </div>
                <div className="hp-feat-book-row">
                  <Link
                    href={`/book?artist=${encodeURIComponent(artist.name)}&genre=${encodeURIComponent(artist.genre)}`}
                    className="hp-feat-book-btn"
                  >
                    Book This Artist
                  </Link>
                  <Link href="/artists" className="hp-feat-view-btn">View Profile</Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </FadeSection>
  )
}
