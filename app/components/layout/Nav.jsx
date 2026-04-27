"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '@/app/contexts/ThemeContext';
import BrandMark from '@/app/components/common/BrandMark';
import ContactModal from '@/app/components/common/ContactModal';
import SearchOverlay from './SearchOverlay';
import MobilePanel from './MobilePanel';
import { NAV_LINKS } from '@/app/constants';
import '@/app/styles/components/Nav.css';

/**
 * Custom hook to track scroll state
 */
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  return scrolled;
}

export default function Nav() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState('booking');
  
  const searchRef = useRef(null);
  const scrolled = useScrolled(20);
  const isLight = resolvedTheme === 'light';

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOpenModal = () => {
      setContactModalOpen(true);
      setMenuOpen(false);
    };
    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery('');
  }

  const openContactModal = (type) => {
    setModalType(type);
    setContactModalOpen(true);
  };

  return (
    <>
      <nav className={`lux-nav ${isLight ? 'is-light' : 'is-dark'} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="lux-nav-glow" aria-hidden="true" />
        <div className="lux-nav-inner">
          
          <Link href="/" className="lux-nav-brand">
            <BrandMark size="md" light={false} />
          </Link>

          <div className="lux-nav-center">
            {NAV_LINKS.map(link => (
              <div key={link.label} className={`lux-nav-dropdown-wrap ${link.isMega ? 'is-mega' : ''}`}>
                <Link 
                  href={link.path || '#'} 
                  className={`lux-nav-link ${pathname === link.path ? 'is-active' : ''} ${link.label === 'Contact Us' ? 'lux-nav-link-gold' : ''}`}
                  onClick={(e) => {
                    if (link.label === 'Contact Us') {
                      e.preventDefault();
                      openContactModal('contact');
                    }
                  }}
                >
                  {link.label} {link.children && <span className="lux-dropdown-icon">▾</span>}
                </Link>

                {link.children && (
                  <div className={`lux-nav-dropdown ${link.isMega ? 'lux-mega-menu' : ''}`}>
                    <div className="lux-dropdown-grid">
                      {link.children.map(child => (
                        <Link key={child.path} href={child.path} className="lux-nav-dropdown-link">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lux-nav-right">
            <button className="lux-icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button onClick={() => openContactModal('booking')} className="lux-nav-chat">
              Book Artist
            </button>

            <button className={`lux-hamburger ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </nav>

      <MobilePanel 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        isLight={isLight} 
        pathname={pathname}
        onOpenContactModal={openContactModal}
      />

      <SearchOverlay 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        query={query} 
        onQueryChange={e => setQuery(e.target.value)}
        onSubmit={handleSearchSubmit}
        searchRef={searchRef}
      />

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        initialType={modalType}
      />
    </>
  );
}
