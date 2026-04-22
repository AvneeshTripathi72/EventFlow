"use client";

import { useReveal } from '@/src/hooks/useReveal'
import '@/src/styles/pages/ContactPage.css'

export default function ContactPage() {
  const heroRef = useReveal(0.1)
  const formRef = useReveal(0.1)

  return (
    <div className="contact-page">
      <section ref={heroRef} className="contact-hero">
        <p className="reveal-child">Contact Magnevents</p>
        <h1 className="reveal-child">Plan your event with our booking team</h1>
        <p className="reveal-child">Share your date, city, and event style. We will curate artists and production options within 24 hours.</p>
      </section>

      <section ref={formRef} className="contact-grid-wrap">
        <div className="contact-grid">
          <article className="contact-info reveal-child">
            <h3>Direct channels</h3>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:magneventsdotin@gmail.com">magneventsdotin@gmail.com</a>
            <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
            <div>
              <span>Delhi</span>
              <span>Mumbai</span>
              <span>Bengaluru</span>
            </div>
          </article>

          <form className="contact-form reveal-child">
            <input type="text" placeholder="Full Name" aria-label="Full Name" />
            <input type="tel" placeholder="Phone" aria-label="Phone" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="text" placeholder="Event City" aria-label="Event City" />
            <select aria-label="Event type">
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Private Party</option>
              <option>College Fest</option>
            </select>
            <textarea rows="5" placeholder="Tell us your event details" aria-label="Event details" />
            <button type="button">Send inquiry</button>
          </form>
        </div>
      </section>
    </div>
  )
}
