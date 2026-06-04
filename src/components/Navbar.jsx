import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { asset } from '../utils/asset'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]  = useState(true)
  const lastY                  = useRef(0)
  const location               = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y < 60) {
        setVisible(true)
      } else if (y > lastY.current + 8) {
        setVisible(false)
        setOpen(false)
      } else if (y < lastY.current - 8) {
        setVisible(true)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setScrolled(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  /* ─── always-light pill — slightly more transparent before scroll ── */
  const bg     = scrolled ? 'rgba(255,255,255,0.76)' : 'rgba(255,255,255,0.58)'
  const border = '1px solid rgba(0,0,0,0.07)'
  const shadow = scrolled
    ? '0 6px 36px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)'
    : '0 4px 24px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)'

  return (
    <nav style={{
      position: 'fixed',
      /* Centre the pill horizontally */
      top: 14,
      left: '50%',
      /* Combine centering + show/hide into one transform */
      transform: visible
        ? 'translateX(-50%) translateY(0)'
        : 'translateX(-50%) translateY(-160%)',
      /* Pill width — full-minus-gutter up to max */
      width: 'min(1140px, calc(100% - 28px))',
      zIndex: 1000,
      borderRadius: 100,
      background: bg,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border,
      boxShadow: shadow,
      transition: 'background 0.35s ease, border 0.35s ease, box-shadow 0.35s ease, transform 0.38s cubic-bezier(0.34,1.28,0.64,1)',
    }}>

      {/* ── Inner row ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72, padding: '0 14px 0 10px',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, padding: '0 6px' }}>
          <img
            src={asset('logo.png')}
            alt="Overdime Technologies"
            style={{ height: 48, width: 'auto' }}
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="pill-nav-links">
          {links.map(l => {
            const isActive = location.pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  padding: '6px 14px',
                  borderRadius: 100,
                  fontWeight: 500,
                  fontSize: 14,
                  whiteSpace: 'nowrap',
                  transition: 'background 0.22s ease, color 0.22s ease',
                  /* Always dark text on white pill */
                  background: isActive ? 'rgba(244,201,93,0.15)' : 'transparent',
                  color:      isActive ? '#B8860B'              : '#374151',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* CTA — gold pill button, always consistent on white pill */}
        <Link
          to="/contact"
          className="pill-nav-links"
          style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '8px 22px', borderRadius: 100,
            fontWeight: 700, fontSize: 13,
            whiteSpace: 'nowrap',
            background: '#00B0ED',
            color: '#fff',
            boxShadow: '0 2px 12px rgba(0,176,237,0.35)',
            transition: 'all 0.22s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.92' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1' }}
        >
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px 10px', borderRadius: 100, display: 'none',
            transition: 'background 0.2s',
          }}
          className="pill-hamburger"
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          {open
            ? <X    size={20} color="#062230" />
            : <Menu size={20} color="#062230" />
          }
        </button>
      </div>

      {/* ── Mobile dropdown — floats as a rounded card below the pill ── */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0, right: 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 22,
          border: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
          padding: '10px 12px 14px',
          overflow: 'hidden',
        }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block',
                padding: '11px 14px',
                fontWeight: 500,
                fontSize: 15,
                color: location.pathname === l.to ? '#B8860B' : '#1F2937',
                borderRadius: 12,
                background: location.pathname === l.to ? 'rgba(244,201,93,0.12)' : 'transparent',
                marginBottom: 2,
                transition: 'background 0.18s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ height: 1, background: '#F3F4F6', margin: '8px 4px' }} />
          <Link
            to="/contact"
            style={{
              display: 'flex', justifyContent: 'center',
              padding: '11px 20px', borderRadius: 100,
              fontWeight: 700, fontSize: 14,
              background: '#00B0ED', color: '#fff',
              marginTop: 4,
              boxShadow: '0 2px 12px rgba(0,176,237,0.25)',
            }}
          >
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pill-nav-links { display: none !important; }
          .pill-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
