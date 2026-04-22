"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "@/src/styles/pages/HomePage.css";

const CATEGORIES = ["All", "Singer", "Band", "Dj", "Musician", "Comedian", "Emcee", "Dancer"];

const ARTISTS = [
  { id: 1, name: "Swaresh: The Power House", category: "Singer", image: "/assets/lux-singer-session.webp", price: "₹ 25,000+", city: "Delhi", rating: "4.9" },
  { id: 2, name: "Sahil Soulful Sufi", category: "Singer", image: "/assets/lux-hero-artist.jpg", price: "₹ 45,000+", city: "Mumbai", rating: "4.8" },
  { id: 3, name: "The Wedding Live Unit", category: "Band", image: "/assets/lux-wedding-celebration.jpg", price: "₹ 1,20,000+", city: "Jaipur", rating: "5.0" },
  { id: 4, name: "Sudhir Retro King", category: "Singer", image: "/assets/lux-live-band-concert.jpg", price: "₹ 35,000+", city: "Delhi", rating: "4.7" },
  { id: 5, name: "Ishani Mukherjee", category: "Singer", image: "/assets/lux-hero-artist.jpg", price: "₹ 55,000+", city: "Noida", rating: "4.9" },
  { id: 6, name: "AP Sufi Band", category: "Band", image: "/assets/lux-hero-artist.jpg", price: "₹ 85,000+", city: "Gurugram", rating: "4.8" },
];

export default function ArtistsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? ARTISTS : ARTISTS.filter(a => a.category === filter);

  return (
    <main className="hp" style={{ paddingTop: "var(--space-3xl)" }}>
      <div className="hp-shell">
        <section className="hp-section-head" style={{ marginTop: "var(--space-2xl)" }}>
          <p className="hp-eyebrow">World-Class Talent</p>
          <h1>Find the Perfect Artist for Your Stage</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "var(--space-md) auto" }}>
            Browse through our curated selection of verified artists, singers, and live bands.
          </p>
        </section>

        {/* Filters */}
        <div style={{ 
          display: "flex", 
          gap: "var(--space-xs)", 
          justifyContent: "center", 
          marginBottom: "var(--space-2xl)", 
          flexWrap: "wrap",
          padding: "var(--space-sm)",
          background: "var(--bg-raised)",
          borderRadius: "var(--radius-full)",
          border: "1px solid var(--border-subtle)",
          width: "max-content",
          marginInline: "auto"
        }}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              style={{
                padding: "8px 24px",
                borderRadius: "var(--radius-full)",
                border: "none",
                background: filter === cat ? "var(--brand-gold)" : "transparent",
                color: filter === cat ? "#000" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                transition: "all var(--duration-fast) ease",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artist Grid */}
        <div className="hp-grid hp-grid-3" style={{ paddingBottom: "var(--space-3xl)" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((artist, i) => (
              <motion.div 
                key={artist.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="hp-card"
              >
                <div style={{ position: "relative", height: "300px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--space-md)" }}>
                  <img src={artist.image} alt={artist.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.6)", padding: "4px 12px", borderRadius: "var(--radius-full)", backdropFilter: "blur(8px)", fontSize: "12px", color: "var(--brand-gold)", fontWeight: 700 }}>
                    ★ {artist.rating}
                  </div>
                </div>
                <span className="hp-eyebrow" style={{ fontSize: "10px" }}>{artist.category}</span>
                <h3 style={{ margin: "8px 0", fontSize: "var(--text-lg)" }}>{artist.name}</h3>
                <p style={{ color: "var(--text-tertiary)", fontSize: "var(--text-sm)", marginBottom: "var(--space-md)" }}>
                  {artist.city} • Starts at {artist.price}
                </p>
                
                <div style={{ display: "flex", gap: "var(--space-sm)" }}>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
                    className="fx-glow-button"
                    style={{ flex: 1, borderRadius: "var(--radius-sm)", fontSize: "var(--text-sm)" }}
                  >
                    Quick Book
                  </button>
                  <Link 
                    href="/artists" 
                    style={{ flex: 1, textAlign: "center", border: "1px solid var(--border-subtle)", padding: "10px", borderRadius: "var(--radius-sm)", fontSize: "var(--text-sm)", color: "var(--text-primary)", fontWeight: 600 }}
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
