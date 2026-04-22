"use client"

import { motion } from 'framer-motion'
import AppShellWrapper from '@/src/components/AppShellWrapper'

const STEPS = [
  { num: '01', title: 'Share Your Event', desc: 'Fill out our form or reach out via call/WhatsApp. Tell us about your event date, type, and vibe.', icon: '📱' },
  { num: '02', title: 'Get Handpicked Options', desc: 'Our experts curate a list of artists that match your specific requirements and budget perfectly.', icon: '🎯' },
  { num: '03', title: 'Confirm & Book', desc: 'Review the options, choose your favorite artist, and secure your booking with a transparent process.', icon: '✅' },
  { num: '04', title: 'Relax & Enjoy', desc: 'We handle everything from technical setup to coordination. Just enjoy your unforgettable event!', icon: '🎉' },
]

export default function HowToBookPage() {
  return (
    <AppShellWrapper>
      <section style={{ padding: '120px 24px 60px', background: '#0A0A0A', textAlign: 'center' }}>
        <motion.span style={{ color: '#00ff7f', fontWeight: 800, letterSpacing: '0.2em' }}>PROCESS</motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, color: '#fff', marginTop: '16px' }}
        >
          Your Live Music in <span style={{ color: '#ffb6c1' }}>4 Easy Steps</span>
        </motion.h1>
      </section>

      <section style={{ padding: '60px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                gap: '30px', 
                alignItems: 'center', 
                padding: '40px', 
                background: 'rgba(255,255,255,0.02)', 
                borderRadius: '32px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ fontSize: '60px', fontWeight: 900, color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}>{step.num}</div>
              <div style={{ fontSize: '40px' }}>{step.icon}</div>
              <div>
                <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 24px', textAlign: 'center', background: '#000' }}>
        <h2 style={{ fontSize: '40px', color: '#fff', marginBottom: '30px' }}>Start Step 01 Today</h2>
        <a href="/contact" className="fx-glow-button" style={{ padding: '18px 40px', borderRadius: '99px', background: '#00ff7f', color: '#000', fontWeight: 800, textDecoration: 'none' }}>
          Book Your Event
        </a>
      </section>
    </AppShellWrapper>
  )
}
