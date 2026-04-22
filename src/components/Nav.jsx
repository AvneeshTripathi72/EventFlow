"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from '../contexts/ThemeContext'
import BrandMark from './BrandMark'
import ContactModal from './ContactModal'
import { motion, AnimatePresence } from 'framer-motion'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Category',
    path: '/artists',
    isMega: true,
    children: [
      { label: 'Singer', path: '/artists?category=Singer' },
      { label: 'Music band', path: '/artists?category=Band' },
      { label: 'Dj', path: '/artists?category=Dj' },
      { label: 'Musician', path: '/artists?category=Musician' },
      { label: 'Comedian', path: '/artists?category=Comedian' },
      { label: 'Emcee', path: '/artists?category=Emcee' },
      { label: 'Celebrity', path: '/artists?category=Celebrity' },
      { label: 'Dancer', path: '/artists?category=Dancer' },
      { label: 'Speaker', path: '/artists?category=Speaker' },
    ],
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
]

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => {
      const isScrolled = window.scrollY > threshold
      setScrolled(prev => prev !== isScrolled ? isScrolled : prev)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

export default function Nav() {
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [modalType, setModalType] = useState('booking') // 'booking' | 'contact'
  
  const searchRef = useRef(null)
  const scrolled = useScrolled(8)
  const isLight = resolvedTheme === 'light'

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleOpenModal = () => {
      setContactModalOpen(true)
      setMenuOpen(false)
    }
    window.addEventListener('open-contact-modal', handleOpenModal)
    return () => window.removeEventListener('open-contact-modal', handleOpenModal)
  }, [])

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus()
  }, [searchOpen])

  function handleSearchSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return
    setSearchOpen(false)
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setQuery('')
  }

  function isLinkActive(path) {
    return pathname === path
  }

  return (
    <>
      <nav className={`lux-nav ${isLight ? 'is-light' : 'is-dark'} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="lux-nav-glow" aria-hidden="true" />
        <div className="lux-nav-inner">
          <Link href="/" className="lux-nav-brand" aria-label="Go to home">
            <BrandMark size="md" light={false} />
          </Link>

          <div className="lux-nav-center" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              link.children 
                ? (
                  <div key={link.label} className={`lux-nav-dropdown-wrap ${link.isMega ? 'is-mega' : ''}`}>
                    <Link href={link.path} className={`lux-nav-link ${isLinkActive(link.path) ? 'is-active' : ''}`}>
                      {link.label} <span className="lux-dropdown-icon">▾</span>
                    </Link>
                    <div className={`lux-nav-dropdown ${link.isMega ? 'lux-mega-menu' : ''}`} role="menu">
                      <div className="lux-mega-content">
                        <div className="lux-mega-brand-side">
                          <h4 className="lux-mega-title">Discover Talent</h4>
                          <p className="lux-mega-subtitle">Explore our elite selection of world-class performers for every occasion.</p>
                          <div className="lux-mega-brand-line" />
                        </div>
                        <div className="lux-dropdown-grid">
                          {link.children.map(child => (
                            <Link key={child.path} href={child.path} className="lux-nav-dropdown-link" role="menuitem">
                              <span className="lux-link-dot"></span>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
                : (
                  <Link 
                    key={link.path} 
                    href={link.label === 'Contact Us' ? '#' : link.path} 
                    className={`lux-nav-link ${link.label === 'Contact Us' ? 'lux-nav-link-gold' : ''} ${isLinkActive(link.path) ? 'is-active' : ''}`}
                    onClick={(e) => {
                      if (link.label === 'Contact Us') {
                        e.preventDefault();
                        setModalType('contact');
                        setContactModalOpen(true);
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                )
            ))}
          </div>

          <div className="lux-nav-right">
            <button className="lux-icon-btn" onClick={() => setSearchOpen(true)} aria-label="Open search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button 
              onClick={() => {
                setModalType('booking');
                setContactModalOpen(true);
              }} 
              className="lux-nav-chat fx-glow-button"
              aria-label="Share artist details"
            >
              Artist Details Share
            </button>

            <button className={`lux-hamburger ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Panel */}
      <aside className={`lux-mobile-panel ${menuOpen ? 'open' : ''} ${isLight ? 'is-light' : 'is-dark'}`}>
        <div className="lux-mobile-panel-head">
          <BrandMark size="sm" light={false} />
          <span>Menu</span>
        </div>

        {NAV_LINKS.map(link => (
          <div key={link.label}>
            <Link 
              href={link.label === 'Contact Us' ? '#' : link.path} 
              className={`lux-mobile-link ${isLinkActive(link.path) ? 'is-active' : ''}`}
              onClick={(e) => {
                if (link.label === 'Contact Us') {
                  e.preventDefault();
                  setModalType('contact');
                  setContactModalOpen(true);
                  setMenuOpen(false);
                } else if (!link.children) {
                  setMenuOpen(false);
                }
              }}
            >
              {link.label}
            </Link>
            {link.children && (
              <div className="lux-mobile-submenu">
                {link.children.map(child => (
                  <Link key={child.path} href={child.path} onClick={() => setMenuOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button 
          onClick={() => {
            setModalType('booking');
            setContactModalOpen(true);
            setMenuOpen(false);
          }} 
          className="lux-mobile-signup" 
          style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}
        >
          Artist Details Share
        </button>
      </aside>

      {menuOpen && <button type="button" className="lux-mobile-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="lux-search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button type="button" className="lux-search-dismiss" aria-label="Close search" onClick={() => setSearchOpen(false)} />
            <motion.div 
              className="lux-search-panel"
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
            >
              <form onSubmit={handleSearchSubmit}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  ref={searchRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search artists, bands, genres..."
                  aria-label="Search"
                />
                <button type="button" className="lux-search-esc" onClick={() => setSearchOpen(false)}>ESC</button>
              </form>
              <p>Try: Bollywood Singer, Sufi Band, Wedding DJ</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        initialType={modalType}
      />
    </>
  )
}
