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
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Smoothly ramp from 0→1 over the first 160px of scroll
      setProgress(Math.min(y / 160, 1))
      if (y < 80) {
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
    setProgress(0)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const scrolled = progress > 0.5

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled
        ? 'rgba(10, 37, 64, 0.82)'
        : 'linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 100%)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.25)' : 'none',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'background 0.4s ease, box-shadow 0.3s ease, transform 0.35s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 100 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={asset('logo.png')} alt="Overdime Technologies" style={{ height: 72, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {links.map(l => {
            const isActive = location.pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 15,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.82)',
                  background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                  transition: 'color 0.2s ease, background 0.2s ease',
                }}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            to="/contact"
            className="btn-outline-white"
            style={{ marginLeft: 12, padding: '10px 22px', fontSize: 14 }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', padding: 8, display: 'none' }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #E5E7EB', padding: '16px 24px 24px' }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block', padding: '12px 0', fontWeight: 500, fontSize: 16,
                color: location.pathname === l.to ? '#00B0ED' : '#1F2937',
                borderBottom: '1px solid #F3F4F6',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ marginTop: 16, justifyContent: 'center', width: '100%' }}>
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
