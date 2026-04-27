"use client"

import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import PricingCard from '@/app/components/pricing/PricingCard'
import { PRICING_PLANS } from '@/app/constants'
import '@/app/styles/pages/PricingPage.css'

/**
 * PricingPage Component
 * 
 * Displays available artist booking packages.
 * Refactored into modular components and centralized data.
 */
export default function PricingPage() {
  return (
    <AppShellWrapper>
      <main className="pricing-pg">
        <div className="pricing-shell">
          <header className="pricing-header">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pricing-title"
            >
              Book Top Singers <br />
              <span className="accent-text">Starting At Just ...</span>
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
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard 
                key={plan.name} 
                plan={plan} 
                index={i} 
              />
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
    </AppShellWrapper>
  )
}
