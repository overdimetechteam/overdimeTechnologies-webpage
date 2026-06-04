import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#062230', color: 'rgba(255,255,255,0.8)' }}>
      {/* Gradient top border — blue → gold → blue signal bar */}
      <div style={{
        height: 3,
        background: 'linear-gradient(90deg, transparent 0%, #00B0ED 25%, #F4C95D 55%, #00B0ED 80%, transparent 100%)',
      }} />

      <div className="container" style={{ paddingTop: 60 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, paddingBottom: 52 }}>

          {/* Brand */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'rgba(255,255,255,0.76)',
              borderRadius: 100,
              padding: '8px 20px',
              marginBottom: 18,
            }}>
              <img
                src="/logo.png"
                alt="Overdime Technologies"
                style={{ height: 36, width: 'auto' }}
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.60)', maxWidth: 240 }}>
              Intelligent automation for enterprise growth. Serving medium and large enterprises across Sri Lanka and globally.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <SocialIcon href="#" label="LinkedIn"><Linkedin size={16} /></SocialIcon>
              <SocialIcon href="#" label="Twitter"><Twitter size={16} /></SocialIcon>
              <SocialIcon href="#" label="Facebook"><Facebook size={16} /></SocialIcon>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 14, fontWeight: 700, marginBottom: 18, letterSpacing: '0.04em' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                'Intelligent Process Automation',
                'AI Integrated Solutions',
                'Custom Web Applications',
                'ERP Solutions',
                'Digital Transformation',
              ].map(s => (
                <li key={s}>
                  <Link to="/solutions" style={linkStyle}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 14, fontWeight: 700, marginBottom: 18, letterSpacing: '0.04em' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Careers', to: '/careers' },
                { label: 'Contact', to: '/contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={linkStyle}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 14, fontWeight: 700, marginBottom: 18, letterSpacing: '0.04em' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <a href="mailto:info@overdimetechnologies.com" style={{ ...linkStyle, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Mail size={15} style={{ marginTop: 2, flexShrink: 0, color: '#00B0ED' }} />
                info@overdimetechnologies.com
              </a>
              <a href="tel:+94777751445" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={15} style={{ flexShrink: 0, color: '#00B0ED' }} />
                +94 777 751 445
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
                <MapPin size={15} style={{ marginTop: 2, flexShrink: 0, color: '#00B0ED' }} />
                <span>122 Stratford Avenue, Kirulapone, Colombo 06, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>
            © {new Date().getFullYear()} Overdime Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
            >Privacy Policy</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
            >Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 36, height: 36, borderRadius: 9,
        background: 'rgba(255,255,255,0.07)',
        color: 'rgba(255,255,255,0.60)',
        border: '1px solid rgba(255,255,255,0.09)',
        transition: 'all 0.22s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(244,201,93,0.15)'
        e.currentTarget.style.borderColor = 'rgba(244,201,93,0.35)'
        e.currentTarget.style.color = '#F4C95D'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.60)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </a>
  )
}

const linkStyle = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.58)',
  transition: 'color 0.2s ease',
  onMouseEnter: undefined,
}
