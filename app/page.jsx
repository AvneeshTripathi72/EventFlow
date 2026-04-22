"use client";

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import '@/src/styles/pages/HomePage.css'

/* ── Data ─────────────────────────────────────────────────────────────────── */
const HERO_STATS = [
  { value: 2500, suffix: '+', label: 'Events Celebrated' },
  { value: 1500, suffix: '+', label: 'Verified Artists' },
  { value: 99,   suffix: '%', label: 'Client Happiness' },
]

const ARTIST_OF_MONTH = {
  name: "Ishani Mukherjee",
  title: "Sufi & Bollywood Sensation",
  desc: "Ishani brings a rare blend of soulful Sufi textures and high-energy Bollywood pop. With over 150+ live shows this year, she is the most requested artist for luxury weddings and corporate galas.",
  rating: "4.9",
  image: "/assets/lux-hero-artist.jpg",
  city: "Mumbai",
  shows: "150+",
  metric: "98% Rating"
}

const HERO_SPOTLIGHT_SLIDES = [
  '/assets/lux-hero-bg.png',
  '/assets/lux-live-band-concert.jpg',
  '/assets/lux-wedding-celebration.jpg',
]


const ARTIST_CATEGORIES = [
  { label: 'Singer',       image: '/assets/lux-singer-session.webp', query: 'Singer' },
  { label: 'Music Band',   image: '/assets/lux-live-band-concert.jpg', query: 'Band' },
  { label: 'DJ',           image: '/assets/lux-percussion-dj-thumb.jpg', query: 'Dj' },
  { label: 'Musician',     image: '/assets/male-singer-acoustic.jpg', query: 'Musician' },
  { label: 'Comedian',     image: '/assets/standup-comedian.jpg', query: 'Comedian' },
  { label: 'Anchor',       image: '/assets/wedding-anchor-stage.jpg', query: 'Emcee' },
  { label: 'Dancer',       image: '/assets/lux-wedding-celebration.jpg', query: 'Dancer' },
  { label: 'Magician',     image: '/assets/lux-hero-artist.jpg', query: 'Magician' },
]

const FEATURED_ARTISTS = [
  { name: 'Swaresh: The Power House', genre: 'Bollywood Pop', bookings: '132 bookings', rating: '4.9', image: '/assets/lux-singer-session.webp', city: 'Delhi' },
  { name: 'Sahil Soulful Sufi',        genre: 'Sufi',         bookings: '118 bookings', rating: '4.8', image: '/assets/lux-hero-artist.jpg', city: 'Noida' },
  { name: 'Sudhir Retro King',         genre: 'Retro',        bookings: '96 bookings',  rating: '4.7', image: '/assets/lux-live-band-concert.jpg', city: 'Gurugram' },
  { name: 'The Wedding Live Unit',     genre: 'Band',         bookings: '146 bookings', rating: '4.9', image: '/assets/lux-wedding-celebration.jpg', city: 'Jaipur' },
  { name: 'Arohi Evening Notes',       genre: 'Soul Pop',     bookings: '88 bookings',  rating: '4.8', image: '/assets/lux-hero-artist.jpg', city: 'Mumbai' },
  { name: 'The Sangeet Project',       genre: 'Fusion Band',  bookings: '164 bookings', rating: '5.0', image: '/assets/lux-wedding-celebration.jpg', city: 'Bengaluru' },
]

const BOOKING_STEPS = [
  { num: '01', icon: '📋', title: 'Share Your Event', desc: 'Fill out our booking form, call, or WhatsApp us. Tell us if you want to book a singer for a wedding, hire a band for a party, or book Sufi singers in Delhi — plus your event date, vibe, and budget.' },
  { num: '02', icon: '🎯', title: 'Get Handpicked Options', desc: 'Our artist experts suggest the best live singers, bands, or musicians to match your unique style and gathering. Get a curated listing of musicians that perfectly fits your celebrations.' },
  { num: '03', icon: '✅', title: 'Confirm & Book', desc: 'Choose your favourite artist, pay the booking amount, and secure your date. Your booking is transparent and secure, backed by our trusted musician booking service.' },
  { num: '04', icon: '🎉', title: 'Relax & Enjoy', desc: 'We handle everything — artist coordination, sound check, equipment, and real-time management. Just sit back and enjoy amazing live music for events that everyone will remember.' },
]

const WHY_POINTS = [
  {
    icon: '🎯',
    title: 'Handpicked for You',
    desc: 'When you book a singer for a house party, hire Sufi singers in Delhi, or need a live band for weddings, our artist experts help you choose the right talent. Every singer and band is carefully selected to match your unique event style and budget every single time.',
  },
  {
    icon: '🤝',
    title: 'Hassle-Free Booking',
    desc: 'We make it simple to hire a live singer, band, or musician for any event. From your first call to the final song, our team takes care of every detail. Enjoy an easy, smooth musician booking service with Magnevents.',
  },
  {
    icon: '🎵',
    title: 'Complete Entertainment Setup',
    desc: 'With Magnevents, you get more than just great artists. We provide a complete entertainment package — live singers, bands, professional sound engineers, and all sound equipment — so you can enjoy amazing live music for events without any extra hassle.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Akansha',
    location: 'Delhi',
    type: 'House Party',
    stars: 5,
    title: 'Soft soothing solo singer for a house party',
    text: 'Magnevents provided a very good singer for our house party with close family and friends. He was interactive and made us all sing with him. He was like a family member by the end of the party and yet very professional!',
  },
  {
    name: 'Sakshi & Rohan',
    location: 'Delhi',
    type: 'Wedding',
    stars: 5,
    title: 'The perfect wedding vibe!',
    text: 'Priyan at Magnevents made it so easy to book a singer for our wedding. The artist was amazing, our guests still talk about the live performance. Super professional team!',
  },
  {
    name: 'Jaswinder Kaur',
    location: 'Gurgaon',
    type: 'Corporate Event',
    stars: 5,
    title: 'Smooth booking, great band!',
    text: 'I wanted a live band for our corporate annual meet in Gurgaon. The whole process was so smooth. Excellent band, great sound setup, zero stress. Highly recommend!',
  },
  {
    name: 'Mahagun',
    location: 'Noida',
    type: 'Festive Evening',
    stars: 5,
    title: 'Soulful Sufi night!',
    text: 'We booked a Sufi band for our festive evening. Beautiful voices, great sound, and perfect coordination. If you want to book musicians you can trust, go with Magnevents.',
  },
]

const FAQS = [
  { q: 'How soon can I get artist options?',       a: 'Most requests receive curated options within 2 to 6 hours, depending on city and event date.' },
  { q: 'Can I book multiple artist categories?',   a: 'Yes. We can combine singers, bands, anchors, and specialty acts into one event lineup.' },
  { q: 'Do you handle sound and coordination too?', a: 'Yes. Based on your package, we provide sound setup and on-ground event coordination.' },
]


/* ── Utility ──────────────────────────────────────────────────────────────── */
function formatINR(amount) {
  return new Intl.NumberFormat('en-IN').format(amount)
}

/* ── Animated Counter ─────────────────────────────────────────────────────── */
function AnimatedCounter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionVal.set(to)
  }, [inView, to, motionVal])

  useEffect(() => {
    return spring.on('change', v => setDisplay(Math.round(v)))
  }, [spring])

  return (
    <span ref={ref}>
      {display.toLocaleString('en-IN')}{suffix}
    </span>
  )
}


/* ── Glow Orbs ────────────────────────────────────────────────────────────── */
function GlowOrbs() {
  return (
    <div className="glow-orbs" aria-hidden="true">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
    </div>
  )
}

/* ── Star Rating ──────────────────────────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <span className="stars-row" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </span>
  )
}

/* ── Section fade wrapper ─────────────────────────────────────────────────── */
const FadeSection = ({ children, className = '', delay = 0, ...props }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

/* ── Card 3-D tilt wrapper ────────────────────────────────────────────────── */
function TiltCard({ children, className = '', ...props }) {
  const ref = useRef(null)
  const rafRef = useRef(null)

  const canAnimateTilt =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function handleMouseMove(e) {
    if (!canAnimateTilt) return
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`
    })
  }

  function handleMouseLeave() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    if (ref.current) ref.current.style.transform = ''
  }

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <article ref={ref} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} {...props}>
      {children}
    </article>
  )
}

/* ── Contact Form Component ───────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', type: '', details: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function submit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  if (sent) {
    return (
      <motion.div
        className="hp-form-success"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 240 }}
      >
        <span className="hp-form-success-icon">🎉</span>
        <h3>Inquiry Sent!</h3>
        <p>Our team will reach out within 2 hours with curated artist options for your event.</p>
        <button onClick={() => setSent(false)} className="hp-btn hp-btn-ghost hp-btn-sm">Send Another</button>
      </motion.div>
    )
  }

  return (
    <motion.form
      className="hp-contact-form"
      onSubmit={submit}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hp-form-row">
        <div className="hp-form-field">
          <label>Full Name *</label>
          <input type="text" name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
        </div>
        <div className="hp-form-field">
          <label>Phone Number *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>

      <div className="hp-form-row">
        <div className="hp-form-field">
          <label>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" />
        </div>
        <div className="hp-form-field">
          <label>Event City *</label>
          <input type="text" name="city" value={form.city} onChange={handle} placeholder="e.g. Delhi, Mumbai" required />
        </div>
      </div>

      <div className="hp-form-field">
        <label>Event Type *</label>
        <select name="type" value={form.type} onChange={handle} required>
          <option value="">Select event type</option>
          <option>Wedding</option>
          <option>Corporate Event</option>
          <option>House Party</option>
          <option>Birthday / Anniversary</option>
          <option>College Fest</option>
          <option>Other</option>
        </select>
      </div>

      <div className="hp-form-field">
        <label>Event Details</label>
        <textarea name="details" value={form.details} onChange={handle} rows={4} placeholder="Tell us about your event — date, guest count, vibe, any specific requests..." />
      </div>

      <motion.button
        type="submit"
        className="hp-btn hp-btn-primary hp-form-submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading
          ? <span className="hp-spinner" />
          : <><span>Send Inquiry</span><span className="hp-btn-shine" aria-hidden="true" /></>}
      </motion.button>
    </motion.form>
  )
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0)
  const [catPage, setCatPage] = useState(0)
  const [pauseFeatured, setPauseFeatured] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)
  const featuredRef = useRef(null)

  const catPerPage = 4
  const totalCatPages = Math.ceil(ARTIST_CATEGORIES.length / catPerPage)
  const moveCat = (dir) => setCatPage(p => (p + dir + totalCatPages) % totalCatPages)

  const moveFeatured = (direction) => {
    const scroller = featuredRef.current
    if (!scroller) return
    const card = scroller.querySelector('[data-featured-card]')
    const cardWidth = card ? card.getBoundingClientRect().width + 16 : scroller.clientWidth * 0.86
    const maxLeft = scroller.scrollWidth - scroller.clientWidth - 4
    const atEnd = scroller.scrollLeft >= maxLeft
    const atStart = scroller.scrollLeft <= 2

    if (direction > 0 && atEnd) {
      scroller.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    if (direction < 0 && atStart) {
      scroller.scrollTo({ left: maxLeft, behavior: 'smooth' })
      return
    }

    scroller.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const id = window.setInterval(() => {
      if (!pauseFeatured) moveFeatured(1)
    }, 3400)

    return () => window.clearInterval(id)
  }, [pauseFeatured])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const id = window.setInterval(() => {
      setHeroSlide(prev => (prev + 1) % HERO_SPOTLIGHT_SLIDES.length)
    }, 2800)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="hp">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hp-hero">
        <div className="hp-hero-bg">
          {HERO_SPOTLIGHT_SLIDES.map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: heroSlide === idx ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ))}
        </div>
        <div className="hp-hero-overlay" aria-hidden="true" />

        <div className="hp-shell hp-hero-content">
          <div className="hp-hero-grid">
            <div className="hp-hero-main full-width">

              <motion.h1
                className="hp-hero-h1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Book A <span className="hp-gradient-text italic-accent">Musician!</span>
                <br />
                For Your <span className="hp-gradient-text italic-accent">Grand Event!</span>
              </motion.h1>

              <motion.div
                className="hp-hero-contact-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
              >
                <a href="tel:+918076515257" className="hp-hero-contact-pill">
                  <span className="hp-contact-icon">📞</span>
                  <span>Contact Us on <strong>+91 80765 15257</strong></span>
                </a>
              </motion.div>

              <motion.div
                className="hp-hero-actions"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Link href="/artists" className="hp-btn hp-btn-primary">
                  <span>Look Now</span>
                  <span className="hp-btn-shine" aria-hidden="true" />
                </Link>
                <Link href="/book" className="hp-btn hp-btn-ghost">Book Now</Link>
              </motion.div>

              <motion.div
                className="hp-stats"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.62 }}
              >
                {HERO_STATS.map(item => (
                  <div key={item.label} className="hp-stat-card">
                    <strong>
                      <AnimatedCounter to={item.value} suffix={item.suffix} />
                    </strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </section>


      {/* ── ARTIST CATEGORIES CAROUSEL ────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block">
        <div className="hp-cat-section">
          <div className="hp-cat-header">
            <h2 className="hp-cat-title">Artist Categories</h2>
            <p className="hp-cat-desc">
              Bring your events to the next level with the best artists — book top musicians, live singers, DJs, 
              stand up comedians, motivational speakers, emcees and more. Seamless booking for an 
              unforgettable event with Magnevents.
            </p>
          </div>

          <div className="hp-cat-carousel-wrap">
            <button className="hp-cat-arrow hp-cat-arrow--left" onClick={() => moveCat(-1)} aria-label="Previous categories">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div className="hp-cat-carousel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={catPage}
                  className="hp-cat-grid"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ARTIST_CATEGORIES.slice(catPage * catPerPage, catPage * catPerPage + catPerPage).map((cat, i) => (
                    <Link key={cat.label} href={`/artists?category=${cat.query}`} className="hp-cat-card">
                      <motion.div
                        className="hp-cat-img-wrap"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                      >
                        <img src={cat.image} alt={cat.label} loading="lazy" />
                      </motion.div>
                      <span className="hp-cat-label">{cat.label.toUpperCase()}</span>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="hp-cat-arrow hp-cat-arrow--right" onClick={() => moveCat(1)} aria-label="Next categories">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <div className="hp-cat-dots">
            {Array.from({ length: totalCatPages }).map((_, i) => (
              <button
                key={i}
                className={`hp-cat-dot ${catPage === i ? 'is-active' : ''}`}
                onClick={() => setCatPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── FEATURED ARTISTS ──────────────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block">
        <div className="hp-feat-head">
          <div className="hp-section-head">
            <p className="hp-eyebrow">⭐ Featured Artists</p>
            <h2>Profiles with genre, bookings, and ratings</h2>
          </div>
          <div className="hp-feat-actions">
            <Link href="/artists" className="hp-see-all">See all →</Link>
            <div className="hp-feat-controls" aria-label="Featured artists slider controls">
              <button
                type="button"
                className="hp-feat-control"
                onClick={() => moveFeatured(-1)}
                aria-label="Previous featured artists"
              >
                ←
              </button>
              <button
                type="button"
                className="hp-feat-control"
                onClick={() => moveFeatured(1)}
                aria-label="Next featured artists"
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div
          className="hp-feat-carousel"
          ref={featuredRef}
          onMouseEnter={() => setPauseFeatured(true)}
          onMouseLeave={() => setPauseFeatured(false)}
        >
          {FEATURED_ARTISTS.map((artist, i) => (
            <motion.div
              key={artist.name}
              className="hp-feat-slide"
              data-featured-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="hp-feat-card">
                <div className="hp-feat-img-wrap">
                  <img src={artist.image} alt={artist.name} loading="lazy" decoding="async" />
                  <div className="hp-feat-overlay">
                    <span className="hp-feat-live-pill">Live preview</span>
                  </div>
                </div>
                <div className="hp-feat-info">
                  <span className="hp-feat-genre">{artist.genre}</span>
                  <h3>{artist.name}</h3>
                  <p className="hp-feat-location">{artist.city}</p>
                  <div className="hp-feat-meta">
                    <Stars count={Math.round(Number(artist.rating))} />
                    <span>{artist.rating}</span>
                    <span className="hp-dot">·</span>
                    <span>{artist.bookings}</span>
                  </div>
                  <div className="hp-feat-book-row">
                    <Link
                      href={`/book?artist=${encodeURIComponent(artist.name)}&genre=${encodeURIComponent(artist.genre)}`}
                      className="hp-feat-book-btn"
                    >
                      Book This Artist
                    </Link>
                    <Link href="/artists" className="hp-feat-view-btn">View Profile</Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </FadeSection>

      {/* ── ARTIST OF THE MONTH ────────────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block">
        <div className="hp-aom-box">
          <div className="hp-aom-content">
            <p className="hp-eyebrow hp-eyebrow--glow">✨ Spotlight Artist</p>
            <h2 className="hp-aom-title">{ARTIST_OF_MONTH.name}</h2>
            <p className="hp-aom-subtitle">{ARTIST_OF_MONTH.title}</p>
            <p className="hp-aom-desc">{ARTIST_OF_MONTH.desc}</p>
            
            <div className="hp-aom-stats">
              <div className="hp-aom-stat">
                <strong>{ARTIST_OF_MONTH.shows}</strong>
                <span>Shows This Year</span>
              </div>
              <div className="hp-aom-stat">
                <strong>{ARTIST_OF_MONTH.metric}</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
            
            <div className="hp-aom-actions">
              <Link href="/book" className="hp-btn hp-btn-primary">Book Spotlight Artist</Link>
              <Link href="/artists" className="hp-btn hp-btn-ghost">View Portfolio</Link>
            </div>
          </div>
          <div className="hp-aom-media">
             <div className="hp-aom-img-frame">
               <img src={ARTIST_OF_MONTH.image} alt={ARTIST_OF_MONTH.name} />
               <div className="hp-aom-badge">Top Rated</div>
             </div>
          </div>
        </div>
      </FadeSection>

      {/* ── 1. WHY CHOOSE MAGNEVENTS ──────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block">
        <div className="hp-section-head">
          <p className="hp-eyebrow">💎 Why Choose Magnevents?</p>
          <h2>Your Trusted Partner for Live Music Booking Services</h2>
        </div>
        <div className="hp-why-grid">
          {WHY_POINTS.map((item, i) => (
            <motion.article
              key={item.title}
              className="hp-why-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <span className="hp-why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </FadeSection>

      {/* ── 2. WHAT OUR CLIENTS SAY ──────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block">
        <div className="hp-section-head">
          <p className="hp-eyebrow">⭐ Google Reviews</p>
          <h2>What Our Clients Say</h2>
          <p className="hp-section-subtitle">Real Stories. Unforgettable Events.</p>
        </div>
        <div className="hp-reviews-grid">
          {TESTIMONIALS.map((item, i) => (
            <motion.article
              key={item.name}
              className="hp-review-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="hp-review-header">
                <div className="hp-review-stars">
                  {Array.from({ length: item.stars }).map((_, s) => (
                    <span key={s} className="hp-star">★</span>
                  ))}
                </div>
                <span className="hp-review-badge">{item.type}</span>
              </div>
              <h4 className="hp-review-title">{item.title}</h4>
              <p className="hp-review-text">&ldquo;{item.text}&rdquo;</p>
              <div className="hp-review-author">
                <span className="hp-review-name">– {item.name}</span>
                <span className="hp-review-location">{item.location}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </FadeSection>

      {/* ── 3. HOW TO BOOK A MUSICIAN ────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block">
        <div className="hp-how-section">
          <div className="hp-section-head">
            <p className="hp-eyebrow">🎵 How to book a musician</p>
            <h2>Your Live Music in 4 Easy Steps</h2>
          </div>
          <div className="hp-steps-grid hp-steps-grid--4">
            {BOOKING_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                className="hp-step-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
              >
                <span className="hp-step-num">{step.num}</span>
                <span className="hp-step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="hp-how-footer">
            <p className="hp-how-footer-text">
              At Magnevents, every booking is personal — whether you hire a live singer for your house party, book a live band for weddings, or need soulful Sufi singers in Delhi.
            </p>
            <Link href="/book" className="hp-btn hp-btn-primary hp-btn-lg">
              <span>Ready to bring your event to life? Let&apos;s get started →</span>
              <span className="hp-btn-shine" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </FadeSection>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block hp-faqs">
        <div className="hp-section-head">
          <p className="hp-eyebrow">❓ FAQs</p>
          <h2>Quick answers before you book</h2>
        </div>
        <div className="hp-faq-list">
          {FAQS.map((item, index) => {
            const active = openFaq === index
            return (
              <motion.div
                key={item.q}
                className={`hp-faq-item ${active ? 'is-open' : ''}`}
                layout
              >
                <button type="button" onClick={() => setOpenFaq(active ? -1 : index)}>
                  <span>{item.q}</span>
                  <motion.strong
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.strong>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </FadeSection>

      {/* ── 4. CONTACT — MINIMAL ─────────────────────────────────────── */}
      <FadeSection className="hp-shell hp-block hp-contact" id="contact">
        <div className="hp-contact-inner">
          <div className="hp-contact-info">
            <p className="hp-eyebrow">📞 Contact</p>

            <div className="hp-contact-channels">
              <a href="tel:+918076515257" className="hp-channel-card">
                <span className="hp-channel-icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <span>+91 8076515257</span>
                </div>
              </a>
              <a href="mailto:magneventsdotin@gmail.com" className="hp-channel-card">
                <span className="hp-channel-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>magneventsdotin@gmail.com</span>
                </div>
              </a>
              <a href="https://wa.me/918076515257" target="_blank" rel="noreferrer" className="hp-channel-card">
                <span className="hp-channel-icon">💬</span>
                <div>
                  <strong>Connect on WhatsApp</strong>
                  <span>WhatsApp</span>
                </div>
              </a>
            </div>

            <div className="hp-contact-social">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hp-social-link">YouTube</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hp-social-link">Instagram</a>
            </div>
          </div>

          <div className="hp-quote-form">
            <h3 className="hp-quote-title">Request a Quote</h3>
            <form className="hp-contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="hp-form-field">
                <label>Name *</label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="hp-form-field">
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <motion.button
                type="submit"
                className="hp-btn hp-btn-primary hp-form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry
              </motion.button>
            </form>
          </div>
        </div>
      </FadeSection>

    </div>
  )
}

