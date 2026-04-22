"use client"
import Link from 'next/link'
import { useReveal } from '../hooks/useReveal'
import BrandMark from './BrandMark'
import './Footer.css'

const SHOP_LINKS = [
  ['House Party', '/artists?category=singer'],
  ['Wedding Events', '/artists?category=band'],
  ['Corporate Events', '/services'],
  ['Artist Registration', '/onboarding'],
]

const EXPLORE_LINKS = [
  ['Artist Categories', '/artists'],
  ['Live Search', '/search'],
  ['Markets', '/markets'],
  ['Live Gallery', '/gallery'],
  ['Events Calendar', '/events'],
]

const COMPANY_LINKS = [
  ['About Magnevents', '/about'],
  ['Contact Team', '/contact'],
  ['Become an Artist', '/onboarding'],
  ['Booking Support', '/book'],
]

const LEGAL_LINKS = [
  ['Privacy Policy', '/privacy'],
  ['Terms of Use', '/terms'],
  ['Contact Us', 'mailto:magneventsdotin@gmail.com'],
]

function FooterLink({ to, children }) {
  const external = to.startsWith('mailto:') || to.startsWith('http')
  if (external) return <a href={to}>{children}</a>
  return <Link href={to}>{children}</Link>
}

function SocialLink({ href, label, icon, platform }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`lux-footer-social-btn is-${platform}`}
    >
      {icon}
    </a>
  )
}

export default function Footer() {
  const revealRef = useReveal(0.06)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="lux-footer">
      <div className="lux-footer-bg" aria-hidden="true" />
      <div ref={revealRef} className="lux-footer-inner">
        <section className="lux-footer-hero reveal-child fx-soft-card">
          <div>
            <p className="lux-footer-kicker">Magnevents</p>
            <h3>Book Best Wedding Musicians!</h3>
            <p className="lux-footer-copy">
              Artist-first booking for weddings, corporate nights, and concerts with transparent rates and fast confirmations.
            </p>
            <div className="lux-footer-metrics" aria-label="Magnevents highlights">
              <span><strong>18+</strong> cities live</span>
              <span><strong>2K+</strong> artists onboarded</span>
              <span><strong>24h</strong> booking response</span>
            </div>
          </div>
          <Link href="/book" className="lux-footer-hero-cta fx-glow-button">
            Start live inquiry
          </Link>
        </section>

        <section className="lux-footer-newsletter reveal-child">
          <div>
            <h4>Artist slots and prime dates</h4>
            <p>Get alerts before your preferred weekends sell out.</p>
          </div>
          <div className="lux-footer-newsletter-form">
            <input type="email" placeholder="you@example.com" aria-label="Email" />
            <button type="button" className="fx-glow-button">Notify me</button>
          </div>
        </section>

        <section className="lux-footer-grid reveal-child">
          <div className="lux-footer-brand-col">
            <Link href="/" aria-label="Go to home">
              <BrandMark size="sm" light={false} />
            </Link>
            <p>Connecting event hosts with world-class singers, bands, and production teams across India.</p>
            <div className="lux-footer-social-row">
              <SocialLink
                href="https://wa.me/918076515257"
                label="WhatsApp"
                platform="whatsapp"
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
              />
              <SocialLink
                href="https://instagram.com"
                label="Instagram"
                platform="instagram"
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>}
              />
              <SocialLink
                href="https://youtube.com"
                label="YouTube"
                platform="youtube"
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" /></svg>}
              />
            </div>
          </div>

          <div>
            <h5>Shop</h5>
            {SHOP_LINKS.map(([label, to]) => <FooterLink key={label} to={to}>{label}</FooterLink>)}
          </div>

          <div>
            <h5>Explore</h5>
            {EXPLORE_LINKS.map(([label, to]) => <FooterLink key={label} to={to}>{label}</FooterLink>)}
          </div>

          <div>
            <h5>Company</h5>
            {COMPANY_LINKS.map(([label, to]) => <FooterLink key={label} to={to}>{label}</FooterLink>)}
          </div>

          <div>
            <h5>Legal</h5>
            {LEGAL_LINKS.map(([label, to]) => <FooterLink key={label} to={to}>{label}</FooterLink>)}
          </div>
        </section>

        <section className="lux-footer-bottom reveal-child">
          <span>© 2026 Magnevents. Magnevents — Book Best Wedding Musicians!.</span>
          <div className="lux-footer-pills">
            <span>Live Artists</span>
            <span>magneventsdotin@gmail.com</span>
            <span>Event Concierge</span>
          </div>
        </section>
      </div>
    </footer>
  )
}
