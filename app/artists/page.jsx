"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import ArtistCard from '@/app/components/artists/ArtistCard'
import { ALL_ARTISTS, ARTISTS_CAT_FILTER } from '@/app/constants'
import '@/app/styles/pages/Artists.css'

/**
 * ArtistsPage Component
 * 
 * Displays a filterable grid of elite performers.
 * Refactored to use modular ArtistCard and centralized constants.
 */
export default function ArtistsPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArtists = activeCategory === 'All' 
    ? ALL_ARTISTS 
    : ALL_ARTISTS.filter(a => a.category === activeCategory)

  const handleBook = (name) => {
    router.push(`/book?artist=${encodeURIComponent(name)}`)
  }

  return (
    <main className="artists-page">
      <div className="lux-container">
        
        <header className="artists-header">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Elite <span className="text-gradient">Performers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Handpicked talent curated for the most extraordinary events across the globe.
          </motion.p>
        </header>

        <div className="artists-filters">
          {ARTISTS_CAT_FILTER.map((cat, idx) => (
            <motion.button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="artists-grid">
          <AnimatePresence mode='popLayout'>
            {filteredArtists.map((artist) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                onBook={handleBook} 
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </main>
  )
}

