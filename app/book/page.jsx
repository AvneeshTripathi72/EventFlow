"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import { bookingService } from '@/app/services/bookingService'
import '@/app/styles/pages/Book.css'

export default function BookPage() {
  const searchParams = useSearchParams()
  const artistName = searchParams.get('artist') || ''
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artistType: artistName || '',
    eventType: '',
    date: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (artistName) {
      setFormData(prev => ({ ...prev, artistType: artistName }))
    }
  }, [artistName])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await bookingService.submitRequest(formData)
      setIsSubmitting(false)
      setSubmitted(true)
    } catch (error) {
      console.error("Booking error:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <AppShellWrapper>
      <main className="book-page">
        <div className="lux-container book-content">
          
          <header className="book-header">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="accent-tag"
            >
              Reservations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Secure Your <span className="text-gradient">Prime Date</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Tell us your vision, and we will find the perfect stage presence for you.
            </motion.p>
          </header>

          <div className="book-form-container">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="booking-success-box"
              >
                <div className="success-icon">✓</div>
                <h2>Booking Request Sent!</h2>
                <p>Our concierge team will review your request and contact you within 2-6 hours.</p>
                <button onClick={() => window.location.href = '/'} className="return-home-btn">
                  Return to Home
                </button>
              </motion.div>
            ) : (
              <form className="lux-booking-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" required placeholder="Enter your name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" required placeholder="+91"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" required placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Preferred Artist / Category</label>
                    <input 
                      type="text" required placeholder="e.g. Sufi Singer, Band"
                      value={formData.artistType}
                      onChange={e => setFormData({...formData, artistType: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Event Date</label>
                    <input 
                      type="date" required
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Event Type</label>
                    <select 
                      required
                      value={formData.eventType}
                      onChange={e => setFormData({...formData, eventType: e.target.value})}
                    >
                      <option value="">Select Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate</option>
                      <option value="party">Private Party</option>
                      <option value="concert">Concert</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Event Details & Requirements</label>
                  <textarea 
                    rows="4" required 
                    placeholder="Tell us about the venue, audience size, and any special requests..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="form-footer">
                  <button type="submit" className="booking-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing Request...' : 'Confirm Priority Booking'}
                    <div className="btn-shine" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>
    </AppShellWrapper>
  )
}

