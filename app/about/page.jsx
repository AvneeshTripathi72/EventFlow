"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import '@/src/styles/pages/HomePage.css'

export default function AboutPage() {
  return (
    <div className="hp" style={{ paddingTop: '100px' }}>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hp-hero" style={{ minHeight: '60vh', marginBottom: '80px' }}>
        <div className="hp-hero-bg">
          <img src="/assets/lux-hero-bg.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
        </div>
        <div className="hp-hero-overlay" />
        <div className="hp-shell" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(40px, 7vw, 72px)', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
            Book A <span className="italic-accent">Musician!</span><br />
            For Your <span className="italic-accent">Grand Event!</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '20px', maxWidth: '700px', margin: '24px auto' }}>
            Contact Us on <span style={{ color: '#f6b64e', fontWeight: 700 }}>+91 80765 15257</span>
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
            <Link href="/book" className="hp-btn hp-btn-primary">Book Now</Link>
            <Link href="/artists" className="hp-btn hp-btn-ghost">Look Now</Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────── */}
      <section className="hp-shell hp-block" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="hp-eyebrow">✨ Our Story</p>
          <h2 style={{ fontSize: '36px', color: '#fff', fontFamily: 'var(--font-serif)', marginBottom: '32px' }}>
            Making live music booking as exciting as the event itself
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px' }}>
            At Magnevents, we believe booking live entertainment should feel like a celebration, not a hassle. Whether it is a cozy house party, a heartfelt wedding singer, or a full live band for a corporate gathering — we arrange it all effortlessly.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.8 }}>
            Our carefully curated network includes talented solo singers, anchors, comedians, acoustic duos, and authentic Sufi bands. From Gurgaon to Noida, and across Delhi NCR, we are only a few clicks away from making your event truly unforgettable.
          </p>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="hp-shell hp-block">
        <div className="hp-section-head">
          <p className="hp-eyebrow">🎬 Our Services</p>
          <h2>Tailored for every occasion</h2>
        </div>
        <div className="hp-services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <ServiceCard 
            title="Book a Singer for House Party"
            desc="Turn your house party into an unforgettable night! Hire a professional live singer in Delhi for intimate gatherings or big celebrations. From solo artists to affordable live singers, we make booking simple."
            img="/assets/lux-singer-session.webp"
          />
          <ServiceCard 
            title="Live Band for Weddings"
            desc="Make your big day magical with the best live band. Our wedding musicians bring every emotion to life. We provide everything from romantic singers to high-energy bands. Create memories that last a lifetime!"
            img="/assets/lux-wedding-celebration.jpg"
          />
          <ServiceCard 
            title="Corporate Event Excellence"
            desc="Elevate your corporate event with professionalism and energy. From networking dinners to annual meets, our curated musicians add elegance to any gathering. Musician booking made easy."
            img="/assets/lux-live-band-concert.jpg"
          />
          <ServiceCard 
            title="Festive Sufi Evenings"
            desc="Add a soulful touch with authentic Sufi singers. Let your guests experience enchanting live music that sets the perfect mood for festive celebrations. Trusted live music booking service."
            img="/assets/lux-hero-artist.jpg"
          />
        </div>
      </section>

      {/* ── KEY CATEGORIES ────────────────────────────────────────────── */}
      <section className="hp-shell hp-block" style={{ background: 'rgba(255,255,255,0.02)', padding: '60px', borderRadius: '32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-serif)' }}>Artists for Every Vibe</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {['Solo Singer', 'Acoustic DUO', 'Anchor', 'Comedian', 'Live Band', 'Sufi Band'].map(cat => (
            <div key={cat} style={{ textAlign: 'center', padding: '20px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
              <strong style={{ color: '#f6b64e', fontSize: '18px' }}>{cat}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="hp-shell hp-block">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="hp-eyebrow">🛡️ Why Magnevents?</p>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-serif)' }}>Your Trusted Partner for Live Music</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          <WhyBox 
            title="Handpicked for You"
            desc="Every singer and band is carefully selected to match your unique event style, vibe, and budget every single time."
          />
          <WhyBox 
            title="Hassle-Free Booking"
            desc="From your first call to the final song, our team takes care of every detail. Enjoy a smooth musician booking service."
          />
          <WhyBox 
            title="Complete Entertainment Setup"
            desc="We provide great artists plus professional sound engineers and equipment—so you enjoy music without zero extra hassle."
          />
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────────────────────── */}
      <section className="hp-shell hp-block" style={{ background: '#111', padding: '80px 40px', borderRadius: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="hp-eyebrow">🚀 Simple Process</p>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-serif)' }}>Your Live Music in 4 Easy Steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          <StepBox num="1" title="Share Your Event" desc="Fill the form or WhatsApp us. Tell us the date, vibe, and budget." />
          <StepBox num="2" title="Get Options" desc="Our experts suggest the best live singers or bands matching your style." />
          <StepBox num="3" title="Confirm & Book" desc="Choose your favorite, pay the booking amount, and secure the date." />
          <StepBox num="4" title="Relax & Enjoy" desc="We handle coordination, sound checks, and real-time management." />
        </div>
      </section>

      {/* ── OUR ARTISTS ──────────────────────────────────────────────── */}
      <section className="hp-shell hp-block">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="hp-eyebrow">🌟 Talent Pool</p>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-serif)' }}>Our Artists</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '16px auto' }}>
            At Magnevents, we make it easy to hire live musicians. From solo singers for hire near you to full bands and soulful Sufi acts.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {/* Solo Singers */}
          <ArtistTile name="VIP Live" rating={5} price="₹ ₹" type="Solo Singer" />
          <ArtistTile name="H24 Live" rating={4} price="₹" type="Solo Singer" />
          <ArtistTile name="Annie Live" rating={5} price="₹ ₹" type="Solo Singer" />
          {/* Bands */}
          <ArtistTile name="VIP Live Band" rating={5} price="₹ ₹ ₹" type="Live Band" />
          <ArtistTile name="NEEL Live Band" rating={5} price="₹ ₹ ₹ ₹" type="Live Band" />
          {/* Sufi */}
          <ArtistTile name="AP Sufi Band" rating={5} price="₹ ₹ ₹ ₹" type="Sufi Band" />
        </div>
      </section>

      {/* ── QUOTE / CTA ───────────────────────────────────────────────── */}
      <section className="hp-shell hp-block" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2 style={{ color: '#fff', fontSize: '42px', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>
          Ready to bring your event to life?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto 40px' }}>
          Trusted by families, couples, and societies for unforgettable live music experiences. Let’s make your next event sing!
        </p>
        <Link href="/book" className="hp-btn hp-btn-primary hp-btn-lg">
          Book Your Artist Now
        </Link>
      </section>
    </div>
  )
}

function ArtistTile({ name, rating, price, type }) {
  return (
    <div style={{ padding: '24px', background: '#111', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>{type}</p>
      <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '12px' }}>{name}</h3>
      <div style={{ color: '#f6b64e', marginBottom: '8px' }}>
        {Array.from({ length: rating }).map((_, i) => <span key={i}>★</span>)}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '20px' }}>Price: <span style={{ color: '#fff' }}>{price}</span></p>
      <Link href="/book" style={{ color: '#f6b64e', fontSize: '14px', fontWeight: 600 }}>Book Now!</Link>
    </div>
  )
}

function ServiceCard({ title, desc, img }) {
  return (
    <div className="hp-service-card" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}>
      <img src={img} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '24px' }}>
        <h3 style={{ color: '#fff', marginBottom: '12px' }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>{desc}</p>
        <Link href="/book" className="hp-btn hp-btn-ghost hp-btn-sm">Book Now!</Link>
      </div>
    </div>
  )
}

function WhyBox({ title, desc }) {
  return (
    <div style={{ padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
       <h3 style={{ color: '#f6b64e', marginBottom: '16px' }}>{title}</h3>
       <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}

function StepBox({ num, title, desc }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '99px', background: '#f6b64e', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontWeight: 800, fontSize: '20px' }}>
        {num}
      </div>
      <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '18px' }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{desc}</p>
    </div>
  )
}
