"use client";

import { motion } from 'framer-motion'

export default function ArtistCard({ artist, onBook }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="artist-card"
    >
      <div className="artist-img-wrap">
        <img src={artist.img} alt={artist.name} />
        <span className="artist-badge">{artist.badge}</span>
      </div>
      <div className="artist-info">
        <h3>{artist.name}</h3>
        <div className="artist-tags">
          {artist.tags.map(tag => (
            <span key={tag} className="artist-tag">{tag}</span>
          ))}
        </div>
        <div className="artist-stats">
          <div className="artist-price">
            <span>Starting at</span><br />
            {artist.price}
          </div>
          <button 
            className="artist-book-btn"
            onClick={() => onBook(artist.name)}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}
