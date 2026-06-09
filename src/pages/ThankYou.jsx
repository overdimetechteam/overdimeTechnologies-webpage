import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp } from '../components/Animate'

export default function ThankYou() {
  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', background: '#F0F2F5', display: 'flex', alignItems: 'center', padding: '120px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <FadeUp>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(244,201,93,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                <CheckCircle size={44} color="#F4C95D" />
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 16 }}>Thank You!</h1>
              <p style={{ color: '#4B5563', fontSize: 18, lineHeight: 1.7, marginBottom: 12 }}>
                We've received your message and truly appreciate you reaching out.
              </p>
              <p style={{ color: '#4B5563', fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>
                Our team will review your inquiry and get back to you within 24 hours (usually much sooner).
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ background: '#fff', borderRadius: 20, padding: 40, marginBottom: 40, textAlign: 'left', boxShadow: '0 4px 24px rgba(10,37,64,0.08)' }}>
                <h3 style={{ fontSize: 20, marginBottom: 24, textAlign: 'center' }}>What Happens Next?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { step: '01', text: 'A member of our team will personally review your requirements.' },
                    { step: '02', text: "We'll reach out to schedule a convenient time to discuss your needs." },
                    { step: '03', text: "If you requested a consultation, we'll propose suitable time slots." },
                  ].map(item => (
                    <div key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #00B0ED, #062230)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, fontFamily: 'Plus Jakarta Sans', flexShrink: 0 }}>
                        {item.step}
                      </div>
                      <p style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.6, paddingTop: 6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div style={{ background: '#062230', borderRadius: 20, padding: 40, marginBottom: 40, textAlign: 'left' }}>
                <h3 style={{ color: '#fff', fontSize: 20, marginBottom: 24 }}>While You Wait, Feel Free to Explore</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Link to="/solutions" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.8)', fontSize: 15, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <ArrowRight size={16} color="#00B0ED" />
                    Our Solutions — Discover how we help organisations like yours
                  </Link>
                  <Link to="/case-studies" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.8)', fontSize: 15, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <ArrowRight size={16} color="#00B0ED" />
                    Our Work — See the impact we've delivered
                  </Link>
                  <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.8)', fontSize: 15, padding: '12px 0' }}>
                    <ArrowRight size={16} color="#00B0ED" />
                    About Us — Learn more about our philosophy and team
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 24 }}>
                We're excited about the possibility of working with you and helping your organisation achieve greater efficiency and growth through intelligent automation.
              </p>

              <div style={{ background: '#fff', borderRadius: 16, padding: 28, marginBottom: 32, boxShadow: '0 2px 12px rgba(10,37,64,0.06)' }}>
                <p style={{ color: '#062230', fontWeight: 600, fontSize: 15, marginBottom: 16 }}>Need to reach us sooner?</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+94772414208" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#FAF7F2', borderRadius: 10, color: '#062230', fontWeight: 600, fontSize: 14, border: '1px solid #E5E7EB' }}>
                    <Phone size={16} color="#00B0ED" /> +94 772 414 208
                  </a>
                  <a href="https://wa.me/94772414208" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#25D366', borderRadius: 10, color: '#fff', fontWeight: 600, fontSize: 14 }}>
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>

              <Link to="/" className="btn-gold" style={{ fontSize: 16 }}>
                Back to Homepage <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
