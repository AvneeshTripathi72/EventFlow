"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { supabase } from '@/app/lib/supabase'
import '@/app/styles/pages/AboutPage.css'

export default function AboutPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('hero_slides')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setBlogs(data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="about-page-layout">
      
      <section className="about-hero">
        <div className="lux-container about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Check Out Our <span className="text-gradient">Blog!</span>
          </motion.h1>
        </div>
      </section>

      <div className="lux-container">
        
        <section className="about-intro-section blog-section">
          <span className="accent-tag">LATEST ARTICLES</span>
          <h2>Find more about booking a musician in Delhi-NCR</h2>
          
          <div className="blog-posts-grid">
            {/* Hardcoded Blog Posts from User Screenshot */}
            
            <div className="blog-post-card default-blog">
              <div className="blog-image">
                <img src="/assets/male-singer-acoustic.jpg" alt="House Party Singer" />
              </div>
              <div className="blog-content">
                <h3>Personal Concerts at Home: The Rising Trend of Booking Singers for House Parties</h3>
                <h4 className="blog-subtitle">Book a Singer for House Party</h4>
                <p>
                  House parties are getting a major upgrade. Instead of relying on generic background playlists however more people are choosing to book a live singer for your party. It's like bringing a private concert right into your living
                </p>
              </div>
            </div>

            <div className="blog-post-card default-blog">
              <div className="blog-image">
                <img src="/assets/lux-live-band-concert.jpg" alt="Live Band Concert" />
              </div>
              <div className="blog-content">
                <h3>Live Bands for Every Occasion</h3>
                <p>
                  When planning an event, the right entertainment can transform an ordinary gathering into an extraordinary experience. Live bands for weddings, corporate events, and parties offer a dynamic atmosphere that recorded music simply can't match.
                </p>
              </div>
            </div>

            <div className="blog-post-card default-blog">
              <div className="blog-image">
                <img src="/assets/lux-wedding-celebration.jpg" alt="Wedding Celebration" />
              </div>
              <div className="blog-content">
                <h3>Singers in Delhi: How to Book Through Magnevents</h3>
                <p>
                  Delhi, the vibrant heart of India, is known not just for its rich culture and history, but also for its thriving music scene. Whether it's an intimate house party, a big fat Indian wedding, a high-energy concert, or a soulful private concert, the capital is home to some of the finest live singers and musicians ready to light up your events. If you're looking to book a singer or a musical band at affordable
                </p>
              </div>
            </div>

            <div className="blog-post-card default-blog">
              <div className="blog-image">
                <img src="/assets/duo-musical-performance.jpg" alt="Musical Performance" />
              </div>
              <div className="blog-content">
                <h3>How to Book a Singer in Delhi for Your Next Event</h3>
                <p>
                  Are you planning a wedding, corporate gathering, or private celebration? One of the best ways to elevate the atmosphere is through live music. If you're wondering how to book a singer in Delhi, this guide will walk you through the process smoothly. From finding the right performer to securing your booking, we'll help you make it a hassle-free experience and we offer best price in the Industry.
                </p>
              </div>
            </div>

            {/* Render any dynamic blogs from DB below the hardcoded ones */}
            {loading ? (
              <p className="loading-text" style={{ gridColumn: '1 / -1' }}>Loading more blog posts...</p>
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="blog-post-card">
                  {blog.image_url && (
                    <div className="blog-image">
                      <img src={blog.image_url} alt={blog.title} />
                    </div>
                  )}
                  <div className="blog-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </section>

        <section className="about-values-grid">
          <ValueCard 
            title="Handpicked for You"
            desc="Every singer and band is carefully selected to match your unique event style, vibe, and budget every single time."
          />
          <ValueCard 
            title="Hassle-Free Booking"
            desc="From your first call to the final song, our team takes care of every detail. Enjoy a smooth musician booking service."
          />
          <ValueCard 
            title="Complete Setup"
            desc="We provide great artists plus professional sound engineers and equipment—so you enjoy music without zero extra hassle."
          />
        </section>

        <section className="about-cta-section">
          <h2>Ready to bring your event to life?</h2>
          <p>Trusted by families, couples, and societies for unforgettable live music experiences. Let's make your next event sing!</p>
          <div className="cta-group">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="fx-glow-button">Book Your Artist Now</button>
            <Link href="/artists" className="about-secondary-cta">Explore Talent</Link>
          </div>
        </section>

      </div>
    </main>
  )
}

function ValueCard({ title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="value-card"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  )
}

