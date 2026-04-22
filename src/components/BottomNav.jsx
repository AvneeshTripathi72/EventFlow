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
  const iconColor = isActive ? '#91531a' : '#6b5640'

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
        gap: '3px',
        color: isActive ? '#91531a' : '#6b5640',
        padding: '8px 4px 4px',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        transition: 'transform 150ms ease, color 150ms ease, opacity 150ms ease',
        opacity: 1,
      }}
    >
      {icon(iconColor)}
      <span className="booking-tab-label" style={{ fontSize: '10px', fontWeight: isActive ? 700 : 600, letterSpacing: '0.01em' }}>{label}</span>
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
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 170,
        height: 'calc(62px + env(safe-area-inset-bottom))',
        paddingBottom: 'env(safe-area-inset-bottom)',
        borderTop: '1px solid rgba(24, 20, 16, 0.22)',
        background: 'linear-gradient(180deg, rgba(248, 242, 231, 0.98) 0%, rgba(241, 233, 217, 0.98) 100%)',
        boxShadow: '0 -8px 22px rgba(31, 23, 15, 0.08)',
        backdropFilter: 'blur(18px) saturate(120%)',
        WebkitBackdropFilter: 'blur(18px) saturate(120%)',
        display: 'flex',
      }}>
        <Tab path="/" icon={(color) => <HomeIcon color={color} />} label="Home" onNavigate={(p) => router.push(p)} isActive={active('/')} />
        <Tab path="/services" icon={(color) => <ServicesIcon color={color} />} label="Services" onNavigate={(p) => router.push(p)} isActive={active('/services')} />
        <Tab path="/about" icon={(color) => <AboutIcon color={color} />} label="About" onNavigate={(p) => router.push(p)} isActive={active('/about')} />
        <Tab path="/contact" icon={(color) => <ContactIcon color={color} />} label="Contact" onNavigate={(p) => router.push(p)} isActive={active('/contact')} />
      </div>

      <div className="booking-bottom-nav-spacer" style={{ height: 'calc(62px + env(safe-area-inset-bottom))' }} />

      <style>{`
        .booking-bottom-nav .booking-tab-btn {
          color: #6b5640 !important;
          opacity: 1 !important;
        }

        .booking-bottom-nav .booking-tab-btn.is-active {
          color: #91531a !important;
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
