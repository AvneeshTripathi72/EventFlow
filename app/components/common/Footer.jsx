import Link from 'next/link';
import BrandMark from '@/app/components/common/BrandMark';
import '@/app/styles/components/Footer.css';

/**
 * Footer Component
 * 
 * A premium, full-width footer with brand information, structured links, 
 * and social media integration.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lux-footer">
      <div className="lux-footer-container">
        <div className="lux-footer-grid">
          
          {/* Brand Column */}
          <div className="lux-footer-brand">
            <div className="lux-footer-brand-wrap">
              <Link href="/">
                <BrandMark size="md" light={true} />
              </Link>
            </div>
            <p className="lux-footer-desc">
              Curating elite live music experiences for weddings, corporate events, and private gatherings across the globe.
            </p>
            <div className="lux-footer-socials">
              <a href="#" className="lux-footer-social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="lux-footer-social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.17-2.33 3.67c-1.33 1.5-3.33 2.5-5.33 2.5a6 6 0 0 1-6-6c0-1 2-1 2-1s1 2.17 2.33 3.67c1.33 1.5 3.33 2.5 5.33 2.5s2-2 2-2z"/></svg>
              </a>
              <a href="#" className="lux-footer-social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lux-footer-col">
            <h4>Platform</h4>
            <ul className="lux-footer-links">
              <li><Link href="/artists" className="lux-footer-link">Browse Artists</Link></li>
              <li><Link href="/pricing" className="lux-footer-link">Pricing Plans</Link></li>
              <li><Link href="/gallery" className="lux-footer-link">Event Gallery</Link></li>
              <li><Link href="/how-to-book" className="lux-footer-link">How it Works</Link></li>
            </ul>
          </div>

          <div className="lux-footer-col">
            <h4>Company</h4>
            <ul className="lux-footer-links">
              <li><Link href="/about" className="lux-footer-link">Our Story</Link></li>
              <li><Link href="/services" className="lux-footer-link">Services</Link></li>
              <li><Link href="/why-choose" className="lux-footer-link">Why Choose Us</Link></li>
              <li><Link href="/contact" className="lux-footer-link">Contact Support</Link></li>
            </ul>
          </div>

          <div className="lux-footer-col">
            <h4>Resources</h4>
            <ul className="lux-footer-links">
              <li><Link href="/faq" className="lux-footer-link">Help Center</Link></li>
              <li><Link href="/testimonials" className="lux-footer-link">Client Reviews</Link></li>
              <li><Link href="/search" className="lux-footer-link">Search Site</Link></li>
              <li><Link href="/book" className="lux-footer-link">Instant Booking</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="lux-footer-bottom">
          <div className="lux-footer-copyright">
            © {currentYear} Magnevents. All rights reserved. Designed for Excellence.
          </div>
          <div className="lux-footer-legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
