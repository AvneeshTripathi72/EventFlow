"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ArtistCard({ artist, onBook }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="artist-card"
    >
      <div className="artist-img-container">
        <Image 
          src={artist.img || '/assets/lux-hero-artist.jpg'} 
          alt={artist.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="artist-main-img"
        />
        <div className="artist-img-overlay" />
        {artist.badge && (
          <div className="artist-premium-badge">
            <span className="badge-dot"></span>
            {artist.badge}
          </div>
        )}
      </div>

      <div className="artist-glass-body">
        <div className="artist-meta-top">
          <h3>{artist.name}</h3>
          <div className="artist-genre-list">
            {artist.tags.join(' • ')}
          </div>
        </div>

        <div className="artist-footer">
          <div className="artist-pricing-block">
            <span className="price-label">Starting at</span>
            <div className="price-value">{artist.price}</div>
          </div>
          <button 
            className="artist-action-btn"
            onClick={() => onBook(artist.name)}
          >
            <span>Book Now</span>
            <div className="btn-glow" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
