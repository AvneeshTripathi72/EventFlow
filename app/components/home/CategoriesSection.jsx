"use client";

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import FadeSection from '@/app/components/common/FadeSection'
import { ARTIST_CATEGORIES } from '@/app/constants'

export default function CategoriesSection() {
  const [catPage, setCatPage] = useState(0)
  const catPerPage = 4
  const totalCatPages = Math.ceil(ARTIST_CATEGORIES.length / catPerPage)
  const moveCat = (dir) => setCatPage(p => (p + dir + totalCatPages) % totalCatPages)

  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-cat-section">
        <div className="hp-cat-header">
          <h2 className="hp-cat-title">Artist Categories</h2>
        </div>

        <div className="hp-cat-carousel-wrap">
          <button className="lux-arrow-btn is-left" onClick={() => moveCat(-1)} aria-label="Previous categories">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          <div className="hp-cat-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={catPage}
                className="hp-cat-grid"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {ARTIST_CATEGORIES.slice(catPage * catPerPage, catPage * catPerPage + catPerPage).map((cat, i) => (
                  <Link key={cat.label} href={`/artists?category=${cat.query}`} className="hp-cat-card">
                    <div className="hp-cat-img-wrap">
                      <Image 
                        src={cat.image} 
                        alt={cat.label} 
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <span className="hp-cat-label">{cat.label.toUpperCase()}</span>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="lux-arrow-btn" onClick={() => moveCat(1)} aria-label="Next categories">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="hp-cat-dots">
          {Array.from({ length: totalCatPages }).map((_, i) => (
            <button
              key={i}
              className={`hp-cat-dot ${catPage === i ? 'is-active' : ''}`}
              onClick={() => setCatPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </FadeSection>
  )
}
