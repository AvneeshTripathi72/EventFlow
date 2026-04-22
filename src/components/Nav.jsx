"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '../contexts/ThemeContext'
import BrandMark from './BrandMark'
import ContactModal from './ContactModal'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const handler = () => setY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return y
}

export default function Nav() {
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const scrollY = useScrollY()

  const [menuOpen, setMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const isLight = resolvedTheme === 'light'
  const scrolled = scrollY > 8

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const body = document.body
    if (!body) return
    if (menuOpen) {
      body.style.overflow = 'hidden'
      return () => {
        body.style.overflow = ''
      }
    }
    body.style.overflow = ''
  }, [menuOpen])

  function isLinkActive(path) {
    return pathname === path
  }

  return (
    <>
      <nav className={`lux-nav ${isLight ? 'is-light' : 'is-dark'} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="lux-nav-glow" aria-hidden="true" />
        <div className="lux-nav-inner">
          <Link href="/" className="lux-nav-brand" aria-label="Go to home">
            <img 
              src="/assets/magnevents-logo.jpg" 
              alt="Magnevents" 
              style={{ height: '40px', width: 'auto', display: 'block' }} 
            />
          </Link>

          <div className="lux-nav-center" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <Link 
                key={link.path} 
                href={link.label === 'Contact' ? '#' : link.path} 
                className={`lux-nav-link ${isLinkActive(link.path) ? 'is-active' : ''}`}
                onClick={(e) => {
                  if (link.label === 'Contact') {
                    e.preventDefault();
                    setContactModalOpen(true);
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="lux-nav-right">
            <button className={`lux-hamburger ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <aside className={`lux-mobile-panel ${menuOpen ? 'open' : ''} ${isLight ? 'is-light' : 'is-dark'}`}>
        <div className="lux-mobile-panel-head">
          <BrandMark size="sm" light={false} />
          <span>Menu</span>
        </div>

        {NAV_LINKS.map(link => (
          <Link 
            key={link.path} 
            href={link.label === 'Contact' ? '#' : link.path} 
            className={`lux-mobile-link ${isLinkActive(link.path) ? 'is-active' : ''}`}
            onClick={(e) => {
              if (link.label === 'Contact') {
                e.preventDefault();
                setContactModalOpen(true);
                setMenuOpen(false);
              } else {
                setMenuOpen(false);
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </aside>

      {menuOpen && <button type="button" className="lux-mobile-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  )
}
