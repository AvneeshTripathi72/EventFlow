"use client"

import { motion } from 'framer-motion'
import { AppShellWrapper } from '@/app/layouts/AppShellWrapper'
import ServiceCard from '@/app/components/services/ServiceCard'
import { SERVICES } from '@/app/constants'
import '@/app/styles/pages/ServicesPage.css'

/**
 * ServicesPage Component
 * 
 * Lists tailored entertainment experiences.
 * Refactored into modular components and centralized data.
 */
export default function ServicesPage() {
  return (
    <main className="services-page-layout">
      <div className="lux-container">
        <header className="services-header">
          <span className="accent-tag">EXPERIENCES</span>
          <h1>Tailored <span className="text-gradient">Entertainment</span></h1>
          <p>From intimate gatherings to stadium-scale productions, we curate the perfect musical journey for your event.</p>
        </header>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard 
              key={s.title} 
              service={s} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </main>
  )
}
