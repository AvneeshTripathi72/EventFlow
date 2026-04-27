"use client"
import { useRouter, usePathname } from 'next/navigation'

function HomeIcon({ color }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
function ServicesIcon({ color }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/></svg>
}
function AboutIcon({ color }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
}
function ContactIcon({ color }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}

function Tab({ path, icon, label, onNavigate, isActive }) {
  const iconColor = isActive ? '#f6b64e' : '#8a8f98'

  return (
    <button
      className={`booking-tab-btn ${isActive ? 'is-active' : ''}`}
      onClick={() => onNavigate(path)}
      style={{
        flex: 1,
        border: 'none',
        background: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        color: isActive ? '#f6b64e' : '#8a8f98',
        padding: '10px 4px 6px',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        transition: 'all 200ms ease',
        opacity: isActive ? 1 : 0.7,
      }}
    >
      {icon(iconColor)}
      <span className="booking-tab-label" style={{ fontSize: '10px', fontWeight: isActive ? 700 : 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</span>
    </button>
  )
}

export default function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  function active(path) {
    return pathname === path
  }

  return (
    <>
      <div className="booking-bottom-nav" style={{
        position: 'fixed',
        left: '12px',
        right: '12px',
        bottom: '12px',
        zIndex: 170,
        height: '68px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(18, 18, 18, 0.85)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        display: 'flex',
        padding: '0 8px',
      }}>
        <Tab path="/" icon={(color) => <HomeIcon color={color} />} label="Home" onNavigate={(p) => router.push(p)} isActive={active('/')} />
        <Tab path="/services" icon={(color) => <ServicesIcon color={color} />} label="Services" onNavigate={(p) => router.push(p)} isActive={active('/services')} />
        <Tab path="/about" icon={(color) => <AboutIcon color={color} />} label="About" onNavigate={(p) => router.push(p)} isActive={active('/about')} />
        <Tab path="/contact" icon={(color) => <ContactIcon color={color} />} label="Contact Us" onNavigate={(p) => router.push(p)} isActive={active('/contact')} />
      </div>

      <div className="booking-bottom-nav-spacer" style={{ height: 'calc(62px + env(safe-area-inset-bottom))' }} />

      <style>{`
        .booking-bottom-nav .booking-tab-btn {
          color: #8a8f98 !important;
          opacity: 0.7 !important;
        }

        .booking-bottom-nav .booking-tab-btn.is-active {
          color: #f6b64e !important;
          opacity: 1 !important;
        }

        .booking-bottom-nav .booking-tab-btn .booking-tab-label {
          color: currentColor !important;
        }

        @media (min-width: 768px) {
          .booking-bottom-nav,
          .booking-bottom-nav-spacer {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
