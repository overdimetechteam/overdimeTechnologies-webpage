import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0A2540', color: 'rgba(255,255,255,0.8)', paddingTop: 64 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Overdime Technologies" style={{ height: 44, marginBottom: 16, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: 240 }}>
              Intelligent automation for enterprise growth. Serving medium and large enterprises across Sri Lanka and globally.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <a href="#" aria-label="LinkedIn" style={iconStyle}><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" style={iconStyle}><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook" style={iconStyle}><Facebook size={18} /></a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Intelligent Process Automation', 'AI Integrated Solutions', 'Custom Web Applications', 'ERP Solutions', 'Digital Transformation'].map(s => (
                <li key={s}><Link to="/solutions" style={linkStyle}>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ label: 'About Us', to: '/about' }, { label: 'Case Studies', to: '/case-studies' }, { label: 'Careers', to: '/careers' }, { label: 'Contact', to: '/contact' }].map(l => (
                <li key={l.to}><Link to={l.to} style={linkStyle}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:info@overdimetechnologies.com" style={{ ...linkStyle, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Mail size={16} style={{ marginTop: 2, flexShrink: 0, color: '#00B0ED' }} />
                info@overdimetechnologies.com
              </a>
              <a href="tel:+94777751445" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} style={{ flexShrink: 0, color: '#00B0ED' }} />
                +94 777 751 445
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>
                <MapPin size={16} style={{ marginTop: 2, flexShrink: 0, color: '#00B0ED' }} />
                <span>122 Stratford Avenue, Kirulapone, Colombo 06, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
            © {new Date().getFullYear()} Overdime Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const iconStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: 36, height: 36, borderRadius: 8,
  background: 'rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.7)',
  transition: 'all 0.2s',
}

const linkStyle = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.65)',
  transition: 'color 0.2s',
}
