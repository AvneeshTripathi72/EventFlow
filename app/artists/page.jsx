"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './Artists.css'

const CATEGORIES = ['All', 'Singers', 'Bands', 'DJs', 'Instrumentalists', 'Stage Shows']

const ARTISTS = [
  {
    id: 1,
    name: 'Siddharth Basrur',
    category: 'Singers',
    tags: ['Bollywood', 'Playback', 'Rock'],
    price: '?75,000',
    img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600',
    badge: 'Trending'
  },
  {
    id: 2,
    name: 'The Yellow Diary',
    category: 'Bands',
    tags: ['Alt-Rock', 'Indie', 'Fusion'],
    price: '?2,50,000',
    img: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600',
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'DJ Shaan',
    category: 'DJs',
    tags: ['EDM', 'House', 'Commercial'],
    price: '?1,20,000',
    img: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 4,
    name: 'Rahul Dua',
    category: 'Stage Shows',
    tags: ['Standup', 'Corporate', 'Comedy'],
    price: '?1,50,000',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=600',
    badge: 'Exclusive'
  },
  {
    id: 5,
    name: 'Anirudh Varma',
    category: 'Instrumentalists',
    tags: ['Classical', 'Piano', 'Fusion'],
    price: '?90,000',
    img: 'https://images.unsplash.com/photo-1520522186724-41585811d33d?auto=format&fit=crop&q=80&w=600',
    badge: 'Featured'
  },
  {
    id: 6,
    name: 'Kavita Seth',
    category: 'Singers',
    tags: ['Sufi', 'Ghazal', 'Folk'],
    price: '?3,00,000',
    img: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600',
    badge: 'Legendary'
  }
]

export default function ArtistsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArtists = activeCategory === 'All' 
    ? ARTISTS 
    : ARTISTS.filter(a => a.category === activeCategory)

  const handleBook = (name) => {
    // Custom event to open ContactModal
    const event = new CustomEvent('open-contact-modal', { detail: { artist: name } })
    window.dispatchEvent(event)
  }

  return (
    <AppShellWrapper>
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
            {CATEGORIES.map((cat, idx) => (
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
                <motion.div
                  key={artist.id}
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
                        onClick={() => handleBook(artist.name)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </main>
    </AppShellWrapper>
  )
}
