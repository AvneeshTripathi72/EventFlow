"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ArtistCard({ artist, onBook }) {
  // Generic quote if none provided
  const quote = artist.quote || "Bringing the soul of music to your special moments.";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="artist-card-v2"
    >
      <div className="card-inner">
        {/* Top Section: Circular Image */}
        <div className="artist-avatar-container">
          <div className="avatar-ring">
            <div className="avatar-img-wrapper">
              <Image 
                src={artist.img || '/assets/lux-hero-artist.jpg'} 
                alt={artist.name}
                fill
                sizes="200px"
                className="artist-avatar-img"
              />
            </div>
            {/* Music Note Icon Overlay */}
            <div className="note-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="artist-info-v2">
          <h3 className="artist-name-v2">{artist.name}</h3>
          
          <div className="category-badge-v2">
            {artist.category || 'PERFORMER'}
          </div>

          <p className="artist-quote-v2">
            "{quote}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="artist-actions-v2">
          <button 
            className="action-btn-v2 listen-btn"
            onClick={() => onBook(artist.name)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            <span>Listen</span>
          </button>
          
          <button className="action-btn-v2 heart-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="card-glow-v2" />
    </motion.div>
  )
}
