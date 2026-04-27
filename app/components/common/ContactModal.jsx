"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bookingService } from '@/app/services/bookingService'
import '@/app/styles/components/ContactModal.css'

export default function ContactModal({ isOpen, onClose, initialType = 'booking' }) {
  const [formType, setFormType] = useState(initialType) // 'booking' | 'contact'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artistType: '',
    eventType: '',
    date: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Sync with initialType when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormType(initialType)
      setSubmitted(false)
    }
  }, [isOpen, initialType])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await bookingService.submitRequest(formData)
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Auto close after success
      setTimeout(() => {
        onClose()
        setFormData({ name: '', email: '', phone: '', artistType: '', eventType: '', date: '', message: '' })
      }, 2500)
    } catch (error) {
      console.error("Booking error:", error)
      setIsSubmitting(false)
      // In a real app, we'd show an error message to the user here
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="lux-modal-root">
        <motion.div 
          className="lux-modal-backdrop" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        <motion.div 
          className="lux-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          <div className="modal-glow-bg" />
          
          <button className="lux-modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div className="lux-modal-header">
            <div className="header-badge">{formType === 'booking' ? 'ELEVATE YOUR EVENT' : 'DIRECT SUPPORT'}</div>
            <h3>{formType === 'booking' ? 'Reserve Your Artist' : 'Get in Touch'}</h3>
            <p>{formType === 'booking' ? 'Tell us your vision, and we will find the perfect stage presence for you.' : 'Our team is here to help you with any inquiries or custom requests.'}</p>
          </div>

          <div className="form-type-switcher">
            <button 
              className={formType === 'booking' ? 'active' : ''} 
              onClick={() => setFormType('booking')}
            >
              Artist Booking
            </button>
            <button 
              className={formType === 'contact' ? 'active' : ''} 
              onClick={() => setFormType('contact')}
            >
              General Inquiry
            </button>
            <div className={`switcher-bg ${formType}`} />
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lux-modal-success"
            >
              <div className="lux-success-ring">
                 <div className="lux-success-check">✓</div>
              </div>
              <h4>Submission Received!</h4>
              <p>Your details have been securely sent. A booking concierge will reach out to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form className="lux-modal-form" onSubmit={handleSubmit}>
              <div className="lux-form-row">
                <div className="lux-form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" required placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="lux-form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" required placeholder="+91"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="lux-form-group">
                <label>Email Address</label>
                <input 
                  type="email" required placeholder="name@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {formType === 'booking' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="booking-fields-wrap"
                >
                  <div className="lux-form-row">
                    <div className="lux-form-group">
                      <label>Artist Category</label>
                      <select 
                        required
                        value={formData.artistType}
                        onChange={e => setFormData({...formData, artistType: e.target.value})}
                      >
                        <option value="" disabled>Select Type</option>
                        <option value="singer">Singer</option>
                        <option value="band">Live Band</option>
                        <option value="dj">DJ</option>
                        <option value="sufi">Sufi Artist</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="lux-form-group">
                      <label>Event Date</label>
                      <input 
                        type="date" required
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="lux-form-group">
                <label>{formType === 'booking' ? 'Event Details' : 'Message'}</label>
                <textarea 
                  rows="3" required 
                  placeholder={formType === 'booking' ? "Tell us about the venue, audience, and your specific requirements..." : "How can we help you?"}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="lux-modal-footer">
                <button type="submit" className="btn-submit-premium" disabled={isSubmitting}>
                  <span className="btn-text">{isSubmitting ? 'Processing...' : (formType === 'booking' ? 'Request Booking' : 'Send Message')}</span>
                  <div className="btn-glow" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
