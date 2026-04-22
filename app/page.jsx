"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "@/src/styles/pages/HomePage.css";
import PremiumShowcase from "@/src/components/PremiumShowcase";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const HERO_STATS = [
  { value: 2500, suffix: "+", label: "Events Celebrated" },
  { value: 1500, suffix: "+", label: "Verified Artists" },
  { value: 99, suffix: "%", label: "Client Happiness" },
];

const ARTIST_CATEGORIES = [
  { label: "Singer", image: "/assets/lux-singer-session.webp", query: "Singer" },
  { label: "Music Band", image: "/assets/lux-live-band-concert.jpg", query: "Band" },
  { label: "DJ", image: "/assets/lux-percussion-dj-thumb.jpg", query: "Dj" },
  { label: "Musician", image: "/assets/male-singer-acoustic.jpg", query: "Musician" },
  { label: "Comedian", image: "/assets/standup-comedian.jpg", query: "Comedian" },
  { label: "Anchor", image: "/assets/wedding-anchor-stage.jpg", query: "Emcee" },
  { label: "Dancer", image: "/assets/lux-wedding-celebration.jpg", query: "Dancer" },
  { label: "Magician", image: "/assets/lux-hero-artist.jpg", query: "Magician" },
];

const FEATURED_ARTISTS = [
  { name: "Swaresh: The Power House", genre: "Bollywood Pop", bookings: "132 bookings", rating: "4.9", image: "/assets/lux-singer-session.webp", city: "Delhi" },
  { name: "Sahil Soulful Sufi", genre: "Sufi", bookings: "118 bookings", rating: "4.8", image: "/assets/lux-hero-artist.jpg", city: "Noida" },
  { name: "Sudhir Retro King", genre: "Retro", bookings: "96 bookings", rating: "4.7", image: "/assets/lux-live-band-concert.jpg", city: "Gurugram" },
  { name: "The Wedding Live Unit", genre: "Band", bookings: "146 bookings", rating: "4.9", image: "/assets/lux-wedding-celebration.jpg", city: "Jaipur" },
];

const WHY_POINTS = [
  { icon: "🎯", title: "Handpicked for You", desc: "Our experts help you choose the right talent to match your event style and budget." },
  { icon: "🤝", title: "Hassle-Free Booking", desc: "From first call to final song, we handle all coordination and equipment." },
  { icon: "🎵", title: "Complete Sound Setup", desc: "We provide high-end sound engineers and professional gear for every performance." },
];

/* ── Components ───────────────────────────────────────────────────────────── */

function FadeInSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}

export default function HomePage() {
  return (
    <main className="hp">
      {/* ── HERO SECTION ── */}
      <section className="hp-hero">
        <div className="hp-shell">
          <div className="hp-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Elevate Your Events with <span>Elite Artists</span>
            </motion.h1>
            <motion.p
              className="hp-hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Discover and book India’s finest live singers, bands, and performers for weddings, corporate galas, and luxury parties.
            </motion.p>
            <motion.div
              className="hp-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/artists" className="fx-glow-button" style={{ padding: "16px 40px", borderRadius: "var(--radius-full)", fontSize: "var(--text-md)" }}>
                Explore All Artists
              </Link>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
                style={{ background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-default)", padding: "16px 40px", borderRadius: "var(--radius-full)", fontWeight: 600, marginLeft: "var(--space-md)" }}
              >
                Get a Quote
              </button>
            </motion.div>

            <div className="hp-hero-stats">
              {HERO_STATS.map((stat, i) => (
                <div key={stat.label} className="hp-stat-item">
                  <span className="hp-stat-val">{stat.value}{stat.suffix}</span>
                  <span className="hp-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PremiumShowcase />

      {/* ── CATEGORIES ── */}
      <FadeInSection className="hp-block">
        <div className="hp-shell">
          <div className="hp-section-head">
            <p className="hp-eyebrow">Discover Talent</p>
            <h2>Browse by Category</h2>
          </div>
          <div className="hp-grid hp-grid-4">
            {ARTIST_CATEGORIES.map((cat, i) => (
              <Link key={cat.label} href={`/artists?category=${cat.query}`} className="hp-category-card">
                <img src={cat.image} alt={cat.label} loading="lazy" />
                <div className="hp-category-overlay">
                  <h3>{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── FEATURED ── */}
      <FadeInSection className="hp-block">
        <div className="hp-shell">
          <div className="hp-section-head">
            <p className="hp-eyebrow">Elite Selection</p>
            <h2>Featured Performances</h2>
          </div>
          <div className="hp-grid hp-grid-3">
            {FEATURED_ARTISTS.map((artist, i) => (
              <div key={artist.name} className="hp-card">
                <div style={{ height: "240px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--space-md)" }}>
                  <img src={artist.image} alt={artist.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span className="hp-eyebrow" style={{ fontSize: "10px" }}>{artist.genre}</span>
                <h3 style={{ margin: "8px 0" }}>{artist.name}</h3>
                <p style={{ color: "var(--text-tertiary)", fontSize: "var(--text-sm)" }}>{artist.city} • ★ {artist.rating}</p>
                <div style={{ marginTop: "var(--space-md)", display: "flex", gap: "var(--space-sm)" }}>
                  <Link href="/artists" style={{ flex: 1, textAlign: "center", border: "1px solid var(--border-subtle)", padding: "8px", borderRadius: "var(--radius-sm)", fontSize: "var(--text-sm)" }}>Profile</Link>
                  <button onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))} className="fx-glow-button" style={{ flex: 1, fontSize: "var(--text-sm)", borderRadius: "var(--radius-sm)" }}>Book</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── WHY CHOOSE US ── */}
      <FadeInSection className="hp-block" style={{ background: "var(--bg-raised)" }}>
        <div className="hp-shell">
          <div className="hp-section-head">
            <p className="hp-eyebrow">The Magnevents Advantage</p>
            <h2>Why Choose Us?</h2>
          </div>
          <div className="hp-grid hp-grid-3">
            {WHY_POINTS.map((point, i) => (
              <div key={point.title} className="hp-card" style={{ textAlign: "center", background: "transparent" }}>
                <span style={{ fontSize: "2rem", marginBottom: "var(--space-md)", display: "block" }}>{point.icon}</span>
                <h3>{point.title}</h3>
                <p style={{ color: "var(--text-secondary)", marginTop: "var(--space-sm)" }}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── CALL TO ACTION ── */}
      <FadeInSection className="hp-block">
        <div className="hp-shell">
          <div style={{ background: "var(--bg-overlay)", padding: "var(--space-3xl)", borderRadius: "var(--radius-2xl)", textAlign: "center", border: "1px solid var(--border-default)" }}>
            <h2 style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-md)" }}>Ready to make your event legendary?</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-xl)", maxWidth: "600px", marginInline: "auto" }}>
              Join over 2,500 happy clients who have celebrated with Magnevents. Let’s find the perfect artist for you.
            </p>
            <button onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))} className="fx-glow-button" style={{ padding: "16px 48px", fontSize: "var(--text-md)" }}>
              Start Your Inquiry
            </button>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
