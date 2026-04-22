"use client"

import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './Gallery.css'

const GALLERY_ITEMS = [
  { id: 1, img: '/assets/lux-hero-artist.jpg', title: 'Grand Finale Gurgaon', size: 'large' },
  { id: 2, img: '/assets/lux-wedding-celebration.jpg', title: 'Palace Wedding Jaipur', size: 'small' },
  { id: 3, img: '/assets/lux-live-band-concert.jpg', title: 'Corporate Gala Delhi', size: 'small' },
  { id: 4, img: '/assets/lux-singer-session.webp', title: 'Intimate Soiree Noida', size: 'medium' },
  { id: 5, img: '/assets/male-singer-acoustic.jpg', title: 'Acoustic Night', size: 'medium' },
  { id: 6, img: '/assets/wedding-anchor-stage.jpg', title: 'Star Anchor Session', size: 'large' }
]

export default function GalleryPage() {
  return (
    <AppShellWrapper>
      <main className="gallery-page-layout">
        <div className="lux-container">
          <header className="gallery-header">
            <span className="accent-tag">MOMENTS</span>
            <h1>Live <span className="text-gradient">Gallery</span></h1>
            <p>A visual journey through the most extraordinary performances curated by Magnevents.</p>
          </header>

          <div className="gallery-masonry">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`gallery-item ${item.size}`}
              >
                <div className="gallery-media">
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
