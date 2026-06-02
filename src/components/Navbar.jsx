import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 2px 20px rgba(10,37,64,0.1)' : '0 1px 0 rgba(10,37,64,0.06)',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Overdime Technologies" style={{ height: 44, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                padding: '8px 14px',
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 15,
                color: location.pathname === l.to ? '#00B0ED' : '#1F2937',
                background: location.pathname === l.to ? 'rgba(0,176,237,0.08)' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ marginLeft: 12, padding: '10px 22px', fontSize: 14 }}>
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
          {open ? <X size={24} color="#0A2540" /> : <Menu size={24} color="#0A2540" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid #E5E7EB',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'block',
                padding: '12px 0',
                fontWeight: 500,
                fontSize: 16,
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
