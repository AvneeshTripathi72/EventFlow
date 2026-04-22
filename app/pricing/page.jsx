"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import '@/src/styles/pages/PricingPage.css'

const PLANS = [
  {
    name: 'Solo Singers',
    tagline: 'INTIMATE & ATMOSPHERIC',
    price: '₹4,999',
    features: [
      'Experienced Artists',
      'Stage Presence',
      'Versatile Vocal Range',
      'Crowd Captivating',
      'Complete Sound Setup'
    ],
  },
  {
    name: 'Acoustic Duo',
    tagline: 'PERFECT HARMONY',
    price: '₹9,999',
    popular: true,
    features: [
      'Two Piece Band',
      'Singer with Percussionist',
      'Energetic Stage Presence',
      'Best For Small Gatherings',
      'Complete Sound Setup'
    ],
  },
  {
    name: 'Live Band',
    tagline: 'FULL EVENT ENERGY',
    price: '₹19,999',
    features: [
      'Four Piece Band',
      'Set-List Variety',
      'Audience Engaging',
      'FULL DHAMAAL !!',
      'Complete Sound Setup'
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="pricing-pg">
      <div className="pricing-shell">
        <header className="pricing-header">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pricing-title"
          >
            Book Top Singers <br />
            <span className="italic-accent">Starting At Just ...</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pricing-subtitle"
          >
            Select the perfect ensemble to elevate your event. From intimate whispers to <br />
            grand stadium energy
          </motion.p>
        </header>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <motion.div 
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'is-popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="card-head">
                <h3>{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>
              
              <div className="card-price">
                <span className="price-val">{plan.price}</span>
                <span className="price-label">starts from</span>
              </div>

              <ul className="card-features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span className="check-icon">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/book" className={`card-btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                Book now
              </Link>
            </motion.div>
          ))}
        </div>

        <footer className="pricing-footer">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            On our artist rate page, you can quickly hire the best singers for your event, whether you want a solo singer or a more energetic group performance. We have several options, including the option to book a live band that is suitable for the atmosphere of your event. For those who would like something a bit more low-key, we also offer highly skilled duo bands that pack a big punch in a smaller package. If you want something in the middle, our trio bands strike just the right balance between musical complexity and versatility. Take a look at our selection and discover the perfect match for your special event! You can even check out our blog page to check how to book a singer from us.
          </motion.p>
        </footer>
      </div>
    </main>
  )
}
