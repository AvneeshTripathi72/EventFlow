"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ContactModal.css'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Auto close after success
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 2000)
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button className="lux-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>

          <div className="lux-modal-header">
            <h3>Get in Touch</h3>
            <p>Fill out the details below and our team will get back to you shortly.</p>
          </div>

          {submitted ? (
            <div className="lux-modal-success">
              <div className="lux-success-icon">✓</div>
              <h4>Thank You!</h4>
              <p>Your inquiry has been received. We'll contact you soon.</p>
            </div>
          ) : (
            <form className="lux-modal-form" onSubmit={handleSubmit}>
              <div className="lux-form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="lux-form-row">
                <div className="lux-form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="lux-form-group">
                  <label>Phone</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="lux-form-group">
                <label>How can we help?</label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="lux-modal-footer">
                <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-submit fx-glow-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
