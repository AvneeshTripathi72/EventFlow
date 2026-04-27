"use client";

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
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
      <div className="hp-feat-head">
        <div className="hp-section-head">
          <p className="hp-eyebrow">⭐ Featured Artists</p>
          <h2>Profiles with genre, bookings, and ratings</h2>
        </div>
        <div className="hp-feat-actions">
          <Link href="/artists" className="hp-see-all">See all →</Link>
          <div className="hp-feat-controls" aria-label="Featured artists slider controls">
            <button
              type="button"
              className="hp-feat-control"
              onClick={() => moveFeatured(-1)}
              aria-label="Previous featured artists"
            >
              ←
            </button>
            <button
              type="button"
              className="hp-feat-control"
              onClick={() => moveFeatured(1)}
              aria-label="Next featured artists"
            >
              →
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="hp-feat-card">
              <div className="hp-feat-img-wrap">
                <img src={artist.image} alt={artist.name} loading="lazy" decoding="async" />
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
