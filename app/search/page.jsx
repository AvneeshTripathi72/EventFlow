"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './SearchPage.css'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query) return
    setIsSearching(true)
    // Simulate API call
    setTimeout(() => {
      setResults([
        { id: 1, name: 'Sufi Ensemble', type: 'Band', price: '??? 1.2L+' },
        { id: 2, name: 'Acoustic Soul', type: 'Singer', price: '??? 45k+' },
        { id: 3, name: 'Elite Beats', type: 'DJ', price: '??? 80k+' },
      ])
      setIsSearching(false)
    }, 800)
  }

  return (
    <AppShellWrapper>
      <main className="search-page-layout">
        <div className="lux-container">
          <header className="search-page-header">
            <h1>Discover <span className="text-gradient">Magic</span></h1>
            <p>Search for artists, categories, or events to find your perfect match.</p>
          </header>

          <form className="search-large-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search for 'Sufi Singers', 'Wedding Bands'..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="fx-glow-button">
              {isSearching ? 'Searching...' : 'Find Talent'}
            </button>
          </form>

          <div className="search-results-area">
            <AnimatePresence>
              {results.length > 0 ? (
                <div className="results-grid">
                  {results.map((res, idx) => (
                    <motion.div 
                      key={res.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="result-item fx-soft-card"
                    >
                      <div className="result-main">
                        <h3>{res.name}</h3>
                        <span className="result-type">{res.type}</span>
                      </div>
                      <div className="result-meta">
                        <span className="result-price">{res.price}</span>
                        <button className="result-view-btn">View Profile</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query && !isSearching ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="search-empty"
                >
                  <p>No results found for "{query}". Try searching for categories like "Singers" or "Bands".</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="search-trending">
            <h5>Trending Searches</h5>
            <div className="trending-tags">
              {['Sufi Singers', 'Live Wedding Bands', 'Corporate DJs', 'Violinists', 'Jazz Ensembles'].map(tag => (
                <button key={tag} onClick={() => { setQuery(tag); }}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
