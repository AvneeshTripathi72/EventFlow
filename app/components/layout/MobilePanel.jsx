"use client";

import Link from 'next/link'
import BrandMark from '@/app/components/common/BrandMark'
import { NAV_LINKS } from '@/app/constants'

export default function MobilePanel({ isOpen, onClose, isLight, pathname, onOpenContactModal }) {
  function isLinkActive(path) {
    return pathname === path
  }

  return (
    <>
      <aside className={`lux-mobile-panel ${isOpen ? 'open' : ''} ${isLight ? 'is-light' : 'is-dark'}`}>
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
                  onOpenContactModal('contact');
                  onClose();
                } else if (!link.children) {
                  onClose();
                }
              }}
            >
              {link.label}
            </Link>
            {link.children && (
              <div className="lux-mobile-submenu">
                {link.children.map(child => (
                  <Link key={child.path} href={child.path} onClick={onClose}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button 
          onClick={() => {
            onOpenContactModal('booking');
            onClose();
          }} 
          className="lux-mobile-signup" 
          style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}
        >
          Artist Details Share
        </button>
      </aside>
      {isOpen && <button type="button" className="lux-mobile-backdrop" aria-label="Close menu" onClick={onClose} />}
    </>
  )
}
