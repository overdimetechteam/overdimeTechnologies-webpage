import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { FadeUp, SlideLeft, SlideRight } from '../components/Animate'
import AnimatedPageHero from '../components/AnimatedPageHero'

const services = ['Intelligent Process Automation', 'AI Integrated Solutions', 'Custom Web Applications', 'ERP Solutions', 'Digital Transformation Consultancy', 'Resource Augmentation', 'General Inquiry']

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitting(false)
    navigate('/thank-you')
  }

  const field = (key, label, type = 'text', placeholder = '') => (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', fontWeight: 600, color: '#0A2540', fontSize: 14, marginBottom: 6 }}>{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '12px 16px', border: errors[key] ? '2px solid #ef4444' : '1px solid #E5E7EB',
          borderRadius: 10, fontSize: 15, color: '#1F2937', background: '#fff',
          outline: 'none', transition: 'border 0.2s', fontFamily: 'Inter',
        }}
      />
      {errors[key] && <div style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{errors[key]}</div>}
    </div>
  )

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <AnimatedPageHero>
          <span className="section-label">Contact</span>
          <h1>Let's Start a Conversation</h1>
          <p>Whether you're exploring automation opportunities, need a custom solution, or simply want to understand how we can help your organisation — we'd love to hear from you.</p>
          <a href="#form" className="btn-primary" style={{ fontSize: 16 }}>
            Schedule a Free Consultation <ArrowRight size={16} />
          </a>
        </AnimatedPageHero>

        <section className="section" style={{ background: '#F0F2F5' }} id="form">
          <div className="container">
            <div className="grid-2" style={{ gap: 64, alignItems: 'flex-start' }}>
              {/* Form */}
              <SlideLeft>
                <div className="form-card">
                  <h2 style={{ fontSize: 28, marginBottom: 8 }}>Get In Touch</h2>
                  <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 32 }}>Fill out the form and our team will get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid-2" style={{ gap: 16 }}>
                      <div>{field('name', 'Full Name *', 'text', 'John Smith')}</div>
                      <div>{field('company', 'Company Name *', 'text', 'Your Company')}</div>
                    </div>
                    <div className="grid-2" style={{ gap: 16 }}>
                      <div>{field('email', 'Email Address *', 'email', 'john@company.com')}</div>
                      <div>{field('phone', 'Phone Number', 'tel', '+94 xxx xxx xxx')}</div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={{ display: 'block', fontWeight: 600, color: '#0A2540', fontSize: 14, marginBottom: 6 }}>How Can We Help You?</label>
                      <select
                        value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 15, color: '#1F2937', background: '#fff', outline: 'none', fontFamily: 'Inter' }}
                      >
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: 'block', fontWeight: 600, color: '#0A2540', fontSize: 14, marginBottom: 6 }}>Message / Project Details</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        rows={5}
                        placeholder="Tell us about your project, challenges, or questions..."
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 15, color: '#1F2937', background: '#fff', outline: 'none', resize: 'vertical', fontFamily: 'Inter', lineHeight: 1.6 }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <button type="submit" className="btn-gold" style={{ flex: 1, justifyContent: 'center', fontSize: 16, opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
                        {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <a href="mailto:info@overdimetechnologies.com?subject=Quote Request" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: 16 }}>
                        Request a Quote
                      </a>
                    </div>
                  </form>
                </div>
              </SlideLeft>

              {/* Contact Info */}
              <SlideRight>
                <div>
                  <h2 style={{ fontSize: 28, marginBottom: 8 }}>Contact Information</h2>
                  <p style={{ color: '#4B5563', fontSize: 15, marginBottom: 36 }}>Reach out directly or find us through any of the channels below.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                    <ContactItem icon={<Mail size={20} color="#00B0ED" />} label="Email" value="info@overdimetechnologies.com" href="mailto:info@overdimetechnologies.com" />
                    <ContactItem icon={<Phone size={20} color="#00B0ED" />} label="Phone" value="+94 777 751 445" href="tel:+94777751445" />
                    <ContactItem icon={<MapPin size={20} color="#00B0ED" />} label="Address" value="122 Stratford Avenue, Kirulapone, Colombo 06, Sri Lanka" />
                    <ContactItem icon={<Clock size={20} color="#00B0ED" />} label="Business Hours" value="Monday to Friday, 9:00 AM – 6:00 PM (Sri Lanka Time, UTC+5:30)" note="Flexible for international clients across time zones." />
                  </div>

                  <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 32 }}>
                    <h4 style={{ fontSize: 16, marginBottom: 16 }}>Additional Ways to Connect</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <a href="https://wa.me/94777751445" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: '#25D366', color: '#fff', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                        <MessageCircle size={20} />
                        WhatsApp — Chat with Us Now
                      </a>
                      <a href="/contact" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: '#0A2540', color: '#fff', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                        <Calendar size={20} />
                        Schedule a Call
                      </a>
                    </div>
                  </div>

                  <div style={{ marginTop: 32, borderRadius: 16, overflow: 'hidden', height: 'clamp(160px, 25vw, 220px)', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: 14 }}>
                    <div style={{ textAlign: 'center' }}>
                      <MapPin size={32} color="#9CA3AF" style={{ marginBottom: 8 }} />
                      <div>122 Stratford Avenue, Kirulapone</div>
                      <div>Colombo 06, Sri Lanka</div>
                    </div>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        <FadeUp>
          <div className="cta-banner">
            <div className="container">
              <h2>Ready to Transform Your Operations?</h2>
              <p>Our team is here to help you identify the right intelligent solutions for your business.</p>
              <div className="btn-group">
                <a href="#form" className="btn-gold">Schedule a Free Consultation</a>
                <a href="mailto:info@overdimetechnologies.com?subject=Quote Request" className="btn-outline-white">Request a Quote</a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </PageTransition>
  )
}

function ContactItem({ icon, label, value, href, note }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 20, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(10,37,64,0.05)' }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,176,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 600, color: '#0A2540', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>
        {href ? (
          <a href={href} style={{ color: '#1F2937', fontSize: 15, textDecoration: 'none' }}>{value}</a>
        ) : (
          <div style={{ color: '#1F2937', fontSize: 15 }}>{value}</div>
        )}
        {note && <div style={{ color: '#4B5563', fontSize: 13, marginTop: 4 }}>{note}</div>}
      </div>
    </div>
  )
}
