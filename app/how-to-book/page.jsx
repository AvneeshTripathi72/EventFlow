"use client"
import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/src/components/AppShellWrapper'
import './HowToBook.css'

const STEPS = [
  { 
    title: "Share Your Event", 
    desc: "Tell us about your occasion via form, call, or WhatsApp.", 
    icon: "📝",
    color: "#00ff41"
  },
  { 
    title: "Get Handpicked Options", 
    desc: "We curate the best artists matching your vibe and budget.", 
    icon: "🔍",
    color: "#ff8da1"
  },
  { 
    title: "Confirm & Book", 
    desc: "Secure your favorite artist with a simple booking process.", 
    icon: "✅",
    color: "#00ff41"
  },
  { 
    title: "Relax & Enjoy", 
    desc: "We manage the setup and show. You focus on the magic.", 
    icon: "🎸",
    color: "#ff8da1"
  },
]

export default function HowToBookPage() {
  return (
    <AppShellWrapper>
      <main className="lux-page how-to-book-page">
        <div className="lux-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="how-header"
          >
            <span className="accent-tag">TIMELINE</span>
            <h1>How to Book <span className="text-gradient">a Musician</span></h1>
            <p>Your Live Music in 4 Easy Steps</p>
          </motion.div>

          <div className="steps-timeline">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`step-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="step-blob" style={{ backgroundColor: step.color }}>{step.icon}</div>
                <div className="step-content">
                  <span className="step-num" style={{ color: step.color }}>Step {idx + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </main>
    </AppShellWrapper>
  )
}
