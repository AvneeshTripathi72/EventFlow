"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ContactModal.css'

export default function ContactModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('user') // 'user' or 'artist'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  })

  const [artistForm, setArtistForm] = useState({
    talentName: '',
    category: 'Singer',
    experience: '',
    portfolio: '',
    phone: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setActiveTab('user')
      setUserForm({ name: '', email: '', phone: '', eventDate: '', message: '' })
      setArtistForm({ talentName: '', category: 'Singer', experience: '', portfolio: '', phone: '' })
    }, 2500)
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
        >
          <button className="lux-modal-close" onClick={onClose} aria-label="Close modal">✕</button>

          <div className="lux-modal-header">
            <h3>{activeTab === 'user' ? 'Book an Artist' : 'Join Our Roster'}</h3>
            <p>{activeTab === 'user' ? 'Fill your details to contact our vendor team' : 'Send your details to showcase your talent'}</p>
          </div>

          {!submitted && (
            <div className="lux-modal-tabs">
              <button 
                className={`lux-tab-btn ${activeTab === 'user' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('user')}
              >
                User Form
              </button>
              <button 
                className={`lux-tab-btn ${activeTab === 'artist' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('artist')}
              >
                Artist Form
              </button>
            </div>
          )}

          {submitted ? (
            <div className="lux-modal-success">
              <div className="lux-success-icon">✓</div>
              <h4>Application Sent!</h4>
              <p>We have received your details and will get back to you shortly.</p>
            </div>
          ) : (
            <form className="lux-modal-form" onSubmit={handleSubmit}>
              {activeTab === 'user' ? (
                <>
                  <div className="lux-form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" required placeholder="Full Name"
                      value={userForm.name}
                      onChange={e => setUserForm({...userForm, name: e.target.value})}
                    />
                  </div>
                  <div className="lux-form-row">
                    <div className="lux-form-group">
                      <label>Email</label>
                      <input 
                        type="email" required placeholder="email@example.com"
                        value={userForm.email}
                        onChange={e => setUserForm({...userForm, email: e.target.value})}
                      />
                    </div>
                    <div className="lux-form-group">
                      <label>Phone</label>
                      <input 
                        type="tel" required placeholder="+91"
                        value={userForm.phone}
                        onChange={e => setUserForm({...userForm, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="lux-form-group">
                    <label>Event Date</label>
                    <input 
                      type="date" required
                      value={userForm.eventDate}
                      onChange={e => setUserForm({...userForm, eventDate: e.target.value})}
                    />
                  </div>
                  <div className="lux-form-group">
                    <label>Special Requests</label>
                    <textarea 
                      rows="3" placeholder="Tell us about your event requirement..."
                      value={userForm.message}
                      onChange={e => setUserForm({...userForm, message: e.target.value})}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="lux-form-group">
                    <label>Artist / Band Name</label>
                    <input 
                      type="text" required placeholder="Your Stage Name"
                      value={artistForm.talentName}
                      onChange={e => setArtistForm({...artistForm, talentName: e.target.value})}
                    />
                  </div>
                  <div className="lux-form-row">
                    <div className="lux-form-group">
                      <label>Category</label>
                      <select 
                        value={artistForm.category}
                        onChange={e => setArtistForm({...artistForm, category: e.target.value})}
                        className="lux-select"
                      >
                        <option>Singer</option>
                        <option>Music Band</option>
                        <option>DJ</option>
                        <option>Dancer</option>
                        <option>Comedian</option>
                      </select>
                    </div>
                    <div className="lux-form-group">
                      <label>Experience (Years)</label>
                      <input 
                        type="number" required placeholder="e.g. 5"
                        value={artistForm.experience}
                        onChange={e => setArtistForm({...artistForm, experience: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="lux-form-group">
                    <label>Portfolio / Social Link</label>
                    <input 
                      type="url" required placeholder="Instagram/YouTube Link"
                      value={artistForm.portfolio}
                      onChange={e => setArtistForm({...artistForm, portfolio: e.target.value})}
                    />
                  </div>
                  <div className="lux-form-group">
                    <label>WhatsApp Number</label>
                    <input 
                      type="tel" required placeholder="+91"
                      value={artistForm.phone}
                      onChange={e => setArtistForm({...artistForm, phone: e.target.value})}
                    />
                  </div>
                </>
              )}

              <div className="lux-modal-footer">
                <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-submit fx-glow-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
