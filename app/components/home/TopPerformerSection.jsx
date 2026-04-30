"use client";

import Image from 'next/image'
import Link from 'next/link'
import FadeSection from '@/app/components/common/FadeSection'
import Stars from '@/app/components/common/Stars'
import { ARTIST_OF_MONTH } from '@/app/constants'
import { formatINR } from '@/app/utils/formatters'

export default function TopPerformerSection() {
  return (
    <FadeSection className="hp-shell hp-block">
      <div className="hp-section-head">
        <h2 className="hp-top-performer-title">Top performer picked this month</h2>
      </div>
      <div className="hp-aom-card">
        <div className="hp-aom-img-wrap">
          <Image 
            src={ARTIST_OF_MONTH.image} 
            alt={ARTIST_OF_MONTH.name} 
            width={400} 
            height={400} 
            style={{ objectFit: 'cover' }}
          />
          <div className="hp-aom-badge">
            <span className="hp-aom-badge-icon">🏆</span>
            Artist of the Month
          </div>
        </div>
        <div className="hp-aom-content">
          <p className="hp-aom-genres">{ARTIST_OF_MONTH.genres.join(', ')}</p>
          <h3 className="hp-aom-name">{ARTIST_OF_MONTH.name}</h3>
          
          <div className="hp-aom-stats-grid">
            <div className="hp-aom-stat-row">
              <span>Original Price</span>
              <strong>Rs {formatINR(ARTIST_OF_MONTH.originalPrice)}</strong>
            </div>
            <div className="hp-aom-stat-row is-exclusive">
              <span>Exclusive Price</span>
              <strong>Rs {formatINR(ARTIST_OF_MONTH.exclusivePrice)}</strong>
            </div>
            <div className="hp-aom-stat-row">
              <span>Star Rating</span>
              <div className="hp-aom-rating">
                <Stars count={5} />
                <strong>{ARTIST_OF_MONTH.rating}/5</strong>
              </div>
            </div>
            <div className="hp-aom-stat-row">
              <span>Total Bookings</span>
              <strong>{ARTIST_OF_MONTH.bookings}</strong>
            </div>
          </div>

          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal', { 
              detail: { type: 'booking', artist: ARTIST_OF_MONTH.name } 
            }))}
            className="hp-btn hp-aom-btn"
          >
            Book This Artist
          </button>
        </div>
      </div>
    </FadeSection>
  )
}
